"use client";

import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const trustPoints = [
  ["Direct access, no layers", "You work with the person who builds your site. No account managers, no handoffs, no waiting for someone to relay your question."],
  ["Specialist, not generalist", "Booyaa focuses on home-services and local businesses, so decisions about search, calls, and lead capture come from pattern, not guesswork."],
  ["Owned end to end", "Strategy, design, engineering, deployment, and search structure are handled as one product by one accountable builder."],
];

const skills = ["React", "Next.js", "TypeScript", "Python", "FastAPI", "React Native", "Django", "Firebase", "REST APIs", "SQL", "Local SEO"];

export default function AboutPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div data-reveal className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">About Booyaa</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">
            A web studio built for businesses whose customers pick up the phone.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#536156]">
            Booyaa is run by Priyanshu Pusola, a software engineer with production experience at BlackBerry QNX and Newgen Software. The studio builds websites and lead-capture tools for home-services and local businesses in Alberta and beyond.
          </p>
          <div className="mt-8 border-l border-[#cfc5b6] pl-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Founder note</p>
            <p className="mt-3 leading-7 text-[#536156]">
              Most local business websites are brochures. Your customers don&apos;t want a brochure. They have a problem, they searched for someone to solve it, and the site that makes calling easiest wins the job. That&apos;s the site I build: found in search, trusted at a glance, and one tap from a phone call.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ContactModal topic="15-minute intro call" source="About page">
              Book a 15-minute call
            </ContactModal>
            <a
              href="https://github.com/PPusola"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#b8ad9d] px-5 py-2.5 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9d0c2] bg-[#fffaf2] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {trustPoints.map(([title, text], index) => (
            <article data-reveal={String(index + 1)} key={title} className="border-l border-[#cfc5b6] pl-6">
              <h2 className="text-2xl font-semibold tracking-tight text-[#18231d]">{title}</h2>
              <p className="mt-4 leading-7 text-[#536156]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div data-reveal className="mx-auto max-w-4xl">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="flex w-full items-center justify-between border border-[#d9d0c2] bg-[#fffaf2] p-5 text-left transition hover:border-[#1f2a24]"
          >
              <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Credentials</span>
              <span className="mt-2 block text-2xl font-semibold tracking-tight text-[#18231d]">Founder background</span>
              <span className="mt-2 block max-w-2xl text-sm leading-6 text-[#536156]">Education, industry experience, and the tools behind the work.</span>
            </span>
            <span className="text-sm font-semibold text-[#536156]">{expanded ? "Close" : "Open"}</span>
          </button>

          {expanded && (
            <div className="border-x border-b border-[#d9d0c2] bg-[#fffaf2] p-6">
              <div className="grid gap-8 md:grid-cols-2">
                <section>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Education</h3>
                  <p className="mt-3 leading-7 text-[#536156]">
                    Bachelor of Computer Science with a Minor in Economics, University of Alberta.
                  </p>
                </section>
                <section>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Industry experience</h3>
                  <div className="mt-3 space-y-3 leading-7 text-[#536156]">
                    <p><span className="font-semibold text-[#18231d]">BlackBerry QNX</span> - Functional Safety engineering on safety-critical software, where correctness isn&apos;t optional and testing is rigorous.</p>
                    <p><span className="font-semibold text-[#18231d]">Newgen Software</span> - Software developer building AI-assisted applications and product prototypes.</p>
                  </div>
                </section>
                <section>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Selected engineering</h3>
                  <div className="mt-3 space-y-3 leading-7 text-[#536156]">
                    <p><span className="font-semibold text-[#18231d]">Safe Home Restoration</span> - Production Next.js website with local SEO structure and automated lead capture for an Edmonton restoration company.</p>
                    <p><span className="font-semibold text-[#18231d]">Otto</span> - Local-first AI assistant with tool use, encrypted memory, and voice control.</p>
                    <p><span className="font-semibold text-[#18231d]">MiDoid</span> - Shipped macOS and Android app for Wi-Fi file browsing and transfer.</p>
                  </div>
                </section>
                <section>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Tools</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="border border-[#d8cec0] px-3 py-1 text-sm text-[#536156]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
