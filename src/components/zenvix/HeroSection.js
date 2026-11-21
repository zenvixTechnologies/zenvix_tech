"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Icon from "./Icon";
import Magnetic from "./motion/Magnetic";
import { mapRange } from "./motionPresets";

const serviceChips = [
  { label: "Web Dev", icon: "terminal" },
  { label: "UI/UX", icon: "architecture" },
  { label: "QA", icon: "verified_user" },
  { label: "Apps", icon: "dashboard_customize" },
];

/**
 * One masked heading line that rises once the intro curtain lifts.
 * The entrance is CSS (see .enter-line), so it never waits for hydration.
 */
function Line({ children, delay = 0, className = "" }) {
  return (
    <span className={`-mb-[0.2em] block overflow-hidden pb-[0.2em] ${className}`}>
      <span className="enter-line flex items-center" style={{ "--d": `${delay}s` }}>
        {children}
      </span>
    </span>
  );
}

/** Fade-up block used in the hero; timed to follow the intro curtain. */
function Rise({ as: Tag = "div", delay = 0, distance = 24, className = "", children, ...rest }) {
  return (
    <Tag
      className={`enter-rise ${className}`}
      style={{ "--d": `${delay}s`, "--rise": `${distance}px` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default function HeroSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const headingY = useTransform(scrollYProgress, mapRange([0, 1], ["0%", "28%"]));
  const fade = useTransform(scrollYProgress, mapRange([0, 0.75], [1, 0]));

  // Cheap pointer spotlight: write CSS vars directly, no React re-render.
  const onPointerMove = (event) => {
    const node = sectionRef.current;
    if (!node || event.pointerType !== "mouse") return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-[calc(var(--header-h)+2rem)] [--mx:70%] [--my:30%]"
      onPointerMove={onPointerMove}
      ref={sectionRef}
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb-a absolute -right-[10%] -top-[15%] h-[55vmax] w-[55vmax] rounded-full bg-violet-deep/25 blur-[120px]" />
        <div className="orb-b absolute -bottom-[25%] -left-[15%] h-[50vmax] w-[50vmax] rounded-full bg-blue/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--mx)_var(--my),rgba(157,92,255,0.12),transparent_60%)]" />
        <div className="shell absolute inset-0 grid grid-cols-2 md:grid-cols-4">
          {[0, 1, 2, 3].map((col) => (
            <span
              className={`border-l border-white/[0.045] ${col > 1 ? "hidden md:block" : ""}`}
              key={col}
            />
          ))}
        </div>
      </div>

      <div className="shell flex flex-1 flex-col justify-between gap-12">
        <Rise className="flex items-center justify-between gap-4" delay={0.2} distance={12}>
          <p className="label flex items-center gap-2 text-silver">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
            </span>
            {"{ Premium web development agency }"}
          </p>
          <p className="label hidden text-muted md:block">Design • Develop • Deliver</p>
        </Rise>

        <motion.h1
          aria-label="Build. Design. Launch."
          className="font-display text-mega font-bold"
          style={{ y: headingY, opacity: fade }}
        >
          <span aria-hidden="true">
            <Line>Build.</Line>
            <Line className="md:pl-[14vw]" delay={0.08}>
              Design.
            </Line>
            <Line className="text-right" delay={0.16}>
              <span className="ml-auto pr-[0.04em] font-serif font-normal italic tracking-[-0.03em] text-gradient">
                Launch.
              </span>
            </Line>
          </span>
        </motion.h1>

        <div className="grid gap-10 border-t border-line pb-10 pt-8 md:grid-cols-2 md:gap-8 lg:grid-cols-12">
          <Rise className="lg:col-span-5" delay={0.55}>
            <p className="text-lead max-w-md text-silver">
              We create high-performance web experiences with cutting-edge
              development, intuitive UI/UX, and scalable web applications.
            </p>
            <p className="mt-5 font-mono text-xs text-muted">
              <span className="text-violet">$</span>{" "}
              <span className="type-line align-bottom">deploy(&quot;launch-ready&quot;);</span>
            </p>
          </Rise>

          <Rise
            aria-label="What we do"
            as="ul"
            className="grid grid-cols-2 gap-x-6 gap-y-3 self-start lg:col-span-3"
            delay={0.65}
          >
            {serviceChips.map((chip) => (
              <li className="flex items-center gap-2 text-sm text-silver" key={chip.label}>
                <Icon className="text-base text-violet" name={chip.icon} />
                {chip.label}
              </li>
            ))}
          </Rise>

          <Rise
            className="flex flex-wrap items-center gap-4 md:col-span-2 lg:col-span-4 lg:justify-end"
            delay={0.75}
          >
            <Magnetic>
              <a
                className="roll-trigger group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-fg py-2 pl-6 pr-2 font-display font-bold text-ink"
                href="#contact"
              >
                <span className="absolute inset-0 translate-y-full rounded-full bg-gradient-to-r from-violet to-blue transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-y-0" />
                <span className="roll relative">
                  <span>Get Started</span>
                  <span aria-hidden="true" className="text-white">Get Started</span>
                </span>
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-ink text-fg transition-transform duration-500 group-hover:rotate-[-45deg]">
                  <Icon name="arrow_right" />
                </span>
              </a>
            </Magnetic>
            <a
              className="group inline-flex items-center gap-2 px-2 py-3 font-display font-bold text-fg"
              href="#portfolio"
            >
              <span className="link-line">View Projects</span>
              <Icon
                className="transition-transform duration-500 group-hover:translate-x-1"
                name="arrow_outward"
              />
            </a>
          </Rise>
        </div>
      </div>
    </section>
  );
}
