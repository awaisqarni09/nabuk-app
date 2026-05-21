"use client";

import { useEffect } from "react";

const SESSION_KEY = "nabuk-hero-played";

export function HeroEntrance() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Animation already played this session — skip entirely so the page
    // renders at full opacity immediately on back-navigation.
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let cleanup: (() => void) | null = null;

    import("gsap").then(({ default: gsap }) => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          delay: 0.05,
          onComplete: () => sessionStorage.setItem(SESSION_KEY, "1"),
        });

        // Logo: drop in from above
        tl.from(".logo", {
          opacity: 0,
          y: -12,
          duration: 0.5,
          ease: "power3.out",
        });

        // Heading: rise up
        tl.from(
          ".nabuk-title",
          { opacity: 0, y: 28, duration: 0.65, ease: "power3.out" },
          "-=0.25"
        );

        // Teal divider: scale in from left
        tl.from(
          ".nabuk-divider",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.35"
        );

        // Lead text: gentle rise
        tl.from(
          ".nabuk-lead",
          { opacity: 0, y: 14, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );

        // Product cards: stagger in with subtle scale — rely on GSAP's
        // transform composition so CSS rotate() is preserved after animation
        tl.from(
          [".product.p2", ".product.p1", ".product.p5", ".product.p3", ".product.p4"],
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.09,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }, "#hero");

      cleanup = () => ctx.revert();
    });

    return () => {
      cleanup?.();
    };
  }, []);

  return null;
}
