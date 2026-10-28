import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";
import { getService, services } from "@/lib/services";
import { CONTACT_EMAIL, CONTACT_MAILTO, QUOTE_CTA } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug);
  if (!service) return {};

  return {
    title: service.title,
    description: `${service.summary} ${service.for}`,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

const steps = [
  ["Tell me about your business", "A short message or email is enough. I reply within one business day."],
  ["Get a scope and a price", "A clear plan and a fixed price. No obligation."],
  ["I build it, you review it", "You see progress along the way and sign off before anything goes live."],
];

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <PageShell>
      <section className="px-5 pb-14 pt-10 sm:px-8 md:pt-14">
        <div className="mx-auto max-w-7xl">
          <a data-reveal href="/services" className="text-sm font-semibold text-[#7b3f2f] hover:underline">
            &larr; All services
          </a>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 data-reveal="1" className="text-5xl font-semibold leading-[1.04] text-[#18231d] sm:text-6xl">
                {service.title}
              </h1>
              <p data-reveal="2" className="mt-6 max-w-2xl text-lg leading-8 text-[#536156]">
                {service.intro}
              </p>
              <div data-reveal="3" className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ContactModal topic={`Quote: ${service.title}`} source={`Service page: ${service.title}`}>
                  {QUOTE_CTA}
                </ContactModal>
                <a
                  href={CONTACT_MAILTO}
                  className="text-sm font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 hover:text-[#7b3f2f] sm:ml-3"
                >
                  or email {CONTACT_EMAIL}
                </a>
              </div>
            </div>
            <dl data-reveal="3" className="grid grid-cols-2 gap-px border border-[#ddd4c5] bg-[#ddd4c5] lg:grid-cols-1">
              <div className="bg-[#fffaf2] p-5">
                <dt className="text-xs text-[#7b857b]">Timeline</dt>
                <dd className="mt-1 font-semibold text-[#18231d]">{service.timeline.replace("Typical build: ", "")}</dd>
              </div>
              <div className="bg-[#fffaf2] p-5">
                <dt className="text-xs text-[#7b857b]">Best for</dt>
                <dd className="mt-1 text-sm leading-6 text-[#18231d]">{service.for}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ddd4c5] bg-[#fffaf2] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div data-reveal>
            <h2 className="text-3xl font-semibold text-[#18231d]">This is for you if</h2>
            <ul className="mt-6 border-t border-[#1f2a24]">
              {service.signs.map((sign) => (
                <li key={sign} className="flex gap-3 border-b border-[#ddd4c5] py-4 leading-7 text-[#18231d]">
                  <span aria-hidden="true" className="text-[#7b3f2f]">&ndash;</span>
                  {sign}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal="1">
            <h2 className="text-3xl font-semibold text-[#18231d]">What&apos;s included</h2>
            <ul className="mt-6 border-t border-[#1f2a24]">
              {service.included.map((item) => (
                <li key={item} className="flex gap-3 border-b border-[#ddd4c5] py-4 leading-7 text-[#18231d]">
                  <span aria-hidden="true" className="font-semibold text-[#7b3f2f]">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 data-reveal className="text-3xl font-semibold text-[#18231d]">How it works</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
            {steps.map(([title, text], index) => (
              <div data-reveal={String(index + 1)} key={title} className="border-t border-[#1f2a24] pt-5">
                <p className="text-3xl font-semibold text-[#7b3f2f]" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                  {index + 1}.
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#18231d]">{title}</h3>
                <p className="mt-2 leading-7 text-[#536156]">{text}</p>
              </div>
            ))}
          </div>

          {service.related && (
            <a
              data-reveal
              href={service.related.href}
              className="group mt-14 flex flex-col gap-4 rounded-md border border-[#ddd4c5] bg-[#fffaf2] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1f2a24] sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm text-[#7b857b]">See it in practice</p>
                <p className="mt-1 text-2xl font-semibold text-[#18231d] transition group-hover:text-[#7b3f2f]" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                  {service.related.label}
                </p>
                <p className="mt-2 max-w-2xl leading-7 text-[#536156]">{service.related.text}</p>
              </div>
              <span aria-hidden="true" className="text-2xl text-[#1f2a24] transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
            </a>
          )}
        </div>
      </section>

      <section className="bg-[#1f2a24] px-5 py-14 text-[#f6f1e8] sm:px-8">
        <div data-reveal className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">Get a price for your {service.title.toLowerCase()}.</h2>
            <p className="mt-3 text-lg leading-8 text-[#f6f1e8]/75">{service.next}</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <ContactModal topic={`Quote: ${service.title}`} source={`Service page closing CTA: ${service.title}`} variant="light">
              {QUOTE_CTA}
            </ContactModal>
            <a href={CONTACT_MAILTO} className="text-sm font-medium text-[#f6f1e8]/80 underline decoration-[#f6f1e8]/30 underline-offset-4 hover:text-[#f6f1e8]">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-[#7b3f2f]">Other services</p>
          <div className="mt-6 grid gap-px border border-[#ddd4c5] bg-[#ddd4c5] md:grid-cols-3">
            {others.map((item) => (
              <a key={item.slug} href={`/services/${item.slug}`} className="group bg-[#f6f1e8] p-6 transition-colors hover:bg-[#fffaf2]">
                <p className="text-xl font-semibold text-[#18231d] transition group-hover:text-[#7b3f2f]" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#536156]">{item.summary}</p>
                <span aria-hidden="true" className="mt-4 inline-block text-[#1f2a24] transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
