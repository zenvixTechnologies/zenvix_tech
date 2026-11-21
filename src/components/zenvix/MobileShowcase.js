"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { mapRange } from "./motionPresets";
import { site } from "./siteConfig";

// Where each frame starts (a fanned deck) and lands (a staggered column).
const frames = [
  { key: "left", from: { x: "-16%", y: "-8%", r: -9, s: 0.84 }, to: { x: "-6%", y: "-68%", r: -4, s: 0.88 } },
  { key: "right", from: { x: "16%", y: "8%", r: 9, s: 0.84 }, to: { x: "6%", y: "68%", r: 4, s: 0.88 } },
  { key: "center", from: { x: "0%", y: "0%", r: 0, s: 0.9 }, to: { x: "0%", y: "0%", r: 0, s: 1 } },
];

function Frame({ shot, frame, progress, priority }) {
  const range = [0, 0.5];
  const x = useTransform(progress, mapRange(range, [frame.from.x, frame.to.x]));
  const y = useTransform(progress, mapRange(range, [frame.from.y, frame.to.y]));
  const rotate = useTransform(progress, mapRange(range, [frame.from.r, frame.to.r]));
  const scale = useTransform(progress, mapRange(range, [frame.from.s, frame.to.s]));

  return (
    <motion.div
      className="absolute w-[80vw] max-w-[420px] will-change-transform"
      style={{ x, y, rotate, scale }}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/15 bg-ink-raise shadow-[0_30px_70px_-25px_rgba(0,0,0,0.9)]">
        <Image
          alt={shot.alt}
          className="object-cover object-top"
          fill
          priority={priority}
          sizes="80vw"
          src={shot.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-white/[0.06]" />
      </div>
    </motion.div>
  );
}

function TaglineWord({ word, index, progress }) {
  const start = 0.55 + index * 0.08;
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
 * Phone-only take on the showcase stage. Landscape screenshots stay landscape
 * (no portrait crop): three frames start as a fanned deck, deal out into a
 * staggered column as you scroll, then the brand tagline rises over them.
 * Transform/opacity only; static for prefers-reduced-motion.
 */
export default function MobileShowcase({ shots }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const settled = useMotionValue(1);
  const progress = reduce ? settled : scrollYProgress;

  const shade = useTransform(progress, mapRange([0.45, 0.62], [0, 0.86]));
  const hint = useTransform(progress, mapRange([0, 0.12], [1, 0]));

  return (
    <section
      aria-label="Selected work showcase"
      className="relative h-[190svh] md:hidden"
      ref={ref}
    >
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <div aria-hidden="true" className="m-glow pointer-events-none absolute left-1/2 top-1/2 h-[120vw] w-[120vw] -translate-x-1/2 -translate-y-1/2" />

        {frames.map((frame) => (
          <Frame
            frame={frame}
            key={frame.key}
            priority={false}
            progress={progress}
            shot={shots[frame.key]}
          />
        ))}

        <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-ink" style={{ opacity: shade }} />

        <p className="relative text-center font-display text-[clamp(2.9rem,15vw,4.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.05em]">
          {site.tagline.map((word, index) => (
            <TaglineWord index={index} key={word} progress={progress} word={word} />
          ))}
        </p>

        <motion.p
          aria-hidden="true"
          className="label absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 flex -translate-x-1/2 items-center gap-2 text-muted"
          style={{ opacity: hint }}
        >
          <span className="h-px w-6 bg-gradient-to-r from-violet to-blue" />
          Selected work
          <span className="h-px w-6 bg-gradient-to-r from-blue to-violet" />
        </motion.p>
      </div>
    </section>
  );
}
