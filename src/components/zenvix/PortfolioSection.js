"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";
import { featuredProject } from "./portfolioData";

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
        <motion.div variants={fadeUp}>
          <Link
            aria-label={`Open details for ${featuredProject.title}`}
            className="group block"
            href={`/zenvix/projects/${featuredProject.slug}`}
          >
            <motion.article
              className="glass-card overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
              whileHover={{ y: -10 }}
            >
              <div className="border-b border-white/8 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 p-4 sm:p-6">
                <motion.div
                  className="relative h-[240px] overflow-hidden rounded-[1.5rem] bg-surface sm:h-[320px] lg:h-[420px]"
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.06 }}
                >
                  <Image
                    alt={featuredProject.alt}
                    className="object-contain object-center"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    src={featuredProject.image}
                  />
                </motion.div>
              </div>
              <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-primary">
                    {featuredProject.eyebrow}
                  </p>
                  <h3 className="font-headline text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    {featuredProject.title}
                  </h3>
                </div>
                <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-xl transition-all duration-300 group-hover:border-primary/40 group-hover:text-primary">
                  View Details
                </span>
              </div>
            </motion.article>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
