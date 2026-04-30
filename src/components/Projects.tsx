// import React from "react";
// import HighlightText from "./HighlightText";
// import { AnimatedTestimonials } from "./ui/animated-testimonials";
// import { testimonials } from "@/data";

// const Projects = () => {
//   return (
//     <div className="max-w-screen-2xl container mx-auto px-6 md:px-20 my-20">
//       <h1 className="text-4xl text-center font-bold mb-2">
//         <HighlightText text="Projects" />
//       </h1>
//       <div className="border-2 border-brand-300 w-[5%] mx-auto md:mb-20 mb-10"></div>
//       <div className="dark:bg-[#131519] bg-[#bce0e8] rounded-3xl dark:shadow-md">
//         <AnimatedTestimonials testimonials={testimonials} />
//       </div>
//     </div>
//   );
// };

// export default Projects;

"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LuRadioTower } from "react-icons/lu";
import HighlightText from "./HighlightText";
import { testimonials } from "@/data";

const Projects = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = testimonials.length;

  const goNext = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + total) % total);
  };

  const goTo = (i: number) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  useEffect(() => {
    const t = setInterval(goNext, 6000);
    return () => clearInterval(t);
  }, [goNext]);

  const current = testimonials[active];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, scale: 0.97 }),
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-16 relative overflow-hidden">
      <div className="pointer-events-none fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-brand-300/5 blur-[80px] z-0" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="md:text-5xl text-4xl font-extrabold">
            <HighlightText text="Projects" />
          </h1>
          <p className="text-lg text-[#888] mt-2">
            Things I&apos;ve built and shipped
          </p>
        </div>
        {/* Main card */}
        <div className="relative overflow-hidden rounded-2xl border border-brand-300/20 dark:bg-white/[0.02] bg-brand-300/[0.08]">
          {/* Top shimmer */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/50 to-transparent z-10" />

          <div className="grid md:grid-cols-[1.1fr_1fr] gap-0">
            {/* Left — Image */}
            <div className="relative h-64 md:h-auto min-h-[340px] overflow-hidden rounded-tl-2xl rounded-bl-2xl">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={active}
                  custom={direction}
                  variants={{
                    enter: (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
                    center: { opacity: 1, x: 0 },
                    exit: (d) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.src}
                    alt={current.name}
                    fill
                    draggable={false}
                    className="object-cover object-center"
                  />
                  {/* dark overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 dark:to-black/50" />
                </motion.div>
              </AnimatePresence>

              {/* Project counter pill */}
              <div className="absolute top-4 left-4 z-10 font-mono text-[0.65rem] uppercase tracking-widest bg-black/40 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg border border-white/10">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </div>
            </div>

            {/* Right — Content */}
            <div className="flex flex-col justify-between p-7 md:p-8">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={active}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex flex-col gap-4 flex-1"
                >
                  {/* Terminal label */}
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-300 shadow-[0_0_8px_#2193b0] animate-pulse" />
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-brand-300">
                      {current.designation}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-extrabold dark:text-white text-black leading-tight">
                    {current.name}
                  </h2>

                  {/* Description */}
                  <p className="text-[0.92rem] leading-7 text-[#555] dark:text-[#bbb] flex-1">
                    {current.quote}
                  </p>

                  {/* CTA buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={current.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-brand-300 via-brand-200 to-brand-100 px-5 py-2.5 rounded-xl font-semibold text-black text-[0.85rem] transition-all duration-250 hover:shadow-[0_0_20px_rgba(33,147,176,0.35)] hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <LuRadioTower className="text-base" />
                      Live
                    </a>
                    <a
                      href={current.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-mono text-[0.8rem] uppercase tracking-widest text-brand-300 border border-brand-300/30 px-5 py-2.5 rounded-xl hover:bg-brand-300/10 transition-all duration-250 hover:-translate-y-0.5"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Nav controls */}
              <div className="flex items-center justify-between mt-8 pt-5 border-t border-brand-300/10">
                {/* Dot indicators */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`rounded-full transition-all duration-300 cursor-pointer ${
                        i === active
                          ? "w-6 h-2 bg-brand-300 shadow-[0_0_6px_#2193b0]"
                          : "w-2 h-2 bg-brand-300/25 hover:bg-brand-300/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={goPrev}
                    className="h-9 w-9 rounded-xl border border-brand-300/20 dark:bg-white/[0.03] bg-brand-300/[0.08] flex items-center justify-center text-brand-300 hover:border-brand-300/50 hover:bg-brand-300/15 transition-all duration-250 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <FaChevronLeft className="text-sm" />
                  </button>
                  <button
                    onClick={goNext}
                    className="h-9 w-9 rounded-xl border border-brand-300/20 dark:bg-white/[0.03] bg-brand-300/[0.08] flex items-center justify-center text-brand-300 hover:border-brand-300/50 hover:bg-brand-300/15 transition-all duration-250 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <FaChevronRight className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative flex-shrink-0 w-36 h-24 overflow-hidden rounded-xl border transition-all duration-250 cursor-pointer ${
                i === active
                  ? "border-brand-300/70 shadow-[0_0_12px_rgba(33,147,176,0.25)] scale-[1.03]"
                  : "border-brand-300/10 opacity-50 hover:opacity-80 hover:border-brand-300/30"
              }`}
            >
              <Image
                src={t.src}
                alt={t.name}
                fill
                className="object-cover object-center"
              />
              {i === active && (
                <div className="absolute inset-0 bg-brand-300/10" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
