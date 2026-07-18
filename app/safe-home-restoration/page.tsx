import type { Metadata } from "next";
import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";
import { BrowserFrame } from "@/components/BrowserFrame";

export const metadata: Metadata = {
  title: "Safe Home Restoration Website Case Study",
  description:
    "A Booyaa case study for an Edmonton emergency restoration website built around local SEO, click-to-call UX, and lead capture.",
  alternates: {
    canonical: "/safe-home-restoration",
  },
};

const details = [
  [
    "The business",
    "Safe Home Solution & Restoration Inc. is a 24/7 emergency restoration company in Edmonton handling water damage, structural drying, mold remediation, and storm response for residential, commercial, and industrial properties.",
  ],
  [
    "The problem",
    "Restoration is an emergency purchase. When someone has water in their basement at 2 AM, they are not comparison shopping. They call the first company that looks credible and picks up. Safe Home needed a site built around that moment.",
  ],
  [
    "What Booyaa built",
    "A full production website: dedicated pages for six restoration services, service-area pages for Edmonton and surrounding communities, a project gallery with real before-and-after work, a blog, FAQ, and a reviews section. Estimate and contact forms deliver by email and log every submission to the company's spreadsheet automatically, so no lead gets lost.",
  ],
  [
    "The emergency UX",
    "Every page keeps a click-to-call path within reach, including a persistent 24/7 emergency help button that tells visitors not to wait on a form. The call flow is designed for someone standing in a flooded basement on their phone.",
  ],
  [
    "Built to be found",
    "Structured for local search from day one: per-service and per-area pages targeting the exact phrases Edmontonians search in an emergency, plus sitemap, structured data, and metadata tuned for Google's local results.",
  ],
  [
    "Tech",
    "Next.js, React, TypeScript, Tailwind CSS, server-side form delivery with Google Sheets lead logging, deployed on Vercel.",
  ],
];

const features = [
  "24/7 click-to-call emergency flow",
  "Six dedicated service pages",
  "Local SEO and service-area structure",
  "Estimate forms with automatic lead logging",
  "Project gallery with real job photos",
  "Blog and FAQ for search coverage",
];

export default function SafeHomeRestorationPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Client case study</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">
              Safe Home Solution &amp; Restoration
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              A production website for Edmonton&apos;s 24/7 emergency restoration experts, built to turn 2 AM emergencies into phone calls.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://safehomerestoration.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#1f2a24] px-5 py-2.5 text-sm font-semibold text-[#f6f1e8] transition hover:bg-[#7b3f2f]"
              >
                View live site
              </a>
              <ContactModal topic="15-minute intro call" source="Safe Home case study page">
                Book a 15-minute call
              </ContactModal>
            </div>
          </div>

          <div data-reveal="2" className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Case study</p>
            <div className="mt-6 grid gap-5">
              {details.map(([title, text]) => (
                <section key={title} className="border-l border-[#cfc5b6] pl-5">
                  <h2 className="font-semibold text-[#18231d]">{title}</h2>
                  <p className="mt-2 leading-7 text-[#536156]">{text}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8">
        <div data-reveal className="mx-auto max-w-5xl">
          <BrowserFrame
            src="/screenshots/safe-home.png"
            url="safehomerestoration.ca"
            alt="Safe Home Solution and Restoration website homepage"
          />
        </div>
      </section>

      <section className="border-y border-[#d9d0c2] bg-[#fffaf2] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">What shipped</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d]">
              Every decision built around the emergency caller.
            </h2>
          </div>
          <div data-reveal="1" className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="border border-[#d9d0c2] bg-[#fdf8ef] p-4 font-semibold text-[#18231d]">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f2a24] px-5 py-16 text-[#f6f1e8] sm:px-8">
        <div data-reveal className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a26f]">Run a home-services business?</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight">
              Your customers are searching right now. Let&apos;s make sure they find you.
            </h2>
          </div>
          <ContactModal topic="15-minute intro call" source="Safe Home case study closing CTA" variant="light">
            Book a 15-minute call
          </ContactModal>
        </div>
      </section>
    </PageShell>
  );
}
