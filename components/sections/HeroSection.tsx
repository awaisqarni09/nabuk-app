import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Headphones, Users, Phone, MapPin, Mail } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "TRUSTED SINCE 1996",
    body: "Nearly thirty years supporting the growth of veterinary medicine across the Maltese islands.",
  },
  {
    icon: Headphones,
    title: "CLINICAL EXPERTISE",
    body: "Specialists in diagnostics, imaging and surgical infrastructure — not a general distributor.",
  },
  {
    icon: Users,
    title: "LOCAL PARTNERSHIP",
    body: "On-island support, installation and servicing for clinics across Malta and Gozo.",
  },
];

export function HeroSection() {
  return (
    <div className="nabuk-page">
      {/* ── HERO ── */}
      <section className="nabuk-hero" aria-label="Nabuk Distributors introduction">
        {/* LEFT column */}
        <div className="hero-left">
          {/* Logo lockup */}
          <div className="logo">
            <svg viewBox="0 0 64 64" fill="none" stroke="var(--navy)"
              strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              width={60} height={60} className="logo-mark" aria-hidden="true">
              <path d="M18 8v18c0 7 4 12 10 14" />
              <path d="M40 8v18c0 7-4 12-10 14" />
              <circle cx="18" cy="6" r="2.5" fill="var(--navy)" stroke="none" />
              <circle cx="40" cy="6" r="2.5" fill="var(--navy)" stroke="none" />
              <line x1="30" y1="40" x2="30" y2="50" />
              <circle cx="30" cy="54" r="5" />
              <line x1="30" y1="42" x2="44" y2="42" />
              <circle cx="46" cy="42" r="3" fill="var(--navy)" stroke="none" />
            </svg>
            <span className="logo-vss">VSS</span>
            <span className="logo-tag">Vet Supplies Specialists</span>
          </div>

          {/* Eyebrow */}
          <div className="hero-eyebrow">WELCOME TO</div>

          {/* Heading */}
          <h1 className="nabuk-title">
            NABUK
            <br />
            DISTRIBUTORS
            <br />
            <span className="title-malta">MALTA</span>
          </h1>

          {/* Teal divider */}
          <div className="nabuk-divider" />

          {/* Lead */}
          <p className="nabuk-lead">
            Supplying Malta&apos;s veterinary profession with advanced equipment,
            diagnostics and clinical solutions for nearly three decades.
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <Link href="/solutions" className="explore-btn">
              EXPLORE SOLUTIONS
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                width={16} height={16} aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
            <Link href="/contact" className="explore-btn explore-btn--ghost">
              CONTACT US
            </Link>
          </div>
        </div>

        {/* RIGHT column — product card showcase */}
        <div className="nabuk-products" aria-label="Product showcase">
          {/* Pale-teal circular disc — the backdrop behind floating product images */}
          <div className="product-circle" aria-hidden="true" />

          {/* Swap each next/image src for a real product photo when assets are ready */}

          {/* p1 — G100 DEVICE */}
<div className="product p1">
  <div className="product-inner">
    <Image 
      src="/images/G100-Device.png" // Point directly to your local file here
      alt="G100 Device — veterinary equipment"
      fill
      style={{ objectFit: "contain" }} // Pro tip: 'contain' ensures the equipment doesn't get cropped
      sizes="200px" 
    />
  </div>
</div>

          {/* p2 — WISAP UNIT */}
<div className="product p2">
  <div className="product-inner">
    <Image 
      src="/images/WISAF-UNIT.png" // Change this filename to match your file
      alt="WISAP Unit — veterinary equipment" 
      fill
      style={{ objectFit: "contain" }} // Ensures the equipment doesn't get cropped
      sizes="240px" 
    />
  </div>
</div>

          {/* p3 — MICROSCOPE */}
<div className="product p3">
  <div className="product-inner">
    <Image 
      src="/images/microscope.png" // Change this filename to match your file
      alt="Microscope — veterinary equipment" 
      fill
      style={{ objectFit: "contain" }} // Ensures the equipment doesn't get cropped
      sizes="180px" 
    />
  </div>
</div>

          {/* p4 — ELEMENT i+ */}
<div className="product p4">
  <div className="product-inner">
    <Image 
      src="/images/element-i-plus.png" // Make sure this matches your filename and extension (e.g., .png or .jpg)
      alt="Element i+ — veterinary analyser" 
      fill
      style={{ objectFit: "contain" }} // Ensures the entire analyzer graphic stays fully visible
      sizes="200px" 
    />
  </div>
</div>

          {/* p5 — ELEMENT HT5 */}
          <div className="product p5">
  <div className="product-inner">
    <Image 
      src="/images/element-ht5.png" // lowercase — matches the filename git tracks
      alt="Element HT5 — veterinary analyser" 
      fill
      style={{ objectFit: "contain" }} // Keeps the whole analyser unit perfectly framed
      sizes="260px" 
    />
  </div>
</div>
</div>
      </section>

      {/* ── FEATURES PANEL ── */}
      <section className="nabuk-features" aria-label="Key capabilities">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="feature-item">
              <Icon size={44} strokeWidth={1.5} className="feature-icon" aria-hidden="true" />
              <div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-body">{f.body}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── CONTACT BAR ── */}
      {/* PLACEHOLDER: info@nabukmalta.com — replace before launch */}
      <section className="nabuk-contact" aria-label="Contact information">
        <div className="contact-item">
          <div className="contact-icon" aria-hidden="true"><Phone size={20} /></div>
          <div>
            <strong className="contact-strong">+356 9947 2220</strong>
            <span className="contact-sub">Call us today</span>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon" aria-hidden="true"><MapPin size={20} /></div>
          <div>
            <strong className="contact-strong">BASED IN MALTA</strong>
            <span className="contact-sub">Serving Malta &amp; Gozo</span>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon" aria-hidden="true"><Mail size={20} /></div>
          <div>
            <strong className="contact-strong">info@nabukmalta.com</strong>
            <span className="contact-sub">We&apos;re here to help</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER TAGLINE ── */}
      <div className="footer-tag">
        Equipping veterinary professionals with the tools they need
        to provide the{" "}
        <span className="footer-best">best care.</span>
      </div>

      {/* ── POSITIONING BAND + CTA (added below reference, same visual language) ── */}
      <section className="nabuk-cta-band" aria-label="Consultation call to action">
        <p className="cta-heading">
          Helping shape modern veterinary practice in Malta since 1996.
        </p>
        <Link href="/contact" className="cta-button">
          Request a Consultation
        </Link>
      </section>

      <style>{`
        /* Page wrapper */
        .nabuk-page {
          max-width: 1280px;
          margin: 0 auto;
          padding: 40px 20px;
          position: relative;
        }

        /* Hero */
        .nabuk-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          min-height: 580px;
          position: relative;
          z-index: 1;
        }

        /* Logo */
        .logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 30px;
        }
        .logo-mark { margin-bottom: 4px; }
        .logo-vss {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          color: var(--red);
          font-size: 26px;
          letter-spacing: 1px;
          line-height: 1;
        }
        .logo-tag {
          font-size: 11px;
          color: var(--navy);
          font-weight: 600;
          margin-top: 4px;
          letter-spacing: 0.3px;
        }

        /* Title */
        .nabuk-title {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(48px, 7vw, 96px);
          line-height: 0.95;
          color: var(--navy);
          letter-spacing: -1px;
          margin-bottom: 24px;
        }
        .title-malta {
          color: var(--red);
          display: block;
        }

        /* Divider */
        .nabuk-divider {
          width: 60px;
          height: 3px;
          background: var(--teal);
          margin-bottom: 22px;
          border-radius: 2px;
        }

        /* Lead */
        .nabuk-lead {
          font-size: 17px;
          color: var(--navy);
          max-width: 460px;
          line-height: 1.55;
          font-weight: 500;
        }

        /* Eyebrow */
        .hero-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: var(--teal);
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        /* CTA row */
        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        /* Primary CTA — filled pill */
        .explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--teal);
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          padding: 13px 26px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.8px;
          box-shadow: 0 8px 24px -8px rgba(31,78,78,0.5),
                      0 2px 8px -2px rgba(31,78,78,0.2);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .explore-btn:hover {
          background: var(--teal-dark);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -8px rgba(31,78,78,0.55),
                      0 4px 12px -2px rgba(31,78,78,0.25);
        }
        .explore-btn:focus-visible {
          outline: 3px solid var(--teal);
          outline-offset: 3px;
        }
        .explore-btn:active { transform: translateY(0); }

        /* Ghost CTA — outlined pill */
        .explore-btn--ghost {
          background: transparent;
          color: var(--teal);
          border: 2px solid var(--teal);
          box-shadow: none;
        }
        .explore-btn--ghost:hover {
          background: var(--teal);
          color: #fff;
          box-shadow: 0 8px 24px -8px rgba(31,78,78,0.4);
        }

        /* Product showcase */
        .nabuk-products {
          position: relative;
          height: 580px;
          overflow: visible;
        }

        /* Pale-teal circular backdrop */
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
          left: 58%;
          transform: translate(-50%, -50%);
          z-index: 0;
          pointer-events: none;
        }

        /* Product images — floating, no white boxes */
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
        /* Images are transparent PNGs — no blend mode needed */
        /*
         * Desktop 5-product layout — editorial "star" composition.
         * 2 satellites top  |  1 hero centre  |  2 anchors bottom.
         * Container ~600 × 580px. All pairs verified — no x+y overlap:
         *
         *   p1 (48–208,15–155)  ↔ p5 (410–595,10–145)   x-gap 202px ✓
         *   p1 (48–208,15–155)  ↔ p2 (228–428,215–345)  x-gap 20px / y-gap 60px ✓
         *   p5 (410–595,10–145) ↔ p2 (228–428,215–345)  x-ovlp 18px / y-gap 70px ✓
         *   p2 (228–428,215–345)↔ p3 (24–164,330–515)   x-gap 64px ✓
         *   p2 (228–428,215–345)↔ p4 (400–570,392–572)  x-ovlp 28px / y-gap 47px ✓
         *   p3 (24–164,330–515) ↔ p4 (400–570,392–572)  x-gap 236px ✓
         *   p1 (48–208,15–155)  ↔ p3 (24–164,330–515)   y-gap 175px ✓
         *   p5 (410–595,10–145) ↔ p4 (400–570,392–572)  y-gap 247px ✓
         */

        /* G100 — top-left satellite    x(48–208)  y(15–155) */
        .product.p1 { width: 160px; height: 140px; top: 15px;   left: 8%;    transform: rotate(-3deg); z-index: 2; }

        /* Element HT5 — top-right satellite x(410–595) y(10–145) */
        .product.p5 { width: 185px; height: 135px; top: 10px;   right: 5px;  transform: rotate(2deg);  z-index: 2; }

        /* WISAP — centre hero          x(228–428) y(215–345) */
        .product.p2 { width: 200px; height: 130px; top: 215px;  left: 38%;   transform: rotate(-1deg); z-index: 4; }

        /* Microscope — lower-left anchor x(24–164) y(330–515) */
        .product.p3 { width: 140px; height: 185px; top: 330px;  left: 4%;    transform: rotate(1deg);  z-index: 2; }

        /* Element i+ — lower-right anchor x(400–570) y(392–572) */
        .product.p4 { width: 170px; height: 180px; bottom: 8px; right: 30px; transform: rotate(-2deg); z-index: 3; }

        /* Features panel */
        .nabuk-features {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 32px 40px;
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          box-shadow: 0 10px 40px -20px rgba(15,39,48,0.15);
          position: relative;
          z-index: 1;
        }
        .feature-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .feature-icon { color: var(--teal); flex-shrink: 0; }
        .feature-title {
          font-size: 13px;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }
        .feature-body {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.5;
        }

        /* Contact bar */
        .nabuk-contact {
          background: var(--teal-dark);
          border-radius: 20px;
          margin-top: 20px;
          padding: 24px 40px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          align-items: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .contact-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff;
          color: var(--teal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-strong {
          font-size: 15px;
          font-weight: 700;
          display: block;
        }
        .contact-sub {
          font-size: 13px;
          opacity: 0.85;
          display: block;
          margin-top: 2px;
        }

        /* Footer tagline */
        .footer-tag {
          text-align: center;
          margin-top: 24px;
          font-size: 14px;
          color: var(--navy);
          font-weight: 500;
        }
        .footer-best { color: var(--red); font-weight: 700; }

        /* CTA band */
        .nabuk-cta-band {
          margin-top: 60px;
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 20px;
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 24px;
          box-shadow: 0 10px 40px -20px rgba(15,39,48,0.12);
          position: relative;
          z-index: 1;
        }
        .cta-heading {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          color: var(--navy);
          line-height: 1.15;
          letter-spacing: -0.5px;
          max-width: 680px;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          background: var(--teal);
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 32px;
          border-radius: 10px;
          text-decoration: none;
          letter-spacing: 0.3px;
          box-shadow: 0 8px 24px -8px rgba(31,78,78,0.4);
          transition: background 0.2s, transform 0.2s;
        }
        .cta-button:hover {
          background: var(--teal-dark);
          transform: translateY(-2px);
        }
        .cta-button:focus-visible {
          outline: 3px solid var(--teal);
          outline-offset: 3px;
        }
        .cta-button:active {
          transform: translateY(0);
        }

        /* ── Responsive breakpoints ── */
        @media (max-width: 900px) {
          .nabuk-hero { grid-template-columns: 1fr; }
          .nabuk-products { height: 440px; }
          /* 1-col at 900px: full page width (~860px), circle centred at 50%.
             Mirror the star composition with left-% anchored around 50%. */
          .product-circle { width: 380px; height: 380px; left: 50%; }
          .product.p1 { width: 125px; height: 110px; top: 12px;  left: 26%; }
          .product.p5 { width: 145px; height: 106px; top: 8px;   left: 58%; }
          .product.p2 { width: 158px; height: 103px; top: 175px; left: 38%; }
          .product.p3 { width: 110px; height: 146px; top: 262px; left: 5%; }
          .product.p4 { width: 134px; height: 142px; bottom: 8px; left: 58%; }
          .nabuk-features {
            grid-template-columns: 1fr;
            padding: 24px;
          }
          .nabuk-contact {
            grid-template-columns: 1fr;
            padding: 24px;
          }
        }
        @media (max-width: 520px) {
          .nabuk-page { padding: 32px 16px; overflow-x: hidden; }
          .nabuk-features { grid-template-columns: 1fr; }
          .nabuk-title { font-size: 40px; word-break: break-word; }
          .nabuk-lead { font-size: 15px; }
          .nabuk-products { height: 320px; }
          .product-circle { width: 270px; height: 270px; left: 50%; }
          .product.p1 { width: 105px; height: 116px; top: 10px; left: 8%; }
          .product.p2 { width: 125px; height: 84px; top: 5px; right: 2px; }
          .product.p3 { width: 98px; height: 128px; top: 130px; left: 5%; }
          .product.p4 { width: 110px; height: 116px; bottom: 5px; left: 36%; }
          .product.p5 { width: 135px; height: 102px; top: 148px; right: 2px; }
        }
        @media (max-width: 380px) {
          .nabuk-title { font-size: 36px; }
        }
      `}</style>
    </div>
  );
}
