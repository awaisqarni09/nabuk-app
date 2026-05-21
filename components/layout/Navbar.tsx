"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", anchor: "#hero", label: "Home" },
  { href: "/who-we-are", anchor: "#who-we-are", label: "Who We Are" },
  { href: "/about", anchor: "#about", label: "About" },
  { href: "/solutions", anchor: "#solutions", label: "Solutions" },
  { href: "/partners", anchor: "#partners", label: "Partners" },
  { href: "/support", anchor: "#support", label: "Support" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const getLinkHref = (link: { href: string; anchor: string }) =>
    isHome ? link.anchor : link.href;

  const ctaHref = isHome ? "#contact" : "/contact";

  return (
    <>
      <header className="nabuk-nav">
        <div className="nav-inner">
          {/* Logo */}
          <Link href={isHome ? "#hero" : "/"} className="nav-logo" aria-label="Nabuk Distributors Malta — home">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="var(--navy)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              width={36}
              height={36}
              aria-hidden="true"
            >
              <path d="M18 8v18c0 7 4 12 10 14" />
              <path d="M40 8v18c0 7-4 12-10 14" />
              <circle cx="18" cy="6" r="2.5" fill="var(--navy)" stroke="none" />
              <circle cx="40" cy="6" r="2.5" fill="var(--navy)" stroke="none" />
              <line x1="30" y1="40" x2="30" y2="50" />
              <circle cx="30" cy="54" r="5" />
              <line x1="30" y1="42" x2="44" y2="42" />
              <circle cx="46" cy="42" r="3" fill="var(--navy)" stroke="none" />
            </svg>
            <div className="nav-logo-text">
              <span className="nav-vss">VSS</span>
              <span className="nav-company">Nabuk Distributors</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="nav-links-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getLinkHref(link)}
                className={`nav-link ${!isHome && isActive(link.href) ? "nav-link--active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link href={ctaHref} className="nav-cta">
            Request a Consultation
          </Link>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            aria-label="Mobile navigation"
            className="nav-mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getLinkHref(link)}
                className={`nav-mobile-link ${!isHome && isActive(link.href) ? "nav-mobile-link--active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              className="nav-mobile-cta"
              onClick={() => setOpen(false)}
            >
              Request a Consultation
            </Link>
          </nav>
        )}
      </header>

      <style>{`
        .nabuk-nav {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(26,58,74,0.08);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 24px -8px rgba(15,39,48,0.12);
        }
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
          height: 68px;
          display: flex;
          align-items: center;
          gap: 40px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          gap: 2px;
        }
        .nav-vss {
          font-family: var(--font-archivo-black, 'Archivo Black'), sans-serif;
          color: var(--red);
          font-size: 18px;
          letter-spacing: 1px;
        }
        .nav-company {
          font-size: 10px;
          font-weight: 600;
          color: var(--muted);
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
        }
        .nav-link {
          font-size: 14px;
          font-weight: 600;
          color: var(--navy);
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 8px;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
        }
        .nav-link:hover { color: var(--teal); background: rgba(43,107,107,0.07); }
        .nav-link:focus-visible { outline: 2px solid var(--teal); outline-offset: 2px; }
        .nav-link--active { color: var(--teal); }
        .nav-cta {
          flex-shrink: 0;
          background: var(--teal);
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          letter-spacing: 0.2px;
          transition: background 0.15s, transform 0.15s;
          box-shadow: 0 4px 12px -4px rgba(31,78,78,0.35);
        }
        .nav-cta:hover { background: var(--teal-dark); transform: translateY(-1px); }
        .nav-cta:focus-visible { outline: 2px solid var(--teal); outline-offset: 3px; }
        .nav-cta:active { transform: translateY(0); }
        .nav-hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: var(--navy);
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          padding: 0;
          margin-left: auto;
          transition: background 0.15s;
        }
        .nav-hamburger:hover { background: rgba(43,107,107,0.07); }
        .nav-hamburger:focus-visible { outline: 2px solid var(--teal); outline-offset: 2px; }
        .nav-mobile {
          border-top: 1px solid rgba(26,58,74,0.08);
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: rgba(255,255,255,0.98);
        }
        .nav-mobile-link {
          font-size: 16px;
          font-weight: 600;
          color: var(--navy);
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 10px;
          transition: color 0.15s, background 0.15s;
        }
        .nav-mobile-link:hover, .nav-mobile-link--active {
          color: var(--teal);
          background: rgba(43,107,107,0.07);
        }
        .nav-mobile-cta {
          margin-top: 8px;
          background: var(--teal);
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          padding: 14px 20px;
          border-radius: 10px;
          text-decoration: none;
          text-align: center;
          transition: background 0.15s;
        }
        .nav-mobile-cta:hover { background: var(--teal-dark); }

        @media (max-width: 900px) {
          .nav-links-desktop { display: none; }
          .nav-cta { display: none; }
          .nav-hamburger { display: flex; }
        }
        @media (max-width: 480px) {
          .nav-inner { gap: 0; }
          .nav-company { display: none; }
        }
      `}</style>
    </>
  );
}
