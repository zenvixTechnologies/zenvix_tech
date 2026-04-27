import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../../components/zenvix/Footer";
import {
  portfolioProjects,
  portfolioProjectsBySlug,
} from "../../../../components/zenvix/portfolioData";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export const dynamicParams = false;

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = portfolioProjectsBySlug[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="zenvix-theme min-h-screen bg-background text-on-surface">
      <main className="relative overflow-hidden">
        <div className="aurora-blur absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-primary/18" />
        <div className="aurora-blur absolute right-[-6rem] top-1/3 h-80 w-80 rounded-full bg-secondary/16" />

        <section className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:px-8 lg:px-10">
          <Link
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-on-surface-variant backdrop-blur-xl transition-colors hover:border-primary/40 hover:text-primary"
            href="/zenvix#portfolio"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Selected Works
          </Link>

          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              {project.eyebrow}
            </p>
            <h1 className="mb-5 font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="text-base leading-8 text-on-surface-variant sm:text-lg">
              {project.overview}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-headline text-sm font-bold text-on-primary shadow-[0_0_32px_rgba(143,245,255,0.22)] transition-transform hover:scale-[1.02]"
                href={project.liveUrl}
                rel="noreferrer"
                target="_blank"
              >
                View Live Website
              </a>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-on-surface-variant backdrop-blur-xl">
                {project.routeInfo.value}
              </span>
            </div>
          </div>

          <div className="glass-card relative mb-10 overflow-hidden rounded-[2rem] border border-white/10">
            <div className="relative aspect-[16/9]">
              <Image
                alt={project.alt}
                className="object-cover object-top"
                fill
                priority
                sizes="100vw"
                src={project.image}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,18,0.12)_0%,rgba(7,11,18,0.18)_38%,rgba(7,11,18,0.86)_100%)]" />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_320px]">
            <div className="space-y-5">
              <div className="glass-card rounded-[1.6rem] border border-white/10 p-6 sm:p-8">
                <h2 className="mb-4 font-headline text-2xl font-bold text-white">
                  Project Summary
                </h2>
                <p className="text-sm leading-7 text-on-surface-variant sm:text-base">
                  {project.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {project.stats.map((stat) => (
                  <div
                    className="glass-card rounded-[1.4rem] border border-white/10 p-5"
                    key={stat.label}
                  >
                    <div className="mb-2 font-headline text-3xl font-extrabold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-[0.22em] text-on-surface-variant">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="glass-card rounded-[1.6rem] border border-white/10 p-6 sm:p-8">
                  <h2 className="mb-4 font-headline text-2xl font-bold text-white">
                    Core Focus Areas
                  </h2>
                  <div className="grid gap-3">
                    {project.businessAreas.map((item) => (
                      <div
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-on-surface-variant"
                        key={item}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-[1.6rem] border border-white/10 p-6 sm:p-8">
                  <h2 className="mb-4 font-headline text-2xl font-bold text-white">
                    Main Pages
                  </h2>
                  <div className="grid gap-3">
                    {project.pages.map((page) => (
                      <div
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-on-surface-variant"
                        key={page}
                      >
                        {page}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]">
                <div className="glass-card rounded-[1.6rem] border border-white/10 p-6 sm:p-8">
                  <h2 className="mb-4 font-headline text-2xl font-bold text-white">
                    Portfolio Feature List
                  </h2>
                  <div className="grid gap-3">
                    {project.features.map((feature) => (
                      <div
                        className="rounded-2xl border border-primary/10 bg-primary/6 px-4 py-3 text-sm text-on-surface-variant"
                        key={feature}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="glass-card rounded-[1.6rem] border border-white/10 p-6 sm:p-8">
                    <h2 className="mb-4 font-headline text-2xl font-bold text-white">
                      Project Categories
                    </h2>
                    <div className="space-y-3">
                      {project.projectCategories.map((category) => (
                        <div
                          className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-on-surface-variant"
                          key={category}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card rounded-[1.6rem] border border-white/10 p-6 sm:p-8">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-secondary">
                      {project.routeInfo.title}
                    </p>
                    <div className="mb-3 font-mono text-lg text-white">
                      {project.routeInfo.value}
                    </div>
                    <p className="text-sm leading-7 text-on-surface-variant">
                      {project.routeInfo.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {project.notes.map((detail) => (
                  <div
                    className="glass-card rounded-[1.6rem] border border-white/10 p-6 sm:p-8"
                    key={detail.label}
                  >
                    <h3 className="mb-3 font-headline text-xl font-bold text-white">
                      {detail.label}
                    </h3>
                    <p className="text-sm leading-7 text-on-surface-variant sm:text-base">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-[1.6rem] border border-white/10 p-6 sm:p-8">
                <h2 className="mb-5 font-headline text-2xl font-bold text-white">
                  Used Technologies
                </h2>
                <div className="grid gap-4 lg:grid-cols-2">
                  {project.technologies.map((group) => (
                    <div
                      className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5"
                      key={group.label}
                    >
                      <h3 className="mb-3 font-headline text-lg font-bold text-white">
                        {group.label}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-on-surface-variant"
                            key={item}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="glass-card h-fit rounded-[1.6rem] border border-white/10 p-6 sm:p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-secondary">
                Live Experience
              </p>
              <h2 className="mb-4 font-headline text-2xl font-bold text-white">
                {project.liveExperience.title}
              </h2>
              <p className="mb-6 text-sm leading-7 text-on-surface-variant">
                {project.liveExperience.summary}
              </p>
              <div className="space-y-3 text-sm text-on-surface-variant">
                {project.liveExperience.bullets.map((item) => (
                  <div
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <a
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-primary/16"
                href={project.liveUrl}
                rel="noreferrer"
                target="_blank"
              >
                {project.liveExperience.ctaLabel}
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
