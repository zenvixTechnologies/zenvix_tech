"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";

export default function ContactSection() {
  return (
    <section className="relative py-32" id="contact">
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.75, 0.45] }}
        className="aurora-blur absolute top-1/2 left-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5"
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-8 text-center"
        initial="hidden"
        viewport={viewport}
        whileInView="visible"
        variants={staggerContainer}
      >
        <motion.h2
          className="mb-8 font-headline text-5xl font-extrabold tracking-tight text-white md:text-6xl"
          variants={fadeUp}
        >
          Let&apos;s Build Something Great
        </motion.h2>
        <motion.p
          className="mb-12 text-xl text-on-surface-variant"
          variants={fadeUp}
        >
          Ready to embark on your digital journey? Drop us a line.
        </motion.p>
        <motion.form
          className="glass-card space-y-6 rounded-2xl p-8 text-left md:p-12"
          variants={fadeUp}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
              <label className="text-sm font-bold text-on-surface-variant">
                Your Name
              </label>
              <input
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 text-white transition-colors focus:border-primary focus:outline-none"
                placeholder="John Doe"
                type="text"
              />
            </motion.div>
            <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
              <label className="text-sm font-bold text-on-surface-variant">
                Email Address
              </label>
              <input
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 text-white transition-colors focus:border-primary focus:outline-none"
                placeholder="john@example.com"
                type="email"
              />
            </motion.div>
          </div>
          <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
            <label className="text-sm font-bold text-on-surface-variant">
              How can we help?
            </label>
            <textarea
              className="w-full resize-none border-b border-outline-variant/30 bg-transparent py-3 text-white transition-colors focus:border-primary focus:outline-none"
              placeholder="Tell us about your project..."
              rows="4"
            />
          </motion.div>
          <motion.button
            className="mt-4 w-full rounded-xl bg-primary py-4 font-headline font-bold text-on-primary transition-all hover:shadow-[0_10px_40px_rgba(143,245,255,0.3)]"
            type="submit"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
