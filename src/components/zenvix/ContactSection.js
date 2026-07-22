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
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
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
