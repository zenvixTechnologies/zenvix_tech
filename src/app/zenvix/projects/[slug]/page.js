import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/zenvix/Footer";
import Icon from "@/components/zenvix/Icon";
import JsonLd from "@/components/zenvix/JsonLd";
import EnterText from "@/components/zenvix/motion/EnterText";
import ImageReveal from "@/components/zenvix/motion/ImageReveal";
import { Reveal, RevealItem } from "@/components/zenvix/motion/Reveal";
import SharedTransition from "@/components/zenvix/motion/SharedTransition";
import SplitText from "@/components/zenvix/motion/SplitText";
import {
  portfolioProjects,
  portfolioProjectsBySlug,
} from "@/components/zenvix/portfolioData";
import { canonical, caseStudyJsonLd } from "@/components/zenvix/seo";
import { siteUrl } from "@/components/zenvix/siteConfig";
import TopNav from "@/components/zenvix/TopNav";
import WhatsAppButton from "@/components/zenvix/WhatsAppButton";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = portfolioProjectsBySlug[slug];
  if (!project) return {};
  const title = `${project.title} — Case Study`;
  const images = siteUrl ? [{ url: project.image, alt: project.alt }] : undefined;
  return {
    title,
    description: project.overview,
    ...canonical(`/zenvix/projects/${project.slug}`),
    openGraph: { type: "article", title, description: project.overview, images },
    twitter: { card: "summary_large_image", title, description: project.overview, images },
  };
}

const hostOf = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

function SectionLabel({ index, children }) {
  return (
    <p className="label text-muted">
      ({String(index).padStart(2, "0")}) — {children}
    </p>
  );
}

function NumberedList({ items }) {
  return (
    <Reveal as="ol" className="border-t border-line" stagger>
      {items.map((item, index) => (
        <RevealItem
          as="li"
          className="flex gap-5 border-b border-line py-4 text-silver"
          key={item}
        >
          <span className="label w-8 shrink-0 pt-1 text-violet">{String(index + 1).padStart(2, "0")}</span>
          <span className="leading-relaxed">{item}</span>
        </RevealItem>
      ))}
    </Reveal>
  );
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = portfolioProjectsBySlug[slug];

  if (!project) {
    notFound();
  }

  const projectIndex = portfolioProjects.findIndex((item) => item.slug === slug);
  const nextProject = portfolioProjects[(projectIndex + 1) % portfolioProjects.length];

  return (
    <div className="relative min-h-screen bg-ink text-fg">
      <JsonLd data={caseStudyJsonLd(project)} />
      <TopNav />

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden pt-[calc(var(--header-h)+3rem)] md:pt-[calc(var(--header-h)+5rem)]">
          <div
            aria-hidden="true"
            className="orb-a pointer-events-none absolute -right-[15%] -top-[20%] h-[50vmax] w-[50vmax] rounded-full bg-violet-deep/20 blur-[120px]"
          />
          <div className="shell relative">
            <Link
              className="roll-trigger group mb-12 inline-flex items-center gap-3 text-sm font-semibold text-silver transition-colors hover:text-fg md:mb-16"
              href="/zenvix#portfolio"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors group-hover:border-white/30">
                <Icon
                  className="transition-transform duration-500 group-hover:-translate-x-0.5"
                  name="arrow_left"
                />
              </span>
              <span className="roll">
                <span>Back to Selected Works</span>
                <span aria-hidden="true">Back to Selected Works</span>
              </span>
            </Link>

            <p className="label mb-6 text-violet">{`{${project.eyebrow}}`}</p>
            <EnterText as="h1" className="font-display text-huge font-bold" text={project.title} />

            {/* Above the fold: CSS entrance (no hydration wait), same motion as <Reveal stagger>. */}
            <div className="mt-12 grid gap-10 border-t border-line pt-8 md:mt-16 md:grid-cols-12">
              <p className="enter-rise text-lead text-silver md:col-span-7" style={{ "--d": "0.05s", "--rise": "40px" }}>
                {project.overview}
              </p>
              <div className="enter-rise space-y-6 md:col-span-4 md:col-start-9" style={{ "--d": "0.13s", "--rise": "40px" }}>
                <dl className="space-y-4 text-sm">
                  <div className="flex justify-between gap-4 border-b border-line pb-3">
                    <dt className="text-muted">Live site</dt>
                    <dd className="text-right">{hostOf(project.liveUrl)}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-line pb-3">
                    <dt className="text-muted">Stack</dt>
                    <dd className="text-right">{project.routeInfo.value}</dd>
                  </div>
                </dl>
                <a
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-fg py-2 pl-6 pr-2 font-display font-bold text-ink"
                  href={project.liveUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="absolute inset-0 translate-y-full rounded-full bg-gradient-to-r from-violet to-blue transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-y-0" />
                  <span className="relative transition-colors duration-500 group-hover:text-white">
                    View Live Website
                  </span>
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-ink text-fg transition-transform duration-500 group-hover:rotate-45">
                    <Icon name="arrow_outward" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="shell mt-16 md:mt-24">
            <SharedTransition name={`project-${project.slug}`}>
              <ImageReveal
                alt={project.alt}
                className="aspect-video rounded-[var(--radius-card)] bg-ink-raise"
                parallax={4}
                priority
                reveal={false}
                sizes="100vw"
                src={project.image}
              />
            </SharedTransition>
          </div>
        </section>

        {/* Stats */}
        <section aria-label="Key facts" className="shell py-16 md:py-24">
          <Reveal as="dl" className="grid divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0" stagger>
            {project.stats.map((stat) => (
              <RevealItem className="flex flex-col-reverse gap-3 px-0 py-8 sm:px-8 sm:first:pl-0" key={stat.label}>
                <dt className="label text-muted">{stat.label}</dt>
                <dd className="font-display text-big font-bold">{stat.value}</dd>
              </RevealItem>
            ))}
          </Reveal>
        </section>

        {/* Summary */}
        <section className="shell grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <SectionLabel index={1}>Project Summary</SectionLabel>
            </div>
          </div>
          <div className="md:col-span-8">
            <Reveal as="p" className="font-display text-[clamp(1.35rem,2.4vw,2.25rem)] font-medium leading-[1.3] tracking-[-0.02em]">
              {project.summary}
            </Reveal>
            <Reveal className="mt-10 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span className="rounded-full border border-violet/30 bg-violet/10 px-4 py-2 text-xs font-medium text-violet" key={tag}>
                  {tag}
                </span>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Notes */}
        <section className="shell py-16 md:py-24">
          <Reveal className="grid gap-10 md:grid-cols-3 md:gap-8" stagger>
            {project.notes.map((detail, index) => (
              <RevealItem className="border-t border-line pt-6" key={detail.label}>
                <span className="label text-violet">{`{0${index + 1}}`}</span>
                <h2 className="mt-4 font-display text-2xl font-bold tracking-[-0.02em]">{detail.label}</h2>
                <p className="mt-3 leading-relaxed text-muted">{detail.value}</p>
              </RevealItem>
            ))}
          </Reveal>
        </section>

        {/* Focus areas + pages */}
        <section className="shell grid gap-16 py-16 md:grid-cols-2 md:gap-12 md:py-24">
          <div>
            <SectionLabel index={2}>Scope</SectionLabel>
            <h2 className="mb-8 mt-4 font-display text-3xl font-bold tracking-[-0.03em] md:text-4xl">Core Focus Areas</h2>
            <NumberedList items={project.businessAreas} />
          </div>
          <div>
            <SectionLabel index={3}>Structure</SectionLabel>
            <h2 className="mb-8 mt-4 font-display text-3xl font-bold tracking-[-0.03em] md:text-4xl">Main Pages</h2>
            <NumberedList items={project.pages} />
          </div>
        </section>

        {/* Features — paper band */}
        <section className="my-16 rounded-[var(--radius-section)] bg-paper py-20 text-ink md:my-24 md:py-32">
          <div className="shell">
            <div className="mb-12 grid gap-6 md:mb-20 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="label text-muted-dark">(04) — Features</p>
                <SplitText as="h2" className="mt-4 font-display text-big font-bold" text="Portfolio Feature List" />
              </div>
              <p className="label text-muted-dark md:col-span-4 md:justify-self-end">
                ({String(project.features.length).padStart(2, "0")})
              </p>
            </div>
            <Reveal as="ol" className="grid border-t border-line-dark md:grid-cols-2 md:gap-x-12" stagger>
              {project.features.map((feature, index) => (
                <RevealItem
                  as="li"
                  className="group flex gap-5 border-b border-line-dark py-5"
                  key={feature}
                >
                  <span className="label w-8 shrink-0 pt-1 text-violet-deep">{String(index + 1).padStart(2, "0")}</span>
                  <span className="leading-relaxed transition-transform duration-500 group-hover:translate-x-1">{feature}</span>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Categories + architecture */}
        <section className="shell grid gap-16 py-16 md:grid-cols-12 md:gap-10 md:py-24">
          <div className="md:col-span-6">
            <SectionLabel index={5}>Project Categories</SectionLabel>
            <Reveal as="ul" className="mt-8" stagger>
              {project.projectCategories.map((category) => (
                <RevealItem
                  as="li"
                  className="border-b border-line py-4 font-display text-[clamp(1.4rem,2.6vw,2.4rem)] font-semibold leading-tight tracking-[-0.03em]"
                  key={category}
                >
                  {category}
                </RevealItem>
              ))}
            </Reveal>
          </div>
          <Reveal className="md:col-span-5 md:col-start-8 md:self-end">
            <div className="rounded-[var(--radius-card)] border border-line bg-ink-soft p-6 sm:p-8">
              <p className="label text-violet">{project.routeInfo.title}</p>
              <p className="mt-5 rounded-lg border border-line bg-ink px-4 py-3 font-mono text-sm text-fg">
                <span className="text-violet">→ </span>
                {project.routeInfo.value}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted">{project.routeInfo.description}</p>
            </div>
          </Reveal>
        </section>

        {/* Technologies */}
        <section className="shell py-16 md:py-24">
          <SectionLabel index={6}>Stack</SectionLabel>
          <SplitText as="h2" className="mt-4 font-display text-big font-bold" text="Used Technologies" />
          <Reveal as="dl" className="mt-12 border-t border-line md:mt-16" stagger>
            {project.technologies.map((group) => (
              <RevealItem
                className="grid gap-4 border-b border-line py-6 md:grid-cols-12 md:items-center"
                key={group.label}
              >
                <dt className="font-display text-lg font-bold md:col-span-4">{group.label}</dt>
                <dd className="flex flex-wrap gap-2 md:col-span-8">
                  {group.items.map((item) => (
                    <span
                      className="rounded-full border border-line px-3 py-1.5 text-xs text-silver transition-colors hover:border-violet/50 hover:text-fg"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </RevealItem>
            ))}
          </Reveal>
        </section>

        {/* Live experience */}
        <section className="shell py-16 md:py-24">
          <div className="relative overflow-hidden rounded-[var(--radius-section)] bg-gradient-to-br from-violet-deep via-[#4b2bd1] to-blue p-8 text-white sm:p-12 md:p-16">
            <div
              aria-hidden="true"
              className="orb-b pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/15 blur-[80px]"
            />
            <div className="relative grid gap-12 md:grid-cols-12">
              <div className="md:col-span-6">
                <p className="label text-white/70">Live Experience</p>
                <h2 className="mt-4 font-display text-big font-bold">{project.liveExperience.title}</h2>
                <p className="mt-6 max-w-lg leading-relaxed text-white/80">{project.liveExperience.summary}</p>
                <a
                  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 font-display font-bold text-ink"
                  href={project.liveUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {project.liveExperience.ctaLabel}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45">
                    <Icon name="arrow_outward" />
                  </span>
                </a>
              </div>
              <Reveal as="ul" className="space-y-0 md:col-span-6" stagger>
                {project.liveExperience.bullets.map((item, index) => (
                  <RevealItem as="li" className="flex gap-5 border-t border-white/20 py-5 last:border-b" key={item}>
                    <span className="label shrink-0 pt-1 text-white/60">0{index + 1}</span>
                    <span className="leading-relaxed">{item}</span>
                  </RevealItem>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="shell pb-24 pt-8 md:pb-32">
          <Link
            className="group grid items-center gap-8 border-t border-line pt-10 md:grid-cols-12"
            data-cursor="view"
            data-cursor-label="Next"
            href={`/zenvix/projects/${nextProject.slug}`}
          >
            <div className="md:col-span-7">
              <p className="label text-muted">Next project</p>
              <p className="mt-4 flex items-center gap-4 font-display text-huge font-bold transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-3">
                {nextProject.title}
              </p>
              <p className="label mt-4 text-violet">{`{${nextProject.eyebrow}}`}</p>
            </div>
            <div className="md:col-span-5">
              <SharedTransition name={`project-${nextProject.slug}`}>
                <ImageReveal
                  alt={nextProject.alt}
                  className="aspect-video rounded-[var(--radius-card)]"
                  direction="right"
                  parallax={4}
                  hoverZoom
                  sizes="(max-width: 768px) 100vw, 40vw"
                  src={nextProject.image}
                />
              </SharedTransition>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
