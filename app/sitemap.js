import { blogPosts } from '@/src/data/candidate';

export default async function sitemap() {
  const baseUrl = 'https://dhirajkumar.me';

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...blogUrls,
  ];
}
