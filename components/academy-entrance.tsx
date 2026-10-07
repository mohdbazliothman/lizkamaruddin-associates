"use client";

import { animate } from "framer-motion";
import { useLayoutEffect, useRef, type ReactNode } from "react";

export function AcademyEntrance({ children, className }: { children: ReactNode; className: string }) {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const page = root.current;
    if (!page) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const running = new Map<HTMLElement, ReturnType<typeof animate>>();
    const revealed = new WeakSet<HTMLElement>();
    const ease = [0.22, 1, 0.36, 1] as const;
    let observer: IntersectionObserver | undefined;
    function show(element: HTMLElement) {
      running.get(element)?.stop();
      running.delete(element);
      element.style.removeProperty("opacity");
      element.style.removeProperty("transform");
      revealed.add(element);
      observer?.unobserve(element);
    }
    function reveal(element: HTMLElement, duration: number, delay = 0, distance = 0) {
      if (revealed.has(element)) return;
      revealed.add(element);
      running.set(element, animate(element,
        distance ? { opacity: [0, 1], y: [distance, 0] } : { opacity: [0, 1] },
        { duration, delay, ease, onComplete: () => show(element) }
      ));
    }
    function stopMotion() {
      observer?.disconnect();
      for (const element of [...running.keys()]) show(element);
    }
    function preferenceChanged() { if (preference.matches) stopMotion(); }
    const scrollElements = [...page.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-group] > *")];
    function focusChanged(event: FocusEvent) {
      // Reveal immediately when keyboard focus enters an animated section.
      if (!(event.target instanceof Element)) return;
      for (const element of scrollElements) if (element.contains(event.target)) show(element);
    }
    if (!preference.matches) {
      for (const element of page.querySelectorAll<HTMLElement>("[data-entrance]")) {
        const kind = element.dataset.entrance;
        reveal(element, kind === "background" || kind === "line" ? 0.8 : 0.7,
          Number(element.dataset.delay || 0), kind === "line" ? 12 : 0);
      }
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(entries => {
          for (const entry of entries) {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
              const element = entry.target as HTMLElement;
              const group = element.parentElement;
              const stagger = group?.dataset.revealGroup === "stagger"
                ? Math.min([...group.children].indexOf(element) * 0.1, 0.4) : 0;
              reveal(element, 0.55, stagger, element.dataset.reveal === "fade" ? 0 : 10);
              observer?.unobserve(element);
            }
          }
        }, { threshold: 0.12 });
        for (const element of scrollElements) observer.observe(element);
      }
    }
    preference.addEventListener("change", preferenceChanged);
    page.addEventListener("focusin", focusChanged);
    return () => {
      stopMotion();
      preference.removeEventListener("change", preferenceChanged);
      page.removeEventListener("focusin", focusChanged);
    };
  }, []);
  return <main ref={root} className={className}>{children}</main>;
}
