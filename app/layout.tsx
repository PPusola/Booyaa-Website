import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { Analytics } from '@/components/Analytics';
import { RouteAnalytics } from '@/components/RouteAnalytics';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://booyaa.net'),
  title: {
    default: 'Booyaa | Websites for Home-Services Businesses',
    template: '%s | Booyaa',
  },
  description: 'Booyaa builds websites and lead-capture tools for home-services and local businesses. Built to rank in local search and turn visitors into phone calls.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Booyaa | Websites for Home-Services Businesses',
    description: 'Websites and lead-capture tools for home-services and local businesses.',
    url: 'https://booyaa.net',
    siteName: 'Booyaa',
    type: 'website',
  },
};

// ProfessionalService structured data. Helps search engines understand what
// Booyaa is and reinforces the local-search positioning the studio sells.
// Kept to facts that are true and present on the site (no address/phone/reviews).
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Booyaa',
  url: 'https://booyaa.net',
  image: 'https://booyaa.net/opengraph-image.png',
  description:
    'Booyaa builds websites and lead-capture tools for home-services and local businesses. Built to rank in local search and turn visitors into phone calls.',
  email: 'priyanshu@booyaa.net',
  knowsAbout: [
    'Web design',
    'Web development',
    'Local SEO',
    'Lead capture',
    'Home-services marketing',
  ],
  serviceType: 'Website design and development for home-services businesses',
  sameAs: ['https://github.com/PPusola'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
        <RouteAnalytics />
      </body>
    </html>
  );
}
