"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

let lenisInstance = null;

/** Access the shared Lenis instance (null on touch / reduced-motion devices). */
export const getLenis = () => lenisInstance;

export function lockScroll(locked) {
  if (lenisInstance) {
    if (locked) lenisInstance.stop();
    else lenisInstance.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      anchors: { offset: 0 },
      autoRaf: true,
    });
    lenisInstance = lenis;

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // Keep Lenis in sync with App Router navigations (incl. /zenvix#section links).
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const lenis = lenisInstance;
    if (!lenis) return;

    lenis.resize();
    const { hash } = window.location;

    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        requestAnimationFrame(() => lenis.scrollTo(target, { immediate: true }));
        return;
      }
    }
    lenis.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
