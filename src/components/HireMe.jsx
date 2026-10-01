'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Zap } from 'lucide-react';
import { services } from '../data/candidate';
import TiltCard from './TiltCard';

export default function HireMe() {
    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="hire">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 sm:mb-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/25 text-xs sm:text-sm text-[#22C55E] font-medium mb-4 sm:mb-6">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#22C55E] animate-pulse" />
                        Currently Available for Freelance Work
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] tracking-tight">
                        Services I Offer
                    </h2>
                    <p className="text-[#A1A1AA] text-xs sm:text-sm mt-2 sm:mt-3 max-w-lg mx-auto">
                        Starting at ₹8,000 / $100 per project — production-grade delivery, not student-tier code.
                    </p>
                </motion.div>

                {/* Services grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12">
                    {services.map((svc, i) => (
                        <TiltCard key={svc.title} maxTilt={5} scale={1.02}>
                            <motion.div
                                key={svc.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                className="bg-[#16161A] border border-[#252529] rounded-xl p-4 sm:p-6 hover:border-[#33333A] transition-colors duration-200 card-layered"
                            >
                                <Zap size={18} className="text-[#6366F1] mb-2 sm:mb-3 translate-z-30 transition-transform duration-200" />
                                <h3 className="text-sm font-semibold text-[#FAFAFA] mb-1.5 sm:mb-2 tracking-tight translate-z-20 transition-transform duration-200">
                                    {svc.title}
                                </h3>
                                <p className="text-xs text-[#A1A1AA] leading-relaxed translate-z-10 transition-transform duration-200">{svc.desc}</p>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#6366F1] text-white font-semibold rounded-xl text-xs sm:text-sm hover:bg-[#5558E6] transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] w-full xs:w-auto"
                    >
                        Book a Discovery Call
                        <ArrowRight size={16} />
                    </a>
                    <a
                        href="https://wa.me/919259534648"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-[#252529] text-[#FAFAFA] rounded-xl text-xs sm:text-sm hover:border-[#6366F1]/50 hover:text-[#818CF8] transition-all duration-200 w-full xs:w-auto"
                    >
                        <MessageCircle size={16} />
                        Message on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}