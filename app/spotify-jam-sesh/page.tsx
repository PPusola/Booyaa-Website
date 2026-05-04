"use client";

export default function SpotifyJamSeshPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Booyaa</a>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="/#products" className="transition hover:text-purple-600">Products</a>
            <a href="/#features" className="transition hover:text-purple-600">Features</a>
            <a href="/about" className="transition hover:text-purple-600">About</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 md:px-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-purple-600 font-bold">Spotify Jam Sesh</p>
              <h1 className="text-6xl font-bold tracking-tight text-slate-900 sm:text-7xl mt-4">
                Listen together
              </h1>
              <p className="max-w-2xl text-2xl leading-8 text-slate-600 sm:text-2xl mt-6">
                Create a real-time listening room, invite friends with a code, and discover connections through shared music taste.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row pt-4">
              <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:shadow-xl hover:-translate-y-1 sm:w-auto">
                Download on App Store
              </button>
              <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:shadow-xl hover:-translate-y-1 sm:w-auto">
                Download on Google Play
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-24">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-purple-600 font-bold">How it works</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">Listen in sync, anytime</h2>
              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Create Room</h3>
                    <p className="text-slate-600 mt-1">Start a listening room and get a shareable code.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Invite Friends</h3>
                    <p className="text-slate-600 mt-1">Share the code and have friends join your session.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Sync & Discover</h3>
                    <p className="text-slate-600 mt-1">Music syncs across all devices in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 h-80 flex items-center justify-center">
              <div className="text-6xl">🎵</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">Features that Matter</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">⏱️</div>
                <h3 className="text-lg font-bold text-slate-900">Zero-Lag Sync</h3>
                <p className="text-slate-600 text-sm">Playback synced within milliseconds across all devices.</p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">🔐</div>
                <h3 className="text-lg font-bold text-slate-900">Secure Rooms</h3>
                <p className="text-slate-600 text-sm">Only users with the code can access your session.</p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">🎯</div>
                <h3 className="text-lg font-bold text-slate-900">Match by Taste</h3>
                <p className="text-slate-600 text-sm">AI discovers listeners with similar music preferences.</p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">💬</div>
                <h3 className="text-lg font-bold text-slate-900">Live Chat</h3>
                <p className="text-slate-600 text-sm">React to songs and chat with listeners in real-time.</p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">📱</div>
                <h3 className="text-lg font-bold text-slate-900">Cross-Device</h3>
                <p className="text-slate-600 text-sm">Control playback from any device in the session.</p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">✨</div>
                <h3 className="text-lg font-bold text-slate-900">Playlist Import</h3>
                <p className="text-slate-600 text-sm">Start with any Spotify playlist and collaborate together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">The Perfect Listening Experience</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-3xl border border-purple-100 bg-white p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">For Friends</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span>Listen to playlists together, anytime, anywhere</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span>See what your friends are vibing to</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span>Discover new music through shared sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span>React and chat about tracks in real-time</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-pink-100 bg-white p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">For Spotify</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold mt-1">✓</span>
                  <span>Connects directly to your Spotify account</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold mt-1">✓</span>
                  <span>Control playback through Spotify's ecosystem</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold mt-1">✓</span>
                  <span>Works with Spotify premium only</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold mt-1">✓</span>
                  <span>Your listening history stays private</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-12 text-slate-600 sm:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-bold text-slate-900 mb-4">Spotify Jam Sesh</p>
          <p className="text-sm mb-8">Listen together. Discover together. Vibe together.</p>
          <a href="/" className="text-sm text-purple-600 hover:text-purple-700 transition">Back to Booyaa</a>
        </div>
      </footer>
    </main>
  );
}
