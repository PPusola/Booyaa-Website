"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ContactModal } from "./ContactModal";
import { CONTACT_EMAIL, CONTACT_MAILTO, QUOTE_CTA } from "@/lib/site";
import { services } from "@/lib/services";
import { clientWork } from "@/lib/work";

type NavChild = { href: string; label: string; summary: string };
type NavLink = { href: string; label: string; allLabel?: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  {
    href: "/work",
    label: "Work",
    allLabel: "All work and side projects",
    children: clientWork.map((project) => ({ href: project.href, label: project.name, summary: project.summary })),
  },
  {
    href: "/services",
    label: "Services",
    allLabel: "All services",
    children: services.map((service) => ({ href: `/services/${service.slug}`, label: service.title, summary: service.summary })),
  },
  { href: "/about", label: "About" },
  { href: "/quote", label: "Contact" },
];

const desktopLinkClass = (active: boolean) =>
  `inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium underline-offset-[6px] transition ${
    active ? "text-[#18231d] underline decoration-[#7b3f2f] decoration-2" : "text-[#536156] hover:text-[#18231d]"
  }`;

/**
 * Desktop dropdown for a nav item with sub-pages. It opens on hover and on
 * keyboard focus, so tabbing into the parent link reveals the sub-links, and
 * closes on Escape or when focus leaves. The parent stays a real link to the
 * overview page.
 */
function NavDropdown({ link, active }: { link: NavLink; active: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <a href={link.href} aria-haspopup="true" aria-expanded={open} aria-current={active ? "page" : undefined} className={desktopLinkClass(active)}>
        {link.label}
        <svg aria-hidden="true" viewBox="0 0 12 12" className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path d="M2.5 4.5 6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <div className="w-[22rem] rounded-md border border-[#ddd4c5] bg-[#fffaf2] p-2 shadow-[0_18px_40px_-20px_rgba(31,42,36,0.35)]">
          {link.children?.map((child) => (
            <a key={child.href} href={child.href} className="group block rounded px-4 py-3 transition-colors hover:bg-[#f6f1e8]">
              <span className="block text-sm font-semibold text-[#18231d] group-hover:text-[#7b3f2f]">{child.label}</span>
              <span className="mt-0.5 block text-xs leading-5 text-[#536156]">{child.summary}</span>
            </a>
          ))}
          <a href={link.href} className="mt-1 block border-t border-[#ddd4c5] px-4 pb-2 pt-3 text-sm font-semibold text-[#1f2a24] hover:text-[#7b3f2f]">
            {link.allLabel} &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

const displayFont = { fontFamily: "var(--font-display), Georgia, serif" };

/**
 * Lockup of the cat mark and the Booyaa wordmark. The mark is decorative here
 * (`alt=""`) because the name sits right beside it as real text, and every
 * caller wraps this in a link that already carries an aria-label.
 */
function BrandLogo({
  markClassName = "w-[4.5rem]",
  nameClassName = "text-2xl",
}: {
  markClassName?: string;
  nameClassName?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/booyaa-logo.png"
        alt=""
        width={680}
        height={460}
        className={`block h-auto shrink-0 object-contain ${markClassName}`}
      />
      <span
        style={displayFont}
        className={`font-semibold tracking-tight text-[#18231d] ${nameClassName}`}
      >
        Booyaa
      </span>
    </span>
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
            ? "border-[#ddd4c5] bg-[#f6f1e8]/90 backdrop-blur-md"
            : "border-transparent bg-[#f6f1e8]/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8">
          <a
            href="/"
            aria-label="Booyaa home"
            className="flex shrink-0 items-center transition-opacity hover:opacity-80"
          >
            <BrandLogo markClassName="w-14 sm:w-[4.5rem]" nameClassName="text-xl sm:text-2xl" />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) =>
              link.children ? (
                <NavDropdown key={link.href} link={link} active={isActive(link.href)} />
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={desktopLinkClass(isActive(link.href))}
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={CONTACT_MAILTO}
              className="hidden px-3 text-sm font-medium text-[#536156] transition hover:text-[#18231d] lg:inline"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="hidden sm:block">
              <ContactModal source="Header CTA">{QUOTE_CTA}</ContactModal>
            </div>

            {/* Menu trigger (mobile only; desktop shows the inline nav) */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-label="Open menu"
              className="group inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#d6ccbc] bg-[#fffaf2] text-[#1f2a24] transition hover:border-[#1f2a24] md:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <span className="absolute left-0 top-0 block h-0.5 w-5 bg-current transition-transform duration-300 group-hover:translate-x-0.5" />
                <span className="absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current" />
                <span className="absolute left-0 bottom-0 block h-0.5 w-5 bg-current transition-transform duration-300 group-hover:-translate-x-0.5" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu. `overflow-hidden` clips the decorative arc
          SVG below, which is intentionally wider than the viewport; without it
          the arcs extend the document width and cause horizontal scroll. */}
      <div
        className={`fixed inset-0 z-[100] overflow-hidden transition-opacity duration-500 ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        {/* Paper background + decorative arcs, recolored after the two cats on
            the brand mark: charcoal for the black cat, ginger for the tabby. */}
        <div className="absolute inset-0 bg-[#f6f1e8]" />
        <div
          aria-hidden="true"
          className="absolute right-[-15%] top-[-10%] h-[70%] w-[70%] rounded-md opacity-[0.14] blur-3xl"
          style={{ background: "radial-gradient(circle, #c1682b, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[-15%] left-[-10%] h-[55%] w-[55%] rounded-md opacity-[0.10] blur-3xl"
          style={{ background: "radial-gradient(circle, #221c16, transparent 70%)" }}
        />
        {/* Ginger arcs, anchored top-right */}
        <svg
          aria-hidden="true"
          className="absolute right-[-15%] top-[-15%] h-[110%] w-auto"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="450" cy="300" r="260" stroke="#c1682b" strokeOpacity="0.32" strokeWidth="1.5" />
          <circle cx="500" cy="300" r="330" stroke="#c1682b" strokeOpacity="0.18" strokeWidth="1.5" />
          <circle cx="540" cy="300" r="400" stroke="#c1682b" strokeOpacity="0.12" strokeWidth="1.5" />
        </svg>
        {/* Charcoal arcs, mirrored bottom-left, so the pattern frames the menu
            content from both corners instead of sitting in one spot. */}
        <svg
          aria-hidden="true"
          className="absolute left-[-15%] bottom-[-15%] h-[110%] w-auto rotate-180"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="450" cy="300" r="260" stroke="#221c16" strokeOpacity="0.22" strokeWidth="1.5" />
          <circle cx="500" cy="300" r="330" stroke="#221c16" strokeOpacity="0.14" strokeWidth="1.5" />
          <circle cx="540" cy="300" r="400" stroke="#221c16" strokeOpacity="0.09" strokeWidth="1.5" />
        </svg>

        <div className="relative flex h-full flex-col">
          {/* Overlay top bar */}
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              aria-label="Booyaa home"
              className="flex items-center transition-opacity hover:opacity-80"
            >
              <BrandLogo markClassName="w-14 sm:w-[4.5rem]" nameClassName="text-xl sm:text-2xl" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#d6ccbc] bg-[#fffaf2] text-[#1f2a24] transition hover:border-[#1f2a24]"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center overflow-y-auto px-5 py-6 md:px-8">
            <ul className="flex flex-col gap-3">
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
                    className={`inline-block text-4xl font-semibold leading-tight tracking-tight transition-all duration-500 sm:text-5xl ${
                      menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    } ${
                      isActive(link.href)
                        ? "text-[#c1682b]"
                        : "text-[#18231d] hover:text-[#c1682b]"
                    }`}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div
                      style={{ transitionDelay: menuOpen ? `${index * 55 + 160}ms` : "0ms" }}
                      className={`mt-1 flex flex-col gap-1.5 transition-all duration-500 ${menuOpen ? "opacity-100" : "opacity-0"}`}
                    >
                      {link.children.map((child) => (
                        <a key={child.href} href={child.href} onClick={() => setMenuOpen(false)} className="text-base text-[#536156] hover:text-[#7b3f2f]">
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
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
                <ContactModal source="Overlay menu CTA">{QUOTE_CTA}</ContactModal>
              </div>
              <a href={CONTACT_MAILTO} className="text-base font-medium text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4">
                {CONTACT_EMAIL}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  const linkClass = "transition hover:text-[#18231d]";

  return (
    <footer className="border-t border-[#ddd4c5] bg-[#fffaf2] px-5 py-14 text-[#536156] sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr]">
        <div>
          <a href="/" aria-label="Booyaa home" className="inline-flex items-center transition-opacity hover:opacity-80">
            <BrandLogo />
          </a>
          <p className="mt-3 max-w-xs text-sm leading-6">Websites and lead-capture tools for Edmonton home-services and local businesses.</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-[#18231d]">Booyaa</p>
          <div className="mt-4 grid gap-2.5">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>{link.label}</a>
            ))}
          </div>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-[#18231d]">Client work</p>
          <div className="mt-4 grid gap-2.5">
            <a href="/safe-home-restoration" className={linkClass}>Safe Home Restoration</a>
            <a href="/caroline-does-numbers" className={linkClass}>Caroline Does Numbers</a>
            <a href="/web-development-edmonton" className={linkClass}>Web development in Edmonton</a>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-[#18231d]">Get in touch</p>
          <p className="mt-4 leading-6">Tell me about your business and I&apos;ll reply within one business day.</p>
          <a href={CONTACT_MAILTO} className="mt-3 inline-block font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 hover:text-[#7b3f2f]">
            {CONTACT_EMAIL}
          </a>
          <div className="mt-5">
            <ContactModal source="Footer contact" variant="secondary">{QUOTE_CTA}</ContactModal>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#ddd4c5] pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Booyaa. Edmonton, Alberta.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href="/work#side-projects" className={linkClass}>Side projects</a>
          <a href="/privacy" className={linkClass}>Privacy</a>
          <a href="/terms" className={linkClass}>Terms</a>
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
