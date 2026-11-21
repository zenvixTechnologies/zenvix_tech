"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Icon from "./Icon";
import ImageReveal from "./motion/ImageReveal";
import SharedTransition from "./motion/SharedTransition";
import SplitText from "./motion/SplitText";
import { ease, viewport } from "./motionPresets";

const revealDirections = ["up", "left", "right"];

const pad = (value) => String(value).padStart(2, "0");

function ProjectRow({ project, index, total }) {
  const flipped = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="max-md:w-[82vw] max-md:max-w-[380px] max-md:shrink-0 max-md:snap-start">
      <Link
        aria-label={`Open details for ${project.title}`}
        className="m-press group grid items-end gap-6 md:grid-cols-12 md:gap-8 max-md:flex max-md:h-full max-md:flex-col max-md:items-stretch max-md:gap-0 max-md:overflow-hidden max-md:rounded-[1.5rem] max-md:border max-md:border-line max-md:bg-ink-soft"
        data-cursor="view"
        data-cursor-label="View"
        href={`/zenvix/projects/${project.slug}`}
      >
        <div className={`md:col-span-8 max-md:relative ${flipped ? "md:order-2 md:col-start-5" : ""}`}>
          <SharedTransition name={`project-${project.slug}`}>
            <ImageReveal
              alt={project.alt}
              className="aspect-video rounded-[var(--radius-card)] max-md:rounded-none"
              direction={revealDirections[index % revealDirections.length]}
              hoverZoom
              parallax={4}
              sizes="(max-width: 768px) 100vw, 66vw"
              src={project.image}
            />
          </SharedTransition>
          <span className="label absolute left-3 top-3 z-10 rounded-full border border-white/15 bg-ink/70 px-3 py-1.5 text-[0.65rem] text-fg backdrop-blur-md md:hidden">
            {number} / {pad(total)}
          </span>
        </div>

        <motion.div
          className={`flex flex-col gap-5 md:col-span-4 max-md:flex-1 max-md:gap-3 max-md:p-5 ${flipped ? "md:order-1 md:col-start-1 md:row-start-1" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
          viewport={viewport}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between border-b border-line pb-4">
            <span className="label text-muted">({number})</span>
            <span className="label text-violet">{`{${project.eyebrow}}`}</span>
          </div>
          <h3 className="font-display text-big font-bold transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-2 max-md:text-[1.75rem] max-md:group-hover:translate-x-0">
            {project.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted max-md:line-clamp-2">{project.overview}</p>
          <ul className="flex flex-wrap gap-2 max-md:[&>li:nth-child(n+4)]:hidden">
            {project.tags.slice(0, 4).map((tag) => (
              <li
                className="rounded-full border border-line px-3 py-1 text-xs text-silver transition-colors duration-500 group-hover:border-white/20"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
          <span className="mt-2 inline-flex items-center gap-3 font-display text-sm font-bold max-md:mt-auto max-md:pt-2">
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
  // Phones: the list becomes a swipeable, snap-aligned carousel. These handlers
  // only ever fire there (the list never scrolls horizontally on larger screens).
  const trackRef = useRef(null);
  const barRef = useRef(null);
  const frame = useRef(0);
  const [active, setActive] = useState(0);
  const total = projects.length;

  const stride = () => {
    const track = trackRef.current;
    const [first, second] = track?.children ?? [];
    return first && second ? second.offsetLeft - first.offsetLeft : 1;
  };

  const onScroll = () => {
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const track = trackRef.current;
      if (!track) return;
      const max = track.scrollWidth - track.clientWidth;
      const progress = max > 0 ? track.scrollLeft / max : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${(1 + progress * (total - 1)) / total})`;
      }
      setActive(Math.min(total - 1, Math.round(track.scrollLeft / stride())));
    });
  };

  const go = (direction) => trackRef.current?.scrollBy({ left: direction * stride(), behavior: "smooth" });

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

        <ol
          aria-label="Client projects"
          className="space-y-24 md:space-y-40 max-md:no-scrollbar max-md:-mx-[var(--gutter)] max-md:flex max-md:snap-x max-md:snap-mandatory max-md:gap-4 max-md:space-y-0 max-md:overflow-x-auto max-md:scroll-px-[var(--gutter)] max-md:px-[var(--gutter)] max-md:pb-2"
          onScroll={onScroll}
          ref={trackRef}
        >
          {projects.map((project, index) => (
            <ProjectRow index={index} key={project.slug} project={project} total={total} />
          ))}
        </ol>

        {/* Phone carousel controls */}
        <div className="mt-7 flex items-center gap-4 md:hidden">
          <p aria-live="polite" className="label tabular-nums text-fg">
            {pad(active + 1)} <span className="text-muted">/ {pad(total)}</span>
          </p>
          <div aria-hidden="true" className="relative h-px flex-1 overflow-hidden bg-line">
            <div
              className="absolute inset-0 origin-left bg-gradient-to-r from-violet to-blue transition-transform duration-300"
              ref={barRef}
              style={{ transform: `scaleX(${1 / total})` }}
            />
          </div>
          <div className="flex gap-2">
            {[
              { dir: -1, label: "Previous project", icon: "arrow_left", disabled: active === 0 },
              { dir: 1, label: "Next project", icon: "arrow_right", disabled: active === total - 1 },
            ].map((button) => (
              <button
                aria-label={button.label}
                className="m-press flex h-11 w-11 items-center justify-center rounded-full border border-line text-fg transition-opacity disabled:opacity-30"
                disabled={button.disabled}
                key={button.dir}
                onClick={() => go(button.dir)}
                type="button"
              >
                <Icon name={button.icon} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
