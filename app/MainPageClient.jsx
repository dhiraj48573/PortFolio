'use client';

import { useState } from 'react';
import Nav from '@/src/components/Nav';
import Hero from '@/src/components/Hero';
import Metrics from '@/src/components/Metrics';
import AboutMe from '@/src/components/AboutMe';
import Projects from '@/src/components/Projects';
import Experience from '@/src/components/Experience';
import Skills from '@/src/components/Skills';
import Achievements from '@/src/components/Achievements';
import Certifications from '@/src/components/Certs';
import DSA from '@/src/components/DSA';
import Blog from '@/src/components/Blog';
import BlogPost from '@/src/components/BlogPost';
import HireMe from '@/src/components/HireMe';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';

export default function MainPageClient() {
  const [theme, setTheme] = useState('dark');
  const [activeBlogSlug, setActiveBlogSlug] = useState(null);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  if (activeBlogSlug) {
    return (
      <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
        <Nav theme={theme} toggleTheme={toggleTheme} />
        <main className="pt-24 pb-16">
          <BlogPost
            slug={activeBlogSlug}
            onBack={() => setActiveBlogSlug(null)}
          />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] relative">
      <Nav theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero />
        <div className="gradient-divider max-w-6xl mx-auto" />

        <Metrics />
        <div className="gradient-divider max-w-6xl mx-auto" />

        <AboutMe />
        <div className="gradient-divider max-w-6xl mx-auto" />

        <Projects />
        <div className="gradient-divider max-w-6xl mx-auto" />

        <Experience />
        <div className="gradient-divider max-w-6xl mx-auto" />

        <Skills />
        <div className="gradient-divider max-w-6xl mx-auto" />

        <Achievements />
        <div className="gradient-divider max-w-6xl mx-auto" />

        <Certifications />
        <div className="gradient-divider max-w-6xl mx-auto" />

        <DSA />
        <div className="gradient-divider max-w-6xl mx-auto" />

        <Blog onSelectPost={(slug) => setActiveBlogSlug(slug)} />
        <div className="gradient-divider max-w-6xl mx-auto" />

        <HireMe />
        <div className="gradient-divider max-w-6xl mx-auto" />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
