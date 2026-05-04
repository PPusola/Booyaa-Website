"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Booyaa</div>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#products" className="transition hover:text-blue-600 hover:font-semibold">Products</a>
            <a href="#features" className="transition hover:text-blue-600 hover:font-semibold">Features</a>
            <a href="/about" className="transition hover:text-blue-600 hover:font-semibold">About</a>
            <a href="#download" className="transition hover:text-blue-600 hover:font-semibold">Download</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-32 sm:px-10 md:px-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm text-blue-700 font-medium">
              🚀 Websites & Apps for the next generation
            </div>
            <div className="space-y-6">
              <h1 className="text-6xl font-bold tracking-tight text-slate-900 sm:text-7xl lg:text-8xl leading-tight">
                Your vision.<br/>Your website.<br/>Your app.
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-slate-600 sm:text-2xl">
                We build stunning websites for businesses and create engaging apps for users. From PhotoSnap challenges to Spotify Jam Sesh rooms, experience digital solutions built for genuine connection and success.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-4">
                <a
                  href="#products"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-xl hover:-translate-y-1 hover:shadow-blue-500/50 sm:w-auto"
                >
                  Explore Apps
                </a>
                <a href="#download" className="inline-flex w-full justify-center rounded-full border-2 border-slate-300 px-8 py-4 text-base text-slate-700 transition hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 sm:w-auto font-semibold">
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.24em] text-green-600 font-bold">Web Development</p>
            <h2 className="mt-4 text-5xl font-bold text-slate-900 sm:text-6xl">Beautiful websites for your business</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-slate-600">
              We create custom websites that showcase your brand and drive results. From concept to launch, we handle everything.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-green-200 bg-white p-8 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl mb-6">✅</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Completed Projects</h3>
              <p className="text-slate-600 leading-7 mb-4">
                We've successfully launched websites for our clients, including a beautiful site for Caroline Does Numbers.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition">
                View Portfolio →
              </a>
            </div>

            <div className="rounded-3xl border border-blue-200 bg-white p-8 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl mb-6">🚧</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Current Projects</h3>
              <p className="text-slate-600 leading-7 mb-4">
                We're currently building an elegant wine website for a client, bringing their passion to the digital world.
              </p>
              <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition">
                Learn More →
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="mailto:priyanshu@booyaa.net?subject=Website Development Inquiry&body=Hi, I'm interested in having Booyaa build a website for my business."
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/30 transition hover:shadow-xl hover:-translate-y-1 hover:shadow-green-500/50"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="px-6 py-24 sm:px-10 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-600 font-bold">Products</p>
            <h2 className="mt-4 text-5xl font-bold text-slate-900 sm:text-6xl">Two remarkable apps</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-slate-600">
              Connect, play, and discover like never before.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            <div className="group overflow-hidden rounded-3xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-blue-100/50 p-10 shadow-lg hover:shadow-2xl transition hover:-translate-y-2 duration-300">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600">PhotoSnap</p>
                  <h3 className="mt-3 text-4xl font-bold text-slate-900">Challenge memories</h3>
                </div>
                <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-sm text-white font-semibold">Waitlist</div>
              </div>
              <p className="text-lg text-slate-700 leading-7">
                Upload a treasured memory, set the date, and challenge your friends to guess when it was taken. Race to perfect accuracy and climb the leaderboard together.
              </p>
              <div className="mt-10 grid gap-5 rounded-3xl bg-white/70 p-8 text-slate-700 border border-blue-100/50">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="text-base leading-7">Upload photos with hidden dates. Your secret until the guess.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="text-base leading-7">Send private challenges to friends instantly.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <p className="text-base leading-7">Earn points for accuracy and compete on a shared leaderboard.</p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="mailto:priyanshu@booyaa.net?subject=Interest in PhotoSnap Waitlist&body=Hi, I'm interested in joining the waitlist for PhotoSnap. Please add me to the list."
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-xl hover:-translate-y-1 hover:shadow-blue-500/50"
                >
                  Join Waitlist
                </a>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-purple-200/50 bg-gradient-to-br from-purple-50 to-purple-100/50 p-10 shadow-lg hover:shadow-2xl transition hover:-translate-y-2 duration-300">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-purple-600">Spotify Jam Sesh</p>
                  <h3 className="mt-3 text-4xl font-bold text-slate-900">Listen together</h3>
                </div>
                <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-sm text-white font-semibold">Waitlist</div>
              </div>
              <p className="text-lg text-slate-700 leading-7">
                Create a listening room, invite friends with a simple code, and sync playback across all devices. Discover connections through shared taste.
              </p>
              <div className="mt-10 grid gap-5 rounded-3xl bg-white/70 p-8 text-slate-700 border border-purple-100/50">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="text-base leading-7">Host a synchronized room and let listeners join instantly.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="text-base leading-7">Automatic playback sync across all connected devices.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <p className="text-base leading-7">Match with listeners based on music taste similarity.</p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="mailto:priyanshu@booyaa.net?subject=Interest in Spotify Jam Sesh Waitlist&body=Hi, I'm interested in joining the waitlist for Spotify Jam Sesh. Please add me to the list."
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:shadow-xl hover:-translate-y-1 hover:shadow-purple-500/50"
                >
                  Join Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-600 font-bold">Why Booyaa</p>
            <h2 className="mt-4 text-5xl font-bold text-slate-900">Built for real connection</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl mb-6">📱</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile First</h3>
              <p className="text-slate-600 leading-7">Native iOS and Android apps built with Expo for best-in-class performance and UX.</p>
            </div>

            <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl mb-6">⚡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Sync</h3>
              <p className="text-slate-600 leading-7">Real-time synchronization powered by Supabase and Firebase for zero-latency experiences.</p>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl mb-6">🔐</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Secure & Private</h3>
              <p className="text-slate-600 leading-7">Your data is yours. Row-level security and end-to-end encrypted connections.</p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center text-white text-2xl mb-6">🎯</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gamified</h3>
              <p className="text-slate-600 leading-7">Leaderboards, scoring, achievements, and challenges keep users engaged daily.</p>
            </div>

            <div className="rounded-3xl border border-red-100 bg-white p-8 shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white text-2xl mb-6">👥</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Social at Heart</h3>
              <p className="text-slate-600 leading-7">Friend systems, real-time chat, and discovery features built into every interaction.</p>
            </div>

            <div className="rounded-3xl border border-indigo-100 bg-white p-8 shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white text-2xl mb-6">🚀</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Always Evolving</h3>
              <p className="text-slate-600 leading-7">New apps, features, and experiences launching regularly from Booyaa.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="px-6 py-24 sm:px-10 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-4xl bg-gradient-to-br from-blue-50 via-white to-purple-50 p-12 sm:p-16 text-center shadow-2xl border border-gradient-to-r from-blue-200 to-purple-200">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-600 font-bold">Join the waitlist</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900">Be the first to experience Booyaa</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-8">
              Our apps are coming soon. Join the waitlist to get early access and exclusive updates.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mt-10">
              <a
                href="mailto:priyanshu@booyaa.net?subject=Interest in PhotoSnap Waitlist&body=Hi, I'm interested in joining the waitlist for PhotoSnap. Please add me to the list."
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:shadow-xl hover:-translate-y-1"
              >
                PhotoSnap Waitlist
              </a>
              <a
                href="mailto:priyanshu@booyaa.net?subject=Interest in Spotify Jam Sesh Waitlist&body=Hi, I'm interested in joining the waitlist for Spotify Jam Sesh. Please add me to the list."
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:shadow-xl hover:-translate-y-1"
              >
                Spotify Jam Sesh Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-12 text-slate-600 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div>
              <p className="font-bold text-slate-900 mb-4">Booyaa</p>
              <p className="text-sm">We build websites and apps for businesses and users.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 mb-4">Products</p>
              <ul className="text-sm space-y-2">
                <li><a href="/photosnap" className="hover:text-blue-600 transition">PhotoSnap</a></li>
                <li><a href="/spotify-jam-sesh" className="hover:text-blue-600 transition">Spotify Jam Sesh</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-slate-900 mb-4">Company</p>
              <ul className="text-sm space-y-2">
                <li><a href="/about" className="hover:text-blue-600 transition">About</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-slate-900 mb-4">Legal</p>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-blue-600 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-sm text-center text-slate-500">
            <p>© {new Date().getFullYear()} Booyaa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
