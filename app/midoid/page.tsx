import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const details = [
  ["Problem", "Moving Android files from a Mac can feel clunky, especially when people want a local Wi-Fi workflow instead of cables or cloud handoffs."],
  ["What I built", "A local-first macOS and Android companion app for securely browsing and transferring Android files from your Mac over Wi-Fi."],
  ["Tech used", "Swift for the macOS companion, Android for the mobile app, QR-based pairing, mDNS discovery, temporary authenticated sessions, WebDAV file transfer, and Android Storage Access Framework."],
  ["Outcome", "An early open-source release that lets a Mac browse, upload, download, delete, preview, and organize Android files over the local network without a MiDoid cloud account or server."],
];

const features = ["Local-first transfer flow", "macOS and Android companion app", "Wi-Fi file browsing", "GitHub-hosted releases"];

export default function MiDoidPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Downloadable project</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">MiDoid</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              A local-first macOS and Android companion app for securely browsing and transferring Android files from your Mac over Wi-Fi.
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
