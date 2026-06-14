import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/candidate';
import TiltCard from './TiltCard';

/**
 * Blog listing section — shows all posts as cards with excerpt, tags, and date.
 * Clicking a card navigates to the individual post.
 */
export default function Blog({ onSelectPost }) {
    const [hoveredSlug, setHoveredSlug] = useState(null);

    // Sort posts by date (newest first)
    const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="blog">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 sm:mb-16"
                >
                    <span className="section-label mb-4">Blog</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] tracking-tight mt-4">
                        Writing & Technical Posts
                    </h2>
                    <p className="text-[#A1A1AA] text-xs sm:text-sm mt-2 max-w-xl">
                        Deep dives into WebSockets, Docker, DSA, and production engineering — from my experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {sorted.map((post, i) => (
                        <TiltCard key={post.slug} maxTilt={6} scale={1.03}>
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                onMouseEnter={() => setHoveredSlug(post.slug)}
                                onMouseLeave={() => setHoveredSlug(null)}
                                onClick={() => onSelectPost && onSelectPost(post.slug)}
                                className="bg-[#16161A] border border-[#252529] rounded-xl p-4 sm:p-6 cursor-pointer hover:border-[#6366F1]/30 transition-all duration-200 group"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => { if (e.key === 'Enter') onSelectPost && onSelectPost(post.slug); }}
                            >
                                {/* Meta row */}
                                <div className="flex items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] text-[#A1A1AA] font-mono mb-2 sm:mb-3">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} />
                                        {post.readTime}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#FAFAFA] mb-2 group-hover:text-[#818CF8] transition-colors tracking-tight">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                                    {post.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-[#252529] text-[#818CF8]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {post.tags.length > 3 && (
                                        <span className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-[#252529] text-[#A1A1AA]">
                                            +{post.tags.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Read more link */}
                                <div className="flex items-center gap-1.5 text-xs text-[#6366F1] font-medium group-hover:gap-2 transition-all">
                                    Read Article
                                    <ArrowRight size={14} className={hoveredSlug === post.slug ? 'translate-x-1 transition-transform' : 'transition-transform'} />
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}