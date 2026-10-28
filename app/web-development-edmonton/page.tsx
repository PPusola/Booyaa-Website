import type { Metadata } from "next";
import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";
import { BrowserFrame } from "@/components/BrowserFrame";

export const metadata: Metadata = {
  title: "Web Development in Edmonton",
  description:
    "Booyaa is an Edmonton web development studio building fast, local-search-ready websites and lead-capture tools for home-services and local businesses across Edmonton and Alberta.",
  alternates: {
    canonical: "/web-development-edmonton",
  },
};

const localWork = [
  {
    name: "Safe Home Solution & Restoration",
    type: "Edmonton client website",
    status: "Live in production",
    href: "/safe-home-restoration",
    text: "A full production website for Edmonton's 24/7 emergency restoration company: six service pages built for local search, a persistent emergency call flow, and estimate forms that log every lead automatically. Designed for the customer standing in a flooded basement at 2 AM.",
    highlights: ["24/7 click-to-call emergency flow", "Local SEO service and area pages", "Automatic lead capture and logging"],
    image: "/screenshots/safe-home.png",
    url: "safehomerestoration.ca",
  },
  {
    name: "Caroline Does Numbers",
    type: "Client website",
    status: "Live",
    href: "/caroline-does-numbers",
    text: "A trust-first service website for a bookkeeping and tax business, built to explain the offer fast and make contact easy. Readable sections, direct calls to action, and a contact path that turns visitors into booked clients.",
    highlights: ["Service-focused page structure", "Trust-first copy flow", "Clear contact path"],
    image: "/screenshots/caroline.png",
    url: "carolinedoesnumbers.com",
  },
];

const whatYouGet = [
  {
    title: "Built to rank in Edmonton search",
    text: "Service and area pages structured the way Google reads local intent, so when someone in Edmonton searches for what you do, you are the business they find.",
  },
  {
    title: "Designed to turn searches into calls",
    text: "Click-to-call flows, estimate forms, and clear next steps on every page. The site does not just look good, it produces the phone calls your business runs on.",
  },
  {
    title: "Fast, reliable, and maintained",
    text: "Modern build, quick load times, and ongoing care so the site keeps ranking and working while you focus on the job.",
  },
];

const areasServed = [
  "Downtown Edmonton",
  "Sherwood Park",
  "St. Albert",
  "Leduc",
  "Spruce Grove",
  "Stony Plain",
  "Fort Saskatchewan",
  "Beaumont",
  "Greater Edmonton area",
];

export default function WebDevelopmentEdmonton() {
  return (
    <PageShell>
      <section className="border-b border-[#ddd4c5] px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold text-[#7b3f2f]">
              Web development in Edmonton
            </p>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-[#18231d] sm:text-6xl">
              An Edmonton web developer building sites that win the call.
            </h1>
            <p className="mt-7 text-lg leading-8 text-[#536156]">
              Booyaa is an Edmonton web design and development studio. I build fast, local-search-ready websites and lead-capture tools for home-services and local businesses across Edmonton and Alberta. Every site is built for the customer who needs you right now, and structured to be the one they find first.
            </p>
            <div data-reveal="1" className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ContactModal source="Edmonton page hero">
                Get a free quote
              </ContactModal>
              <a
                href="#edmonton-work"
                className="inline-flex items-center justify-center rounded-md border border-[#c4b8a6] px-5 py-2.5 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
              >
                See Edmonton client work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-semibold text-[#7b3f2f]">What you get</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d] sm:text-5xl">Websites Edmonton customers actually find.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {whatYouGet.map((item, index) => (
              <article data-reveal={String((index % 3) + 1)} key={item.title} className="rounded-md border border-[#ddd4c5] bg-[#fffaf2] p-6">
                <h3 className="text-xl font-semibold tracking-tight text-[#18231d]">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#536156]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="edmonton-work" className="border-y border-[#ddd4c5] bg-[#fffaf2] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold text-[#7b3f2f]">Local client work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d] sm:text-5xl">Built for Edmonton businesses whose customers can&apos;t wait.</h2>
          </div>
          <div className="grid gap-5">
            {localWork.map((project, index) => (
              <a
                data-reveal={String((index % 2) + 1)}
                key={project.name}
                href={project.href}
                className="group block rounded-md border border-[#ddd4c5] bg-[#fffaf2] transition-all duration-300 hover:-translate-y-1 hover:border-[#1f2a24]"
              >
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-sm font-semibold text-[#7b3f2f]">{project.type}</p>
                      <span className="rounded-md border border-[#d6ccbc] px-3 py-1 text-xs font-semibold text-[#536156]">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#18231d] sm:text-4xl">{project.name}</h3>
                    <p className="mt-4 max-w-2xl leading-7 text-[#536156]">{project.text}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.highlights.map((item) => (
                        <span key={item} className="rounded-md border border-[#ddd4c5] bg-[#f6f1e8] px-3 py-1.5 text-xs font-semibold text-[#18231d]">
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 text-sm font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4">
                      Read the case study
                      <span aria-hidden="true" className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
                    </p>
                  </div>
                  <BrowserFrame src={project.image} url={project.url} alt={`${project.name} website homepage`} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/*
        TESTIMONIALS: paste the real text of your Google reviews from Caroline
        and Safe Home here so the review wording lives on-page too. Do not
        invent quotes. Suggested shape per review: { quote, name, business }.
      */}

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-semibold text-[#7b3f2f]">Areas served</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d] sm:text-5xl">Serving Edmonton and the surrounding area.</h2>
            <p className="mt-5 text-lg leading-8 text-[#536156]">
              Booyaa works with home-services and local businesses across Edmonton and the greater capital region.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {areasServed.map((area) => (
              <span key={area} className="rounded-md border border-[#ddd4c5] bg-[#fffaf2] px-4 py-2 text-sm font-semibold text-[#18231d]">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f2a24] px-5 py-16 text-[#f6f1e8] sm:px-8">
        <div data-reveal className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#d6a26f]">Your next Edmonton customer is searching right now</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight">Let&apos;s build the website that wins that call.</h2>
          </div>
          <ContactModal source="Edmonton page closing CTA" variant="light">
            Get a free quote
          </ContactModal>
        </div>
      </section>
    </PageShell>
  );
}
