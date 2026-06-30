"use client";

import { motion } from "framer-motion";

const team = [
  { initials: "CW", name: "ContentWhizz", title: "Creative Direction" },
  { initials: "CS", name: "Content Team",  title: "Senior Writers"    },
  { initials: "DS", name: "Design Studio", title: "Visual Creators"   },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-white/35 mb-6">[ WHO WE ARE ]</p>
            <blockquote className="font-display italic text-white leading-tight mb-8"
              style={{ fontSize: "clamp(28px,4vw,48px)" }}>
              "Cheers to quality content."
            </blockquote>
            <p className="text-[15px] text-white/45 leading-relaxed mb-6">
              ContentWhizz is a premium content writing service based in <strong className="text-white">Surat, Gujarat</strong>. Our team carries <strong className="text-white">15+ years of combined expertise</strong> in writing, publishing, design and strategy — serving businesses across India and globally.
            </p>
            <p className="text-[15px] text-white/45 leading-relaxed">
              We're creators — a unison of professionals delivering unparalleled, super-crisp content. Our tagline <strong className="text-white">"We create, you grow"</strong> mirrors our fundamental commitment to your business growth.
            </p>

            <div className="flex gap-5 mt-10">
              {team.map((t) => (
                <div key={t.name} className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full glass-light flex items-center justify-center border border-white/10">
                    <span className="font-mono text-[12px] text-white font-bold">{t.initials}</span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-eyebrow text-white/60 text-center">{t.name}</p>
                  <p className="font-mono text-[10px] text-white/30 text-center">{t.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }}
            className="glass-card rounded-3xl p-8 md:p-10 space-y-5">
            {[
              ["Total Content Solution", "From strategy to execution — blogs, social, video scripts, translation, press releases and design under one roof."],
              ["Quality Guaranteed", "Every piece of content is reviewed for accuracy, originality and brand alignment before delivery."],
              ["Mobile-Friendly Content", "Content crafted with readability and engagement in mind across all devices and platforms."],
              ["Audience-Resonant Writing", "We research your audience first, then write content that speaks directly to their needs."],
            ].map(([title, desc]) => (
              <div key={title as string} className="flex gap-4 pb-5 border-b border-white/[0.06] last:border-0 last:pb-0">
                <div className="w-1 h-full min-h-[40px] rounded-full bg-white/15 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[14px] font-semibold text-white mb-1">{title}</p>
                  <p className="text-[13px] text-white/40 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
            <div className="pt-2 flex flex-wrap gap-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-white/30">Founded</p>
                <p className="text-[14px] font-semibold text-white mt-1">June 2016</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-white/30">Location</p>
                <p className="text-[14px] font-semibold text-white mt-1">Surat, Gujarat, India</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-white/30">Service Area</p>
                <p className="text-[14px] font-semibold text-white mt-1">India & Global (Remote)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
