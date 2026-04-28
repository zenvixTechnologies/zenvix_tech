"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const CONTACT_EMAIL = "zenvix2026@gmail.com";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      setSubmitState({
        type: "error",
        message:
          "Email service is not configured yet. Add your EmailJS keys to continue.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ type: "idle", message: "" });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
          to_email: CONTACT_EMAIL,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setFormData(initialFormData);
      setSubmitState({
        type: "success",
        message: "Message sent successfully. We'll get back to you soon.",
      });
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        <motion.p
          className="mb-12 text-xl text-on-surface-variant"
          variants={fadeUp}
        >
          Ready to embark on your digital journey? Drop us a line or email us at{" "}
          <a
            className="text-primary transition-colors hover:text-white"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
          .
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          className="glass-card space-y-6 rounded-2xl p-8 text-left md:p-12"
          variants={fadeUp}
        >
          <div className="grid gap-6 md:grid-cols-2">
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
            className="mt-4 w-full rounded-xl bg-primary py-4 font-headline font-bold text-on-primary transition-all hover:shadow-[0_10px_40px_rgba(143,245,255,0.3)]"
            disabled={isSubmitting}
            type="submit"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
          {submitState.message && (
            <p
              aria-live="polite"
              className={`text-sm ${
                submitState.type === "success"
                  ? "text-primary"
                  : "text-secondary"
              }`}
            >
              {submitState.message}
            </p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
