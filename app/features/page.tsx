import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const services = [
  {
    title: "Website refresh",
    price: "$50-$200",
    timeline: "Usually a few days",
    for: "Existing sites that feel messy, outdated, cramped, or unclear.",
    includes: "Spacing cleanup, copy tightening, section polish, button fixes, and small responsive improvements.",
    next: "Send the current site and the areas that feel off.",
  },
  {
    title: "Small business site",
    price: "$200-$500",
    timeline: "Usually 1-3 weeks",
    for: "Service businesses, portfolios, landing pages, and simple company websites.",
    includes: "Core pages, responsive layout, contact flow, basic launch setup, and practical structure.",
    next: "Start with your business, services, and the main action visitors should take.",
  },
  {
    title: "Launch cleanup",
    price: "$300-$500",
    timeline: "Usually 1-2 weeks",
    for: "Projects that are close to launch but need final polish and confidence.",
    includes: "Deployment checks, form setup, analytics, performance pass, mobile review, and launch fixes.",
    next: "Share the current build and what still feels unfinished.",
  },
  {
    title: "Maintenance",
    price: "Custom quote",
    timeline: "Scheduled as needed",
    for: "Existing websites or apps that need ongoing updates, fixes, or care.",
    includes: "Bug fixes, small content updates, dependency updates, feature tweaks, and support windows.",
    next: "Send what needs to be maintained and how often updates happen.",
  },
];

export default function Features() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Services</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">Practical builds for small teams.</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              Booyaa keeps the scope honest: clean pages, useful app flows, and launch support that fits the size of the project.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">{service.price}</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#18231d]">{service.title}</h2>
                  </div>
                  <span className="w-fit border border-[#d8cec0] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#536156]">
                    {service.timeline}
                  </span>
                </div>
                <dl className="mt-6 grid gap-4 text-sm leading-6 text-[#536156]">
                  <div>
                    <dt className="font-semibold text-[#18231d]">Who it is for</dt>
                    <dd className="mt-1">{service.for}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#18231d]">What is included</dt>
                    <dd className="mt-1">{service.includes}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#18231d]">Best next step</dt>
                    <dd className="mt-1">{service.next}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <div className="mt-14 border border-[#d9d0c2] bg-[#1f2a24] p-8 text-[#f6f1e8]">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a26f]">Need help choosing?</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">Send the rough idea. I will help scope the smallest useful version.</h2>
              </div>
              <ContactModal topic="Service inquiry" source="Services page" variant="light">
                Get a Quote
              </ContactModal>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
