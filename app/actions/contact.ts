"use server";

import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getTurnstileSecretKey } from "@/lib/turnstile";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";
import { headers } from "next/headers";

type SubmitInput = ContactFormData & { turnstileToken: string };
type SubmitResult = { success: true } | { success: false; error: string };

// Lazy singletons — initialized on first call, not at module load.
// This prevents the Node.js process from crashing at startup when
// env vars (UPSTASH_*, RESEND_API_KEY) are not yet injected (e.g. Hostinger).
let _resend: Resend | null = null;
let _ratelimit: Ratelimit | null = null;

function getResend(): Resend {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

function getRatelimit(): Ratelimit {
  if (!_ratelimit) {
    _ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, "1 h"),
      prefix: "nabuk:contact",
    });
  }
  return _ratelimit;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = getTurnstileSecretKey();
  if (!secret) return false;
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret,
          response: token,
        }),
      }
    );
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch (err) {
    // Cloudflare siteverify unreachable — fail closed (block submission)
    console.error("[contact] Turnstile verification error:", err);
    return false;
  }
}

export async function submitContactForm(
  input: SubmitInput
): Promise<SubmitResult> {
  // 1. Validate form fields with Zod
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, error: "Invalid form data. Please check your entries." };
  }

  // 2. Verify Cloudflare Turnstile token
  if (!input.turnstileToken) {
    return { success: false, error: "Please complete the security check." };
  }
  const turnstileOk = await verifyTurnstile(input.turnstileToken);
  if (!turnstileOk) {
    return { success: false, error: "Security check failed. Please refresh and try again." };
  }

  // 3. Rate-limit by IP (5 submissions per hour)
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anonymous";
  let rateLimitAllowed = true;
  try {
    const { success } = await getRatelimit().limit(ip);
    rateLimitAllowed = success;
  } catch (err) {
    // Upstash unreachable — fail open so a Redis outage never blocks all submissions
    console.error("[contact] Rate-limit check failed (failing open):", err);
  }
  if (!rateLimitAllowed) {
    return {
      success: false,
      error: "Too many enquiries from your connection. Please try again later.",
    };
  }

  const { name, clinic, email, phone, message } = parsed.data;

  // 4. Insert into Supabase (service-role key bypasses RLS; table has no public policies)
  const supabase = createServerSupabaseClient();
  const { error: dbError } = await supabase.from("contact_messages").insert({
    name,
    clinic: clinic ?? null,
    email,
    phone: phone ?? null,
    message,
  });
  if (dbError) {
    console.error("[contact] Supabase insert error:", dbError.code, dbError.message, dbError.hint ?? "");
    if (dbError.code === "PGRST205") {
      return {
        success: false,
        error:
          "Database setup is incomplete: the public.contact_messages table is missing. Run the SQL from database-schema.md in Supabase, then refresh the project cache.",
      };
    }
    return {
      success: false,
      error: "We couldn't save your enquiry. Please email us directly.",
    };
  }

  // 5. Send notification email via Resend
  const notifyTo =
    process.env.NOTIFICATION_EMAIL ?? "info@nabukmalta.com";
  const { error: emailError } = await getResend().emails.send({
    from: "Nabuk Website <noreply@nabukmalta.com>",
    to: notifyTo,
    subject: `New consultation request — ${name}`,
    html: `
      <table style="font-family:sans-serif;font-size:15px;color:#084c61;max-width:580px;">
        <tr><td style="padding:0 0 8px"><strong>Name:</strong> ${escapeHtml(name)}</td></tr>
        <tr><td style="padding:0 0 8px"><strong>Clinic:</strong> ${clinic ? escapeHtml(clinic) : "—"}</td></tr>
        <tr><td style="padding:0 0 8px"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:0 0 16px"><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "—"}</td></tr>
        <tr><td style="border-top:1px solid #cfe8ee;padding:16px 0 0;white-space:pre-wrap">${escapeHtml(message)}</td></tr>
      </table>
    `,
  });
  if (emailError) {
    // Non-fatal: message is saved; log and continue
    console.error("[contact] Resend error:", emailError.message);
  }

  return { success: true };
}
