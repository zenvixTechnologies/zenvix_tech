"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "./motionPresets";
import ZenvixLogo from "./ZenvixLogo";

const footerLinks = ["Privacy Policy", "Terms of Service", "LinkedIn", "GitHub"];

export default function Footer() {
  return (
    <motion.footer
      className="mt-20 w-full border-t border-white/5 bg-[#0b0e14] py-16"
      initial="hidden"
      viewport={viewport}
      whileInView="visible"
      variants={fadeUp}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-12 md:flex-row">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <ZenvixLogo className="mx-auto md:mx-0" placement="footer" />
          <p className="font-headline text-sm tracking-wide text-slate-500">
            © 2024 Zenvix. Engineered for the Digital Aurora.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-headline text-sm tracking-wide">
          {footerLinks.map((link) => (
            <motion.a
              className="text-slate-500 transition-all duration-200 hover:-translate-y-1 hover:text-white"
              href="#"
              key={link}
              whileHover={{ y: -4 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
