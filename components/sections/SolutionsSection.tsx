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
      {/* ── SOLUTIONS HERO — home-hero-style layout ── */}
      <div className="sol-hero-section">
        <div className="sol-hero-wrap">

          {/* LEFT: text */}
          <div className="sol-hero-left">
            <div className="sol-hero-eyebrow">What We Supply</div>
            <h1 className="sol-hero-title">Solutions</h1>
            <div className="sol-hero-bar" />
            <p className="sol-hero-lead">
              We source and supply the clinical technologies that modern veterinary practice depends on — from diagnostics to the surgical suite.
            </p>
            <Link href="/contact" className="sol-hero-cta">
              Request a Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                width={15} height={15} aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          {/* RIGHT: single clean equipment image */}
          <div className="sol-hero-img-col">
            <div className="sol-hero-img-glow" aria-hidden="true" />
            <div className="sol-hero-img-frame">
              <Image
                src="/images/diagnostic-system.webp"
                alt="Veterinary diagnostic equipment supplied by Nabuk Distributors"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 900px) 0px, 50vw"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="page-content">

        {/* Capability cards grid */}
        <section aria-label="Capability areas">
          <div className="sol-section-header">
            <span className="sol-eyebrow">What we supply</span>
            <h2 className="sol-section-title">Clinical technology for every discipline</h2>
          </div>
          <div className="solutions-grid">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <article key={cap.title} className="nabuk-card solution-card">
                  {/* Image */}
                  <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
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
                  <div style={{ padding: "28px 28px 24px" }}>
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

        {/* How we work — 4-step process */}
        <section aria-label="How we work" style={{ margin: "64px 0 0" }}>
          <div className="process-header">
            <span className="process-eyebrow">Our process</span>
            <h2 className="process-title">From enquiry to after-sales — we&apos;re with you at every step</h2>
          </div>
          <div className="process-steps">
            {[
              {
                num: "01",
                title: "Consultation",
                body: "We start by understanding your clinic — caseload, infrastructure, team size and goals — so every recommendation is built around your specific situation.",
                color: "var(--teal)",
              },
              {
                num: "02",
                title: "Selection",
                body: "We recommend the right equipment from the manufacturers we represent, matched to your clinical needs and budget — without a catalogue or list prices.",
                color: "#2a7a7a",
              },
              {
                num: "03",
                title: "Installation",
                body: "Where applicable, we manage full installation and commissioning of systems — from digital X-ray rooms to in-house laboratory stations.",
                color: "#1f5e5e",
              },
              {
                num: "04",
                title: "After-Sales",
                body: "On-island technical support and servicing keeps your equipment running. We don't disappear after delivery — we're your long-term partner.",
                color: "var(--navy)",
              },
            ].map((step, i) => (
              <div key={step.num} className="process-step">
                <div className="process-step-num" style={{ color: step.color }}>{step.num}</div>
                {i < 3 && <div className="process-connector" aria-hidden="true" />}
                <div className="process-step-icon" style={{ background: step.color }} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-body">{step.body}</p>
              </div>
            ))}
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
        /* ── Solutions hero — home-style two-column layout ── */
        .sol-hero-section {
          background: linear-gradient(135deg, var(--bg-1) 0%, var(--bg-2) 100%);
          overflow: hidden;
        }
        .sol-hero-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 72px 20px 64px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          min-height: 540px;
        }
        .sol-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .sol-hero-eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          color: var(--teal);
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .sol-hero-title {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(52px, 7vw, 92px);
          line-height: 0.95;
          color: var(--navy);
          letter-spacing: -1.5px;
          margin-bottom: 24px;
        }
        .sol-hero-bar {
          width: 56px;
          height: 3px;
          background: var(--teal);
          border-radius: 2px;
          margin-bottom: 22px;
        }
        .sol-hero-lead {
          font-size: 17px;
          color: var(--navy);
          max-width: 440px;
          line-height: 1.6;
          font-weight: 500;
          margin-bottom: 32px;
        }
        .sol-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--teal);
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          padding: 13px 26px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.5px;
          box-shadow:
            0 8px 24px -8px rgba(31,78,78,0.5),
            0 2px 8px -2px rgba(31,78,78,0.2);
          transition:
            background 0.2s ease,
            transform 0.22s cubic-bezier(0.34,1.4,0.64,1),
            box-shadow 0.2s ease;
        }
        .sol-hero-cta:hover {
          background: var(--teal-dark);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -8px rgba(31,78,78,0.55), 0 4px 12px -2px rgba(31,78,78,0.25);
        }
        .sol-hero-cta:focus-visible { outline: 3px solid var(--teal); outline-offset: 3px; }
        .sol-hero-cta:active { transform: translateY(0); }

        /* ── Right: image column ── */
        .sol-hero-img-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sol-hero-img-glow {
          position: absolute;
          inset: -15%;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 50%,
            rgba(155,205,205,0.55) 0%,
            rgba(195,228,228,0.25) 50%,
            transparent 75%);
          pointer-events: none;
          z-index: 0;
        }
        .sol-hero-img-frame {
          position: relative;
          width: 100%;
          height: 420px;
          border-radius: 20px;
          overflow: hidden;
          z-index: 1;
          box-shadow:
            0 20px 60px -16px rgba(15,39,48,0.22),
            0 6px 20px -6px rgba(15,39,48,0.1);
        }

        /* ── Section header ── */
        .sol-section-header {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 36px;
        }
        .sol-eyebrow {
          display: inline-flex;
          background: rgba(43,107,107,0.08);
          color: var(--teal);
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 2.2px;
          padding: 5px 13px;
          border-radius: 999px;
          text-transform: uppercase;
          width: fit-content;
        }
        .sol-section-title {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(22px, 2.6vw, 32px);
          color: var(--navy);
          letter-spacing: -0.4px;
          line-height: 1.1;
          margin: 0;
        }

        /* ── Capability grid: 3 columns, bigger cards ── */
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 0;
        }
        .solution-card { }
        .approach-grid { }

        /* ── Process section ── */
        .process-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 40px;
        }
        .process-eyebrow {
          display: inline-flex;
          align-items: center;
          background: rgba(43,107,107,0.08);
          color: var(--teal);
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 2.2px;
          padding: 5px 13px;
          border-radius: 999px;
          text-transform: uppercase;
        }
        .process-title {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(20px, 2.4vw, 28px);
          color: var(--navy);
          letter-spacing: -0.4px;
          line-height: 1.15;
          max-width: 560px;
          margin: 0;
        }
        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }
        .process-step {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1.5px solid rgba(43,107,107,0.09);
          border-radius: 18px;
          padding: 28px 24px 24px;
          position: relative;
          box-shadow: 0 2px 12px -4px rgba(15,39,48,0.08);
        }
        .process-step-num {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 38px;
          letter-spacing: -2px;
          line-height: 1;
          margin-bottom: 16px;
          opacity: 0.22;
        }
        .process-step-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .process-step-title {
          font-size: 15px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -0.2px;
          margin-bottom: 10px;
        }
        .process-step-body {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.65;
          margin: 0;
        }
        .process-connector { display: none; }

        @media (max-width: 1100px) {
          .solutions-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .sol-hero-wrap { grid-template-columns: 1fr; min-height: unset; padding: 56px 20px 48px; }
          .sol-hero-img-col { display: none; }
          .solutions-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .approach-grid { grid-template-columns: 1fr !important; }
          .process-steps { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .sol-hero-title { font-size: clamp(44px, 12vw, 64px); }
          .solutions-grid { grid-template-columns: 1fr; gap: 16px; }
          .process-steps { grid-template-columns: 1fr; }
          .page-cta-band { padding: 40px 24px !important; }
        }
        @media (max-width: 768px) {
          .process-step {
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            background: rgba(255,255,255,0.95);
          }
        }
      `}</style>
    </>
  );
}
