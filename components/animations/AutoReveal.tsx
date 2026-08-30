"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide scroll reveal.
 *
 * Mounted once in the root layout, it reveals each `.section-inner` content
 * block as it scrolls into view — fading + rising the section, then
 * staggering any `.nabuk-card` children inside it. The home page and inner
 * pages share this one motion system.
 *
 * PageTransition fades the whole page container in on load; these
 * per-section reveals compose on top of that for layered motion.
 *
 * It renders nothing and re-runs on every route change (keyed on pathname).
 */
export function AutoReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Pages use full-bleed bands, each constraining its content to a
    // `.section-inner` column — reveal those. Older single-wrapper pages fall
    // back to the direct children of `.page-content`.
    // `[data-no-reveal]` opts a band out of the reveal entirely — its content
    // stays fully visible from first paint (no opacity flip / fade-in).
    const sectionInners = Array.from(
      document.querySelectorAll<HTMLElement>(".section-inner:not([data-no-reveal])")
    );
    const content = document.querySelector<HTMLElement>(".page-content");
    const blocks: HTMLElement[] = sectionInners.length
      ? sectionInners
      : content
        ? Array.from(content.children).filter(
            (node): node is HTMLElement =>
              node instanceof HTMLElement &&
              node.tagName !== "STYLE" &&
              node.tagName !== "SCRIPT" &&
              !node.hasAttribute("data-no-reveal")
          )
        : [];
    if (blocks.length === 0) return;

    let cancelled = false;
    let revert: (() => void) | null = null;

    // Pre-set initial states synchronously, before the async GSAP import
    // resolves. The page container starts at opacity:0 (PageTransition), so
    // this hidden state is never painted — no flash of final-position content.
    const cardsByBlock = blocks.map((block) => {
      block.style.opacity = "0";
      block.style.transform = "translateY(32px)";
      const cards = Array.from(
        block.querySelectorAll<HTMLElement>(".nabuk-card")
      );
      cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(22px)";
      });
      return cards;
    });

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          blocks.forEach((block, i) => {
            gsap.to(block, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: { trigger: block, start: "top 85%", once: true },
            });

            const cards = cardsByBlock[i];
            if (cards.length > 0) {
              gsap.to(cards, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "power2.out",
                clearProps: "all",
                scrollTrigger: { trigger: block, start: "top 78%", once: true },
              });
            }
          });
        });

        // Recompute trigger positions once everything (fonts/images) settles.
        ScrollTrigger.refresh();

        revert = () => ctx.revert();
      }
    );

    return () => {
      cancelled = true;
      // Restore inline styles so content is never left hidden if we unmount
      // (e.g. fast navigation) before the reveal plays.
      blocks.forEach((block, i) => {
        block.style.opacity = "";
        block.style.transform = "";
        cardsByBlock[i].forEach((card) => {
          card.style.opacity = "";
          card.style.transform = "";
        });
      });
      revert?.();
    };
  }, [pathname]);

  return null;
}
