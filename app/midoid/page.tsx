import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const steps = [
  { number: "01", title: "Open MiDoid on Mac", body: "Launch the menu bar app and it will start listening on your local network." },
  { number: "02", title: "Scan the QR code on Android", body: "Open the MiDoid Android app and scan the QR shown in the Mac menu bar. No account needed." },
  { number: "03", title: "Transfer files", body: "Drag files to your Mac, browse your Android storage, or use the Android share sheet to send photos and documents directly." },
];

const whyItems = [
  { title: "No cables", body: "Everything works over Wi-Fi. Keep your USB-C port free." },
  { title: "No cloud involved", body: "Files go directly between your devices over the local network. Nothing leaves your home or office." },
  { title: "No account required", body: "Download, pair with a QR code, and start transferring. There is nothing to sign up for." },
  { title: "Android share sheet built in", body: "Share photos, PDFs, or any file from any Android app directly to your Mac in one tap." },
  { title: "Mac-native menu bar app", body: "MiDoid lives in your menu bar. It stays out of the way until you need it." },
  { title: "Browse and manage files", body: "See your Android storage from your Mac. Upload, download, delete, and preview without touching your phone." },
];

const faqItems = [
  {
    question: "Does MiDoid use the internet?",
    answer: "No. MiDoid uses your local Wi-Fi network only. Files transfer directly between your Mac and Android device. Nothing is uploaded to any server.",
  },
  {
    question: "Where do received files go on Mac?",
    answer: "Files sent from Android land in your Downloads folder by default. You can move or rename them like any other file.",
  },
  {
    question: "Why does macOS ask for local network permission?",
    answer: "MiDoid needs to discover your Android device on the network. macOS requires apps to ask for this permission explicitly. Granting it only allows local network access, not internet access.",
  },
  {
    question: "Why does the Android app need file access?",
    answer: "To browse and transfer your files, MiDoid needs permission to read and write storage. It only accesses files when you are actively using the app.",
  },
  {
    question: "Do both devices need to be on the same Wi-Fi network?",
    answer: "Yes. Your Mac and Android device must be connected to the same Wi-Fi or local network for MiDoid to work.",
  },
  {
    question: "Does the connection restore automatically?",
    answer: "After the initial QR pairing, MiDoid will try to reconnect automatically when both devices are on the same network.",
  },
];

const changelogEntries = [
  {
    version: "v0.4",
    date: "2025",
    changes: [
      "Android share sheet integration for sending files directly from any app",
      "Improved QR pairing reliability",
      "Mac file browser with drag-and-drop upload",
      "Preview support for images and common document types",
    ],
  },
];

export default function MiDoidPage() {
  return (
    <PageShell>

      {/* Hero */}
      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Available now for Mac and Android</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">
            Move files between Android and Mac.<br className="hidden sm:block" /> Private. Local. No cloud.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#536156]">
            MiDoid is the missing Android companion for Mac. Send files, browse your phone, and receive Android shares privately over your local network. No cloud. No account. No cable.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/PPusola/MiDoid/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1f2a24] px-6 py-3 text-sm font-semibold text-[#f6f1e8] transition hover:bg-[#7b3f2f]"
            >
              <svg aria-hidden="true" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4M15 3h6m0 0v6m0-6L10 14" />
              </svg>
              Download for Mac
            </a>
            <a
              href="https://github.com/PPusola/MiDoid/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#b8ad9d] px-6 py-3 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
            >
              <svg aria-hidden="true" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
              Download for Android (.apk)
            </a>
          </div>
          <p className="mt-4 text-sm text-[#536156]">Both apps are required. Download and install one on each device.</p>
        </div>
      </section>

      {/* Pricing + Trust */}
      <section className="border-y border-[#d9d0c2] bg-[#fffaf2] px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Pricing</p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-[#18231d]">$4.99</p>
            <p className="mt-1 text-sm text-[#536156]">One-time purchase. No subscription.</p>
          </div>
          <div className="grid gap-2 text-sm text-[#536156] sm:text-right">
            <p className="flex items-center gap-2 sm:justify-end">
              <span className="text-[#7b3f2f]">&#10003;</span> Local network only. No data ever leaves your devices.
            </p>
            <p className="flex items-center gap-2 sm:justify-end">
              <span className="text-[#7b3f2f]">&#10003;</span> No account. No sign-up. No cloud storage.
            </p>
            <p className="flex items-center gap-2 sm:justify-end">
              <span className="text-[#7b3f2f]">&#10003;</span> Works entirely on your own Wi-Fi network.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Setup */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Get started in minutes</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d]">Three steps to your first transfer.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
                <span className="text-4xl font-semibold text-[#d9d0c2]">{step.number}</span>
                <h3 className="mt-4 font-semibold text-[#18231d]">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#536156]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MiDoid */}
      <section className="border-y border-[#d9d0c2] bg-[#fffaf2] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Why MiDoid</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d]">Built for people who use Android with a Mac.</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item) => (
              <div key={item.title} className="border border-[#d9d0c2] bg-[#fdf8ef] p-6">
                <h3 className="font-semibold text-[#18231d]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#536156]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Requirements</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d]">Compatibility.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">Mac</p>
              <p className="mt-3 font-semibold text-[#18231d]">macOS 13 Ventura or later</p>
              <p className="mt-2 text-sm leading-6 text-[#536156]">Runs as a lightweight menu bar app. Apple Silicon and Intel both supported.</p>
            </div>
            <div className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">Android</p>
              <p className="mt-3 font-semibold text-[#18231d]">Android 8.0 or later</p>
              <p className="mt-2 text-sm leading-6 text-[#536156]">Distributed as a sideloaded APK. Enable &ldquo;Install from unknown sources&rdquo; in your Android settings to install.</p>
            </div>
            <div className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7b3f2f]">Network</p>
              <p className="mt-3 font-semibold text-[#18231d]">Same Wi-Fi network required</p>
              <p className="mt-2 text-sm leading-6 text-[#536156]">Both devices must be on the same local network. Mobile data or VPN connections are not supported.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-[#d9d0c2] bg-[#fffaf2] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d]">Common questions.</h2>
          <div className="mt-10 grid gap-0 divide-y divide-[#d9d0c2] border border-[#d9d0c2]">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-[#fdf8ef] px-6 py-6">
                <h3 className="font-semibold text-[#18231d]">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-[#536156]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Release notes</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d]">What is new.</h2>
          <div className="mt-10 space-y-8">
            {changelogEntries.map((entry) => (
              <div key={entry.version} className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-xl font-semibold text-[#18231d]">{entry.version}</span>
                  <span className="text-sm text-[#536156]">{entry.date}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {entry.changes.map((change) => (
                    <li key={change} className="flex items-start gap-3 text-sm leading-6 text-[#536156]">
                      <span className="mt-0.5 shrink-0 text-[#7b3f2f]">&#8250;</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support + Legal */}
      <section className="border-t border-[#d9d0c2] bg-[#fffaf2] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Support</p>
            <p className="mt-4 text-sm leading-7 text-[#536156]">Questions, bug reports, or setup help? Reach out directly.</p>
            <ContactModal topic="MiDoid support" source="MiDoid page" variant="secondary" mode="contact">
              Contact Support
            </ContactModal>
            <p className="mt-3 text-sm text-[#536156]">
              Or email{" "}
              <a href="mailto:sidpusola1027@gmail.com" className="font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 hover:text-[#7b3f2f]">
                sidpusola1027@gmail.com
              </a>
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Legal</p>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <a href="/privacy" className="font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 hover:text-[#7b3f2f]">Privacy Policy</a>
              </p>
              <p>
                <a href="/terms" className="font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 hover:text-[#7b3f2f]">Terms of Use</a>
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Refunds</p>
            <p className="mt-4 text-sm leading-7 text-[#536156]">
              If MiDoid does not work as described on your supported device, contact support within 14 days of purchase for a full refund. No questions asked.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Source</p>
            <p className="mt-4 text-sm leading-7 text-[#536156]">
              Releases are hosted on GitHub. You can review the release history and download previous versions at any time.
            </p>
            <a
              href="https://github.com/PPusola/MiDoid/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-semibold text-sm text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 hover:text-[#7b3f2f]"
            >
              GitHub Releases
            </a>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
