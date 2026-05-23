"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { PORTFOLIO_DATA } from "@/data";
import { ExternalLink } from "lucide-react";
import { Github } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Featured Projects" subtitle="Some of my recent work" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card w-full rounded-3xl p-8 relative overflow-hidden group border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full"
            >
              {/* Subtle animated background glow based on project color */}
              <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${project.color} opacity-[0.03] group-hover:opacity-[0.08] blur-[60px] rounded-full translate-x-1/3 -translate-y-1/3 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col flex-grow">
                {/* Header: Icon & Links */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  {/* Small elegant icon box */}
                  <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${project.color} p-[1px]`}>
                    <div className="w-full h-full bg-[#030014] rounded-[15px] flex items-center justify-center relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                      <project.icon size={24} className="text-white relative z-10" />
                    </div>
                  </div>
                  
                  {/* Action Links */}
                  <div className="flex items-center gap-2 shrink-0">
                    {(project as any).githubLink && (
                      <a
                        href={(project as any).githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                        aria-label="View Source Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {(project as any).liveLink && (
                      <a
                        href={(project as any).liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-300 transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Role */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-purple-400 font-medium text-xs uppercase tracking-wider">{project.role}</p>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed text-base mb-8 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs text-slate-300 font-medium px-3 py-1.5 bg-[#030014]/50 backdrop-blur-sm rounded-md border border-white/5 hover:border-white/20 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
