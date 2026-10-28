import type { Metadata } from "next";
import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";
import { CONTACT_EMAIL, CONTACT_MAILTO, QUOTE_CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Booyaa",
  description:
    "Meet Booyaa, a web studio run by Priyanshu Pusola building websites and lead-capture tools for home-services and local businesses.",
  alternates: {
    canonical: "/about",
  },
};

const principles = [
  ["You talk to the builder", "No account managers or handoffs. The person you email is the person who builds your site."],
  ["Focused on local businesses", "Home-services and local businesses are all I build for, so decisions about search, calls, and lead capture come from experience."],
  ["One person, start to finish", "Planning, design, development, launch, and search setup are all handled by me, so nothing falls between the cracks."],
];

const background = [
  {
    label: "Education",
    items: [["University of Alberta", "Bachelor of Computer Science, Minor in Economics"]],
  },
  {
    label: "Experience",
    items: [
      ["BlackBerry QNX", "Functional safety engineering on safety-critical software, where correctness isn't optional."],
      ["Newgen Software", "Software developer building AI-assisted applications and product prototypes."],
    ],
  },
  {
    label: "Tools",
    items: [["", "Next.js, React, TypeScript, Python, FastAPI, Django, React Native, Firebase, SQL, and local SEO."]],
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="px-5 pb-16 pt-12 sm:px-8 md:pt-16">
        <div className="mx-auto max-w-3xl">
          <p data-reveal className="text-sm font-semibold text-[#7b3f2f]">About</p>
          <h1 data-reveal="1" className="mt-4 text-5xl font-semibold leading-[1.05] text-[#18231d] sm:text-6xl">
            Hi, I&apos;m Priyanshu. I build websites that get local businesses more calls.
          </h1>
          <div data-reveal="2" className="mt-8 space-y-5 text-lg leading-8 text-[#536156]">
            <p>
              Booyaa is my Edmonton web studio. I build websites and lead-capture tools for restoration companies, contractors, and other local service businesses.
            </p>
            <p>
              Most local business websites are brochures. Your customers don&apos;t want a brochure. They have a problem, they search for someone to fix it, and the business that&apos;s easiest to call gets the job. That&apos;s the site I build: easy to find, trusted at a glance, and one tap from a phone call.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ddd4c5] bg-[#fffaf2] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 data-reveal className="text-3xl font-semibold text-[#18231d]">How I work</h2>
          <ol className="mt-8 border-t border-[#1f2a24]">
            {principles.map(([title, text], index) => (
              <li data-reveal={String(index + 1)} key={title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-[#ddd4c5] py-6">
                <span className="pt-1 text-sm font-semibold text-[#7b3f2f]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-semibold text-[#18231d]">{title}</h3>
                  <p className="mt-1 leading-7 text-[#536156]">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 data-reveal className="text-3xl font-semibold text-[#18231d]">Background</h2>
          <dl className="mt-8 border-t border-[#1f2a24]">
            {background.map((group) => (
              <div data-reveal key={group.label} className="grid gap-3 border-b border-[#ddd4c5] py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <dt className="text-sm font-semibold text-[#7b3f2f]">{group.label}</dt>
                <dd className="space-y-4">
                  {group.items.map(([title, text]) => (
                    <div key={title || text}>
                      {title && <p className="font-semibold text-[#18231d]">{title}</p>}
                      <p className="leading-7 text-[#536156]">{text}</p>
                    </div>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
          <p data-reveal className="mt-6 text-sm text-[#536156]">
            See the work:{" "}
            <a href="/work" className="font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 hover:text-[#7b3f2f]">
              client projects and side projects
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#1f2a24] px-5 py-14 text-[#f6f1e8] sm:px-8">
        <div data-reveal className="mx-auto flex max-w-3xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold leading-tight">Let&apos;s talk about your website.</h2>
            <p className="mt-2 text-[#f6f1e8]/75">I reply within one business day.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <ContactModal source="About page" variant="light">{QUOTE_CTA}</ContactModal>
            <a href={CONTACT_MAILTO} className="text-sm font-medium text-[#f6f1e8]/80 underline decoration-[#f6f1e8]/30 underline-offset-4 hover:text-[#f6f1e8]">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
