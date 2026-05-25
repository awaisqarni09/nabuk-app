"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function ScrollReveal({ children, id, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!ref.current) return;

    let cancelled = false;
    let revert: (() => void) | null = null;

    // Capture synchronously before the async gap so we never read a stale ref.
    const el = ref.current;

    // Pre-set initial states synchronously so there is no flash where elements
    // appear at their final position before gsap.from() pushes them back.
    el.style.opacity = "0";
    el.style.transform = "translateY(36px)";

    const cards = Array.from(el.querySelectorAll<HTMLElement>(".nabuk-card"));
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(22px)";
    });

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          });

          if (cards.length > 0) {
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: "power2.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: el,
                start: "top 75%",
                once: true,
              },
            });
          }
        });

        revert = () => ctx.revert();
      }
    );

    return () => {
      cancelled = true;
      el.style.opacity = "";
      el.style.transform = "";
      cards.forEach((card) => {
        card.style.opacity = "";
        card.style.transform = "";
      });
      revert?.();
    };
  }, []);

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
}
