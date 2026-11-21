"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Icon from "./Icon";
import ImageReveal from "./motion/ImageReveal";
import SharedTransition from "./motion/SharedTransition";
import SplitText from "./motion/SplitText";
import { ease, viewport } from "./motionPresets";

const revealDirections = ["up", "left", "right"];

function ProjectRow({ project, index }) {
  const flipped = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <li>
      <Link
        aria-label={`Open details for ${project.title}`}
        className="group grid items-end gap-6 md:grid-cols-12 md:gap-8"
        data-cursor="view"
        data-cursor-label="View"
        href={`/zenvix/projects/${project.slug}`}
      >
        <div className={`md:col-span-8 ${flipped ? "md:order-2 md:col-start-5" : ""}`}>
          <SharedTransition name={`project-${project.slug}`}>
            <ImageReveal
              alt={project.alt}
              className="aspect-video rounded-[var(--radius-card)]"
              direction={revealDirections[index % revealDirections.length]}
              hoverZoom
              parallax={4}
              sizes="(max-width: 768px) 100vw, 66vw"
              src={project.image}
            />
          </SharedTransition>
        </div>

        <motion.div
          className={`flex flex-col gap-5 md:col-span-4 ${flipped ? "md:order-1 md:col-start-1 md:row-start-1" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
          viewport={viewport}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between border-b border-line pb-4">
            <span className="label text-muted">({number})</span>
            <span className="label text-violet">{`{${project.eyebrow}}`}</span>
          </div>
          <h3 className="font-display text-big font-bold transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-2">
            {project.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted">{project.overview}</p>
          <ul className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <li
                className="rounded-full border border-line px-3 py-1 text-xs text-silver transition-colors duration-500 group-hover:border-white/20"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
          <span className="mt-2 inline-flex items-center gap-3 font-display text-sm font-bold">
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-line transition-colors duration-500 group-hover:border-transparent group-hover:bg-fg group-hover:text-ink">
              <Icon
                className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-8"
                name="arrow_right"
              />
              <Icon
                className="absolute -translate-x-8 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0"
                name="arrow_right"
              />
            </span>
            <span className="link-line">View Details</span>
          </span>
        </motion.div>
      </Link>
    </li>
  );
}

/** `projects` holds only the card fields (see toPortfolioCard in ZenvixPage). */
export default function PortfolioSection({ projects }) {
  return (
    <section
      className="relative z-20 -mt-[var(--radius-section)] rounded-t-[var(--radius-section)] bg-ink pb-24 pt-28 md:pb-40 md:pt-40"
      id="portfolio"
    >
      <div className="shell">
        <div className="mb-16 grid gap-8 md:mb-28 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="label mb-6 text-muted">(02) — Selected Works</p>
            <SplitText as="h2" className="font-display text-huge font-bold" text="Our clients" />
          </div>
          <p className="text-lead max-w-sm text-muted md:col-span-4 md:justify-self-end">
            Real products shipped for real businesses — from EdTech platforms and
            news media to engineering brands and home-care services.
          </p>
        </div>

        <ol className="space-y-24 md:space-y-40">
          {projects.map((project, index) => (
            <ProjectRow index={index} key={project.slug} project={project} />
          ))}
        </ol>
      </div>
    </section>
  );
}
