import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Nabuk Distributors Ltd. is a specialist partner to the veterinary profession in Malta — focused exclusively on advanced clinical equipment, diagnostics and infrastructure.",
  alternates: { canonical: "/who-we-are" },
  openGraph: {
    title: "Who We Are | Nabuk Distributors Malta",
    description:
      "A specialist partner to the veterinary profession in Malta, focused on advanced clinical equipment, diagnostics and infrastructure for modern veterinary practice.",
    type: "website",
  },
};

const PAW_PATH =
  "M11.35 3.836c-.065.21-.1.433-.1.664 0 1.21.847 2.193 1.892 2.193.025 0 .05 0 .074-.002.297.165.534.405.708.682.49.802.81 1.825.61 2.7-.205.91-.864 1.4-1.62 1.4-.756 0-1.418-.49-1.62-1.4-.2-.875.12-1.898.61-2.7.174-.277.41-.517.708-.682.025.002.05.002.074.002 1.045 0 1.892-.983 1.892-2.193 0-.23-.035-.453-.1-.664-.165-.55-.5-.997-.93-1.27a2.06 2.06 0 0 0-2.092 0c-.43.273-.766.72-.93 1.27zM4.5 8.5c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm12 0c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm-9 4c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm6 0c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zM7.5 18a4.5 4.5 0 0 1 9 0c0 1.5-1 2.5-2.5 2.5h-4C8.5 20.5 7.5 19.5 7.5 18z";

// PLACEHOLDER: copy in this section is professionally-toned but invented — replace with client-approved copy before launch
const pillars = [
  {
    title: "Competence",
    body: "Deep, specialised knowledge of veterinary diagnostics and clinical technology — built over nearly three decades of hands-on partnership with Maltese veterinary clinics.",
    accent: "var(--teal)",
  },
  {
    title: "Trust",
    body: "Long-term relationships with clinics built over nearly three decades. We are known by the profession not as a vendor, but as a partner.",
    accent: "var(--navy)",
  },
  {
    title: "Longevity",
    body: "A stable, established partner the profession can rely on — through changes in technology, suppliers, and the practice of veterinary medicine itself.",
    accent: "var(--red)",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.04)" width={160} height={160}
          className="page-hero-paw" style={{ top: "-20px", right: "60px", transform: "rotate(20deg)" }}
          aria-hidden="true">
          <path d={PAW_PATH} />
        </svg>
        <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.03)" width={100} height={100}
          className="page-hero-paw" style={{ bottom: "-10px", left: "30px", transform: "rotate(-10deg)" }}
          aria-hidden="true">
          <path d={PAW_PATH} />
        </svg>
        <div className="page-hero-inner">
          <div className="page-hero-divider" />
          <h1>Who We Are</h1>
          <p className="page-hero-sub">
            A specialist partner to the veterinary profession in Malta — focused exclusively on advanced clinical equipment, diagnostics and infrastructure.
          </p>
        </div>
      </div>

      {/* Content */}
      <main id="main-content" className="page-content">

        {/* Intro */}
        <section aria-label="Introduction" style={{ marginBottom: "60px", maxWidth: "760px" }}>
          <p style={{ fontSize: "20px", color: "var(--navy)", lineHeight: 1.65, fontWeight: 500 }}>
            Nabuk Distributors Ltd. is a specialist partner to the veterinary profession in Malta,
            focused exclusively on advanced clinical equipment, diagnostics and infrastructure for
            modern veterinary practice.
          </p>
        </section>

        {/* Image + philosophy grid */}
        <section
          aria-label="Our philosophy"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
            marginBottom: "64px",
          }}
          className="who-we-are-grid"
        >
          {/* Image — PLACEHOLDER: swap for real clinic/team photo */}
          <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 25px 50px -15px rgba(15,39,48,0.2)", position: "relative", height: "400px" }}>
            <Image
              src="https://placehold.co/800x500/1a3a4a/e8f4f4?text=Clinic+%2F+Team+Photo"
              alt="Nabuk Distributors team and clinic — placeholder image"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Quote block */}
          <div>
            <blockquote style={{
              borderLeft: "4px solid var(--teal)",
              paddingLeft: "28px",
              marginBottom: "32px",
            }}>
              <p style={{
                fontFamily: "var(--font-archivo-black, 'Archivo Black')",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                color: "var(--navy)",
                lineHeight: 1.2,
                letterSpacing: "-0.3px",
              }}>
                &ldquo;We measure our success by the standard of care our partner clinics are able to provide.&rdquo;
              </p>
            </blockquote>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.65 }}>
              Our work is shaped by a simple conviction: that veterinary professionals in Malta deserve access to the same clinical technologies as their counterparts anywhere in Europe — and the support to use them well.
            </p>
          </div>
        </section>

        {/* Three philosophy pillars */}
        <section aria-label="Our three pillars">
          <h2 style={{
            fontFamily: "var(--font-archivo-black, 'Archivo Black')",
            fontSize: "clamp(24px, 3vw, 36px)",
            color: "var(--navy)",
            letterSpacing: "-0.5px",
            marginBottom: "32px",
          }}>
            How We Work
          </h2>
          <div className="pillars-grid">
            {pillars.map((p) => (
              <div key={p.title} className="nabuk-card pillar-card">
                <div style={{ width: "40px", height: "4px", background: p.accent, borderRadius: "2px", marginBottom: "20px" }} />
                <h3 style={{
                  fontFamily: "var(--font-archivo-black, 'Archivo Black')",
                  fontSize: "22px",
                  color: "var(--navy)",
                  marginBottom: "12px",
                  letterSpacing: "-0.2px",
                }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.65 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Call to action" style={{ marginTop: "64px" }} className="page-cta-band">
          <h2>Work with a partner who understands your clinic&apos;s needs.</h2>
          <Link href="/contact" className="btn-primary">
            Request a Consultation
          </Link>
        </section>
      </main>

      <style>{`
        .who-we-are-grid { }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .pillar-card { padding: 32px; }

        @media (max-width: 900px) {
          .who-we-are-grid { grid-template-columns: 1fr !important; }
          .pillars-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
