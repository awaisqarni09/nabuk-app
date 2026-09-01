import Image from "next/image";
import Link from "next/link";

// The five transparent product renders float as a constellation. Each carries
// a specimen-style mono label; `depth` drives the pointer parallax layer set
// up by HeroEntrance (desktop, fine pointers, motion-safe only).
const constellation = [
  { cls: "p1", src: "/images/G100-Device.webp",    alt: "G100 veterinary device",            label: "G100",        depth: 0.5 },
  { cls: "p2", src: "/images/WISAF-UNIT.webp",     alt: "WISAP veterinary unit",             label: "WISAP",       depth: 1,   priority: true },
  { cls: "p3", src: "/images/microscope.webp",     alt: "Laboratory microscope",             label: "Microscopy",  depth: 0.7 },
  { cls: "p4", src: "/images/element-i-plus.webp", alt: "Element i+ veterinary analyser",    label: "Element i+",  depth: 0.6 },
  { cls: "p5", src: "/images/element-ht5.webp",    alt: "Element HT5 veterinary analyser",   label: "Element HT5", depth: 0.45 },
];

// Verified trust indicators — each resolves to the page that substantiates it.
const trustPoints = [
  { label: "Est. 1996",            note: "Nearly three decades with the profession", href: "/about" },
  { label: "Clinical specialists", note: "Diagnostics, imaging & surgical systems",   href: "/solutions" },
  { label: "Malta & Gozo",         note: "On-island installation and support",        href: "/support" },
];

export function HeroSection() {
  return (
    <section className="nabuk-hero-band" aria-label="Nabuk Distributors introduction">
      <div className="nabuk-hero">
        {/* LEFT — editorial statement */}
        <div className="hero-left">
          <p className="hero-eyebrow">Veterinary technology · Malta · Est. 1996</p>

          <h1 className="home-title">
            Nabuk
            <br />
            Distributors
            <br />
            <span className="home-title-malta">Malta</span>
          </h1>

          <div className="home-rule" aria-hidden="true" />

          <p className="home-lead">
            Advanced equipment, diagnostics and clinical solutions for
            Malta&apos;s veterinary profession — specified, installed and
            supported on-island since 1996.
          </p>

          <div className="hero-ctas">
            <Link href="/solutions" className="btn btn--solid">
              Explore Solutions
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.4" width={15} height={15} aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn--ghost">
              Request a Consultation
            </Link>
          </div>
        </div>

        {/* RIGHT — clinical technology constellation */}
        <div className="nabuk-products" aria-label="Veterinary equipment from the Nabuk portfolio">
          <div className="product-circle" aria-hidden="true" />

          {/* fine dashed connectors between device positions */}
          <svg className="hero-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M22 15 L55 48 M84 14 L55 48 M18 72 L55 48 M76 82 L55 48"
              stroke="rgba(43,107,107,0.4)" strokeWidth="1.2" strokeDasharray="1.5 7"
              strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke" />
          </svg>

          {constellation.map(({ cls, src, alt, label, depth, priority }) => (
            <div key={cls} className={`product ${cls}`} data-depth={depth}>
              <div className="product-inner">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  priority={priority}
                  fetchPriority={priority ? "high" : undefined}
                  style={{ objectFit: "contain" }}
                  sizes="240px"
                />
              </div>
              <span className="product-tag" aria-hidden="true">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust strip — verified indicators, each a real destination */}
      <div className="hero-trust" aria-label="Why clinics work with Nabuk">
        {trustPoints.map(({ label, note, href }) => (
          <Link key={label} href={href} className="hero-trust-item">
            <span className="hero-trust-label">{label}</span>
            <span className="hero-trust-note">{note}</span>
            <svg className="hero-trust-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={12} height={12}
              aria-hidden="true">
              <path d="M3 13L13 3M13 3H6M13 3v7" />
            </svg>
          </Link>
        ))}
      </div>

      <style>{`
        .nabuk-hero-band {
          max-width: var(--container);
          margin: 0 auto;
          padding: clamp(28px, 4vw, 52px) var(--gutter) 0;
          position: relative;
        }
        .nabuk-hero {
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 40px;
          align-items: center;
          min-height: 560px;
          position: relative;
          z-index: 1;
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .home-title {
          font-family: var(--font-poppins), "Segoe UI", sans-serif;
          font-size: var(--fs-display);
          line-height: 0.94;
          color: var(--navy);
          letter-spacing: -0.03em;
          margin: 18px 0 26px;
          text-transform: uppercase;
        }
        .home-title-malta { color: var(--red); display: block; }
        .home-rule {
          width: 220px;
          max-width: 60%;
          height: 9px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--hairline);
          background: repeating-linear-gradient(to right, var(--hairline) 0 1px, transparent 1px 22px);
          background-size: 100% 5px;
          background-position: 0 bottom;
          background-repeat: no-repeat;
        }
        .home-lead {
          font-size: var(--fs-lead);
          color: var(--ink-soft);
          max-width: 460px;
          line-height: 1.65;
          font-weight: 500;
          margin: 0;
        }
        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        /* ── Constellation ── */
        .nabuk-products {
          position: relative;
          height: 580px;
          overflow: visible;
        }
        .product-circle {
          position: absolute;
          width: 490px;
          height: 490px;
          border-radius: 50%;
          background: radial-gradient(circle at 45% 45%,
            rgba(155,205,205,0.82) 0%,
            rgba(175,218,218,0.68) 40%,
            rgba(195,228,228,0.42) 68%,
            rgba(210,236,236,0.15) 88%,
            transparent 100%);
          top: 50%;
          left: 56%;
          transform: translate(-50%, -50%);
          z-index: 0;
          pointer-events: none;
        }
        .hero-links {
          position: absolute;
          inset: 6% 4%;
          width: 92%;
          height: 88%;
          z-index: 0;
          pointer-events: none;
        }
        .product {
          position: absolute;
          z-index: 1;
          filter: drop-shadow(0 14px 32px rgba(15,39,48,0.17))
                  drop-shadow(0 4px 10px rgba(15,39,48,0.09));
        }
        .product-inner {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .product-tag {
          position: absolute;
          left: 50%;
          bottom: -26px;
          transform: translateX(-50%);
          font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--teal-dark);
          background: rgba(255,255,255,0.85);
          border: 1px solid var(--hairline-soft);
          padding: 3px 9px;
          border-radius: var(--r-pill);
          white-space: nowrap;
        }

        /* Star composition — 2 satellites top, 1 hero centre, 2 anchors bottom */
        .product.p1 { width: 160px; height: 140px; top: 15px;   left: 8%;    transform: rotate(-3deg); z-index: 2; }
        .product.p5 { width: 185px; height: 135px; top: 10px;   right: 5px;  transform: rotate(2deg);  z-index: 2; }
        .product.p2 { width: 200px; height: 130px; top: 225px;  left: 38%;   transform: rotate(-1deg); z-index: 4; }
        .product.p3 { width: 140px; height: 185px; top: 330px;  left: 4%;    transform: rotate(1deg);  z-index: 2; }
        .product.p4 { width: 170px; height: 180px; bottom: 18px; right: 30px; transform: rotate(-2deg); z-index: 3; }

        /* ── Trust strip ── */
        .hero-trust {
          margin-top: clamp(28px, 4vw, 44px);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: rgba(255,255,255,0.78);
          border: 1px solid var(--hairline-soft);
          border-radius: var(--r-lg);
          box-shadow: var(--shadow-raise);
          overflow: hidden;
        }
        .hero-trust-item {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 22px 26px 20px;
          text-decoration: none;
          transition: background var(--dur-fast) ease;
        }
        .hero-trust-item + .hero-trust-item { border-left: 1px solid var(--hairline-soft); }
        .hero-trust-item:hover { background: var(--teal-wash); }
        .hero-trust-item:focus-visible { outline: 3px solid var(--teal); outline-offset: -3px; }
        .hero-trust-label {
          font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--teal-dark);
        }
        .hero-trust-note {
          font-size: 13.5px;
          color: var(--muted);
          line-height: 1.5;
        }
        .hero-trust-arrow {
          position: absolute;
          top: 20px;
          right: 20px;
          color: var(--teal);
          opacity: 0;
          transform: translate(-3px, 3px);
          transition: opacity var(--dur-fast) ease, transform var(--dur-base) var(--ease-spring);
        }
        .hero-trust-item:hover .hero-trust-arrow,
        .hero-trust-item:focus-visible .hero-trust-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .nabuk-hero { grid-template-columns: 1fr; min-height: 0; }
          .nabuk-products { height: 460px; }
          .product-circle { width: 380px; height: 380px; left: 50%; }
          .hero-links { display: none; }
          .product.p1 { width: 125px; height: 110px; top: 12px;  left: 12%; }
          .product.p5 { width: 145px; height: 106px; top: 8px;   right: 8%; }
          .product.p2 { width: 158px; height: 103px; top: 180px; left: 38%; }
          .product.p3 { width: 110px; height: 146px; top: 280px; left: 6%; }
          .product.p4 { width: 134px; height: 142px; bottom: 24px; right: 10%; }
        }
        @media (max-width: 640px) {
          .hero-trust { grid-template-columns: 1fr; }
          .hero-trust-item + .hero-trust-item {
            border-left: none;
            border-top: 1px solid var(--hairline-soft);
          }
        }
        @media (max-width: 520px) {
          .nabuk-hero-band { padding-top: 28px; }
          .home-title { margin-top: 14px; }
          .home-lead { font-size: 15px; }
          .nabuk-products { height: 350px; }
          .product-circle { width: 270px; height: 270px; }
          .product-tag { display: none; }
          .product.p1 { width: 105px; height: 116px; top: 10px; left: 4%; }
          .product.p5 { width: 135px; height: 102px; top: 6px; right: 2px; left: auto; }
          .product.p2 { width: 125px; height: 84px; top: 140px; left: 34%; }
          .product.p3 { width: 98px; height: 128px; top: 200px; left: 4%; }
          .product.p4 { width: 110px; height: 116px; bottom: 5px; right: 6%; left: auto; }
        }
      `}</style>
    </section>
  );
}
