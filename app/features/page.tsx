import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const services = [
  {
    title: "Lead-generating website",
    timeline: "Typical build: 2-4 weeks",
    for: "Home-services and local businesses that need their website to produce calls, not just exist.",
    includes: "Service and area pages structured for local search, click-to-call flows, estimate forms with lead logging, and a launch on fast, reliable hosting.",
    next: "Book a call and walk me through your business and where your customers come from today.",
  },
  {
    title: "Website rebuild",
    timeline: "Typical build: 1-3 weeks",
    for: "Businesses with an existing site that looks dated, loads slowly, or doesn't show up in search.",
    includes: "A ground-up rebuild on a modern stack, keeping what works, fixing what doesn't, and structuring the new site to rank and convert.",
    next: "Send your current site and what's frustrating you about it.",
  },
  {
    title: "AI lead capture",
    timeline: "Scoped per business",
    for: "Businesses that miss calls after hours or lose leads that come in overnight.",
    includes: "An AI intake assistant that answers questions, qualifies leads, and captures contact details when you can't pick up, with every conversation logged for follow-up.",
    next: "Book a call to talk through how leads reach you now and where they fall through.",
  },
  {
    title: "Ongoing care",
    timeline: "Monthly",
    for: "Businesses that want their site maintained, updated, and improving without thinking about it.",
    includes: "Content updates, new service pages, performance and search monitoring, fixes, and a direct line to the person who built your site.",
    next: "Available for sites Booyaa builds, and for existing sites after a review.",
  },
];

export default function Features() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Services</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">Websites and tools that win you customers.</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              Everything Booyaa builds is aimed at one outcome: when someone in your area needs what you do, they find you, trust you, and contact you.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <article data-reveal={String((index % 2) + 1)} key={service.title} className="border border-[#d9d0c2] bg-[#fffaf2] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_#ded4c6]">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#18231d]">{service.title}</h2>
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

          <div data-reveal className="mt-14 border border-[#d9d0c2] bg-[#1f2a24] p-8 text-[#f6f1e8]">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a26f]">Pricing</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">Every project is scoped individually. A 15-minute call gets you a clear price.</h2>
              </div>
              <ContactModal topic="15-minute intro call" source="Services page" variant="light">
                Book a 15-minute call
              </ContactModal>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
