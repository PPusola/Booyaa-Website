"use client";

export default function SpotifyJamSeshPage() {
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
              <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-bold">Spotify Jam Sesh</p>
              <h1 className="text-6xl font-bold tracking-tight text-green-400 sm:text-7xl mt-4 leading-tight">
                Listen together
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-green-300 mt-6">
                Create a real-time listening room, invite friends with a code, and discover connections through shared music taste.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-900/20 px-4 py-2 text-sm text-green-300 font-medium">
              Coming Soon — Join the Waitlist
            </div>
            <div className="flex flex-col gap-4 sm:flex-row pt-2">
              <a
                href="mailto:priyanshu@booyaa.net?subject=Interest in Spotify Jam Sesh Waitlist&body=Hi, I'm interested in joining the waitlist for Spotify Jam Sesh."
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
              <h2 className="mt-4 text-4xl font-bold text-green-400">Listen in sync, anytime</h2>
              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg text-green-400">Create Room</h3>
                    <p className="text-green-300 mt-1 leading-7">Start a listening room and get a shareable code. Choose a playlist to set the vibe.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg text-green-400">Invite Friends</h3>
                    <p className="text-green-300 mt-1 leading-7">Share the code and have friends join your session from anywhere in the world.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg text-green-400">Sync & Discover</h3>
                    <p className="text-green-300 mt-1 leading-7">Music syncs across all devices in real-time with drift-correction keeping everyone in lock-step.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-10 flex flex-col items-center justify-center gap-6 min-h-64">
              <p className="text-4xl font-bold text-green-400 tracking-tight text-center">Spotify Jam Sesh</p>
              <p className="text-green-300 text-center text-lg">Real-time music, shared together.</p>
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
          <h2 className="text-4xl font-bold text-green-400 mb-12">Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-xs mb-4">SYNC</div>
              <h3 className="text-lg font-bold text-green-400 mb-3">Zero-Lag Sync</h3>
              <p className="text-green-300 text-sm leading-7">Playback synced within milliseconds across all devices using per-device latency correction.</p>
            </div>
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-xs mb-4">SEC</div>
              <h3 className="text-lg font-bold text-green-400 mb-3">Secure Rooms</h3>
              <p className="text-green-300 text-sm leading-7">Only users with the invite code can access your session. Private by default.</p>
            </div>
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-xs mb-4">AI</div>
              <h3 className="text-lg font-bold text-green-400 mb-3">Match by Taste</h3>
              <p className="text-green-300 text-sm leading-7">AI discovers listeners with similar music preferences so you find your people.</p>
            </div>
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-xs mb-4">CHAT</div>
              <h3 className="text-lg font-bold text-green-400 mb-3">Live Chat</h3>
              <p className="text-green-300 text-sm leading-7">React to songs and chat with listeners in real-time without leaving the app.</p>
            </div>
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-xs mb-4">DEV</div>
              <h3 className="text-lg font-bold text-green-400 mb-3">Cross-Device</h3>
              <p className="text-green-300 text-sm leading-7">Control playback from any device connected to the session.</p>
            </div>
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-black flex items-center justify-center font-bold text-xs mb-4">SPT</div>
              <h3 className="text-lg font-bold text-green-400 mb-3">Playlist Import</h3>
              <p className="text-green-300 text-sm leading-7">Start with any Spotify playlist and collaborate together. Requires Spotify Premium.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-green-400 mb-12">The Perfect Listening Experience</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <h3 className="text-2xl font-bold text-green-400 mb-6">For Friends</h3>
              <ul className="space-y-4 text-green-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Listen to playlists together, anytime, anywhere</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>See what your friends are vibing to</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Discover new music through shared sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>React and chat about tracks in real-time</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 hover:shadow-lg hover:shadow-green-500/20 transition">
              <h3 className="text-2xl font-bold text-green-400 mb-6">For Spotify</h3>
              <ul className="space-y-4 text-green-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Connects directly to your Spotify account</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Control playback through Spotify's ecosystem</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Requires Spotify Premium for playback</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Your listening history stays private</span>
                </li>
              </ul>
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
