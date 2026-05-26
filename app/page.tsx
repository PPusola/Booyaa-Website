import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const services = [
  ["Website refreshes", "$50-$200", "Quick updates to spacing, copy, styling, and small usability issues on an existing site."],
  ["Small business sites", "$200-$500", "A focused new website or landing page for a service, portfolio, or local business."],
  ["Launch cleanup", "$300-$500", "Forms, deployment, analytics, performance checks, and final launch polish."],
  ["App MVPs", "$600-$1,500", "Small app builds and prototypes with focused features, clear screens, and a path to testing."],
  ["Web + mobile", "$1,000-$2,500", "A connected website and mobile app package for projects that need both presence and product."],
];

const projects = [
  {
    name: "Caroline Does Numbers",
    type: "Client website",
    status: "Live",
    href: "/caroline-does-numbers",
    text: "A practical service website for bookkeeping and tax support.",
  },
  {
    name: "MiDoid",
    type: "Downloadable project",
    status: "Release",
    href: "/midoid",
    text: "A public project available through GitHub Releases.",
  },
  {
    name: "PhotoSnap",
    type: "Product concept",
    status: "Waitlist",
    href: "/photosnap",
    text: "A memory challenge app for guessing when photos were taken.",
  },
  {
    name: "Spotify Jam Sesh",
    type: "Product concept",
    status: "Prototype",
    href: "/spotify-jam-sesh",
    text: "A shared listening room concept for synchronized music sessions.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="border-b border-[#d9d0c2] px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-5 max-w-xl text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">
              Product and web studio
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-[#18231d] sm:text-6xl lg:text-7xl">
              Useful websites and apps for small teams with real things to ship.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#536156]">
              Booyaa builds focused websites, app MVPs, and launch-ready digital tools with clean interfaces, practical scope, and direct communication.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ContactModal topic="Project quote" source="Homepage hero">
                Get a Quote
              </ContactModal>
              <a
                href="#work"
                className="inline-flex items-center justify-center border border-[#b8ad9d] px-5 py-2.5 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
              >
                View work
              </a>
            </div>
          </div>

          <div className="border border-[#cfc5b6] bg-[#fffaf2] p-5 shadow-[18px_18px_0_#ded4c6]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Current build rhythm</p>
            <div className="mt-6 grid gap-4">
              {["Scope the smallest useful version", "Design screens people can scan", "Build cleanly and launch without drama"].map((item, index) => (
                <div key={item} className="grid grid-cols-[3rem_1fr] border border-[#d9d0c2] bg-[#fdf8ef]">
                  <span className="border-r border-[#d9d0c2] py-4 text-center text-sm font-semibold text-[#7b3f2f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="px-5 py-4 text-sm font-semibold text-[#1f2a24]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Selected work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d] sm:text-5xl">Small, focused projects with clear outcomes.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                className="border border-[#d9d0c2] bg-[#fffaf2] p-6 transition hover:-translate-y-1 hover:border-[#1f2a24]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">{project.type}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#18231d]">{project.name}</h3>
                  </div>
                  <span className="border border-[#d8cec0] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#536156]">
                    {project.status}
                  </span>
                </div>
                <p className="mt-5 leading-7 text-[#536156]">{project.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9d0c2] bg-[#fffaf2] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Starting points</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d] sm:text-5xl">Straightforward pricing for smaller builds.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {services.map(([title, price, text]) => (
              <article key={title} className="border-l border-[#cfc5b6] pl-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">{price}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#18231d]">{title}</h3>
                <p className="mt-4 leading-7 text-[#536156]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f2a24] px-5 py-16 text-[#f6f1e8] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a26f]">Ready when you are</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight">Have a website or app that needs a cleaner first version?</h2>
          </div>
          <ContactModal topic="Project quote" source="Homepage closing CTA" variant="light">
            Start a project
          </ContactModal>
        </div>
      </section>
    </PageShell>
  );
}
