import { useRef, useState, useCallback } from 'react';

/**
 * TiltCard — Reusable 3D mouse-tracking card wrapper.
 * Applies rotateX/rotateY transforms based on cursor position within the card,
 * plus an optional glare/shine overlay.
 * Automatically disables 3D tilt on touch devices and small screens.
 *
 * Props:
 *   className  — additional classes for the outer wrapper
 *   glare      — show the diagonal shine overlay (default true)
 *   maxTilt    — max rotation in degrees (default 8)
 *   scale      — scale on hover (default 1.02)
 *   children   — card content
 */
export default function TiltCard({
    className = '',
    glare = true,
    maxTilt = 8,
    scale = 1.02,
    children,
}) {
    const cardRef = useRef(null);
    const [style, setStyle] = useState({ transform: '', glareOpacity: 0, glareX: 50, glareY: 50 });
    const [isTouchDevice] = useState(() => {
        if (typeof window === 'undefined') return false;
        const hasTouch = 'ontouchstart' in window || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);
        const isSmall = window.innerWidth < 768;
        return hasTouch || isSmall;
    });
    const raf = useRef(null);

    const handleMouseMove = useCallback(
        (e) => {
            if (!cardRef.current) return;
            if (raf.current) cancelAnimationFrame(raf.current);
            raf.current = requestAnimationFrame(() => {
                const rect = cardRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const w = rect.width;
                const h = rect.height;
                const nx = x / w - 0.5;
                const ny = y / h - 0.5;
                const rx = -(ny * maxTilt * 2);
                const ry = nx * maxTilt * 2;
                const gp = glare ? Math.min(0.12, 0.04 + Math.abs(nx) * 0.08 + Math.abs(ny) * 0.08) : 0;
                setStyle({
                    transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(${scale},${scale},${scale})`,
                    glareOpacity: gp,
                    glareX: (nx + 0.5) * 100,
                    glareY: (ny + 0.5) * 100,
                });
            });
        },
        [maxTilt, scale, glare]
    );

    const handleMouseLeave = useCallback(() => {
        if (raf.current) cancelAnimationFrame(raf.current);
        setStyle({
            transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
            glareOpacity: 0,
            glareX: 50,
            glareY: 50,
        });
    }, []);

    // If touch device or small screen, render without tilt (performance)
    if (isTouchDevice) {
        return (
            <div ref={cardRef} className={`relative overflow-hidden ${className}`}>
                {children}
            </div>
        );
    }

    return (
        <div
            ref={cardRef}
            className={`relative overflow-hidden ${className}`}
            style={{
                transformStyle: 'preserve-3d',
                transform: style.transform,
                transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                willChange: 'transform',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {glare && (
                <div
                    className="pointer-events-none absolute inset-0 z-10"
                    style={{
                        opacity: style.glareOpacity,
                        transition: 'opacity 0.3s ease',
                        background: `radial-gradient(circle at ${style.glareX}% ${style.glareY}%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)`,
                    }}
                />
            )}
        </div>
    );
}