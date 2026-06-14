import { motion } from 'framer-motion';
import { achievements } from '../data/candidate';
import TiltCard from './TiltCard';

export default function Achievements() {
    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="achievements">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 sm:mb-16"
                >
                    <span className="section-label mb-4">Achievements</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] tracking-tight mt-4">
                        Milestones & Recognition
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical line — responsive positioning */}
                    <div className="absolute left-2 sm:left-6 top-0 bottom-0 w-px bg-[#252529]" />

                    <div className="flex flex-col gap-6 sm:gap-8">
                        {achievements.map((ach, i) => (
                            <motion.div
                                key={ach.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative pl-8 sm:pl-16"
                            >
                                {/* Timeline dot — mobile then desktop positioning */}
                                <div
                                    className="block sm:hidden absolute w-[11px] h-[11px] rounded-full bg-[#16161A] border-2 border-[#6366F1] shadow-[0_0_8px_rgba(99,102,241,0.4)] z-10"
                                    style={{ left: 'calc(0.5rem - 5px)', top: '0.25rem' }}
                                />
                                <div
                                    className="hidden sm:block absolute w-[11px] h-[11px] rounded-full bg-[#16161A] border-2 border-[#6366F1] shadow-[0_0_8px_rgba(99,102,241,0.4)] z-10"
                                    style={{ left: 'calc(1.5rem - 5px)', top: '0.25rem' }}
                                />

                                {/* Icon marker */}
                                <span className="hidden sm:block absolute left-0 top-0 text-lg">{ach.icon}</span>

                                <TiltCard maxTilt={5} scale={1.02}>
                                    <div className="bg-[#16161A] border border-[#252529] rounded-xl p-4 sm:p-6 hover:border-[#33333A] transition-colors duration-200">
                                        <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2">
                                            <h3 className="text-sm sm:text-lg font-semibold text-[#FAFAFA] tracking-tight">
                                                <span className="sm:hidden mr-1.5">{ach.icon}</span>
                                                {ach.title}
                                            </h3>
                                            <span className="font-mono text-[9px] sm:text-[10px] text-[#818CF8] whitespace-nowrap mt-1 shrink-0">
                                                {ach.date}
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">{ach.desc}</p>
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