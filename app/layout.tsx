import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Booyaa — Mobile apps for memories and music',
  description: 'Booyaa builds mobile-first social apps like PhotoSnap and Spotify Jam Sesh.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
