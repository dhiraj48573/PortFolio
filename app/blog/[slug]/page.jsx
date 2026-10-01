import { blogPosts } from '@/src/data/candidate';
import { notFound } from 'next/navigation';
import BlogPost from '@/src/components/BlogPost';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} — Dhiraj Kumar Blog`,
    description: post.excerpt,
    keywords: [...post.tags, 'Dhiraj Kumar', 'Engineering Blog', 'Tech Articles'],
    alternates: {
      canonical: `https://dhirajkumar.me/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://dhirajkumar.me/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Dhiraj Kumar'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Dhiraj Kumar',
      url: 'https://dhirajkumar.me',
    },
    url: `https://dhirajkumar.me/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
        <Nav />
        <main className="pt-24 pb-16">
          <BlogPost slug={slug} />
        </main>
        <Footer />
      </div>
    </>
  );
}
