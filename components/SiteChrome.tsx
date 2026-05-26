"use client";

import type { ReactNode } from "react";
import { ContactModal } from "./ContactModal";

const navLinks = [
  { href: "/products", label: "Work" },
  { href: "/features", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/download", label: "Downloads" },
];

function HomeIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 11 9-8 9 8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10v10h14V10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20v-6h4v6" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9d0c2] bg-[#f6f1e8]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8">
        <a href="/" className="shrink-0 text-xl font-semibold tracking-tight text-[#18231d]">
          Booyaa
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#536156] md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[#18231d]">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ContactModal topic="Project quote" source="Header quote button">
            Get a Quote
          </ContactModal>
          <a
            href="/"
            className="inline-flex h-10 w-10 items-center justify-center border border-[#b8ad9d] text-[#1f2a24] transition hover:border-[#1f2a24] hover:bg-[#fffaf2]"
            aria-label="Go to homepage"
            title="Home"
          >
            <HomeIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d9d0c2] bg-[#f6f1e8] px-5 py-12 text-[#536156] sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.4fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-[#18231d]">Booyaa</p>
          <p className="mt-3 max-w-sm text-sm leading-6">Websites, apps, and practical launch support for small teams and local businesses.</p>
          <p className="mt-6 text-sm">© {new Date().getFullYear()} Booyaa.</p>
        </div>
        <div className="grid gap-7 text-sm sm:grid-cols-3">
          <div>
            <p className="font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">Navigate</p>
            <div className="mt-4 grid gap-2">
              <a href="/" className="hover:text-[#18231d]">Home</a>
              <a href="/products" className="hover:text-[#18231d]">Work</a>
              <a href="/features" className="hover:text-[#18231d]">Services</a>
              <a href="/about" className="hover:text-[#18231d]">About</a>
              <a href="/download" className="hover:text-[#18231d]">Downloads</a>
            </div>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">Projects</p>
            <div className="mt-4 grid gap-2">
              <a href="/caroline-does-numbers" className="hover:text-[#18231d]">Caroline Does Numbers</a>
              <a href="/midoid" className="hover:text-[#18231d]">MiDoid</a>
              <a href="/photosnap" className="hover:text-[#18231d]">PhotoSnap</a>
              <a href="/spotify-jam-sesh" className="hover:text-[#18231d]">Spotify Jam Sesh</a>
            </div>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">Legal</p>
            <div className="mt-4 grid gap-2">
              <a href="/privacy" className="hover:text-[#18231d]">Privacy</a>
              <a href="/terms" className="hover:text-[#18231d]">Terms</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#d9d0c2] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">Contact</p>
          <p className="mt-4 text-sm leading-6">Have a quick question or a small project in mind?</p>
          <div className="mt-5">
            <ContactModal topic="General inquiry" source="Footer contact" variant="secondary" mode="contact">
              Contact Me
            </ContactModal>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href="https://github.com/PPusola" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 hover:text-[#7b3f2f]">
              GitHub
            </a>
            <a href="https://ppusola.github.io" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 hover:text-[#7b3f2f]">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#1f2a24]">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
