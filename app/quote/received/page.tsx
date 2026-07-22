import type { Metadata } from "next";
import { PageShell } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Request Received",
  description: "Your request for a 15-minute call with Booyaa was received. Expect a reply within one business day.",
  alternates: {
    canonical: "/quote/received",
  },
  // Confirmation pages should not compete in search. Google Ads and Analytics
  // still record the visit, which is the point of the page.
  robots: {
    index: false,
    follow: true,
  },
};

const nextSteps = [
  ["Within one business day", "I read every request personally and reply from priyanshu@booyaa.net with a couple of times for the call."],
  ["On the call, 15 minutes", "Your business, how customers find you today, and what your website should be doing for you."],
  ["After the call", "A clear scope and price for the project, whether or not we end up working together."],
];

const reading = [
  { href: "/safe-home-restoration", label: "Case study: Safe Home Restoration", text: "A 24/7 emergency restoration site built for local search and phone calls." },
  { href: "/features", label: "Services", text: "Website builds, rebuilds, AI lead capture, and ongoing care." },
  { href: "/products", label: "Client work and Booyaa Labs", text: "Live client sites and the independent engineering behind them." },
];

export default function QuoteReceivedPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Request received</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">
              Thanks. Your request is in.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              I&apos;ll reach out within one business day to set up your free 15-minute call. No obligation, no pressure.
              If you don&apos;t see a reply, check your spam folder for a message from priyanshu@booyaa.net.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {nextSteps.map(([title, text], index) => (
              <article
                data-reveal={String(index + 1)}
                key={title}
                className="border border-[#d9d0c2] bg-[#fffaf2] p-6"
              >
                <span className="text-sm font-semibold text-[#7b3f2f]">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#18231d]">{title}</h2>
                <p className="mt-3 leading-7 text-[#536156]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9d0c2] bg-[#fffaf2] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">While you wait</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d] sm:text-5xl">
              See what the work looks like.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reading.map((item, index) => (
              <a
                data-reveal={String(index + 1)}
                key={item.href}
                href={item.href}
                className="border border-[#d9d0c2] bg-[#f6f1e8] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1f2a24] hover:shadow-[8px_8px_0_#ded4c6]"
              >
                <h3 className="text-xl font-semibold tracking-tight text-[#18231d]">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-[#536156]">{item.text}</p>
              </a>
            ))}
          </div>

          <div data-reveal="4" className="mt-8">
            <a
              href="/"
              className="inline-flex items-center justify-center border border-[#b8ad9d] px-5 py-2.5 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
            >
              Back to home
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
