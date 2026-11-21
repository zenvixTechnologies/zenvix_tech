"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { mapRange } from "../motionPresets";

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, mapRange(range, [0.16, 1]));
  return (
    <motion.span className="inline-block" style={{ opacity }}>
      {children}
    </motion.span>
  );
}

/**
 * Scroll-scrubbed statement: each word brightens as the paragraph moves
 * through the viewport. Words listed in `highlight` get the serif-italic accent.
 */
export default function ScrollWords({ text, highlight = [], className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");

  return (
    <p className={className} ref={ref}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        const accent = highlight.includes(word.replace(/[.,]/g, ""));
        return (
          <span key={`${word}-${index}`}>
            <Word progress={scrollYProgress} range={[start, end]}>
              {accent ? (
                <span className="font-serif font-normal italic tracking-[-0.02em] text-violet-deep">
                  {word}
                </span>
              ) : (
                word
              )}
            </Word>{" "}
          </span>
        );
      })}
    </p>
  );
}
