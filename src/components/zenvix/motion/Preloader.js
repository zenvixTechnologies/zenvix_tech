"use client";

import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { site } from "../siteConfig";
import { useIntro } from "./IntroContext";

// Must match --intro in globals.css (how long the curtain holds before lifting).
const HOLD_MS = 1150;
// Leave the hero's CSS entrances time to settle before switching --intro to 0.
const SETTLE_MS = 1000;

/**
 * Short first-visit curtain (≈1.1s). Rendered on the server and animated in CSS,
 * so it starts with the first paint even if hydration is slow; an inline script
 * in <head> hides it instantly on repeat visits in the same session.
 * JS only drives the counter and tells the rest of the UI when the curtain lifts.
 */
export default function Preloader() {
  const { setReady } = useIntro();
  const [done, setDone] = useState(false);
  const rootRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const node = rootRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const markSeen = () => {
      try {
        sessionStorage.setItem("zx-intro", "1");
      } catch {}
    };

    if (html.dataset.intro === "seen" || reduce || !node) {
      const id = requestAnimationFrame(() => {
        setDone(true);
        markSeen();
        setReady(true);
      });
      return () => cancelAnimationFrame(id);
    }

    // Sync to the CSS curtain, which may already be part-way through.
    const leave = node
      .getAnimations?.()
      .find((animation) => animation.animationName === "preloader-leave");
    const elapsed = Math.min(HOLD_MS, Number(leave?.currentTime ?? 0));
    const holdLeft = HOLD_MS - elapsed;

    const counter = animate((elapsed / HOLD_MS) * 100, 100, {
      duration: holdLeft / 1000,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => {
        if (counterRef.current) {
          counterRef.current.textContent = String(Math.round(value)).padStart(3, "0");
        }
      },
    });

    const readyTimer = setTimeout(() => {
      markSeen();
      setReady(true);
    }, holdLeft);

    let settleTimer;
    let cancelled = false;
    (leave?.finished ?? Promise.resolve())
      .catch(() => {})
      .then(() => {
        if (cancelled) return;
        setDone(true);
        // Later client-side navigations should not wait for a curtain that is gone.
        settleTimer = setTimeout(() => {
          html.dataset.intro = "seen";
        }, SETTLE_MS);
      });

    return () => {
      cancelled = true;
      counter.stop();
      clearTimeout(readyTimer);
      clearTimeout(settleTimer);
    };
  }, [setReady]);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className="preloader fixed inset-0 z-[100] flex flex-col justify-between bg-ink p-[var(--gutter)] text-fg"
      ref={rootRef}
    >
      <div className="flex items-center justify-between label text-muted">
        <span>{site.name}</span>
        <span>{site.tagline.join(" • ")}</span>
      </div>

      <div className="overflow-hidden">
        <div className="preloader__brand flex items-end justify-between gap-6">
          <span className="font-display text-mega font-extrabold uppercase">
            Zen<span className="text-gradient">vix</span>
          </span>
          <span
            className="font-display text-[clamp(1.25rem,3vw,2.5rem)] font-medium tabular-nums text-muted"
            ref={counterRef}
          >
            000
          </span>
        </div>
      </div>

      <div className="preloader__bar h-px bg-gradient-to-r from-violet to-blue" />
    </div>
  );
}
