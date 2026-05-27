"use client";

import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const trustPoints = [
  ["Practical scope", "We start with the smallest version that can help someone, then build from there."],
  ["Clear communication", "You get direct updates, plain language decisions, and a clear path from idea to launch."],
  ["Technical ownership", "Design, build, deployment, and cleanup are treated as one connected product."],
];

const skills = ["React", "Next.js", "React Native", "TypeScript", "Python", "Django", "Firebase", "REST APIs", "SQL", "Git"];

export default function AboutPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">About Booyaa</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">
            A small studio for websites and apps that need to feel clear, useful, and finished.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#536156]">
            Booyaa is run by Priyanshu Pusola. I build practical websites and app MVPs for people who need something clear, useful, and launchable without turning the project into a giant production.
          </p>
          <div className="mt-8 border-l border-[#cfc5b6] pl-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Founder note</p>
            <p className="mt-3 leading-7 text-[#536156]">
              I like projects where the goal is concrete: explain a service better, get a first version into people&apos;s hands, clean up a launch, or make an idea feel real enough to test. My job is to keep the work calm, useful, and honest about scope.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/PPusola"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#b8ad9d] px-5 py-2.5 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
            >
              GitHub
            </a>
            <a
              href="https://ppusola.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#b8ad9d] px-5 py-2.5 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
            >
              Portfolio
            </a>
            <ContactModal topic="About page inquiry" source="About page" mode="contact">
              Contact
            </ContactModal>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9d0c2] bg-[#fffaf2] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {trustPoints.map(([title, text]) => (
            <article key={title} className="border-l border-[#cfc5b6] pl-6">
              <h2 className="text-2xl font-semibold tracking-tight text-[#18231d]">{title}</h2>
              <p className="mt-4 leading-7 text-[#536156]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="flex w-full items-center justify-between border border-[#d9d0c2] bg-[#fffaf2] p-5 text-left transition hover:border-[#1f2a24]"
          >
              <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Optional background</span>
              <span className="mt-2 block text-2xl font-semibold tracking-tight text-[#18231d]">Founder background</span>
              <span className="mt-2 block max-w-2xl text-sm leading-6 text-[#536156]">A compact note on education, experience, selected projects, and tools.</span>
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
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Experience</h3>
                  <div className="mt-3 space-y-3 leading-7 text-[#536156]">
                    <p><span className="font-semibold text-[#18231d]">BlackBerry QNX</span> - Functional Safety Co-op working with C testing, regression workflows, and safety-focused software.</p>
                    <p><span className="font-semibold text-[#18231d]">Newgen Software</span> - Software developer intern working on AI-assisted applications and product prototypes.</p>
                  </div>
                </section>
                <section>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Projects</h3>
                  <div className="mt-3 space-y-3 leading-7 text-[#536156]">
                    <p><span className="font-semibold text-[#18231d]">Spotify Jam Sesh</span> - Real-time music sync concept using React Native and Spotify APIs.</p>
                    <p><span className="font-semibold text-[#18231d]">MiDoid</span> - Local-first macOS and Android companion app for Wi-Fi file browsing and transfer.</p>
                    <p><span className="font-semibold text-[#18231d]">Cyan</span> - Distributed social network project with Django and React.</p>
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
