import Image from "next/image";
import Link from "next/link";
import {
  Activity, Droplets, Scan, FlaskConical, Scissors, Thermometer,
  Globe, MessageSquare, Settings, BookOpen, Wrench, Phone, Mail, MapPin,
  ShieldCheck, Headphones, ArrowRightLeft, Heart, Users, Clock, Award,
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
        background: linear-gradient(155deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.34) 100%);
        backdrop-filter: blur(16px) saturate(1.35);
        -webkit-backdrop-filter: blur(16px) saturate(1.35);
        border: 1px solid rgba(255,255,255,0.7);
        border-radius: 18px;
        padding: 22px 20px;
        box-shadow:
          0 2px 10px -3px rgba(15,39,48,0.07),
          0 18px 42px -20px rgba(15,39,48,0.24),
          inset 0 1px 0 rgba(255,255,255,0.6);
        transition:
          transform 0.24s cubic-bezier(0.34,1.4,0.64,1),
          box-shadow 0.22s ease,
          border-color 0.22s ease,
          background 0.22s ease;
      }
      .pv-item:hover {
        transform: translateY(-5px);
        border-color: rgba(255,255,255,0.92);
        box-shadow:
          0 26px 52px -16px rgba(15,39,48,0.2),
          0 6px 16px -4px rgba(15,39,48,0.08),
          inset 0 1px 0 rgba(255,255,255,0.7);
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
        /* Remove backdrop-filter on mobile: multiple simultaneous blur()
           elements exhaust Mobile Safari's GPU compositor, making the page
           appear frozen or blank. Solid background is visually equivalent. */
        .pv-item {
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          background: rgba(255,255,255,0.97);
        }
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
  { icon: Activity,     title: "Diagnostic Systems",    img: "/images/diagnostic-system.webp",    desc: "Fast, precise diagnostics for confident clinical decisions."      },
  { icon: Droplets,     title: "Blood Analysers",       img: "/images/blood-analysers.webp",       desc: "Haematology and biochemical analysis for in-house results."      },
  { icon: Scan,         title: "Imaging Solutions",     img: "/images/x-ray.webp",                 desc: "Digital X-ray, ultrasound and imaging for every discipline."    },
  { icon: FlaskConical, title: "Rapid Testing",         img: "/images/rapid-testing.webp",         desc: "Point-of-care test systems for immediate clinical decisions."    },
  { icon: Scissors,     title: "Surgical Instruments",  img: "/images/surgical-instruments.webp",  desc: "Precision instruments from specialist veterinary manufacturers." },
  { icon: Thermometer,  title: "Sterilisation Systems", img: "/images/sterilisation.webp",         desc: "Autoclaves and hygiene systems for modern veterinary practice."  },
];

const solTrustPoints = [
  { icon: ShieldCheck,     label: "Trusted Quality",         note: "Rigorous standards across every product we supply."       },
  { icon: Headphones,      label: "Expert Support",          note: "Technical guidance from veterinary equipment specialists." },
  { icon: ArrowRightLeft,  label: "End-to-End Solutions",    note: "From first consultation through to after-sales care."     },
  { icon: Heart,           label: "Built for Veterinary Care", note: "Exclusively focused on veterinary practice in Malta."   },
];

export function SolutionsPreview() {
  return (
    <PreviewAnimator>
      <section className="pv-section" aria-label="Solutions overview">
        <div className="pv-bg-num" aria-hidden="true">01</div>

        <div className="pv-inner pv-content">

          {/*
            Circle is INSIDE pv-content (max-width: 1280px constrained).
            width: 50% means half the content width, so the circle
            genuinely fills the right half.
            top: -72px cancels pv-inner's top padding → places circle at
            the section's very top edge.
            right: -24px cancels pv-inner's right padding → places circle
            flush with the section's right edge.
          */}
          <div className="sol-circle-wrap">
            <div className="sol-circle-ring" aria-hidden="true" />
            <div className="sol-circle-img">
              <Image
                src="/images/veterinary-solution.webp"
                alt="Veterinary care with advanced clinical equipment"
                fill
                style={{ objectFit: "cover", objectPosition: "center center" }}
                sizes="(max-width: 900px) 0px, 50vw"
              />
            </div>
          </div>

          {/* Text block: left half, clears the circle */}
          <div className="sol-text">
            <div className="pv-eyebrow">What we supply</div>
            <h2 className="pv-title sol-title">Solutions</h2>
            <p className="pv-desc">
              Advanced veterinary equipment and clinical technology for every discipline — from diagnostics to the surgical suite.
            </p>
            <CTALink href="/solutions" label="Explore all solutions" />
          </div>

          {/* ── 3×2 card grid ── */}
          <div className="sol-grid">
            {solutionItems.map(({ icon: Icon, title, img, desc }) => (
              <div key={title} className="pv-item sol-card">
                <div className="sol-card-head">
                  <div className="pv-icon-badge">
                    <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <div className="sol-thumb">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="72px"
                    />
                  </div>
                </div>
                <div className="sol-card-title">{title}</div>
                <p className="sol-card-body">{desc}</p>
                <div className="sol-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" width={11} height={11}>
                    <path d="M3 13L13 3M13 3H6M13 3v7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* ── Trust bar ── */}
          <div className="sol-trust">
            {solTrustPoints.map(({ icon: Icon, label, note }) => (
              <div key={label} className="sol-trust-item">
                <div className="sol-trust-icon">
                  <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div>
                  <div className="sol-trust-label">{label}</div>
                  <div className="sol-trust-note">{note}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <style>{`
        /*
          Circle: inside pv-content (max-width 1280px constrained).
          width: 50% = half the content area = right half of the section.
          aspect-ratio: 1 = perfect circle.
          top: -72px reverses pv-inner top padding → circle top at section top.
          right: -24px reverses pv-inner right padding → circle right at section right.
          z-index: 0 puts it behind pv-content children (painted first in source order).
        */
        .sol-circle-wrap {
          position: absolute;
          top: -72px;
          right: -24px;
          width: 50%;
          aspect-ratio: 1;
          z-index: 0;
          pointer-events: none;
        }
        /* Soft teal halo — slightly larger than the photo circle */
        .sol-circle-ring {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: rgba(43,107,107,0.11);
        }
        /* Photo fills the circle */
        .sol-circle-img {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          overflow: hidden;
          box-shadow:
            0 24px 64px -16px rgba(15,39,48,0.22),
            0 8px 20px -6px rgba(15,39,48,0.1);
        }

        /* Text: constrained to left half, painted after circle (on top) */
        .sol-text {
          max-width: 44%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 44px;
          padding-top: 4px;
          position: relative;
          z-index: 1;
        }
        /* Larger title to match reference */
        .sol-title {
          font-size: clamp(44px, 5.6vw, 72px) !important;
          line-height: 0.95 !important;
          margin-bottom: 18px !important;
        }
        .sol-text .pv-desc { margin-bottom: 28px; }

        /* ── Card grid ── */
        .sol-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 20px;
        }
        .sol-card {
          padding: 18px 18px 14px;
          display: flex;
          flex-direction: column;
        }
        .sol-card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
        }
        .sol-thumb {
          position: relative;
          width: 68px;
          height: 56px;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(43,107,107,0.06);
          flex-shrink: 0;
        }
        .sol-card-title {
          font-size: 14px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -0.1px;
          margin-bottom: 6px;
        }
        .sol-card-body {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.55;
          flex: 1;
          margin-bottom: 12px;
        }
        .sol-arrow {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(43,107,107,0.1);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: flex-end;
          transition: background 0.18s ease, transform 0.2s cubic-bezier(0.34,1.4,0.64,1);
        }
        .pv-item:hover .sol-arrow {
          background: var(--teal);
          color: #fff;
          transform: translate(2px, -2px);
        }

        /* ── Trust bar ── */
        .sol-trust {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(43,107,107,0.12);
          border-radius: 16px;
          overflow: hidden;
        }
        .sol-trust-item {
          background: rgba(255,255,255,0.82);
          padding: 16px 14px;
          display: flex;
          align-items: flex-start;
          gap: 11px;
        }
        .sol-trust-icon {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: rgba(43,107,107,0.09);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .sol-trust-label {
          font-size: 12px;
          font-weight: 800;
          color: var(--navy);
          margin-bottom: 3px;
          letter-spacing: 0.1px;
        }
        .sol-trust-note {
          font-size: 11px;
          color: var(--muted);
          line-height: 1.45;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .sol-circle-wrap { display: none; }
          .sol-text { max-width: 100%; margin-bottom: 32px; }
          .sol-title { font-size: clamp(36px, 8vw, 52px) !important; }
          .sol-grid { grid-template-columns: repeat(2, 1fr); }
          .sol-trust { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .sol-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .sol-trust { grid-template-columns: repeat(2, 1fr); }
          .sol-thumb { width: 56px; height: 46px; }
        }
        @media (max-width: 400px) {
          .sol-grid { grid-template-columns: 1fr; }
          .sol-trust { grid-template-columns: 1fr; }
        }
      `}</style>
    </PreviewAnimator>
  );
}

/* ══════════════════════════════════════════════════════
   02  PARTNERS
══════════════════════════════════════════════════════ */
const partnerItems = [
  { icon: Scissors,     name: "Eickemeyer", region: "Germany", description: "Specialist veterinary instruments and surgical equipment."  },
  { icon: FlaskConical, name: "Antech",     region: "Global",  description: "Diagnostic laboratory services and in-house analysers."    },
  { icon: ShieldCheck,  name: "Melag",      region: "Germany", description: "Sterilisation and hygiene systems for modern clinics."     },
  { icon: Heart,        name: "Covetrus",   region: "Global",  description: "Animal health technology and veterinary solutions."        },
];

const prtTrustPoints = [
  { icon: Globe,   label: "Global Standards",   note: "Manufacturers trusted by veterinary clinics worldwide."     },
  { icon: Award,   label: "Quality Assured",    note: "Only products meeting veterinary-grade specifications."     },
  { icon: MapPin,  label: "Malta Exclusive",    note: "Direct manufacturer representation on the islands."        },
  { icon: Clock,   label: "Decades of Trust",   note: "Partnership relationships built over 28+ years."           },
];

export function PartnersPreview() {
  return (
    <PreviewAnimator>
      <section className="pv-section prt-section" aria-label="Partners overview">

        {/* Full-bleed background image behind all content */}
        <div className="prt-bg" aria-hidden="true">
          <Image
            src="/images/diagnostic-system.webp"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="100vw"
          />
          <div className="prt-bg-overlay" />
        </div>

        <div className="pv-bg-num" aria-hidden="true">02</div>
        <div className="pv-inner pv-content">

          {/* ── Hero text ── */}
          <div className="prt-text">
            <div className="pv-eyebrow">Who we represent</div>
            <h2 className="pv-title">Our Partners</h2>
            <p className="pv-desc">
              Global manufacturers bringing world-class veterinary technology directly to Malta and Gozo.
            </p>
            <CTALink href="/partners" label="View all partners" />
          </div>

          {/* ── 1×4 partner card row ── */}
          <div className="prt-grid">
            {partnerItems.map(({ icon: Icon, name, region, description }) => (
              <div key={name} className="pv-item prt-card">
                <div className="pv-icon-badge prt-card-icon">
                  <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div className="prt-name">{name}</div>
                <span className="prt-region">{region}</span>
                <p className="prt-desc">{description}</p>
                <div className="prt-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" width={11} height={11}>
                    <path d="M3 13L13 3M13 3H6M13 3v7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* ── Trust bar ── */}
          <div className="prt-trust">
            {prtTrustPoints.map(({ icon: Icon, label, note }) => (
              <div key={label} className="prt-trust-item">
                <div className="prt-trust-icon">
                  <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div>
                  <div className="prt-trust-label">{label}</div>
                  <div className="prt-trust-note">{note}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <style>{`
        /* ── Full-bleed background ── */
        .prt-section { position: relative; }
        .prt-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .prt-bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(232,244,244,0.80);
          pointer-events: none;
        }

        /* ── Hero text ── */
        .prt-text {
          max-width: 560px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 36px;
        }
        .prt-text .pv-title { margin-bottom: 14px; }
        .prt-text .pv-desc  { margin-bottom: 24px; }
        .prt-text .pv-cta {
          padding: 9px 18px;
          font-size: 12px;
          gap: 7px;
        }

        /* ── 1×4 partner card row ── */
        .prt-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 28px;
        }
        .prt-card {
          padding: 20px 16px 16px;
          display: flex;
          flex-direction: column;
          min-height: 188px;
          border-radius: 14px;
          background: #ffffff;
          box-shadow:
            0 2px 14px -4px rgba(15,39,48,0.1),
            0 1px 3px rgba(15,39,48,0.05);
        }
        .prt-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(to right, var(--teal), var(--teal-dark));
          border-radius: 14px 14px 0 0;
        }
        .prt-card-icon { margin-bottom: 14px; }
        .prt-name {
          font-size: 14px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -0.2px;
          margin-bottom: 4px;
        }
        .prt-region {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          color: var(--teal);
          background: rgba(43,107,107,0.08);
          padding: 2px 8px;
          border-radius: 100px;
          letter-spacing: 0.3px;
          margin-bottom: 10px;
        }
        .prt-desc {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.55;
          flex: 1;
          margin-bottom: 14px;
        }
        .prt-arrow {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(43,107,107,0.1);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: flex-end;
          transition: background 0.18s ease, transform 0.2s cubic-bezier(0.34,1.4,0.64,1);
        }
        .pv-item:hover .prt-arrow {
          background: var(--teal);
          color: #fff;
          transform: translate(2px, -2px);
        }

        /* ── Trust bar ── */
        .prt-trust {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(43,107,107,0.12);
          border-radius: 16px;
          overflow: hidden;
        }
        .prt-trust-item {
          background: rgba(255,255,255,0.82);
          padding: 16px 14px;
          display: flex;
          align-items: flex-start;
          gap: 11px;
        }
        .prt-trust-icon {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: rgba(43,107,107,0.09);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .prt-trust-label {
          font-size: 12px;
          font-weight: 800;
          color: var(--navy);
          margin-bottom: 3px;
          letter-spacing: 0.1px;
        }
        .prt-trust-note {
          font-size: 11px;
          color: var(--muted);
          line-height: 1.45;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .prt-grid { grid-template-columns: repeat(2, 1fr); }
          .prt-trust { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .prt-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .prt-trust { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 400px) {
          .prt-grid { grid-template-columns: 1fr; }
          .prt-trust { grid-template-columns: 1fr; }
        }
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

const aboutMilestones = [
  { year: "1996", title: "Founded",         body: "Established to serve Malta's growing veterinary profession."         },
  { year: "2001", title: "Hill's Partner",  body: "Introduced prescription diets and supported clinical education."    },
  { year: "2018", title: "Full Transition", body: "Became fully dedicated to veterinary equipment and diagnostics."    },
];

export function AboutPreview() {
  return (
    <PreviewAnimator countTargets>
      <section className="pv-section" aria-label="About overview">
        <div className="pv-bg-num" aria-hidden="true">03</div>
        <div className="pv-inner pv-content">

          {/* ── Two-column hero header ── */}
          <div className="abt-layout">
            <div className="abt-text">
              <div className="pv-eyebrow">Our story</div>
              <h2 className="pv-title">About Nabuk</h2>
              <p className="pv-desc">
                A specialist veterinary distributor built on three decades of local partnership and clinical expertise in Malta.
              </p>
              <CTALink href="/about" label="Learn our story" />
            </div>

            <div className="abt-img-wrap">
              <div className="abt-img">
                <Image
                  src="/images/nabuk-team.webp"
                  alt="Nabuk Distributors — serving Malta's veterinary profession since 1996"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
                <div className="abt-img-overlay" aria-hidden="true" />
              </div>
              {/* Floating "Since 1996" badge — top-left */}
              <div className="abt-badge">
                <div className="abt-badge-icon">
                  <Clock size={15} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <span className="abt-badge-text">Serving veterinary clinics since 1996</span>
              </div>
            </div>
          </div>

          {/* ── 3 animated stat cards ── */}
          <div className="abt-stats">
            {aboutStats.map((stat) => (
              <div key={stat.id} className="pv-item abt-stat-card">
                <div className="abt-val">
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
                <div className="abt-stat-label">{stat.label}</div>
                <p className="abt-stat-note">{stat.note}</p>
              </div>
            ))}
          </div>

          {/* ── Milestone timeline ── */}
          <div className="abt-milestones">
            {aboutMilestones.map(({ year, title, body }) => (
              <div key={year} className="pv-item abt-milestone">
                <span className="abt-year">{year}</span>
                <div className="abt-ms-title">{title}</div>
                <p className="abt-ms-body">{body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
      <style>{`
        /* ── Two-column layout ── */
        .abt-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 36px;
        }
        .abt-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }
        .abt-text .pv-title { margin-bottom: 16px; }
        .abt-text .pv-desc  { margin-bottom: 28px; }

        /* ── Hero image ── */
        .abt-img-wrap { position: relative; }
        .abt-img {
          position: relative;
          height: 340px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 24px 64px -20px rgba(15,39,48,0.26),
            0 8px 20px -8px rgba(15,39,48,0.1);
        }
        .abt-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15,39,48,0.22) 0%, transparent 55%);
          pointer-events: none;
        }

        /* ── Floating badge (top-left) ── */
        .abt-badge {
          position: absolute;
          top: 28px;
          left: -12px;
          background: #fff;
          border-radius: 14px;
          padding: 10px 14px 10px 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow:
            0 8px 24px -8px rgba(15,39,48,0.18),
            0 2px 6px -2px rgba(15,39,48,0.08);
          max-width: 210px;
          z-index: 2;
        }
        .abt-badge-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--teal);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .abt-badge-text {
          font-size: 11px;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.4;
        }

        /* ── Animated stat cards ── */
        .abt-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 20px;
        }
        .abt-stat-card {
          text-align: center;
          padding: 32px 20px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-top: 3px solid rgba(43,107,107,0.15);
        }
        .abt-val {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(36px, 5.5vw, 52px);
          color: var(--teal);
          letter-spacing: -1.5px;
          line-height: 1;
          margin-bottom: 10px;
        }
        .abt-stat-label {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: var(--navy);
          margin-bottom: 10px;
        }
        .abt-stat-note {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.55;
        }

        /* ── Milestone timeline ── */
        .abt-milestones {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          position: relative;
        }
        .abt-milestones::before {
          content: '';
          position: absolute;
          top: 20px;
          left: 48px;
          right: 48px;
          height: 1px;
          background: rgba(43,107,107,0.15);
          pointer-events: none;
        }
        .abt-milestone {
          padding: 20px 18px 16px;
          display: flex;
          flex-direction: column;
        }
        .abt-year {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          color: #fff;
          background: var(--teal);
          padding: 3px 10px;
          border-radius: 100px;
          margin-bottom: 12px;
          letter-spacing: 0.3px;
          align-self: flex-start;
          position: relative;
          z-index: 1;
        }
        .abt-ms-title {
          font-size: 14px;
          font-weight: 800;
          color: var(--navy);
          margin-bottom: 6px;
          letter-spacing: -0.1px;
        }
        .abt-ms-body {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.55;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .abt-layout { grid-template-columns: 1fr; gap: 28px; }
          .abt-img { height: 260px; }
          .abt-badge { left: 4px; }
          .abt-milestones::before { display: none; }
        }
        @media (max-width: 580px) {
          .abt-stats { grid-template-columns: 1fr; gap: 10px; }
          .abt-milestones { grid-template-columns: 1fr; gap: 10px; }
          .abt-badge { display: none; }
        }
      `}</style>
    </PreviewAnimator>
  );
}

/* ══════════════════════════════════════════════════════
   04  SUPPORT
══════════════════════════════════════════════════════ */
const supportItems = [
  { icon: MessageSquare, number: "01", title: "Consultation", note: "We help you choose the right equipment for your clinic and caseload."         },
  { icon: Settings,      number: "02", title: "Installation", note: "Full installation and commissioning of X-ray, ultrasound and lab systems."    },
  { icon: BookOpen,      number: "03", title: "Training",     note: "Hands-on training at the point of installation and beyond."                   },
  { icon: Wrench,        number: "04", title: "After-Sales",  note: "On-island servicing to keep your equipment running reliably."                 },
];

const supTrustPoints = [
  { icon: Users,       label: "Expert Team",           note: "Specialists with on-island support who understand your needs."   },
  { icon: Clock,       label: "Quick Response",        note: "On-island, 24–48h support when you need it."                    },
  { icon: ShieldCheck, label: "Reliable Solutions",    note: "Quality equipment and support you can count on."                 },
  { icon: Heart,       label: "Long-Term Partnership", note: "We're with you for the life of your equipment."                  },
];

export function SupportPreview() {
  return (
    <PreviewAnimator>
      <section className="pv-section" aria-label="Support overview">
        <div className="pv-bg-num" aria-hidden="true">04</div>
        <div className="pv-inner pv-content">

          {/* ── Two-column hero header ── */}
          <div className="sup-layout">
            <div className="sup-text">
              <div className="pv-eyebrow">How we help</div>
              <h2 className="pv-title">Support &amp; Services</h2>
              <p className="pv-desc">
                From first consultation through to long-term after-sales care — we&apos;re with you every step.
              </p>
              <CTALink href="/support" label="View all services" />
            </div>

            <div className="sup-img-wrap">
              {/* Soft teal glow cloud sits behind the animals */}
              <div className="sup-img-glow" aria-hidden="true" />
              <div className="sup-img">
                <Image
                  src="/images/support-services.webp"
                  alt="A dog and cat representing the veterinary care Nabuk supports"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 900px) 100vw, 44vw"
                />
              </div>
              {/* Floating commitment badge */}
              <div className="sup-badge">
                <div className="sup-badge-icon">
                  <ShieldCheck size={15} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <span className="sup-badge-text">We&apos;re committed to your success</span>
              </div>
            </div>
          </div>

          {/* ── 4 numbered service cards ── */}
          <div className="sup-grid">
            {supportItems.map(({ icon: Icon, number, title, note }) => (
              <div key={title} className="pv-item sup-card">
                <div className="sup-card-top">
                  <span className="sup-num">{number}</span>
                  <div className="pv-icon-badge">
                    <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                </div>
                <div className="sup-card-title">{title}</div>
                <p className="sup-card-body">{note}</p>
                <div className="sup-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" width={11} height={11}>
                    <path d="M3 13L13 3M13 3H6M13 3v7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* ── Trust bar ── */}
          <div className="sup-trust">
            {supTrustPoints.map(({ icon: Icon, label, note }) => (
              <div key={label} className="sup-trust-item">
                <div className="sup-trust-icon">
                  <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div>
                  <div className="sup-trust-label">{label}</div>
                  <div className="sup-trust-note">{note}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <style>{`
        /* ── Two-column layout ── */
        .sup-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 36px;
        }
        .sup-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }
        .sup-text .pv-title { margin-bottom: 16px; }
        .sup-text .pv-desc  { margin-bottom: 28px; }

        /* ── Hero image ── */
        .sup-img-wrap { position: relative; }
        /* Soft teal radial cloud behind the animals — blends into the section bg */
        .sup-img-glow {
          position: absolute;
          inset: -28% -12% -18% -8%;
          background: radial-gradient(ellipse at 62% 38%,
            rgba(43,107,107,0.14) 0%,
            rgba(43,107,107,0.05) 46%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
        }
        .sup-img {
          position: relative;
          height: 340px;
          border-radius: 16px;
          overflow: hidden;
          z-index: 1;
          box-shadow:
            0 8px 32px -10px rgba(15,39,48,0.14),
            0 2px 8px -3px rgba(15,39,48,0.07);
        }

        /* ── Floating badge (top-right) ── */
        .sup-badge {
          position: absolute;
          top: 28px;
          right: -12px;
          background: #fff;
          border-radius: 14px;
          padding: 10px 14px 10px 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow:
            0 8px 24px -8px rgba(15,39,48,0.18),
            0 2px 6px -2px rgba(15,39,48,0.08);
          max-width: 188px;
          z-index: 2;
        }
        .sup-badge-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--teal);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .sup-badge-text {
          font-size: 11px;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.4;
        }

        /* ── 4-column service cards ── */
        .sup-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 20px;
        }
        .sup-card {
          padding: 18px 16px 14px;
          display: flex;
          flex-direction: column;
        }
        .sup-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
        }
        .sup-num {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 32px;
          color: rgba(43,107,107,0.13);
          letter-spacing: -1px;
          line-height: 1;
        }
        .sup-card-title {
          font-size: 14px;
          font-weight: 800;
          color: var(--navy);
          margin-bottom: 8px;
          letter-spacing: -0.1px;
        }
        .sup-card-body {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.55;
          flex: 1;
          margin-bottom: 12px;
        }
        .sup-arrow {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(43,107,107,0.1);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: flex-end;
          transition: background 0.18s ease, transform 0.2s cubic-bezier(0.34,1.4,0.64,1);
        }
        .pv-item:hover .sup-arrow {
          background: var(--teal);
          color: #fff;
          transform: translate(2px, -2px);
        }

        /* ── Trust bar ── */
        .sup-trust {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(43,107,107,0.12);
          border-radius: 16px;
          overflow: hidden;
        }
        .sup-trust-item {
          background: rgba(255,255,255,0.82);
          padding: 16px 14px;
          display: flex;
          align-items: flex-start;
          gap: 11px;
        }
        .sup-trust-icon {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: rgba(43,107,107,0.09);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .sup-trust-label {
          font-size: 12px;
          font-weight: 800;
          color: var(--navy);
          margin-bottom: 3px;
          letter-spacing: 0.1px;
        }
        .sup-trust-note {
          font-size: 11px;
          color: var(--muted);
          line-height: 1.45;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .sup-layout { grid-template-columns: 1fr; gap: 28px; }
          .sup-img { height: 280px; }
          .sup-img-glow { display: none; }
          .sup-badge { right: 4px; }
          .sup-grid { grid-template-columns: repeat(2, 1fr); }
          .sup-trust { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .sup-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .sup-trust { grid-template-columns: repeat(2, 1fr); }
          .sup-badge { display: none; }
        }
        @media (max-width: 400px) {
          .sup-grid { grid-template-columns: 1fr; }
          .sup-trust { grid-template-columns: 1fr; }
        }
      `}</style>
    </PreviewAnimator>
  );
}

/* ══════════════════════════════════════════════════════
   05  CONTACT
══════════════════════════════════════════════════════ */
const contactItems = [
  { icon: Phone,  label: "PHONE",    value: "+356 9947 2220",      sub: "Mon – Fri: 9:00 – 17:00"             },
  { icon: Mail,   label: "EMAIL",    value: "info@nabukmalta.com",  sub: "We aim to reply within 24h."         },
  { icon: MapPin, label: "LOCATION", value: "Malta & Gozo",         sub: "Serving clinics across Malta & Gozo" },
];

export function ContactPreview() {
  return (
    <PreviewAnimator>
      <section className="pv-section" aria-label="Contact overview">
        <div className="pv-bg-num" aria-hidden="true">05</div>
        <div className="pv-inner pv-content">

          {/* ── Two-column header — text left, image right ── */}
          <div className="con-layout">

            {/* Left: eyebrow + two-line title + description, NO CTA */}
            <div className="con-text">
              <div className="pv-eyebrow">Reach us</div>
              <h2 className="pv-title con-title">
                Contact<br />Us
              </h2>
              <p className="pv-desc">
                Consultations, quotes and enquiries —<br />
                we&apos;re here to help your clinic find the right solution.
              </p>
            </div>

            {/* Right: full-column image — fills entire column like reference */}
            <div className="con-img-wrap">
              {/* Teal circle decoration — behind the image */}
              <div className="con-circle-bg" aria-hidden="true" />

              {/* Image fills the full column — no circular clip */}
              <div className="con-img">
                <Image
                  src="/images/dog-cat-about-us.webp"
                  alt="A dog and cat representing the veterinary care supported by Nabuk Distributors"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center center" }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>

              {/* Vertical badge — icon top, text below, vertically centred on left */}
              <div className="con-badge">
                <div className="con-badge-icon">
                  <Headphones size={16} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <span className="con-badge-text">
                  We&apos;re here to<br />support your<br />practice
                </span>
              </div>
            </div>
          </div>

          {/* ── 3 contact cards: label at top, icon + value + arrow below ── */}
          <div className="con-cards">
            {contactItems.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="pv-item con-card">
                {/* Tiny uppercase label row */}
                <div className="con-card-label">{label}</div>
                {/* Icon + value/sub + arrow */}
                <div className="con-card-row">
                  <div className="con-icon-circle">
                    <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <div className="con-card-info">
                    <div className="con-card-value">{value}</div>
                    <div className="con-card-sub">{sub}</div>
                  </div>
                  <div className="con-card-arrow" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round" width={13} height={13}>
                      <path d="M3 8h10M8 3l5 5-5 5" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Centred "Get in touch" CTA ── */}
          <div className="con-cta-row">
            <Link href="/contact" className="con-cta-btn">
              Get in touch
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" width={14} height={14}
                aria-hidden="true">
                <path d="M3 8h10M8 3l5 5-5 5" />
              </svg>
            </Link>
          </div>

        </div>
      </section>
      <style>{`
        /* ── Two-column layout ── */
        .con-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: stretch;   /* both columns same height */
          min-height: 340px;
          margin-bottom: 36px;
        }
        .con-text {
          display: flex;
          flex-direction: column;
          justify-content: center;  /* vertically centre the text */
          padding: 8px 0;
        }
        /* Tight two-line heading: "Contact" / "Us" */
        .con-title { line-height: 0.88; margin-bottom: 20px; }
        .con-text .pv-desc { margin-bottom: 0; color: var(--muted); }

        /* ── Right column: image fills the full column ── */
        .con-img-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;     /* clips image + circle to rounded rect */
          min-height: 340px;
        }

        /* Teal circle backdrop — fills most of the column */
        .con-circle-bg {
          position: absolute;
          width: 105%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: rgba(43,107,107,0.12);
          right: -5%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 0;
        }

        /* Image fills the entire column — no border-radius clip on the image itself */
        .con-img {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        /* Vertical badge: icon top, text below, vertically centred on left */
        .con-badge {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.95);
          border-radius: 16px;
          padding: 14px 14px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          width: 118px;
          text-align: center;
          box-shadow:
            0 8px 24px -8px rgba(15,39,48,0.18),
            0 2px 6px -2px rgba(15,39,48,0.08);
          z-index: 2;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        .con-badge-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--teal);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .con-badge-text {
          font-size: 10.5px;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.45;
        }

        /* ── Contact cards ── */
        .con-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 24px;
        }
        .con-card {
          padding: 14px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        /* Tiny uppercase label at top of card */
        .con-card-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--muted);
        }
        /* Icon + text + arrow on same row */
        .con-card-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .con-icon-circle {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(43,107,107,0.1);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .con-card-info { flex: 1; min-width: 0; }
        .con-card-value {
          font-size: 13.5px;
          font-weight: 800;
          color: var(--navy);
          margin-bottom: 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .con-card-sub {
          font-size: 11px;
          color: var(--muted);
          line-height: 1.4;
        }
        .con-card-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--teal);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.15s ease, transform 0.22s cubic-bezier(0.34,1.4,0.64,1);
        }
        .pv-item:hover .con-card-arrow {
          background: var(--teal-dark);
          transform: translateX(3px);
        }

        /* ── Centred CTA ── */
        .con-cta-row { display: flex; justify-content: center; }
        .con-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--teal);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 36px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.3px;
          box-shadow:
            0 8px 28px -8px rgba(43,107,107,0.5),
            0 2px 8px -2px rgba(43,107,107,0.2);
          transition:
            background 0.2s ease,
            transform 0.22s cubic-bezier(0.34,1.4,0.64,1),
            box-shadow 0.2s ease;
        }
        .con-cta-btn:hover {
          background: var(--teal-dark);
          transform: translateY(-2px);
          box-shadow: 0 14px 36px -8px rgba(43,107,107,0.55), 0 4px 10px -2px rgba(43,107,107,0.2);
        }
        .con-cta-btn:focus-visible { outline: 3px solid var(--teal); outline-offset: 3px; }
        .con-cta-btn:active { transform: translateY(0); }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .con-layout { grid-template-columns: 1fr; gap: 0; }
          .con-img-wrap { min-height: 280px; border-radius: 20px; }
          .con-badge { left: 16px; }
          .con-cards { grid-template-columns: 1fr; gap: 10px; }
        }
        @media (max-width: 520px) {
          .con-img-wrap { min-height: 240px; }
          .con-badge { display: none; }
          .con-card-value { font-size: 13px; }
        }
      `}</style>
    </PreviewAnimator>
  );
}
