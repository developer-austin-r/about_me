"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10 w-full">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block py-1 px-3 rounded-full glass border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
          >
            👋 Welcome to my portfolio
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          >
            Hi, I&apos;m <span className="text-gradient">{PORTFOLIO_DATA.hero.name}</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6"
          >
            {PORTFOLIO_DATA.hero.role}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-400 max-w-xl mb-10"
          >
            {PORTFOLIO_DATA.hero.tagline} With {PORTFOLIO_DATA.hero.yearsOfExperience} years of experience building modern web applications.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-slate-200 transition-colors"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 glass px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Image/Avatar Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 mt-16 md:mt-0 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Glowing effect behind avatar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-[60px] opacity-40 animate-pulse"></div>
            
            {/* Avatar container */}
            <div className="absolute inset-4 glass rounded-full overflow-hidden border-2 border-white/10 shadow-[0_20px_80px_rgba(59,130,246,0.25)]">
              <Image
                src="/austin.png"
                alt="Austin"
                fill
                priority
                sizes="(min-width: 768px) 418px, 256px"
                className="object-cover object-top"
              />
            </div>
            
            {/* Orbiting elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-white/5 border-dashed"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
