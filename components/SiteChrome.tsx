"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ContactModal } from "./ContactModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Work" },
  { href: "/features", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/download", label: "Downloads" },
];

const displayFont = { fontFamily: "var(--font-display), Georgia, serif" };

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/booyaa-logo.png"
      alt="Booyaa"
      width={680}
      height={460}
      className={`block h-auto w-full object-contain ${className}`}
    />
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Apple-style scroll-aware chrome: the bar gains solidity and a hairline
  // shadow once the page has scrolled past the hero's top edge.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu panel is open.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-[#d9d0c2] bg-[#f6f1e8]/90 shadow-[0_1px_20px_rgba(31,42,36,0.08)] backdrop-blur-md"
            : "border-transparent bg-[#f6f1e8]/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8">
          <a
            href="/"
            aria-label="Booyaa home"
            className="block w-24 shrink-0 transition-opacity hover:opacity-80 sm:w-28"
          >
            <BrandLogo />
          </a>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden sm:block">
              <ContactModal topic="15-minute intro call" source="Header CTA">
                Book a Call
              </ContactModal>
            </div>

            {/* Menu trigger (all screen sizes, RDM-style) */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-label="Open menu"
              className="group inline-flex items-center gap-2 border border-[#b8ad9d] px-4 py-2 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24] hover:bg-[#fffaf2]"
            >
              <span className="hidden sm:inline">Menu</span>
              <span className="relative block h-3.5 w-5">
                <span className="absolute left-0 top-0 block h-0.5 w-5 bg-current transition-transform duration-300 group-hover:translate-x-0.5" />
                <span className="absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current" />
                <span className="absolute left-0 bottom-0 block h-0.5 w-5 bg-current transition-transform duration-300 group-hover:-translate-x-0.5" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-500 ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        {/* Paper background + subtle decorative arcs */}
        <div className="absolute inset-0 bg-[#f6f1e8]" />
        <svg
          aria-hidden="true"
          className="absolute right-[-10%] top-1/2 h-[130%] w-auto -translate-y-1/2 text-[#e2d8c8]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="450" cy="300" r="260" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="500" cy="300" r="330" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="540" cy="300" r="400" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        <div className="relative flex h-full flex-col">
          {/* Overlay top bar */}
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              aria-label="Booyaa home"
              className="block w-24 transition-opacity hover:opacity-80 sm:w-28"
            >
              <BrandLogo />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center border border-[#b8ad9d] text-[#7b3f2f] transition hover:border-[#7b3f2f] hover:bg-[#fffaf2]"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 md:px-8">
            <ul className="flex flex-col gap-1 sm:gap-2">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    style={{
                      ...displayFont,
                      transitionDelay: menuOpen ? `${index * 55 + 120}ms` : "0ms",
                    }}
                    className={`inline-block text-5xl font-semibold leading-tight tracking-tight transition-all duration-500 sm:text-6xl lg:text-7xl ${
                      menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    } ${
                      isActive(link.href)
                        ? "text-[#7b3f2f]"
                        : "text-[#18231d] hover:text-[#7b3f2f]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div
              style={{ transitionDelay: menuOpen ? `${navLinks.length * 55 + 160}ms` : "0ms" }}
              className={`mt-10 flex flex-col items-start gap-6 transition-all duration-500 sm:flex-row sm:items-center ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <div onClick={() => setMenuOpen(false)}>
                <ContactModal topic="15-minute intro call" source="Overlay menu CTA">
                  Book a Call
                </ContactModal>
              </div>
              <a
                href="https://github.com/PPusola"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center border border-[#b8ad9d] text-[#1f2a24] transition hover:border-[#1f2a24] hover:bg-[#fffaf2]"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d9d0c2] bg-[#f6f1e8] px-5 py-12 text-[#536156] sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.4fr_1fr]">
        <div>
          <a href="/" aria-label="Booyaa home" className="block w-28 transition-opacity hover:opacity-80">
            <BrandLogo />
          </a>
          <p className="mt-3 max-w-sm text-sm leading-6">Websites and lead-capture tools for home-services and local businesses.</p>
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
              <a href="/safe-home-restoration" className="hover:text-[#18231d]">Safe Home Restoration</a>
              <a href="/caroline-does-numbers" className="hover:text-[#18231d]">Caroline Does Numbers</a>
              <a href="/otto" className="hover:text-[#18231d]">Otto</a>
              <a href="/midoid" className="hover:text-[#18231d]">MiDoid</a>
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
          <p className="mt-4 text-sm leading-6">Want to talk through your website? Book a free 15-minute call.</p>
          <div className="mt-5">
            <ContactModal topic="15-minute intro call" source="Footer contact" variant="secondary">
              Book a 15-minute call
            </ContactModal>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href="https://github.com/PPusola" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 hover:text-[#7b3f2f]">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (elements.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#1f2a24]">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
