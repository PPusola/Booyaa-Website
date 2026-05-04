"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400">
      <header className="sticky top-0 z-50 border-b border-green-500/30 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Booyaa</div>
          <nav className="hidden items-center gap-8 text-sm text-green-400 md:flex">
            <a href="/products" className="transition hover:text-green-300 hover:font-semibold">Products</a>
            <a href="/features" className="transition hover:text-green-300 hover:font-semibold">Features</a>
            <a href="/about" className="transition hover:text-green-300 hover:font-semibold">About</a>
            <a href="/download" className="transition hover:text-green-300 hover:font-semibold">Download</a>
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
              Digital Solutions for Modern Businesses
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black font-bold text-lg mb-6">CDN</div>
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

      <section className="px-6 py-16 sm:px-10 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <a href="/products" className="group rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-2 group-hover:text-green-300">Products</h3>
              <p className="text-green-300 leading-7">Explore our amazing apps and projects.</p>
            </a>

            <a href="/features" className="group rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-2 group-hover:text-green-300">Features</h3>
              <p className="text-green-300 leading-7">Learn about our web and mobile expertise.</p>
            </a>

            <a href="/download" className="group rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-2 group-hover:text-green-300">Download</h3>
              <p className="text-green-300 leading-7">Join our waitlist and get early access.</p>
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
