"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";

const CONTACT_EMAIL = "zenvix2026@gmail.com";
const WHATSAPP_NUMBER = "916282685392";
const DISPLAY_PHONE = "+91 6282685392";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitState, setSubmitState] = useState({
    type: "idle",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const phoneDetails = formData.phone ? `\n*Phone:* ${formData.phone}` : "";
    const textParams = `*New Project Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}${phoneDetails}\n\n*Message:*\n${formData.message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textParams)}`;

    window.open(whatsappUrl, "_blank");

    setSubmitState({
      type: "success",
      message: "Opening WhatsApp with your filled message...",
    });
  };

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

        <motion.div
          className="mb-12 flex flex-wrap items-center justify-center gap-6 text-lg text-on-surface-variant"
          variants={fadeUp}
        >
          <div className="flex items-center gap-2">
            <span className="text-white/60">Phone / WhatsApp:</span>
            <a
              className="font-bold text-primary transition-colors hover:text-white"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {DISPLAY_PHONE}
            </a>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-2">
            <span className="text-white/60">Email:</span>
            <a
              className="font-bold text-primary transition-colors hover:text-white"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-card space-y-6 rounded-2xl p-8 text-left md:p-12"
          variants={fadeUp}
        >
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
              <label
                className="text-sm font-bold text-on-surface-variant"
                htmlFor="contact-name"
              >
                Your Name
              </label>
              <input
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 text-white transition-colors focus:border-primary focus:outline-none"
                id="contact-name"
                name="name"
                onChange={handleChange}
                placeholder="John Doe"
                required
                type="text"
                value={formData.name}
              />
            </motion.div>
            <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
              <label
                className="text-sm font-bold text-on-surface-variant"
                htmlFor="contact-email"
              >
                Email Address
              </label>
              <input
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 text-white transition-colors focus:border-primary focus:outline-none"
                id="contact-email"
                name="email"
                onChange={handleChange}
                placeholder="john@example.com"
                required
                type="email"
                value={formData.email}
              />
            </motion.div>
            <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
              <label
                className="text-sm font-bold text-on-surface-variant"
                htmlFor="contact-phone"
              >
                Phone Number
              </label>
              <input
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 text-white transition-colors focus:border-primary focus:outline-none"
                id="contact-phone"
                name="phone"
                onChange={handleChange}
                placeholder="+91 6282685392"
                type="tel"
                value={formData.phone}
              />
            </motion.div>
          </div>
          <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
            <label
              className="text-sm font-bold text-on-surface-variant"
              htmlFor="contact-message"
            >
              How can we help?
            </label>
            <textarea
              className="w-full resize-none border-b border-outline-variant/30 bg-transparent py-3 text-white transition-colors focus:border-primary focus:outline-none"
              id="contact-message"
              name="message"
              onChange={handleChange}
              placeholder="Tell us about your project..."
              required
              rows="4"
              value={formData.message}
            />
          </motion.div>
          <motion.button
            className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-4 font-headline font-bold text-on-primary transition-all hover:shadow-[0_10px_40px_rgba(143,245,255,0.3)]"
            type="submit"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.002 3.661 3.745-.984z" />
            </svg>
            Send Message via WhatsApp
          </motion.button>
          {submitState.message && (
            <p aria-live="polite" className="text-sm text-primary">
              {submitState.message}
            </p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
