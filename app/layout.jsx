import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { candidate } from '@/src/data/candidate';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://dhirajkumar.me'),
  title: {
    default: `${candidate.name} — ${candidate.title}`,
    template: `%s | ${candidate.name}`,
  },
  description:
    'Portfolio of Dhiraj Kumar — Software Engineer, Full-Stack Web Developer, and AI/ML Specialist. CGPA 8.88, 300+ LeetCode problems, 3 internships, 5+ production projects shipped.',
  keywords: [
    'Dhiraj Kumar',
    'Dhiraj Kumar Portfolio',
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'AI ML Engineer',
    'Gurukul Kangri University',
    'LeetCode 300',
    'Web Developer India',
    'Haridwar Software Engineer',
  ],
  authors: [{ name: 'Dhiraj Kumar', url: 'https://dhirajkumar.me' }],
  creator: 'Dhiraj Kumar',
  publisher: 'Dhiraj Kumar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://dhirajkumar.me',
  },
  openGraph: {
    title: `${candidate.name} — ${candidate.title}`,
    description:
      'Explore projects, experience, technical skills, and blogs by Dhiraj Kumar. Specializing in MERN stack, WebSockets, Docker, Google Cloud Run, and AI/ML integrations.',
    url: 'https://dhirajkumar.me',
    siteName: 'Dhiraj Kumar Portfolio',
    images: [
      {
        url: '/Photo-dhiru.jpg',
        width: 1200,
        height: 630,
        alt: `${candidate.name} — Software Engineer`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${candidate.name} — ${candidate.title}`,
    description:
      'Full-Stack Engineer & AI/ML Specialist. 300+ LeetCode problems, 3 internships, 5+ projects shipped.',
    images: ['/Photo-dhiru.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: candidate.name,
    jobTitle: 'Software Engineer',
    url: 'https://dhirajkumar.me',
    sameAs: [candidate.github, candidate.linkedin],
    alumniOf: candidate.university,
    knowsAbout: [
      'Full-Stack Development',
      'React',
      'Node.js',
      'Machine Learning',
      'Artificial Intelligence',
      'Docker',
      'Google Cloud Platform',
      'Data Structures and Algorithms',
    ],
  };

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://dhirajkumar.me',
    name: `${candidate.name} Portfolio`,
    author: {
      '@type': 'Person',
      name: candidate.name,
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="bg-[#09090B] text-[#FAFAFA] antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
