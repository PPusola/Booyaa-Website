import type { Metadata } from "next";
import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";
import { BrowserFrame } from "@/components/BrowserFrame";
import { clientWork, sideProjects } from "@/lib/work";
import { CONTACT_EMAIL, CONTACT_MAILTO, QUOTE_CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Work",
  description:
    "Live Booyaa client websites built for local search and lead capture, plus a few independent side projects.",
  alternates: {
    canonical: "/work",
  },
};

const serif = { fontFamily: "var(--font-display), Georgia, serif" };

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#c4b8a6] text-[#1f2a24] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#1f2a24] group-hover:bg-[#1f2a24] group-hover:text-[#f6f1e8]"
    >
      &rarr;
    </span>
  );
}

export default function Work() {
  return (
    <PageShell>
      <section className="px-5 pb-16 pt-12 sm:px-8 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-semibold text-[#7b3f2f]">Client work</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-[#18231d] sm:text-6xl">Websites in production, winning customers.</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              Live client sites built to rank in local search and turn visitors into calls. Click a project to read the case study.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {clientWork.map((project, index) => (
              <a
                data-reveal={String(index + 1)}
                key={project.href}
                href={project.href}
                className="group flex flex-col rounded-md border border-[#ddd4c5] bg-[#fffaf2] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1f2a24] hover:shadow-[0_18px_40px_-24px_rgba(31,42,36,0.45)] sm:p-6"
              >
                <BrowserFrame src={project.image} url={project.url} alt={`${project.name} website homepage`} />
                <div className="mt-6 flex flex-1 items-start justify-between gap-6">
                  <div>
                    <p className="text-sm text-[#7b857b]">{project.type}</p>
                    <h2 className="mt-1 text-3xl font-semibold text-[#18231d] transition group-hover:text-[#7b3f2f]">{project.name}</h2>
                    <p className="mt-3 leading-7 text-[#536156]">{project.text}</p>
                  </div>
                  <Arrow />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="side-projects" className="border-t border-[#ddd4c5] bg-[#fffaf2] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-semibold text-[#7b3f2f]">Side projects</p>
            <h2 className="mt-3 text-4xl font-semibold text-[#18231d]">Independent engineering projects.</h2>
            <p className="mt-4 leading-7 text-[#536156]">
              Work outside of client projects, where the techniques behind Booyaa&apos;s client tools get built and proven.
            </p>
          </div>

          <div className="mt-10 border-t border-[#1f2a24]">
            {sideProjects.map((project, index) => (
              <a
                data-reveal={String(index + 1)}
                key={project.href}
                href={project.href}
                className="group flex items-center justify-between gap-6 border-b border-[#ddd4c5] py-6 transition-colors hover:bg-[#f6f1e8] md:px-4"
              >
                <div className="grid gap-2 md:grid-cols-[14rem_1fr] md:items-baseline md:gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#18231d] transition group-hover:text-[#7b3f2f]" style={serif}>{project.name}</h3>
                    <p className="text-sm text-[#7b857b]">{project.type}</p>
                  </div>
                  <p className="leading-7 text-[#536156]">{project.text}</p>
                </div>
                <Arrow />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f2a24] px-5 py-14 text-[#f6f1e8] sm:px-8">
        <div data-reveal className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">Want results like these?</h2>
            <p className="mt-3 text-lg leading-8 text-[#f6f1e8]/75">
              Tell me about your business and I&apos;ll reply within one business day with a scope and price.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <ContactModal source="Work page closing CTA" variant="light">{QUOTE_CTA}</ContactModal>
            <a href={CONTACT_MAILTO} className="text-sm font-medium text-[#f6f1e8]/80 underline decoration-[#f6f1e8]/30 underline-offset-4 hover:text-[#f6f1e8]">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
