import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { localBusinessSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Contact Nabuk Distributors Malta to request a consultation on veterinary equipment and diagnostics for your clinic. We serve practices across Malta and Gozo.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Request a Consultation | Nabuk Distributors Malta",
    description:
      "Tell us about your clinic and what you're looking to achieve. We'll get back to you with expert advice on veterinary equipment and diagnostics.",
    type: "website",
  },
};

const PAW_PATH =
  "M11.35 3.836c-.065.21-.1.433-.1.664 0 1.21.847 2.193 1.892 2.193.025 0 .05 0 .074-.002.297.165.534.405.708.682.49.802.81 1.825.61 2.7-.205.91-.864 1.4-1.62 1.4-.756 0-1.418-.49-1.62-1.4-.2-.875.12-1.898.61-2.7.174-.277.41-.517.708-.682.025.002.05.002.074.002 1.045 0 1.892-.983 1.892-2.193 0-.23-.035-.453-.1-.664-.165-.55-.5-.997-.93-1.27a2.06 2.06 0 0 0-2.092 0c-.43.273-.766.72-.93 1.27zM4.5 8.5c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm12 0c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm-9 4c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm6 0c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zM7.5 18a4.5 4.5 0 0 1 9 0c0 1.5-1 2.5-2.5 2.5h-4C8.5 20.5 7.5 19.5 7.5 18z";

export default function ContactPage() {
  return (
    <>
      {/* LocalBusiness JSON-LD on the contact page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      {/* Page hero */}
      <div className="page-hero">
        <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.04)" width={140} height={140}
          className="page-hero-paw" style={{ top: "-10px", right: "60px", transform: "rotate(18deg)" }}
          aria-hidden="true">
          <path d={PAW_PATH} />
        </svg>
        <div className="page-hero-inner">
          <div className="page-hero-divider" />
          <h1>Request a Consultation</h1>
          <p className="page-hero-sub">
            Tell us about your clinic and what you&apos;re looking to achieve. We&apos;ll get back to you with expert advice.
          </p>
        </div>
      </div>

      {/* Content */}
      <main id="main-content" className="page-content">
        <div className="contact-layout">

          {/* LEFT — Form */}
          <section aria-label="Consultation form">
            <div style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 10px 40px -15px rgba(15,39,48,0.18)",
            }}>
              <h2 style={{
                fontFamily: "var(--font-archivo-black, 'Archivo Black')",
                fontSize: "22px",
                color: "var(--navy)",
                letterSpacing: "-0.2px",
                marginBottom: "8px",
              }}>
                Get in Touch
              </h2>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "28px", lineHeight: 1.6 }}>
                Fields marked with * are required. We aim to respond within one business day.
              </p>

              {/* ContactForm is a Client Component — handles validation, submission, and states */}
              <ContactForm />
            </div>
          </section>

          {/* RIGHT — Contact details */}
          {/* PLACEHOLDER: phone +356 2100 0000 and email info@nabukmalta.com are dummy — replace before launch */}
          <aside aria-label="Contact details">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Contact items */}
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+356 2100 0000",
                  sub: "Call us today",
                  href: "tel:+35621000000",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@nabukmalta.com",
                  sub: "We respond within one business day",
                  href: "mailto:info@nabukmalta.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Malta & Gozo",
                  sub: "Serving veterinary clinics across both islands",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, sub, href }) => (
                <div key={label} style={{
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 6px 24px -10px rgba(15,39,48,0.14)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: "var(--teal)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }} aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>
                      {label}
                    </p>
                    {href ? (
                      <a href={href} style={{ fontSize: "16px", fontWeight: 700, color: "var(--navy)", textDecoration: "none", display: "block", marginBottom: "4px" }}>
                        {value}
                      </a>
                    ) : (
                      <p style={{ fontSize: "16px", fontWeight: 700, color: "var(--navy)", marginBottom: "4px" }}>
                        {value}
                      </p>
                    )}
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{sub}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder — replace with real embed before launch */}
              <div style={{
                borderRadius: "16px",
                overflow: "hidden",
                height: "200px",
                background: "rgba(26,58,74,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px dashed rgba(26,58,74,0.12)",
                flexDirection: "column",
                gap: "8px",
              }}>
                <MapPin size={32} style={{ color: "var(--teal)", opacity: 0.5 }} aria-hidden="true" />
                <p style={{ fontSize: "13px", color: "var(--muted)", textAlign: "center" }}>
                  Map embed placeholder<br />
                  <span style={{ fontSize: "11px", opacity: 0.7 }}>Replace with Google Maps embed before launch</span>
                </p>
              </div>

              {/* Reassurance note */}
              <div style={{
                background: "var(--teal-dark)",
                borderRadius: "16px",
                padding: "24px",
                color: "#fff",
                position: "relative",
                overflow: "hidden",
              }}>
                <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.06)" width={80} height={80}
                  style={{ position: "absolute", right: "-10px", bottom: "-15px", pointerEvents: "none" }}
                  aria-hidden="true">
                  <path d={PAW_PATH} />
                </svg>
                <p style={{
                  fontFamily: "var(--font-archivo-black, 'Archivo Black')",
                  fontSize: "16px",
                  lineHeight: 1.3,
                  marginBottom: "8px",
                }}>
                  Nearly thirty years serving Maltese veterinary clinics.
                </p>
                <p style={{ fontSize: "13px", opacity: 0.8, lineHeight: 1.55 }}>
                  We are based in Malta and understand the specific needs of practices on the island. Every enquiry is handled personally.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
