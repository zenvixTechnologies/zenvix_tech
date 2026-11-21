"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Icon, { WhatsAppGlyph } from "./Icon";
import Magnetic from "./motion/Magnetic";
import { Reveal, RevealItem } from "./motion/Reveal";
import SplitText from "./motion/SplitText";
import { ease } from "./motionPresets";
import { site, whatsappLink } from "./siteConfig";

const CONTACT_EMAIL = site.email;
const WHATSAPP_NUMBER = site.whatsappNumber;

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) errors.email = "We need an email to reply to you.";
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "That email doesn't look quite right.";
  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "Use digits only, with an optional + country code.";
  }
  if (!values.message.trim()) errors.message = "A line or two about your project helps a lot.";
  return errors;
}

function Field({ id, name, label, type = "text", value, error, onChange, onBlur, multiline, autoComplete }) {
  const InputTag = multiline ? "textarea" : "input";
  const errorId = `${id}-error`;

  return (
    <div className="field" data-invalid={error ? "true" : "false"}>
      <InputTag
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? "true" : "false"}
        autoComplete={autoComplete}
        className={`field__input ${multiline ? "min-h-[8rem] resize-none" : ""}`}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder=" "
        rows={multiline ? 4 : undefined}
        type={multiline ? undefined : type}
        value={value}
      />
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <span aria-hidden="true" className="field__bar" />
      <AnimatePresence>
        {error && (
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-[#ff8a8a]"
            exit={{ opacity: 0, y: -4 }}
            id={errorId}
            initial={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitState, setSubmitState] = useState({
    type: "idle",
    message: "",
  });

  // Pre-fill the message when a service row is clicked (only if still empty).
  useEffect(() => {
    const onService = (event) => {
      setFormData((current) =>
        current.message.trim()
          ? current
          : { ...current, message: `Hi Zenvix, I'm interested in ${event.detail}. ` },
      );
    };
    window.addEventListener("zenvix:service", onService);
    return () => window.removeEventListener("zenvix:service", onService);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const next = { ...formData, [name]: value };

    setFormData(next);
    if (touched[name]) setErrors(validate(next));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, phone: true, message: true });

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState({ type: "error", message: "Please fix the highlighted fields." });
      const firstInvalid = Object.keys(nextErrors)[0];
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    const phoneDetails = formData.phone ? `\n*Phone:* ${formData.phone}` : "";
    const textParams = `*New Project Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}${phoneDetails}\n\n*Message:*\n${formData.message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textParams)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitState({
      type: "success",
      message: "Opening WhatsApp with your filled message...",
    });
  };

  const visibleError = (name) => (touched[name] ? errors[name] : undefined);

  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-40" id="contact">
      <div
        aria-hidden="true"
        className="orb-b pointer-events-none absolute -right-[20%] top-[10%] h-[45vmax] w-[45vmax] rounded-full bg-violet-deep/20 blur-[120px]"
      />

      <div className="shell relative grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <p className="label mb-6 text-muted">(04) — Contact</p>
          <h2 aria-label="Let's Build Something Great" className="font-display text-huge font-bold">
            <span aria-hidden="true">
              <SplitText as="span" className="block" text="Let's Build" />
              <SplitText as="span" className="block" delay={0.1} text="Something" />
              <SplitText
                as="span"
                className="block font-serif font-normal italic tracking-[-0.03em]"
                delay={0.2}
                text="Great"
                wordClassName="text-gradient pr-[0.06em]"
              />
            </span>
          </h2>

          <Reveal className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-20" stagger>
            <RevealItem>
              <p className="label mb-3 text-muted">Phone</p>
              <ul className="space-y-2">
                {site.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a
                      className="link-line link-line--static font-display text-xl font-semibold md:text-2xl"
                      href={`tel:${phone.tel}`}
                    >
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </RevealItem>
            <RevealItem>
              <p className="label mb-3 text-muted">WhatsApp</p>
              <a
                className="link-line link-line--static font-display text-xl font-semibold md:text-2xl"
                href={whatsappLink()}
                rel="noopener noreferrer"
                target="_blank"
              >
                {site.whatsappDisplay}
              </a>
            </RevealItem>
            <RevealItem className="sm:col-span-2">
              <p className="label mb-3 text-muted">Email</p>
              <a
                className="link-line link-line--static break-all font-display text-xl font-semibold md:text-2xl"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
            </RevealItem>
          </Reveal>
        </div>

        <motion.form
          className="relative rounded-[var(--radius-card)] border border-line bg-white/[0.02] p-6 backdrop-blur-sm sm:p-10 lg:col-span-6 lg:self-end"
          initial={{ opacity: 0, y: 40 }}
          noValidate
          onSubmit={handleSubmit}
          transition={{ duration: 1.1, ease }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="label mb-4 text-muted">Tell us about your project</p>
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            <Field
              autoComplete="name"
              error={visibleError("name")}
              id="contact-name"
              label="Your Name *"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={formData.name}
            />
            <Field
              autoComplete="email"
              error={visibleError("email")}
              id="contact-email"
              label="Email Address *"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={formData.email}
            />
            <div className="sm:col-span-2">
              <Field
                autoComplete="tel"
                error={visibleError("phone")}
                id="contact-phone"
                label="Phone Number (optional)"
                name="phone"
                onBlur={handleBlur}
                onChange={handleChange}
                type="tel"
                value={formData.phone}
              />
            </div>
            <div className="sm:col-span-2">
              <Field
                error={visibleError("message")}
                id="contact-message"
                label="How can we help? *"
                multiline
                name="message"
                onBlur={handleBlur}
                onChange={handleChange}
                value={formData.message}
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[14rem] text-xs leading-relaxed text-muted">
              Submitting opens WhatsApp with your message ready to send.
            </p>
            <Magnetic strength={0.2}>
              <button
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full bg-fg px-6 py-4 font-display font-bold text-ink sm:w-auto"
                type="submit"
              >
                <span className="absolute inset-0 translate-y-full rounded-full bg-wa transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-y-0" />
                <WhatsAppGlyph className="relative h-5 w-5" />
                <span className="relative">Send Message via WhatsApp</span>
                <Icon
                  className="relative transition-transform duration-500 group-hover:translate-x-1"
                  name="arrow_right"
                />
              </button>
            </Magnetic>
          </div>

          <p
            aria-live="polite"
            className={`mt-5 min-h-[1.25rem] text-sm ${
              submitState.type === "error" ? "text-[#ff8a8a]" : "text-violet"
            }`}
            role="status"
          >
            {submitState.message}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
