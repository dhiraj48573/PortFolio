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
    default: 'Dhiraj Kumar | Software Developer & Full-Stack Developer',
    template: '%s | Dhiraj Kumar',
  },
  description:
    'Dhiraj Kumar is a Software Developer and Full-Stack Developer specializing in React, Node.js, MongoDB, REST APIs, Docker, WebSockets, SaaS and modern web applications in India.',
  keywords: [
    'Dhiraj Kumar',
    'Dhiraj Kumar developer',
    'Dhiraj Kumar software developer',
    'Dhiraj Kumar full stack developer',
    'Dhiraj Kumar MERN developer',
    'Dhiraj Kumar software engineer',
    'Dhiraj Kumar portfolio',
    'Dhiraj Kumar India',
    'Dhiraj Kumar React developer',
    'Dhiraj Kumar Node.js developer',
    'Dhiraj Kumar web developer',
    'dhirajkumar.me',
  ],
  authors: [{ name: 'Dhiraj Kumar', url: 'https://dhirajkumar.me' }],
  creator: 'Dhiraj Kumar',
  publisher: 'Dhiraj Kumar',
  alternates: {
    canonical: 'https://dhirajkumar.me',
  },
  openGraph: {
    title: 'Dhiraj Kumar | Software Developer & Full-Stack Developer',
    description:
      'Official personal portfolio of Dhiraj Kumar — Software Developer & Full-Stack Developer building scalable web applications with React, Node.js, WebSockets, and Docker.',
    url: 'https://dhirajkumar.me',
    siteName: 'Dhiraj Kumar Portfolio',
    images: [
      {
        url: '/Photo-dhiru.jpg',
        width: 1200,
        height: 630,
        alt: 'Dhiraj Kumar — Software Developer & Full-Stack Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhiraj Kumar | Software Developer & Full-Stack Developer',
    description:
      'Official personal portfolio of Dhiraj Kumar — Software Developer specializing in React, Node.js, Docker & WebSockets.',
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
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://dhirajkumar.me/#person',
        name: candidate.name,
        givenName: candidate.firstName,
        jobTitle: 'Software Developer & Full-Stack Engineer',
        description:
          'Software Developer specializing in React, Node.js, MongoDB, WebSockets, Docker, and AI integrations.',
        url: 'https://dhirajkumar.me/',
        image: 'https://dhirajkumar.me/Photo-dhiru.jpg',
        sameAs: candidate.sameAs,
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: candidate.university,
        },
        knowsAbout: [
          'Software Development',
          'Full-Stack Web Development',
          'MERN Stack',
          'React.js',
          'Node.js',
          'MongoDB',
          'REST APIs',
          'Docker',
          'WebSockets',
          'System Design',
          'Data Structures and Algorithms',
        ],
        nationality: {
          '@type': 'Country',
          name: 'India',
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://dhirajkumar.me/#profilepage',
        url: 'https://dhirajkumar.me/',
        name: 'Dhiraj Kumar | Software Developer & Full-Stack Developer',
        mainEntity: {
          '@id': 'https://dhirajkumar.me/#person',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://dhirajkumar.me/#website',
        url: 'https://dhirajkumar.me/',
        name: 'Dhiraj Kumar Portfolio',
        publisher: {
          '@id': 'https://dhirajkumar.me/#person',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="bg-[#09090B] text-[#FAFAFA] antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
