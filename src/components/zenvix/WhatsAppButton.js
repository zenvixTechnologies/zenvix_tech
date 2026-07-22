"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "916282685392";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Zenvix! I'm interested in your services and would like to discuss a project."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip hint on hover */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with +91 6282685392"
        className="group relative flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        {/* Pulsing Outer Ring */}
        <motion.span
          className="absolute inset-0 rounded-full bg-emerald-500/40"
          animate={{ scale: [1, 1.45, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Outer Glow */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 blur-md transition-opacity group-hover:opacity-100" />

        {/* Main Button Badge */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white shadow-[0_8px_30px_rgba(16,185,129,0.45)] border border-emerald-300/30">
          <svg
            className="h-7 w-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.002 3.661 3.745-.984z" />
          </svg>
        </div>

        {/* Hover Label */}
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-xl border border-white/10 bg-surface/90 px-3.5 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
