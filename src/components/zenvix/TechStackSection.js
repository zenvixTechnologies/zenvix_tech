"use client";

import { motion } from "framer-motion";
import Icon from "./Icon";
import { fadeUp, staggerContainer, viewport } from "./motionPresets";

const technologies = [
  { label: "React", icon: "developer_board", filled: true },
  { label: "Next.js", icon: "deployed_code" },
  { label: "JS / TS", icon: "javascript" },
  { label: "Node.js", icon: "nodejs" },
  { label: "Express.js", icon: "expressjs" },
  { label: "MongoDB", icon: "mongodb" },
  { label: "PostgreSQL", icon: "postgresql" },
  { label: "REST / GraphQL", icon: "api" },
];

export default function TechStackSection() {
  return (
    <section className="py-32" id="tech">
      <motion.div
        className="mx-auto max-w-7xl px-8 text-center"
        initial="hidden"
        viewport={viewport}
        whileInView="visible"
        variants={staggerContainer}
      >
        <motion.h2
          className="mb-16 font-headline text-3xl font-bold text-white"
          variants={fadeUp}
        >
          The Engine Under the Hood
        </motion.h2>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 md:gap-24"
          variants={staggerContainer}
        >
          {technologies.map((technology) => (
            <motion.div
              className="flex flex-col items-center gap-4"
              key={technology.label}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon className="text-5xl" filled={technology.filled}>
                  {technology.icon}
                </Icon>
              </motion.div>
              <span className="font-headline text-sm font-bold tracking-widest uppercase">
                {technology.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
