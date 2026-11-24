"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import Magnetic from "./motion/Magnetic";
import { Reveal, RevealItem } from "./motion/Reveal";
import { getLenis } from "./motion/SmoothScroll";
import { ease } from "./motionPresets";
import { navItems, sectionHref, site, whatsappLink } from "./siteConfig";
import ZenvixLogo from "./ZenvixLogo";

const wordmark = site.name.toUpperCase().split("");

function scrollToTop() {
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(0, { duration: 1.6 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink pt-20 md:pt-28 max-md:pt-16" data-fab-hide>
      <div className="shell">
        {/* CTA line */}
        <Reveal className="flex flex-col gap-8 border-b border-line pb-16 md:flex-row md:items-end md:justify-between md:pb-24 max-md:gap-7 max-md:pb-12">
          <p className="max-w-3xl font-display text-big font-bold">
            Have an idea? <span className="font-serif font-normal italic text-gradient pr-[0.05em]">Let&apos;s build</span>{" "}
            it together.
          </p>
          <Magnetic className="max-md:w-full">
            <a
              className="m-press group relative flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet to-blue text-center font-display text-sm font-bold text-white md:h-40 md:w-40 max-md:h-auto max-md:w-full max-md:py-5 max-md:text-base max-md:shadow-[0_20px_50px_-20px_rgba(106,53,242,0.9)]"
              href={sectionHref(pathname, "contact")}
            >
              <span className="absolute inset-0 scale-0 rounded-full bg-fg transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-100" />
              <span className="relative flex flex-col items-center gap-1 transition-colors duration-500 group-hover:text-ink max-md:flex-row-reverse max-md:gap-3">
                <Icon className="text-xl transition-transform duration-500 group-hover:-rotate-45" name="arrow_right" />
                Start a project
              </span>
            </a>
          </Magnetic>
        </Reveal>

        {/* Columns */}
        <Reveal className="grid gap-12 py-16 sm:grid-cols-2 md:py-20 lg:grid-cols-12 max-md:grid-cols-2 max-md:gap-x-6 max-md:gap-y-10 max-md:py-12" stagger>
          <RevealItem className="lg:col-span-3 max-md:col-span-2">
            <ZenvixLogo placement="footer" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{site.signature}</p>
          </RevealItem>

          <RevealItem className="lg:col-span-2 lg:col-start-5">
            <p className="label mb-5 text-muted">Navigate</p>
            <ul className="space-y-3">
              {[...navItems, { label: "Contact", id: "contact" }].map((item) => (
                <li key={item.id}>
                  <a className="roll-trigger font-display text-lg font-semibold" href={sectionHref(pathname, item.id)}>
                    <span className="roll">
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="text-violet">{item.label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem className="lg:col-span-3 max-md:order-last max-md:col-span-2">
            <p className="label mb-5 text-muted">Contact</p>
            <ul className="space-y-3 text-lg">
              <li>
                <a className="link-line break-all" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              {site.phones.map((phone) => (
                <li key={phone.tel}>
                  <a className="link-line" href={`tel:${phone.tel}`}>
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a className="link-line" href={whatsappLink()} rel="noopener noreferrer" target="_blank">
                  WhatsApp · {site.whatsappDisplay}
                </a>
              </li>
            </ul>
          </RevealItem>

          <RevealItem className="lg:col-span-2">
            <p className="label mb-5 text-muted">Legal</p>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
              ].map((link) => (
                <li key={link.href}>
                  <a className="link-line font-display text-lg font-semibold" href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </RevealItem>
        </Reveal>

        <div className="flex flex-col gap-4 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          {/* Year is baked in at build time; avoid a hydration warning if the build predates New Year. */}
          <p suppressHydrationWarning>© {year} Zenvix. {site.signature}</p>
          <p className="label">{site.tagline.join(" • ")}</p>
          <button
            className="roll-trigger inline-flex items-center gap-2 self-start font-semibold text-fg sm:self-auto"
            onClick={scrollToTop}
            type="button"
          >
            <span className="roll">
              <span>Back to top</span>
              <span aria-hidden="true">Back to top</span>
            </span>
            <Icon name="arrow_up" />
          </button>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden="true" className="relative select-none overflow-hidden px-[var(--gutter)]">
        <motion.div
          className="flex justify-between font-display text-[23vw] font-extrabold leading-[0.76] tracking-[-0.06em]"
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
          whileInView="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {wordmark.map((letter, index) => (
            <span className="block overflow-hidden" key={`${letter}-${index}`}>
              <motion.span
                className={`block ${index >= 3 ? "text-gradient" : "bg-gradient-to-b from-silver to-white/20 bg-clip-text text-transparent"}`}
                variants={{
                  hidden: { y: "100%" },
                  visible: { y: "0%", transition: { duration: 1.2, ease } },
                }}
              >
                {letter}
              </motion.span>
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
