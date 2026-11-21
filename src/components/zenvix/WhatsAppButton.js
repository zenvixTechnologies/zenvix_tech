"use client";

import { motion } from "framer-motion";
import { WhatsAppGlyph } from "./Icon";
import Magnetic from "./motion/Magnetic";
import { useIntro } from "./motion/IntroContext";
import { ease } from "./motionPresets";
import { site, whatsappLink } from "./siteConfig";

export default function WhatsAppButton() {
  const { ready } = useIntro();
  const whatsappUrl = whatsappLink(
    "Hello Zenvix! I'm interested in your services and would like to discuss a project.",
  );

  return (
    <motion.div
      animate={ready ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 md:bottom-8 md:right-8"
      initial={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease }}
    >
      <Magnetic strength={0.3}>
        <a
          aria-label={`Chat on WhatsApp with ${site.whatsappDisplay}`}
          className="group relative flex h-14 items-center rounded-full bg-wa text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.55)] transition-[padding] duration-500"
          href={whatsappUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-ping rounded-full bg-wa opacity-25 [animation-duration:2.6s]"
          />
          <span className="relative flex h-14 w-14 items-center justify-center">
            <WhatsAppGlyph className="h-6 w-6" />
          </span>
          <span className="relative grid grid-cols-[0fr] overflow-hidden whitespace-nowrap font-display text-sm font-bold transition-[grid-template-columns,padding] duration-500 ease-[var(--ease-out-expo)] group-hover:grid-cols-[1fr] group-hover:pr-5 group-focus-visible:grid-cols-[1fr] group-focus-visible:pr-5">
            <span className="min-w-0">Chat on WhatsApp</span>
          </span>
        </a>
      </Magnetic>
    </motion.div>
  );
}
