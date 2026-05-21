import Link from "next/link";

const footerLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/partners", label: "Our Partners" },
  { href: "/about", label: "About Us" },
  { href: "/support", label: "Support & Services" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <>
      <footer className="nabuk-footer">
        <div className="footer-inner">
          {/* Brand column */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="Nabuk Distributors Malta — home">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                width={40}
                height={40}
                aria-hidden="true"
              >
                <path d="M18 8v18c0 7 4 12 10 14" />
                <path d="M40 8v18c0 7-4 12-10 14" />
                <circle cx="18" cy="6" r="2.5" fill="rgba(255,255,255,0.9)" stroke="none" />
                <circle cx="40" cy="6" r="2.5" fill="rgba(255,255,255,0.9)" stroke="none" />
                <line x1="30" y1="40" x2="30" y2="50" />
                <circle cx="30" cy="54" r="5" />
                <line x1="30" y1="42" x2="44" y2="42" />
                <circle cx="46" cy="42" r="3" fill="rgba(255,255,255,0.9)" stroke="none" />
              </svg>
              <div>
                <span className="footer-vss">VSS</span>
                <span className="footer-company">Nabuk Distributors Malta</span>
              </div>
            </Link>
            <p className="footer-tagline">
              Equipping veterinary professionals with the tools they need to provide the best care.
            </p>

          </div>

          {/* Navigation column */}
          <nav className="footer-nav" aria-label="Footer navigation">
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          {/* PLACEHOLDER: phone and email are dummy — replace before launch */}
          <div className="footer-contact">
            <h3 className="footer-col-title">Contact</h3>
            <address className="footer-address">
              <p className="footer-contact-item">
                <span className="footer-contact-label">Phone</span>
                <a href="tel:+35621000000" className="footer-link">+356 2100 0000</a>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-label">Email</span>
                <a href="mailto:info@nabukmalta.com" className="footer-link">info@nabukmalta.com</a>
              </p>
              <p className="footer-contact-item">
                <span className="footer-contact-label">Location</span>
                <span>Malta &amp; Gozo</span>
              </p>
            </address>
            <Link href="/contact" className="footer-cta">
              Request a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Nabuk Distributors Ltd. All rights reserved.
          </p>
          <p className="footer-bottom-note">
            Serving veterinary clinics across Malta &amp; Gozo since 1996.
          </p>
        </div>
      </footer>

      <style>{`
        .nabuk-footer {
          background: var(--navy-dark);
          color: rgba(255,255,255,0.85);
          position: relative;
          overflow: hidden;
        }
        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px 20px 48px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 48px;
        }
        .footer-brand { position: relative; }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 20px;
        }
        .footer-vss {
          display: block;
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          color: var(--red);
          font-size: 22px;
          letter-spacing: 1px;
          line-height: 1;
        }
        .footer-company {
          display: block;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-top: 3px;
        }
        .footer-tagline {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255,255,255,0.6);
          max-width: 280px;
        }
        .footer-col-title {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 20px;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          transition: color 0.15s;
        }
        .footer-link:hover { color: #fff; }
        .footer-link:focus-visible { outline: 2px solid var(--teal); outline-offset: 2px; border-radius: 2px; }
        .footer-address { font-style: normal; display: flex; flex-direction: column; gap: 12px; }
        .footer-contact-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .footer-contact-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .footer-cta {
          display: inline-flex;
          margin-top: 24px;
          background: var(--teal);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          padding: 10px 18px;
          border-radius: 8px;
          text-decoration: none;
          letter-spacing: 0.2px;
          transition: background 0.15s, transform 0.15s;
          box-shadow: 0 4px 12px -4px rgba(31,78,78,0.4);
        }
        .footer-cta:hover { background: var(--teal-dark); transform: translateY(-1px); }
        .footer-cta:focus-visible { outline: 2px solid rgba(255,255,255,0.5); outline-offset: 3px; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          max-width: 1280px;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-size: 13px;
          color: rgba(255,255,255,0.4);
        }
        .footer-bottom-note { color: rgba(255,255,255,0.5); }

        @media (max-width: 900px) {
          .footer-inner { grid-template-columns: 1fr 1fr; gap: 32px; padding-bottom: 32px; }
          .footer-brand { grid-column: 1 / -1; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
        @media (max-width: 520px) {
          .footer-inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
