"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = ["Content Writing", "Social Media", "Graphics & Design", "Film & Video", "Translation", "Other"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls = "w-full glass rounded-xl px-4 py-3 text-[14px] text-[#1D1D1F] placeholder-[#6E6E73] focus:outline-none focus:ring-2 focus:ring-violet-400/40 transition-all";

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-[#6C47FF] mb-4">[ GET IN TOUCH ]</p>
            <h2
              className="font-display italic text-[#1D1D1F] leading-tight mb-6"
              style={{ fontSize: "clamp(32px,5vw,62px)" }}
            >
              Let's create something great together.
            </h2>
            <p className="text-[15px] text-[#6E6E73] leading-relaxed mb-10">
              Ready to grow your business with premium content? Drop us a message and we'll get back to you within one business day.
            </p>

            <div className="space-y-5">
              {[
                { icon: "📞", label: "Phone", value: "090162 49312", href: "tel:09016249312" },
                { icon: "📞", label: "WhatsApp", value: "096382 80338", href: "tel:09638280338" },
                { icon: "🌐", label: "Website", value: "contentwhizz.in", href: "http://www.contentwhizz.in/" },
                { icon: "📍", label: "Location", value: "Surat, Gujarat, India", href: null },
                { icon: "🕐", label: "Hours", value: "Mon–Sat  10:00 – 19:00 IST", href: null },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="glass-card w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-eyebrow text-[#6E6E73]">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-[14px] font-semibold text-[#1D1D1F] hover:text-[#6C47FF] transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-[14px] font-semibold text-[#1D1D1F]">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="text-5xl">🎉</div>
                <h3 className="font-display italic text-[26px] text-[#1D1D1F]">Message sent!</h3>
                <p className="text-[#6E6E73] text-[14px]">We'll get back to you within one business day.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                  className="mt-4 text-[13px] text-[#6C47FF] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display italic text-[22px] text-[#1D1D1F] mb-6">Send us a message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-eyebrow text-[#6E6E73] block mb-1.5">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-eyebrow text-[#6E6E73] block mb-1.5">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-eyebrow text-[#6E6E73] block mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-eyebrow text-[#6E6E73] block mb-1.5">Service Needed</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={inputCls}
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-eyebrow text-[#6E6E73] block mb-1.5">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project, goals, and timeline…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-[14px] font-semibold text-white shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:scale-[1.02] transition-all duration-200"
                  style={{ background: "linear-gradient(135deg,#6C47FF,#00C2FF)" }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
