import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Headphones, Truck, PawPrint, Phone, MapPin, Mail } from "lucide-react";

const PAW_PATH =
  "M11.35 3.836c-.065.21-.1.433-.1.664 0 1.21.847 2.193 1.892 2.193.025 0 .05 0 .074-.002.297.165.534.405.708.682.49.802.81 1.825.61 2.7-.205.91-.864 1.4-1.62 1.4-.756 0-1.418-.49-1.62-1.4-.2-.875.12-1.898.61-2.7.174-.277.41-.517.708-.682.025.002.05.002.074.002 1.045 0 1.892-.983 1.892-2.193 0-.23-.035-.453-.1-.664-.165-.55-.5-.997-.93-1.27a2.06 2.06 0 0 0-2.092 0c-.43.273-.766.72-.93 1.27zM4.5 8.5c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm12 0c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm-9 4c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm6 0c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zM7.5 18a4.5 4.5 0 0 1 9 0c0 1.5-1 2.5-2.5 2.5h-4C8.5 20.5 7.5 19.5 7.5 18z";

const features = [
  {
    icon: ShieldCheck,
    title: "TRUSTED SINCE 1996",
    body: "Nearly thirty years supporting the growth of veterinary medicine across the Maltese islands.",
  },
  {
    icon: Headphones,
    title: "CLINICAL EXPERTISE",
    body: "Specialists in diagnostics, imaging and surgical infrastructure — not a general supplier.",
  },
  {
    icon: Truck,
    title: "GLOBAL MANUFACTURERS",
    body: "Partnered with Eickemeyer, Antech, Melag, Covetrus and Veterinary Instrumentation.",
  },
  {
    icon: PawPrint,
    title: "LOCAL PARTNERSHIP",
    body: "On-island support, installation and servicing for clinics across Malta and Gozo.",
  },
];

export function HeroSection() {
  return (
    <div className="nabuk-page">
      {/* Decorative paw watermarks — exact positions from reference */}
      <svg viewBox="0 0 24 24" fill="rgba(43,107,107,0.07)" width="60" height="60"
        className="paw-bg" style={{ top: "60px", left: "-10px" }} aria-hidden="true">
        <path d={PAW_PATH} />
      </svg>
      <svg viewBox="0 0 24 24" fill="rgba(43,107,107,0.07)" width="50" height="50"
        className="paw-bg" style={{ top: "320px", left: "30px", transform: "rotate(-15deg)" }} aria-hidden="true">
        <path d={PAW_PATH} />
      </svg>
      <svg viewBox="0 0 24 24" fill="rgba(43,107,107,0.07)" width="70" height="70"
        className="paw-bg" style={{ bottom: "280px", left: "-20px", transform: "rotate(20deg)" }} aria-hidden="true">
        <path d={PAW_PATH} />
      </svg>
      <svg viewBox="0 0 24 24" fill="rgba(43,107,107,0.07)" width="55" height="55"
        className="paw-bg" style={{ top: "100px", right: "20px", transform: "rotate(25deg)" }} aria-hidden="true">
        <path d={PAW_PATH} />
      </svg>
      <svg viewBox="0 0 24 24" fill="rgba(43,107,107,0.07)" width="65" height="65"
        className="paw-bg" style={{ top: "380px", right: "-10px", transform: "rotate(-10deg)" }} aria-hidden="true">
        <path d={PAW_PATH} />
      </svg>

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

          {/* Lead — professional tone, replacing retail wording */}
          <p className="nabuk-lead">
            Advanced veterinary equipment and diagnostics for the clinics of
            Malta and Gozo — backed by nearly three decades of partnership with
            the profession.
          </p>
        </div>

        {/* RIGHT column — product card showcase */}
        <div className="nabuk-products" aria-label="Product showcase">
          {/* Swap each next/image src for a real product photo when assets are ready */}

          {/* p1 — G100 DEVICE */}
          <div className="product p1">
            <div className="product-inner">
              <Image src="https://placehold.co/200x220/9aa5ab/ffffff?text=G100+DEVICE"
                alt="G100 Device — veterinary equipment placeholder" fill
                style={{ objectFit: "cover" }} sizes="200px" />
            </div>
          </div>

          {/* p2 — WISAP UNIT */}
          <div className="product p2">
            <div className="product-inner">
              <Image src="https://placehold.co/240x160/e63946/ffffff?text=WISAP+UNIT"
                alt="WISAP Unit — veterinary equipment placeholder" fill
                style={{ objectFit: "cover" }} sizes="240px" />
            </div>
          </div>

          {/* p3 — MICROSCOPE */}
          <div className="product p3">
            <div className="product-inner">
              <Image src="https://placehold.co/180x240/dbe7e7/1a3a4a?text=MICROSCOPE"
                alt="Microscope — veterinary equipment placeholder" fill
                style={{ objectFit: "cover" }} sizes="180px" />
            </div>
          </div>

          {/* p4 — ELEMENT i+ */}
          <div className="product p4">
            <div className="product-inner">
              <Image src="https://placehold.co/200x220/2db5c4/ffffff?text=ELEMENT+i%2B"
                alt="Element i+ — veterinary analyser placeholder" fill
                style={{ objectFit: "cover" }} sizes="200px" />
            </div>
          </div>

          {/* p5 — ELEMENT HT5 */}
          <div className="product p5">
            <div className="product-inner">
              <Image src="https://placehold.co/260x200/2c3e50/ffffff?text=ELEMENT+HT5"
                alt="Element HT5 — veterinary analyser placeholder" fill
                style={{ objectFit: "cover" }} sizes="260px" />
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
      {/* PLACEHOLDER: +356 2100 0000 and info@nabukmalta.com are dummy — replace before launch */}
      <section className="nabuk-contact" aria-label="Contact information">
        <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.08)" width={60} height={60}
          className="contact-paw-deco" aria-hidden="true">
          <path d={PAW_PATH} />
        </svg>

        <div className="contact-item">
          <div className="contact-icon" aria-hidden="true"><Phone size={20} /></div>
          <div>
            <strong className="contact-strong">+356 2100 0000</strong>
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
        <svg viewBox="0 0 24 24" fill="var(--teal)" width={18} height={18}
          className="footer-paw" aria-hidden="true">
          <path d={PAW_PATH} />
        </svg>
        Equipping veterinary professionals with the tools and supplies they need
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

        /* Paw watermarks */
        .paw-bg {
          position: absolute;
          pointer-events: none;
          z-index: 0;
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

        /* Product showcase */
        .nabuk-products {
          position: relative;
          height: 540px;
        }
        .product {
          position: absolute;
          border-radius: 12px;
          box-shadow: 0 25px 50px -15px rgba(15,39,48,0.25);
          background: #fff;
          overflow: hidden;
        }
        .product-inner {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .product.p1 { width: 200px; height: 220px; top: 20px; left: 35%; transform: rotate(-4deg); }
        .product.p2 { width: 240px; height: 160px; top: 0; right: 0; transform: rotate(3deg); }
        .product.p3 { width: 180px; height: 240px; top: 180px; left: 10%; transform: rotate(2deg); }
        .product.p4 { width: 200px; height: 220px; top: 240px; left: 40%; }
        .product.p5 { width: 260px; height: 200px; top: 200px; right: -20px; transform: rotate(-3deg); }

        /* Features panel */
        .nabuk-features {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 32px 40px;
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
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
        .contact-paw-deco {
          position: absolute;
          right: 30px;
          bottom: -10px;
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
        .footer-paw {
          display: inline-block;
          margin-right: 6px;
          vertical-align: middle;
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

        /* Responsive breakpoints — matching reference exactly */
        @media (max-width: 900px) {
          .nabuk-hero { grid-template-columns: 1fr; }
          .nabuk-products { height: 420px; }
          .nabuk-features {
            grid-template-columns: repeat(2, 1fr);
            padding: 24px;
          }
          .nabuk-contact {
            grid-template-columns: 1fr;
            padding: 24px;
          }
        }
        @media (max-width: 520px) {
          .nabuk-features { grid-template-columns: 1fr; }
          .nabuk-title { font-size: 52px; }
          .product.p1 { width: 130px; height: 150px; }
          .product.p2 { width: 150px; height: 110px; }
          .product.p3 { width: 120px; height: 160px; }
          .product.p4 { width: 140px; height: 150px; }
          .product.p5 { width: 160px; height: 130px; }
        }
      `}</style>
    </div>
  );
}
