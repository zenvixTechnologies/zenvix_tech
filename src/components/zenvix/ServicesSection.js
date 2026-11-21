"use client";

import { motion } from "framer-motion";
import Icon from "./Icon";
import ScrollWords from "./motion/ScrollWords";
import SplitText from "./motion/SplitText";
import { ease, viewport } from "./motionPresets";

const services = [
  {
    title: "Web Development",
    description:
      "Crafting lightning-fast, scalable web experiences that combine cutting-edge technology with flawless performance to drive real business growth.",
    icon: "terminal",
    tags: ["Scalable architecture", "SEO Optimized"],
  },
  {
    title: "App Development",
    description:
      "Building high-performance, cross-platform mobile applications for iOS and Android with smooth UI, offline support, and native capabilities.",
    icon: "smartphone",
    tags: ["iOS & Android", "Flutter & React Native"],
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive digital journeys where every detail is thoughtfully shaped to create effortless, engaging, and visually stunning user experiences.",
    icon: "architecture",
  },
  {
    title: "Web Apps",
    description:
      "Building powerful, user-focused web applications that streamline operations, enhance productivity, and deliver seamless real-time interactions.",
    icon: "dashboard_customize",
  },
  {
    title: "Video Editing",
    description:
      "Creating high-impact promotional videos, social media reels, and professional video content that engages audiences and elevates your brand.",
    icon: "video_editing",
    tags: ["4K Editing", "Motion Graphics"],
  },
  {
    title: "Creative Solutions",
    description:
      "Transforming ideas into visually striking digital experiences that capture attention, tell your brand story, and leave a lasting impact.",
    icon: "auto_awesome",
  },
];

/** Lets the contact form pre-fill the message with the chosen service. */
const announceService = (title) => {
  window.dispatchEvent(new CustomEvent("zenvix:service", { detail: title }));
};

function ServiceRow({ service, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.li
      className="border-t border-line-dark last:border-b"
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 1, ease, delay: (index % 3) * 0.06 }}
      viewport={viewport}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <a
        aria-label={`${service.title} — start a project`}
        className="group relative grid grid-cols-[auto_1fr_auto] items-start gap-x-4 gap-y-4 overflow-hidden py-8 md:grid-cols-12 md:gap-x-8 md:py-10"
        href="#contact"
        onClick={() => announceService(service.title)}
      >
        {/* Ink wipe on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-ink transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
        />

        <span className="label relative pt-2 text-muted-dark transition-colors duration-500 group-hover:text-violet md:col-span-1 md:pl-4">
          {`{${number}}`}
        </span>

        <h3 className="relative font-display text-big font-bold text-ink transition-[color,transform] duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-2 group-hover:text-fg md:col-span-5">
          {service.title}
        </h3>

        <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-line-dark text-ink transition-all duration-700 ease-[var(--ease-out-expo)] group-hover:rotate-45 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-violet group-hover:to-blue group-hover:text-white md:order-last md:col-span-1 md:mr-4 md:justify-self-end">
          <Icon className="text-xl" name="plus" />
        </span>

        <div className="relative col-span-3 md:col-span-5 md:col-start-7 md:row-start-1">
          <p className="max-w-xl text-base leading-relaxed text-muted-dark transition-colors duration-500 group-hover:text-silver">
            {service.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xl text-violet-deep transition-colors duration-500 group-hover:text-violet">
              <Icon name={service.icon} />
            </span>
            {service.tags?.map((tag) => (
              <span
                className="rounded-full border border-line-dark px-3 py-1 text-xs font-medium text-ink transition-colors duration-500 group-hover:border-line group-hover:text-fg"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.li>
  );
}

export default function ServicesSection() {
  return (
    <section
      className="relative z-10 rounded-t-[var(--radius-section)] bg-paper pb-24 pt-28 text-ink md:pb-36 md:pt-40"
      id="services"
    >
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="label text-muted-dark md:col-span-3">(01) — Services</p>
          <ScrollWords
            className="font-display text-[clamp(1.75rem,3.8vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] md:col-span-9"
            highlight={["forward-thinking", "enterprises"]}
            text="Specialized services crafted for forward-thinking startups and established enterprises."
          />
        </div>

        <div className="mt-24 flex items-end justify-between gap-6 md:mt-36">
          <SplitText
            as="h2"
            className="font-display text-huge font-bold"
            text="Our Expertise"
          />
          <span className="label pb-3 text-muted-dark">({String(services.length).padStart(2, "0")})</span>
        </div>

        <ul className="mt-12 md:mt-16">
          {services.map((service, index) => (
            <ServiceRow index={index} key={service.title} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
}
