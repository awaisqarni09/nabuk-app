"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { submitContactForm } from "@/app/actions/contact";
import { getTurnstileSiteKey, shouldUseTestTurnstileKeys } from "@/lib/turnstile";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileSiteKey = getTurnstileSiteKey();
  const turnstileTestMode = shouldUseTestTurnstileKeys();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileToken) {
      setServerError("Please complete the security check.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setServerError(null);
    try {
      const result = await submitContactForm({ ...data, turnstileToken });
      if (!result.success) {
        setServerError(result.error);
        setStatus("error");
        return;
      }
      setStatus("success");
      reset();
      setTurnstileToken(null);
    } catch {
      setServerError("Something went wrong. Please try again or email us directly.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-success" role="alert">
        <div className="form-success-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="14" fill="var(--eucalyptus)" />
            <path d="M8 14l4.5 4.5L20 9.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Thank you for reaching out.</h3>
        <p>We&apos;ve received your enquiry and will be in touch shortly.</p>
      </div>
    );
  }

  const busy = isSubmitting || status === "submitting";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="contact-form" aria-label="Consultation request form">
      <div className="form-row-2">
        {/* Name */}
        <div className="field-group">
          <label htmlFor="name" className="field-label">
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={`field-input ${errors.name ? "field-input--error" : ""}`}
            placeholder="Jane Smith"
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <span id="name-error" className="field-error" role="alert">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Clinic */}
        <div className="field-group">
          <label htmlFor="clinic" className="field-label">
            Clinic name <span className="field-optional">(optional)</span>
          </label>
          <input
            id="clinic"
            type="text"
            autoComplete="organization"
            className="field-input"
            placeholder="Your Veterinary Practice"
            {...register("clinic")}
          />
        </div>
      </div>

      <div className="form-row-2">
        {/* Email */}
        <div className="field-group">
          <label htmlFor="email" className="field-label">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={`field-input ${errors.email ? "field-input--error" : ""}`}
            placeholder="jane@yourpractice.com"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <span id="email-error" className="field-error" role="alert">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Phone */}
        <div className="field-group">
          <label htmlFor="phone" className="field-label">
            Phone <span className="field-optional">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="field-input"
            placeholder="+356 XXXX XXXX"
            {...register("phone")}
          />
        </div>
      </div>

      {/* Message */}
      <div className="field-group">
        <label htmlFor="message" className="field-label">
          How can we help? <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`field-input field-textarea ${errors.message ? "field-input--error" : ""}`}
          placeholder="Tell us about your clinic and what you're looking to achieve..."
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <span id="message-error" className="field-error" role="alert">
            {errors.message.message}
          </span>
        )}
      </div>

      {/* Cloudflare Turnstile */}
      {turnstileSiteKey ? (
        <Turnstile
          siteKey={turnstileSiteKey}
          onSuccess={setTurnstileToken}
          onError={() => {
            setTurnstileToken(null);
            setServerError(
              turnstileTestMode
                ? "Security verification could not load in local development. Use the Turnstile test keys or check your local env file."
                : "Security verification could not load. Check that the Turnstile site key is allowed for this domain in Cloudflare."
            );
            setStatus("error");
          }}
          onExpire={() => setTurnstileToken(null)}
        />
      ) : (
        <div className="form-server-error" role="alert">
          Turnstile is not configured. Add NEXT_PUBLIC_TURNSTILE_SITE_KEY to your environment variables.
        </div>
      )}

      {/* Server error */}
      {status === "error" && serverError && (
        <div className="form-server-error" role="alert">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={busy || !turnstileToken}
        className="form-submit"
        aria-disabled={busy || !turnstileToken}
      >
        {busy ? (
          <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
              style={{ animation: "spin 0.8s linear infinite" }}>
              <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <path d="M8 2a6 6 0 0 1 6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Sending…
          </>
        ) : (
          "Send Enquiry"
        )}
      </button>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

        .contact-form { display: flex; flex-direction: column; gap: 22px; }
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .field-group { display: flex; flex-direction: column; gap: 6px; }
        .field-label {
          font: 500 10px/1.2 var(--font-utility);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink);
        }
        .field-optional { text-transform: none; letter-spacing: 0.06em; opacity: 0.55; }
        .field-input {
          width: 100%;
          padding: 13px 0;
          border: 0;
          border-bottom: 1px solid rgba(16,47,54,0.28);
          border-radius: 0;
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--ink);
          background: transparent;
          transition: border-color 0.2s ease;
          outline: none;
        }
        .field-input::placeholder { color: rgba(16,47,54,0.35); }
        .field-input:focus { border-color: var(--ember); }
        .field-input--error { border-color: var(--ember); border-bottom-width: 2px; }
        .field-textarea { resize: vertical; min-height: 120px; }
        .field-error {
          font-size: 12px;
          color: var(--ember);
          font-weight: 600;
        }
        .form-server-error {
          padding: 14px 18px;
          background: rgba(217,95,75,0.09);
          border: 1px solid rgba(217,95,75,0.35);
          color: var(--ember);
          font-size: 14px;
          font-weight: 600;
        }
        .form-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 54px;
          background: var(--ink);
          color: #fff;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          padding: 0 30px;
          border: 1px solid var(--ink);
          border-radius: 100px;
          cursor: pointer;
          letter-spacing: 0.04em;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }
        .form-submit:hover:not(:disabled) {
          background: var(--ink-deep);
          border-color: var(--ink-deep);
          transform: translateY(-2px);
        }
        .form-submit:active:not(:disabled) { transform: translateY(0); }
        .form-submit:disabled { opacity: 0.55; cursor: not-allowed; }
        .form-submit:focus-visible { outline: 3px solid var(--ember); outline-offset: 4px; }

        .form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          padding: 40px 24px;
        }
        .form-success h3 {
          margin: 0;
          font: 500 30px/1.1 var(--font-display);
          letter-spacing: -0.03em;
          color: var(--ink);
        }
        .form-success p { font-size: 15px; color: rgba(16,47,54,0.65); }

        @media (max-width: 520px) {
          .form-row-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </form>
  );
}
