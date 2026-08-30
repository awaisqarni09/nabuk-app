import Image from "next/image";
import Link from "next/link";
import { PreviewAnimator } from "@/components/animations/PreviewAnimator";

/* ─────────────────────────────────────────────────────────
   Homepage section system.
   Every card is a real <a> with a visible action — no
   decorative arrows on dead <div>s. PreviewAnimator hooks:
   .pv-eyebrow / .pv-title / .pv-desc / .pv-cta reveal as a
   header group; .pv-item cards stagger in.
   ───────────────────────────────────────────────────────── */

function ArrowIcon({ size = 12 }: { size?: number }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" width={size} height={size} aria-hidden="true">
      <path d="M3 13L13 3M13 3H6M13 3v7" />
    </svg>
  );
}

function SectionHead({
  index,
  eyebrow,
  title,
  lead,
  cta,
  inverse,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
  cta?: { href: string; label: string };
  inverse?: boolean;
}) {
  return (
    <div className="pv-head">
      <div className="sec-index-row">
        <span className="sec-index">{index}</span>
        <span className="sec-index-rule" aria-hidden="true" />
      </div>
      <div className="pv-head-main">
        <div className="pv-head-text">
          <p className="sec-eyebrow pv-eyebrow">{eyebrow}</p>
          <h2 className="sec-title pv-title">{title}</h2>
          {lead ? <p className="sec-lead pv-desc">{lead}</p> : null}
        </div>
        {cta ? (
          <Link href={cta.href} className={`btn ${inverse ? "btn--light" : "btn--solid"} pv-cta`}>
            {cta.label}
            <span className="btn-arrow"><ArrowIcon size={13} /></span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

/* ─── Shared styles — rendered once from page.tsx ─── */
export function PVStyles() {
  return (
    <style>{`
      .pv-head { margin-bottom: clamp(32px, 4vw, 48px); }
      .pv-head .sec-index-row { margin-bottom: 22px; }
      .pv-head .sec-eyebrow { display: block; margin-bottom: 14px; }
      .pv-head-main {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 28px;
      }
      .pv-head-text { flex: 1; min-width: 0; max-width: 680px; }
      .pv-head .sec-title { margin-bottom: 12px; }
      .pv-head .sec-lead { max-width: 560px; }
      @media (max-width: 700px) {
        .pv-head-main { flex-direction: column; align-items: flex-start; gap: 22px; }
      }
    `}</style>
  );
}

/* ══════════════════════════════════════════════════════
   01 · TRUST BENTO — verified facts, each linking to the
   page that substantiates it.
══════════════════════════════════════════════════════ */
const trustCards = [
  {
    cls: "tb-a",
    kicker: "Heritage",
    title: "Serving Malta's veterinary profession since 1996",
    body: "Nearly three decades of partnership with clinics across the islands — from nutrition in the early years to today's clinical technology focus.",
    action: "Our story",
    href: "/about",
    img: "/images/who-we-are.webp",
    imgAlt: "",
  },
  {
    cls: "tb-b",
    kicker: "Specialisation",
    title: "100% veterinary. Nothing else.",
    body: "Exclusively focused on clinical equipment and diagnostics for veterinary practice.",
    action: "What we supply",
    href: "/solutions",
  },
  {
    cls: "tb-c",
    kicker: "Coverage",
    title: "Malta & Gozo, on-island",
    body: "Local presence for consultation, delivery, installation and servicing.",
    action: "Get in touch",
    href: "/contact",
  },
  {
    cls: "tb-d",
    kicker: "Lifecycle",
    title: "From specification to after-sales",
    body: "Installation, training and servicing are part of the relationship — not extras.",
    action: "How we support",
    href: "/support",
  },
  {
    cls: "tb-e",
    kicker: "Manufacturers",
    title: "Direct international relationships",
    body: "Eickemeyer · Antech · Melag · Covetrus · Veterinary Instrumentation",
    action: "Meet our partners",
    href: "/partners",
  },
];

export function TrustBento() {
  return (
    <PreviewAnimator>
      <section className="section section--light" aria-label="Why clinics trust Nabuk">
        <div className="section-inner" data-no-reveal>
          <SectionHead
            index="01 — Trust"
            eyebrow="Why Nabuk"
            title="A specialist partner, not a supplier"
          />
          <div className="tb-grid">
            {trustCards.map(({ cls, kicker, title, body, action, href, img, imgAlt }) => (
              <Link key={cls} href={href} className={`card-link pv-item tb-card ${cls}`}>
                {img ? (
                  <div className="tb-img">
                    <Image
                      src={img}
                      alt={imgAlt ?? ""}
                      fill
                      className="card-img-zoom"
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 900px) 100vw, 44vw"
                    />
                    <div className="tb-img-overlay" aria-hidden="true" />
                  </div>
                ) : null}
                <div className="tb-body">
                  <span className="card-eyebrow">{kicker}</span>
                  <h3 className="tb-title">{title}</h3>
                  <p className="card-body">{body}</p>
                  <span className="card-action">
                    {action}
                    <span className="card-action-arrow"><ArrowIcon /></span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .tb-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: minmax(150px, auto);
          gap: 16px;
        }
        .tb-card.tb-a { grid-column: span 5; grid-row: span 2; }
        .tb-card.tb-b { grid-column: span 4; }
        .tb-card.tb-c { grid-column: span 3; }
        .tb-card.tb-d { grid-column: span 3; }
        .tb-card.tb-e { grid-column: span 4; }
        .tb-img {
          position: relative;
          height: 220px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .tb-img-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(15,39,48,0.45) 0%, transparent 55%),
            linear-gradient(160deg, rgba(43,107,107,0.28) 0%, transparent 60%);
          mix-blend-mode: multiply;
          pointer-events: none;
        }
        .tb-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          padding: 24px 26px 22px;
          flex: 1;
        }
        .tb-title {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(17px, 1.7vw, 22px);
          line-height: 1.16;
          letter-spacing: -0.01em;
          color: var(--navy);
          margin: 0;
        }
        .tb-body .card-body { flex: 1; margin: 0; }
        @media (max-width: 1080px) {
          .tb-card.tb-a { grid-column: span 6; }
          .tb-card.tb-b { grid-column: span 6; }
          .tb-card.tb-c { grid-column: span 6; }
          .tb-card.tb-d { grid-column: span 6; }
          .tb-card.tb-e { grid-column: span 6; }
        }
        @media (max-width: 640px) {
          .tb-grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
          .tb-card.tb-a, .tb-card.tb-b, .tb-card.tb-c,
          .tb-card.tb-d, .tb-card.tb-e { grid-column: 1 / -1; grid-row: auto; }
          .tb-img { height: 180px; }
        }
      `}</style>
    </PreviewAnimator>
  );
}

/* ══════════════════════════════════════════════════════
   02 · SOLUTIONS BENTO — image-led, every card opens its
   anchored module on /solutions.
══════════════════════════════════════════════════════ */
const solutionCards = [
  { cls: "sb-a", num: "01", title: "Diagnostic Systems",    img: "/images/diagnostic-system.webp",    desc: "In-house diagnostic platforms for fast, confident clinical decisions.", href: "/solutions#diagnostic-systems" },
  { cls: "sb-b", num: "02", title: "Blood Analysers",       img: "/images/blood-analysers.webp",       desc: "Haematology and biochemistry, in-clinic.",            href: "/solutions#blood-analysers" },
  { cls: "sb-c", num: "03", title: "Imaging Solutions",     img: "/images/ultrasound-imaging.webp",    desc: "Digital X-ray and ultrasound installations.",         href: "/solutions#imaging-solutions" },
  { cls: "sb-d", num: "04", title: "Rapid Testing",         img: "/images/rapid-testing.webp",         desc: "Point-of-care test systems.",                         href: "/solutions#rapid-testing" },
  { cls: "sb-e", num: "05", title: "Surgical Instruments",  img: "/images/surgical-instruments.webp",  desc: "Precision instruments from specialist manufacturers.", href: "/solutions#surgical-instruments" },
  { cls: "sb-f", num: "06", title: "Sterilisation Systems", img: "/images/sterilisation.webp",         desc: "Autoclaves and hygiene systems.",                     href: "/solutions#sterilisation-systems" },
  { cls: "sb-g", num: "07", title: "Clinic Furniture",      img: "/images/clinic-furniture.webp",      desc: "Tables, trolleys and clinical infrastructure.",       href: "/solutions#clinic-furniture" },
  { cls: "sb-h", num: "08", title: "Specialised Equipment", img: "/images/specialised-equipment.webp", desc: "Ophthalmology, dentistry, endoscopy and more.",       href: "/solutions#specialised-equipment" },
];

export function SolutionsPreview() {
  return (
    <PreviewAnimator>
      <section className="section section--paper" aria-label="Solutions overview">
        <div className="section-inner" data-no-reveal>
          <SectionHead
            index="02 — Solutions"
            eyebrow="What we supply"
            title="Clinical technology for every discipline"
            lead="Eight areas of clinical capability — from diagnostics to the surgical suite — specified for your caseload, never sold from a catalogue."
            cta={{ href: "/solutions", label: "Explore all solutions" }}
          />
          <div className="sb-grid">
            {solutionCards.map(({ cls, num, title, img, desc, href }) => (
              <Link key={num} href={href} className={`card-link pv-item sb-card ${cls}`}>
                <div className="sb-img">
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="card-img-zoom"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 25vw"
                  />
                  <div className="sb-img-overlay" aria-hidden="true" />
                  <span className="sb-num" aria-hidden="true">{num}</span>
                </div>
                <div className="sb-body">
                  <h3 className="sb-title">{title}</h3>
                  <p className="card-body sb-desc">{desc}</p>
                  <span className="card-action">
                    Explore solution
                    <span className="card-action-arrow"><ArrowIcon /></span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .sb-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 16px;
        }
        .sb-card.sb-a { grid-column: span 6; }
        .sb-card.sb-b { grid-column: span 3; }
        .sb-card.sb-c { grid-column: span 3; }
        .sb-card.sb-d { grid-column: span 3; }
        .sb-card.sb-e { grid-column: span 3; }
        .sb-card.sb-f { grid-column: span 3; }
        .sb-card.sb-g { grid-column: span 3; }
        .sb-card.sb-h { grid-column: span 6; }
        .sb-img {
          position: relative;
          height: 190px;
          overflow: hidden;
        }
        .sb-a .sb-img, .sb-h .sb-img { height: 230px; }
        .sb-img-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(15,39,48,0.5) 0%, transparent 52%),
            linear-gradient(150deg, rgba(43,107,107,0.22) 0%, transparent 55%);
          mix-blend-mode: multiply;
          pointer-events: none;
        }
        .sb-num {
          position: absolute;
          top: 14px;
          left: 16px;
          font-family: var(--font-plex-mono, 'IBM Plex Mono'), monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          color: #fff;
          background: rgba(15,39,48,0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          padding: 4px 10px;
          border-radius: var(--r-pill);
        }
        .sb-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          padding: 20px 22px 20px;
          flex: 1;
        }
        .sb-title {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 17px;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: var(--navy);
          margin: 0;
        }
        .sb-desc { flex: 1; margin: 0; font-size: 13.5px; }
        @media (max-width: 1080px) {
          .sb-card.sb-a, .sb-card.sb-b, .sb-card.sb-c, .sb-card.sb-d,
          .sb-card.sb-e, .sb-card.sb-f, .sb-card.sb-g, .sb-card.sb-h { grid-column: span 6; }
          .sb-a .sb-img, .sb-h .sb-img { height: 190px; }
        }
        @media (max-width: 640px) {
          .sb-grid { grid-template-columns: 1fr; }
          .sb-card.sb-a, .sb-card.sb-b, .sb-card.sb-c, .sb-card.sb-d,
          .sb-card.sb-e, .sb-card.sb-f, .sb-card.sb-g, .sb-card.sb-h { grid-column: 1 / -1; }
          .sb-img { height: 170px !important; }
        }
      `}</style>
    </PreviewAnimator>
  );
}

/* ══════════════════════════════════════════════════════
   03 · CLINICAL PARTNERSHIP STATEMENT — editorial split.
══════════════════════════════════════════════════════ */
export function PartnershipStatement() {
  return (
    <PreviewAnimator>
      <section className="section section--dark" aria-label="How Nabuk works with clinics">
        <div className="section-inner" data-no-reveal>
          <div className="ps-grid">
            <div className="ps-text">
              <div className="sec-index-row">
                <span className="sec-index">03 — Approach</span>
                <span className="sec-index-rule" aria-hidden="true" />
              </div>
              <p className="sec-eyebrow pv-eyebrow">How we work</p>
              <h2 className="sec-title pv-title ps-title">
                We advise.<br />We don&apos;t catalogue.
              </h2>
              <p className="sec-lead pv-desc">
                No list prices, no product catalogue. Every clinic is different
                — in caseload, infrastructure, team and ambition. We start with
                a conversation, understand your situation, and recommend the
                right clinical technology for it. Then we install it, train
                your team, and stay.
              </p>
              <div className="ps-ctas">
                <Link href="/solutions" className="btn btn--light pv-cta">
                  See how we specify
                  <span className="btn-arrow"><ArrowIcon size={13} /></span>
                </Link>
                <Link href="/contact" className="btn btn--ghost-inverse">
                  Start a conversation
                </Link>
              </div>
            </div>
            <div className="ps-media pv-item">
              <div className="ps-frame tick-frame">
                <span className="tick-b" aria-hidden="true" />
                <Image
                  src="/images/veterinary-solution.webp"
                  alt="Veterinary professional using advanced clinical equipment"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 900px) 100vw, 48vw"
                />
                <div className="ps-frame-overlay" aria-hidden="true" />
              </div>
              <p className="fig-caption fig-caption--inverse ps-caption">
                Fig. 01 — Consultation-led specification
              </p>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .ps-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(36px, 6vw, 80px);
          align-items: center;
        }
        .ps-text .sec-index-row { margin-bottom: 22px; }
        .ps-text .sec-eyebrow { display: block; margin-bottom: 14px; }
        .ps-title { margin-bottom: 18px; }
        .ps-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 30px;
          flex-wrap: wrap;
        }
        .ps-media { position: relative; }
        .ps-frame {
          position: relative;
          height: 440px;
          border-radius: var(--r-md);
          overflow: hidden;
          box-shadow: 0 30px 70px -24px rgba(0,0,0,0.55);
        }
        .ps-frame.tick-frame::before,
        .ps-frame.tick-frame::after,
        .ps-frame .tick-b::before,
        .ps-frame .tick-b::after { border-color: var(--teal-bright); }
        .ps-frame-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(15,39,48,0.42) 0%, transparent 45%),
            linear-gradient(150deg, rgba(43,107,107,0.3) 0%, transparent 55%);
          mix-blend-mode: multiply;
          pointer-events: none;
        }
        .ps-caption { margin: 16px 0 0; }
        @media (max-width: 900px) {
          .ps-grid { grid-template-columns: 1fr; }
          .ps-frame { height: 300px; }
        }
      `}</style>
    </PreviewAnimator>
  );
}

/* ══════════════════════════════════════════════════════
   04 · PARTNER SHOWCASE — real manufacturers, wordmark
   cards (no fabricated logos), each opening its entry on
   the Partners page.
══════════════════════════════════════════════════════ */
const partnerCards = [
  { id: "eickemeyer",     name: "Eickemeyer",                 region: "Germany",        field: "Instruments & surgical equipment" },
  { id: "antech",         name: "Antech",                     region: "Global",         field: "Diagnostics & analysers" },
  { id: "melag",          name: "Melag",                      region: "Germany",        field: "Sterilisation & hygiene" },
  { id: "covetrus",       name: "Covetrus",                   region: "Global",         field: "Animal health technology" },
  { id: "vet-instrumentation", name: "Veterinary Instrumentation", region: "United Kingdom", field: "Orthopaedic instruments" },
];

export function PartnersPreview() {
  return (
    <PreviewAnimator>
      <section className="section section--light" aria-label="Manufacturer partners">
        <div className="section-inner" data-no-reveal>
          <SectionHead
            index="04 — Partners"
            eyebrow="Who we represent"
            title="Global manufacturers. One local contact."
            lead="Direct relationships with internationally respected veterinary manufacturers — represented in Malta by a partner who answers the phone."
            cta={{ href: "/partners", label: "View all partners" }}
          />
          <div className="pp-grid">
            {partnerCards.map(({ id, name, region, field }) => (
              <Link key={id} href={`/partners#${id}`} className="card-link pv-item pp-card">
                <span className="card-eyebrow">{region}</span>
                <span className="pp-name">{name}</span>
                <span className="pp-field">{field}</span>
                <span className="card-action">
                  View partner
                  <span className="card-action-arrow"><ArrowIcon /></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .pp-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }
        .pp-card {
          padding: 24px 22px 20px;
          gap: 8px;
          min-height: 200px;
        }
        .pp-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(to right, var(--teal), var(--teal-dark));
        }
        .pp-name {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 18px;
          line-height: 1.15;
          letter-spacing: -0.01em;
          color: var(--navy);
        }
        .pp-field {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.5;
          flex: 1;
        }
        @media (max-width: 1080px) {
          .pp-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 700px) {
          .pp-grid { grid-template-columns: repeat(2, 1fr); }
          .pp-card { min-height: 0; }
        }
        @media (max-width: 440px) {
          .pp-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </PreviewAnimator>
  );
}

/* ══════════════════════════════════════════════════════
   05 · SUPPORT JOURNEY — the five real service stages.
══════════════════════════════════════════════════════ */
const journeyStages = [
  { num: "01", title: "Consultation",  note: "We understand your clinic, caseload and goals first.", href: "/support#consultation" },
  { num: "02", title: "Specification", note: "The right system for your practice — not the biggest one.", href: "/support#specification" },
  { num: "03", title: "Installation",  note: "Professional setup and commissioning, on-island.", href: "/support#installation" },
  { num: "04", title: "Training",      note: "Hands-on training until your team is confident.", href: "/support#training" },
  { num: "05", title: "After-sales",   note: "Servicing and support for the life of the equipment.", href: "/support#after-sales" },
];

export function SupportPreview() {
  return (
    <PreviewAnimator>
      <section className="section section--tint" aria-label="Support journey">
        <div className="section-inner" data-no-reveal>
          <SectionHead
            index="05 — Support"
            eyebrow="How we help"
            title="With you at every stage"
            lead="Our relationship with a clinic doesn't end at delivery — it starts there."
            cta={{ href: "/support", label: "View all services" }}
          />
          <ol className="sj-track">
            {journeyStages.map(({ num, title, note, href }) => (
              <li key={num} className="sj-step">
                <Link href={href} className="card-link pv-item sj-card">
                  <span className="sj-num" aria-hidden="true">{num}</span>
                  <span className="sj-title">{title}</span>
                  <span className="sj-note">{note}</span>
                  <span className="card-action">
                    Learn more
                    <span className="card-action-arrow"><ArrowIcon /></span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <style>{`
        .sj-track {
          list-style: none;
          padding: 26px 0 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
          position: relative;
        }
        /* connecting calibration line above the cards */
        .sj-track::before {
          content: "";
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 9px;
          border-bottom: 1px dashed rgba(43,107,107,0.4);
          pointer-events: none;
        }
        .sj-step { display: flex; }
        .sj-card {
          padding: 22px 20px 18px;
          gap: 8px;
          width: 100%;
        }
        .sj-num {
          font-family: var(--font-plex-mono, 'IBM Plex Mono'), monospace;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.18em;
          color: var(--teal);
        }
        .sj-title {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 16px;
          letter-spacing: -0.01em;
          color: var(--navy);
        }
        .sj-note {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.55;
          flex: 1;
        }
        @media (max-width: 1080px) {
          .sj-track { grid-template-columns: repeat(3, 1fr); }
          .sj-track::before { display: none; }
        }
        @media (max-width: 700px) {
          .sj-track { grid-template-columns: 1fr 1fr; padding-top: 0; }
        }
        @media (max-width: 460px) {
          .sj-track { grid-template-columns: 1fr; }
        }
      `}</style>
    </PreviewAnimator>
  );
}

/* ══════════════════════════════════════════════════════
   06 · HERITAGE — concise, image-rich story moment.
══════════════════════════════════════════════════════ */
const heritageMilestones = [
  { year: "1996", note: "Founded to serve Malta's growing veterinary profession" },
  { year: "2001", note: "Hill's Pet Nutrition — prescription diets & clinical education" },
  { year: "2018", note: "Full transition to veterinary equipment & diagnostics" },
];

export function AboutPreview() {
  return (
    <PreviewAnimator>
      <section className="section section--paper" aria-label="About Nabuk">
        <div className="section-inner" data-no-reveal>
          <div className="hm-grid">
            <div className="hm-media pv-item">
              <div className="hm-frame tick-frame">
                <span className="tick-b" aria-hidden="true" />
                <Image
                  src="/images/nabuk-team.webp"
                  alt="Nabuk Distributors — serving Malta's veterinary profession since 1996"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
                <div className="hm-frame-overlay" aria-hidden="true" />
              </div>
              <p className="fig-caption hm-caption">Fig. 02 — Est. 1996, Malta</p>
            </div>
            <div className="hm-text">
              <div className="sec-index-row">
                <span className="sec-index">06 — Heritage</span>
                <span className="sec-index-rule" aria-hidden="true" />
              </div>
              <p className="sec-eyebrow pv-eyebrow">Our story</p>
              <h2 className="sec-title pv-title">
                Three decades at the centre of Maltese veterinary care
              </h2>
              <p className="sec-lead pv-desc">
                From introducing internationally recognised brands in 1996 to
                becoming the islands&apos; specialist for clinical equipment
                and diagnostics — Nabuk&apos;s history is a story of deepening
                specialisation.
              </p>
              <ul className="hm-milestones">
                {heritageMilestones.map(({ year, note }) => (
                  <li key={year} className="hm-milestone">
                    <span className="hm-year">{year}</span>
                    <span className="hm-note">{note}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn btn--solid pv-cta">
                Explore our journey
                <span className="btn-arrow"><ArrowIcon size={13} /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .hm-grid {
          display: grid;
          grid-template-columns: 0.94fr 1.06fr;
          gap: clamp(36px, 6vw, 80px);
          align-items: center;
        }
        .hm-frame {
          position: relative;
          height: 460px;
          border-radius: var(--r-md);
          overflow: hidden;
          box-shadow: var(--shadow-float);
        }
        .hm-frame-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(15,39,48,0.38) 0%, transparent 45%),
            linear-gradient(150deg, rgba(43,107,107,0.22) 0%, transparent 55%);
          mix-blend-mode: multiply;
          pointer-events: none;
        }
        .hm-caption { margin: 16px 0 0; }
        .hm-text { display: flex; flex-direction: column; align-items: flex-start; }
        .hm-text .sec-index-row { margin-bottom: 22px; width: 100%; }
        .hm-text .sec-eyebrow { display: block; margin-bottom: 14px; }
        .hm-text .sec-title { margin-bottom: 16px; }
        .hm-milestones {
          list-style: none;
          padding: 0;
          margin: 26px 0 30px;
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .hm-milestone {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 18px;
          align-items: baseline;
          padding: 12px 0;
          border-bottom: 1px solid var(--hairline-soft);
        }
        .hm-milestone:first-child { border-top: 1px solid var(--hairline-soft); }
        .hm-year {
          font-family: var(--font-plex-mono, 'IBM Plex Mono'), monospace;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: var(--teal);
        }
        .hm-note { font-size: 14.5px; color: var(--muted); line-height: 1.55; }
        @media (max-width: 900px) {
          .hm-grid { grid-template-columns: 1fr; }
          .hm-media { order: 2; }
          .hm-text { order: 1; }
          .hm-frame { height: 300px; }
        }
      `}</style>
    </PreviewAnimator>
  );
}

/* ══════════════════════════════════════════════════════
   07 · CONSULTATION CTA — immersive conversion section.
══════════════════════════════════════════════════════ */
export function ContactPreview() {
  return (
    <PreviewAnimator>
      <section className="section section--teal" aria-label="Request a consultation">
        <div className="section-inner" data-no-reveal>
          <div className="cc-wrap">
            <div className="sec-index-row">
              <span className="sec-index">07 — Contact</span>
              <span className="sec-index-rule" aria-hidden="true" />
            </div>
            <h2 className="cc-title pv-title">
              Tell us what your clinic needs.
              <br />
              <span className="cc-title-soft">We&apos;ll advise on the rest.</span>
            </h2>
            <p className="cc-lead pv-desc">
              Consultations, quotes and enquiries — every conversation starts
              with your caseload, not our stock list.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn--light pv-cta">
                Request a Consultation
                <span className="btn-arrow"><ArrowIcon size={13} /></span>
              </Link>
            </div>
            <div className="cta-direct">
              <a href="tel:+35699472220" className="cta-direct-item">
                <span className="mono-label">Phone</span>
                +356 9947 2220
              </a>
              <a href="mailto:info@nabukmalta.com" className="cta-direct-item">
                <span className="mono-label">Email</span>
                info@nabukmalta.com
              </a>
              <span className="cta-direct-item" role="presentation" style={{ cursor: "default" }}>
                <span className="mono-label">Coverage</span>
                Malta &amp; Gozo
              </span>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .cc-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .cc-wrap .sec-index-row {
          width: min(560px, 100%);
          margin-bottom: 34px;
        }
        .cc-title {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(28px, 4.4vw, 54px);
          line-height: 1.06;
          letter-spacing: -0.02em;
          color: #fff;
          margin: 0 0 18px;
          max-width: 760px;
          text-wrap: balance;
        }
        .cc-title-soft { color: var(--teal-bright); }
        .cc-lead {
          font-size: var(--fs-lead);
          color: var(--white-soft);
          max-width: 520px;
          margin: 0 0 30px;
          line-height: 1.65;
        }
        .cc-wrap .cta-direct { width: min(760px, 100%); }
      `}</style>
    </PreviewAnimator>
  );
}
