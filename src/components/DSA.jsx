import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import { candidate, dsa } from '../data/candidate';
import TiltCard from './TiltCard';

export default function DSA() {
    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="dsa">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 sm:mb-16"
                >
                    <span className="section-label mb-4">DSA & Problem Solving</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] tracking-tight mt-4">
                        Algorithmic Rigor
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Left: Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <TiltCard maxTilt={5} scale={1.03}>
                                <div className="bg-[#16161A] border border-[#252529] rounded-xl p-4 sm:p-6 text-center hover:border-[#33333A] transition-colors duration-200">
                                    <span className="font-mono text-2xl sm:text-4xl font-bold bg-gradient-to-b from-[#FAFAFA] to-[#818CF8] bg-clip-text text-transparent">{dsa.leetcode}</span>
                                    <p className="text-[#A1A1AA] text-[10px] sm:text-xs mt-1.5 sm:mt-2 uppercase tracking-wide font-medium">LeetCode</p>
                                </div>
                            </TiltCard>
                            <TiltCard maxTilt={5} scale={1.03}>
                                <div className="bg-[#16161A] border border-[#252529] rounded-xl p-4 sm:p-6 text-center hover:border-[#33333A] transition-colors duration-200">
                                    <span className="font-mono text-2xl sm:text-4xl font-bold bg-gradient-to-b from-[#FAFAFA] to-[#818CF8] bg-clip-text text-transparent">{dsa.gfg}</span>
                                    <p className="text-[#A1A1AA] text-[10px] sm:text-xs mt-1.5 sm:mt-2 uppercase tracking-wide font-medium">GeeksforGeeks</p>
                                </div>
                            </TiltCard>
                        </div>

                        <TiltCard maxTilt={4} scale={1.01}>
                            <div className="bg-[#16161A] border border-[#252529] rounded-xl p-4 sm:p-6">
                                <h3 className="text-xs sm:text-sm text-[#818CF8] mb-3 sm:mb-4 font-semibold">Focus Areas</h3>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {dsa.focusAreas.map((area) => (
                                        <span
                                            key={area}
                                            className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-mono rounded-md bg-[#252529] text-[#FAFAFA]"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </TiltCard>

                        <a
                            href={candidate.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#6366F1] text-white font-semibold rounded-xl text-xs sm:text-sm hover:bg-[#5558E6] transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] w-full xs:w-auto"
                        >
                            <Github size={16} />
                            View My GitHub
                            <ExternalLink size={14} />
                        </a>
                    </motion.div>

                    {/* Right: GitHub Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-4 sm:gap-5"
                    >
                        <TiltCard maxTilt={3} scale={1.01}>
                            <div className="bg-[#16161A] border border-[#252529] rounded-xl p-3 sm:p-4 overflow-hidden">
                                <img
                                    src={`https://github-readme-stats.vercel.app/api?username=${candidate.githubUser}&show_icons=true&theme=transparent&hide_border=true&bg_color=16161A&title_color=FAFAFA&text_color=A1A1AA&icon_color=6366F1&cache_seconds=7200`}
                                    alt="GitHub stats"
                                    className="w-full h-auto max-w-full"
                                    loading="lazy"
                                    width="495"
                                    height="195"
                                />
                            </div>
                        </TiltCard>
                        <TiltCard maxTilt={3} scale={1.01}>
                            <div className="bg-[#16161A] border border-[#252529] rounded-xl p-3 sm:p-4 overflow-hidden">
                                <img
                                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${candidate.githubUser}&theme=transparent&hide_border=true&background=16161A&ring=6366F1&fire=6366F1&currStreakLabel=818CF8&sideLabels=A1A1AA&dates=71717A`}
                                    alt="GitHub streak"
                                    className="w-full h-auto max-w-full"
                                    loading="lazy"
                                    width="495"
                                    height="195"
                                />
                            </div>
                        </TiltCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}