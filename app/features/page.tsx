"use client";

export default function Features() {
  return (
    <main className="min-h-screen bg-black text-green-400">
      <header className="sticky top-0 z-50 border-b border-green-500/30 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Booyaa</a>
          <nav className="hidden items-center gap-8 text-sm text-green-400 md:flex">
            <a href="/products" className="transition hover:text-green-300 hover:font-semibold">Products</a>
            <a href="/features" className="transition hover:text-green-300 hover:font-semibold">Features</a>
            <a href="/about" className="transition hover:text-green-300 hover:font-semibold">About</a>
            <a href="/download" className="transition hover:text-green-300 hover:font-semibold">Download</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-bold">Why Booyaa</p>
            <h1 className="mt-4 text-5xl font-bold text-green-400 sm:text-6xl">Web & Mobile Expertise</h1>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black font-bold text-xs mb-6">WEB</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Web Development</h3>
              <p className="text-green-300 leading-7">Modern, responsive websites built with Next.js, React, and Tailwind CSS for superior performance.</p>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black font-bold text-xs mb-6">APP</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Mobile Apps</h3>
              <p className="text-green-300 leading-7">Native iOS and Android apps built with Expo and React Native for seamless cross-platform experiences.</p>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black font-bold text-xs mb-6">PERF</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Performance First</h3>
              <p className="text-green-300 leading-7">Lightning-fast load times and smooth interactions powered by modern architecture and optimization.</p>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black font-bold text-xs mb-6">SEC</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Secure & Scalable</h3>
              <p className="text-green-300 leading-7">Enterprise-grade security with scalable infrastructure to grow with your business needs.</p>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black font-bold text-xs mb-6">UX</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Beautiful Design</h3>
              <p className="text-green-300 leading-7">User-centric designs that are visually stunning and intuitive across all devices.</p>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg hover:shadow-green-500/20 transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-black font-bold text-xs mb-6">SUP</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Full Support</h3>
              <p className="text-green-300 leading-7">From concept to launch and beyond, we provide continuous support and iterative improvements.</p>
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
                <li><a href="/products" className="hover:text-green-300 transition">PhotoSnap</a></li>
                <li><a href="/products" className="hover:text-green-300 transition">Spotify Jam Sesh</a></li>
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
