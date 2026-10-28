import type { Metadata } from "next";
import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";
import { services } from "@/lib/services";
import { CONTACT_EMAIL, CONTACT_MAILTO, QUOTE_CTA, STARTING_PRICE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Design and Lead-Capture Services",
  description:
    "Website builds, rebuilds, AI lead capture, and ongoing care for home-services and local businesses.",
  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  return (
    <PageShell>
      <section className="px-5 pb-16 pt-12 sm:px-8 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-semibold text-[#7b3f2f]">Services</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-[#18231d] sm:text-6xl">Websites and tools that win you customers.</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              Everything Booyaa builds is aimed at one outcome: when someone in your area needs what you do, they find you, trust you, and contact you.
            </p>
          </div>

          <ol className="mt-14 border-t border-[#1f2a24]">
            {services.map((service, index) => (
              <li data-reveal={String(index + 1)} key={service.slug} className="border-b border-[#ddd4c5]">
                <a
                  href={`/services/${service.slug}`}
                  className="group grid gap-x-8 gap-y-3 py-8 transition-colors hover:bg-[#fffaf2] md:grid-cols-[4rem_1fr_1.2fr_auto] md:items-start md:px-4"
                >
                  <span className="text-sm font-semibold text-[#7b3f2f]">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="text-3xl font-semibold text-[#18231d] transition group-hover:text-[#7b3f2f]">{service.title}</h2>
                    <p className="mt-2 text-sm text-[#7b857b]">{service.timeline}</p>
                  </div>
                  <p className="leading-7 text-[#536156]">{service.for}</p>
                  <span
                    aria-hidden="true"
                    className="hidden h-11 w-11 items-center justify-center rounded-md border border-[#c4b8a6] text-[#1f2a24] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#1f2a24] group-hover:bg-[#1f2a24] group-hover:text-[#f6f1e8] md:inline-flex"
                  >
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#1f2a24] px-5 py-14 text-[#f6f1e8] sm:px-8">
        <div data-reveal className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">
              {STARTING_PRICE ? `Websites from ${STARTING_PRICE}.` : "Not sure which one you need?"}
            </h2>
            <p className="mt-3 text-lg leading-8 text-[#f6f1e8]/75">
              Tell me about your business and I&apos;ll recommend the right fit, with a clear price, within one business day.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <ContactModal source="Services page" variant="light">{QUOTE_CTA}</ContactModal>
            <a href={CONTACT_MAILTO} className="text-sm font-medium text-[#f6f1e8]/80 underline decoration-[#f6f1e8]/30 underline-offset-4 hover:text-[#f6f1e8]">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
