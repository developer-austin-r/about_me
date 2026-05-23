"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { PORTFOLIO_DATA } from "@/data";

const categories = [
  { key: "frontend",  label: "Frontend" },
  { key: "backend",   label: "Backend" },
  { key: "database",  label: "Database" },
  { key: "devops",    label: "DevOps & Cloud" },
  { key: "tools",     label: "Tools" },
  { key: "languages", label: "Languages" },
] as const;

type CategoryKey = typeof categories[number]["key"];

export default function Skills() {
  const [active, setActive] = useState<CategoryKey>("frontend");

  const skills = PORTFOLIO_DATA.skills[active];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeader title="Technical Skills" subtitle="Technologies I work with" />

        {/* Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat.key
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200 glass border border-white/10"
              }`}
            >
              {active === cat.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl glass border border-white/5 hover:border-purple-500/30 hover:bg-white/5 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(139,92,246,0.2)]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {skill.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-black">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-400 group-hover:text-slate-200 text-center leading-tight transition-colors font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
