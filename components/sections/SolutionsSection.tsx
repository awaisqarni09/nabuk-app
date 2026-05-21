import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Droplets,
  Scan,
  FlaskConical,
  Scissors,
  Thermometer,
  Armchair,
  Wrench,
} from "lucide-react";

// PLACEHOLDER: descriptions are professionally-toned but invented — replace with client-approved copy before launch
const capabilities = [
  {
    icon: Activity,
    title: "Diagnostic Systems",
    body: "Integrated in-house diagnostic platforms that give your clinic reliable, fast results — and the clinical confidence that comes with them.",
    img: "/images/diagnostic-system.webp",
  },
  {
    icon: Droplets,
    title: "Blood Analysers",
    body: "Haematology and biochemistry analysers from globally trusted manufacturers, specified for clinic throughput and caseload.",
    img: "/images/blood-analysers.webp",
  },
  {
    icon: Scan,
    title: "Imaging Solutions",
    body: "Complete X-ray installations and ultrasound systems, specified and installed for your clinic — from digital radiography to portable ultrasound.",
    img: "/images/x-ray.webp",
  },
  {
    icon: FlaskConical,
    title: "Rapid Testing",
    body: "Point-of-care rapid test systems for in-clinic diagnosis — reducing turnaround time and supporting immediate clinical decisions.",
    img: "/images/rapid-testing.webp",
  },
  {
    icon: Scissors,
    title: "Surgical Instruments",
    body: "Professional-grade surgical instrument sets from specialist veterinary manufacturers — precision tools for a broad range of surgical disciplines.",
    img: "/images/surgical-instruments.webp",
  },
  {
    icon: Thermometer,
    title: "Sterilisation Systems",
    body: "Autoclaves and sterilisation equipment that meet the standards of modern veterinary practice — from bench-top to high-capacity units.",
    img: "/images/sterilisation.webp",
  },
  {
    icon: Armchair,
    title: "Clinic Furniture",
    body: "Examination tables, trolleys, cabinetry and clinic infrastructure — designed to support clinical workflow and durability in daily practice.",
    img: "/images/clinic-furniture.webp",
  },
  {
    icon: Wrench,
    title: "Specialised Equipment",
    body: "Specialist equipment for ophthalmology, dentistry, endoscopy and other disciplines — sourced from the international manufacturers we represent.",
    img: "/images/specialised-equipment.webp",
  },
];

export function SolutionsSection() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
<div className="page-hero-inner">
          <div className="page-hero-divider" />
          <h1>Solutions</h1>
          <p className="page-hero-sub">
            We source and supply the clinical technologies that modern veterinary practice depends on — from diagnostics to the surgical suite.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="page-content">

        {/* Capability cards grid */}
        <section aria-label="Capability areas">
          <div className="solutions-grid">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <article key={cap.title} className="nabuk-card solution-card">
                  {/* Image */}
                  <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                    <Image
                      src={cap.img}
                      alt={`${cap.title} — placeholder image`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 25vw"
                    />
                    {/* Gradient overlay */}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(15,39,48,0.5) 0%, transparent 60%)",
                    }} aria-hidden="true" />
                    {/* Icon chip */}
                    <div style={{
                      position: "absolute", bottom: "12px", left: "16px",
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      borderRadius: "10px",
                      padding: "8px",
                      color: "#fff",
                    }} aria-hidden="true">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                  {/* Text */}
                  <div style={{ padding: "24px" }}>
                    <h3 style={{
                      fontFamily: "var(--font-archivo-black, 'Archivo Black')",
                      fontSize: "18px",
                      color: "var(--navy)",
                      marginBottom: "10px",
                      letterSpacing: "-0.2px",
                    }}>
                      {cap.title}
                    </h3>
                    <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>
                      {cap.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Note on approach */}
        <section aria-label="Our approach" style={{ margin: "56px 0" }}>
          <div style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "40px 48px",
            boxShadow: "0 10px 40px -15px rgba(15,39,48,0.12)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }} className="approach-grid">
            <div>
              <h2 style={{
                fontFamily: "var(--font-archivo-black, 'Archivo Black')",
                fontSize: "clamp(22px, 2.5vw, 30px)",
                color: "var(--navy)",
                letterSpacing: "-0.3px",
                marginBottom: "16px",
              }}>
                We advise. We don&apos;t catalogue.
              </h2>
              <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7 }}>
                We do not publish a product catalogue or list prices. Every clinic is different — in caseload, infrastructure, team size and growth plans. Our job is to understand your situation and recommend the right solution for it.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {["No catalogue pricing — we advise on the right fit for your clinic.", "Specification support before any commitment.", "Installation and training included where applicable.", "On-island after-sales and servicing."].map((point) => (
                <div key={point} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--teal)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }} aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p style={{ fontSize: "15px", color: "var(--navy)", lineHeight: 1.6 }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Call to action" className="page-cta-band">
          <h2>Tell us what your clinic needs — we&apos;ll advise on the right solution.</h2>
          <Link href="/contact" className="btn-primary">
            Request a Consultation
          </Link>
        </section>
      </div>

      <style>{`
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 0;
        }
        .solution-card { }
        .approach-grid { }

        @media (max-width: 1100px) {
          .solutions-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .solutions-grid { grid-template-columns: repeat(2, 1fr); }
          .approach-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .solutions-grid { grid-template-columns: 1fr; }
          .page-cta-band { padding: 32px 24px !important; }
        }
      `}</style>
    </>
  );
}
