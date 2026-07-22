"use client";

import { motion } from "framer-motion";
import Icon from "./Icon";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";

const services = [
  {
    title: "Web Development",
    description:
      "Crafting lightning-fast, scalable web experiences that combine cutting-edge technology with flawless performance to drive real business growth.",
    icon: "terminal",
    accent: "primary",
    titleClassName: "text-2xl",
    descriptionClassName: "text-sm mb-4",
    tags: ["Scalable architecture", "SEO Optimized"],
  },
  {
    title: "App Development",
    description:
      "Building high-performance, cross-platform mobile applications for iOS and Android with smooth UI, offline support, and native capabilities.",
    icon: "smartphone",
    accent: "secondary",
    titleClassName: "text-2xl",
    descriptionClassName: "text-sm mb-4",
    tags: ["iOS & Android", "Flutter & React Native"],
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive digital journeys where every detail is thoughtfully shaped to create effortless, engaging, and visually stunning user experiences.",
    icon: "architecture",
    accent: "tertiary",
    titleClassName: "text-2xl",
    descriptionClassName: "text-sm",
  },
  {
    title: "Web Apps",
    description:
      "Building powerful, user-focused web applications that streamline operations, enhance productivity, and deliver seamless real-time interactions.",
    icon: "dashboard_customize",
    accent: "primary",
    titleClassName: "text-2xl",
    descriptionClassName: "text-sm",
  },
  {
    title: "Video Editing",
    description:
      "Creating high-impact promotional videos, social media reels, and professional video content that engages audiences and elevates your brand.",
    icon: "video_editing",
    accent: "secondary",
    titleClassName: "text-2xl",
    descriptionClassName: "text-sm mb-4",
    tags: ["4K Editing", "Motion Graphics"],
  },
  {
    title: "Creative Solutions",
    description:
      "Transforming ideas into visually striking digital experiences that capture attention, tell your brand story, and leave a lasting impact.",
    icon: "auto_awesome",
    accent: "tertiary",
    titleClassName: "text-2xl",
    descriptionClassName: "text-sm",
  },
];

const accentClasses = {
  primary: {
    iconWrap: "bg-primary/20",
    icon: "text-primary",
    tag: "text-primary",
  },
  secondary: {
    iconWrap: "bg-secondary/20",
    icon: "text-secondary",
    tag: "text-secondary",
  },
  tertiary: {
    iconWrap: "bg-tertiary/20",
    icon: "text-tertiary",
    tag: "text-tertiary",
  },
};

export default function ServicesSection() {
  return (
    <section className="relative bg-surface-container-low py-20 sm:py-24 lg:py-32" id="services">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
        initial="hidden"
        viewport={viewport}
        whileInView="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 lg:mb-20 md:flex-row md:items-end"
          variants={fadeUp}
        >
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Our Expertise
            </h2>
            <div className="beam" />
          </div>
          <p className="max-w-md text-base text-on-surface-variant sm:text-lg">
            Specialized services crafted for forward-thinking startups and
            established enterprises.
          </p>
        </motion.div>
        <motion.div
          className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
        >
          {services.map((service) => {
            const accent = accentClasses[service.accent];

            return (
              <motion.div
                className={`glass-card group rounded-xl p-5 transition-all duration-300 hover:bg-surface-container-highest sm:p-6 lg:p-8 ${service.className || ""}`}
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.015 }}
                whileTap={{ scale: 0.99 }}
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${accent.iconWrap}`}
                >
                  <Icon className={accent.icon}>{service.icon}</Icon>
                </div>
                <h3
                  className={`mb-3 font-headline font-bold text-white sm:mb-4 ${service.titleClassName}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-on-surface-variant ${service.descriptionClassName}`}
                >
                  {service.description}
                </p>
                {service.tags && (
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        className={`rounded-full bg-white/5 px-3 py-1 text-xs font-semibold ${accent.tag}`}
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
