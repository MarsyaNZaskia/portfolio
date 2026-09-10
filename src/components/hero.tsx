"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden px-5 pt-32 pb-16 md:px-10"
    >
      <motion.div
        className="absolute left-[8%] top-[25%] h-3 w-3 rounded-full bg-pink"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <motion.div
        className="absolute right-[12%] top-[30%] text-2xl text-cherry"
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ✦
      </motion.div>

      <motion.div
        className="absolute bottom-[18%] right-[20%] text-xl text-pink"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ♡
      </motion.div>

      <div className="mx-auto w-full max-w-4xl">
        <div className="flex flex-col items-center justify-center gap-12 text-center">
          <div className="flex flex-col items-center">
            <motion.p
              className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-cherry"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Information Systems Student · RPL Graduate
            </motion.p>

            <motion.h1
              className="text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.85] tracking-[-0.06em]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              HI, I&apos;M
              <br />
              <span className="font-display font-normal italic text-pink">
                Marsya.
              </span>
            </motion.h1>

            <motion.div
              className="mt-10 flex flex-col items-center gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p className="max-w-xl text-base leading-relaxed text-black/60 md:text-lg">
                A tech-minded creative with a background in software development,
                digital commerce, content creation, and customer experience.
              </p>

              <a
                href="#work"
                className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-pink"
              >
                Explore my project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-5 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-black/40 md:left-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-pink" />
        Open to opportunities
      </motion.div>
    </section>
  );
}