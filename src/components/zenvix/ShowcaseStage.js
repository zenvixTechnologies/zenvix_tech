"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { mapRange } from "./motionPresets";
import { site } from "./siteConfig";

function TaglineWord({ word, index, progress }) {
  const start = 0.5 + index * 0.08;
  const y = useTransform(progress, mapRange([start, start + 0.14], ["110%", "0%"]));
  return (
    <span className="block overflow-hidden">
      <motion.span className="block" style={{ y }}>
        {word}
        <span className="text-violet">.</span>{" "}
      </motion.span>
    </span>
  );
}

/**
 * Sticky stage: the centre frame grows to full-bleed while the flanking
 * shots drift outward, then the brand tagline rises over it.
 */
/**
 * `shots` is `{ left, center, right }`, each `{ image, alt }`. The data is
 * passed in from the server so the full portfolio dataset stays out of the
 * client bundle.
 */
export default function ShowcaseStage({ shots }) {
  const { left, center, right } = shots;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const scale = useTransform(scrollYProgress, mapRange([0, 0.6], [0.52, 1]));
  const radius = useTransform(scrollYProgress, mapRange([0, 0.6], [28, 0]));
  const leftX = useTransform(scrollYProgress, mapRange([0, 0.55], ["0%", "-70%"]));
  const rightX = useTransform(scrollYProgress, mapRange([0, 0.55], ["0%", "70%"]));
  const sideOpacity = useTransform(scrollYProgress, mapRange([0.25, 0.55], [1, 0]));
  const shade = useTransform(scrollYProgress, mapRange([0.3, 0.6], [0, 0.78]));
  const innerScale = useTransform(scrollYProgress, mapRange([0, 1], [1.2, 1]));

  return (
    <section aria-label="Selected work showcase" className="relative h-[220vh] md:h-[260vh]" ref={ref}>
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute left-[4%] top-[14%] hidden w-[22vw] md:block"
          style={{ x: leftX, opacity: sideOpacity }}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-line">
            <Image alt="" className="object-cover object-top" fill sizes="22vw" src={left.image} />
          </div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute bottom-[12%] right-[4%] hidden w-[22vw] md:block"
          style={{ x: rightX, opacity: sideOpacity }}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-line">
            <Image alt="" className="object-cover object-top" fill sizes="22vw" src={right.image} />
          </div>
        </motion.div>

        <motion.div
          className="relative h-[100svh] w-full overflow-hidden will-change-transform"
          style={{ scale, borderRadius: radius }}
        >
          <motion.div className="absolute inset-0" style={{ scale: innerScale }}>
            <Image
              alt={center.alt}
              className="object-cover object-top"
              fill
              sizes="100vw"
              src={center.image}
            />
          </motion.div>
          <motion.div className="absolute inset-0 bg-ink" style={{ opacity: shade }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-center font-display text-huge font-bold uppercase">
              {site.tagline.map((word, index) => (
                <TaglineWord index={index} key={word} progress={scrollYProgress} word={word} />
              ))}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
