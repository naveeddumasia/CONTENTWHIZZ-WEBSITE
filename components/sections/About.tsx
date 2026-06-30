"use client";

import { motion } from "framer-motion";

const team = [
  { initials: "CW", name: "ContentWhizz", title: "Creative Director", g: "from-violet-500 to-blue-400" },
  { initials: "CS", name: "Content Team",  title: "Senior Writers",    g: "from-blue-400 to-cyan-400" },
  { initials: "DS", name: "Design Studio", title: "Visual Creators",   g: "from-cyan-400 to-teal-400" },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6C47FF] mb-6">[ WHO WE ARE ]</p>
            <blockquote
              className="font-display italic text-[#1D1D1F] leading-tight mb-8"
              style={{ fontSize: "clamp(28px,4vw,48px)" }}
            >
              "Cheers to quality content."
            </blockquote>

            <div className="flex gap-5 mt-10">
              {team.map((t) => (
                <div key={t.name} className="flex flex-col items-center gap-2">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.g} flex items-center justify-center shadow-lg`}>
                    <span className="font-mono text-[12px] text-white font-bold">{t.initials}</span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-eyebrow text-[#1D1D1F] text-center">{t.name}</p>
                  <p className="font-mono text-[10px] text-[#6E6E73] text-center">{t.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="glass-card rounded-3xl p-8 md:p-10 space-y-5"
          >
            <p className="text-[15px] text-[#6E6E73] leading-relaxed">
              ContentWhizz is a content writing service based in <strong className="text-[#1D1D1F]">Surat, Gujarat</strong> that offers premium content writing services. Our team comprises the best content writers in Surat and other professionals who have mastery in graphics, film & video, translation, and social media.
            </p>
            <p className="text-[15px] text-[#6E6E73] leading-relaxed">
              We're creators — a unison of professionals creating unparalleled, super-crisp content for all kinds of businesses. Our tagline <strong className="text-[#1D1D1F]">"We create, you grow"</strong> mirrors our very fundamental quality: helping you grow your business.
            </p>
            <p className="text-[15px] text-[#6E6E73] leading-relaxed">
              Our team's collective efforts result in super-content that befits clients' goals and often far exceeds them. ContentWhizz is all about quality.
            </p>
            <div className="pt-4 border-t border-black/5 flex flex-wrap gap-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-[#6E6E73]">Founded</p>
                <p className="text-[14px] font-semibold text-[#1D1D1F] mt-1">June 2016</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-[#6E6E73]">Location</p>
                <p className="text-[14px] font-semibold text-[#1D1D1F] mt-1">Surat, Gujarat, India</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-[#6E6E73]">Service Area</p>
                <p className="text-[14px] font-semibold text-[#1D1D1F] mt-1">India & Global (Remote)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
