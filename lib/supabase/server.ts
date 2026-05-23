import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database.types";

export function createServerSupabaseClient() {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const rawKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!rawUrl || !rawKey) {
    throw new Error(
      "Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY"
    );
  }
  const url = rawUrl.trim().replace(/\/$/, "");
  const key = rawKey.trim();
  return createClient<Database>(url, key, {
    auth: { persistSession: false },
  });
}
