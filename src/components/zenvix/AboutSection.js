"use client";

import Icon from "./Icon";
import ImageReveal from "./motion/ImageReveal";
import { Reveal, RevealItem } from "./motion/Reveal";
import SplitText from "./motion/SplitText";

// Currently disabled in ZenvixPage.js — restyled so it matches the system if re-enabled.
const values = [
  {
    title: "Innovation First",
    description: "Always pushing the boundaries of what's possible.",
    icon: "auto_fix_high",
  },
  {
    title: "Premium Quality",
    description: "Attention to detail that borders on the obsessive.",
    icon: "verified_user",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-ink py-24 md:py-40" id="about">
      <div className="shell grid items-center gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="label mb-6 text-muted">About</p>
          <SplitText
            as="h2"
            className="font-display text-big font-bold"
            text="We Are The Architects of Tomorrow's Web."
          />
          <Reveal stagger className="mt-10 space-y-10">
            <RevealItem as="p" className="text-lead max-w-xl text-silver">
              Zenvix is a boutique collective of developers, designers, and
              strategists. We don&apos;t just build websites; we engineer digital
              ecosystems that pulse with life. Our mission is to bridge the gap
              between imagination and execution.
            </RevealItem>
            <RevealItem className="grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
              {values.map((value) => (
                <div className="flex items-start gap-4" key={value.title}>
                  <Icon className="mt-1 text-xl text-violet" name={value.icon} />
                  <div>
                    <h3 className="font-display font-bold">{value.title}</h3>
                    <p className="mt-1 text-sm text-muted">{value.description}</p>
                  </div>
                </div>
              ))}
            </RevealItem>
          </Reveal>
        </div>
        <div className="group md:col-span-5 md:col-start-8">
          <ImageReveal
            alt="diverse team of designers and developers collaborating around a futuristic glass table in a modern studio"
            className="aspect-[4/5] rounded-[var(--radius-card)]"
            direction="center"
            hoverZoom
            imageClassName="object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 40vw"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWO-fMjxk1fuMd7KijxlCSJB_-iUvp1zf-rfS8UHkWMue8_YVBiknskTb-6tfckaeVstQWx9PTp9THyu3JpkdH7-qlYpy5d7TsCZfA39-1It8sMCvvcIHFlxgEzu49YWDr1jDywkYp-2UdZWMKrEWqLA4d3zlxSuzIoQYmEXCEQFnUpgQAvrGGSpueJBydxoPMix4LqZgFREjc5KDb9SSaA34-Z89Qr-35W1Z4hFCMl7PlSHWu1YaZjcRlDHnmP9kjFvjcFPAmGUA0"
          />
        </div>
      </div>
    </section>
  );
}
