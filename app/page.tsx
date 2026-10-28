import type { Metadata } from "next";
import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";
import { BrowserFrame } from "@/components/BrowserFrame";
import { services } from "@/lib/services";
import { clientWork } from "@/lib/work";
import { CONTACT_EMAIL, CONTACT_MAILTO, HEADLINE_RESULT, QUOTE_CTA, STARTING_PRICE, TESTIMONIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Edmonton Web Design & Development for Local Businesses",
  description:
    "Booyaa is an Edmonton web design and development studio building websites and lead-capture tools for restoration companies, contractors, and local service businesses that need more phone calls.",
  alternates: {
    canonical: "/",
  },
};

const facts = [
  ["Based in", "Edmonton, Alberta"],
  ["Reply time", "Within one business day"],
  ["Typical build", "2 to 4 weeks"],
  ["You work with", "The person who builds it"],
];

const steps = [
  ["Tell me about your business", "Send a short message or an email. What you do, who your customers are, and what your current site is or isn't doing."],
  ["Get a scope and a price", "A clear plan for the pages, features, and timeline, with a fixed price. No obligation."],
  ["Launch and start getting calls", "Built to rank in local search and make calling easy. I keep it running after launch."],
];

const serif = { fontFamily: "var(--font-display), Georgia, serif" };
const eyebrow = "text-sm font-semibold text-[#7b3f2f]";
const textLink =
  "font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 transition hover:text-[#7b3f2f]";

export default function Home() {
  return (
    <PageShell>
      <section className="px-5 pb-12 pt-10 sm:px-8 md:pb-16 md:pt-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p data-reveal className={eyebrow}>
              Booyaa &middot; Edmonton web studio
            </p>
            <h1 data-reveal="1" className="mt-4 max-w-2xl text-5xl font-semibold leading-[1.02] text-[#18231d] sm:text-6xl lg:text-[4.25rem]">
              Websites that turn local searches into phone calls.
            </h1>
            <p data-reveal="2" className="mt-6 max-w-xl text-lg leading-8 text-[#536156]">
              I build websites for restoration companies, contractors, and local service businesses. Built to show up when someone nearby searches, and to make calling you the obvious next step.
            </p>
            <div data-reveal="3" className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ContactModal source="Homepage hero">{QUOTE_CTA}</ContactModal>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-md border border-[#c4b8a6] px-6 py-3 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
              >
                See client work
              </a>
            </div>
            <p data-reveal="4" className="mt-5 text-sm text-[#536156]">
              Or email <a href={CONTACT_MAILTO} className={textLink}>{CONTACT_EMAIL}</a>
            </p>
          </div>

          <a data-reveal="3" href="/safe-home-restoration" className="group block">
            <BrowserFrame
              src="/screenshots/safe-home.png"
              url="safehomerestoration.ca"
              alt="Safe Home Solution and Restoration website homepage"
            />
            <p className="mt-3 text-sm text-[#536156]">
              Recent work: <span className="font-semibold text-[#18231d] group-hover:text-[#7b3f2f]">Safe Home Restoration</span>, live in Edmonton.
            </p>
          </a>
        </div>
      </section>

      <section className="border-y border-[#ddd4c5]">
        {/* gap-px over a rule-colored background draws the dividers between
            cells at every breakpoint without per-cell border bookkeeping. */}
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#ddd4c5] lg:grid-cols-4">
          {facts.map(([label, value]) => (
            <div key={label} className="bg-[#f6f1e8] px-5 py-5 sm:px-8">
              <dt className="text-xs text-[#7b857b]">{label}</dt>
              <dd className="mt-1 font-semibold text-[#18231d]">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {(TESTIMONIALS.length > 0 || HEADLINE_RESULT) && (
        <section className="px-5 pt-16 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
            {HEADLINE_RESULT && (
              <div data-reveal className="border-l-2 border-[#7b3f2f] pl-6">
                <p className="text-5xl font-semibold text-[#18231d]" style={serif}>{HEADLINE_RESULT.value}</p>
                <p className="mt-2 text-lg text-[#18231d]">{HEADLINE_RESULT.label}</p>
                <p className="mt-3 text-sm text-[#536156]">{HEADLINE_RESULT.client}</p>
              </div>
            )}
            {TESTIMONIALS.map((item, index) => (
              <figure data-reveal={String(index + 1)} key={item.name} className="border-l-2 border-[#7b3f2f] pl-6">
                <blockquote className="text-xl leading-8 text-[#18231d]" style={serif}>&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm text-[#536156]">
                  <span className="font-semibold text-[#18231d]">{item.name}</span>, {item.business}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal>
            <p className={eyebrow}>What I build</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#18231d] sm:text-5xl">Everything a local business website needs to bring in work.</h2>
            <a href="/services" className={`mt-6 inline-block text-sm ${textLink}`}>
              All services &rarr;
            </a>
          </div>
          <ol data-reveal="1" className="border-t border-[#1f2a24]">
            {services.map((service, index) => (
              <li key={service.slug} className="border-b border-[#ddd4c5]">
                <a
                  href={`/services/${service.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr] gap-x-4 py-5 transition-colors hover:bg-[#fffaf2] sm:grid-cols-[3rem_1fr_auto]"
                >
                  <span className="pt-1 text-sm font-semibold text-[#7b3f2f]">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-[#18231d] transition group-hover:text-[#7b3f2f]">{service.title}</h3>
                    <p className="mt-1 leading-7 text-[#536156]">{service.summary}</p>
                  </div>
                  <p className="col-start-2 mt-2 text-sm text-[#7b857b] sm:col-start-3 sm:mt-1.5 sm:text-right">
                    {service.timeline.replace("Typical build: ", "")}
                    <span aria-hidden="true" className="ml-2 inline-block text-[#1f2a24] transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </p>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-[#ddd4c5] bg-[#fffaf2] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p data-reveal className={eyebrow}>How it works</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
            {steps.map(([title, text], index) => (
              <div data-reveal={String(index + 1)} key={title} className="border-t border-[#1f2a24] pt-5">
                <p className="text-3xl font-semibold text-[#7b3f2f]" style={serif}>{index + 1}.</p>
                <h3 className="mt-3 text-xl font-semibold text-[#18231d]">{title}</h3>
                <p className="mt-2 leading-7 text-[#536156]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className={eyebrow}>Client work</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#18231d] sm:text-5xl">Built for businesses whose customers can&apos;t wait.</h2>
            </div>
            <a href="/work" className={`text-sm ${textLink}`}>All work &rarr;</a>
          </div>

          <div className="grid gap-12">
            {clientWork.map((project, index) => (
              <a
                data-reveal={String(index + 1)}
                key={project.name}
                href={project.href}
                className="group grid gap-8 border-t border-[#1f2a24] pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
              >
                <div>
                  <p className="text-sm text-[#7b857b]">{project.type}</p>
                  <h3 className="mt-2 text-3xl font-semibold text-[#18231d] transition group-hover:text-[#7b3f2f]">{project.name}</h3>
                  <p className="mt-4 leading-7 text-[#536156]">{project.text}</p>
                  <ul className="mt-5 grid gap-1.5 text-sm text-[#18231d]">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden="true" className="text-[#7b3f2f]">&ndash;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm font-semibold text-[#1f2a24]">
                    Read the case study
                    <span aria-hidden="true" className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
                  </p>
                </div>
                <BrowserFrame src={project.image} url={project.url} alt={`${project.name} website homepage`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f2a24] px-5 py-14 text-[#f6f1e8] sm:px-8">
        <div data-reveal className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">
              {STARTING_PRICE ? `Websites from ${STARTING_PRICE}.` : "Get a clear price for your website."}
            </h2>
            <p className="mt-3 text-lg leading-8 text-[#f6f1e8]/75">
              Tell me about your business and I&apos;ll reply within one business day with a scope and price.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <ContactModal source="Homepage closing CTA" variant="light">{QUOTE_CTA}</ContactModal>
            <a href={CONTACT_MAILTO} className="text-sm font-medium text-[#f6f1e8]/80 underline decoration-[#f6f1e8]/30 underline-offset-4 hover:text-[#f6f1e8]">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
