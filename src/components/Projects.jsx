'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects, sideProjects } from '../data/candidate';
import TiltCard from './TiltCard';

export default function Projects() {
    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="work">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 sm:mb-16"
                >
                    <span className="section-label mb-4">Projects</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] tracking-tight mt-4">
                        Production Case Studies
                    </h2>
                    <p className="text-[#A1A1AA] text-xs sm:text-sm mt-2 max-w-xl">
                        Three shipped products. Each built, deployed, and serving real users.
                    </p>
                </motion.div>

                {/* Main 3 production projects */}
                <div className="flex flex-col gap-6 sm:gap-8 mb-12 sm:mb-16">
                    {projects.map((proj, i) => (
                        <TiltCard key={proj.number} maxTilt={4} scale={1.01}>
                            <motion.div
                                key={proj.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="bg-[#16161A] border border-[#252529] rounded-xl p-4 sm:p-6 md:p-8 hover:border-[#33333A] transition-colors duration-200 card-layered"
                            >
                                {/* Top row: number + links */}
                                <div className="flex items-center justify-between mb-2 sm:mb-3 translate-z-30 transition-transform duration-200">
                                    <span className="font-mono text-xs sm:text-sm text-[#818CF8] tracking-wider font-medium">
                                        {proj.number}
                                    </span>
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <a
                                            href={proj.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-[10px] sm:text-xs text-[#A1A1AA] hover:text-[#6366F1] transition-colors"
                                            aria-label={`Live demo for ${proj.name}`}
                                        >
                                            <ExternalLink size={14} /> Live
                                        </a>
                                        <a
                                            href={proj.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-[10px] sm:text-xs text-[#A1A1AA] hover:text-[#6366F1] transition-colors"
                                            aria-label={`GitHub repo for ${proj.name}`}
                                        >
                                            <GithubIcon size={14} /> GitHub
                                        </a>
                                    </div>
                                </div>

                                {/* Project name + one-liner */}
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FAFAFA] mb-1 tracking-tight translate-z-30 transition-transform duration-200">
                                    {proj.name}
                                </h3>
                                <p className="text-[#A1A1AA] text-xs sm:text-sm mb-4 sm:mb-6 translate-z-20 transition-transform duration-200">{proj.oneLiner}</p>

                                {/* PROBLEM → SOLUTION → METRICS — stack on mobile */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 translate-z-10 transition-transform duration-200">
                                    <div className="bg-[#111114] border border-[#252529] rounded-xl p-3 sm:p-4">
                                        <span className="text-[10px] text-[#EF4444] uppercase tracking-wider font-semibold">
                                            Problem
                                        </span>
                                        <p className="text-xs sm:text-sm text-[#FAFAFA]/80 mt-1 sm:mt-1.5">{proj.problem}</p>
                                    </div>
                                    <div className="bg-[#111114] border border-[#252529] rounded-xl p-3 sm:p-4">
                                        <span className="text-[10px] text-[#F59E0B] uppercase tracking-wider font-semibold">
                                            Solution
                                        </span>
                                        <p className="text-xs sm:text-sm text-[#FAFAFA]/80 mt-1 sm:mt-1.5">{proj.solution}</p>
                                    </div>
                                    <div className="bg-[#111114] border border-[#22C55E]/20 rounded-xl p-3 sm:p-4">
                                        <span className="text-[10px] text-[#22C55E] uppercase tracking-wider font-semibold">
                                            Metrics
                                        </span>
                                        <ul className="text-xs sm:text-sm text-[#FAFAFA]/80 mt-1 sm:mt-1.5 space-y-1 sm:space-y-1.5">
                                            {proj.metrics.map((m, mi) => (
                                                <li key={mi} className="flex items-start gap-1.5">
                                                    <span className="text-[#22C55E] mt-1.5 w-1 h-1 rounded-full shrink-0" />
                                                    {m}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Architecture highlight */}
                                <div className="border-t border-[#252529] pt-3 sm:pt-4 translate-z-10 transition-transform duration-200">
                                    <p className="text-[10px] sm:text-[11px] text-[#A1A1AA]">
                                        <span className="text-[#818CF8] font-medium">Architecture:</span> {proj.arch}
                                    </p>
                                </div>

                                {/* Stack tags */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 translate-z-10 transition-transform duration-200">
                                    {proj.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-mono rounded-md bg-[#252529] text-[#818CF8]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>

                {/* Side Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 sm:mb-10"
                >
                    <span className="section-label mb-4">More Projects</span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#FAFAFA] mt-4 tracking-tight">
                        Additional Work
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {sideProjects.map((proj, i) => (
                        <TiltCard key={proj.name} maxTilt={6} scale={1.03}>
                            <motion.div
                                key={proj.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="bg-[#16161A] border border-[#252529] rounded-xl p-4 sm:p-5 hover:border-[#33333A] transition-colors duration-200 card-layered"
                            >
                                <h4 className="text-sm font-semibold text-[#FAFAFA] mb-2 translate-z-30 transition-transform duration-200">{proj.name}</h4>
                                <p className="text-xs text-[#A1A1AA] mb-4 leading-relaxed translate-z-20 transition-transform duration-200">{proj.desc}</p>
                                <div className="flex flex-wrap gap-1.5 mb-4 translate-z-10 transition-transform duration-200">
                                    {proj.stack.map((t) => (
                                        <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-[#252529] text-[#818CF8]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={proj.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs text-[#6366F1] hover:text-[#818CF8] transition-colors font-medium translate-z-10 transition-transform duration-200"
                                >
                                    <GithubIcon size={14} /> View on GitHub
                                </a>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}