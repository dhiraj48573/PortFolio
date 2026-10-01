'use client';

import { motion } from 'framer-motion';
import { Code2, GraduationCap, Rocket, FileText } from 'lucide-react';
import { about, candidate } from '../data/candidate';
import TiltCard from './TiltCard';

export default function AboutMe() {
    const stats = [
        { icon: <Code2 size={18} />, ...about.highlights[0] },
        { icon: <Rocket size={18} />, ...about.highlights[1] },
        { icon: <GraduationCap size={18} />, ...about.highlights[2] },
        { icon: <FileText size={18} />, ...about.highlights[3] },
    ];

    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#09090B]" id="about">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 sm:mb-16"
                >
                    <span className="section-label mb-4">About Me</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] tracking-tight mt-4">
                        Get to know me
                    </h2>
                    <p className="text-[#818CF8] text-sm sm:text-base mt-2">{about.headline}</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">
                    {/* Bio text — 3 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-3 space-y-4 sm:space-y-5"
                    >
                        <p className="text-[#A1A1AA] leading-relaxed text-xs sm:text-sm md:text-base">
                            {about.bio1}
                        </p>
                        <p className="text-[#A1A1AA] leading-relaxed text-xs sm:text-sm md:text-base">
                            {about.bio2}
                        </p>
                        <p className="text-[#A1A1AA] leading-relaxed text-xs sm:text-sm md:text-base">
                            {about.bio3}
                        </p>
                    </motion.div>

                    {/* Stats grid — 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-2 grid grid-cols-2 gap-2 sm:gap-3 content-start"
                    >
                        {stats.map((stat) => (
                            <TiltCard key={stat.label} maxTilt={6} scale={1.03}>
                                <div className="bg-[#16161A] border border-[#252529] rounded-xl p-3 sm:p-5 flex flex-col items-center text-center hover:border-[#6366F1]/30 transition-colors duration-200 h-full card-layered">
                                    <span className="text-[#6366F1] mb-1.5 sm:mb-2 translate-z-30 transition-transform duration-200">{stat.icon}</span>
                                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#FAFAFA] font-mono tracking-tight translate-z-20 transition-transform duration-200">
                                        {stat.value}
                                    </span>
                                    <span className="text-[10px] sm:text-xs text-[#A1A1AA] mt-1 leading-tight translate-z-10 transition-transform duration-200">
                                        {stat.label}
                                    </span>
                                </div>
                            </TiltCard>
                        ))}

                        {/* Quick info card */}
                        <TiltCard maxTilt={5} scale={1.02} className="col-span-2 mt-1">
                            <div className="bg-[#16161A] border border-[#252529] rounded-xl p-4 sm:p-5 h-full card-layered">
                                <div className="space-y-2.5 sm:space-y-3">
                                    <div className="translate-z-30 transition-transform duration-200">
                                        <span className="text-[10px] text-[#6366F1] uppercase tracking-wider font-medium">
                                            Education
                                        </span>
                                        <p className="text-xs sm:text-sm text-[#FAFAFA] mt-0.5">{candidate.degree}</p>
                                        <p className="text-[10px] sm:text-xs text-[#A1A1AA]">{candidate.university}</p>
                                    </div>
                                    <div className="translate-z-20 transition-transform duration-200">
                                        <span className="text-[10px] text-[#6366F1] uppercase tracking-wider font-medium">
                                            CGPA
                                        </span>
                                        <p className="text-xs sm:text-sm text-[#FAFAFA] mt-0.5">{candidate.cgpa} / 10.0</p>
                                    </div>
                                    <div className="translate-z-10 transition-transform duration-200">
                                        <span className="text-[10px] text-[#6366F1] uppercase tracking-wider font-medium">
                                            Location
                                        </span>
                                        <p className="text-xs sm:text-sm text-[#FAFAFA] mt-0.5">{candidate.location}</p>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}