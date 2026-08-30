import Link from "next/link";

const footerLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="nabuk-footer">
      <div className="footer-editorial editorial-container">
        <div className="footer-main">
          <div>
            <p className="footer-col-title">Nabuk Distributors · Malta</p>
            <p className="footer-statement">Technology for <em>better care.</em></p>
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="footer-col-title">Explore</h2>
            <ul className="footer-links">
              {footerLinks.map((link) => <li key={link.href}><Link className="footer-link" href={link.href}>{link.label}</Link></li>)}
            </ul>
          </nav>
          <div>
            <h2 className="footer-col-title">Start a conversation</h2>
            <address className="footer-address">
              <a className="footer-link" href="tel:+35699472220">+356 9947 2220</a>
              <a className="footer-link" href="mailto:info@nabukmalta.com">info@nabukmalta.com</a>
              <span className="footer-link">Malta &amp; Gozo</span>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nabuk Distributors Ltd.</span>
          <span>Serving veterinary clinics since 1996</span>
          <a className="footer-link" href="https://drasyo.com/en" target="_blank" rel="noopener noreferrer">Designed &amp; built by Drasyo</a>
        </div>
      </div>
    </footer>
  );
}
