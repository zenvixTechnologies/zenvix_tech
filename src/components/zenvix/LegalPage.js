import Link from "next/link";
import Footer from "./Footer";
import Icon from "./Icon";
import LegalToc from "./LegalToc";
import EnterText from "./motion/EnterText";
import { Reveal, RevealItem } from "./motion/Reveal";
import { site, whatsappLink } from "./siteConfig";
import TopNav from "./TopNav";
import WhatsAppButton from "./WhatsAppButton";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const pad = (n) => String(n).padStart(2, "0");

export default function LegalPage({ eyebrow, title, intro, sections, related, updated = "November 24, 2026" }) {
  const items = sections.map((section) => ({ ...section, id: slugify(section.heading) }));
  const words = sections.reduce((total, { body }) => total + body.split(/\s+/).length, intro.split(/\s+/).length);
  const minutes = Math.max(1, Math.round(words / 200));

  return (
    <div className="relative min-h-screen bg-ink font-sans text-fg">
      <TopNav />

      <main id="main">
        {/* Hero */}
        <section
          className="relative overflow-hidden pb-20 pt-[calc(var(--header-h)+3rem)] md:pb-28 md:pt-[calc(var(--header-h)+5rem)]"
          data-fab-hide
        >
          <div
            aria-hidden="true"
            className="orb-a pointer-events-none absolute -right-[15%] -top-[20%] h-[50vmax] w-[50vmax] rounded-full bg-violet-deep/20 blur-[120px] max-md:hidden"
          />
          <div aria-hidden="true" className="m-glow pointer-events-none absolute -right-1/3 -top-1/4 h-[80vw] w-[80vw] md:hidden" />

          <div className="shell relative">
            <Link
              className="roll-trigger group mb-12 inline-flex items-center gap-3 text-sm font-semibold text-silver transition-colors hover:text-fg md:mb-16"
              href="/zenvix"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors group-hover:border-white/30">
                <Icon className="transition-transform duration-500 group-hover:-translate-x-0.5" name="arrow_left" />
              </span>
              <span className="roll">
                <span>Back to Home</span>
                <span aria-hidden="true">Back to Home</span>
              </span>
            </Link>

            <p className="label mb-6 text-violet">{`{Legal — ${eyebrow}}`}</p>
            <EnterText as="h1" className="font-display text-huge font-bold" text={title} />

            <div className="mt-12 grid gap-10 border-t border-line pt-8 md:mt-16 md:grid-cols-12">
              <p className="enter-rise text-lead text-silver md:col-span-7" style={{ "--d": "0.05s", "--rise": "40px" }}>
                {intro}
              </p>
              <dl className="enter-rise space-y-4 text-sm md:col-span-4 md:col-start-9" style={{ "--d": "0.13s", "--rise": "40px" }}>
                {[
                  ["Last updated", updated],
                  ["Sections", pad(sections.length)],
                  ["Reading time", `${minutes} min`],
                ].map(([term, value]) => (
                  <div className="flex justify-between gap-4 border-b border-line pb-3" key={term}>
                    <dt className="text-muted">{term}</dt>
                    <dd className="text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="relative z-10 rounded-[var(--radius-section)] bg-paper pb-20 pt-20 text-ink md:pb-32 md:pt-28">
          <div className="shell grid gap-12 md:grid-cols-12 md:gap-8">
            <aside className="md:col-span-4 lg:col-span-3 max-md:hidden">
              <div className="sticky top-[calc(var(--header-h)+2rem)]">
                <LegalToc items={items.map(({ id, heading }) => ({ id, heading }))} />
              </div>
            </aside>

            <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
              <ol>
                {items.map(({ id, heading, body }, index) => (
                  <Reveal
                    as="li"
                    className="grid scroll-mt-[calc(var(--header-h)+1rem)] gap-x-8 gap-y-4 border-t border-line-dark py-10 last:border-b md:grid-cols-[4rem_1fr] md:py-12"
                    id={id}
                    key={id}
                  >
                    <span className="label pt-2 text-violet-deep">{`{${pad(index + 1)}}`}</span>
                    <div>
                      <h2 className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                        {heading}
                      </h2>
                      <p className="mt-5 max-w-2xl text-base leading-[1.8] text-muted-dark md:text-[1.05rem]">{body}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>

              {/* Questions + related */}
              <Reveal className="mt-14 grid gap-3 md:mt-20 md:grid-cols-5" stagger>
                <RevealItem className="relative overflow-hidden rounded-[var(--radius-card)] bg-ink p-7 text-fg md:col-span-3 md:p-9">
                  <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-deep/30 blur-[80px]" />
                  <p className="label relative text-muted">Questions?</p>
                  <p className="relative mt-4 font-display text-2xl font-bold leading-tight md:text-3xl">
                    Talk to a <span className="font-serif font-normal italic text-gradient pr-[0.05em]">real person</span>.
                  </p>
                  <div className="relative mt-7 flex flex-wrap items-center gap-3">
                    <a
                      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-fg py-2 pl-5 pr-2 font-display text-sm font-bold text-ink"
                      href={`mailto:${site.email}`}
                    >
                      <span className="absolute inset-0 translate-y-full rounded-full bg-gradient-to-r from-violet to-blue transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-y-0" />
                      <span className="relative transition-colors duration-500 group-hover:text-white">Email us</span>
                      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-ink text-fg transition-transform duration-500 group-hover:rotate-45">
                        <Icon name="arrow_outward" />
                      </span>
                    </a>
                    <a
                      className="link-line text-sm text-silver transition-colors hover:text-fg"
                      href={whatsappLink(`Hi Zenvix, I have a question about your ${title}.`)}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      or message on WhatsApp
                    </a>
                  </div>
                </RevealItem>

                {related && (
                  <RevealItem className="md:col-span-2">
                    <Link
                      className="m-press group flex h-full flex-col justify-between gap-10 rounded-[var(--radius-card)] border border-line-dark p-7 transition-colors duration-500 hover:border-transparent hover:bg-white/60 md:p-9"
                      href={related.href}
                    >
                      <p className="label text-muted-dark">Also read</p>
                      <span className="flex items-end justify-between gap-4">
                        <span className="font-display text-2xl font-bold leading-tight md:text-3xl">{related.label}</span>
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-dark transition-all duration-700 ease-[var(--ease-out-expo)] group-hover:rotate-45 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-violet group-hover:to-blue group-hover:text-white">
                          <Icon name="arrow_outward" />
                        </span>
                      </span>
                    </Link>
                  </RevealItem>
                )}
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
