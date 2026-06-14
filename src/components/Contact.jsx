import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { candidate } from '../data/candidate';

/**
 * Contact form wired with Web3Forms (from previous portfolio).
 * Access key: already configured from portfolio-1-delta-indol.vercel.app
 *
 * Web3Forms is a free API service: https://web3forms.com/
 * No account needed — just the access key below.
 * Messages are delivered to: dhirajsinghmichal@gmail.com
 */

const WEB3FORMS_ACCESS_KEY = 'f0dd5bb7-4016-488e-913f-adbcf393459b';

const projectTypes = [
    'Full-Stack Web App',
    'Backend API Development',
    'AI/ML Integration',
    'Cloud Deployment',
    'DSA Mentoring',
    'Code Review',
    'Other',
];

const budgetRanges = [
    'Under ₹8,000 / $100',
    '₹8,000 – ₹25,000 / $100–$300',
    '₹25,000 – ₹50,000 / $300–$600',
    '₹50,000+ / $600+',
    'Let\'s discuss',
];

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: form.name,
                    email: form.email,
                    subject: `[Portfolio] ${form.projectType} — ${form.budget}`,
                    message: `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`,
                    botcheck: '',
                }),
            });

            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setForm({ name: '', email: '', projectType: '', budget: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="contact">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 sm:mb-16"
                >
                    <span className="section-label mb-4">Contact</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] tracking-tight mt-4">
                        Let's Build Something
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
                    {/* Left: Form */}
                    <motion.form
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        onSubmit={handleSubmit}
                        className="space-y-4 sm:space-y-5"
                    >
                        {/* Honeypot (hidden) */}
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                        {/* Name + Email row on xs+ */}
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-[10px] sm:text-xs text-[#A1A1AA] mb-1.5 font-medium">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#16161A] border border-[#252529] rounded-xl text-[#FAFAFA] text-xs sm:text-sm placeholder:text-[#71717A] focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]/30 transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-[10px] sm:text-xs text-[#A1A1AA] mb-1.5 font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#16161A] border border-[#252529] rounded-xl text-[#FAFAFA] text-xs sm:text-sm placeholder:text-[#71717A] focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]/30 transition-all"
                                />
                            </div>
                        </div>

                        {/* Project Type + Budget row */}
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="projectType" className="block text-[10px] sm:text-xs text-[#A1A1AA] mb-1.5 font-medium">
                                    Project Type
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    required
                                    value={form.projectType}
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#16161A] border border-[#252529] rounded-xl text-[#FAFAFA] text-xs sm:text-sm focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]/30 transition-all appearance-none"
                                >
                                    <option value="" disabled>Select project type</option>
                                    {projectTypes.map((t) => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="budget" className="block text-[10px] sm:text-xs text-[#A1A1AA] mb-1.5 font-medium">
                                    Budget Range
                                </label>
                                <select
                                    id="budget"
                                    name="budget"
                                    required
                                    value={form.budget}
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#16161A] border border-[#252529] rounded-xl text-[#FAFAFA] text-xs sm:text-sm focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]/30 transition-all appearance-none"
                                >
                                    <option value="" disabled>Select budget range</option>
                                    {budgetRanges.map((b) => (
                                        <option key={b} value={b}>{b}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-[10px] sm:text-xs text-[#A1A1AA] mb-1.5 font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                placeholder="Tell me about your project..."
                                value={form.message}
                                onChange={handleChange}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#16161A] border border-[#252529] rounded-xl text-[#FAFAFA] text-xs sm:text-sm placeholder:text-[#71717A] focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]/30 transition-all resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="inline-flex items-center justify-center gap-2 w-full xs:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-[#6366F1] text-white font-semibold rounded-xl text-sm hover:bg-[#5558E6] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                        >
                            <Send size={16} />
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {/* Status feedback */}
                        {status === 'success' && (
                            <p className="text-[#22C55E] text-xs sm:text-sm font-medium">
                                ✓ Message sent! I'll get back to you within 4 hours.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-[#EF4444] text-xs sm:text-sm">
                                ✗ Something went wrong. Try again or message me on WhatsApp.
                            </p>
                        )}
                    </motion.form>

                    {/* Right: Direct contact */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center space-y-4 sm:space-y-6"
                    >
                        <div className="bg-[#16161A] border border-[#252529] rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-5">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#111114] flex items-center justify-center shrink-0">
                                    <Mail size={16} className="text-[#6366F1]" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] sm:text-xs text-[#A1A1AA]">Email</p>
                                    <a
                                        href={`mailto:${candidate.email}`}
                                        className="text-xs sm:text-sm text-[#FAFAFA] hover:text-[#6366F1] transition-colors break-all"
                                    >
                                        {candidate.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#111114] flex items-center justify-center shrink-0">
                                    <Phone size={16} className="text-[#6366F1]" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-[#A1A1AA]">Phone / WhatsApp</p>
                                    <a
                                        href={`tel:+91${candidate.phoneAlt}`}
                                        className="text-xs sm:text-sm text-[#FAFAFA] hover:text-[#6366F1] transition-colors"
                                    >
                                        +91 {candidate.phoneAlt}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#111114] flex items-center justify-center shrink-0">
                                    <MapPin size={16} className="text-[#6366F1]" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-[#A1A1AA]">Location</p>
                                    <p className="text-xs sm:text-sm text-[#FAFAFA]">{candidate.location}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#111114] flex items-center justify-center shrink-0">
                                    <Clock size={16} className="text-[#22C55E]" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-[#A1A1AA]">Response Time</p>
                                    <p className="text-xs sm:text-sm text-[#22C55E] font-medium">⚡ {candidate.responseTime}</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-[10px] sm:text-xs text-[#A1A1AA]/60 text-center">
                            Prefer a direct message?{' '}
                            <a
                                href={`https://wa.me/91${candidate.phoneAlt}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#6366F1] hover:underline"
                            >
                                Open WhatsApp
                            </a>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}