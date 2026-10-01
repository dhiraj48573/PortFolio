import { blogPosts } from '@/src/data/candidate';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Engineering Blog | Dhiraj Kumar — Software Developer',
  description: 'Technical articles, system design case studies, WebSockets, Docker, and full-stack development tutorials written by Dhiraj Kumar.',
  alternates: {
    canonical: 'https://dhirajkumar.me/blog',
  },
  openGraph: {
    title: 'Engineering Blog — Dhiraj Kumar',
    description: 'Technical articles, system design case studies, and full-stack engineering guides.',
    url: 'https://dhirajkumar.me/blog',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
      <Nav />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <span className="section-label mb-3">Technical Writing</span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAFA] mb-4">
            Engineering Blog & Case Studies
          </h1>
          <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Practical articles on WebSockets, Docker, Node.js RBAC, OCR pipelines, and system optimization based on real production experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-[#16161A] border border-[#252529] hover:border-[#6366F1]/50 rounded-xl p-6 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#A1A1AA] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-[#FAFAFA] group-hover:text-[#818CF8] transition-colors mb-3">
                  {post.title}
                </h2>

                <p className="text-sm text-[#A1A1AA] line-clamp-3 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#252529] text-[#818CF8]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#6366F1] font-semibold group-hover:gap-2.5 transition-all">
                  Read Article <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
