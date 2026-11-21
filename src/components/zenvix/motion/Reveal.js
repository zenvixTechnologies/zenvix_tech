"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "../motionPresets";

/** Fade-up on enter. Use `stagger` to cascade direct <RevealItem> children. */
export function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  stagger = false,
  amount,
  ...rest
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      transition={{ delay }}
      variants={stagger ? staggerContainer : fadeUp}
      viewport={amount ? { ...viewport, amount } : viewport}
      whileInView="visible"
      {...rest}
    >
      {children}
    </Component>
  );
}

export function RevealItem({ as = "div", children, className = "", variants = fadeUp, ...rest }) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component className={className} variants={variants} {...rest}>
      {children}
    </Component>
  );
}
