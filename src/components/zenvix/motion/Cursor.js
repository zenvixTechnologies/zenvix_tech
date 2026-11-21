"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Desktop-only cursor follower. The native cursor stays visible (usability);
 * this adds a trailing ring that grows over links and shows a label over
 * elements marked with data-cursor="view" data-cursor-label="…".
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState({ mode: "idle", label: "" });
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduce.matches);
    update();
    fine.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const onMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onOver = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const labelled = target?.closest("[data-cursor]");
      if (labelled) {
        setState({ mode: "label", label: labelled.getAttribute("data-cursor-label") || "View" });
        return;
      }
      if (target?.closest("a, button, [role='button'], input, textarea, label")) {
        setState({ mode: "hover", label: "" });
        return;
      }
      setState({ mode: "idle", label: "" });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = state.mode === "label" ? 96 : state.mode === "hover" ? 56 : 28;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[95]">
      <motion.div
        className="absolute left-0 top-0"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
      >
        <motion.div
          animate={{ width: size, height: size }}
          className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ${
            state.mode === "label"
              ? "bg-gradient-to-br from-violet to-blue"
              : "border border-white/50 mix-blend-difference"
          }`}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          <AnimatePresence>
            {state.mode === "label" && (
              <motion.span
                animate={{ opacity: 1, scale: 1 }}
                className="label text-[0.68rem] font-semibold text-white"
                exit={{ opacity: 0, scale: 0.6 }}
                initial={{ opacity: 0, scale: 0.6 }}
              >
                {state.label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
