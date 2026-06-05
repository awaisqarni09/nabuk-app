import Image from "next/image";
import Link from "next/link";
import { Globe, ShieldCheck, MapPin, Clock, Award, Users, TrendingUp } from "lucide-react";

// PLACEHOLDER: logo images are dummy placehold.co — replace with real partner logos before launch
const partners = [
  {
    name: "Eickemeyer",
    description: "Specialist veterinary instruments and equipment, Germany.",
    logoSrc: "https://placehold.co/240x120/1a3a4a/ffffff?text=Eickemeyer",
  },
  {
    name: "Antech",
    description: "Veterinary diagnostic laboratory services and analysers.",
    logoSrc: "https://placehold.co/240x120/2b6b6b/ffffff?text=Antech",
  },
  {
    name: "Melag",
    description: "Sterilisation and hygiene solutions, Germany.",
    logoSrc: "https://placehold.co/240x120/0f2730/ffffff?text=Melag",
  },
  {
    name: "Covetrus",
    description: "Global animal health technology and solutions.",
    logoSrc: "https://placehold.co/240x120/4a5a60/ffffff?text=Covetrus",
  },
  {
    name: "Veterinary Instrumentation",
    description: "Precision orthopaedic instruments for veterinary surgery, UK.",
    logoSrc: "https://placehold.co/240x120/1a3a4a/e8f4f4?text=Vet+Instrumentation",
  },
  {
    name: "Additional Partners",
    description: "And other leading international suppliers.",
    logoSrc: null,
    isPlaceholder: true,
  },
];

export function PartnersSection() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero prt-page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-divider" />
          <h1>Our Partners</h1>
          <p className="page-hero-sub">
            We represent globally respected manufacturers, bringing their technologies to Maltese veterinary clinics.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="page-content">

        {/* Heritage note */}
        <section aria-label="Our partnership heritage" style={{ marginBottom: "72px" }}>
          <div style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "24px",
            padding: "48px 56px",
            boxShadow: "0 10px 40px -15px rgba(15,39,48,0.12)",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "32px",
            alignItems: "center",
          }} className="heritage-grid">
            <div style={{
              width: "56px", height: "56px", borderRadius: "14px",
              background: "var(--teal)", display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }} aria-hidden="true">
              <Globe size={28} style={{ color: "#fff" }} />
            </div>
            <p style={{ fontSize: "17px", color: "var(--navy)", lineHeight: 1.65, fontWeight: 500 }}>
              Our partnerships began decades ago — including introducing Hartz and, in 2001, Hill&apos;s Pet Nutrition&apos;s veterinary prescription diets to the Maltese market. Today our manufacturer relationships span diagnostics, imaging, surgical instruments, sterilisation and clinic infrastructure.
            </p>
          </div>
        </section>

        {/* What our partnerships deliver */}
        <section aria-label="Partnership benefits" style={{ marginBottom: "72px" }}>
          <div className="prt-benefits-grid">
            {[
              {
                icon: ShieldCheck,
                title: "Veterinary-Grade Standards",
                body: "Every manufacturer we represent meets the technical and regulatory standards expected by veterinary professionals — no consumer-grade compromises.",
              },
              {
                icon: MapPin,
                title: "Malta-Exclusive Representation",
                body: "We hold direct representation agreements with our partners, meaning Maltese clinics have a single, accountable local contact for products, service and advice.",
              },
              {
                icon: Clock,
                title: "Relationships Built Over Decades",
                body: "Our manufacturer partnerships span 28+ years. That depth of relationship means better access, better pricing conversations, and faster escalation when you need it.",
              },
              {
                icon: Award,
                title: "Clinical Context, Not Just Supply",
                body: "We don't just distribute — we advise. Our manufacturer knowledge lets us match the right product to your clinic's actual caseload and workflow.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="nabuk-card prt-benefit-card">
                <div className="prt-benefit-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <h3 className="prt-benefit-title">{title}</h3>
                <p className="prt-benefit-body">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partner logo grid */}
        <section aria-label="Partner organisations">
          <h2 style={{
            fontFamily: "var(--font-archivo-black, 'Archivo Black')",
            fontSize: "clamp(22px, 2.5vw, 30px)",
            color: "var(--navy)",
            letterSpacing: "-0.3px",
            marginBottom: "32px",
          }}>
            Our Manufacturing Partners
          </h2>
          {/* PLACEHOLDER: logo images are dummy — replace with real partner logos before launch */}
          <div className="partners-grid">
            {partners.map((p) => (
              <article
                key={p.name}
                className="nabuk-card partner-card"
                style={{
                  padding: "48px 36px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "16px",
                  background: p.isPlaceholder
                    ? "rgba(43,107,107,0.05)"
                    : "var(--card)",
                  border: p.isPlaceholder
                    ? "2px dashed rgba(43,107,107,0.2)"
                    : "none",
                }}
              >
                {p.logoSrc ? (
                  <div style={{ position: "relative", width: "200px", height: "88px" }}>
                    <Image
                      src={p.logoSrc}
                      alt={`${p.name} logo — placeholder`}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="180px"
                    />
                  </div>
                ) : (
                  <div style={{
                    width: "180px", height: "72px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--teal)",
                  }} aria-hidden="true">
                    <Globe size={36} strokeWidth={1.2} />
                  </div>
                )}
                <div>
                  <h3 style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "var(--navy)",
                    marginBottom: "6px",
                  }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Open for Partnership ── */}
        <section aria-label="Open for new partnerships" style={{ marginTop: "72px" }}>
          <div className="prt-open-wrap">
            <div className="prt-open-glow" aria-hidden="true" />

            {/* Left — pitch text */}
            <div className="prt-open-left">
              <span className="prt-open-badge">Open for New Partnerships</span>
              <h2 className="prt-open-title">
                Looking to reach Malta&apos;s veterinary profession?
              </h2>
              <p className="prt-open-lead">
                We represent a curated portfolio of internationally respected manufacturers. If your brand offers clinical-grade veterinary equipment, diagnostics or infrastructure — and you&apos;re looking for an established, dedicated partner in Malta — we&apos;d like to hear from you.
              </p>
              <Link href="/contact" className="prt-open-cta">
                Enquire About a Partnership
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                  width={15} height={15} aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            {/* Right — 3 value points */}
            <div className="prt-open-right">
              {[
                {
                  Icon: Users,
                  title: "Established Veterinary Relationships",
                  body: "28+ years of direct relationships with clinics across Malta and Gozo — giving your products immediate credibility and trusted access to the profession.",
                },
                {
                  Icon: MapPin,
                  title: "Exclusive Local Representation",
                  body: "We hold direct representation agreements with our partners. Your brand gets a single, accountable local contact who knows the market and the profession.",
                },
                {
                  Icon: TrendingUp,
                  title: "Full Market Support",
                  body: "From product introduction and clinical education through to installation and after-sales servicing — we manage the complete relationship on your behalf.",
                },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="prt-open-point">
                  <div className="prt-open-point-icon" aria-hidden="true">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="prt-open-point-title">{title}</h3>
                    <p className="prt-open-point-body">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Call to action" style={{ marginTop: "56px" }} className="page-cta-band">
          <h2>Interested in a specific product line or manufacturer?</h2>
          <p>Contact us and we&apos;ll advise on the right solution for your clinic.</p>
          <Link href="/contact" className="btn-primary">
            Request a Consultation
          </Link>
        </section>
      </div>

      <style>{`
        /* ── Hero: taller ── */
        .prt-page-hero {
          padding: 104px 20px 96px !important;
        }

        /* ── Benefits grid: 2×2, bigger cards ── */
        .prt-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .prt-benefit-card {
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .prt-benefit-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(43,107,107,0.09);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          flex-shrink: 0;
        }
        .prt-benefit-title {
          font-size: 14px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -0.15px;
          margin-bottom: 10px;
        }
        .prt-benefit-body {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.65;
          margin: 0;
        }

        .prt-benefit-icon {
          width: 52px;
          height: 52px;
          margin-bottom: 20px;
        }
        .prt-benefit-title { font-size: 16px; margin-bottom: 12px; }
        .prt-benefit-body  { font-size: 14px; line-height: 1.7; }

        /* ── Open for Partnership ── */
        .prt-open-wrap {
          background: var(--navy);
          border-radius: 24px;
          padding: 56px 56px 52px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
          position: relative;
          overflow: hidden;
        }
        .prt-open-glow {
          position: absolute;
          top: -40%; right: -8%;
          width: 50%; aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(ellipse at 60% 40%,
            rgba(43,107,107,0.45) 0%,
            rgba(43,107,107,0.15) 48%,
            transparent 70%
          );
          filter: blur(40px);
          pointer-events: none;
          z-index: 0;
        }
        .prt-open-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }
        .prt-open-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(43,107,107,0.35);
          border: 1px solid rgba(43,107,107,0.55);
          color: #7dd4d4;
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 20px;
        }
        .prt-open-title {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(22px, 2.6vw, 32px);
          color: #fff;
          letter-spacing: -0.5px;
          line-height: 1.1;
          margin-bottom: 18px;
        }
        .prt-open-lead {
          font-size: 15px;
          color: rgba(255,255,255,0.68);
          line-height: 1.72;
          margin-bottom: 36px;
        }
        .prt-open-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: var(--teal);
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          padding: 12px 24px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.4px;
          box-shadow: 0 8px 24px -8px rgba(43,107,107,0.6);
          transition:
            background 0.2s ease,
            transform 0.22s cubic-bezier(0.34,1.4,0.64,1),
            box-shadow 0.2s ease;
        }
        .prt-open-cta:hover {
          background: var(--teal-dark);
          transform: translateY(-2px);
          box-shadow: 0 14px 32px -8px rgba(43,107,107,0.65);
        }
        .prt-open-cta:focus-visible { outline: 3px solid var(--teal); outline-offset: 3px; }
        .prt-open-cta:active { transform: translateY(0); }
        .prt-open-right {
          display: flex;
          flex-direction: column;
          gap: 28px;
          position: relative;
          z-index: 1;
          padding-top: 6px;
        }
        .prt-open-point {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .prt-open-point-icon {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          background: rgba(43,107,107,0.35);
          border: 1px solid rgba(43,107,107,0.55);
          color: #7dd4d4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .prt-open-point-title {
          font-size: 14px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 6px;
          letter-spacing: -0.1px;
        }
        .prt-open-point-body {
          font-size: 13px;
          color: rgba(255,255,255,0.62);
          line-height: 1.65;
          margin: 0;
        }

        /* ── Partner logo grid ── */
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .heritage-grid { }

        @media (max-width: 900px) {
          .prt-page-hero { padding: 80px 20px 72px !important; }
          .prt-benefits-grid { grid-template-columns: 1fr; }
          .partners-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .heritage-grid { grid-template-columns: 1fr !important; }
          .prt-open-wrap { grid-template-columns: 1fr; gap: 36px; padding: 40px 32px 36px; }
        }
        @media (max-width: 520px) {
          .prt-page-hero { padding: 64px 20px 56px !important; }
          .partners-grid { grid-template-columns: 1fr; gap: 16px; }
          .prt-open-wrap { padding: 32px 24px 28px; }
        }
      `}</style>
    </>
  );
}
