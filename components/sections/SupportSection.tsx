import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare, ClipboardList, Settings, GraduationCap, Headphones,
  Monitor, Users, Wrench, Clock, ShieldCheck, Zap, CheckCircle,
} from "lucide-react";

// ── Hero: winding 5-step support journey ──
const journeySteps = [
  { num: "01", icon: MessageSquare,  title: "Consultation",       body: "We assess your clinic's needs and recommend the right solutions." },
  { num: "02", icon: ClipboardList,  title: "Specification",      body: "We recommend the right solution tailored to your practice." },
  { num: "03", icon: Settings,       title: "Installation",       body: "Professional setup and seamless integration." },
  { num: "04", icon: GraduationCap,  title: "Training",           body: "Hands-on training for your team to ensure confidence." },
  { num: "05", icon: Headphones,     title: "After-Sales Support", body: "Ongoing care, maintenance and technical support." },
];

// Wavy connector path + node positions (viewBox 0 0 1000 200).
const stepX = [100, 300, 500, 700, 900];
const waveY = (x: number) => 100 + 46 * Math.cos((Math.PI * (x - 100)) / 200);
const WAVE_PATH =
  "M" +
  Array.from({ length: 41 }, (_, k) => {
    const x = k * 25;
    return `${x},${Math.round(waveY(x) * 10) / 10}`;
  }).join(" L");
const stepNodes = stepX.map((x) => ({ xPct: x / 10, yPct: waveY(x) / 2 }));

// ── Service bands ──
const serviceCards = [
  { icon: Monitor,     title: "Installation",      body: "Expert installation with minimal disruption to your clinic.",        img: "/images/diagnostic-system.webp" },
  { icon: Users,       title: "Training",          body: "Practical training sessions tailored to your team's needs.",         img: "/images/nabuk-team.webp" },
  { icon: Wrench,      title: "Maintenance",       body: "Preventive maintenance and systems checks to keep equipment optimal.", img: "/images/specialised-equipment.webp" },
  { icon: Headphones,  title: "Technical Support", body: "Remote and on-site support from our experienced specialists.",       img: "/images/support-clinic.webp" },
];

const supportStats = [
  { icon: Clock,       value: "24/7",     label: "Support Availability", note: "We're here whenever you need us." },
  { icon: ShieldCheck, value: "Expert",   label: "Support Team",         note: "Experienced professionals you can rely on." },
  { icon: Zap,         value: "Fast",     label: "Response Time",        note: "Quick solutions for minimal downtime." },
  { icon: CheckCircle, value: "Complete", label: "Peace of Mind",        note: "Focused on keeping your clinic running smoothly." },
];

export function SupportSection() {
  return (
    <>
      {/* ── HERO — winding support journey ── */}
      <div className="page-hero sup-hero">
        <div className="sup-hero-inner">
          <div className="sup-hero-grid">
            {/* LEFT: text */}
            <div className="sup-hero-text">
              <div className="sup-hero-eyebrow">How We Help</div>
              <h1 className="sup-hero-h1">
                Support at Every Stage of <span className="sup-hero-accent">Your Journey</span>
              </h1>
              <div className="page-hero-divider" />
              <p className="page-hero-sub sup-hero-sub">
                From specification to installation, training and after-sales care — our relationship with your clinic doesn&apos;t end at delivery.
              </p>
              <div className="sup-hero-ctas">
                <Link href="/contact" className="sup-hero-cta">
                  Get Support
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                    width={15} height={15} aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <div className="sup-hero-247">
                  <div className="sup-hero-247-icon" aria-hidden="true">
                    <Headphones size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="sup-hero-247-title">24/7 Support</div>
                    <div className="sup-hero-247-sub">We&apos;re always here</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: winding journey */}
            <div className="sup-journey">
              <svg className="sup-journey-wave" viewBox="0 0 1000 200" preserveAspectRatio="none" aria-hidden="true">
                <path d={WAVE_PATH} fill="none" stroke="rgba(43,120,116,0.4)" strokeWidth={2}
                  strokeDasharray="2 8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              </svg>
              {stepNodes.map((n, i) => (
                <span key={`node-${i}`} className="sup-journey-node" style={{ left: `${n.xPct}%`, top: `${n.yPct}%` }} aria-hidden="true" />
              ))}
              <div className="sup-journey-grid">
                {journeySteps.map(({ num, icon: Icon, title, body }, i) => (
                  <div key={num} className={`sup-step sup-step--${i % 2 === 0 ? "down" : "up"}`}>
                    <div className="sup-step-card">
                      <div className="sup-step-top">
                        <span className="sup-step-num">{num}</span>
                        <div className="sup-step-icon"><Icon size={16} strokeWidth={1.9} aria-hidden="true" /></div>
                      </div>
                      <div className="sup-step-title">{title}</div>
                      <p className="sup-step-body">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BAND 1 · Service cards with photos ── */}
      <section className="section section--light" aria-label="Our services">
        <div className="section-inner">
          <div className="sup-services-grid">
            {serviceCards.map(({ icon: Icon, title, body, img }) => (
              <article key={title} className="sup-service-card">
                <div className="sup-service-text">
                  <div className="sup-service-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="sup-service-title">{title}</h3>
                  <p className="sup-service-body">{body}</p>
                </div>
                <div className="sup-service-img">
                  <Image src={img} alt={title} fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 50vw, 16vw" />
                </div>
              </article>
            ))}
          </div>

          {/* stats */}
          <div className="sup-stats">
            {supportStats.map(({ icon: Icon, value, label, note }) => (
              <div key={label} className="sup-stat">
                <div className="sup-stat-icon">
                  <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div>
                  <div className="sup-stat-value">{value}</div>
                  <div className="sup-stat-label">{label}</div>
                  <p className="sup-stat-note">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BAND 2 · Heritage — tint split (text | image) ── */}
      <section className="section section--tint" aria-label="Professional development heritage">
        <div className="section-inner">
          <div className="split split--reverse">
            {/* PLACEHOLDER: swap for real image */}
            <div className="support-heritage-img">
              <Image
                src="/images/support-clinic.webp"
                alt="Support and training — placeholder image"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className="support-heritage-img-overlay" aria-hidden="true" />
            </div>
            <div>
              <span className="sec-eyebrow">Beyond the product</span>
              <h2 className="sec-title" style={{ margin: "16px 0 16px" }}>
                Supporting the profession, not just the purchase.
              </h2>
              <p className="sec-lead">
                We have long supported the profession through seminars, continuing veterinary education and access to international conferences and training. Our commitment to the development of veterinary medicine in Malta goes beyond equipment supply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BAND 3 · CTA — full-bleed teal ── */}
      <section className="section section--teal section--sm" aria-label="Call to action">
        <div className="section-inner">
          <div className="sec-header sec-header--center">
            <h2 className="sec-title">Need support with existing equipment, or planning something new?</h2>
            <p className="sec-lead">Talk to us — we&apos;re based in Malta and here when you need us.</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/contact" className="btn-primary">Request a Consultation</Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Support hero (winding journey) ── */
        .sup-hero {
          background: linear-gradient(135deg, var(--bg-1) 0%, var(--bg-2) 100%);
          padding: 0;
          color: var(--navy);
          overflow: hidden;
        }
        .sup-hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px 20px 60px;
          position: relative;
          z-index: 1;
        }
        .sup-hero-grid {
          display: grid;
          grid-template-columns: 0.86fr 1.14fr;
          gap: 44px;
          align-items: center;
          min-height: 460px;
        }
        .sup-hero-text { display: flex; flex-direction: column; align-items: flex-start; }
        .sup-hero-eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.6px;
          color: var(--muted);
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .sup-hero-h1 {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(30px, 3.4vw, 46px);
          line-height: 1.08;
          letter-spacing: -1.2px;
          color: var(--navy);
          margin-bottom: 20px;
          max-width: 13ch;
        }
        .sup-hero-accent { color: var(--teal); }
        .sup-hero .page-hero-divider { width: 56px; margin: 0 0 22px; }
        .sup-hero-sub {
          font-size: 16px;
          color: var(--muted) !important;
          max-width: 430px;
          line-height: 1.65;
          font-weight: 500;
          margin-bottom: 28px;
        }
        .sup-hero-ctas { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; }
        .sup-hero-cta {
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
          transition: background 0.2s ease, transform 0.22s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.2s ease;
        }
        .sup-hero-cta:hover { background: var(--teal-dark); transform: translateY(-2px); box-shadow: 0 12px 30px -8px rgba(31,78,78,0.55); }
        .sup-hero-cta:focus-visible { outline: 3px solid var(--teal); outline-offset: 3px; }
        .sup-hero-cta:active { transform: translateY(0); }
        .sup-hero-247 { display: flex; align-items: center; gap: 11px; }
        .sup-hero-247-icon {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: rgba(43,107,107,0.1);
          color: var(--teal);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .sup-hero-247-title { font-size: 13px; font-weight: 800; color: var(--navy); }
        .sup-hero-247-sub { font-size: 11.5px; color: var(--muted); }

        /* winding journey */
        .sup-journey { position: relative; width: 100%; min-height: 420px; }
        .sup-journey-wave { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; }
        .sup-journey-node {
          position: absolute;
          width: 14px; height: 14px;
          border-radius: 50%;
          background: #fff;
          border: 3px solid var(--teal);
          transform: translate(-50%, -50%);
          box-shadow: 0 0 0 4px rgba(43,107,107,0.08), 0 0 10px 2px rgba(96,200,190,0.5);
          z-index: 1;
          pointer-events: none;
        }
        .sup-journey-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
          height: 420px;
        }
        .sup-step { display: flex; }
        .sup-step--up { align-items: flex-start; }
        .sup-step--down { align-items: flex-end; }
        .sup-step-card {
          background: linear-gradient(155deg, rgba(255,255,255,0.66) 0%, rgba(255,255,255,0.36) 100%);
          backdrop-filter: blur(16px) saturate(1.35);
          -webkit-backdrop-filter: blur(16px) saturate(1.35);
          border: 1px solid rgba(255,255,255,0.72);
          border-radius: 16px;
          padding: 14px 14px 15px;
          box-shadow: 0 16px 38px -20px rgba(15,39,48,0.26), inset 0 1px 0 rgba(255,255,255,0.6);
        }
        .sup-step-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
        .sup-step-num {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 18px;
          color: var(--teal);
          letter-spacing: -1px;
        }
        .sup-step-icon {
          width: 30px; height: 30px;
          border-radius: 50%;
          border: 1.5px solid rgba(43,107,107,0.3);
          color: var(--teal);
          display: flex; align-items: center; justify-content: center;
        }
        .sup-step-title { font-size: 13px; font-weight: 800; color: var(--navy); letter-spacing: -0.2px; margin-bottom: 5px; }
        .sup-step-body { font-size: 11px; color: var(--muted); line-height: 1.45; margin: 0; }

        /* ── Service cards with photos ── */
        .sup-services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .sup-service-card {
          display: flex;
          flex-direction: column;
          background: linear-gradient(155deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.34) 100%);
          backdrop-filter: blur(16px) saturate(1.35);
          -webkit-backdrop-filter: blur(16px) saturate(1.35);
          border: 1px solid rgba(255,255,255,0.7);
          border-radius: 18px;
          padding: 18px 18px 0;
          box-shadow: 0 18px 42px -22px rgba(15,39,48,0.26), inset 0 1px 0 rgba(255,255,255,0.6);
          overflow: hidden;
          transition: transform 0.24s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.22s ease;
        }
        .sup-service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 26px 52px -20px rgba(15,39,48,0.3), inset 0 1px 0 rgba(255,255,255,0.7);
        }
        .sup-service-text { padding-bottom: 16px; }
        .sup-service-icon {
          width: 40px; height: 40px;
          border-radius: 11px;
          background: rgba(43,107,107,0.1);
          color: var(--teal);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
        }
        .sup-service-title { font-size: 14px; font-weight: 800; color: var(--navy); letter-spacing: -0.2px; margin-bottom: 7px; }
        .sup-service-body { font-size: 12px; color: var(--muted); line-height: 1.5; margin: 0; }
        .sup-service-img {
          position: relative;
          width: calc(100% + 36px);
          margin: 0 -18px;
          height: 116px;
        }

        /* ── Stats ── */
        .sup-stats {
          margin-top: 28px;
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
        .sup-stat { display: flex; align-items: flex-start; gap: 15px; padding: 24px 24px; }
        .sup-stat + .sup-stat { border-left: 1px solid rgba(43,107,107,0.12); }
        .sup-stat-icon {
          width: 46px; height: 46px;
          border-radius: 50%;
          background: rgba(43,107,107,0.09);
          color: var(--teal);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 2px;
        }
        .sup-stat-value {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 24px;
          color: var(--teal);
          letter-spacing: -0.6px;
          line-height: 1;
          margin-bottom: 6px;
        }
        .sup-stat-label { font-size: 13.5px; font-weight: 800; color: var(--navy); margin-bottom: 5px; }
        .sup-stat-note { font-size: 11.5px; color: var(--muted); line-height: 1.45; margin: 0; }

        @media (max-width: 980px) {
          .sup-hero-grid { grid-template-columns: 1fr; gap: 36px; }
          /* unwind the journey into a clean 2-col card grid */
          .sup-journey { min-height: 0; }
          .sup-journey-wave, .sup-journey-node { display: none; }
          .sup-journey-grid { grid-template-columns: repeat(2, 1fr); height: auto; gap: 14px; }
          .sup-step { align-items: stretch; }
          .sup-services-grid { grid-template-columns: repeat(2, 1fr); }
          .sup-stats { grid-template-columns: repeat(2, 1fr); }
          .sup-stat:nth-child(3) { border-left: none; }
          .sup-stat:nth-child(n+3) { border-top: 1px solid rgba(43,107,107,0.12); }
        }
        @media (max-width: 768px) {
          .sup-step-card, .sup-service-card, .sup-stats {
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            background: rgba(255,255,255,0.94);
          }
        }
        @media (max-width: 560px) {
          .sup-journey-grid { grid-template-columns: 1fr; }
          .sup-services-grid { grid-template-columns: 1fr; }
          .sup-stats { grid-template-columns: 1fr; }
          .sup-stat + .sup-stat { border-left: none; border-top: 1px solid rgba(43,107,107,0.12); }
        }

        /* ── Heritage image (split) ── */
        .support-heritage-img {
          position: relative;
          height: 340px;
          border-radius: 22px;
          overflow: hidden;
          box-shadow:
            0 4px 12px -4px rgba(15,39,48,0.10),
            0 24px 56px -18px rgba(15,39,48,0.24);
        }
        .support-heritage-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15,39,48,0.18) 0%, transparent 60%);
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr; }
          .support-heritage-img { height: 260px; }
        }
      `}</style>
    </>
  );
}
