import { Helmet } from 'react-helmet-async';
import { candidate, services, projects } from '../data/candidate';

const siteUrl = 'https://dhiraj-kumar.vercel.app';
const ogImage = `${siteUrl}/og-image.png`;

export default function SEO({ blogPost = null }) {
    const title = blogPost
        ? `${blogPost.title} | ${candidate.name}`
        : `${candidate.name} | Software Engineer & Full-Stack Developer | Haridwar, India`;

    const description = blogPost
        ? blogPost.excerpt
        : `${candidate.name} — Full-Stack Software Engineer. ${projects.length} production apps shipped, 300+ LeetCode, CGPA ${candidate.cgpa}. React, Node.js, Docker, Google Cloud Run. Available for freelance & full-time SDE roles.`;

    const url = blogPost
        ? `${siteUrl}/blog/${blogPost.slug}`
        : siteUrl;

    return (
        <Helmet>
            {/* Primary Meta */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content={candidate.name} />

            {/* Open Graph */}
            <meta property="og:type" content={blogPost ? 'article' : 'website'} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`${candidate.name} — Software Engineer & Full-Stack Developer`} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={`${candidate.name} — Portfolio`} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content={`${candidate.name} — Software Engineer & Full-Stack Developer`} />

            {/* Article-specific (blog posts only) */}
            {blogPost && (
                <>
                    <meta property="article:published_time" content={blogPost.date} />
                    <meta property="article:author" content={candidate.name} />
                    {blogPost.tags?.map((tag) => (
                        <meta key={tag} property="article:tag" content={tag} />
                    ))}
                </>
            )}

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* ============= JSON-LD Structured Data ============= */}

            {/* WebSite — Search box trigger (Sitelinks Search Box) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: `${candidate.name} Portfolio`,
                    url: siteUrl,
                    description: `Portfolio of ${candidate.name} — Full-Stack Software Engineer. ${projects.length} production apps, DSA, AI/ML, Cloud.`,
                    potentialAction: {
                        '@type': 'SearchAction',
                        target: {
                            '@type': 'EntryPoint',
                            urlTemplate: `${siteUrl}?s={search_term_string}`,
                        },
                        'query-input': 'required name=search_term_string',
                    },
                })}
            </script>

            {/* Organization */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: `${candidate.name} — Freelance Development`,
                    url: siteUrl,
                    logo: `${siteUrl}/favicon.svg`,
                    contactPoint: {
                        '@type': 'ContactPoint',
                        telephone: candidate.phoneIntl,
                        contactType: 'customer service',
                        email: candidate.email,
                        availableLanguage: ['English', 'Hindi'],
                    },
                    sameAs: [
                        candidate.github,
                        candidate.linkedin,
                        `https://wa.me/91${candidate.phoneAlt}`,
                    ],
                })}
            </script>

            {/* Person */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Person',
                    name: candidate.name,
                    givenName: candidate.firstName,
                    url: siteUrl,
                    image: `${siteUrl}${candidate.photo}`,
                    jobTitle: 'Software Engineer & Full-Stack Developer',
                    alumniOf: {
                        '@type': 'CollegeOrUniversity',
                        name: candidate.university,
                    },
                    knowsAbout: [
                        'Full-Stack Development',
                        'React',
                        'Node.js',
                        'Docker',
                        'Google Cloud Run',
                        'Python',
                        'Data Structures & Algorithms',
                        'AI/ML Integration',
                        'WebSockets',
                        'RBAC Authentication',
                        'OCR Pipelines',
                    ],
                    sameAs: [candidate.github, candidate.linkedin],
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Haridwar',
                        addressRegion: 'Uttarakhand',
                        addressCountry: 'IN',
                    },
                })}
            </script>

            {/* ItemList — Services offered */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ItemList',
                    name: 'Services',
                    itemListElement: services.map((s, i) => ({
                        '@type': 'ListItem',
                        position: i + 1,
                        item: {
                            '@type': 'Service',
                            name: s.title,
                            description: s.desc,
                        },
                    })),
                })}
            </script>

            {/* BreadcrumbList */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                        blogPost
                            ? { '@type': 'ListItem', position: 2, name: blogPost.title, item: url }
                            : { '@type': 'ListItem', position: 2, name: 'Portfolio', item: siteUrl },
                    ],
                })}
            </script>

            {/* Article — only for blog posts */}
            {blogPost && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: blogPost.title,
                        description: blogPost.excerpt,
                        author: {
                            '@type': 'Person',
                            name: candidate.name,
                            url: siteUrl,
                        },
                        datePublished: blogPost.date,
                        dateModified: blogPost.date,
                        url: url,
                        publisher: {
                            '@type': 'Organization',
                            name: `${candidate.name} — Portfolio`,
                            url: siteUrl,
                        },
                        image: ogImage,
                        mainEntityOfPage: {
                            '@type': 'WebPage',
                            '@id': url,
                        },
                        keywords: blogPost.tags?.join(', '),
                    })}
                </script>
            )}

            {/* SocialProfile — GitHub + LinkedIn */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ProfilePage',
                    name: `${candidate.name} — Developer Profile`,
                    description: `${candidate.name} — Full-Stack Engineer. ${projects.length} production apps, 300+ LeetCode problems, expertise in React, Node.js, Docker, Cloud.`,
                    url: siteUrl,
                    about: {
                        '@type': 'Person',
                        name: candidate.name,
                        sameAs: [candidate.github, candidate.linkedin],
                    },
                })}
            </script>
        </Helmet>
    );
}