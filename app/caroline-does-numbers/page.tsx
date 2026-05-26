import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const details = [
  ["Problem", "The business needed a clear online presence that explained bookkeeping and tax support without feeling crowded or confusing."],
  ["What I built", "A focused service website with readable sections, direct calls to action, and a layout that helps visitors understand the offer quickly."],
  ["Tech used", "Next.js, React, TypeScript, Tailwind CSS, and Vercel deployment."],
  ["Outcome", "A live website that gives the business a cleaner place to send potential clients and makes the contact path easier to find."],
];

const features = ["Service-focused page structure", "Responsive layout", "Clear contact path", "Trust-first copy flow"];

export default function CarolineDoesNumbersPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Client website</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">
              Caroline Does Numbers
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              A practical website for a bookkeeping and tax business, built around clarity, trust, and simple client contact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://project-inuil.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#1f2a24] px-5 py-2.5 text-sm font-semibold text-[#f6f1e8] transition hover:bg-[#7b3f2f]"
              >
                View live site
              </a>
              <ContactModal topic="Project like Caroline Does Numbers" source="Caroline Does Numbers page">
                Want something like this?
              </ContactModal>
            </div>
          </div>

          <div className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
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

      <section className="border-y border-[#d9d0c2] bg-[#fffaf2] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Key features</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d]">Built to make the service easier to understand.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="border border-[#d9d0c2] bg-[#fdf8ef] p-4 font-semibold text-[#18231d]">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
