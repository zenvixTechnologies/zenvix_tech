// Shared easing + variants so every reveal on the site moves the same way.
export const ease = [0.16, 1, 0.3, 1];
export const easeInOut = [0.76, 0, 0.24, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease },
  },
};

/** Text that rises out of an overflow-hidden mask. */
export const maskUp = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 1.1, ease },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const viewport = { once: true, amount: 0.2 };
export const viewportEarly = { once: true, amount: 0.05, margin: "0px 0px -10% 0px" };

/**
 * Function-form mapper for useTransform. framer-motion 12 tries to offload
 * array-form scroll transforms to native ViewTimeline, which mis-measures
 * tall sticky sections; the function form keeps them on the JS path.
 */
export { transform as mapRange } from "framer-motion";
