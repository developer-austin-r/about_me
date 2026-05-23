"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { PORTFOLIO_DATA } from "@/data";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Certifications" subtitle="Professional credentials and courses" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-2xl p-6 border ${cert.borderColor} hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cert.bgColor} mb-6`}>
                    <Award className={`${cert.iconColor}`} size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white text-slate-200 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 font-medium text-sm mb-1">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs mb-6">{cert.date}</p>
                </div>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full w-fit transition-colors border border-white/5 hover:border-white/20"
                >
                  <span>View Credential</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
