import Icon from "./Icon";
import Marquee from "./motion/Marquee";
import { site } from "./siteConfig";

/** Brand tagline ribbon, angled slightly to break the grid between sections. */
export default function BrandMarquee() {
  const items = [...site.tagline, ...site.tagline];

  return (
    <div className="relative z-20 -my-6 overflow-hidden py-10 md:-my-10 md:py-14">
      <div className="-mx-4 -rotate-2 bg-gradient-to-r from-violet-deep via-violet to-blue py-4 text-white shadow-[0_30px_80px_-20px_rgba(106,53,242,0.55)] md:py-5">
        <Marquee duration={28}>
          {items.map((word, index) => (
            <span
              className="flex items-center gap-8 pr-8 font-display text-[clamp(1.6rem,3.6vw,3.25rem)] font-bold uppercase tracking-[-0.02em]"
              key={`${word}-${index}`}
            >
              {word}
              <Icon className="text-[0.6em]" name="sparkle" />
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
