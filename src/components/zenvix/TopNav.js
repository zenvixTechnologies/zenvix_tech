"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = ["Services", "Portfolio", "About", "Tech", "Contact"];

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 px-2 pt-2.5 sm:px-4 sm:pt-3 md:px-5 lg:px-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="rounded-[1.1rem] border border-white/10 bg-slate-950/78 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[1.4rem]">
            <div className="flex min-w-0 items-center justify-between gap-2 px-2.5 py-2.5 sm:gap-3 sm:px-4 sm:py-3 md:px-5 lg:px-6">
              <a
                aria-label="Zenvix home"
                className="-ml-1 flex min-w-0 shrink items-center justify-start sm:ml-0 lg:flex-1"
                href="#top"
                onClick={closeMenu}
              >
                <span className="relative block h-20 w-20 max-w-full">
                  <Image
                    alt="Zenvix logo"
                    className="object-contain drop-shadow-[0_0_18px_rgba(143,245,255,0.16)]"
                    fill
                    priority
                    sizes="240px"
                    src="/zenvix/logo.png"
                  />
                </span>
              </a>

              <div className="hidden items-center gap-5 font-headline text-sm font-bold tracking-tight lg:flex xl:gap-8">
                {navItems.map((item) => (
                  <a
                    className="text-slate-400 transition-colors duration-200 hover:text-white"
                    href={`#${item.toLowerCase()}`}
                    key={item}
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-3">
                <a
                  className="hidden rounded-full bg-primary px-4 py-2.5 font-headline text-sm font-bold tracking-tight text-on-primary shadow-[0_0_20px_rgba(143,245,255,0.22)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(143,245,255,0.34)] sm:inline-flex lg:px-6"
                  href="#contact"
                >
                  Let&apos;s Build
                </a>

                <button
                  aria-controls="mobile-nav-drawer"
                  aria-expanded={isMenuOpen}
                  aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-colors duration-200 hover:border-primary/40 hover:bg-primary/10 sm:h-11 sm:w-11 lg:hidden"
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
          </div>
        </div>
      </nav>

      <div
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-[60] lg:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          aria-label="Close navigation overlay"
          className={`absolute inset-0 bg-slate-950/72 backdrop-blur-sm transition-opacity duration-500 ease-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
          type="button"
        />

        <aside
          aria-modal="true"
          className={`absolute left-0 top-0 flex h-full w-[min(90vw,22rem)] transform-gpu flex-col border-r border-white/10 bg-[linear-gradient(180deg,rgba(5,8,19,0.985),rgba(13,16,34,0.985))] shadow-[18px_0_60px_rgba(0,0,0,0.42)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          id="mobile-nav-drawer"
          role="dialog"
        >
          <div
            className={`flex items-center justify-between border-b border-white/8 px-3.5 pb-3.5 pt-[max(0.875rem,env(safe-area-inset-top))] transition-all duration-500 ease-out sm:px-5 sm:pb-5 sm:pt-[max(1rem,env(safe-area-inset-top))] ${
              isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            <span className="font-headline text-xs font-bold tracking-[0.28em] text-slate-300 uppercase sm:text-sm">
              Menu
            </span>
            <button
              aria-label="Close navigation menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-colors duration-200 hover:border-primary/40 hover:bg-primary/10 sm:h-11 sm:w-11"
              onClick={closeMenu}
              type="button"
            >
              <span className="relative block h-4 w-4">
                <span className="absolute left-0 top-[7px] h-0.5 w-4 rotate-45 rounded-full bg-current" />
                <span className="absolute left-0 top-[7px] h-0.5 w-4 -rotate-45 rounded-full bg-current" />
              </span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3.5 py-4.5 sm:px-5 sm:py-6">
            <div
              className={`mb-5 rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-3.5 transition-all duration-500 ease-out sm:mb-6 sm:rounded-[1.35rem] sm:p-4 ${
                isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
            >
              <span className="relative block h-20 w-60">
                <Image
                  alt="Zenvix logo"
                  className="object-contain drop-shadow-[0_0_18px_rgba(143,245,255,0.16)]"
                  fill
                  sizes="240px"
                  src="/zenvix/logo.png"
                />
              </span>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Premium design and development partner for modern digital
                products.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {navItems.map((item, index) => (
                <a
                  className={`flex items-center justify-between rounded-[1.15rem] border border-white/8 bg-white/[0.03] px-3.5 py-3.5 font-headline text-[14px] font-bold tracking-tight text-slate-100 transform-gpu transition-[transform,opacity,border-color,background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/30 hover:bg-primary/10 hover:text-white sm:rounded-2xl sm:px-4 sm:py-4 sm:text-base ${
                    isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
                  }`}
                  href={`#${item.toLowerCase()}`}
                  key={item}
                  onClick={closeMenu}
                  style={{ transitionDelay: `${90 + index * 45}ms` }}
                >
                  <span>{item}</span>
                  <span className="text-primary/80">&rsaquo;</span>
                </a>
              ))}
            </div>
          </div>

          <div
            className={`border-t border-white/8 px-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] pt-3.5 transition-all duration-500 ease-out sm:px-5 sm:pb-[max(1rem,env(safe-area-inset-bottom))] sm:pt-5 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: "180ms" }}
          >
            <a
              className="flex justify-center rounded-[1.15rem] bg-primary px-4 py-3.5 font-headline text-[14px] font-bold tracking-tight text-on-primary shadow-[0_0_24px_rgba(143,245,255,0.24)] transition-transform duration-200 hover:scale-[1.01] sm:rounded-2xl sm:py-4 sm:text-base"
              href="#contact"
              onClick={closeMenu}
            >
              Let&apos;s Build Together
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
