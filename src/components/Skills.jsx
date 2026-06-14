import { motion } from 'framer-motion';
import { skills } from '../data/candidate';
import TiltCard from './TiltCard';

const skillGroups = [
    { title: 'Languages', items: skills.languages },
    { title: 'CS Fundamentals', items: skills.csFundamentals },
    { title: 'Backend / APIs', items: skills.backend },
    { title: 'Frontend', items: skills.frontend },
    { title: 'Databases', items: skills.databases },
    { title: 'DevOps', items: skills.devops },
    { title: 'Machine Learning', items: skills.ml },
    { title: 'AI / APIs', items: skills.aiApis },
    { title: 'Data Science', items: skills.dataScience },
    { title: 'NLP / Vision', items: skills.nlpVision },
];

export default function Skills() {
    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="skills">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 sm:mb-16"
                >
                    <span className="section-label mb-4">Skills</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] tracking-tight mt-4">
                        Technical Arsenal
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                    {skillGroups.map((group, i) => (
                        <TiltCard key={group.title} maxTilt={5} scale={1.02}>
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="bg-[#16161A] border border-[#252529] rounded-xl p-4 sm:p-6 hover:border-[#33333A] transition-colors duration-200"
                            >
                                <h3 className="text-xs sm:text-sm font-semibold text-[#818CF8] mb-3 sm:mb-4 tracking-wide">
                                    {group.title}
                                </h3>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {group.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono rounded-md bg-[#252529] text-[#A1A1AA] hover:bg-[#6366F1]/15 hover:text-[#818CF8] transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}