"use client";

export default function Products() {
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

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 md:px-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-bold">Products</p>
            <h1 className="mt-4 text-5xl font-bold text-green-400 sm:text-6xl">Two remarkable apps</h1>
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
