"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400">
      <header className="sticky top-0 z-50 border-b border-green-500/30 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Booyaa</div>
          <nav className="hidden items-center gap-8 text-sm text-green-400 md:flex">
            <a href="#products" className="transition hover:text-green-300 hover:font-semibold">Products</a>
            <a href="#features" className="transition hover:text-green-300 hover:font-semibold">Features</a>
            <a href="/about" className="transition hover:text-green-300 hover:font-semibold">About</a>
            <a href="#download" className="transition hover:text-green-300 hover:font-semibold">Download</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-32 sm:px-10 md:px-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500 bg-green-500/10 px-4 py-1 text-sm text-green-300 font-medium">
              🚀 Digital Solutions for Modern Businesses
            </div>
            <div className="space-y-6">
              <h1 className="text-6xl font-bold tracking-tight text-green-400 sm:text-7xl lg:text-8xl leading-tight">
                Code that<br/>connects.<br/>Creates.<br/>Converts.
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-green-300 sm:text-2xl">
                We build stunning websites and powerful apps that drive results. From bookkeeping platforms to social gaming apps, we turn ideas into digital success stories.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-4">
                <a
                  href="#portfolio"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-black shadow-lg shadow-green-500/30 transition hover:shadow-xl hover:-translate-y-1 hover:shadow-green-500/50 sm:w-auto"
                >
                  View Our Work
                </a>
                <a href="#contact" className="inline-flex w-full justify-center rounded-full border-2 border-green-500 px-8 py-4 text-base text-green-400 transition hover:border-green-400 hover:text-green-300 hover:bg-green-500/10 sm:w-auto font-semibold">
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-bold">Our Portfolio</p>
            <h2 className="mt-4 text-5xl font-bold text-green-400 sm:text-6xl">Digital Success Stories</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-green-300">
              Real projects, real results. See how we've transformed businesses through innovative web solutions.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-1">
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-2 duration-300">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black text-2xl mb-6">📊</div>
                  <h3 className="text-3xl font-bold text-green-400 mb-3">Caroline Does Numbers</h3>
                  <p className="text-green-300 leading-7 mb-6">
                    A comprehensive bookkeeping and tax services website for a Nelson, BC-based business. Features include service listings, client testimonials, and professional contact forms.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">25+</div>
                      <div className="text-sm text-green-300">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">100%</div>
                      <div className="text-sm text-green-300">Client Retention</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://project-inuil.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-base font-semibold text-black shadow-lg shadow-green-500/30 transition hover:shadow-xl hover:-translate-y-1"
                    >
                      View Live Site →
                    </a>
                    <div className="inline-flex items-center gap-2 text-green-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Live & Active
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-2xl p-6 border border-green-500/20">
                    <h4 className="text-green-400 font-semibold mb-4">Services Delivered:</h4>
                    <ul className="space-y-2 text-green-300 text-sm">
                      <li>• Custom responsive website design</li>
                      <li>• Service pages (Bookkeeping, Payroll, Tax)</li>
                      <li>• Contact forms and business information</li>
                      <li>• Professional branding and UI/UX</li>
                      <li>• SEO optimization and performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="mailto:priyanshu@booyaa.net?subject=Project Inquiry&body=Hi, I'm interested in working with Booyaa on a web development project."
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-black shadow-lg shadow-green-500/30 transition hover:shadow-xl hover:-translate-y-1 hover:shadow-green-500/50"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="px-6 py-24 sm:px-10 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-bold">Products</p>
            <h2 className="mt-4 text-5xl font-bold text-green-400 sm:text-6xl">Two remarkable apps</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-green-300">
              Connect, play, and discover like never before.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            <div className="group overflow-hidden rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-10 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-2 duration-300">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-green-400">PhotoSnap</p>
                  <h3 className="mt-3 text-4xl font-bold text-green-400">Challenge memories</h3>
                </div>
                <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-sm text-black font-semibold">Waitlist</div>
              </div>
              <p className="text-lg text-green-300 leading-7">
                Upload a treasured memory, set the date, and challenge your friends to guess when it was taken. Race to perfect accuracy and climb the leaderboard together.
              </p>
              <div className="mt-10 grid gap-5 rounded-3xl bg-green-900/20 p-8 text-green-300 border border-green-500/20">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="text-base leading-7">Upload photos with hidden dates. Your secret until the guess.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="text-base leading-7">Send private challenges to friends instantly.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <p className="text-base leading-7">Earn points for accuracy and compete on a shared leaderboard.</p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="mailto:priyanshu@booyaa.net?subject=Interest in PhotoSnap Waitlist&body=Hi, I'm interested in joining the waitlist for PhotoSnap. Please add me to the list."
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-base font-semibold text-black shadow-lg shadow-green-500/30 transition hover:shadow-xl hover:-translate-y-1 hover:shadow-green-500/50"
                >
                  Join Waitlist
                </a>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-10 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-2 duration-300">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-green-400">Spotify Jam Sesh</p>
                  <h3 className="mt-3 text-4xl font-bold text-green-400">Listen together</h3>
                </div>
                <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-sm text-black font-semibold">Waitlist</div>
              </div>
              <p className="text-lg text-green-300 leading-7">
                Create a listening room, invite friends with a simple code, and sync playback across all devices. Discover connections through shared taste.
              </p>
              <div className="mt-10 grid gap-5 rounded-3xl bg-green-900/20 p-8 text-green-300 border border-green-500/20">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="text-base leading-7">Host a synchronized room and let listeners join instantly.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="text-base leading-7">Automatic playback sync across all connected devices.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <p className="text-base leading-7">Match with listeners based on music taste similarity.</p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="mailto:priyanshu@booyaa.net?subject=Interest in Spotify Jam Sesh Waitlist&body=Hi, I'm interested in joining the waitlist for Spotify Jam Sesh. Please add me to the list."
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-base font-semibold text-black shadow-lg shadow-green-500/30 transition hover:shadow-xl hover:-translate-y-1 hover:shadow-green-500/50"
                >
                  Join Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-bold">Why Booyaa</p>
            <h2 className="mt-4 text-5xl font-bold text-green-400">Built for real connection</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black text-2xl mb-6">📱</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Mobile First</h3>
              <p className="text-green-300 leading-7">Native iOS and Android apps built with Expo for best-in-class performance and UX.</p>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black text-2xl mb-6">⚡</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Instant Sync</h3>
              <p className="text-green-300 leading-7">Real-time synchronization powered by Supabase and Firebase for zero-latency experiences.</p>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black text-2xl mb-6">🔐</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Secure & Private</h3>
              <p className="text-green-300 leading-7">Your data is yours. Row-level security and end-to-end encrypted connections.</p>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black text-2xl mb-6">🎯</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Gamified</h3>
              <p className="text-green-300 leading-7">Leaderboards, scoring, achievements, and challenges keep users engaged daily.</p>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black text-2xl mb-6">👥</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Social at Heart</h3>
              <p className="text-green-300 leading-7">Friend systems, real-time chat, and discovery features built into every interaction.</p>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black text-2xl mb-6">🚀</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Always Evolving</h3>
              <p className="text-green-300 leading-7">New apps, features, and experiences launching regularly from Booyaa.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="px-6 py-24 sm:px-10 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-4xl bg-gradient-to-br from-gray-900 via-black to-gray-900 p-12 sm:p-16 text-center shadow-2xl border border-green-500/30">
            <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-bold">Join the waitlist</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-green-400">Be the first to experience Booyaa</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-green-300 leading-8">
              Our apps are coming soon. Join the waitlist to get early access and exclusive updates.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mt-10">
              <a
                href="mailto:priyanshu@booyaa.net?subject=Interest in PhotoSnap Waitlist&body=Hi, I'm interested in joining the waitlist for PhotoSnap. Please add me to the list."
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-black shadow-lg shadow-green-500/40 transition hover:shadow-xl hover:-translate-y-1"
              >
                PhotoSnap Waitlist
              </a>
              <a
                href="mailto:priyanshu@booyaa.net?subject=Interest in Spotify Jam Sesh Waitlist&body=Hi, I'm interested in joining the waitlist for Spotify Jam Sesh. Please add me to the list."
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-black shadow-lg shadow-green-500/40 transition hover:shadow-xl hover:-translate-y-1"
              >
                Spotify Jam Sesh Waitlist
              </a>
            </div>
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
                <li><a href="#" className="hover:text-green-300 transition">Blog</a></li>
                <li><a href="#" className="hover:text-green-300 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-4">Legal</p>
              <ul className="text-sm space-y-2 text-green-300">
                <li><a href="#" className="hover:text-green-300 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-green-300 transition">Terms</a></li>
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
