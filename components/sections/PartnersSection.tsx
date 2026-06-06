import Image from "next/image";
import Link from "next/link";
import { Globe, ShieldCheck, MapPin, Clock, Award, Users, TrendingUp, Calendar, BadgeCheck } from "lucide-react";

// ── Hero orbit: partners revolving around the Malta hub ──
// Positions are computed evenly around an ellipse; `cx`/`cy` (% of the orbit
// box) double as the SVG connector endpoints. Real logo images can replace the
// wordmark text once available.
// Our own manufacturing partners — clockwise from the top.
const orbitBrands = [
  { name: "Eickemeyer",                 tag: "Germany" },
  { name: "Antech",                     tag: "Diagnostics" },
  { name: "Melag",                      tag: "Germany" },
  { name: "Covetrus",                   tag: "Global" },
  { name: "Veterinary Instrumentation", tag: "United Kingdom" },
  { name: "& more",                     tag: "" },
];
const orbitPartners = orbitBrands.map((b, i, arr) => {
  const a = (-90 + (i * 360) / arr.length) * (Math.PI / 180);
  return {
    ...b,
    cx: Math.round((50 + 38 * Math.cos(a)) * 100) / 100,
    cy: Math.round((50 + 43 * Math.sin(a)) * 100) / 100,
  };
});

const heroStats = [
  { icon: Globe,      value: "20+",  label: "Global Brands",          note: "Trusted manufacturers from around the world." },
  { icon: Calendar,   value: "30+",  label: "Years Partnership",      note: "Decades of strong relationships built on trust and performance." },
  { icon: BadgeCheck, value: "100%", label: "Authorized Distribution", note: "Official distributor of premium veterinary technologies." },
];

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

const benefits = [
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
];

const openReasons = [
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
];

export function PartnersSection() {
  return (
    <>
      {/* ── HERO — partner orbit on a world map ── */}
      <div className="page-hero prt-hero">
        <div className="prt-hero-inner">
          <div className="prt-hero-grid">
            {/* LEFT: text */}
            <div className="prt-hero-text">
              <div className="prt-hero-eyebrow">Who We Represent</div>
              <h1 className="prt-hero-h1">
                <span className="prt-hero-h1-dark">Global Technology Partners.</span>{" "}
                <span className="prt-hero-h1-teal">Local Clinical Expertise.</span>
              </h1>
              <div className="page-hero-divider" />
              <p className="page-hero-sub prt-hero-sub">
                We partner with world-leading manufacturers to bring veterinary professionals in Malta and Gozo the most advanced clinical technologies and reliable solutions.
              </p>
              <a href="#partner-list" className="prt-hero-cta">
                Meet Our Partners
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                  width={15} height={15} aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>

            {/* RIGHT: orbit */}
            <div className="prt-orbit">
              <div className="prt-orbit-map" aria-hidden="true">
                <Image
                  src="/images/map.webp"
                  alt=""
                  fill
                  priority
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  sizes="(max-width: 980px) 0px, 60vw"
                />
              </div>

              {/* connectors from hub to each partner */}
              <svg className="prt-orbit-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                {orbitPartners.map((p) => (
                  <line
                    key={p.name}
                    x1={50} y1={50} x2={p.cx} y2={p.cy}
                    stroke="rgba(43,120,116,0.45)"
                    strokeWidth={1.4}
                    strokeDasharray="1.5 7"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>
              {orbitPartners.map((p) => (
                <span key={`dot-${p.name}`} className="prt-orbit-dot" style={{ left: `${p.cx}%`, top: `${p.cy}%` }} aria-hidden="true" />
              ))}

              {/* central Malta hub */}
              <div className="prt-hub" style={{ left: "50%", top: "50%" }}>
                <div className="prt-hub-glow" aria-hidden="true" />
                <div className="prt-hub-inner">
                  <div className="prt-hub-pin" aria-hidden="true">
                    <MapPin size={20} strokeWidth={2} />
                  </div>
                  <div className="prt-hub-title">Malta Hub</div>
                  <div className="prt-hub-sub">Our Commitment.<br />Your Advantage.</div>
                </div>
              </div>

              {/* partner logo pills */}
              {orbitPartners.map((p) => (
                <div
                  key={p.name}
                  className="prt-logo"
                  style={{ left: `${p.cx}%`, top: `${p.cy}%` }}
                >
                  <span className="prt-logo-name">{p.name}</span>
                  {p.tag ? <span className="prt-logo-tag">{p.tag}</span> : null}
                </div>
              ))}
            </div>
          </div>

          {/* stats */}
          <div className="prt-stats">
            {heroStats.map(({ icon: Icon, value, label, note }) => (
              <div key={label} className="prt-stat">
                <div className="prt-stat-icon">
                  <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div className="prt-stat-body">
                  <div className="prt-stat-value">{value}</div>
                  <div className="prt-stat-label">{label}</div>
                  <p className="prt-stat-note">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BAND 1 · Heritage — light split ── */}
      <section className="section section--light section--lg" aria-label="Our partnership heritage">
        <div className="section-inner">
          <div className="split split--text-wide">
            <div>
              <span className="sec-eyebrow">Our Heritage</span>
              <h2 className="sec-title" style={{ margin: "16px 0 0" }}>
                Manufacturer relationships built over decades
              </h2>
            </div>
            <div className="prt-heritage-note">
              <div className="prt-heritage-icon" aria-hidden="true">
                <Globe size={26} style={{ color: "#fff" }} />
              </div>
              <p>
                Our partnerships began decades ago — including introducing Hartz and, in 2001, Hill&apos;s Pet Nutrition&apos;s veterinary prescription diets to the Maltese market. Today our manufacturer relationships span diagnostics, imaging, surgical instruments, sterilisation and clinic infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BAND 2 · Benefits — dark navy, white cards ── */}
      <section className="section section--dark" aria-label="Partnership benefits">
        <div className="section-inner">
          <div className="sec-header">
            <span className="sec-eyebrow">Why partner with us</span>
            <h2 className="sec-title">What our partnerships deliver</h2>
          </div>
          <div className="prt-benefits-grid">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="nabuk-card prt-benefit-card">
                <div className="prt-benefit-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <h3 className="prt-benefit-title">{title}</h3>
                <p className="prt-benefit-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BAND 3 · Partner logos — old format ── */}
      {/* data-no-reveal: opt this band out of the site-wide AutoReveal so the
          partner cards stay fully visible (pic + text) and never fade/flip. */}
      <section id="partner-list" className="section section--light" aria-label="Partner organisations">
        <div className="section-inner" data-no-reveal>
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
                  background: p.isPlaceholder ? "rgba(43,107,107,0.05)" : "var(--card)",
                  border: p.isPlaceholder
                    ? "2px dashed rgba(43,107,107,0.2)"
                    : undefined,
                }}
              >
                {p.logoSrc ? (
                  <div style={{ position: "relative", width: "200px", height: "88px" }}>
                    <Image
                      src={p.logoSrc}
                      alt={`${p.name} logo — placeholder`}
                      fill
                      loading="eager"
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
                  <h3 style={{ fontSize: "16px", fontWeight: 800, color: "var(--navy)", marginBottom: "6px" }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BAND 4 · Open for Partnership — navy feature box on paper ── */}
      <section className="section section--paper" aria-label="Open for new partnerships">
        <div className="section-inner">
          <div className="prt-open-wrap">
            <div className="prt-open-glow" aria-hidden="true" />

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

            <div className="prt-open-right">
              {openReasons.map(({ Icon, title, body }) => (
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
        </div>
      </section>

      {/* ── BAND 5 · CTA — full-bleed teal ── */}
      <section className="section section--teal section--sm" aria-label="Call to action">
        <div className="section-inner">
          <div className="sec-header sec-header--center">
            <h2 className="sec-title">Interested in a specific product line or manufacturer?</h2>
            <p className="sec-lead">Contact us and we&apos;ll advise on the right solution for your clinic.</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/contact" className="btn-primary">Request a Consultation</Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Partners hero (orbit + stats) ── */
        .prt-hero {
          background: linear-gradient(135deg, var(--bg-1) 0%, var(--bg-2) 100%);
          padding: 0;
          color: var(--navy);
          overflow: hidden;
        }
        .prt-hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px 20px 56px;
          position: relative;
          z-index: 1;
        }
        .prt-hero-grid {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 40px;
          align-items: center;
          min-height: 500px;
        }
        .prt-hero-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-right: 12px;
        }
        .prt-hero-eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.6px;
          color: var(--muted);
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .prt-hero-h1 {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(30px, 3.6vw, 50px);
          line-height: 1.05;
          letter-spacing: -1.4px;
          margin-bottom: 20px;
          max-width: 12ch;
        }
        .prt-hero-h1-dark { color: var(--navy); }
        .prt-hero-h1-teal { color: var(--teal); }
        .prt-hero .page-hero-divider { width: 56px; margin: 0 0 22px; }
        .prt-hero-sub {
          font-size: 16px;
          color: var(--muted) !important;
          max-width: 430px;
          line-height: 1.65;
          font-weight: 500;
          margin-bottom: 30px;
        }
        .prt-hero-cta {
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
          box-shadow: 0 8px 24px -8px rgba(31,78,78,0.5), 0 2px 8px -2px rgba(31,78,78,0.2);
          transition:
            background 0.2s ease,
            transform 0.22s cubic-bezier(0.34,1.4,0.64,1),
            box-shadow 0.2s ease;
        }
        .prt-hero-cta:hover {
          background: var(--teal-dark);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -8px rgba(31,78,78,0.55);
        }
        .prt-hero-cta:focus-visible { outline: 3px solid var(--teal); outline-offset: 3px; }
        .prt-hero-cta:active { transform: translateY(0); }

        /* ── Orbit ── */
        .prt-orbit {
          position: relative;
          width: 100%;
          min-height: 500px;
        }
        /* transparent world-map backdrop graphic. A radial mask feathers the
           edges so the soft internal haze fades into the section with no
           visible rectangle/shade around it. */
        .prt-orbit-map {
          position: absolute;
          inset: -10% -8%;
          z-index: 0;
          pointer-events: none;
          -webkit-mask-image: radial-gradient(ellipse 58% 58% at 50% 50%, #000 38%, transparent 70%);
          mask-image: radial-gradient(ellipse 58% 58% at 50% 50%, #000 38%, transparent 70%);
        }
        .prt-orbit-links {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        .prt-orbit-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: var(--teal);
          box-shadow: 0 0 0 4px rgba(43,107,107,0.12), 0 0 10px 2px rgba(96,200,190,0.6);
          z-index: 1;
          pointer-events: none;
        }

        /* central Malta hub */
        .prt-hub {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 3;
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .prt-hub-glow {
          position: absolute;
          inset: -18%;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 48%,
            rgba(150,232,222,0.55) 0%,
            rgba(86,198,188,0.28) 45%,
            transparent 72%);
          filter: blur(6px);
          pointer-events: none;
        }
        .prt-hub-inner {
          position: relative;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: transparent;
          border: 1.5px solid rgba(43,107,107,0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 14px;
        }
        .prt-hub-pin {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--teal);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          box-shadow: 0 8px 18px -6px rgba(43,107,107,0.7);
        }
        .prt-hub-title {
          font-size: 14px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -0.2px;
          margin-bottom: 3px;
        }
        .prt-hub-sub {
          font-size: 9.5px;
          color: var(--teal-dark);
          font-weight: 600;
          line-height: 1.35;
        }

        /* partner logo pills */
        .prt-logo {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 2;
          max-width: 150px;
          padding: 12px 18px;
          border-radius: 14px;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(12px) saturate(1.3);
          -webkit-backdrop-filter: blur(12px) saturate(1.3);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 14px 34px -16px rgba(15,39,48,0.28), inset 0 1px 0 rgba(255,255,255,0.7);
          text-align: center;
          transition:
            transform 0.24s cubic-bezier(0.34,1.4,0.64,1),
            box-shadow 0.22s ease;
        }
        .prt-logo:hover {
          transform: translate(-50%, -50%) scale(1.06);
          box-shadow: 0 20px 42px -16px rgba(15,39,48,0.34);
        }
        .prt-logo-name {
          display: block;
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 15px;
          color: var(--navy);
          letter-spacing: -0.3px;
          line-height: 1.1;
        }
        .prt-logo-tag {
          display: block;
          margin-top: 2px;
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          color: var(--teal);
        }

        /* ── Stats row ── */
        .prt-stats {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(43,107,107,0.12);
          border-radius: 20px;
          box-shadow: 0 16px 44px -24px rgba(15,39,48,0.2);
          overflow: hidden;
        }
        .prt-stat {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 26px 28px;
        }
        .prt-stat + .prt-stat { border-left: 1px solid rgba(43,107,107,0.12); }
        .prt-stat-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(43,107,107,0.09);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .prt-stat-value {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 30px;
          color: var(--teal);
          letter-spacing: -1px;
          line-height: 1;
          margin-bottom: 6px;
        }
        .prt-stat-label {
          font-size: 14px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -0.1px;
          margin-bottom: 6px;
        }
        .prt-stat-note {
          font-size: 12.5px;
          color: var(--muted);
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 980px) {
          .prt-hero-grid { grid-template-columns: 1fr; gap: 36px; min-height: 0; }
          .prt-hero-text { align-items: center; text-align: center; padding-right: 0; }
          .prt-hero-h1 { max-width: 20ch; }
          .prt-hero-sub { margin-left: auto; margin-right: auto; }
          .prt-hero .page-hero-divider { align-self: center; }

          /* collapse the orbit into a centred stack */
          .prt-orbit { min-height: 0; display: flex; flex-direction: column; align-items: center; gap: 26px; }
          .prt-orbit-links, .prt-orbit-dot, .prt-orbit-map { display: none; }
          .prt-hub {
            position: relative !important;
            inset: auto !important;
            transform: none;
          }
          .prt-logo {
            position: static !important;
            inset: auto !important;
            transform: none;
            max-width: none;
          }
          .prt-logo:hover { transform: scale(1.03); }
          /* lay the partner pills out in a centred wrap row */
          .prt-orbit-pills {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
          }
        }
        @media (max-width: 720px) {
          .prt-stats { grid-template-columns: 1fr; }
          .prt-stat + .prt-stat { border-left: none; border-top: 1px solid rgba(43,107,107,0.12); }
        }

        /* ── Heritage note (right side of split) ── */
        .prt-heritage-note {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 22px;
          align-items: start;
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1.5px solid rgba(43,107,107,0.1);
          border-radius: 22px;
          padding: 32px;
          box-shadow: 0 14px 44px -20px rgba(15,39,48,0.16);
        }
        .prt-heritage-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: var(--teal);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .prt-heritage-note p {
          font-size: 16px;
          color: var(--navy);
          line-height: 1.7;
          font-weight: 500;
          margin: 0;
        }

        /* ── Benefits grid: 2×2, white cards on dark band ── */
        .prt-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .prt-benefit-card {
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 0;
          background: var(--card);
        }
        .prt-benefit-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(43,107,107,0.1);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          flex-shrink: 0;
        }
        .prt-benefit-title {
          font-size: 16px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -0.15px;
          margin-bottom: 12px;
        }
        .prt-benefit-body {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
        }

        /* ── Open for Partnership feature box ── */
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

        @media (max-width: 900px) {
          .prt-benefits-grid { grid-template-columns: 1fr; }
          .partners-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .prt-heritage-note { grid-template-columns: 1fr; }
          .prt-open-wrap { grid-template-columns: 1fr; gap: 36px; padding: 40px 32px 36px; }
        }
        @media (max-width: 520px) {
          .partners-grid { grid-template-columns: 1fr; gap: 16px; }
          .prt-open-wrap { padding: 32px 24px 28px; }
        }
      `}</style>
    </>
  );
}
