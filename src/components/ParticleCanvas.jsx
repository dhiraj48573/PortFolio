'use client';

import { useEffect, useRef } from 'react';

/**
 * Animated 3D particle network background canvas.
 * Renders floating nodes in 3D coordinate space projected onto 2D space.
 * The entire particle system rotates in 3D space based on the cursor position
 * relative to the center of the viewport, creating a deep parallax effect.
 */
export default function ParticleCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width, height;
        let particles = [];
        let mouse = { x: 0, y: 0 };
        let currentRotX = 0;
        let currentRotY = 0;
        let animationId;

        // Reduce particle count and connectivity ranges on small screens for performance
        const isMobile = window.innerWidth < 768;
        const PARTICLE_COUNT = isMobile ? 35 : 85;
        const CONNECTION_DIST = isMobile ? 120 : 180;

        class Particle {
            constructor() {
                this.reset();
                // Randomize starting depth Z (0 to 800) so nodes don't all spawn at the back
                this.z = Math.random() * 800;
            }
            reset() {
                this.x = (Math.random() - 0.5) * width * 1.6;
                this.y = (Math.random() - 0.5) * height * 1.6;
                this.z = 800;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.vz = -Math.random() * 0.3 - 0.15; // float forward
                this.radius = Math.random() * 2.2 + 0.8;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.z += this.vz;

                // Reset if it flies behind the camera or out of bounds
                if (this.z <= 0 || Math.abs(this.x) > width * 1.2 || Math.abs(this.y) > height * 1.2) {
                    this.reset();
                }
            }
        }

        function resize() {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
            particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Interpolate Y and X rotation angles towards targets
            const targetRotY = (mouse.x / (width / 2 || 1)) * 0.24; // Y rotation limit
            const targetRotX = -(mouse.y / (height / 2 || 1)) * 0.24; // X rotation limit
            currentRotY += (targetRotY - currentRotY) * 0.05;
            currentRotX += (targetRotX - currentRotX) * 0.05;

            const cosX = Math.cos(currentRotX);
            const sinX = Math.sin(currentRotX);
            const cosY = Math.cos(currentRotY);
            const sinY = Math.sin(currentRotY);

            const centerX = width / 2;
            const centerY = height / 2;
            const focalLength = 400; // camera focal length

            const projected = [];

            // Project particles to 2D screen space
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update();

                // Rotate around X axis
                const y1 = p.y * cosX - p.z * sinX;
                const z1 = p.y * sinX + p.z * cosX;

                // Rotate around Y axis
                const x2 = p.x * cosY + z1 * sinY;
                const z2 = -p.x * sinY + z1 * cosY;

                // Perspective projection scale (closer elements are larger)
                const scale = focalLength / (focalLength + z2);

                // Avoid projection division by zero if depth goes behind focal point
                if (z2 + focalLength <= 50) {
                    projected.push(null);
                    continue;
                }

                const px = centerX + x2 * scale;
                const py = centerY + y1 * scale;
                const pr = p.radius * scale;

                projected.push({ x: px, y: py, r: pr, opacity: scale });

                // Render particle dot
                ctx.beginPath();
                ctx.arc(px, py, Math.max(0.2, pr), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99, 102, 241, ${Math.min(0.75, scale * 0.5)})`;
                ctx.fill();
            }

            // Draw connection lines in 3D perspective
            if (window.innerWidth >= 360) {
                for (let i = 0; i < particles.length; i++) {
                    const pi = projected[i];
                    if (!pi) continue;

                    for (let j = i + 1; j < particles.length; j++) {
                        const pj = projected[j];
                        if (!pj) continue;

                        // Calculate straight-line Euclidean distance in 3D
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const dz = particles[i].z - particles[j].z;
                        const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

                        if (dist3D < CONNECTION_DIST) {
                            // Fade based on distance and projection opacity
                            const opacity = (1 - dist3D / CONNECTION_DIST) * 0.35 * Math.min(pi.opacity, pj.opacity);
                            ctx.beginPath();
                            ctx.moveTo(pi.x, pi.y);
                            ctx.lineTo(pj.x, pj.y);
                            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
                            ctx.lineWidth = 0.55 * Math.min(pi.opacity, pj.opacity);
                            ctx.stroke();
                        }
                    }
                }
            }

            animationId = requestAnimationFrame(animate);
        }

        function handleMouseMove(e) {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left - width / 2;
            mouse.y = e.clientY - rect.top - height / 2;
        }

        function handleMouseLeave() {
            mouse.x = 0;
            mouse.y = 0;
        }

        resize();
        animate();

        window.addEventListener('resize', resize);
        // Bind to parent element or document to react to movements across the Hero section
        const parent = canvas.parentElement || document;
        parent.addEventListener('mousemove', handleMouseMove);
        parent.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
            parent.removeEventListener('mousemove', handleMouseMove);
            parent.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
        />
    );
}