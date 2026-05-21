import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";

const PAW_PATH =
  "M11.35 3.836c-.065.21-.1.433-.1.664 0 1.21.847 2.193 1.892 2.193.025 0 .05 0 .074-.002.297.165.534.405.708.682.49.802.81 1.825.61 2.7-.205.91-.864 1.4-1.62 1.4-.756 0-1.418-.49-1.62-1.4-.2-.875.12-1.898.61-2.7.174-.277.41-.517.708-.682.025.002.05.002.074.002 1.045 0 1.892-.983 1.892-2.193 0-.23-.035-.453-.1-.664-.165-.55-.5-.997-.93-1.27a2.06 2.06 0 0 0-2.092 0c-.43.273-.766.72-.93 1.27zM4.5 8.5c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm12 0c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm-9 4c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm6 0c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zM7.5 18a4.5 4.5 0 0 1 9 0c0 1.5-1 2.5-2.5 2.5h-4C8.5 20.5 7.5 19.5 7.5 18z";

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
      <div className="page-hero">
        <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.04)" width={140} height={140}
          className="page-hero-paw" style={{ top: "-10px", right: "60px", transform: "rotate(20deg)" }}
          aria-hidden="true">
          <path d={PAW_PATH} />
        </svg>
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
        <section aria-label="Our partnership heritage" style={{ marginBottom: "56px" }}>
          <div style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "36px 40px",
            boxShadow: "0 10px 40px -15px rgba(15,39,48,0.12)",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "24px",
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
                  padding: "32px 24px",
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
                  <div style={{ position: "relative", width: "180px", height: "72px" }}>
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
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .heritage-grid { }

        @media (max-width: 900px) {
          .partners-grid { grid-template-columns: repeat(2, 1fr); }
          .heritage-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .partners-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
