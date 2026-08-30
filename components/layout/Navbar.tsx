"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [previousPathname, setPreviousPathname] = useState(pathname);
  if (previousPathname !== pathname) {
    setPreviousPathname(pathname);
    setOpen(false);
  }

  // No JS scroll lock while the menu is open: overflow:hidden on <body>
  // un-sticks the sticky header (menu vanishes when scrolled), and on <html>
  // it resets the scroll position to 0. The menu itself is a scroll container
  // with overscroll-behavior:contain, which keeps touch scrolling inside it.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`nabuk-nav ${scrolled ? "nabuk-nav--scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="Nabuk Distributors Malta — home">
          <Image className="nav-logo-mark" src="/images/nabuk-logo-white.webp" alt="" width={42} height={42} priority />
          <span className="nav-wordmark">
            <strong className="nav-vss">VSS</strong>
            <small>Vet Supplies Specialists</small>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="nav-links-desktop">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`nav-link ${isActive(link.href) ? "nav-link--active" : ""}`} aria-current={isActive(link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="nav-cta">Request a consultation <span aria-hidden="true">→</span></Link>
        <button ref={buttonRef} type="button" className="nav-hamburger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <nav id="mobile-menu" className="nav-mobile" aria-label="Mobile navigation" hidden={!open}>
        <div className="nav-mobile-links">
          {navLinks.map((link, index) => (
            <Link key={link.href} href={link.href} className="nav-mobile-link" onClick={() => setOpen(false)}>
              <span className="nav-mobile-num">{String(index + 1).padStart(2, "0")}</span>{link.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-mobile-link" onClick={() => setOpen(false)}><span className="nav-mobile-num">06</span>Contact</Link>
        </div>
        <div className="nav-mobile-contact">
          <a href="tel:+35699472220">+356 9947 2220</a>
          <a href="mailto:info@nabukmalta.com">info@nabukmalta.com</a>
        </div>
      </nav>
    </header>
  );
}
