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
            <circle cx="14" cy="14" r="14" fill="var(--teal)" />
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

        .contact-form { display: flex; flex-direction: column; gap: 20px; }
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .field-group { display: flex; flex-direction: column; gap: 6px; }
        .field-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--navy);
          letter-spacing: 0.2px;
        }
        .field-optional { font-weight: 500; color: var(--muted); }
        .field-input {
          width: 100%;
          padding: 12px 14px;
          border: 2px solid rgba(26,58,74,0.12);
          border-radius: 10px;
          font-family: var(--font-manrope, 'Manrope'), sans-serif;
          font-size: 15px;
          color: var(--navy);
          background: #fff;
          transition: border-color 0.15s, box-shadow 0.15s;
          outline: none;
        }
        .field-input:focus {
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(43,107,107,0.12);
        }
        .field-input--error {
          border-color: var(--red);
        }
        .field-input--error:focus {
          box-shadow: 0 0 0 3px rgba(230,57,70,0.12);
        }
        .field-textarea { resize: vertical; min-height: 120px; }
        .field-error {
          font-size: 12px;
          color: var(--red);
          font-weight: 600;
        }
        .form-server-error {
          padding: 14px 16px;
          background: rgba(230,57,70,0.08);
          border: 1px solid rgba(230,57,70,0.2);
          border-radius: 10px;
          color: var(--red);
          font-size: 14px;
          font-weight: 600;
        }
        .form-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--teal);
          color: #fff;
          font-family: var(--font-manrope, 'Manrope'), sans-serif;
          font-size: 16px;
          font-weight: 700;
          padding: 15px 28px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          letter-spacing: 0.2px;
          box-shadow: 0 6px 20px -6px rgba(31,78,78,0.4);
          transition: background 0.15s, transform 0.15s, box-shadow 0.15s;
        }
        .form-submit:hover:not(:disabled) {
          background: var(--teal-dark);
          transform: translateY(-1px);
          box-shadow: 0 10px 28px -8px rgba(31,78,78,0.4);
        }
        .form-submit:active:not(:disabled) { transform: translateY(0); }
        .form-submit:disabled { opacity: 0.7; cursor: not-allowed; }
        .form-submit:focus-visible { outline: 3px solid var(--teal); outline-offset: 3px; }

        .form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          padding: 40px 24px;
        }
        .form-success h3 {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 22px;
          color: var(--navy);
        }
        .form-success p { font-size: 15px; color: var(--muted); }

        @media (max-width: 520px) {
          .form-row-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </form>
  );
}
