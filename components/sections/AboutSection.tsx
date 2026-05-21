import Link from "next/link";
import { AnimatedStatsCard } from "@/components/animations/AnimatedStatsCard";

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
      {/* Page hero */}
      <div className="page-hero">
<div className="page-hero-inner">
          <div className="page-hero-divider" />
          <h1>About Us</h1>
          <p className="page-hero-sub">
            Helping shape modern veterinary practice in Malta since 1996.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="page-content">
        {/* Intro */}
        <section aria-label="Introduction" style={{ marginBottom: "64px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }} className="about-intro-grid">
            <div>
              <p style={{ fontSize: "19px", color: "var(--navy)", lineHeight: 1.7, fontWeight: 500, marginBottom: "20px" }}>
                For nearly three decades, Nabuk Distributors has been a constant in Maltese veterinary medicine — present through the profession&apos;s growth, its technological evolution, and its increasing demands on clinical infrastructure.
              </p>
              <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7 }}>
                Our history is not a straight line from products to profit. It is a story of deepening specialisation — of a business that chose to understand veterinary medicine rather than simply supply it.
              </p>
            </div>
            <AnimatedStatsCard />
          </div>
        </section>

        {/* Timeline */}
        <section aria-label="Our history">
          <h2 style={{
            fontFamily: "var(--font-archivo-black, 'Archivo Black')",
            fontSize: "clamp(24px, 3vw, 36px)",
            color: "var(--navy)",
            letterSpacing: "-0.5px",
            marginBottom: "48px",
          }}>
            Our History
          </h2>
          <div className="timeline">
            {timeline.map((entry) => (
              <div key={entry.year} className={`timeline-entry ${entry.highlight ? "timeline-entry--highlight" : ""}`}>
                {/* Year marker */}
                <div className="timeline-year-col">
                  <div className="timeline-year">{entry.year}</div>
                  <div className="timeline-line" aria-hidden="true" />
                </div>
                {/* Content */}
                <div className="timeline-content">
                  <h3 style={{
                    fontFamily: "var(--font-archivo-black, 'Archivo Black')",
                    fontSize: "20px",
                    color: entry.highlight ? "var(--teal)" : "var(--navy)",
                    marginBottom: "12px",
                    letterSpacing: "-0.2px",
                  }}>
                    {entry.heading}
                  </h3>
                  <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7 }}>
                    {entry.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Call to action" style={{ marginTop: "64px" }} className="page-cta-band">
          <h2>A legacy built on partnership with the veterinary profession.</h2>
          <p>Speak to us about what your clinic needs — today and in the future.</p>
          <Link href="/contact" className="btn-primary">
            Request a Consultation
          </Link>
        </section>
      </div>

      <style>{`
        .about-intro-grid { }
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
          font-size: 15px;
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
        .timeline-content { padding-top: 4px; }

        @media (max-width: 900px) {
          .about-intro-grid { grid-template-columns: 1fr !important; }
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
