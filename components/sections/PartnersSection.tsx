import Image from "next/image";
import Link from "next/link";
import { Globe, ShieldCheck, MapPin, Clock, Award } from "lucide-react";

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
        }
        @media (max-width: 520px) {
          .prt-page-hero { padding: 64px 20px 56px !important; }
          .partners-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </>
  );
}
