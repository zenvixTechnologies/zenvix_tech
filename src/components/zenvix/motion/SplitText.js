"use client";

import { motion } from "framer-motion";
import { ease, viewport } from "../motionPresets";

/**
 * Word-by-word masked reveal. The animated word spans are hidden from the
 * accessibility tree; headings are named with aria-label (valid on headings),
 * other elements get a visually hidden copy (aria-label is not allowed on them).
 *
 * `play` lets a parent control timing (e.g. wait for the intro curtain);
 * when omitted the text animates on scroll into view.
 */
export default function SplitText({
  as = "span",
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.06,
  play,
}) {
  const Component = motion[as] ?? motion.span;
  const words = text.split(" ");
  const controlled = typeof play === "boolean";
  const isHeading = /^h[1-6]$/.test(as);

  return (
    <Component
      aria-label={isHeading ? text : undefined}
      className={className}
      initial="hidden"
      {...(controlled
        ? { animate: play ? "visible" : "hidden" }
        : { whileInView: "visible", viewport })}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {!isHeading && <span className="sr-only">{text}</span>}
      {words.map((word, index) => (
        <span
          aria-hidden="true"
          className="inline-flex overflow-hidden pb-[0.16em] -mb-[0.16em] align-bottom"
          key={`${word}-${index}`}
        >
          <motion.span
            className={`inline-block will-change-transform ${wordClassName}`}
            variants={{
              hidden: { y: "110%", rotate: 4 },
              visible: { y: "0%", rotate: 0, transition: { duration: 1.1, ease } },
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Component>
  );
}
