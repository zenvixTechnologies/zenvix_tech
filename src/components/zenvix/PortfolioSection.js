"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";
import { portfolioProjects } from "./portfolioData";

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
            Our clients
          </h2>
        
          <div className="beam" />
        </motion.div>
        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          variants={fadeUp}
        >
          {portfolioProjects.map((project) => (
            <Link
              aria-label={`Open details for ${project.title}`}
              className="group block"
              href={`/zenvix/projects/${project.slug}`}
              key={project.slug}
            >
              <motion.article
                className="glass-card overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
                whileHover={{ y: -10 }}
              >
                <div className="border-b border-white/8 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 p-4 sm:p-6">
                  <motion.div
                    className="relative h-[240px] overflow-hidden rounded-[1.5rem] bg-surface sm:h-[320px]"
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.06 }}
                  >
                    <Image
                      alt={project.alt}
                      className="object-cover object-top"
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      src={project.image}
                    />
                  </motion.div>
                </div>
                <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-primary">
                      {project.eyebrow}
                    </p>
                    <h3 className="font-headline text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs font-semibold text-white/80 backdrop-blur-xl transition-all duration-300 group-hover:border-primary/40 group-hover:text-primary sm:px-4">
                    <span className="sm:hidden">
                      <Icon className="text-base">arrow_outward</Icon>
                    </span>
                    <span className="hidden sm:inline">View Details</span>
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
