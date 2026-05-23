"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#08031d]/92 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
          : "bg-[#030014]/72 py-5 backdrop-blur-xl"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a href="#" className="group flex items-center gap-2 text-2xl font-black tracking-tighter">
          <span className="relative">
            {PORTFOLIO_DATA.hero.name}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-[0_0_22px_rgba(139,92,246,0.16)]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group relative inline-flex items-center overflow-hidden rounded-full border border-purple-300/20 bg-white/10 px-6 py-3 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_40px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-purple-300/40 hover:bg-white/15"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-500/0 via-purple-500/25 to-blue-500/0 transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative">Hire Me</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 border-t border-white/10 bg-[#08031d]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
