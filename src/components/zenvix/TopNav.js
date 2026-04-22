"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ZenvixLogo from "./ZenvixLogo";

const navItems = ["Services", "Portfolio", "About", "Tech", "Contact"];

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.nav
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 md:px-6"
      initial={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/70 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-6">
            <a
              aria-label="Zenvix home"
              className="flex min-w-0 shrink-0 items-center"
              href="#top"
              onClick={closeMenu}
            >
              <ZenvixLogo className="mx-auto md:mx-0" placement="nav" />
            </a>

            <div className="hidden items-center gap-5 font-headline font-bold tracking-tight text-sm lg:flex xl:gap-8">
              {navItems.map((item) => (
                <a
                  className="text-slate-400 transition-all duration-300 hover:text-white"
                  href={`#${item.toLowerCase()}`}
                  key={item}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="hidden rounded-full bg-primary px-5 py-2.5 font-headline text-sm font-bold tracking-tight text-on-primary shadow-[0_0_20px_rgba(143,245,255,0.22)] transition-transform hover:shadow-[0_0_28px_rgba(143,245,255,0.34)] sm:inline-flex lg:px-6"
                href="#contact"
              >
                Let&apos;s Build
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex rounded-full border border-primary/30 bg-primary/12 px-4 py-2 font-headline text-sm font-bold tracking-tight text-primary shadow-[0_0_20px_rgba(143,245,255,0.16)] transition-transform sm:hidden"
                href="#contact"
              >
                Contact
              </motion.a>

              <button
                aria-controls="mobile-nav-menu"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-colors hover:border-primary/40 hover:bg-primary/10 lg:hidden"
                onClick={() => setIsMenuOpen((open) => !open)}
                type="button"
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                      isMenuOpen ? "top-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                      isMenuOpen ? "top-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen ? (
              <motion.div
                animate={{ height: "auto", opacity: 1 }}
                className="overflow-hidden border-t border-white/10 lg:hidden"
                exit={{ height: 0, opacity: 0 }}
                id="mobile-nav-menu"
                initial={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="space-y-2 px-4 py-4 sm:px-5">
                  {navItems.map((item) => (
                    <a
                      className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 font-headline text-sm font-bold tracking-tight text-slate-200 transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-white"
                      href={`#${item.toLowerCase()}`}
                      key={item}
                      onClick={closeMenu}
                    >
                      <span>{item}</span>
                      <span className="text-primary/80">&rsaquo;</span>
                    </a>
                  ))}

                  <motion.a
                    whileTap={{ scale: 0.98 }}
                    className="mt-3 flex justify-center rounded-2xl bg-primary px-4 py-3 font-headline text-sm font-bold tracking-tight text-on-primary shadow-[0_0_24px_rgba(143,245,255,0.24)]"
                    href="#contact"
                    onClick={closeMenu}
                  >
                    Let&apos;s Build Together
                  </motion.a>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
