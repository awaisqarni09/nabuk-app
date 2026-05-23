"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const STORAGE_KEY = "nabuk_cookie_consent";
type Consent = "accepted" | "declined" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY) as Consent;
    if (stored) {
      setConsent(stored);
      return;
    }
    // Slight delay so the banner doesn't flash on first paint
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setConsent("declined");
    setVisible(false);
  };

  return (
    <>
      {/* Vercel Analytics — only after mount + consent to avoid hydration mismatch */}
      {mounted && consent === "accepted" && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}

      {/* Cookie banner */}
      {visible && consent === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          style={{
            position: "fixed",
            bottom: "24px",
            left: "24px",
            right: "24px",
            maxWidth: "480px",
            zIndex: 9999,
            background: "var(--navy-dark)",
            color: "#fff",
            borderRadius: "16px",
            padding: "24px 28px",
            boxShadow: "0 16px 48px -12px rgba(0,0,0,0.45)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div>
            <p style={{ fontWeight: 700, fontSize: "15px", marginBottom: "6px" }}>
              We use cookies
            </p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.55 }}>
              We use analytics cookies to understand how visitors use this site.
              No personal data is sold or shared with third parties.
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              onClick={handleAccept}
              style={{
                background: "var(--teal)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background 0.15s",
              }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "var(--teal-dark)")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "var(--teal)")
              }
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "border-color 0.15s, color 0.15s",
              }}
              onMouseOver={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.borderColor = "rgba(255,255,255,0.5)";
                b.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.borderColor = "rgba(255,255,255,0.25)";
                b.style.color = "rgba(255,255,255,0.7)";
              }}
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
