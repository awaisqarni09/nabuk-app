import Image from "next/image";
import Link from "next/link";
import { AnimatedStatsCard } from "@/components/animations/AnimatedStatsCard";

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
      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-divider" />
          <h1>About Us</h1>
          <p className="page-hero-sub">
            A specialist partner to Malta&apos;s veterinary profession since 1996 — built on competence, trust, and longevity.
          </p>
        </div>
      </div>

      <div className="page-content">

        {/* ══════════════════════════════════════
            ACT 1 — IDENTITY
            Who we are, our philosophy, our values
            ══════════════════════════════════════ */}

        {/* Opening lead */}
        <section aria-label="Who we are" className="about-lead-section">
          <div className="about-eyebrow">Our Identity</div>
          <p className="about-lead-text">
            Nabuk Distributors Ltd. is a specialist partner to the veterinary profession in Malta,
            focused exclusively on advanced clinical equipment, diagnostics and infrastructure for
            modern veterinary practice.
          </p>
        </section>

        {/* Image + philosophy quote — side by side */}
        <section aria-label="Our philosophy" className="about-philosophy-grid">
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
        </section>

        {/* Three philosophy pillars — full-width tinted band */}
        <section aria-label="How we work" className="about-pillars-band">
          <div className="about-pillars-header">
            <div className="about-eyebrow">Our Foundation</div>
            <h2 className="about-section-h2">Three principles that guide everything we do</h2>
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
        </section>

        {/* ══════════════════════════════════════
            ACT 2 — LEGACY
            Our story, our history, our timeline
            ══════════════════════════════════════ */}

        <div className="about-act-divider" aria-hidden="true">
          <div className="about-act-divider-line" />
          <div className="about-act-divider-label">Our Story</div>
          <div className="about-act-divider-line" />
        </div>

        {/* Story intro + stats */}
        <section aria-label="Our story" className="about-story-intro">
          <div className="about-story-text">
            <h2 className="about-section-h2" style={{ marginBottom: "24px" }}>
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
        </section>

        {/* Timeline */}
        <section aria-label="Our history" className="about-timeline-section">
          <div className="about-eyebrow" style={{ marginBottom: "16px" }}>Milestones</div>
          <h2 className="about-section-h2" style={{ marginBottom: "48px" }}>Our History</h2>
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
        </section>

        {/* CTA */}
        <section aria-label="Call to action" style={{ marginTop: "64px" }} className="page-cta-band">
          <h2>A legacy built on partnership. A team that understands your clinic&apos;s needs.</h2>
          <p>Speak to us about what your clinic needs — today and in the future.</p>
          <Link href="/contact" className="btn-primary">
            Request a Consultation
          </Link>
        </section>
      </div>

      <style>{`
        /* ── LEAD ── */
        .about-lead-section {
          margin-bottom: 56px;
          max-width: 820px;
        }
        .about-eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 14px;
        }
        .about-lead-text {
          font-size: clamp(18px, 2vw, 22px);
          color: var(--navy);
          line-height: 1.65;
          font-weight: 500;
        }

        /* ── PHILOSOPHY GRID ── */
        .about-philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
          margin-bottom: 0;
        }
        .about-image-wrap {
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 4px 12px -4px rgba(15,39,48,0.10),
            0 25px 50px -15px rgba(15,39,48,0.22);
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

        /* ── PILLARS BAND ── */
        .about-pillars-band {
          background: var(--bg-2);
          border-radius: 24px;
          padding: 56px 48px;
          margin: 56px 0 0;
        }
        .about-pillars-header {
          margin-bottom: 40px;
        }
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
          gap: 20px;
        }
        .about-pillar-card {
          background: var(--card);
          border-radius: 16px;
          padding: 32px 28px;
          box-shadow: 0 4px 20px -8px rgba(15,39,48,0.12);
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: transform 0.22s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        .about-pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px -10px rgba(15,39,48,0.2);
        }
        @media (prefers-reduced-motion: reduce) {
          .about-pillar-card { transition: none; }
          .about-pillar-card:hover { transform: none; }
        }
        .about-pillar-icon {
          margin-bottom: 16px;
        }
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

        /* ── ACT DIVIDER ── */
        .about-act-divider {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 72px 0 56px;
        }
        .about-act-divider-line {
          flex: 1;
          height: 1px;
          background: rgba(26,58,74,0.12);
        }
        .about-act-divider-label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--teal);
          white-space: nowrap;
        }

        /* ── STORY INTRO ── */
        .about-story-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
          margin-bottom: 72px;
        }
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
        .about-stats-col {
          padding-top: 8px;
        }

        /* ── TIMELINE SECTION ── */
        .about-timeline-section { }
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
          margin: -24px;
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
          .about-philosophy-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .about-image-wrap { height: 300px; }
          .about-pillars-band { padding: 40px 24px; }
          .about-pillars-grid { grid-template-columns: 1fr; gap: 16px; }
          .about-story-intro {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .timeline-entry { grid-template-columns: 80px 1fr; gap: 20px; }
        }
        @media (max-width: 520px) {
          .about-pillars-band { padding: 32px 16px; }
          .timeline-entry { grid-template-columns: 1fr; }
          .timeline-year-col { flex-direction: row; align-items: center; gap: 12px; }
          .timeline-line { display: none; }
        }
      `}</style>
    </>
  );
}
