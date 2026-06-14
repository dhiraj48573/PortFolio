import { motion } from 'framer-motion';
import { experiences } from '../data/candidate';
import TiltCard from './TiltCard';

export default function Experience() {
    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="experience">
            <div className="max-w-4xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 sm:mb-16"
                >
                    <span className="section-label mb-4">Experience</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] tracking-tight mt-4">
                        Where I've Worked
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[7px] sm:left-8 top-0 bottom-0 w-px bg-[#252529]" />

                    <div className="flex flex-col gap-8 sm:gap-10">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="relative pl-8 sm:pl-20"
                            >
                                {/* Timeline dot — single dot, responsive positioning */}
                                <div
                                    className={`absolute top-1 w-[9px] h-[9px] rounded-full border-2 z-10 ${exp.active
                                        ? 'bg-[#6366F1] border-[#6366F1] shadow-[0_0_10px_rgba(99,102,241,0.5)]'
                                        : 'bg-[#09090B] border-[#252529]'
                                        }`}
                                    style={{ left: '3px' }}
                                />
                                {/* SM+ override via media query is handled by sm:left-8 on the line,
                                    so we match the dot position */}
                                <style>{`
                                    @media (min-width: 640px) {
                                        .exp-dot { left: 28px !important; }
                                    }
                                `}</style>
                                {/* Inline re-positioning for SM+ */}
                                <span className="hidden sm:block exp-dot" />

                                {/* Year tag (hidden on mobile) */}
                                <span className="hidden sm:block absolute left-0 top-0 font-mono text-xs text-[#818CF8] whitespace-nowrap -translate-x-2">
                                    {exp.duration}
                                </span>

                                {/* Mobile duration */}
                                <span className="sm:hidden font-mono text-[10px] sm:text-xs text-[#818CF8] mb-1.5 block">
                                    {exp.duration}
                                </span>

                                {/* Card */}
                                <TiltCard maxTilt={5} scale={1.02}>
                                    <div
                                        className={`rounded-xl p-4 sm:p-6 transition-colors duration-200 card-layered ${exp.active
                                            ? 'bg-[#16161A] border border-[#6366F1]/30'
                                            : 'bg-[#16161A] border border-[#252529]'
                                            }`}
                                    >
                                        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 mb-3 translate-z-30 transition-transform duration-200">
                                            <h3 className="text-base sm:text-lg font-semibold text-[#FAFAFA] tracking-tight">
                                                {exp.company}
                                            </h3>
                                        </div>
                                        <p className="text-[#A1A1AA] text-xs sm:text-sm mb-4 translate-z-20 transition-transform duration-200">{exp.role}</p>

                                        <ul className="space-y-2 mb-4 translate-z-10 transition-transform duration-200">
                                            {exp.bullets.map((b, bi) => (
                                                <li key={bi} className="text-xs sm:text-sm text-[#FAFAFA]/80 flex items-start gap-2">
                                                    <span className="text-[#6366F1] mt-1 shrink-0 leading-none">▹</span>
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Stack tags */}
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 translate-z-10 transition-transform duration-200">
                                            {exp.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-mono rounded-md bg-[#252529] text-[#818CF8]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}