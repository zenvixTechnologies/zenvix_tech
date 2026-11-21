"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Icon, { WhatsAppGlyph } from "./Icon";
import Magnetic from "./motion/Magnetic";
import { useIntro } from "./motion/IntroContext";
import { getLenis, lockScroll } from "./motion/SmoothScroll";
import { ease, easeInOut } from "./motionPresets";
import { navItems, sectionHref, site, whatsappLink } from "./siteConfig";
import ZenvixLogo from "./ZenvixLogo";

const menuItems = [...navItems, { label: "Contact", id: "contact" }];

const quickActions = [
  { label: "WhatsApp", detail: site.whatsappDisplay, href: whatsappLink(), icon: "whatsapp", external: true },
  { label: "Email", detail: "Write to us", href: `mailto:${site.email}`, icon: "mail" },
  ...site.phones.map((phone, index) => ({
    label: index === 0 ? "Call UAE" : "Call India",
    detail: phone.display,
    href: `tel:${phone.tel}`,
    icon: "phone",
  })),
];

function RollText({ children }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}

export default function TopNav() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/zenvix";
  const { ready } = useIntro();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  const firstLinkRef = useRef(null);
  const toggleRef = useRef(null);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(current > 40);
    setHidden(current > 240 && current > previous + 2);
    if (current < previous - 2) setHidden(false);
  });

  const closeMenu = () => setIsMenuOpen(false);

  // Scroll is locked while the menu is open, so jump after it unlocks.
  const goToSection = (event, id) => {
    closeMenu();
    if (!isHome) return;
    event.preventDefault();
    setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(target, { duration: 1.4 });
      else target.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    }, 60);
  };

  // Scroll lock + keyboard handling for the full-screen menu
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    lockScroll(true);
    const focusTimer = setTimeout(() => firstLinkRef.current?.focus(), 400);
    const toggle = toggleRef.current;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(focusTimer);
      lockScroll(false);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      toggle?.focus({ preventScroll: true });
    };
  }, [isMenuOpen]);

  // Active section indicator (home only)
  useEffect(() => {
    if (!isHome) return undefined;
    const sections = menuItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const homeHref = isHome ? "#top" : "/zenvix";

  return (
    <>
      <motion.header
        animate={{ y: hidden && !isMenuOpen ? "-110%" : "0%", opacity: ready ? 1 : 0 }}
        className="fixed inset-x-0 top-0 z-50"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.7, ease }}
      >
        <div
          className={`transition-[background-color,border-color,backdrop-filter] duration-500 ${
            scrolled || isMenuOpen
              ? "border-b border-line bg-ink/75 backdrop-blur-xl"
              : "border-b border-transparent"
          }`}
        >
          <nav
            aria-label="Primary"
            className="shell grid h-[var(--header-h)] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]"
          >
            <Link
              aria-label="Zenvix home"
              className="flex w-fit items-center gap-3"
              href={homeHref}
              onClick={closeMenu}
            >
              <ZenvixLogo placement="nav" priority />
              <span className="hidden font-display text-[0.95rem] font-bold uppercase tracking-[0.22em] sm:inline">
                Zenvix
              </span>
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const isActive = isHome && active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      aria-current={isActive ? "true" : undefined}
                      className={`roll-trigger relative flex items-center gap-2 rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors duration-300 ${
                        isActive ? "text-fg" : "text-muted hover:text-fg"
                      }`}
                      href={sectionHref(pathname, item.id)}
                    >
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 -z-10 rounded-full border border-line bg-white/[0.04]"
                          layoutId="nav-active"
                          transition={{ type: "spring", stiffness: 380, damping: 34 }}
                        />
                      )}
                      <RollText>{item.label}</RollText>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center justify-end gap-2 sm:gap-3">
              <Magnetic className="hidden sm:inline-flex" strength={0.25}>
                <a
                  className="roll-trigger group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-fg px-5 py-3 font-display text-sm font-bold text-ink"
                  href={sectionHref(pathname, "contact")}
                >
                  <span className="absolute inset-0 translate-y-full rounded-full bg-gradient-to-r from-violet to-blue transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0" />
                  <span className="relative">
                    <RollText>Let&apos;s Build</RollText>
                  </span>
                  <Icon className="relative text-base transition-transform duration-500 group-hover:-rotate-45" name="arrow_right" />
                </a>
              </Magnetic>

              <button
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white/[0.04] text-fg transition-colors hover:border-white/30 lg:hidden"
                onClick={() => setIsMenuOpen((open) => !open)}
                ref={toggleRef}
                type="button"
              >
                <span className="relative block h-3 w-5">
                  <span
                    className={`absolute left-0 h-[1.5px] w-5 bg-current transition-all duration-500 ease-[var(--ease-out-expo)] ${
                      isMenuOpen ? "top-[5px] rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-[1.5px] bg-current transition-all duration-500 ease-[var(--ease-out-expo)] ${
                      isMenuOpen ? "top-[5px] w-5 -rotate-45" : "top-[10px] w-3"
                    }`}
                  />
                </span>
              </button>
            </div>
          </nav>
          <motion.div
            aria-hidden="true"
            className="h-px origin-left bg-gradient-to-r from-violet to-blue"
            style={{ scaleX: progress, opacity: scrolled ? 1 : 0 }}
          />
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            aria-label="Site menu"
            aria-modal="true"
            className="fixed inset-0 z-40 flex flex-col bg-ink-soft pt-[calc(var(--header-h)+1rem)] lg:hidden"
            data-lenis-prevent
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            id="mobile-menu"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            role="dialog"
            transition={{ duration: 0.8, ease: easeInOut }}
          >
            <div
              aria-hidden="true"
              className="orb-a pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-violet/25 blur-[90px]"
            />
            <div className="shell relative flex flex-1 flex-col justify-between overflow-y-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <ul className="space-y-1">
                {menuItems.map((item, index) => (
                  <li className="overflow-hidden border-b border-line" key={item.id}>
                    <motion.a
                      animate={{ y: "0%" }}
                      className="group flex items-baseline justify-between gap-4 py-4"
                      exit={{ y: "100%", transition: { duration: 0.35, ease } }}
                      href={sectionHref(pathname, item.id)}
                      initial={{ y: "100%" }}
                      onClick={(event) => goToSection(event, item.id)}
                      ref={index === 0 ? firstLinkRef : undefined}
                      transition={{ duration: 0.9, ease, delay: 0.25 + index * 0.06 }}
                    >
                      <span className="font-display text-[clamp(2.6rem,12vw,4.5rem)] font-bold leading-none tracking-[-0.045em] transition-colors group-hover:text-violet">
                        {item.label}
                      </span>
                      <span className="label text-muted">0{index + 1}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>

              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 grid gap-6 sm:grid-cols-2"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease, delay: 0.55 }}
              >
                {/* Phones: one-tap contact actions */}
                <div className="grid grid-cols-2 gap-2 md:hidden">
                  {quickActions.map((action) => (
                    <a
                      className="m-press flex min-h-16 items-center gap-3 rounded-2xl border border-line bg-white/[0.03] px-3 py-3"
                      href={action.href}
                      key={action.label}
                      {...(action.external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-blue text-white">
                        {action.icon === "whatsapp" ? (
                          <WhatsAppGlyph className="h-4 w-4" />
                        ) : (
                          <Icon className="text-base" name={action.icon} />
                        )}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-sm font-bold">{action.label}</span>
                        <span className="block truncate text-xs text-muted">{action.detail}</span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="space-y-2 max-md:hidden">
                  <p className="label text-muted">Get in touch</p>
                  <a className="link-line block text-lg" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                  {site.phones.map((phone) => (
                    <a className="link-line block text-lg" href={`tel:${phone.tel}`} key={phone.tel}>
                      {phone.display}
                    </a>
                  ))}
                  <a
                    className="link-line block text-lg"
                    href={whatsappLink()}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    WhatsApp · {site.whatsappDisplay}
                  </a>
                </div>
                <a
                  className="flex items-center justify-center gap-2 self-end rounded-full bg-fg px-6 py-4 font-display font-bold text-ink"
                  href={sectionHref(pathname, "contact")}
                  onClick={(event) => goToSection(event, "contact")}
                >
                  Let&apos;s Build Together
                  <Icon name="arrow_right" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
