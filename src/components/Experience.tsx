"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { PORTFOLIO_DATA } from "@/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader title="Experience" subtitle="My professional journey" />
        
        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent block md:hidden" />

          <div className="flex flex-col gap-12">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col md:flex-row items-start"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full glass border border-purple-500/50 flex items-center justify-center z-10 bg-[#030014]">
                  <Briefcase size={16} className="text-purple-400" />
                </div>
                
                {/* Content Left (Empty for odd idx on desktop, filled for even) */}
                <div className={`hidden md:block w-1/2 pr-12 text-right ${idx % 2 === 0 ? "" : "invisible"}`}>
                  {idx % 2 === 0 && (
                    <>
                      <h4 className="text-2xl font-bold">{exp.role}</h4>
                      <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                      <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-slate-400 border border-white/10 mb-4">
                        {exp.duration}
                      </span>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </>
                  )}
                </div>
                
                {/* Content Right (Filled for odd idx on desktop, empty for even) */}
                <div className={`pl-16 md:pl-12 w-full md:w-1/2 ${idx % 2 !== 0 ? "" : "md:hidden"}`}>
                  <h4 className="text-2xl font-bold">{exp.role}</h4>
                  <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                  <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-slate-400 border border-white/10 mb-4">
                    {exp.duration}
                  </span>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
