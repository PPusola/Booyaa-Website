import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const details = [
  ["Problem", "The project needed a simple public release path so people could find and download the latest build without digging through the site."],
  ["What I built", "A lightweight product entry with a download path that points directly to GitHub Releases."],
  ["Tech used", "GitHub Releases, product page structure, and the Booyaa downloads shelf."],
  ["Outcome", "MiDoid now has a clear home inside Booyaa work and a direct release link from the Downloads page."],
];

const features = ["Latest release link", "GitHub-hosted downloads", "Product status", "Support/contact path"];

export default function MiDoidPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Downloadable project</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">MiDoid</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              A public project available through GitHub Releases, with the latest download kept easy to reach.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/PPusola/MiDoid/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#1f2a24] px-5 py-2.5 text-sm font-semibold text-[#f6f1e8] transition hover:bg-[#7b3f2f]"
              >
                Download MiDoid
              </a>
              <ContactModal topic="MiDoid support" source="MiDoid page" variant="secondary" mode="contact">
                Ask about MiDoid
              </ContactModal>
            </div>
          </div>

          <div className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Project notes</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Download shelf</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d]">Simple release access for public projects.</h2>
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
