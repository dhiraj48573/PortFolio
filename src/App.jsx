import { useState, useCallback, useMemo, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Nav from './components/Nav';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MetricsBar from './components/Metrics';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import DSA from './components/DSA';
import Certifications from './components/Certs';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { blogPosts } from './data/candidate';

/**
 * Dhiraj Kumar — Production-Grade Developer Portfolio
 *
 * Architecture:
 * - Single-page layout with 12 sections + blog (client-side routing)
 * - Each section is a self-contained component with scroll-reveal animations
 * - Data sourced from src/data/candidate.js — single source of truth
 * - Framer Motion for orchestrated animations
 * - Web3Forms for contact form (already configured with access key)
 * - react-helmet-async for SEO meta tags
 * - Tailwind CSS v4 with custom color tokens in index.css
 * - Particle network canvas background on Hero
 * - 3D flip hover effect on profile photo
 */

export default function App() {
  const [activePost, setActivePost] = useState(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const handleSelectPost = useCallback((slug) => {
    setActivePost(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToBlog = useCallback(() => {
    setActivePost(null);
    // Scroll to blog section after a short delay for the DOM to update
    setTimeout(() => {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, []);

  // Resolve the active blog post data for dynamic SEO
  const activeBlogPost = useMemo(() => {
    if (!activePost) return null;
    return blogPosts.find((p) => p.slug === activePost) || null;
  }, [activePost]);

  // Blog post view (full page)
  if (activePost) {
    return (
      <HelmetProvider>
        <SEO blogPost={activeBlogPost} />
        <div className="min-h-screen bg-[#0A0A0F] text-[#F0F0FF]">
          <Nav theme={theme} toggleTheme={toggleTheme} />
          <main>
            <BlogPost slug={activePost} onBack={handleBackToBlog} />
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    );
  }

  // Main portfolio page
  return (
    <HelmetProvider>
      <SEO />
      <div className="min-h-screen bg-[#0A0A0F] text-[#F0F0FF]">
        <Nav theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <AboutMe />
          <MetricsBar />
          <Projects />
          <Experience />
          <Blog onSelectPost={handleSelectPost} />
          <Achievements />
          <Skills />
          <DSA />
          <Certifications />
          <HireMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
