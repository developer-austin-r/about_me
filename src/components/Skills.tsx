"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { PORTFOLIO_DATA } from "@/data";

export default function Skills() {
  const categories = [
    { title: "Frontend", items: PORTFOLIO_DATA.skills.frontend, color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/30" },
    { title: "Backend", items: PORTFOLIO_DATA.skills.backend, color: "from-green-500/20 to-green-500/5", border: "border-green-500/30" },
    { title: "Database", items: PORTFOLIO_DATA.skills.database, color: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/30" },
    { title: "DevOps & Cloud", items: PORTFOLIO_DATA.skills.devops, color: "from-orange-500/20 to-orange-500/5", border: "border-orange-500/30" },
    { title: "Tools", items: PORTFOLIO_DATA.skills.tools, color: "from-pink-500/20 to-pink-500/5", border: "border-pink-500/30" },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Technical Skills" subtitle="Technologies I work with" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-2xl p-6 border ${category.border} relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <h3 className="text-xl font-bold mb-6 relative z-10">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 hover:text-white hover:border-white/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
