"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";

const works = [
  {
    title: "Nexus AI",
    description:
      "A sophisticated neural network platform designed for enterprise intelligence.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYyijsPbjuSOXbow_Fqai0OOmhxMjjprUP783VO-0OURD-jNA-NI4UGiCvLGCah2-zKcwuBKgJ15JJ9wS3Yk6P6UO9pKJC6rYHX-YlZt-8oowiC7ZjIPh-xEKj0cafUoHhRHsAQUpS21AzkIoQRtlRRqejACqI7SAsL8OQypDI85BLT9WOLWPWUXjnmRkhtApngDlkq_Ho_Neb0RktZFuAfyC7bYZPf2b8dFKPv_mRqRye_de4YVdqlBB68mCriRSGPR4Z7HHSL9_B",
    alt: "futuristic dashboard interface with glowing neon lines and data visualization elements on a dark background",
    accent: "primary",
    tags: ["React", "Next.js"],
  },
  {
    title: "Vivid Studio",
    description:
      "Modernizing the digital presence of an award-winning creative agency.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChhIJrQYXzsbfjQiQeCmXIB-TiLRO4bowFOQwuJOp4ovlYoYYGuMPIYQVjaUs1M6AfGN6CeJIsQsd60m52Hy6BG8B8mqozW6G0yg_v6hXBTM6_CKS9zwggOmAM9RECh8dNj4RzZ6c3OYZ-cJGJgAwXOTrWdPFinMeKqp-94n-mD7Mdl2o7W1L-ncewOzkHJQWKTVWQqfVkeES3J6tkyt5Stsj1mbo4YTYvsoL-tQz4feY2TDaFC97WxQb8CSJbH-cRzjqI3P48tS2g",
    alt: "minimalist and elegant website design for a design studio with a focus on bold typography and whitespace",
    accent: "secondary",
    tags: ["UX/UI Design", "Brand Identity"],
  },
];

const accentClasses = {
  primary: {
    title: "group-hover:text-primary",
    badge: "border-primary/20 bg-primary/20 text-primary",
  },
  secondary: {
    title: "group-hover:text-secondary",
    badge: "border-secondary/20 bg-secondary/20 text-secondary",
  },
};

export default function PortfolioSection() {
  return (
    <section className="py-32" id="portfolio">
      <motion.div
        className="mx-auto max-w-7xl px-8"
        initial="hidden"
        viewport={viewport}
        whileInView="visible"
        variants={staggerContainer}
      >
        <motion.div className="mb-16" variants={fadeUp}>
          <h2 className="mb-4 font-headline text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Selected Works
          </h2>
          <div className="beam" />
        </motion.div>
        <motion.div
          className="grid gap-12 md:grid-cols-2"
          variants={staggerContainer}
        >
          {works.map((work) => {
            const accent = accentClasses[work.accent];

            return (
              <motion.article
                className="group cursor-pointer"
                key={work.title}
                variants={fadeUp}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="glass-card relative mb-6 aspect-[16/10] overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.015 }}
                >
                  <motion.div
                    className="relative h-full w-full"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      alt={work.alt}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      src={work.image}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    {work.tags.map((tag) => (
                      <motion.span
                        className={`rounded-full border px-3 py-1 text-xs backdrop-blur-md ${accent.badge}`}
                        key={tag}
                        whileHover={{ y: -2, scale: 1.04 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                <h3
                  className={`font-headline text-2xl font-bold text-white transition-colors ${accent.title}`}
                >
                  {work.title}
                </h3>
                <p className="text-on-surface-variant">{work.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
