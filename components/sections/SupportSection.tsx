import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Settings, BookOpen, Wrench } from "lucide-react";

// PLACEHOLDER: copy is professionally-toned but invented — replace with client-approved copy before launch
const services = [
  {
    icon: MessageSquare,
    title: "Consultation & Specification",
    body: "We help you choose the right equipment for your clinic and caseload. Before you commit to any purchase, we take the time to understand your workflow, team and growth plans — and recommend accordingly.",
    number: "01",
  },
  {
    icon: Settings,
    title: "Installation",
    body: "Full installation of X-ray, ultrasound and laboratory systems. We handle the technical side — commissioning, calibration and verification — so your team can start using new equipment with confidence.",
    number: "02",
  },
  {
    icon: BookOpen,
    title: "Training",
    body: "Getting your team confident with new technology. We provide hands-on training at the point of installation and follow-up support as your team's proficiency develops.",
    number: "03",
  },
  {
    icon: Wrench,
    title: "Servicing & After-Sales",
    body: "Ongoing support to keep clinical equipment running reliably. As your local partner, we are on the island — able to respond when equipment needs attention.",
    number: "04",
  },
];

export function SupportSection() {
  return (
    <>
      {/* ── HERO ── */}
      <div className="page-hero visual-page-hero">
        <div className="page-hero-inner">
          <div className="visual-page-hero-text">
            <div className="visual-page-hero-eyebrow">How We Help</div>
            <h1>Support &amp; Services</h1>
            <div className="page-hero-divider" />
            <p className="page-hero-sub">
              From specification to installation, training and after-sales care — our relationship with a clinic doesn&apos;t end at delivery.
            </p>
            <Link href="/contact" className="visual-page-hero-cta">
              Request Support
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                width={15} height={15} aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="visual-page-hero-media">
            <div className="visual-page-hero-glow" aria-hidden="true" />
            <div className="visual-page-hero-frame" style={{ position: "relative", height: "420px" }}>
              <Image
                src="/images/support-banner.png"
                alt="Veterinary support and services from Nabuk Distributors"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 900px) 0px, 50vw"
              />
            </div>
            <div className="visual-page-hero-badge">
              <span className="visual-page-hero-badge-dot">04</span>
              <span className="visual-page-hero-badge-text">Consultation, installation, training and after-sales</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── BAND 1 · Services — dark navy, white cards ── */}
      <section className="section section--dark" aria-label="Our services">
        <div className="section-inner">
          <div className="sec-header">
            <span className="sec-eyebrow">What we do</span>
            <h2 className="sec-title">Support at every stage of ownership</h2>
            <p className="sec-lead">
              Four ways we partner with your clinic — from the first conversation through to long-term servicing.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.title} className="nabuk-card service-card">
                  <div className="service-card-top">
                    <div className="service-card-icon" aria-hidden="true">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                    <span className="service-card-num" aria-hidden="true">{s.number}</span>
                  </div>
                  <h3 className="card-title" style={{ marginBottom: "12px" }}>{s.title}</h3>
                  <p className="card-body">{s.body}</p>
                </article>
              );
            })}
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
        /* ── Services grid: 2 columns, white cards on dark band ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .service-card {
          padding: 36px;
          background: var(--card);
        }
        .service-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .service-card-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(43,107,107,0.1);
          display: flex; align-items: center; justify-content: center;
          color: var(--teal);
        }
        .service-card-num {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: 38px;
          color: rgba(43,107,107,0.14);
          line-height: 1;
          letter-spacing: -2px;
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
