import Link from "next/link";

const solutionLinks = [
  { href: "/solutions/diagnostic-systems", label: "Diagnostic systems" },
  { href: "/solutions/blood-analysers", label: "Blood analysers" },
  { href: "/solutions/imaging", label: "Imaging" },
  { href: "/solutions/rapid-testing", label: "Rapid testing" },
  { href: "/solutions/sterilisation", label: "Sterilisation" },
  { href: "/solutions", label: "All solutions" },
];

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/partners", label: "Partners" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact us" },
];

const whyLinks = [
  { href: "/support", label: "On-island support" },
  { href: "/about", label: "30 years with the profession" },
  { href: "/partners", label: "International manufacturers" },
  { href: "/contact", label: "Practical advice, fast" },
];

const topicOptions = [
  { value: "", label: "Area of interest" },
  { value: "diagnostic-systems", label: "Diagnostic systems" },
  { value: "blood-analysers", label: "Blood analysers" },
  { value: "imaging", label: "Imaging" },
  { value: "rapid-testing", label: "Rapid testing" },
  { value: "sterilisation", label: "Sterilisation" },
  { value: "other", label: "Something else" },
];

export function Footer() {
  return (
    <footer className="nabuk-footer">
      {/* Consultation band */}
      <div className="footer-cta-band">
        <div className="editorial-container footer-cta-inner">
          <div className="footer-cta-copy">
            <h2>Planning new equipment?</h2>
            <p>Tell us what your clinic needs — clear, practical advice from the Nabuk team.</p>
            <small>*Every enquiry is answered personally, within one business day.</small>
          </div>
          <form className="footer-cta-form" action="/contact" method="get" aria-label="Start an enquiry">
            <div className="footer-cta-fields">
              <input
                className="footer-cta-input"
                type="email"
                name="email"
                placeholder="Email address"
                aria-label="Email address"
                required
              />
              <div className="footer-cta-select-wrap">
                <select className="footer-cta-select" name="topic" aria-label="Area of interest" defaultValue="">
                  {topicOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
                <span className="footer-cta-select-arrow" aria-hidden="true">▾</span>
              </div>
              <button className="footer-cta-submit" type="submit">Get advice</button>
            </div>
            <p className="footer-cta-fine">
              This takes you to our enquiry form with your email filled in — no mailing lists, no spam.
              Your details are used only to answer you. <Link href="/contact">Prefer the full form?</Link>
            </p>
          </form>
        </div>
      </div>

      {/* Link columns */}
      <div className="editorial-container footer-editorial">
        <div className="footer-main">
          <nav aria-label="Solutions">
            <h2 className="footer-col-title">Solutions</h2>
            <ul className="footer-links">
              {solutionLinks.map((link) => (
                <li key={link.href + link.label}><Link className="footer-link" href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company">
            <h2 className="footer-col-title">Company</h2>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.href + link.label}><Link className="footer-link" href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Why Nabuk">
            <h2 className="footer-col-title">Why Nabuk</h2>
            <ul className="footer-links">
              {whyLinks.map((link) => (
                <li key={link.href + link.label}><Link className="footer-link" href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="footer-col-title">Contact us</h2>
            <address className="footer-address">
              <a className="footer-contact-row" href="tel:+35699472220">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.7 2.9.8a2 2 0 0 1 1.6 2z"/></svg>
                +356 9947 2220
              </a>
              <a className="footer-contact-row" href="mailto:info@nabukmalta.com">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                info@nabukmalta.com
              </a>
              <span className="footer-contact-row">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                Reply within one business day
              </span>
              <span className="footer-contact-row">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Malta &amp; Gozo · clinics island-wide
              </span>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nabuk Distributors Ltd. All rights reserved.</span>
          <span>Serving veterinary clinics since 1996</span>
          <a
            className="footer-credit"
            href="https://drasyo.com/en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Designed and built by Drasyo (opens in a new tab)"
          >
            Designed &amp; Built by <span>Drasyo</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
