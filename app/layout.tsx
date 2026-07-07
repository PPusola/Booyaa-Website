import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
      </body>
    </html>
  );
}
