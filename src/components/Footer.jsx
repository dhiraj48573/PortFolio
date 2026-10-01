'use client';

import { Mail, MessageCircle, MapPin, Phone, ArrowUp } from 'lucide-react';
import { GithubIcon as Github, LinkedInIcon as Linkedin } from './Icons';
import { candidate, navLinks, services } from '../data/candidate';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Floating WhatsApp button */}
            <a
                href={`https://wa.me/91${candidate.phoneAlt}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform safe-bottom"
                style={{ marginBottom: 'env(safe-area-inset-bottom, 16px)' }}
            >
                <MessageCircle size={22} className="sm:w-[26px] sm:h-[26px] text-white" />
            </a>

            {/* Footer */}
            <footer className="relative border-t border-[#252529] bg-[#09090B]">
                {/* Subtle top gradient line */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main grid */}
                    <div className="py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                        {/* Column 1 — Brand */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                                className="inline-block font-mono text-xl sm:text-2xl font-bold mb-3"
                                aria-label="Back to top"
                            >
                                <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#2DD4BF] bg-clip-text text-transparent">
                                    DK
                                </span>
                            </a>
                            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4 max-w-xs">
                                Full-Stack Engineer building production-grade web applications. Docker, Cloud Run, WebSockets, RBAC — shipping products that solve real problems.
                            </p>
                            {/* Availability badge */}
                            {candidate.availability && (
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-xs font-medium">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
                                    </span>
                                    Available for opportunities
                                </div>
                            )}
                        </div>

                        {/* Column 2 — Quick Links */}
                        <div>
                            <h4 className="text-[#FAFAFA] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
                                Quick Links
                            </h4>
                            <ul className="space-y-2.5">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="text-[#A1A1AA] hover:text-[#FAFAFA] text-xs sm:text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                                        >
                                            <span className="w-0 h-px bg-gradient-to-r from-[#818CF8] to-[#6366F1] transition-all duration-200 group-hover:w-3" />
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 — Services */}
                        <div>
                            <h4 className="text-[#FAFAFA] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
                                Services
                            </h4>
                            <ul className="space-y-2.5">
                                {services.slice(0, 4).map((s) => (
                                    <li key={s.title}>
                                        <span className="text-[#A1A1AA] text-xs sm:text-sm block leading-relaxed">
                                            {s.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4 — Contact */}
                        <div>
                            <h4 className="text-[#FAFAFA] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
                                Contact
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href={`mailto:${candidate.email}`}
                                        className="text-[#A1A1AA] hover:text-[#FAFAFA] text-xs sm:text-sm transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <Mail size={14} className="text-[#71717A] group-hover:text-[#6366F1] transition-colors shrink-0" />
                                        {candidate.email}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`tel:${candidate.phoneIntl}`}
                                        className="text-[#A1A1AA] hover:text-[#FAFAFA] text-xs sm:text-sm transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <Phone size={14} className="text-[#71717A] group-hover:text-[#6366F1] transition-colors shrink-0" />
                                        {candidate.phoneIntl}
                                    </a>
                                </li>
                                <li>
                                    <span className="text-[#A1A1AA] text-xs sm:text-sm flex items-start gap-2 group">
                                        <MapPin size={14} className="text-[#71717A] mt-0.5 shrink-0" />
                                        <span>{candidate.location}</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-[#252529]" />

                    {/* Bottom bar */}
                    <div className="py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                        {/* Social links */}
                        <div className="flex items-center gap-4">
                            <a
                                href={candidate.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-[#71717A] hover:text-[#FAFAFA] transition-colors duration-200 p-1.5 rounded-lg hover:bg-[#1A1A1F]"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href={candidate.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-[#71717A] hover:text-[#FAFAFA] transition-colors duration-200 p-1.5 rounded-lg hover:bg-[#1A1A1F]"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href={`mailto:${candidate.email}`}
                                aria-label="Email"
                                className="text-[#71717A] hover:text-[#FAFAFA] transition-colors duration-200 p-1.5 rounded-lg hover:bg-[#1A1A1F]"
                            >
                                <Mail size={18} />
                            </a>
                        </div>

                        {/* Copyright */}
                        <p className="text-[10px] sm:text-xs text-[#71717A]/60 text-center sm:text-right">
                            &copy; {currentYear} {candidate.name}. Built with React &middot; Deployed on Vercel
                        </p>

                        {/* Back to top button */}
                        <button
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg bg-[#1A1A1F] border border-[#252529] text-[#71717A] hover:text-[#FAFAFA] hover:border-[#6366F1]/30 transition-all duration-200"
                        >
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>
            </footer>
        </>
    );
}