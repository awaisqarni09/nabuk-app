import Image from "next/image";
import Link from "next/link";
import { Flag, TrendingUp, Users, Target, Calendar, Stethoscope, Package } from "lucide-react";
import { AnimatedStatsCard } from "@/components/animations/AnimatedStatsCard";

// ── About hero: 1996 → 2025 milestone timeline ──
const heroMilestones = [
  {
    icon: Flag,
    title: "Founded",
    body: "Nabuk Distributors was established with a clear mission: to support veterinarians with high-quality products and trust.",
    img: "/images/who-we-are.webp",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    body: "We expanded our product portfolio and partnered with world-leading manufacturers to better serve veterinary clinics.",
    img: "/images/diagnostic-system.webp",
  },
  {
    icon: Users,
    title: "Clinical Expansion",
    body: "Our solutions became integral to more clinics across Malta and Gozo, supporting better outcomes for animals.",
    img: "/images/support-clinic.webp",
  },
  {
    icon: Target,
    title: "Technology Leadership",
    body: "Today, we continue to lead with innovation, training, and end-to-end support for modern veterinary practice.",
    img: "/images/specialised-equipment.webp",
  },
];

const heroStats = [
  { icon: Calendar,    value: "30+",    label: "Years of Experience", note: "Three decades of commitment to the veterinary profession." },
  { icon: Stethoscope, value: "1,000+", label: "Clinics Served",      note: "Trusted by veterinary clinics across Malta and Gozo." },
  { icon: Package,     value: "5,000+", label: "Projects Delivered",  note: "Successful installations and solutions delivered." },
  { icon: Users,       value: "100%",   label: "Client Focused",      note: "Built on trust, reliability, and long-term relationships." },
];

// PLACEHOLDER: philosophy copy is professionally-toned but invented — replace with client-approved copy before launch
const pillars = [
  {
    title: "Competence",
    body: "Deep, specialised knowledge of veterinary diagnostics and clinical technology — built over nearly three decades of hands-on partnership with Maltese veterinary clinics.",
    accent: "var(--teal)",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="14" cy="14" r="11" />
        <path d="M9 14l3.5 3.5L19 10" />
      </svg>
    ),
  },
  {
    title: "Trust",
    body: "Long-term relationships with clinics built over nearly three decades. We are known by the profession not as a vendor, but as a partner.",
    accent: "var(--navy)",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 3l2.5 5 5.5.8-4 3.9.9 5.5L14 15.5 9.1 18.2l.9-5.5L6 8.8l5.5-.8z" />
      </svg>
    ),
  },
  {
    title: "Longevity",
    body: "A stable, established partner the profession can rely on — through changes in technology, suppliers, and the practice of veterinary medicine itself.",
    accent: "var(--red)",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 20 Q14 4 24 20" />
        <path d="M4 20h20" />
        <circle cx="14" cy="14" r="2" />
      </svg>
    ),
  },
];

// Timeline — verbatim client copy from brief
const timeline = [
  {
    year: "1996",
    heading: "Founded",
    body: "Nabuk Distributors was founded with a clear purpose: to serve Malta's growing veterinary profession with quality products and reliable local support. Among our first major introductions to the Maltese market was the Hartz range — marking the start of a long track record of bringing internationally recognised brands to Maltese veterinary clinics.",
  },
  {
    year: "2001",
    heading: "Hill's Pet Nutrition",
    body: "A significant milestone: Nabuk began a collaboration with Hill's Pet Nutrition, introducing veterinary prescription diets to the Maltese market. This went hand-in-hand with supporting the profession through seminars, continuing education sponsorship, and weight-management equipment — establishing Nabuk as a partner that invested in the knowledge of the profession, not just product supply.",
  },
  {
    year: "2000s",
    heading: "Clinical Equipment & Diagnostics",
    body: "Recognising how rapidly veterinary medicine was evolving, Nabuk began expanding into clinical equipment and diagnostics. The business broadened its scope to serve clinics that were investing in in-house diagnostic capability, imaging, and more sophisticated surgical infrastructure.",
  },
  {
    year: "2018",
    heading: "Full Transition",
    body: "In 2018, Nabuk completed its full transition to veterinary equipment and diagnostics — a deliberate strategic decision to serve the profession at a higher level of specialisation. This marked the end of a broad product portfolio and the beginning of a focused, expert-led offer.",
  },
  {
    year: "Today",
    heading: "Partners & Portfolio",
    body: "Today, Nabuk partners with Eickemeyer, Antech, Melag, Covetrus and Veterinary Instrumentation — supplying diagnostic systems, blood analysers, imaging, rapid testing, surgical instruments, sterilisation systems, clinic furniture and specialised equipment. From X-ray and ultrasound installations through to lab diagnostics and surgical infrastructure, Nabuk serves clinics across Malta and Gozo as their trusted single point of contact for clinical technology.",
    highlight: true,
  },
];

export function AboutSection() {
  return (
    <>
      {/* ── HERO — milestone timeline ── */}
      <div className="page-hero abt-hero">
        <div className="abt-hero-inner">
          <div className="abt-hero-grid">
            {/* LEFT: text */}
            <div className="abt-hero-text">
              <div className="abt-hero-eyebrow">Our Story</div>
              <h1 className="abt-hero-h1">30 Years Supporting Veterinary Excellence</h1>
              <div className="page-hero-divider" />
              <p className="page-hero-sub abt-hero-sub">
                Since 1996, Nabuk Distributors Ltd. has been a trusted partner to the veterinary profession in Malta and Gozo, delivering advanced clinical technologies, dependable solutions, and unmatched support.
              </p>
              <Link href="#our-history" className="abt-hero-cta">
                Our Journey
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                  width={15} height={15} aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            {/* RIGHT: timeline */}
            <div id="our-journey" className="abt-timeline">
              <div className="abt-timeline-axis">
                <span className="abt-timeline-year">1996</span>
                <div className="abt-timeline-track">
                  {heroMilestones.map((m) => (
                    <span key={m.title} className="abt-timeline-node" aria-hidden="true" />
                  ))}
                </div>
                <span className="abt-timeline-year">2025</span>
              </div>

              <div className="abt-timeline-cards">
                {heroMilestones.map(({ icon: Icon, title, body, img }) => (
                  <div key={title} className="abt-tcard">
                    <div className="abt-tcard-icon">
                      <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                    </div>
                    <div className="abt-tcard-title">{title}</div>
                    <p className="abt-tcard-body">{body}</p>
                    <div className="abt-tcard-img">
                      <Image src={img} alt={title} fill style={{ objectFit: "cover" }} sizes="(max-width: 980px) 50vw, 16vw" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="abt-stats">
            {heroStats.map(({ icon: Icon, value, label, note }) => (
              <div key={label} className="abt-stat">
                <div className="abt-stat-icon">
                  <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div className="abt-stat-body">
                  <div className="abt-stat-value">{value}</div>
                  <div className="abt-stat-label">{label}</div>
                  <p className="abt-stat-note">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BAND 1 · Lead — light ── */}
      <section className="section section--light section--lg" aria-label="Who we are">
        <div className="section-inner section-inner--narrow">
          <span className="sec-eyebrow">Our Identity</span>
          <p className="about-lead-text">
            Nabuk Distributors Ltd. is a specialist partner to the veterinary profession in Malta,
            focused exclusively on advanced clinical equipment, diagnostics and infrastructure for
            modern veterinary practice.
          </p>
        </div>
      </section>

      {/* ── BAND 2 · Philosophy — tint split (image | quote) ── */}
      <section className="section section--tint" aria-label="Our philosophy">
        <div className="section-inner">
          <div className="split">
            {/* PLACEHOLDER: swap for real clinic/team photo */}
            <div className="about-image-wrap">
              <Image
                src="/images/nabuk-team.webp"
                alt="Nabuk Distributors team and clinic — placeholder image"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className="about-image-overlay" aria-hidden="true" />
            </div>

            <div className="about-quote-col">
              <blockquote className="about-blockquote">
                <span className="about-quote-mark">&ldquo;</span>
                <p>
                  We measure our success by the standard of care our partner clinics are able to provide.
                </p>
                <span className="about-quote-mark about-quote-mark--close">&rdquo;</span>
              </blockquote>
              <p className="about-conviction">
                Our work is shaped by a simple conviction: that veterinary professionals in Malta deserve
                access to the same clinical technologies as their counterparts anywhere in Europe — and
                the support to use them well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BAND 3 · Pillars — dark navy, white cards ── */}
      <section className="section section--dark" aria-label="How we work">
        <div className="section-inner">
          <div className="sec-header">
            <span className="sec-eyebrow">Our Foundation</span>
            <h2 className="sec-title">Three principles that guide everything we do</h2>
          </div>
          <div className="about-pillars-grid">
            {pillars.map((p) => (
              <div key={p.title} className="about-pillar-card">
                <div className="about-pillar-icon" style={{ color: p.accent }}>
                  {p.icon}
                </div>
                <div className="about-pillar-accent" style={{ background: p.accent }} />
                <h3 className="about-pillar-title">{p.title}</h3>
                <p className="about-pillar-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BAND 4 · Story intro + stats — light split ── */}
      <section className="section section--light" aria-label="Our story">
        <div className="section-inner">
          <div className="split">
            <div className="about-story-text">
              <span className="sec-eyebrow">Our Story</span>
              <h2 className="about-section-h2" style={{ margin: "16px 0 24px" }}>
                Nearly three decades at the centre of Maltese veterinary medicine
              </h2>
              <p className="about-story-lead">
                For nearly three decades, Nabuk Distributors has been a constant in Maltese veterinary
                medicine — present through the profession&apos;s growth, its technological evolution, and
                its increasing demands on clinical infrastructure.
              </p>
              <p className="about-story-body">
                Our history is not a straight line from products to profit. It is a story of deepening
                specialisation — of a business that chose to understand veterinary medicine rather than
                simply supply it.
              </p>
            </div>
            <div className="about-stats-col">
              <AnimatedStatsCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── BAND 5 · Timeline — paper ── */}
      <section id="our-history" className="section section--paper" aria-label="Our history">
        <div className="section-inner">
          <div className="sec-header">
            <span className="sec-eyebrow">Milestones</span>
            <h2 className="sec-title">Our History</h2>
          </div>
          <div className="timeline">
            {timeline.map((entry) => (
              <div
                key={entry.year}
                className={`timeline-entry ${entry.highlight ? "timeline-entry--highlight" : ""}`}
              >
                <div className="timeline-year-col">
                  <div className="timeline-year">{entry.year}</div>
                  <div className="timeline-line" aria-hidden="true" />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-heading" style={{ color: entry.highlight ? "var(--teal)" : "var(--navy)" }}>
                    {entry.heading}
                  </h3>
                  <p className="timeline-body">{entry.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BAND 6 · CTA — full-bleed teal ── */}
      <section className="section section--teal section--sm" aria-label="Call to action">
        <div className="section-inner">
          <div className="sec-header sec-header--center">
            <h2 className="sec-title">A legacy built on partnership. A team that understands your clinic&apos;s needs.</h2>
            <p className="sec-lead">Speak to us about what your clinic needs — today and in the future.</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/contact" className="btn-primary">Request a Consultation</Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ── About hero (timeline + stats) ── */
        .abt-hero {
          background: linear-gradient(135deg, var(--bg-1) 0%, var(--bg-2) 100%);
          padding: 0;
          color: var(--navy);
          overflow: hidden;
        }
        .abt-hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px 20px 56px;
          position: relative;
          z-index: 1;
        }
        .abt-hero-grid {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 48px;
          align-items: center;
        }
        .abt-hero-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .abt-hero-eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.6px;
          color: var(--muted);
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .abt-hero-h1 {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(30px, 3.4vw, 46px);
          line-height: 1.08;
          letter-spacing: -1.2px;
          color: var(--navy);
          margin-bottom: 20px;
          max-width: 12ch;
        }
        .abt-hero .page-hero-divider { width: 56px; margin: 0 0 22px; }
        .abt-hero-sub {
          font-size: 16px;
          color: var(--muted) !important;
          max-width: 420px;
          line-height: 1.65;
          font-weight: 500;
          margin-bottom: 30px;
        }
        .abt-hero-cta {
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
        .abt-hero-cta:hover {
          background: var(--teal-dark);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -8px rgba(31,78,78,0.55);
        }
        .abt-hero-cta:focus-visible { outline: 3px solid var(--teal); outline-offset: 3px; }
        .abt-hero-cta:active { transform: translateY(0); }

        /* timeline axis */
        .abt-timeline-axis {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 26px;
        }
        .abt-timeline-year {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(18px, 1.8vw, 24px);
          color: var(--teal);
          letter-spacing: -0.5px;
          flex-shrink: 0;
        }
        .abt-timeline-track {
          flex: 1;
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: center;
          height: 16px;
        }
        .abt-timeline-track::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          border-top: 2px dashed rgba(43,107,107,0.35);
        }
        .abt-timeline-node {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #fff;
          border: 3px solid var(--teal);
          justify-self: center;
          position: relative;
          z-index: 1;
          box-shadow: 0 0 0 4px rgba(43,107,107,0.08);
        }

        /* timeline cards */
        .abt-timeline-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .abt-tcard {
          display: flex;
          flex-direction: column;
          background: linear-gradient(155deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.34) 100%);
          backdrop-filter: blur(16px) saturate(1.35);
          -webkit-backdrop-filter: blur(16px) saturate(1.35);
          border: 1px solid rgba(255,255,255,0.7);
          border-radius: 18px;
          padding: 18px 16px 16px;
          box-shadow: 0 18px 42px -22px rgba(15,39,48,0.26), inset 0 1px 0 rgba(255,255,255,0.6);
          transition: transform 0.24s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.22s ease;
        }
        .abt-tcard:hover {
          transform: translateY(-5px);
          box-shadow: 0 26px 52px -20px rgba(15,39,48,0.3), inset 0 1px 0 rgba(255,255,255,0.7);
        }
        .abt-tcard-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--teal);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 8px 18px -6px rgba(43,107,107,0.6);
        }
        .abt-tcard-title {
          font-size: 14px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -0.2px;
          margin-bottom: 8px;
        }
        .abt-tcard-body {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.55;
          margin: 0 0 14px;
          flex: 1;
        }
        .abt-tcard-img {
          position: relative;
          width: 100%;
          height: 84px;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(43,107,107,0.06);
        }

        /* stats row */
        .abt-stats {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: linear-gradient(155deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.32) 100%);
          backdrop-filter: blur(16px) saturate(1.3);
          -webkit-backdrop-filter: blur(16px) saturate(1.3);
          border: 1px solid rgba(255,255,255,0.7);
          border-radius: 20px;
          box-shadow: 0 18px 46px -24px rgba(15,39,48,0.22), inset 0 1px 0 rgba(255,255,255,0.6);
          overflow: hidden;
        }
        .abt-stat {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 26px 26px;
        }
        .abt-stat + .abt-stat { border-left: 1px solid rgba(43,107,107,0.12); }
        .abt-stat-icon {
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
        .abt-stat-value {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 28px;
          color: var(--teal);
          letter-spacing: -1px;
          line-height: 1;
          margin-bottom: 6px;
        }
        .abt-stat-label {
          font-size: 14px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -0.1px;
          margin-bottom: 5px;
        }
        .abt-stat-note { font-size: 12px; color: var(--muted); line-height: 1.5; margin: 0; }

        @media (max-width: 980px) {
          .abt-hero-grid { grid-template-columns: 1fr; gap: 36px; }
          .abt-timeline-cards { grid-template-columns: repeat(2, 1fr); }
          .abt-timeline-track { grid-template-columns: repeat(2, 1fr); }
          .abt-stats { grid-template-columns: repeat(2, 1fr); }
          .abt-stat:nth-child(3) { border-left: none; }
          .abt-stat:nth-child(n+3) { border-top: 1px solid rgba(43,107,107,0.12); }
        }
        @media (max-width: 768px) {
          .abt-tcard, .abt-stats {
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            background: rgba(255,255,255,0.94);
          }
        }
        @media (max-width: 560px) {
          .abt-timeline-cards { grid-template-columns: 1fr; }
          .abt-timeline-axis { display: none; }
          .abt-stats { grid-template-columns: 1fr; }
          .abt-stat + .abt-stat { border-left: none; border-top: 1px solid rgba(43,107,107,0.12); }
        }

        /* ── LEAD ── */
        .about-lead-text {
          font-size: clamp(20px, 2.2vw, 26px);
          color: var(--navy);
          line-height: 1.6;
          font-weight: 500;
          margin-top: 18px;
        }

        /* ── PHILOSOPHY SPLIT ── */
        .about-image-wrap {
          border-radius: 22px;
          overflow: hidden;
          box-shadow:
            0 4px 12px -4px rgba(15,39,48,0.10),
            0 25px 56px -16px rgba(15,39,48,0.24);
          position: relative;
          height: 440px;
        }
        .about-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15,39,48,0.18) 0%, transparent 60%);
          pointer-events: none;
        }
        .about-quote-col {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .about-blockquote {
          position: relative;
          padding: 32px 32px 32px 36px;
          background: var(--navy);
          border-radius: 16px;
          margin: 0;
        }
        .about-blockquote p {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(18px, 2.2vw, 26px);
          color: #fff;
          line-height: 1.25;
          letter-spacing: -0.3px;
          position: relative;
          z-index: 1;
        }
        .about-quote-mark {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 80px;
          line-height: 0;
          color: var(--teal);
          opacity: 0.35;
          position: absolute;
          top: 40px;
          left: 20px;
          user-select: none;
        }
        .about-quote-mark--close {
          top: auto;
          left: auto;
          bottom: 8px;
          right: 20px;
        }
        .about-conviction {
          font-size: 16px;
          color: var(--muted);
          line-height: 1.7;
          border-left: 3px solid var(--teal);
          padding-left: 20px;
        }

        /* ── PILLARS (white cards on dark band) ── */
        .about-section-h2 {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(22px, 2.8vw, 34px);
          color: var(--navy);
          letter-spacing: -0.5px;
          line-height: 1.1;
        }
        .about-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .about-pillar-card {
          background: var(--card);
          border: 1px solid rgba(26,58,74,0.06);
          border-radius: 18px;
          padding: 34px 30px;
          box-shadow: 0 14px 40px -18px rgba(0,0,0,0.4);
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .about-pillar-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 26px 56px -18px rgba(0,0,0,0.5);
        }
        @media (prefers-reduced-motion: reduce) {
          .about-pillar-card { transition: none; }
          .about-pillar-card:hover { transform: none; }
        }
        .about-pillar-icon { margin-bottom: 16px; }
        .about-pillar-accent {
          width: 32px;
          height: 3px;
          border-radius: 2px;
          margin-bottom: 16px;
        }
        .about-pillar-title {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 20px;
          color: var(--navy);
          letter-spacing: -0.2px;
          margin-bottom: 10px;
        }
        .about-pillar-body {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.65;
        }

        /* ── STORY SPLIT ── */
        .about-story-text { display: flex; flex-direction: column; gap: 0; }
        .about-story-lead {
          font-size: 18px;
          color: var(--navy);
          line-height: 1.7;
          font-weight: 500;
          margin-bottom: 16px;
        }
        .about-story-body {
          font-size: 16px;
          color: var(--muted);
          line-height: 1.7;
        }
        .about-stats-col { padding-top: 8px; }

        /* ── TIMELINE ── */
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .timeline-entry {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 32px;
          padding-bottom: 48px;
          position: relative;
        }
        .timeline-entry--highlight .timeline-content {
          background: rgba(43,107,107,0.06);
          border-radius: 16px;
          padding: 24px;
          margin: -12px -16px;
        }
        .timeline-year-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        .timeline-year {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 14px;
          color: var(--teal);
          background: rgba(43,107,107,0.1);
          padding: 6px 12px;
          border-radius: 100px;
          white-space: nowrap;
          letter-spacing: 0.3px;
          flex-shrink: 0;
        }
        .timeline-line {
          flex: 1;
          width: 2px;
          background: rgba(26,58,74,0.1);
          margin-top: 12px;
          min-height: 40px;
        }
        .timeline-entry:last-child .timeline-line { display: none; }
        .timeline-content { padding-top: 2px; }
        .timeline-heading {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 19px;
          letter-spacing: -0.2px;
          margin-bottom: 10px;
        }
        .timeline-body {
          font-size: 16px;
          color: var(--muted);
          line-height: 1.7;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .about-image-wrap { height: 300px; }
          .about-pillars-grid { grid-template-columns: 1fr; gap: 16px; }
          .timeline-entry { grid-template-columns: 80px 1fr; gap: 20px; }
        }
        @media (max-width: 520px) {
          .timeline-entry { grid-template-columns: 1fr; }
          .timeline-year-col { flex-direction: row; align-items: center; gap: 12px; }
          .timeline-line { display: none; }
        }
      `}</style>
    </>
  );
}
