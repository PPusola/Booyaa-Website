"use client";

import { useState } from "react";

export default function AboutPage() {
  const [teamExpanded, setTeamExpanded] = useState(false);
  return (
    <main className="min-h-screen bg-black text-green-400">
      <header className="sticky top-0 z-50 border-b border-green-500/30 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Booyaa</a>
          <nav className="hidden items-center gap-8 text-sm text-green-400 md:flex">
            <a href="/products" className="transition hover:text-green-300">Products</a>
            <a href="/features" className="transition hover:text-green-300">Features</a>
            <a href="/about" className="transition hover:text-green-300 font-semibold text-green-300">About</a>
          </nav>
        </div>
      </header>

      <section className="px-6 py-24 sm:px-10 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-bold">About us</p>
            <h1 className="mt-4 text-5xl sm:text-6xl font-bold text-green-400 leading-tight">
              Code that creates.<br/>Connects.<br/>Converts.
            </h1>
            <p className="mt-6 text-xl text-green-300 leading-8">
              Booyaa is a digital agency specializing in web development and mobile applications. We build stunning websites for businesses and create engaging apps that bring people together through authentic digital experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-green-400 mb-12">Our Story</h2>
          <div className="space-y-6 text-lg text-green-300 leading-8">
            <p>
              Booyaa started as a vision to bridge the gap between businesses and their digital presence. We believe that every business deserves a website that not only looks great but drives real results.
            </p>
            <p>
              Our journey began with web development — creating custom websites that showcase brands and convert visitors into customers. We've built everything from professional service websites to e-commerce platforms, always focusing on user experience and performance.
            </p>
            <p>
              As our expertise grew, so did our ambitions. We expanded into mobile app development, creating social apps that bring people together. PhotoSnap challenges friends with shared memories, while Spotify Jam Sesh creates real-time music listening experiences.
            </p>
            <p>
              Today, Booyaa is a full-service digital agency: <span className="font-semibold text-green-400">building websites that work and apps that connect</span>. We combine technical expertise with creative vision to deliver digital solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-green-400 mb-12">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-sm mb-4">QF</div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">Quality First</h3>
              <p className="text-green-300 leading-7">
                Every pixel, every line of code, every user interaction matters. We never compromise on quality or user experience.
              </p>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-sm mb-4">IN</div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">Innovation</h3>
              <p className="text-green-300 leading-7">
                We stay ahead of technology trends, using the latest tools and frameworks to build cutting-edge solutions.
              </p>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-sm mb-4">PS</div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">Privacy & Security</h3>
              <p className="text-green-300 leading-7">
                Your data and your clients' data are protected. We implement industry-standard security practices in everything we build.
              </p>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-sm mb-4">PT</div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">Partnership</h3>
              <p className="text-green-300 leading-7">
                We work closely with our clients as partners, not just vendors. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-green-400 mb-12">The Team</h2>
          <button
            onClick={() => setTeamExpanded(!teamExpanded)}
            className="w-full text-left rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 md:p-10 hover:shadow-lg hover:shadow-green-500/20 transition group"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-black font-bold text-xl flex-shrink-0">PP</div>
                <div>
                  <h3 className="text-xl font-bold text-green-400">Priyanshu Pusola</h3>
                  <p className="text-green-300 text-sm mt-0.5">Founder & Full-Stack Developer</p>
                </div>
              </div>
              <div className={`w-8 h-8 rounded-full border border-green-500/40 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${teamExpanded ? "rotate-180" : ""}`}>
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {teamExpanded && (
              <div className="mt-8 pt-8 border-t border-green-500/20" onClick={(e) => e.stopPropagation()}>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-green-500 font-bold mb-2">Education</p>
                    <p className="text-green-300 leading-7 text-sm">
                      Bachelor of Computer Science, Minor in Economics — University of Alberta (Sep 2021 – Dec 2025). Recipient of the UAlberta International Country Scholarship and International Student Scholarship; Attendee, ODSC Agentic AI Conference 2025.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-green-500 font-bold mb-3">Experience</p>
                    <div className="space-y-4 text-green-300 leading-7">
                      <div>
                        <p className="font-semibold text-green-400 text-sm">Functional Safety Co-op — BlackBerry QNX <span className="text-green-500 font-normal">(May – Aug 2024)</span></p>
                        <p className="mt-1 text-sm">Authored C standard library functional tests for QNX RTOS targeting ARM, x86, and x64 architectures. Designed test flag annotations integrated with the regression pipeline. Participated in daily cross-timezone standups following full Agile/SCRUM cycles with senior code review in C, Python (FastAPI), Vim, and JIRA.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-green-400 text-sm">Software Developer Intern — Newgen Software <span className="text-green-500 font-normal">(June – Aug 2023)</span></p>
                        <p className="mt-1 text-sm">Fine-tuned GPT-3.5 using LlamaIndex Vector Store, achieving a 25% improvement in model accuracy and 10% faster response times. Built a multimodal Gradio app for meeting note extraction and receipt itemization. Collaborated through the full build cycle with iterative senior code reviews enforcing SDLC best practices.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-green-500 font-bold mb-3">Notable Projects</p>
                    <div className="space-y-2 text-green-300 text-sm leading-7">
                      <p><span className="font-semibold text-green-400">SpotifyJamSesh</span> — Real-time music sync app using React Native (Expo), Spotify Web API, Firebase Realtime DB, and OAuth 2.0. Implements drift-correction engine maintaining &lt;2s sync tolerance.</p>
                      <p><span className="font-semibold text-green-400">Cyan</span> — Distributed social network in Django and React.js with ActivityPub-inspired inbox push model across independent Heroku nodes. 15+ RESTful API endpoints with full pagination.</p>
                      <p><span className="font-semibold text-green-400">Cobra Chickens</span> — Android event app in Java with custom QR codes, Firebase Firestore check-ins, Cloud Messaging push notifications, and Google Maps integration.</p>
                      <p><span className="font-semibold text-green-400">Energy Insights</span> — Python/R data pipeline ingesting CER, EIA, and CANSIM datasets with time-series analysis on WTI, Brent, AECO, and Henry Hub pricing.</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-green-500 font-bold mb-3">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "JavaScript", "Java", "C", "SQL", "React.js", "React Native", "Next.js", "Django", "Node.js", "Firebase", "Docker", "Git", "REST APIs", "Agile/SCRUM"].map((skill) => (
                        <span key={skill} className="rounded-full border border-green-500/40 bg-green-900/20 px-3 py-1 text-xs text-green-300 font-medium">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 pt-2">
                    <a href="https://linkedin.com/in/priyanshu-pusola" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-semibold transition text-sm border-b border-green-500/40 hover:border-green-300 pb-0.5">LinkedIn</a>
                    <a href="https://github.com/Ironical-Suburb" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-semibold transition text-sm border-b border-green-500/40 hover:border-green-300 pb-0.5">GitHub</a>
                    <a href="https://ironical-suburb.github.io" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-semibold transition text-sm border-b border-green-500/40 hover:border-green-300 pb-0.5">Portfolio</a>
                    <a href="mailto:priyanshu@booyaa.net" className="text-green-400 hover:text-green-300 font-semibold transition text-sm border-b border-green-500/40 hover:border-green-300 pb-0.5">Email</a>
                  </div>
                </div>
              </div>
            )}
          </button>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-green-400 mb-12">What's Next</h2>
          <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-10 md:p-12">
            <p className="text-lg text-green-300 leading-8 mb-6">
              We're growing fast. Here's what's coming next from Booyaa:
            </p>
            <ul className="space-y-4 text-green-300 leading-8">
              <li className="flex items-start gap-4">
                <span className="text-green-400 flex-shrink-0 font-bold mt-0.5">—</span>
                <span><span className="font-semibold text-green-400">Website Portfolio Expansion</span> — More client showcases and case studies</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-green-400 flex-shrink-0 font-bold mt-0.5">—</span>
                <span><span className="font-semibold text-green-400">PhotoSnap Launch</span> — Full app release with advanced features</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-green-400 flex-shrink-0 font-bold mt-0.5">—</span>
                <span><span className="font-semibold text-green-400">Spotify Jam Sesh</span> — Real-time music collaboration app</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-green-400 flex-shrink-0 font-bold mt-0.5">—</span>
                <span><span className="font-semibold text-green-400">E-commerce Solutions</span> — Custom online stores and payment integration</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-green-400 flex-shrink-0 font-bold mt-0.5">—</span>
                <span><span className="font-semibold text-green-400">Team Growth</span> — Expanding our development team for bigger projects</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-green-400 mb-6">Let's Build Something Together</h2>
          <p className="text-xl text-green-300 leading-8 mb-10">
            Ready to bring your digital vision to life? Whether it's a stunning website or an innovative app, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
            <a
              href="mailto:priyanshu@booyaa.net"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-black shadow-lg shadow-green-500/30 transition hover:shadow-xl hover:-translate-y-1 sm:w-auto"
            >
              Start a Project
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-green-500 px-8 py-4 text-base text-green-400 transition hover:border-green-400 hover:text-green-300 hover:bg-green-500/10 sm:w-auto font-semibold"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-green-500/30 px-6 py-12 text-green-400 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div>
              <p className="font-bold text-green-400 mb-4">Booyaa</p>
              <p className="text-sm text-green-300">We build websites and apps for businesses and users.</p>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-4">Products</p>
              <ul className="text-sm space-y-2 text-green-300">
                <li><a href="/photosnap" className="hover:text-green-300 transition">PhotoSnap</a></li>
                <li><a href="/spotify-jam-sesh" className="hover:text-green-300 transition">Spotify Jam Sesh</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-4">Company</p>
              <ul className="text-sm space-y-2 text-green-300">
                <li><a href="/about" className="hover:text-green-300 transition">About</a></li>
                <li><a href="/quote" className="hover:text-green-300 transition">Get a Quote</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-4">Legal</p>
              <ul className="text-sm space-y-2 text-green-300">
                <li><a href="/privacy" className="hover:text-green-300 transition">Privacy</a></li>
                <li><a href="/terms" className="hover:text-green-300 transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-500/30 pt-8 text-sm text-center text-green-500">
            <p>© {new Date().getFullYear()} Booyaa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
