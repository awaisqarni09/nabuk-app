"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface PreviewAnimatorProps {
  children: ReactNode;
  countTargets?: boolean;
}

export function PreviewAnimator({ children, countTargets }: PreviewAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!ref.current) return;

    let cancelled = false;
    let revert: (() => void) | null = null;

    const el = ref.current;

    // Set initial states synchronously before the async GSAP import resolves.
    // Without this, PageTransition fades the page in before GSAP's from()
    // can push elements to their from-state — causing a visible jump where
    // elements briefly appear at their final position, then snap to the
    // from-state, then animate forward. Pre-setting avoids that flash entirely.
    const headerEls = Array.from(
      el.querySelectorAll<HTMLElement>(".pv-eyebrow, .pv-title, .pv-desc, .pv-cta")
    );
    const bgNum = el.querySelector<HTMLElement>(".pv-bg-num");
    const pvItems = Array.from(el.querySelectorAll<HTMLElement>(".pv-item"));

    headerEls.forEach((node) => {
      node.style.opacity = "0";
      node.style.transform = "translateY(22px)";
    });
    if (bgNum) {
      bgNum.style.opacity = "0";
      bgNum.style.transform = "translateX(30px)";
    }
    pvItems.forEach((node) => {
      node.style.opacity = "0";
      node.style.transform = "translateY(28px)";
    });

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // Use gsap.to() (not from()) because initial states are already set
          // synchronously above — gsap.from() would capture the pre-set values
          // as the "to" target, animating from 0 to 0 (a no-op).

          if (headerEls.length) {
            gsap.to(headerEls, {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.11,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: el,
                start: "top 84%",
                once: true,
              },
            });
          }

          if (bgNum) {
            gsap.to(bgNum, {
              opacity: 1,
              x: 0,
              duration: 1.1,
              ease: "power2.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: el,
                start: "top 84%",
                once: true,
              },
            });
          }

          // Grid cards — opacity + y only; no scale to avoid sub-pixel
          // blurriness from backdrop-filter at non-integer scale values.
          if (pvItems.length) {
            gsap.to(pvItems, {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: { amount: 0.4, from: "start" },
              ease: "back.out(1.4)",
              clearProps: "all",
              scrollTrigger: {
                trigger: el,
                start: "top 76%",
                once: true,
              },
            });
          }

          // Animated number counters (About section)
          if (countTargets) {
            const counters = el.querySelectorAll("[data-count-to]");
            counters.forEach((counter) => {
              const node = counter as HTMLElement;
              const from = parseFloat(node.dataset.countFrom ?? "0");
              const to = parseFloat(node.dataset.countTo ?? "0");
              const suffix = node.dataset.countSuffix ?? "";

              const tracker = { val: from };
              gsap.to(tracker, {
                val: to,
                duration: 1.9,
                ease: "power2.out",
                snap: { val: 1 },
                scrollTrigger: {
                  trigger: node,
                  start: "top 80%",
                  once: true,
                },
                onUpdate: () => {
                  node.textContent = Math.round(tracker.val) + suffix;
                },
              });
            });
          }
        });

        revert = () => ctx.revert();
      }
    );

    return () => {
      cancelled = true;
      // Restore inline styles so elements don't stay hidden if the component
      // unmounts before the animation plays (e.g., fast navigation away).
      headerEls.forEach((node) => {
        node.style.opacity = "";
        node.style.transform = "";
      });
      if (bgNum) {
        bgNum.style.opacity = "";
        bgNum.style.transform = "";
      }
      pvItems.forEach((node) => {
        node.style.opacity = "";
        node.style.transform = "";
      });
      revert?.();
    };
  }, [countTargets]);

  return <div ref={ref}>{children}</div>;
}
