"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // For reduced-motion: make content visible immediately and skip animation.
    // Without this the JSX style={{ opacity:0 }} stays, leaving content
    // invisible forever on devices/browsers with reduced-motion enabled.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      return;
    }

    let cancelled = false;
    let revert: (() => void) | null = null;

    // Safety net: show content within 1.5 s even if the GSAP bundle is slow
    // to arrive (common on mobile on a weak connection). Without this the page
    // appears completely blank until JS loads.
    const fallback = setTimeout(() => {
      if (el) el.style.opacity = "1";
    }, 1500);

    import("gsap").then(({ default: gsap }) => {
      clearTimeout(fallback);
      if (cancelled) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // ── 1. Container: opacity only — no y-offset on the wrapper.
        //    A y-offset here shifts every card below its grid position;
        //    staggered children then sit at different offsets relative to
        //    each other, collapsing the gap between rows and causing overlap.
        gsap.set(el, { opacity: 0 });
        tl.to(el, { opacity: 1, duration: 0.45, clearProps: "opacity" });

        // ── 2. Inner-page hero band (not on homepage) ──────────────────
        //    Animate only the isolated hero block — it sits above the card
        //    grid so its y-offset cannot affect card spacing.
        const hero = el.querySelector<HTMLElement>(".page-hero");
        if (hero) {
          tl.from(
            hero,
            { y: -24, opacity: 0, duration: 0.52, clearProps: "all" },
            "-=0.3"
          );

          const divider = hero.querySelector<HTMLElement>(".page-hero-divider");
          if (divider) {
            tl.from(
              divider,
              {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.38,
                ease: "power2.out",
                clearProps: "all",
              },
              "-=0.28"
            );
          }

          const h1 = hero.querySelector<HTMLElement>("h1");
          if (h1) {
            tl.from(
              h1,
              { y: 20, opacity: 0, duration: 0.48, clearProps: "all" },
              "-=0.26"
            );
          }

          const sub = hero.querySelector<HTMLElement>(".page-hero-sub");
          if (sub) {
            tl.from(
              sub,
              { y: 10, opacity: 0, duration: 0.42, ease: "power2.out", clearProps: "all" },
              "-=0.28"
            );
          }
        }

        // ── 2b. Solutions hero ─────────────────────────────────────────
        //    The Solutions page uses custom .sol-hero-* markup with no
        //    .page-hero class, so the block above skips it. Give it the
        //    same entrance language: staggered text rise, divider wipe,
        //    and a gentle image reveal.
        const solHero = el.querySelector<HTMLElement>(".sol-hero-section");
        if (solHero) {
          const items = solHero.querySelectorAll<HTMLElement>(
            ".sol-hero-eyebrow, .sol-hero-title, .sol-hero-lead, .sol-hero-cta"
          );
          if (items.length) {
            tl.from(
              items,
              {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out",
                clearProps: "all",
              },
              "-=0.3"
            );
          }

          const bar = solHero.querySelector<HTMLElement>(".sol-hero-bar");
          if (bar) {
            tl.from(
              bar,
              {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.38,
                ease: "power2.out",
                clearProps: "all",
              },
              "-=0.5"
            );
          }

          const img = solHero.querySelector<HTMLElement>(".sol-hero-img-col");
          if (img) {
            tl.from(
              img,
              {
                opacity: 0,
                scale: 0.96,
                duration: 0.6,
                ease: "power3.out",
                clearProps: "all",
              },
              "-=0.55"
            );
          }
        }

        // ── 3. Content area: opacity fade only — no y, no child stagger.
        //    Adding y here or staggering children shifts cards relative to
        //    each other in the grid, causing the overlap on desktop and
        //    mobile.  A clean fade is sufficient and artifact-free.
        const content = el.querySelector<HTMLElement>(".page-content");
        if (content) {
          tl.from(
            content,
            { opacity: 0, duration: 0.45, ease: "power2.out", clearProps: "opacity" },
            "-=0.18"
          );
        }
      });

      revert = () => ctx.revert();
    });

    return () => {
      clearTimeout(fallback);
      cancelled = true;
      revert?.();
    };
  }, [pathname]);

  // opacity:0 as the initial render state prevents a flash of full-opacity
  // content before the GSAP async import resolves.
  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
