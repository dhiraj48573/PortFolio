'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import { projects, sideProjects } from '../data/candidate';
import TiltCard from './TiltCard';
import Link from 'next/link';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filterOptions = ['All', 'Full Stack', 'WebSockets', 'AI / OCR'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Full Stack') return p.stack.includes('React') || p.stack.includes('Node.js');
    if (filter === 'WebSockets') return p.stack.includes('WebSockets');
    if (filter === 'AI / OCR') return p.stack.includes('OCR') || p.stack.includes('AI Integration');
    return true;
  });

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="work">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label mb-4">Projects</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight mt-3">
              Featured Case Studies & Code
            </h2>
            <p className="text-[#A1A1AA] text-xs sm:text-sm mt-2 max-w-xl">
              Production-ready web applications engineered for scalability, real-time sync, and security.
            </p>
          </motion.div>

          {/* Dynamic Filter Badges */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                  filter === opt
                    ? 'bg-[#6366F1] text-white shadow-lg shadow-indigo-500/20 font-semibold'
                    : 'bg-[#16161A] text-[#A1A1AA] hover:text-[#FAFAFA] border border-[#252529]'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Main 3 production projects */}
        <AnimatePresence mode="wait">
          <motion.div layout className="flex flex-col gap-6 sm:gap-8 mb-12 sm:mb-16">
            {filteredProjects.map((proj, i) => (
              <TiltCard key={proj.slug} maxTilt={4} scale={1.01}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-[#16161A] border border-[#252529] rounded-xl p-4 sm:p-6 md:p-8 hover:border-[#6366F1]/30 transition-all duration-300 card-layered group relative"
                >
                  {/* Top row: number + links */}
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="font-mono text-xs sm:text-sm text-[#818CF8] tracking-wider font-medium flex items-center gap-2">
                      <Layers size={14} /> Case Study #{proj.number}
                    </span>
                    <div className="flex items-center gap-3 sm:gap-4">
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[10px] sm:text-xs text-[#A1A1AA] hover:text-[#2DD4BF] transition-colors font-mono"
                          aria-label={`Live demo for ${proj.name}`}
                        >
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[10px] sm:text-xs text-[#A1A1AA] hover:text-[#6366F1] transition-colors font-mono"
                          aria-label={`GitHub repo for ${proj.name}`}
                        >
                          <Github size={14} /> Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FAFAFA] mb-2 group-hover:text-[#818CF8] transition-colors">
                    {proj.name}
                  </h3>

                  {/* One-liner */}
                  <p className="text-xs sm:text-sm text-[#A1A1AA] mb-4 sm:mb-6 leading-relaxed">
                    {proj.oneLiner}
                  </p>

                  {/* Problem / Solution grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-[#09090B]/60 rounded-lg p-3 sm:p-4 border border-[#252529]">
                      <span className="text-[10px] sm:text-xs font-mono text-[#EF4444] uppercase tracking-wider block mb-1">
                        Problem
                      </span>
                      <p className="text-[11px] sm:text-xs text-[#A1A1AA] leading-relaxed">
                        {proj.problem}
                      </p>
                    </div>

                    <div className="bg-[#09090B]/60 rounded-lg p-3 sm:p-4 border border-[#252529]">
                      <span className="text-[10px] sm:text-xs font-mono text-[#2DD4BF] uppercase tracking-wider block mb-1">
                        Solution & Impact
                      </span>
                      <p className="text-[11px] sm:text-xs text-[#A1A1AA] leading-relaxed">
                        {proj.solution}
                      </p>
                    </div>
                  </div>

                  {/* Metrics bullet list */}
                  <div className="space-y-1.5 mb-4 sm:mb-6">
                    {proj.metrics.map((m, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-[#FAFAFA]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom: Stack badges & Case study button */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#252529]">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#252529] text-[#818CF8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#6366F1] font-semibold hover:text-[#2DD4BF] transition-colors self-start sm:self-auto font-mono group-hover:translate-x-1 transition-transform"
                    >
                      Read Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Side Projects Section */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-[#FAFAFA] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF]" /> Additional Open Source Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sideProjects.map((sp, idx) => (
              <TiltCard key={idx} maxTilt={6}>
                <div className="bg-[#16161A] border border-[#252529] hover:border-[#6366F1]/30 rounded-xl p-5 h-full flex flex-col justify-between transition-colors">
                  <div>
                    <h4 className="font-semibold text-sm text-[#FAFAFA] mb-2">{sp.name}</h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">{sp.desc}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#252529]">
                    <div className="flex flex-wrap gap-1">
                      {sp.stack.slice(0, 3).map((t) => (
                        <span key={t} className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-[#252529] text-[#A1A1AA]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={sp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#818CF8] hover:text-[#2DD4BF] transition-colors"
                    >
                      <Github size={15} />
                    </a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}