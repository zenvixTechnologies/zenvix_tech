import Footer from "./Footer";
import TopNav from "./TopNav";
import EnterText from "./motion/EnterText";
import { Reveal, RevealItem } from "./motion/Reveal";

export default function LegalPage({ title, intro, sections, updated = "November 24, 2026" }) {
  return (
    <div className="relative min-h-screen bg-ink font-sans text-fg">
      <TopNav />
      <main className="relative isolate min-h-[65vh] overflow-hidden pb-24 pt-32 md:pb-36 md:pt-44" id="main">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-violet/10 blur-[120px]" />
        <div className="shell">
          <div className="max-w-4xl">
            <Reveal className="label mb-6 flex items-center gap-3 text-muted">
              <span className="h-px w-8 bg-gradient-to-r from-violet to-blue" />
              Zenvix <span className="text-violet">/</span> Legal
            </Reveal>
            <EnterText as="h1" className="max-w-4xl font-display text-huge font-bold" text={title} />
            <Reveal className="mt-7 flex items-center gap-3 text-sm text-muted" delay={0.2}>
              <span className="rounded-full border border-line bg-white/[0.04] px-3 py-1.5">Last updated {updated}</span>
              <span aria-hidden="true" className="h-px w-10 bg-line" />
              <span>{String(sections.length).padStart(2, "0")} sections</span>
            </Reveal>
            <Reveal className="mt-10 max-w-3xl border-l border-violet/60 pl-5 text-lead text-silver md:pl-7" delay={0.3}>
              {intro}
            </Reveal>
          </div>

          <Reveal className="mt-16 grid max-w-5xl gap-3 md:mt-24 md:grid-cols-2" stagger>
            {sections.map(({ heading, body }, index) => (
              <RevealItem
                as="section"
                className="group relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-white/[0.025] p-6 transition-colors duration-500 hover:border-violet/30 hover:bg-white/[0.045] md:p-8"
                key={heading}
              >
                <span aria-hidden="true" className="absolute right-6 top-5 font-display text-4xl font-bold tracking-[-0.06em] text-white/[0.055] transition-colors group-hover:text-violet/20 md:right-8 md:top-6">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="relative max-w-[80%] font-display text-xl font-bold md:text-2xl">{heading}</h2>
                <p className="relative mt-5 text-sm leading-7 text-muted md:text-base">{body}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
