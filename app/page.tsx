import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const clientWork = [
  {
    name: "Caroline Does Numbers",
    type: "Client website",
    status: "Live",
    href: "/caroline-does-numbers",
    text: "A trust-first service website for a bookkeeping and tax business, built to explain the offer fast and make contact easy.",
  },
];

const labs = [
  {
    name: "Otto",
    tag: "AI assistant",
    href: "/otto",
    text: "A local-first AI assistant with tool use, encrypted memory, and voice control. Proven here, it becomes the after-hours intake bots and lead-capture tools Booyaa rolls out to clients next.",
  },
  {
    name: "MiDoid",
    tag: "Shipped app",
    href: "/midoid",
    text: "A macOS and Android app for browsing and transferring files over Wi-Fi. The native and offline-first techniques it tests feed directly into faster, more reliable client builds.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="border-b border-[#d9d0c2] px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p data-reveal className="mb-5 max-w-xl text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">
              Web studio for home-services businesses
            </p>
            <h1 data-reveal="1" className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-[#18231d] sm:text-6xl lg:text-7xl">
              Websites that turn searches into phone calls.
            </h1>
            <p data-reveal="2" className="mt-7 max-w-2xl text-lg leading-8 text-[#536156]">
              Booyaa builds websites and lead-capture tools for restoration companies, contractors, and local service businesses. Built to rank in local search, designed for the customer who needs you right now.
            </p>
            <div data-reveal="3" className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ContactModal topic="15-minute intro call" source="Homepage hero">
                Book a 15-minute call
              </ContactModal>
              <a
                href="#work"
                className="inline-flex items-center justify-center border border-[#b8ad9d] px-5 py-2.5 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
              >
                See client results
              </a>
            </div>
          </div>

          <div data-reveal="4" className="border border-[#cfc5b6] bg-[#fffaf2] p-5 shadow-[18px_18px_0_#ded4c6]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">How Booyaa works</p>
            <div className="mt-6 grid gap-4">
              {["Understand your customers and how they search", "Build a site that converts them into calls", "Keep it ranking and working for you"].map((item, index) => (
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
          <div data-reveal className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Client work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d] sm:text-5xl">Built for businesses whose customers can&apos;t wait.</h2>
          </div>

          <a
            data-reveal="1"
            href="/safe-home-restoration"
            className="group block border border-[#1f2a24] bg-[#fffaf2] shadow-[6px_6px_0_#ded4c6] transition-all duration-300 hover:-translate-y-1 hover:shadow-[14px_14px_0_#ded4c6]"
          >
            <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">Featured case study</p>
                  <span className="border border-[#d8cec0] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#536156]">
                    Live in production
                  </span>
                </div>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#18231d] sm:text-4xl">
                  Safe Home Solution &amp; Restoration
                </h3>
                <p className="mt-4 max-w-2xl leading-7 text-[#536156]">
                  A full production website for Edmonton&apos;s 24/7 emergency restoration company: six service pages built for local search, a persistent emergency call flow, and estimate forms that log every lead automatically. Designed for the customer standing in a flooded basement at 2 AM.
                </p>
                <p className="mt-6 text-sm font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4">
                  Read the case study
                  <span aria-hidden="true" className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
                </p>
              </div>
              <div className="grid gap-3">
                {["24/7 click-to-call emergency flow", "Local SEO service and area pages", "Automatic lead capture and logging"].map((item) => (
                  <div key={item} className="border border-[#d9d0c2] bg-[#fdf8ef] p-4 text-sm font-semibold text-[#18231d]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </a>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {clientWork.map((project) => (
              <a
                data-reveal="2"
                key={project.name}
                href={project.href}
                className="border border-[#d9d0c2] bg-[#fffaf2] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1f2a24] hover:shadow-[8px_8px_0_#ded4c6]"
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
          <div data-reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Pricing</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d] sm:text-5xl">Every project is scoped individually.</h2>
              <p className="mt-5 text-lg leading-8 text-[#536156]">
                A restoration company, a contractor, and a bookkeeper need different things from their website. A 15-minute call is enough to understand your business and give you a clear scope and price, with no obligation.
              </p>
            </div>
            <ContactModal topic="15-minute intro call" source="Homepage pricing section">
              Book a 15-minute call
            </ContactModal>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Booyaa Labs</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d] sm:text-5xl">R&amp;D that sharpens the client work.</h2>
              <p className="mt-4 leading-7 text-[#536156]">
                Independent engineering projects, from a shipped file-transfer app to a local AI assistant. This is where the techniques behind Booyaa&apos;s client tools get built and tested.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {labs.map((project, index) => (
              <a
                data-reveal={String(index + 1)}
                key={project.name}
                href={project.href}
                className="border border-[#d9d0c2] bg-[#fffaf2] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1f2a24] hover:shadow-[8px_8px_0_#ded4c6]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">{project.tag}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#18231d]">{project.name}</h3>
                <p className="mt-4 text-sm leading-6 text-[#536156]">{project.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f2a24] px-5 py-16 text-[#f6f1e8] sm:px-8">
        <div data-reveal className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a26f]">Your next customer is searching right now</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight">Is your website winning that call, or losing it to a competitor?</h2>
          </div>
          <ContactModal topic="15-minute intro call" source="Homepage closing CTA" variant="light">
            Book a 15-minute call
          </ContactModal>
        </div>
      </section>
    </PageShell>
  );
}
