"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sizes = {
  nav: "h-12 w-36 md:h-14 md:w-40",
  footer: "h-40 w-72 md:h-48 md:w-96",
};

export default function ZenvixLogo({ placement = "nav", className = "" }) {
  return (
    <motion.div
      className={`relative flex items-center justify-center rounded-lg ${sizes[placement]} ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      <Image
        alt="Zenvix logo"
        className="max-h-full max-w-full object-contain drop-shadow-[0_0_18px_rgba(143,245,255,0.16)]"
        draggable="false"
        height={192}
        loading={placement === "nav" ? "eager" : "lazy"}
        priority={placement === "nav"}
        src="/zenvix/logo.png"
        width={384}
      />
    </motion.div>
  );
}
