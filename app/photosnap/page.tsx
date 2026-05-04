"use client";

export default function PhotoSnapPage() {
  return (
    <main className="min-h-screen bg-black text-green-400">
      <header className="sticky top-0 z-50 border-b border-green-500/30 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Booyaa</a>
          <nav className="hidden items-center gap-8 text-sm text-green-400 md:flex">
            <a href="/products" className="transition hover:text-green-300">Products</a>
            <a href="/features" className="transition hover:text-green-300">Features</a>
            <a href="/about" className="transition hover:text-green-300">About</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 md:px-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-bold">PhotoSnap</p>
              <h1 className="text-6xl font-bold tracking-tight text-green-400 sm:text-7xl mt-4 leading-tight">
                Challenge your memories
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-green-300 mt-6">
                Upload a treasured photo, set the date, and challenge friends to guess when it was taken. See who knows your memories best.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-900/20 px-4 py-2 text-sm text-green-300 font-medium">
              Coming Soon — Join the Waitlist
            </div>
            <div className="flex flex-col gap-4 sm:flex-row pt-2">
              <a
                href="mailto:priyanshu@booyaa.net?subject=Interest in PhotoSnap Waitlist&body=Hi, I'm interested in joining the waitlist for PhotoSnap."
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-semibold text-black shadow-lg shadow-green-500/30 transition hover:shadow-xl hover:-translate-y-1 sm:w-auto"
              >
                Join Waitlist
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center rounded-full border-2 border-green-500 px-8 py-4 text-base text-green-400 transition hover:border-green-400 hover:text-green-300 hover:bg-green-500/10 sm:w-auto font-semibold"
              >
                All Products
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-bold">How it works</p>
              <h2 className="mt-4 text-4xl font-bold text-green-400">Three simple steps to compete</h2>
              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg text-green-400">Upload</h3>
                    <p className="text-green-300 mt-1 leading-7">Choose a photo from your library and set the actual date it was taken. EXIF metadata is read automatically.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg text-green-400">Challenge</h3>
                    <p className="text-green-300 mt-1 leading-7">Send your memory to a friend and wait for their guess. The date stays hidden until they've answered.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg text-green-400">Score</h3>
                    <p className="text-green-300 mt-1 leading-7">Earn points based on accuracy and climb the leaderboard. Closer guesses earn more.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-10 flex flex-col items-center justify-center gap-6 min-h-64">
              <p className="text-5xl font-bold text-green-400 tracking-tight">PhotoSnap</p>
              <p className="text-green-300 text-center text-lg">Challenge memories. Earn points.</p>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-400 text-sm font-medium">In Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-green-400 mb-12">Scoring System</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-6">
              <p className="text-4xl font-bold text-green-400">1000</p>
              <p className="text-green-300 mt-2 text-sm font-medium">Exact day</p>
            </div>
            <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-6">
              <p className="text-4xl font-bold text-green-400">800</p>
              <p className="text-green-300 mt-2 text-sm font-medium">Within 1 week</p>
            </div>
            <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-6">
              <p className="text-4xl font-bold text-green-400">500</p>
              <p className="text-green-300 mt-2 text-sm font-medium">Within 1 month</p>
            </div>
            <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-6">
              <p className="text-4xl font-bold text-green-400">300</p>
              <p className="text-green-300 mt-2 text-sm font-medium">Within 3 months</p>
            </div>
            <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-6">
              <p className="text-4xl font-bold text-green-400">100</p>
              <p className="text-green-300 mt-2 text-sm font-medium">Within 1 year</p>
            </div>
            <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-6">
              <p className="text-4xl font-bold text-green-500/50">0</p>
              <p className="text-green-300 mt-2 text-sm font-medium">More than 1 year</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-green-400 mb-12">Features</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-xs mb-4">EXIF</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">EXIF Auto-fill</h3>
              <p className="text-green-300 leading-7">Automatically reads photo date metadata for quick, accurate setup with no manual entry needed.</p>
            </div>
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-xs mb-4">1v1</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Friend Challenges</h3>
              <p className="text-green-300 leading-7">Send challenges to friends and track your head-to-head competition in real-time.</p>
            </div>
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-xs mb-4">LB</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Leaderboards</h3>
              <p className="text-green-300 leading-7">Compete globally and see who knows their memories — and their friends' — best.</p>
            </div>
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-xs mb-4">SEC</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Private & Secure</h3>
              <p className="text-green-300 leading-7">Your memories are encrypted and only visible to the recipients you choose.</p>
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
