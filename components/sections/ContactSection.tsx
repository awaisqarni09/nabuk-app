import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { ContactForm } from "@/app/(pages)/contact/ContactForm";

export function ContactSection() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
<div className="page-hero-inner">
          <div className="page-hero-divider" />
          <h1>Request a Consultation</h1>
          <p className="page-hero-sub">
            Tell us about your clinic and what you&apos;re looking to achieve. We&apos;ll get back to you with expert advice.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="page-content">
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
                  value: "+356 2149 2190",
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
      </div>

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
