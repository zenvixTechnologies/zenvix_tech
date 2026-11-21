"use client";

import { MotionConfig } from "framer-motion";
import Cursor from "./motion/Cursor";
import { IntroProvider } from "./motion/IntroContext";
import Preloader from "./motion/Preloader";
import SmoothScroll from "./motion/SmoothScroll";

export default function Providers({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <IntroProvider>
        <SmoothScroll />
        <Preloader />
        {children}
        <Cursor />
        <div aria-hidden="true" className="grain" />
      </IntroProvider>
    </MotionConfig>
  );
}
