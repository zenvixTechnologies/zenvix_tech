import Icon from "./Icon";
import Marquee from "./motion/Marquee";
import { Reveal } from "./motion/Reveal";
import SplitText from "./motion/SplitText";

const technologies = [
  { label: "React", icon: "developer_board" },
  { label: "Next.js", icon: "deployed_code" },
  { label: "JS / TS", icon: "javascript" },
  { label: "Flutter", icon: "flutter" },
  { label: "Java", icon: "java" },
  { label: "Spring Boot", icon: "springboot" },
  { label: "Node.js", icon: "nodejs" },
  { label: "Express.js", icon: "expressjs" },
  { label: "MongoDB", icon: "mongodb" },
  { label: "PostgreSQL", icon: "postgresql" },
  { label: "REST / GraphQL", icon: "api" },
  { label: "Premiere Pro", icon: "premiere" },
];

const rows = [technologies.slice(0, 6), technologies.slice(6)];

function TechItem({ tech, outlined }) {
  return (
    <span className="group/tech flex items-center gap-5 px-6 md:gap-7 md:px-10">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line text-2xl text-silver transition-all duration-500 group-hover/tech:rotate-12 group-hover/tech:border-violet group-hover/tech:text-violet md:h-20 md:w-20 md:text-4xl">
        <Icon name={tech.icon} />
      </span>
      <span
        className={`whitespace-nowrap py-[0.14em] font-display text-[clamp(2.25rem,6vw,6rem)] font-bold leading-none tracking-[-0.045em] transition-colors duration-500 ${
          outlined
            ? "text-transparent [-webkit-text-stroke:1px_rgba(201,204,216,0.55)] group-hover/tech:text-fg"
            : "text-fg group-hover/tech:text-violet"
        }`}
      >
        {tech.label}
      </span>
    </span>
  );
}

export default function TechStackSection() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink-soft py-24 md:py-40" id="tech">
      <div className="shell mb-14 grid gap-8 md:mb-24 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="label mb-6 text-muted">(03) — Tech Stack</p>
          <SplitText
            as="h2"
            className="font-display text-big font-bold"
            text="The Engine Under the Hood"
          />
        </div>
        <Reveal className="md:col-span-4 md:justify-self-end">
          <p className="label text-muted">{technologies.length} core technologies</p>
        </Reveal>
      </div>

      {/* Visual marquee; the plain list below is what assistive tech reads */}
      <div aria-hidden="true" className="space-y-6 md:space-y-10">
        {rows.map((row, index) => (
          <Marquee duration={44} key={index} pausable reverse={index === 1}>
            {row.map((tech) => (
              <TechItem key={tech.label} outlined={index === 1} tech={tech} />
            ))}
          </Marquee>
        ))}
      </div>
      <ul className="sr-only">
        {technologies.map((tech) => (
          <li key={tech.label}>{tech.label}</li>
        ))}
      </ul>
    </section>
  );
}
