import { motion } from 'framer-motion';
import { certs } from '../data/candidate';
import TiltCard from './TiltCard';

export default function Certifications() {
    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="certifications">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 sm:mb-16"
                >
                    <span className="section-label mb-4">Certifications</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] tracking-tight mt-4">
                        Credentials & Achievements
                    </h2>
                </motion.div>

                {/* Desktop: 3-col grid */}
                <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {certs.map((cert, i) => (
                        <TiltCard key={cert.name} maxTilt={5} scale={1.02}>
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                className="bg-[#16161A] border border-[#252529] rounded-xl p-4 sm:p-5 flex gap-3 sm:gap-4 items-start hover:border-[#33333A] transition-colors duration-200 card-layered"
                            >
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#111114] flex items-center justify-center text-base sm:text-lg shrink-0 translate-z-30 transition-transform duration-200">
                                    {cert.icon}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-xs sm:text-sm font-semibold text-[#FAFAFA] leading-snug translate-z-20 transition-transform duration-200">
                                        {cert.name}
                                    </h4>
                                    <p className="text-[10px] sm:text-xs text-[#A1A1AA] mt-1 translate-z-10 transition-transform duration-200">
                                        {cert.issuer} {cert.note && <span className="text-[#F59E0B]">· {cert.note}</span>}
                                    </p>
                                    <p className="text-[10px] text-[#71717A] mt-0.5 translate-z-10 transition-transform duration-200">{cert.year}</p>
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>

                {/* Mobile: horizontal scroll */}
                <div className="sm:hidden flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory snap-container">
                    {certs.map((cert, i) => (
                        <TiltCard key={cert.name} maxTilt={5} scale={1.02}>
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                className="bg-[#16161A] border border-[#252529] rounded-xl p-4 flex gap-3 items-start min-w-[220px] max-w-[260px] snap-start shrink-0 card-layered"
                            >
                                <div className="w-8 h-8 rounded-lg bg-[#111114] flex items-center justify-center text-base shrink-0 translate-z-30 transition-transform duration-200">
                                    {cert.icon}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-xs font-semibold text-[#FAFAFA] leading-snug translate-z-20 transition-transform duration-200">
                                        {cert.name}
                                    </h4>
                                    <p className="text-[10px] text-[#A1A1AA] mt-0.5 translate-z-10 transition-transform duration-200">
                                        {cert.issuer} {cert.note && <span className="text-[#F59E0B]">· {cert.note}</span>}
                                    </p>
                                    <p className="text-[10px] text-[#71717A] mt-0.5 translate-z-10 transition-transform duration-200">{cert.year}</p>
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}