"use client";

import { motion } from "framer-motion";

const wordVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const RING_TEXT = "CONTENT STRATEGY · EDITORIAL · BRAND STORYTELLING · ";
const RING_REPEAT = RING_TEXT.repeat(2);

const line1 = ["We", "make", "brands"];
const line2 = ["worth", "reading."];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Rotating text ring */}
      <div
        className="absolute right-[-60px] md:right-[5%] top-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[420px] md:h-[420px] opacity-[0.15] pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 420 420"
          className="w-full h-full rotate-ring"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circle-path"
              d="M 210,210 m -170,0 a 170,170 0 1,1 340,0 a 170,170 0 1,1 -340,0"
            />
          </defs>
          <text
            fill="#F5F5F5"
            fontFamily="var(--font-jetbrains), monospace"
            fontSize="13"
            letterSpacing="3"
          >
            <textPath href="#circle-path">{RING_REPEAT}</textPath>
          </text>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-24">
        <p className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B] mb-10">
          [ CONTENT MARKETING AGENCY ]
        </p>

        <h1
          className="font-display leading-[0.92] tracking-[-0.03em] text-[#F5F5F5]"
          style={{ fontSize: "clamp(52px, 9vw, 130px)" }}
        >
          {/* Line 1 — italic */}
          <span className="block">
            {line1.map((w, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariant}
                initial="hidden"
                animate="visible"
                className="italic"
              >
                {w}{" "}
              </motion.span>
            ))}
          </span>
          {/* Line 2 — bold upright */}
          <span className="block">
            {line2.map((w, i) => (
              <motion.span
                key={i}
                custom={line1.length + i}
                variants={wordVariant}
                initial="hidden"
                animate="visible"
                className="font-bold not-italic"
              >
                {w}{i < line2.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 text-[16px] text-[#6B6B6B] max-w-md leading-relaxed"
        >
          Strategic content that builds authority, trust, and growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-8 flex items-center gap-8"
        >
          <a
            href="#work"
            className="group relative text-[15px] text-[#F5F5F5] font-medium"
            aria-label="See Our Work"
          >
            See Our Work →
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-300" />
          </a>
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6B6B6B]">
            ↓ Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
