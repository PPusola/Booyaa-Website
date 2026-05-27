import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const downloads = [
  {
    name: "MiDoid",
    status: "Latest release",
    platform: "GitHub Releases",
    version: "Latest GitHub release",
    availability: "Public release",
    href: "https://github.com/PPusola/MiDoid/releases",
    source: "https://github.com/PPusola/MiDoid",
    text: "A local-first macOS and Android companion app for securely browsing and transferring Android files from your Mac over Wi-Fi.",
  },
];

export default function Download() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Downloads</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">Public releases from Booyaa.</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              Download available projects directly from their release pages.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {downloads.map((item) => (
              <article key={item.name} className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">{item.platform}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#18231d]">{item.name}</h2>
                  </div>
                  <span className="border border-[#d8cec0] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#536156]">
                    {item.status}
                  </span>
                </div>
                <p className="mt-6 leading-7 text-[#536156]">{item.text}</p>
                <dl className="mt-6 grid gap-3 border-y border-[#d9d0c2] py-5 text-sm leading-6 text-[#536156] sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-[#18231d]">Version</dt>
                    <dd>{item.version}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#18231d]">Availability</dt>
                    <dd>{item.availability}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#18231d]">Changelog</dt>
                    <dd>Included on GitHub Releases</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#18231d]">Source</dt>
                    <dd>GitHub repository</dd>
                  </div>
                </dl>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#1f2a24] px-5 py-2.5 text-sm font-semibold text-[#f6f1e8] transition hover:bg-[#7b3f2f]"
                  >
                    Download {item.name}
                  </a>
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-[#b8ad9d] px-5 py-2.5 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
                  >
                    View source
                  </a>
                  <ContactModal topic={`${item.name} support`} source="Downloads page" variant="secondary" mode="contact">
                    Support
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
