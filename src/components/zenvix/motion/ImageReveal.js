"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ease, mapRange } from "../motionPresets";

const clipFrom = {
  up: "inset(100% 0% 0% 0%)",
  down: "inset(0% 0% 100% 0%)",
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
  center: "inset(18% 18% 18% 18%)",
};

/**
 * Image that wipes in through a clip-path mask, then drifts with a gentle
 * scroll parallax. The frame never changes size, so there is no layout shift.
 */
export default function ImageReveal({
  src,
  alt,
  sizes,
  priority = false,
  direction = "up",
  parallax = 8,
  className = "",
  imageClassName = "object-cover object-top",
  hoverZoom = false,
  reveal = true,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, mapRange([0, 1], [`-${parallax}%`, `${parallax}%`]));

  // The in-view trigger sits on an unclipped wrapper: Chrome's IntersectionObserver
  // honours the element's own clip-path, so a fully clipped node never "enters".
  // reveal={false}: parallax only (used where a view-transition morph lands).
  const trigger = reveal
    ? { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.15 } }
    : {};
  const frameVariants = {
    hidden: { clipPath: clipFrom[direction] },
    visible: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.4, ease } },
  };
  const imageVariants = {
    hidden: { scale: 1.25 },
    visible: { scale: 1, transition: { duration: 1.8, ease } },
  };

  return (
    <motion.div className={`relative ${className}`} ref={ref} {...trigger}>
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[inherit]"
        variants={reveal ? frameVariants : undefined}
      >
        <motion.div
          className="absolute inset-x-0"
          style={{ y, top: `-${parallax}%`, bottom: `-${parallax}%` }}
          variants={reveal ? imageVariants : undefined}
        >
        <div
          className={`relative h-full w-full ${
            hoverZoom
              ? "transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
              : ""
          }`}
        >
          <Image
            alt={alt}
            className={imageClassName}
            fill
            priority={priority}
            sizes={sizes}
            src={src}
          />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
