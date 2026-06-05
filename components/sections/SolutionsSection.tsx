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
  Boxes,
  Wifi,
  BadgeCheck,
  Search,
} from "lucide-react";

// ── Hero constellation ──
// Satellite cards orbiting the central workstation. `cx`/`cy` are the card's
// centre as a % of the orbit box — they double as the SVG connector endpoints.
const orbitItems = [
  { title: "Ultrasound Imaging",   sub: "Advanced diagnostic imaging", img: "/images/ultrasound-imaging.webp",   icon: Activity,     cx: 20, cy: 20 },
  { title: "Microscopy",           sub: "High precision microscopy",   img: "/images/microscopy.webp",           icon: Search,       cx: 85, cy: 17 },
  { title: "Laboratory Analyzers", sub: "In-house diagnostics",        img: "/images/laboratory-analyzers.webp", icon: FlaskConical, cx: 19, cy: 81 },
  { title: "Surgical Instrument",  sub: "Precision surgical tools",    img: "/images/surgical-instrument.webp",  icon: Scissors,     cx: 85, cy: 84 },
];

// Centre of the orbit (workstation card / connector origin).
const ORBIT_CX = 53;
const ORBIT_CY = 50;

const heroFeatures = [
  { icon: Boxes,      label: "Integrated Ecosystem" },
  { icon: Wifi,       label: "Seamless Connectivity" },
  { icon: Activity,   label: "Reliable Performance" },
  { icon: BadgeCheck, label: "Clinical Standard" },
];

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

const processSteps = [
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
];

const approachPoints = [
  "No catalogue pricing — we advise on the right fit for your clinic.",
  "Specification support before any commitment.",
  "Installation and training included where applicable.",
  "On-island after-sales and servicing.",
];

const enquiryReasons = [
  {
    num: "01",
    title: "Consultation First",
    body: "We understand your clinic before recommending anything. Caseload, team size, infrastructure and growth plans all shape what we propose.",
  },
  {
    num: "02",
    title: "No Commitment to Browse",
    body: "Talk to us, ask questions, get expert input — with no obligation to purchase. We'd rather give you the right advice than the wrong sale.",
  },
  {
    num: "03",
    title: "On-Island Support for Life",
    body: "Installation, training, and after-sales servicing are part of the relationship — not extras. We're in Malta, and we're here when you need us.",
  },
];

export function SolutionsSection() {
  return (
    <>
      {/* ── HERO — constellation / orbital layout ── */}
      <div className="sol-hero-section">
        <div className="sol-hero-wrap">
          <div className="sol-hero-grid">
            {/* LEFT: text */}
            <div className="sol-hero-left">
              <div className="sol-hero-eyebrow">What We Supply</div>
              <h1 className="sol-hero-title">Solutions for Modern Veterinary Practice</h1>
              <p className="sol-hero-lead">
                We source and supply the clinical technologies that modern veterinary practice depends on — from diagnostics to the surgical suite.
              </p>
              <a href="#capabilities" className="sol-hero-cta">View All Solutions</a>
            </div>

            {/* RIGHT: orbit constellation */}
            <div className="sol-hero-img-col">
              <div className="sol-orbit">
                <div className="sol-orbit-ring" aria-hidden="true" />
                <div className="sol-orbit-ring sol-orbit-ring-2" aria-hidden="true" />
                <div className="sol-orbit-glow" aria-hidden="true" />
                <div className="sol-orbit-glow-core" aria-hidden="true" />

                {/* dashed connectors + node dots from centre to each satellite */}
                <svg className="sol-orbit-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  {orbitItems.map((item) => (
                    <line
                      key={item.title}
                      x1={ORBIT_CX} y1={ORBIT_CY} x2={item.cx} y2={item.cy}
                      stroke="rgba(43,120,116,0.55)"
                      strokeWidth={1.6}
                      strokeDasharray="1.5 7"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </svg>
                {/* glowing connector dots (kept out of the stretched SVG so they stay round) */}
                {orbitItems.map((item) => (
                  <span
                    key={`dot-${item.title}`}
                    className="sol-orbit-dot"
                    style={{ left: `${item.cx}%`, top: `${item.cy}%` }}
                    aria-hidden="true"
                  />
                ))}

                {/* central workstation — transparent image floating on the glow */}
                <div className="sol-orbit-node sol-orbit-center" style={{ left: `${ORBIT_CX}%`, top: `${ORBIT_CY}%` }}>
                  <div className="sol-orbit-center-img">
                    <Image
                      src="/images/veterinary-workstation.webp"
                      alt="Veterinary anesthesia and monitoring workstation"
                      fill
                      priority
                      style={{ objectFit: "contain" }}
                      sizes="280px"
                    />
                  </div>
                  <div className="sol-orbit-center-label">
                    <div className="sol-orbit-center-title">Veterinary Workstation</div>
                    <div className="sol-orbit-center-sub">Anesthesia &amp; Monitoring</div>
                  </div>
                </div>

                {/* satellite glass cards */}
                {orbitItems.map(({ title, sub, img, icon: Icon, cx, cy }) => (
                  <div
                    key={title}
                    className="sol-orbit-node sol-orbit-sat"
                    style={{ left: `${cx}%`, top: `${cy}%` }}
                  >
                    <div className="sol-orbit-sat-img">
                      <Image src={img} alt={title} fill style={{ objectFit: "contain" }} sizes="150px" />
                    </div>
                    <div className="sol-orbit-sat-badge">
                      <Icon size={17} strokeWidth={1.9} aria-hidden="true" />
                    </div>
                    <div className="sol-orbit-sat-title">{title}</div>
                    <div className="sol-orbit-sat-sub">{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* feature row */}
          <div className="sol-hero-features">
            {heroFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="sol-hero-feature">
                <div className="sol-hero-feature-icon">
                  <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <span className="sol-hero-feature-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BAND 1 · Capabilities — dark navy, white cards ── */}
      <section id="capabilities" className="section section--dark" aria-label="Capability areas">
        <div className="section-inner">
          <div className="sec-header">
            <span className="sec-eyebrow">What we supply</span>
            <h2 className="sec-title">Clinical technology for every discipline</h2>
            <p className="sec-lead">
              A curated portfolio of veterinary-grade systems — specified, supplied and supported for clinics across Malta and Gozo.
            </p>
          </div>
          <div className="solutions-grid">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <article key={cap.title} className="nabuk-card solution-card">
                  <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                    <Image
                      src={cap.img}
                      alt={`${cap.title} — placeholder image`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 25vw"
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(15,39,48,0.5) 0%, transparent 60%)",
                    }} aria-hidden="true" />
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
                  <div style={{ padding: "26px 28px 26px" }}>
                    <h3 className="card-title" style={{ marginBottom: "10px" }}>{cap.title}</h3>
                    <p className="card-body">{cap.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BAND 2 · Process — soft tint ── */}
      <section className="section section--tint" aria-label="How we work">
        <div className="section-inner">
          <div className="sec-header">
            <span className="sec-eyebrow">Our process</span>
            <h2 className="sec-title">From enquiry to after-sales — we&apos;re with you at every step</h2>
          </div>
          <div className="process-steps">
            {processSteps.map((step, i) => (
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
        </div>
      </section>

      {/* ── BAND 3 · Approach — light split-screen ── */}
      <section className="section section--light" aria-label="Our approach">
        <div className="section-inner">
          <div className="split split--text-wide">
            <div>
              <span className="sec-eyebrow">Our approach</span>
              <h2 className="sec-title" style={{ margin: "16px 0 16px" }}>
                We advise. We don&apos;t catalogue.
              </h2>
              <p className="sec-lead">
                We do not publish a product catalogue or list prices. Every clinic is different — in caseload, infrastructure, team size and growth plans. Our job is to understand your situation and recommend the right solution for it.
              </p>
            </div>
            <div className="sol-checklist">
              {approachPoints.map((point) => (
                <div key={point} className="sol-check-item">
                  <div className="sol-check-dot" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BAND 4 · Clinic enquiry — navy feature box on paper ── */}
      <section className="section section--paper" aria-label="Clinic equipment enquiry">
        <div className="section-inner">
          <div className="sol-enquiry-wrap">
            <div className="sol-enquiry-glow" aria-hidden="true" />

            <div className="sol-enquiry-left">
              <span className="sol-enquiry-badge">For Veterinary Clinics</span>
              <h2 className="sol-enquiry-title">
                Need clinical equipment for your practice?
              </h2>
              <p className="sol-enquiry-lead">
                We don&apos;t publish a catalogue or list prices. Every clinic is different — so we start with a conversation. Tell us about your caseload, your team, and your goals, and we&apos;ll advise on the right clinical technology for your situation.
              </p>
              <Link href="/contact" className="sol-enquiry-cta">
                Request a Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                  width={15} height={15} aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            <div className="sol-enquiry-right">
              {enquiryReasons.map(({ num, title, body }) => (
                <div key={num} className="sol-enquiry-point">
                  <span className="sol-enquiry-num">{num}</span>
                  <div>
                    <h3 className="sol-enquiry-point-title">{title}</h3>
                    <p className="sol-enquiry-point-body">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BAND 5 · CTA — full-bleed teal ── */}
      <section className="section section--teal section--sm" aria-label="Call to action">
        <div className="section-inner">
          <div className="sec-header sec-header--center">
            <h2 className="sec-title">Tell us what your clinic needs — we&apos;ll advise on the right solution.</h2>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/contact" className="btn-primary">Request a Consultation</Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Solutions hero — constellation layout ── */
        .sol-hero-section {
          background: linear-gradient(135deg, var(--bg-1) 0%, var(--bg-2) 100%);
          overflow: hidden;
        }
        .sol-hero-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px 20px 56px;
        }
        .sol-hero-grid {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 40px;
          align-items: center;
          min-height: 480px;
        }
        .sol-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-right: 12px;
        }
        /* Plain uppercase eyebrow to match reference */
        .sol-hero-eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.6px;
          color: var(--muted);
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .sol-hero-title {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(30px, 3.3vw, 44px);
          line-height: 1.08;
          color: var(--navy);
          letter-spacing: -1.2px;
          margin-bottom: 20px;
          max-width: 460px;
        }
        .sol-hero-lead {
          font-size: 16px;
          color: var(--muted);
          max-width: 430px;
          line-height: 1.65;
          font-weight: 500;
          margin-bottom: 30px;
        }
        .sol-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--teal);
          color: #fff;
          font-weight: 700;
          font-size: 13.5px;
          padding: 14px 28px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.4px;
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

        /* ── Orbit column ── */
        .sol-hero-img-col {
          position: relative;
        }
        .sol-orbit {
          position: relative;
          width: 100%;
          min-height: 580px;
        }
        /* faint concentric guide rings */
        .sol-orbit-ring {
          position: absolute;
          left: 53%;
          top: 50%;
          width: 80%;
          aspect-ratio: 1;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(43,107,107,0.14);
          pointer-events: none;
        }
        .sol-orbit-ring-2 { width: 58%; border-color: rgba(43,107,107,0.10); }

        /* vivid teal glow behind the workstation */
        .sol-orbit-glow {
          position: absolute;
          left: 53%;
          top: 49%;
          width: 66%;
          aspect-ratio: 1;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle at 50% 48%,
            rgba(140,228,216,0.85) 0%,
            rgba(86,198,188,0.62) 30%,
            rgba(43,140,132,0.30) 52%,
            rgba(43,120,116,0.10) 66%,
            transparent 74%);
          filter: blur(4px);
          pointer-events: none;
        }
        /* brighter inner core for extra pop */
        .sol-orbit-glow-core {
          position: absolute;
          left: 53%;
          top: 49%;
          width: 38%;
          aspect-ratio: 1;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle at 50% 50%,
            rgba(205,248,242,0.9) 0%,
            rgba(150,230,220,0.45) 42%,
            transparent 70%);
          filter: blur(8px);
          pointer-events: none;
        }
        .sol-orbit-links {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        /* glowing dots at each connector endpoint */
        .sol-orbit-dot {
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: var(--teal);
          box-shadow:
            0 0 0 4px rgba(43,107,107,0.14),
            0 0 12px 2px rgba(96,200,190,0.7);
          z-index: 1;
          pointer-events: none;
        }
        .sol-orbit-node {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        /* ── central workstation: transparent image floating on the glow ── */
        .sol-orbit-center {
          width: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .sol-orbit-center-img {
          position: relative;
          width: 250px;
          height: 350px;
          filter: drop-shadow(0 26px 30px rgba(15,39,48,0.28));
        }
        .sol-orbit-center-label {
          margin-top: -6px;
          text-align: center;
          padding: 9px 20px;
          border-radius: 14px;
          background: rgba(255,255,255,0.45);
          backdrop-filter: blur(10px) saturate(1.3);
          -webkit-backdrop-filter: blur(10px) saturate(1.3);
          border: 1px solid rgba(255,255,255,0.65);
          box-shadow: 0 10px 26px -14px rgba(15,39,48,0.25);
        }
        .sol-orbit-center-title {
          font-size: 14.5px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -0.2px;
          margin-bottom: 2px;
        }
        .sol-orbit-center-sub { font-size: 11.5px; color: var(--teal-dark); font-weight: 600; }

        /* ── satellite glass cards ── */
        .sol-orbit-sat {
          width: 178px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: linear-gradient(155deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.30) 100%);
          backdrop-filter: blur(16px) saturate(1.4);
          -webkit-backdrop-filter: blur(16px) saturate(1.4);
          border: 1px solid rgba(255,255,255,0.7);
          border-radius: 22px;
          padding: 16px 18px 18px;
          box-shadow:
            0 20px 44px -20px rgba(15,39,48,0.30),
            inset 0 1px 0 rgba(255,255,255,0.65);
          transition:
            transform 0.24s cubic-bezier(0.34,1.4,0.64,1),
            box-shadow 0.22s ease,
            border-color 0.22s ease;
        }
        .sol-orbit-sat:hover {
          transform: translate(-50%, -50%) scale(1.04);
          border-color: rgba(255,255,255,0.9);
          box-shadow:
            0 26px 52px -18px rgba(15,39,48,0.34),
            inset 0 1px 0 rgba(255,255,255,0.7);
        }
        .sol-orbit-sat-img {
          position: relative;
          width: 100%;
          height: 84px;
          margin-bottom: 4px;
        }
        .sol-orbit-sat-badge {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--teal);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 11px;
          box-shadow: 0 8px 18px -6px rgba(43,107,107,0.65);
        }
        .sol-orbit-sat-title {
          font-size: 13.5px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -0.1px;
          line-height: 1.2;
          margin-bottom: 4px;
        }
        .sol-orbit-sat-sub { font-size: 11px; color: var(--muted); line-height: 1.35; }

        /* feature row */
        .sol-hero-features {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 28px;
          padding-top: 30px;
          border-top: 1px solid rgba(43,107,107,0.12);
        }
        .sol-hero-feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }
        .sol-hero-feature-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(43,107,107,0.07);
          border: 1px solid rgba(43,107,107,0.14);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sol-hero-feature-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--navy);
          letter-spacing: -0.1px;
        }

        /* ── Capability grid: 4 → 2 → 1 columns ── */
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* ── Approach checklist ── */
        .sol-checklist {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1.5px solid rgba(43,107,107,0.1);
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 12px 40px -20px rgba(15,39,48,0.16);
        }
        .sol-check-item { display: flex; gap: 14px; align-items: flex-start; }
        .sol-check-dot {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: var(--teal);
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          margin-top: 2px;
        }
        .sol-check-item p {
          font-size: 15px;
          color: var(--navy);
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }

        /* ── Process steps ── */
        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .process-step {
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1.5px solid rgba(43,107,107,0.1);
          border-radius: 18px;
          padding: 28px 24px 24px;
          position: relative;
          box-shadow: 0 4px 18px -10px rgba(15,39,48,0.14);
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

        /* ── Clinic enquiry feature box ── */
        .sol-enquiry-wrap {
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
        .sol-enquiry-glow {
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
        .sol-enquiry-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }
        .sol-enquiry-badge {
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
        .sol-enquiry-title {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(22px, 2.6vw, 32px);
          color: #fff;
          letter-spacing: -0.5px;
          line-height: 1.1;
          margin-bottom: 18px;
        }
        .sol-enquiry-lead {
          font-size: 15px;
          color: rgba(255,255,255,0.68);
          line-height: 1.72;
          margin-bottom: 36px;
        }
        .sol-enquiry-cta {
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
        .sol-enquiry-cta:hover {
          background: var(--teal-dark);
          transform: translateY(-2px);
          box-shadow: 0 14px 32px -8px rgba(43,107,107,0.65);
        }
        .sol-enquiry-cta:focus-visible { outline: 3px solid var(--teal); outline-offset: 3px; }
        .sol-enquiry-cta:active { transform: translateY(0); }
        .sol-enquiry-right {
          display: flex;
          flex-direction: column;
          gap: 28px;
          position: relative;
          z-index: 1;
          padding-top: 4px;
        }
        .sol-enquiry-point {
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }
        .sol-enquiry-num {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 28px;
          color: rgba(43,107,107,0.7);
          letter-spacing: -1px;
          line-height: 1;
          flex-shrink: 0;
          padding-top: 2px;
        }
        .sol-enquiry-point-title {
          font-size: 14px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 6px;
          letter-spacing: -0.1px;
        }
        .sol-enquiry-point-body {
          font-size: 13px;
          color: rgba(255,255,255,0.62);
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 1100px) {
          .solutions-grid { grid-template-columns: repeat(2, 1fr); }
          .process-steps { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 980px) {
          .sol-hero-grid { grid-template-columns: 1fr; gap: 40px; min-height: 0; }
          .sol-hero-left { align-items: center; text-align: center; padding-right: 0; }
          .sol-hero-title { max-width: 18ch; }
          .sol-hero-lead { margin-left: auto; margin-right: auto; }

          /* Collapse the orbit into a clean centred stack. The decorative
             positioning layers (rings / connectors / dots / orbit-level glow)
             are display:none — on a stacked layout they have nothing to anchor
             to. The glow is reattached to the workstation itself below. */
          .sol-orbit {
            min-height: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 18px;
          }
          .sol-orbit-ring, .sol-orbit-ring-2, .sol-orbit-links,
          .sol-orbit-dot, .sol-orbit-glow, .sol-orbit-glow-core { display: none; }

          /* every card/centre becomes a normal, full-width stacked item.
             Cards keep their vertical layout (image → badge → title → sub).
             inset:auto !important neutralises the inline left/top percentages
             used for absolute positioning on desktop (inline styles otherwise
             win over the stylesheet). */
          .sol-orbit-node { position: static; transform: none; inset: auto !important; }
          .sol-orbit-sat { width: 100%; max-width: 380px; }
          .sol-orbit-sat:hover { transform: scale(1.02); }
          .sol-orbit-sat-img { height: 112px; }

          /* workstation: centred, larger, with its own self-anchored glow */
          .sol-orbit-center {
            order: -1;
            width: 100%;
            max-width: 420px;
            position: relative;
            isolation: isolate;
          }
          .sol-orbit-center::before {
            content: "";
            position: absolute;
            left: 50%;
            top: 44%;
            transform: translate(-50%, -50%);
            width: 360px;
            height: 360px;
            max-width: 96%;
            aspect-ratio: 1;
            border-radius: 50%;
            background: radial-gradient(circle at 50% 48%,
              rgba(140,228,216,0.7) 0%,
              rgba(86,198,188,0.42) 32%,
              rgba(43,140,132,0.15) 56%,
              transparent 72%);
            z-index: -1;
            pointer-events: none;
          }
          .sol-orbit-center-img { width: 240px; height: 320px; }
        }
        @media (max-width: 900px) {
          .sol-hero-wrap { padding: 56px 20px 48px; }
          .solutions-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .sol-enquiry-wrap { grid-template-columns: 1fr; gap: 36px; padding: 40px 32px 36px; }
        }
        @media (max-width: 560px) {
          .sol-hero-features { grid-template-columns: repeat(2, 1fr); gap: 24px 16px; }
        }
        @media (max-width: 400px) {
          .sol-orbit-center-img { width: 200px; height: 280px; }
          .sol-orbit-center::before { width: 290px; height: 290px; }
        }
        @media (max-width: 520px) {
          .solutions-grid { grid-template-columns: 1fr; gap: 16px; }
          .process-steps { grid-template-columns: 1fr; }
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
