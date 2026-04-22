"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Icon from "./Icon";
import { fadeUp, scaleIn, staggerContainer } from "./motionPresets";

const particles = [
  "left-[8%] top-[22%]",
  "left-[18%] top-[74%]",
  "left-[41%] top-[18%]",
  "left-[68%] top-[24%]",
  "left-[83%] top-[68%]",
  "left-[54%] top-[82%]",
  "left-[92%] top-[36%]",
  "left-[30%] top-[55%]",
];

const serviceChips = [
  { label: "Web Dev", icon: "terminal", className: "text-primary" },
  { label: "UI/UX", icon: "architecture", className: "text-secondary" },
  { label: "QA", icon: "verified_user", className: "text-tertiary" },
  { label: "Apps", icon: "dashboard_customize", className: "text-primary" },
];

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const visualY = useTransform(scrollYProgress, [0, 0.35], [0, -42]);
  const cardY = useTransform(scrollYProgress, [0, 0.35], [0, -72]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_18%_20%,rgba(196,127,255,0.22),transparent_30%),radial-gradient(circle_at_78%_38%,rgba(143,245,255,0.18),transparent_28%),linear-gradient(135deg,#02030a_0%,#08111f_46%,#180b2d_100%)] px-0 pt-28 sm:pt-32 lg:pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <motion.div
        animate={{ x: [0, 34, 0], y: [0, -22, 0], opacity: [0.45, 0.8, 0.45] }}
        className="aurora-blur absolute -left-28 top-24 h-[320px] w-[320px] rounded-full bg-secondary/20 sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]"
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ x: [0, -38, 0], y: [0, 24, 0], opacity: [0.4, 0.75, 0.4] }}
        className="aurora-blur absolute -right-24 bottom-8 h-[360px] w-[360px] rounded-full bg-primary/16 sm:h-[460px] sm:w-[460px] lg:h-[620px] lg:w-[620px]"
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {particles.map((position, index) => (
        <motion.span
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.7, 1] }}
          className={`absolute h-1.5 w-1.5 rounded-full bg-primary/80 shadow-[0_0_18px_rgba(143,245,255,0.75)] ${position}`}
          key={position}
          transition={{
            delay: index * 0.28,
            duration: 3.8 + index * 0.22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-20">
        <motion.div
          animate="visible"
          className="max-w-2xl space-y-6 text-center sm:space-y-8 lg:text-left"
          initial="hidden"
          variants={staggerContainer}
        >
          <motion.div
            className="mx-auto inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-primary shadow-[0_0_32px_rgba(143,245,255,0.08)] backdrop-blur-xl sm:px-4 sm:text-sm lg:mx-0"
            variants={fadeUp}
          >
            <Icon className="text-lg">terminal</Icon>
            <span className="truncate">Premium web development agency</span>
          </motion.div>

          <motion.h1
            className="font-headline text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
            variants={fadeUp}
          >
            Build. Design.{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              Launch.
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-xl text-base leading-7 text-on-surface-variant sm:text-lg sm:leading-8 md:text-xl lg:mx-0"
            variants={fadeUp}
          >
            We create high-performance web experiences with cutting-edge
            development, intuitive UI/UX, and scalable web applications.
          </motion.p>

          <motion.div
            className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
            variants={fadeUp}
          >
            <motion.a
              className="rounded-xl bg-primary px-6 py-3.5 text-center font-headline font-bold text-on-primary shadow-[0_0_34px_rgba(143,245,255,0.32)] transition-shadow hover:shadow-[0_0_52px_rgba(143,245,255,0.55)] sm:px-8 sm:py-4"
              href="#contact"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
            </motion.a>
            <motion.a
              className="rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-center font-headline font-bold text-white backdrop-blur-xl transition-colors hover:border-primary/50 hover:bg-primary/10 sm:px-8 sm:py-4"
              href="#portfolio"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3 pt-2 md:grid-cols-4"
            variants={fadeUp}
          >
            {serviceChips.map((chip) => (
              <motion.div
                className="glass-card flex items-center justify-center gap-2 rounded-lg px-3 py-3 text-xs font-semibold text-white sm:text-sm"
                key={chip.label}
                whileHover={{ y: -4 }}
              >
                <Icon className={`text-lg ${chip.className}`}>{chip.icon}</Icon>
                {chip.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate="visible"
          className="relative mx-auto aspect-[16/12] w-full max-w-xl sm:aspect-[16/11] sm:max-w-2xl lg:max-w-none"
          initial="hidden"
          style={{ y: visualY }}
          variants={scaleIn}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/16 via-secondary/12 to-tertiary/12 blur-3xl" />
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 0.5, 0] }}
            className="glass-card absolute inset-x-[4%] bottom-[4%] z-20 rounded-2xl border-white/10 p-3 shadow-[0_24px_90px_rgba(0,0,0,0.45)] sm:inset-x-[7%] sm:bottom-[6%] sm:p-4"
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-xl border border-white/10 bg-[#050914] p-2.5 sm:p-3">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-error" />
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                </div>
                <div className="h-2 w-24 rounded-full bg-white/10" />
              </div>
              <div className="grid gap-3 md:grid-cols-[0.85fr_1.15fr]">
                <div className="rounded-lg border border-primary/15 bg-primary/5 p-3 sm:p-4">
                  <div className="mb-4 h-16 rounded-lg bg-gradient-to-br from-secondary/40 to-primary/20 sm:h-20" />
                  <div className="mb-2 h-2 rounded-full bg-white/30" />
                  <div className="h-2 w-2/3 rounded-full bg-white/15" />
                </div>
                <div className="rounded-lg border border-white/10 bg-black/35 p-3 font-mono text-[10px] leading-5 text-on-surface-variant sm:p-4 sm:text-xs sm:leading-6">
                  <div className="text-primary">
                    const agency = &quot;Zenvix&quot;;
                  </div>
                  <div className="text-secondary">build(webApp);</div>
                  <div className="text-tertiary">test(quality);</div>
                  <div className="inline-flex max-w-full overflow-hidden whitespace-nowrap text-white">
                    <span className="hero-code-type">
                      deploy(&quot;launch-ready&quot;);
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto h-4 w-3/4 rounded-b-2xl bg-gradient-to-b from-surface-bright to-surface-container-low shadow-[0_18px_34px_rgba(0,0,0,0.45)]" />
          </motion.div>

          <motion.div
            className="absolute bottom-[10%] left-[6%] z-10 hidden h-40 w-28 rounded-full bg-gradient-to-b from-primary/24 to-secondary/8 blur-2xl sm:block lg:bottom-[7%] lg:left-[3%] lg:h-52 lg:w-40"
            style={{ y: cardY }}
          />
          <motion.div
            animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
            className="glass-card absolute left-[1%] top-[2%] z-30 hidden w-40 rounded-xl p-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:block md:left-[3%] md:top-[10%] md:w-48 md:p-4"
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
              <Icon className="text-primary">architecture</Icon>
              Wireframe
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-12 rounded-lg border border-dashed border-secondary/40" />
              <div className="h-12 rounded-lg border border-dashed border-primary/40" />
              <div className="col-span-2 h-7 rounded-lg bg-white/10" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 18, 0], rotate: [2, -1, 2] }}
            className="glass-card absolute right-[1%] top-[0%] z-30 hidden w-44 rounded-xl p-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:block md:right-[2%] md:top-[7%] md:w-56 md:p-4"
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold text-white">App Metrics</span>
              <Icon className="text-primary">dashboard_customize</Icon>
            </div>
            <div className="flex h-24 items-end gap-2">
              {[48, 72, 58, 88, 66, 96].map((height) => (
                <motion.span
                  animate={{ height: [`${height - 16}%`, `${height}%`, `${height - 16}%`] }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-secondary to-primary"
                  key={height}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0], opacity: [0.75, 1, 0.75] }}
            className="absolute bottom-[14%] right-[6%] z-40 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary shadow-[0_0_28px_rgba(143,245,255,0.18)] backdrop-blur-xl sm:px-4 sm:py-2 sm:text-sm"
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            QA passed
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
