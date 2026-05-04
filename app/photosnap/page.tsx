"use client";

export default function PhotoSnapPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Booyaa</a>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="/#products" className="transition hover:text-blue-600">Products</a>
            <a href="/#features" className="transition hover:text-blue-600">Features</a>
            <a href="/about" className="transition hover:text-blue-600">About</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 md:px-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-blue-600 font-bold">PhotoSnap</p>
              <h1 className="text-6xl font-bold tracking-tight text-slate-900 sm:text-7xl mt-4">
                Challenge your memories
              </h1>
              <p className="max-w-2xl text-2xl leading-8 text-slate-600 sm:text-2xl mt-6">
                Upload a treasured photo, set the date, and challenge friends to guess when it was taken. See who knows your memories best.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row pt-4">
              <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-xl hover:-translate-y-1 sm:w-auto">
                Download on App Store
              </button>
              <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:shadow-xl hover:-translate-y-1 sm:w-auto">
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
              <p className="text-sm uppercase tracking-[0.24em] text-blue-600 font-bold">How it works</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">Three simple steps to compete</h2>
              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Upload</h3>
                    <p className="text-slate-600 mt-1">Choose a photo from your library and set the actual date it was taken.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Challenge</h3>
                    <p className="text-slate-600 mt-1">Send your memory to a friend and wait for their guess.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Score</h3>
                    <p className="text-slate-600 mt-1">Earn points based on accuracy and climb the leaderboard.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-100 h-80 flex items-center justify-center">
              <div className="text-6xl">📱</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12 border border-blue-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">Scoring System</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 border border-blue-100">
                <p className="text-3xl font-bold text-blue-600">1000</p>
                <p className="text-sm text-slate-600 mt-2">Exact day</p>
              </div>
              <div className="rounded-2xl bg-white p-6 border border-blue-100">
                <p className="text-3xl font-bold text-blue-600">800</p>
                <p className="text-sm text-slate-600 mt-2">Within 1 week</p>
              </div>
              <div className="rounded-2xl bg-white p-6 border border-blue-100">
                <p className="text-3xl font-bold text-blue-600">500</p>
                <p className="text-sm text-slate-600 mt-2">Within 1 month</p>
              </div>
              <div className="rounded-2xl bg-white p-6 border border-blue-100">
                <p className="text-3xl font-bold text-blue-600">300</p>
                <p className="text-sm text-slate-600 mt-2">Within 3 months</p>
              </div>
              <div className="rounded-2xl bg-white p-6 border border-blue-100">
                <p className="text-3xl font-bold text-blue-600">100</p>
                <p className="text-sm text-slate-600 mt-2">Within 1 year</p>
              </div>
              <div className="rounded-2xl bg-white p-6 border border-blue-100">
                <p className="text-3xl font-bold text-blue-600">0</p>
                <p className="text-sm text-slate-600 mt-2">More than 1 year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Features</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-white p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center text-xl mb-4">🖼️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">EXIF Auto-fill</h3>
              <p className="text-slate-600">Automatically reads photo date metadata for quick setup.</p>
            </div>
            <div className="rounded-3xl border border-blue-100 bg-white p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center text-xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Friend Challenges</h3>
              <p className="text-slate-600">Send challenges to friends and track your head-to-head competition.</p>
            </div>
            <div className="rounded-3xl border border-blue-100 bg-white p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center text-xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Leaderboards</h3>
              <p className="text-slate-600">Compete globally and see who knows memories best.</p>
            </div>
            <div className="rounded-3xl border border-blue-100 bg-white p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center text-xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Private & Secure</h3>
              <p className="text-slate-600">Your memories are encrypted and only visible to recipients.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-12 text-slate-600 sm:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-bold text-slate-900 mb-4">PhotoSnap</p>
          <p className="text-sm mb-8">Challenge memories. Earn points. Compete with friends.</p>
          <a href="/" className="text-sm text-blue-600 hover:text-blue-700 transition">Back to Booyaa</a>
        </div>
      </footer>
    </main>
  );
}
