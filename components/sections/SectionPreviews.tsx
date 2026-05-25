import Link from "next/link";
import {
  Activity, Droplets, Scan, FlaskConical, Scissors, Thermometer,
  Globe, MessageSquare, Settings, BookOpen, Wrench, Phone, Mail, MapPin,
} from "lucide-react";
import { PreviewAnimator } from "@/components/animations/PreviewAnimator";

/* ─── Shared styles — rendered once from page.tsx ─── */
export function PVStyles() {
  return (
    <style>{`
      /* ── Section shell ── */
      .pv-section {
        position: relative;
        overflow: hidden;
      }
      .pv-inner {
        max-width: 1280px;
        margin: 0 auto;
        padding: 72px 24px 80px;
      }
      .pv-content { position: relative; z-index: 1; }

      /* ── Gradient divider ── */
      .pv-divider {
        height: 1px;
        margin: 0 28px;
        background: linear-gradient(
          to right,
          transparent,
          rgba(43,107,107,0.2) 20%,
          rgba(43,107,107,0.2) 80%,
          transparent
        );
      }

      /* ── Watermark number ── */
      .pv-bg-num {
        position: absolute;
        top: 50%;
        right: -8px;
        transform: translateY(-52%);
        font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
        font-size: clamp(130px, 19vw, 210px);
        font-weight: 900;
        color: rgba(43,107,107,0.038);
        line-height: 1;
        pointer-events: none;
        user-select: none;
        letter-spacing: -6px;
        z-index: 0;
      }

      /* ── Header ── */
      .pv-head { margin-bottom: 36px; }

      .pv-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(43,107,107,0.08);
        color: var(--teal);
        font-size: 10.5px;
        font-weight: 800;
        letter-spacing: 2.2px;
        padding: 5px 13px;
        border-radius: 999px;
        text-transform: uppercase;
        margin-bottom: 16px;
      }

      .pv-head-main {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 24px;
      }

      .pv-head-text {
        flex: 1;
        min-width: 0;
      }

      .pv-title {
        font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
        font-size: clamp(30px, 4.2vw, 48px);
        color: var(--navy);
        letter-spacing: -0.7px;
        line-height: 1;
        margin-bottom: 14px;
      }

      .pv-desc {
        font-size: 15px;
        color: var(--muted);
        line-height: 1.65;
        max-width: 560px;
      }

      /* ── CTA link ── */
      .pv-cta {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        font-size: 13px;
        font-weight: 700;
        color: #fff;
        background: var(--teal);
        padding: 12px 24px;
        border-radius: 999px;
        text-decoration: none;
        letter-spacing: 0.3px;
        white-space: nowrap;
        flex-shrink: 0;
        box-shadow:
          0 6px 20px -6px rgba(43,107,107,0.45),
          0 2px 6px -2px rgba(43,107,107,0.18);
        transition:
          background 0.2s ease,
          transform 0.22s cubic-bezier(0.34,1.4,0.64,1),
          box-shadow 0.2s ease;
      }
      .pv-cta:hover {
        background: var(--teal-dark);
        transform: translateY(-3px);
        box-shadow:
          0 12px 30px -6px rgba(43,107,107,0.5),
          0 4px 10px -2px rgba(43,107,107,0.2);
      }
      .pv-cta:focus-visible {
        outline: 3px solid var(--teal);
        outline-offset: 3px;
      }
      .pv-cta:active { transform: translateY(0); }
      .pv-cta-arrow {
        transition: transform 0.22s cubic-bezier(0.34,1.4,0.64,1);
      }
      .pv-cta:hover .pv-cta-arrow {
        transform: translate(3px, -3px);
      }

      /* ── Cards ── */
      .pv-item {
        background: rgba(255,255,255,0.8);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1.5px solid rgba(43,107,107,0.09);
        border-radius: 18px;
        padding: 22px 20px;
        box-shadow:
          0 2px 10px -3px rgba(15,39,48,0.07),
          0 1px 3px rgba(15,39,48,0.04);
        transition:
          transform 0.24s cubic-bezier(0.34,1.4,0.64,1),
          box-shadow 0.22s ease,
          border-color 0.22s ease,
          background 0.22s ease;
      }
      .pv-item:hover {
        transform: translateY(-5px);
        background: rgba(255,255,255,0.95);
        border-color: rgba(43,107,107,0.2);
        box-shadow:
          0 18px 44px -12px rgba(15,39,48,0.16),
          0 6px 16px -4px rgba(15,39,48,0.08);
      }

      /* ── Icon badge ── */
      .pv-icon-badge {
        width: 46px;
        height: 46px;
        border-radius: 13px;
        background: rgba(43,107,107,0.09);
        color: var(--teal);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: background 0.2s ease;
      }
      .pv-item:hover .pv-icon-badge {
        background: rgba(43,107,107,0.16);
      }

      /* ── Responsive ── */
      @media (max-width: 768px) {
        .pv-inner { padding: 56px 20px 64px; }
        .pv-bg-num { font-size: 100px; }
      }
      @media (max-width: 640px) {
        .pv-head-main { flex-direction: column; gap: 20px; }
        .pv-cta { width: 100%; justify-content: center; }
      }
    `}</style>
  );
}

/* ─── Reusable CTA link ─── */
function CTALink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="pv-cta">
      {label}
      <svg
        className="pv-cta-arrow"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={14}
        height={14}
        aria-hidden="true"
      >
        <path d="M3 13L13 3M13 3H6M13 3v7" />
      </svg>
    </Link>
  );
}

/* ─── Gradient divider ─── */
export function PVDivider() {
  return <div className="pv-divider" />;
}

/* ══════════════════════════════════════════════════════
   01  SOLUTIONS
══════════════════════════════════════════════════════ */
const solutionItems = [
  { icon: Activity,     title: "Diagnostic Systems"    },
  { icon: Droplets,     title: "Blood Analysers"       },
  { icon: Scan,         title: "Imaging Solutions"     },
  { icon: FlaskConical, title: "Rapid Testing"         },
  { icon: Scissors,     title: "Surgical Instruments"  },
  { icon: Thermometer,  title: "Sterilisation Systems" },
];

export function SolutionsPreview() {
  return (
    <PreviewAnimator>
      <section className="pv-section" aria-label="Solutions overview">
        <div className="pv-bg-num" aria-hidden="true">01</div>
        <div className="pv-inner pv-content">
          <header className="pv-head">
            <div className="pv-eyebrow">What we supply</div>
            <div className="pv-head-main">
              <div className="pv-head-text">
                <h2 className="pv-title">Solutions</h2>
                <p className="pv-desc">
                  Advanced veterinary equipment and clinical technology for every discipline — from diagnostics to the surgical suite.
                </p>
              </div>
              <CTALink href="/solutions" label="Explore all solutions" />
            </div>
          </header>

          <div className="sol-grid">
            {solutionItems.map(({ icon: Icon, title }) => (
              <div key={title} className="pv-item sol-item">
                <div className="pv-icon-badge">
                  <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <span className="sol-name">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .sol-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .sol-item { display: flex; align-items: center; gap: 14px; }
        .sol-name {
          font-size: 13.5px;
          font-weight: 700;
          color: var(--navy);
          letter-spacing: 0.1px;
        }
        @media (max-width: 680px) { .sol-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 400px) { .sol-grid { grid-template-columns: 1fr; } }
      `}</style>
    </PreviewAnimator>
  );
}

/* ══════════════════════════════════════════════════════
   02  PARTNERS
══════════════════════════════════════════════════════ */
const partnerItems = [
  { name: "Eickemeyer",  description: "Veterinary instruments & equipment, Germany." },
  { name: "Antech",      description: "Diagnostic laboratory services and analysers."  },
  { name: "Melag",       description: "Sterilisation and hygiene solutions, Germany."   },
  { name: "Covetrus",    description: "Global animal health technology and solutions."  },
];

export function PartnersPreview() {
  return (
    <PreviewAnimator>
      <section className="pv-section" aria-label="Partners overview">
        <div className="pv-bg-num" aria-hidden="true">02</div>
        <div className="pv-inner pv-content">
          <header className="pv-head">
            <div className="pv-eyebrow">Who we represent</div>
            <div className="pv-head-main">
              <div className="pv-head-text">
                <h2 className="pv-title">Our Partners</h2>
                <p className="pv-desc">
                  Global manufacturers bringing world-class veterinary technology to Malta and Gozo.
                </p>
              </div>
              <CTALink href="/partners" label="View all partners" />
            </div>
          </header>

          <div className="part-grid">
            {partnerItems.map(({ name, description }) => (
              <div key={name} className="pv-item part-card">
                <div className="pv-icon-badge">
                  <Globe size={20} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div className="part-name">{name}</div>
                <div className="part-desc">{description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .part-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .part-card { display: flex; flex-direction: column; gap: 10px; }
        .part-name { font-size: 15px; font-weight: 800; color: var(--navy); }
        .part-desc { font-size: 13px; color: var(--muted); line-height: 1.5; }
        @media (max-width: 500px) { .part-grid { grid-template-columns: 1fr; } }
      `}</style>
    </PreviewAnimator>
  );
}

/* ══════════════════════════════════════════════════════
   03  ABOUT  (with animated counters)
══════════════════════════════════════════════════════ */
const aboutStats = [
  {
    id: "founded",
    countFrom: 1988,
    countTo: 1996,
    suffix: "",
    label: "Year founded",
    note: "Nearly 30 years serving Malta's veterinary profession.",
  },
  {
    id: "years",
    countFrom: 0,
    countTo: 28,
    suffix: "+",
    label: "Years in business",
    note: "A stable, established partner the profession can rely on.",
  },
  {
    id: "focus",
    staticText: "100%",
    label: "Specialisation",
    note: "Exclusively focused on veterinary equipment and diagnostics.",
  },
] as const;

export function AboutPreview() {
  return (
    <PreviewAnimator countTargets>
      <section className="pv-section" aria-label="About overview">
        <div className="pv-bg-num" aria-hidden="true">03</div>
        <div className="pv-inner pv-content">
          <header className="pv-head">
            <div className="pv-eyebrow">Our story</div>
            <div className="pv-head-main">
              <div className="pv-head-text">
                <h2 className="pv-title">About Nabuk</h2>
                <p className="pv-desc">
                  A specialist veterinary distributor built on three decades of local partnership and clinical expertise in Malta.
                </p>
              </div>
              <CTALink href="/about" label="Learn our story" />
            </div>
          </header>

          <div className="about-grid">
            {aboutStats.map((stat) => (
              <div key={stat.id} className="pv-item about-card">
                <div className="about-val">
                  {"countTo" in stat ? (
                    <span
                      data-count-from={stat.countFrom}
                      data-count-to={stat.countTo}
                      data-count-suffix={stat.suffix}
                    >
                      {stat.countFrom}{stat.suffix}
                    </span>
                  ) : (
                    <span>{stat.staticText}</span>
                  )}
                </div>
                <div className="about-label">{stat.label}</div>
                <div className="about-note">{stat.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .about-card { text-align: center; padding: 36px 24px; }
        .about-val {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(36px, 5.5vw, 56px);
          color: var(--teal);
          letter-spacing: -1.5px;
          line-height: 1;
          margin-bottom: 10px;
        }
        .about-label {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: var(--navy);
          margin-bottom: 10px;
        }
        .about-note { font-size: 13px; color: var(--muted); line-height: 1.55; }
        @media (max-width: 580px) { .about-grid { grid-template-columns: 1fr; } }
      `}</style>
    </PreviewAnimator>
  );
}

/* ══════════════════════════════════════════════════════
   04  SUPPORT
══════════════════════════════════════════════════════ */
const supportItems = [
  { icon: MessageSquare, number: "01", title: "Consultation",  note: "We help you choose the right equipment for your clinic and caseload."           },
  { icon: Settings,      number: "02", title: "Installation",  note: "Full installation and commissioning of X-ray, ultrasound and lab systems."       },
  { icon: BookOpen,      number: "03", title: "Training",      note: "Hands-on training at the point of installation and beyond."                      },
  { icon: Wrench,        number: "04", title: "After-Sales",   note: "On-island servicing to keep your equipment running reliably."                    },
];

export function SupportPreview() {
  return (
    <PreviewAnimator>
      <section className="pv-section" aria-label="Support overview">
        <div className="pv-bg-num" aria-hidden="true">04</div>
        <div className="pv-inner pv-content">
          <header className="pv-head">
            <div className="pv-eyebrow">How we help</div>
            <div className="pv-head-main">
              <div className="pv-head-text">
                <h2 className="pv-title">Support & Services</h2>
                <p className="pv-desc">
                  From first consultation through to long-term after-sales care — we're with you every step.
                </p>
              </div>
              <CTALink href="/support" label="View all services" />
            </div>
          </header>

          <div className="sup-grid">
            {supportItems.map(({ icon: Icon, number, title, note }) => (
              <div key={title} className="pv-item sup-card">
                <div className="sup-top">
                  <span className="sup-num">{number}</span>
                  <div className="pv-icon-badge">
                    <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                </div>
                <div className="sup-title">{title}</div>
                <div className="sup-note">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .sup-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .sup-card { display: flex; flex-direction: column; gap: 10px; }
        .sup-top { display: flex; align-items: center; justify-content: space-between; }
        .sup-num {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 30px;
          color: rgba(43,107,107,0.11);
          letter-spacing: -0.5px;
          line-height: 1;
        }
        .sup-title { font-size: 15px; font-weight: 800; color: var(--navy); }
        .sup-note  { font-size: 13px; color: var(--muted); line-height: 1.5; }
        @media (max-width: 500px) { .sup-grid { grid-template-columns: 1fr; } }
      `}</style>
    </PreviewAnimator>
  );
}

/* ══════════════════════════════════════════════════════
   05  CONTACT
══════════════════════════════════════════════════════ */
const contactItems = [
  { icon: Phone,  label: "Phone",    value: "+356 9947 2220"   },
  { icon: Mail,   label: "Email",    value: "info@nabukmalta.com" },
  { icon: MapPin, label: "Location", value: "Malta & Gozo"     },
];

export function ContactPreview() {
  return (
    <PreviewAnimator>
      <section className="pv-section" aria-label="Contact overview">
        <div className="pv-bg-num" aria-hidden="true">05</div>
        <div className="pv-inner pv-content">
          <header className="pv-head">
            <div className="pv-eyebrow">Reach us</div>
            <div className="pv-head-main">
              <div className="pv-head-text">
                <h2 className="pv-title">Contact</h2>
                <p className="pv-desc">
                  Consultations, quotes and enquiries — we're here to help your clinic find the right solution.
                </p>
              </div>
              <CTALink href="/contact" label="Get in touch" />
            </div>
          </header>

          <div className="con-grid">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="pv-item con-card">
                <div className="pv-icon-badge">
                  <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div className="con-label">{label}</div>
                <div className="con-value">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .con-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .con-card { display: flex; flex-direction: column; gap: 10px; padding: 28px 22px; }
        .con-label {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--muted);
        }
        .con-value { font-size: 15px; font-weight: 800; color: var(--navy); }
        @media (max-width: 660px) { .con-grid { grid-template-columns: 1fr; } }
      `}</style>
    </PreviewAnimator>
  );
}
