"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const STORAGE_KEY = "nabuk_cookie_consent";
type Consent = "accepted" | "declined" | null;

// localStorage never changes behind our back within a session (the buttons
// below are the only writers), so subscribing is a no-op; the server
// snapshot is null so SSR/hydration render no banner and no analytics.
const subscribe = () => () => {};
const getStoredConsent = () =>
  localStorage.getItem(STORAGE_KEY) as Consent;
const getServerConsent = (): Consent => null;

export function CookieConsent() {
  const stored = useSyncExternalStore(subscribe, getStoredConsent, getServerConsent);
  const [choice, setChoice] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);
  const consent = choice ?? stored;

  // Slight delay so the banner doesn't flash on first paint
  useEffect(() => {
    if (consent) return;
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, [consent]);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setChoice("accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setChoice("declined");
    setVisible(false);
  };

  return (
    <>
      {/* Vercel Analytics — the server consent snapshot is null, so this
          never renders during SSR or hydration and cannot mismatch. */}
      {consent === "accepted" && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}

      {/* Cookie banner */}
      {visible && consent === null && (
        <div role="dialog" aria-live="polite" aria-label="Cookie consent" className="cookie-editorial">
          <strong>A small note on cookies.</strong>
          <p>We use analytics cookies to understand how the site is used. Personal data is never sold.</p>
          <div className="cookie-actions">
            <button type="button" onClick={handleAccept} className="cookie-action cookie-action--primary">Accept analytics</button>
            <button type="button" onClick={handleDecline} className="cookie-action">Decline</button>
          </div>
        </div>
      )}
    </>
  );
}
