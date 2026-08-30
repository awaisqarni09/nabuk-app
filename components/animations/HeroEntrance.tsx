"use client";

import { useEffect } from "react";

export function HeroEntrance() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // `cancelled` prevents a stale import callback from starting a GSAP
    // context on already-unmounted DOM nodes.
    let cancelled = false;
    let revert: (() => void) | null = null;
    let removeParallax: (() => void) | null = null;

    import("gsap").then(({ default: gsap }) => {
      if (cancelled) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.05 });

        tl.from(".hero-eyebrow", {
          opacity: 0,
          y: -10,
          duration: 0.45,
          ease: "power3.out",
        });

        tl.from(
          ".home-title",
          { opacity: 0, y: 28, duration: 0.65, ease: "power3.out" },
          "-=0.2"
        );

        tl.from(
          ".home-rule",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.35"
        );

        tl.from(
          ".home-lead",
          { opacity: 0, y: 14, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );

        tl.from(
          ".hero-ctas",
          { opacity: 0, y: 12, duration: 0.45, ease: "power2.out" },
          "-=0.32"
        );

        // Product constellation: stagger in — GSAP composes transforms so the
        // CSS rotate() on each card is preserved after animation.
        tl.from(
          [".product.p2", ".product.p1", ".product.p5", ".product.p3", ".product.p4"],
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.09,
            ease: "power2.out",
          },
          "-=0.5"
        );

        tl.from(
          ".hero-trust",
          { opacity: 0, y: 18, duration: 0.5, ease: "power2.out" },
          "-=0.25"
        );

        // Pointer-responsive depth — desktop fine pointers only. Each product
        // drifts by its data-depth factor; gsap.quickTo composes x/y with the
        // existing rotation transform.
        const fine = window.matchMedia("(pointer: fine) and (min-width: 961px)");
        const stage = document.querySelector<HTMLElement>(".nabuk-products");
        if (fine.matches && stage) {
          const layers = Array.from(
            stage.querySelectorAll<HTMLElement>("[data-depth]")
          ).map((el) => ({
            depth: parseFloat(el.dataset.depth ?? "0.5"),
            toX: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
            toY: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
          }));

          const onMove = (e: PointerEvent) => {
            const rect = stage.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width - 0.5;
            const relY = (e.clientY - rect.top) / rect.height - 0.5;
            layers.forEach(({ depth, toX, toY }) => {
              toX(relX * 26 * depth);
              toY(relY * 20 * depth);
            });
          };
          const onLeave = () => {
            layers.forEach(({ toX, toY }) => {
              toX(0);
              toY(0);
            });
          };
          stage.addEventListener("pointermove", onMove, { passive: true });
          stage.addEventListener("pointerleave", onLeave, { passive: true });
          removeParallax = () => {
            stage.removeEventListener("pointermove", onMove);
            stage.removeEventListener("pointerleave", onLeave);
          };
        }
      }, "#hero");

      revert = () => ctx.revert();
    });

    return () => {
      cancelled = true;
      removeParallax?.();
      revert?.();
    };
  }, []);

  return null;
}
