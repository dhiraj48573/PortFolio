'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { Mail, ArrowRight, Download, Briefcase } from 'lucide-react';
import { GithubIcon as Github, LinkedInIcon as Linkedin } from './Icons';
import ParticleCanvas from './ParticleCanvas';
import { candidate, rotatingTitles, bioLine } from '../data/candidate';

export default function Hero() {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed('#typed-strings', {
            strings: rotatingTitles,
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 300,
            loop: true,
            cursorChar: '|',
        });
        return () => typed.destroy();
    }, []);

    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
    };
    const item = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    };

    // Terminal lines for the right column
    const terminalLines = [
        { prompt: 'dhiraj@portfolio ~ %', output: '' },
        { prompt: '$ cat skills.json', output: '' },
        { prompt: '> languages:', output: '["Python", "C++", "JavaScript", "Java"]' },
        { prompt: '> backend:', output: '["Node.js", "Express", "REST APIs"]' },
        { prompt: '> frontend:', output: '["React", "TypeScript", "Tailwind"]' },
        { prompt: '> devops:', output: '["Docker", "Google Cloud Run", "CI/CD"]' },
        { prompt: '', output: '' },
        { prompt: '$ uptime', output: '' },
        { prompt: '>', output: '99.9% — production systems' },
        { prompt: '', output: '' },
        { prompt: '$ git log --oneline -4', output: '' },
        { prompt: '> feat:', output: 'RBAC auth system \u2713' },
        { prompt: '> feat:', output: 'WebSocket price engine \u2713' },
        { prompt: '> feat:', output: 'OCR pipeline \u2713' },
        { prompt: '> deploy:', output: 'Cloud Run CI/CD \u2713' },
        { prompt: '$ _', output: '', cursor: true },
    ];

    return (
        <section
            className="min-h-screen flex items-center pt-16 sm:pt-20 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8 relative overflow-hidden"
            id="hero"
        >
            {/* Particle network background */}
            <ParticleCanvas />

            {/* Background 3D floating orbs — scaled down on mobile */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
                <div
                    className="hero-orb hero-orb-1 absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle at 60% 40%, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.06) 35%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
                <div
                    className="hero-orb hero-orb-2 absolute top-1/2 left-0 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle at 40% 60%, rgba(45,212,191,0.15) 0%, rgba(45,212,191,0.04) 35%, transparent 70%)',
                        filter: 'blur(55px)',
                    }}
                />
                <div
                    className="hero-orb hero-orb-3 absolute -bottom-20 right-1/3 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(129,140,248,0.12) 0%, rgba(99,102,241,0.03) 40%, transparent 70%)',
                        filter: 'blur(50px)',
                    }}
                />
            </div>

            <motion.div
                className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {/* ── Left Column ── */}
                <div className="space-y-4 sm:space-y-6">
                    {/* Profile Photo with 3D flip on hover */}
                    <motion.div variants={item} className="relative inline-block group" style={{ perspective: '800px' }}>
                        <div
                            className="w-24 h-24 sm:w-44 sm:h-44 lg:w-48 lg:h-48 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[transform:rotateY(180deg)]"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Front face */}
                            <div
                                className="absolute inset-0 rounded-full overflow-hidden ring-2 ring-[#6366F1]/40 ring-offset-2 sm:ring-offset-4 ring-offset-[#09090B] shadow-[0_0_40px_rgba(99,102,241,0.15)]"
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                <img
                                    src={candidate.photo}
                                    alt={`${candidate.name} — Profile Photo`}
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                            </div>
                            {/* Back face */}
                            <div
                                className="absolute inset-0 rounded-full ring-2 ring-[#2DD4BF]/40 ring-offset-2 sm:ring-offset-4 ring-offset-[#09090B] shadow-[0_0_30px_rgba(45,212,191,0.12)] flex items-center justify-center bg-[#111114]"
                                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                            >
                                <span className="font-mono text-xs sm:text-sm font-bold tracking-wider bg-gradient-to-r from-[#818CF8] to-[#2DD4BF] bg-clip-text text-transparent">
                                    DK
                                </span>
                            </div>
                        </div>
                        {/* Availability dot */}
                        {candidate.availability && (
                            <span className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#22C55E] border-2 border-[#09090B] animate-pulse z-10" />
                        )}
                    </motion.div>

                    <motion.p variants={item} className="font-mono text-[10px] sm:text-xs text-[#818CF8] tracking-widest uppercase">
                        const role = "Software Development Engineer";
                    </motion.p>

                    <motion.h1
                        variants={item}
                        className="text-3xl sm:text-5xl lg:text-[56px] font-bold font-sans text-[#FAFAFA] leading-[1.1] tracking-tight"
                    >
                        {candidate.name}
                    </motion.h1>

                    <motion.div variants={item} className="h-6 sm:h-8">
                        <span
                            id="typed-strings"
                            className="font-mono text-base sm:text-lg md:text-xl text-[#A1A1AA]"
                            ref={typedRef}
                        />
                    </motion.div>

                    <motion.p variants={item} className="text-[#A1A1AA] text-sm sm:text-base max-w-lg leading-relaxed">
                        {bioLine}
                    </motion.p>

                    {/* CTAs — stacked on tiny screens */}
                    <motion.div variants={item} className="flex flex-col xs:flex-row flex-wrap gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                        <a
                            href="#work"
                            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#6366F1] text-white font-semibold rounded-xl text-xs sm:text-sm hover:bg-[#5558E6] transition-all duration-200 shadow-[0_0_24px_rgba(99,102,241,0.25)] hover:shadow-[0_0_36px_rgba(99,102,241,0.4)]"
                        >
                            <Briefcase size={16} />
                            View My Work
                        </a>
                        <a
                            href="/Dhiraj_Kumar_Resume.pdf"
                            download
                            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-[#252529] text-[#FAFAFA] rounded-xl text-xs sm:text-sm hover:border-[#6366F1]/50 hover:text-[#818CF8] transition-all duration-200"
                        >
                            <Download size={16} />
                            Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[#A1A1AA] text-xs sm:text-sm hover:text-[#FAFAFA] transition-colors"
                        >
                            Let's Talk
                            <ArrowRight size={16} />
                        </a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div variants={item} className="flex items-center gap-5 pt-2 sm:pt-4">
                        <a
                            href={candidate.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href={candidate.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href={`mailto:${candidate.email}`}
                            aria-label="Email Dhiraj"
                            className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                        >
                            <Mail size={18} />
                        </a>
                    </motion.div>
                </div>

                {/* ── Right Column: Terminal ── */}
                <motion.div
                    variants={item}
                    className="bg-[#09090B] border border-[#252529] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] hidden lg:block ring-1 ring-white/[0.04]"
                >
                    {/* Terminal header bar */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#111114] border-b border-[#252529]">
                        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                        <span className="w-3 h-3 rounded-full bg-[#27CA40]" />
                        <span className="flex-1 text-center font-mono text-[10px] text-[#71717A] tracking-wider">
                            dhiraj — bash — 80×24
                        </span>
                    </div>

                    {/* Terminal body */}
                    <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-hidden">
                        {terminalLines.map((line, i) => (
                            <div key={i} className="flex gap-2">
                                {line.prompt && (
                                    <span className="text-[#2DD4BF] shrink-0">{line.prompt}</span>
                                )}
                                {line.output && (
                                    <span className="text-[#A1A1AA]">{line.output}</span>
                                )}
                                {line.cursor && (
                                    <span className="inline-block w-2 h-4 bg-[#6366F1] cursor-blink align-middle" />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile/Tablet terminal (simplified) */}
                <motion.div
                    variants={item}
                    className="bg-[#09090B] border border-[#252529] rounded-2xl overflow-hidden shadow-lg lg:hidden"
                >
                    <div className="flex items-center gap-2 px-3 py-2 bg-[#111114] border-b border-[#252529]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27CA40]" />
                    </div>
                    <div className="p-3 sm:p-4 font-mono text-[10px] sm:text-[11px] leading-relaxed overflow-x-auto">
                        <p><span className="text-[#2DD4BF]">$ cat skills.json</span></p>
                        <p className="text-[#A1A1AA]">{'>'} languages: [Py, C++, JS, Java]</p>
                        <p className="text-[#A1A1AA]">{'>'} backend: [Node, Express, REST]</p>
                        <p className="text-[#A1A1AA]">{'>'} devops: [Docker, GCloud, CI/CD]</p>
                        <p className="text-[#2DD4BF] mt-2">$ uptime</p>
                        <p className="text-[#A1A1AA]">{'>'} 99.9% — production systems</p>
                        <p className="mt-2">
                            <span className="text-[#2DD4BF]">$ </span>
                            <span className="inline-block w-2 h-3.5 bg-[#6366F1] cursor-blink align-middle" />
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}