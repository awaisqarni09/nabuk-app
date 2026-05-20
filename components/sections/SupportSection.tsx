import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Settings, BookOpen, Wrench } from "lucide-react";

const PAW_PATH =
  "M11.35 3.836c-.065.21-.1.433-.1.664 0 1.21.847 2.193 1.892 2.193.025 0 .05 0 .074-.002.297.165.534.405.708.682.49.802.81 1.825.61 2.7-.205.91-.864 1.4-1.62 1.4-.756 0-1.418-.49-1.62-1.4-.2-.875.12-1.898.61-2.7.174-.277.41-.517.708-.682.025.002.05.002.074.002 1.045 0 1.892-.983 1.892-2.193 0-.23-.035-.453-.1-.664-.165-.55-.5-.997-.93-1.27a2.06 2.06 0 0 0-2.092 0c-.43.273-.766.72-.93 1.27zM4.5 8.5c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm12 0c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm-9 4c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm6 0c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zM7.5 18a4.5 4.5 0 0 1 9 0c0 1.5-1 2.5-2.5 2.5h-4C8.5 20.5 7.5 19.5 7.5 18z";

// PLACEHOLDER: copy is professionally-toned but invented — replace with client-approved copy before launch
const services = [
  {
    icon: MessageSquare,
    title: "Consultation & Specification",
    body: "We help you choose the right equipment for your clinic and caseload. Before you commit to any purchase, we take the time to understand your workflow, team and growth plans — and recommend accordingly.",
    number: "01",
  },
  {
    icon: Settings,
    title: "Installation",
    body: "Full installation of X-ray, ultrasound and laboratory systems. We handle the technical side — commissioning, calibration and verification — so your team can start using new equipment with confidence.",
    number: "02",
  },
  {
    icon: BookOpen,
    title: "Training",
    body: "Getting your team confident with new technology. We provide hands-on training at the point of installation and follow-up support as your team's proficiency develops.",
    number: "03",
  },
  {
    icon: Wrench,
    title: "Servicing & After-Sales",
    body: "Ongoing support to keep clinical equipment running reliably. As your local partner, we are on the island — able to respond when equipment needs attention.",
    number: "04",
  },
];

export function SupportSection() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.04)" width={150} height={150}
          className="page-hero-paw" style={{ top: "-10px", right: "50px", transform: "rotate(18deg)" }}
          aria-hidden="true">
          <path d={PAW_PATH} />
        </svg>
        <div className="page-hero-inner">
          <div className="page-hero-divider" />
          <h1>Support &amp; Services</h1>
          <p className="page-hero-sub">
            Our relationship with a clinic doesn&apos;t end at delivery.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="page-content">

        {/* Service blocks */}
        <section aria-label="Our services" style={{ marginBottom: "56px" }}>
          <div className="services-grid">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.title} className="nabuk-card service-card">
                  <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "24px",
                  }}>
                    <div style={{
                      width: "52px", height: "52px", borderRadius: "14px",
                      background: "rgba(43,107,107,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--teal)",
                    }} aria-hidden="true">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                    <span style={{
                      fontFamily: "var(--font-archivo-black, 'Archivo Black')",
                      fontSize: "36px",
                      color: "rgba(43,107,107,0.12)",
                      lineHeight: 1,
                      letterSpacing: "-2px",
                    }} aria-hidden="true">
                      {s.number}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-archivo-black, 'Archivo Black')",
                    fontSize: "19px",
                    color: "var(--navy)",
                    marginBottom: "12px",
                    letterSpacing: "-0.2px",
                  }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.7 }}>
                    {s.body}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Heritage note + image */}
        <section aria-label="Professional development heritage" style={{ marginBottom: "56px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 10px 40px -15px rgba(15,39,48,0.12)",
          }} className="heritage-support-grid">
            <div>
              <div style={{ width: "40px", height: "3px", background: "var(--teal)", borderRadius: "2px", marginBottom: "20px" }} />
              <h2 style={{
                fontFamily: "var(--font-archivo-black, 'Archivo Black')",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                color: "var(--navy)",
                letterSpacing: "-0.3px",
                marginBottom: "16px",
                lineHeight: 1.15,
              }}>
                Supporting the profession beyond the product.
              </h2>
              <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7 }}>
                We have long supported the profession through seminars, continuing veterinary education and access to international conferences and training. Our commitment to the development of veterinary medicine in Malta goes beyond equipment supply.
              </p>
            </div>
            {/* PLACEHOLDER: swap for real image */}
            <div style={{ borderRadius: "16px", overflow: "hidden", position: "relative", height: "280px" }}>
              <Image
                src="https://placehold.co/800x500/2b6b6b/e8f4f4?text=Support+%2F+Training+Photo"
                alt="Support and training — placeholder image"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Call to action" className="page-cta-band">
          <h2>Need support with existing equipment, or planning something new?</h2>
          <p>Talk to us — we&apos;re based in Malta and here when you need us.</p>
          <Link href="/contact" className="btn-primary">
            Request a Consultation
          </Link>
        </section>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .service-card { padding: 32px; }
        .heritage-support-grid { }

        @media (max-width: 900px) {
          .heritage-support-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
