import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks } from '../data/candidate';

export default function Nav({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'glass-nav'
                : 'bg-transparent border-b border-transparent'
                }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16 lg:h-[4.5rem]">
                    {/* Monogram */}
                    <a
                        href="#"
                        className="font-mono text-lg sm:text-xl font-bold tracking-tight select-none relative group"
                        aria-label="Dhiraj Kumar home"
                    >
                        <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#2DD4BF] bg-clip-text text-transparent">
                            DK
                        </span>
                        <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#6366F1] to-[#2DD4BF] group-hover:w-full transition-all duration-300 ease-out" />
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative px-3.5 py-2 text-sm font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200 rounded-lg hover:bg-[#1C1C21]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#1C1C21] transition-all cursor-pointer"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                        </button>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/25 text-xs font-medium text-[#22C55E]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                            Available
                        </span>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-[#FAFAFA] bg-[#6366F1] hover:bg-[#5558E6] rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile toggle & theme toggle */}
                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors cursor-pointer"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <button
                            className="p-2 -mr-2 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu — scrollable within viewport */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden glass-nav overflow-hidden border-t border-[#252529]"
                    >
                        <div
                            className="px-4 py-5 flex flex-col gap-1"
                            style={{ maxHeight: 'calc(100vh - 56px)', overflowY: 'auto' }}
                        >
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    className="text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#1C1C21] transition-all text-sm py-2.5 px-3 rounded-lg"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <div className="pt-3 mt-2 border-t border-[#252529] flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
                                <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/25 text-xs font-medium text-[#22C55E]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                                    Available
                                </span>
                                <a
                                    href="#contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-[#FAFAFA] bg-[#6366F1] rounded-lg"
                                >
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}