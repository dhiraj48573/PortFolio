'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { metrics } from '../data/candidate';
import TiltCard from './TiltCard';

/** Animated number that counts up to the target value */
function AnimatedNumber({ target, duration = 2000, suffix = '', decimals = 0 }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        let raf;
        const startTime = performance.now();
        const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out quad
            const eased = 1 - (1 - progress) * (1 - progress);
            const val = eased * target;
            setCurrent(val);
            if (progress < 1) {
                raf = requestAnimationFrame(animate);
            } else {
                setCurrent(target);
            }
        };
        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, [target, duration]);

    const formatted = current.toFixed(decimals);
    return <>{formatted}{suffix}</>;
}

/** A single metric card with count-up animation triggered on scroll */
function MetricCard({ metric, delay }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <TiltCard maxTilt={5} scale={1.04}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: delay * 0.1 }}
                className="flex flex-col items-center text-center p-3 sm:p-6"
            >
                <span className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tabular-nums bg-gradient-to-b from-[#FAFAFA] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
                    {visible ? (
                        <AnimatedNumber
                            target={metric.value}
                            duration={2000}
                            suffix={metric.suffix}
                            decimals={metric.decimals || 0}
                        />
                    ) : (
                        '0'
                    )}
                </span>
                <span className="text-[#A1A1AA] text-[10px] sm:text-xs md:text-sm mt-1.5 sm:mt-2 max-w-[100px] sm:max-w-[120px] leading-tight font-medium">
                    {metric.label}
                </span>
            </motion.div>
        </TiltCard>
    );
}

export default function MetricsBar() {
    return (
        <section className="py-10 sm:py-12 md:py-16 border-y border-[#252529] bg-[#09090B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    {metrics.map((m, i) => (
                        <MetricCard key={m.label} metric={m} delay={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}