"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const links = ["Services", "Work", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-sm shadow-black/5" : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <a href="#" aria-label="ContentWhizz home">
            <Logo className="h-8 w-auto text-[#1D1D1F]" />
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-[13px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-200 font-medium"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1 px-5 py-2 rounded-full text-[13px] font-semibold text-white transition-all duration-200 shadow-md shadow-violet-200"
              style={{ background: "linear-gradient(135deg,#6C47FF,#00C2FF)" }}
            >
              Get Started →
            </a>

            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-5 h-px bg-[#1D1D1F] transition-all duration-300 ${
                    i === 0 && menuOpen ? "rotate-45 translate-y-[6px]" :
                    i === 1 && menuOpen ? "opacity-0" :
                    i === 2 && menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass flex flex-col justify-center items-center gap-8"
          >
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="font-display italic text-[clamp(32px,8vw,52px)] text-[#1D1D1F]"
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
