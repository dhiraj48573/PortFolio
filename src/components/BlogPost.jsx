'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { blogPosts } from '../data/candidate';

/**
 * Renders a single blog post with full content.
 * Supports: paragraphs, headings, code blocks, ordered/unordered lists.
 */
function BlogContent({ content }) {
    return (
        <div className="space-y-4 sm:space-y-5">
            {content.map((block, i) => {
                switch (block.type) {
                    case 'h2':
                        return (
                            <h2 key={i} className="text-base sm:text-lg md:text-xl font-bold text-[#FAFAFA] mt-6 sm:mt-8 first:mt-0 tracking-tight">
                                {block.text}
                            </h2>
                        );
                    case 'p':
                        return (
                            <p key={i} className="text-[#A1A1AA] leading-relaxed text-xs sm:text-sm md:text-base">
                                {block.text}
                            </p>
                        );
                    case 'code':
                        return <CodeBlock key={i} code={block.text} />;
                    case 'ul':
                        return (
                            <ul key={i} className="space-y-1.5 sm:space-y-2 pl-5 list-none">
                                {block.items.map((item, j) => (
                                    <li key={j} className="text-xs sm:text-sm text-[#A1A1AA] flex items-start gap-2">
                                        <span className="text-[#6366F1] mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        );
                    case 'ol':
                        return (
                            <ol key={i} className="space-y-1.5 sm:space-y-2 pl-5 list-decimal">
                                {block.items.map((item, j) => (
                                    <li key={j} className="text-xs sm:text-sm text-[#A1A1AA] marker:text-[#6366F1] marker:font-mono">
                                        {item}
                                    </li>
                                ))}
                            </ol>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
}

/** Code block with copy button and syntax-style formatting */
function CodeBlock({ code }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="relative group rounded-xl overflow-hidden border border-[#252529] bg-[#09090B]">
            {/* Header bar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#111114] border-b border-[#252529]">
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27CA40]" />
                </div>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[10px] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors font-mono"
                    aria-label="Copy code"
                >
                    {copied ? (
                        <>
                            <Check size={12} className="text-[#22C55E]" />
                            <span className="text-[#22C55E]">Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy size={12} />
                            Copy
                        </>
                    )}
                </button>
            </div>
            {/* Code content */}
            <pre className="p-3 sm:p-5 overflow-x-auto text-[11px] sm:text-sm font-mono text-[#E0E0FF] leading-relaxed max-w-full">
                <code>{code}</code>
            </pre>
        </div>
    );
}

export default function BlogPost({ slug, onBack }) {
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="py-20 text-center">
                <p className="text-[#A1A1AA]">Post not found.</p>
                <button
                    onClick={onBack}
                    className="mt-4 text-[#6366F1] font-medium text-sm hover:underline"
                >
                    &larr; Back to Blog
                </button>
            </div>
        );
    }

    return (
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 min-h-screen" id="blog-post">
            <div className="max-w-3xl mx-auto">
                {/* Back button */}
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={onBack}
                    className="flex items-center gap-2 text-xs sm:text-sm text-[#A1A1AA] hover:text-[#6366F1] transition-colors mb-6 sm:mb-8"
                >
                    <ArrowLeft size={16} />
                    Back to Blog
                </motion.button>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-[#A1A1AA] font-mono mb-3 sm:mb-4">
                        <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FAFAFA] leading-tight mb-3 sm:mb-4 tracking-tight">
                        {post.title}
                    </h1>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-mono rounded-md bg-[#252529] text-[#818CF8]"
                            >
                                <Tag size={11} />
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <BlogContent content={post.content} />
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#252529] text-center"
                >
                    <p className="text-xs sm:text-sm text-[#A1A1AA] mb-3">
                        Enjoyed this article? Let's connect!
                    </p>
                    <button
                        onClick={onBack}
                        className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 border border-[#252529] text-[#FAFAFA] rounded-xl text-xs sm:text-sm hover:border-[#6366F1]/50 hover:text-[#818CF8] transition-all duration-200"
                    >
                        <ArrowLeft size={14} />
                        Read More Articles
                    </button>
                </motion.div>
            </div>
        </section>
    );
}