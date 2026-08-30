"use client";

import { useEffect } from "react";

/**
 * Entrance choreography for the editorial home page. Renders nothing.
 *
 * On load: the copy column rises line by line (kicker → title → copy →
 * actions → scroll mark) while the visual column settles — the main image
 * eases out of a slight zoom and the two aperture windows drift up into
 * place. On fine-pointer desktops the apertures then follow the pointer
 * with a soft parallax, each by its own depth.
 *
 * On scroll: the number-strip stats roll up to their values the first time
 * the strip enters the viewport (elements opt in via `data-count-to`).
 *
 * PageTransition holds the page at opacity 0 until GSAP is ready, so the
 * synchronous pre-set below is never painted as a flash of hidden content.
 */
export function HomeEntrance() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let revert: (() => void) | null = null;
    let removeParallax: (() => void) | null = null;

    // Pre-set initial states synchronously, before the async GSAP import
    // resolves, so elements never paint at their final position and then
    // snap back to a from-state.
    const copyEls = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".home-editorial-copy .editorial-kicker, .home-editorial-copy .editorial-title, .home-editorial-copy .editorial-copy, .home-editorial-copy .editorial-actions, .home-editorial-copy .home-hero-index, .home-editorial-copy .home-scroll-mark"
      )
    );
    const visualMain = document.querySelector<HTMLElement>(".home-visual-main");
    const apertures = Array.from(
      document.querySelectorAll<HTMLElement>(".home-aperture")
    );
    const caption = document.querySelector<HTMLElement>(".home-visual-caption");
    const marquee = document.querySelector<HTMLElement>(".home-hero-marquee");

    if (marquee) marquee.style.opacity = "0";
    copyEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(26px)";
    });
    if (visualMain) visualMain.style.opacity = "0";
    apertures.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(34px)";
    });
    if (caption) {
      caption.style.opacity = "0";
      caption.style.transform = "translateY(10px)";
    }

    const restore = () => {
      [...copyEls, ...apertures, caption, visualMain, marquee].forEach((el) => {
        if (!el) return;
        el.style.opacity = "";
        el.style.transform = "";
      });
    };

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          const tl = gsap.timeline({ delay: 0.1, defaults: { ease: "power3.out" } });

          // Visual column settles first — a slow ease out of a slight zoom.
          if (visualMain) {
            tl.to(visualMain, { opacity: 1, duration: 0.9, clearProps: "opacity" }, 0);
            tl.fromTo(
              visualMain,
              { scale: 1.06, transformOrigin: "60% 40%" },
              { scale: 1, duration: 1.5, ease: "power2.out", clearProps: "transform" },
              0
            );
          }

          // Copy column rises line by line.
          tl.to(
            copyEls,
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.11, clearProps: "all" },
            0.15
          );

          // Aperture windows drift up into place.
          if (apertures.length) {
            tl.to(
              apertures,
              { opacity: 1, y: 0, duration: 0.7, stagger: 0.16, clearProps: "all" },
              0.45
            );
          }
          if (caption) {
            tl.to(caption, { opacity: 1, y: 0, duration: 0.5, clearProps: "all" }, 0.9);
          }
          if (marquee) {
            tl.to(marquee, { opacity: 1, duration: 0.8, clearProps: "opacity" }, 1.0);
          }

          // Pointer parallax — desktop fine pointers only. Each aperture
          // drifts by its own depth; gsap.quickTo keeps it smooth.
          const fine = window.matchMedia("(pointer: fine) and (min-width: 1051px)");
          const stage = document.querySelector<HTMLElement>(".home-visual");
          if (fine.matches && stage && apertures.length) {
            const layers = apertures.map((el, i) => ({
              depth: i === 0 ? 1 : 0.55,
              toX: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
              toY: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
            }));

            const onMove = (e: PointerEvent) => {
              const rect = stage.getBoundingClientRect();
              const relX = (e.clientX - rect.left) / rect.width - 0.5;
              const relY = (e.clientY - rect.top) / rect.height - 0.5;
              layers.forEach(({ depth, toX, toY }) => {
                toX(relX * 18 * depth);
                toY(relY * 14 * depth);
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

          // Number-strip counters roll up on first view.
          document.querySelectorAll<HTMLElement>("[data-count-to]").forEach((node) => {
            const to = parseFloat(node.dataset.countTo ?? "0");
            const from = parseFloat(node.dataset.countFrom ?? "0");
            const tracker = { val: from };
            gsap.to(tracker, {
              val: to,
              duration: 1.7,
              ease: "power2.out",
              snap: { val: 1 },
              scrollTrigger: { trigger: node, start: "top 82%", once: true },
              onStart: () => {
                node.textContent = String(from);
              },
              onUpdate: () => {
                node.textContent = String(Math.round(tracker.val));
              },
            });
          });
        });

        revert = () => ctx.revert();
      }
    );

    return () => {
      cancelled = true;
      removeParallax?.();
      // Restore inline styles so content is never left hidden if we unmount
      // (fast navigation) before the entrance plays.
      restore();
      revert?.();
    };
  }, []);

  return null;
}
