import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const projects = [
  {
    name: "Caroline Does Numbers",
    label: "Client website",
    status: "Live",
    href: "/caroline-does-numbers",
    cta: "View case study",
    text: "A clean services website for a bookkeeping and tax business, built around trust, readable service pages, and simple contact paths.",
  },
  {
    name: "MiDoid",
    label: "Downloadable project",
    status: "Latest release",
    href: "/midoid",
    cta: "View project",
    text: "A public project available through GitHub Releases. The download page keeps the latest release easy to find.",
  },
  {
    name: "PhotoSnap",
    label: "App concept",
    status: "Waitlist",
    href: "/photosnap",
    cta: "View concept",
    text: "A social photo challenge where friends guess when a memory was taken and score points based on accuracy.",
  },
  {
    name: "Spotify Jam Sesh",
    label: "App concept",
    status: "Prototype",
    href: "/spotify-jam-sesh",
    cta: "View concept",
    text: "A listening room concept for synchronized playback, shared sessions, and music discovery with friends.",
  },
];

export default function Products() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Work</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">Built, prototyped, and ready to ship.</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              A mix of client work, product experiments, and downloadable projects from Booyaa.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="flex min-h-72 flex-col justify-between border border-[#d9d0c2] bg-[#fffaf2] p-6">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">{project.label}</p>
                      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18231d]">{project.name}</h2>
                    </div>
                    <span className="border border-[#d8cec0] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#536156]">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-6 leading-7 text-[#536156]">{project.text}</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.href}
                    className="inline-flex items-center justify-center border border-[#1f2a24] px-5 py-2.5 text-sm font-semibold text-[#1f2a24] transition hover:bg-[#1f2a24] hover:text-[#f6f1e8]"
                  >
                    {project.cta}
                  </a>
                  <ContactModal topic={`Question about ${project.name}`} source="Products page" variant="secondary" mode="contact">
                    Ask about this
                  </ContactModal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
