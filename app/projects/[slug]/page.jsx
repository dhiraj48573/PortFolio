import { projects, candidate } from '@/src/data/candidate';
import { notFound } from 'next/navigation';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code2, Server, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GithubIcon as Github } from '@/src/components/Icons';

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.name} | Dhiraj Kumar Portfolio`,
    description: `${project.oneLiner} Built by Dhiraj Kumar — Software Developer & Full-Stack Engineer.`,
    keywords: [
      project.name,
      ...project.stack,
      'Dhiraj Kumar',
      'Software Developer',
      'Full Stack Project',
      'Case Study',
    ],
    alternates: {
      canonical: `https://dhirajkumar.me/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} — Full Stack Case Study by Dhiraj Kumar`,
      description: project.oneLiner,
      url: `https://dhirajkumar.me/projects/${project.slug}`,
      type: 'article',
      images: ['/Photo-dhiru.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} | Dhiraj Kumar`,
      description: project.oneLiner,
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const jsonLdSoftware = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.oneLiner,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    author: {
      '@type': 'Person',
      name: candidate.name,
      url: 'https://dhirajkumar.me',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
      />
      <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
        <Nav />
        <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#818CF8] hover:text-[#2DD4BF] transition-colors mb-8 font-mono"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          {/* Title & Badge */}
          <div className="mb-6">
            <span className="section-label mb-3">Case Study #{project.number}</span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAFAFA] mb-4">
              {project.name}
            </h1>
            <p className="text-base sm:text-xl text-[#A1A1AA] leading-relaxed">
              {project.oneLiner}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 mb-10 pb-8 border-b border-[#252529]">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#6366F1] text-white font-medium text-sm hover:bg-[#4F46E5] transition-all shadow-md"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#16161A] border border-[#252529] text-[#FAFAFA] font-medium text-sm hover:border-[#6366F1]/50 transition-all"
              >
                <Github size={16} /> View Source Code
              </a>
            )}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#16161A] border border-[#252529] rounded-xl p-6">
              <h2 className="text-lg font-semibold text-[#FAFAFA] flex items-center gap-2 mb-3">
                <Code2 className="text-[#EF4444]" size={20} /> The Problem
              </h2>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-[#16161A] border border-[#252529] rounded-xl p-6">
              <h2 className="text-lg font-semibold text-[#FAFAFA] flex items-center gap-2 mb-3">
                <ShieldCheck className="text-[#2DD4BF]" size={20} /> The Solution
              </h2>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture & Stack */}
          <div className="bg-[#16161A] border border-[#252529] rounded-xl p-6 sm:p-8 mb-12">
            <h2 className="text-lg font-semibold text-[#FAFAFA] flex items-center gap-2 mb-4">
              <Server className="text-[#818CF8]" size={20} /> Architecture & Tech Stack
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#2DD4BF] mb-6">
              {project.arch}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-[#252529] text-[#FAFAFA] border border-[#33333A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Metrics & Outcomes */}
          <div className="bg-[#16161A] border border-[#252529] rounded-xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-[#FAFAFA] mb-4">
              Key Metrics & Production Impact
            </h2>
            <ul className="space-y-3">
              {project.metrics.map((metric, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                  <CheckCircle2 size={18} className="text-[#22C55E] shrink-0 mt-0.5" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
