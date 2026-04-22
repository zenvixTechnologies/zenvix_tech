"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { fadeUp, scaleIn, staggerContainer, viewport } from "./motionPresets";

const values = [
  {
    title: "Innovation First",
    description: "Always pushing the boundaries of what's possible.",
    icon: "auto_fix_high",
    color: "text-primary",
  },
  {
    title: "Premium Quality",
    description: "Attention to detail that borders on the obsessive.",
    icon: "verified_user",
    color: "text-secondary",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-surface-container py-32" id="about">
      <motion.div
        className="mx-auto grid max-w-7xl items-center gap-20 px-8 md:grid-cols-2"
        initial="hidden"
        viewport={viewport}
        whileInView="visible"
        variants={staggerContainer}
      >
        <motion.div className="space-y-6" variants={staggerContainer}>
          <motion.h2
            className="font-headline text-4xl leading-tight font-extrabold tracking-tight text-white md:text-5xl"
            variants={fadeUp}
          >
            We Are The Architects of Tomorrow&apos;s Web.
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-on-surface-variant"
            variants={fadeUp}
          >
            Zenvix is a boutique collective of developers, designers, and
            strategists. We don&apos;t just build websites; we engineer digital
            ecosystems that pulse with life. Our mission is to bridge the gap
            between imagination and execution.
          </motion.p>
          <motion.div className="grid grid-cols-2 gap-6 pt-6" variants={fadeUp}>
            {values.map((value) => (
              <motion.div
                className="flex items-start gap-4"
                key={value.title}
                whileHover={{ x: 4 }}
              >
                <Icon className={value.color}>{value.icon}</Icon>
                <div>
                  <h4 className="font-bold text-white">{value.title}</h4>
                  <p className="text-sm text-on-surface-variant">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="relative" variants={scaleIn}>
          <motion.div
            className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-surface">
              <motion.div
                className="relative h-full w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  alt="diverse team of designers and developers collaborating around a futuristic glass table in a modern studio"
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWO-fMjxk1fuMd7KijxlCSJB_-iUvp1zf-rfS8UHkWMue8_YVBiknskTb-6tfckaeVstQWx9PTp9THyu3JpkdH7-qlYpy5d7TsCZfA39-1It8sMCvvcIHFlxgEzu49YWDr1jDywkYp-2UdZWMKrEWqLA4d3zlxSuzIoQYmEXCEQFnUpgQAvrGGSpueJBydxoPMix4LqZgFREjc5KDb9SSaA34-Z89Qr-35W1Z4hFCMl7PlSHWu1YaZjcRlDHnmP9kjFvjcFPAmGUA0"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
