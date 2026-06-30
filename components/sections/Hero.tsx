"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TYPED_WORDS = [
  "Content Writing",
  "Brand Stories",
  "SEO Articles",
  "Social Media",
  "Video Scripts",
  "Thought Leadership",
];

const floatingCards = [
  { icon: "✍️", label: "Content Writing", sub: "500+ pieces/month", cls: "float-a top-[12%] right-[8%]" },
  { icon: "📈", label: "SEO Growth",       sub: "+320% organic traffic", cls: "float-b top-[48%] right-[2%]" },
  { icon: "🎨", label: "Brand Design",     sub: "Visual storytelling",   cls: "float-c bottom-[18%] right-[14%]" },
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayd] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TYPED_WORDS[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayd(target.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayd(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % TYPED_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16" aria-label="Hero">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-120px] right-[-80px] w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(108,71,255,0.18) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-80px] left-[-60px] w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(0,194,255,0.18) 0%, transparent 70%)" }} />
      </div>

      {/* Floating glass cards — desktop only */}
      <div className="hidden lg:block" aria-hidden="true">
        {floatingCards.map((c) => (
          <div key={c.label} className={`glass-card absolute z-10 px-4 py-3 rounded-2xl w-48 ${c.cls}`}>
            <p className="text-xl mb-1">{c.icon}</p>
            <p className="text-[13px] font-semibold text-[#1D1D1F]">{c.label}</p>
            <p className="text-[11px] text-[#6E6E73] mt-0.5">{c.sub}</p>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6C47FF] mb-6 font-medium"
        >
          ✦ Premium Content Agency · Since 2016 · Surat, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="font-display leading-[1.0] tracking-[-0.02em] text-[#1D1D1F]"
          style={{ fontSize: "clamp(44px, 8vw, 110px)" }}
        >
          We Create
          <br />
          <span className="gradient-text">You Grow.</span>
        </motion.h1>

        {/* Typing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-8 flex items-center gap-3"
          aria-live="polite"
          aria-label={`Specializing in ${displayed}`}
        >
          <span className="text-[#6E6E73] text-[18px] md:text-[22px] font-medium">Specializing in</span>
          <span className="text-[18px] md:text-[22px] font-semibold text-[#1D1D1F]">
            {displayed}
            <span className="cursor-blink ml-0.5 text-[#6C47FF]">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-[16px] text-[#6E6E73] max-w-xl leading-relaxed"
        >
          A unison of professionals in Surat creating unparalleled, super-crisp content for all kinds of businesses — content writing, graphics, video, social media & more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-white shadow-lg shadow-violet-200 hover:shadow-violet-300 transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg,#6C47FF,#00C2FF)" }}
          >
            Start a Project →
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-[#1D1D1F] glass hover:shadow-md transition-all duration-300"
          >
            See Our Work
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-14 flex flex-wrap gap-4"
        >
          {["8+ Years Experience", "500+ Happy Clients", "Mon–Sat 10–7 PM"].map((badge) => (
            <span
              key={badge}
              className="glass px-4 py-2 rounded-full text-[12px] text-[#6E6E73] font-medium"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
