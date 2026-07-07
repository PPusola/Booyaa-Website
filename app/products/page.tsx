import type { Metadata } from "next";
import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Client Work and Booyaa Labs",
  description:
    "Explore Booyaa client websites and independent engineering projects, including local SEO websites, AI tools, and shipped apps.",
  alternates: {
    canonical: "/products",
  },
};

const clientWork = [
  {
    name: "Safe Home Solution & Restoration",
    label: "Client website",
    status: "Live in production",
    href: "/safe-home-restoration",
    cta: "Read case study",
    text: "A full production website for Edmonton's 24/7 emergency restoration company: six service pages built for local search, a persistent emergency call flow, and estimate forms that log every lead automatically.",
  },
  {
    name: "Caroline Does Numbers",
    label: "Client website",
    status: "Live",
    href: "/caroline-does-numbers",
    cta: "Read case study",
    text: "A trust-first services website for a bookkeeping and tax business, built around readable service pages and a contact path visitors actually use.",
  },
];

const labs = [
  {
    name: "Otto",
    label: "AI assistant",
    href: "/otto",
    cta: "View project",
    text: "A local-first AI assistant with tool use, encrypted memory, voice control, and confirmation flows. Battle-tested here, it becomes the after-hours intake and lead-capture tools Booyaa brings to clients next.",
  },
  {
    name: "MiDoid",
    label: "Shipped app",
    href: "/midoid",
    cta: "View project",
    text: "A macOS and Android companion app for securely browsing and transferring files over Wi-Fi. The native and offline-first techniques it proves feed directly into faster, more reliable client builds.",
  },
];

export default function Products() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Client work</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">Websites in production, winning customers.</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              Live client sites built to rank in local search and turn visitors into calls.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {clientWork.map((project, index) => (
              <article data-reveal={String(index + 1)} key={project.name} className="flex min-h-72 flex-col justify-between border border-[#d9d0c2] bg-[#fffaf2] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_#ded4c6]">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">{project.label}</p>
                      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18231d]">{project.name}</h2>
                    </div>
                    <span className="shrink-0 border border-[#d8cec0] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#536156]">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-6 leading-7 text-[#536156]">{project.text}</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.href}
                    className="inline-flex items-center justify-center border border-[#1f2a24] px-5 py-2.5 text-sm font-semibold text-[#1f2a24] transition hover:bg-[#1f2a24] hover:text-[#f6f1e8]"
                  >
                    {project.cta}
                  </a>
                  <ContactModal topic="15-minute intro call" source="Work page" variant="secondary">
                    Book a 15-minute call
                  </ContactModal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d9d0c2] bg-[#fffaf2] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Booyaa Labs</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d] sm:text-5xl">Independent engineering projects.</h2>
            <p className="mt-5 leading-7 text-[#536156]">
              R&amp;D outside of client work: shipped apps, AI systems, and product explorations. This is where the techniques behind Booyaa&apos;s client tools get built and proven.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {labs.map((project, index) => (
              <article data-reveal={String((index % 2) + 1)} key={project.name} className="flex flex-col justify-between border border-[#d9d0c2] bg-[#fdf8ef] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_#ded4c6]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">{project.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#18231d]">{project.name}</h3>
                  <p className="mt-4 leading-7 text-[#536156]">{project.text}</p>
                </div>
                <div className="mt-6">
                  <a
                    href={project.href}
                    className="inline-flex items-center justify-center border border-[#b8ad9d] px-5 py-2.5 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
                  >
                    {project.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
