"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Booyaa</a>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="/#products" className="transition hover:text-blue-600">Products</a>
            <a href="/#features" className="transition hover:text-blue-600">Features</a>
            <a href="/about" className="transition hover:text-blue-600 font-semibold text-blue-600">About</a>
          </nav>
        </div>
      </header>

      <section className="px-6 py-24 sm:px-10 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-600 font-bold">About us</p>
            <h1 className="mt-4 text-5xl sm:text-6xl font-bold text-slate-900 leading-tight">
              Connecting people through shared moments
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-8">
              Booyaa is building the next generation of social apps. Apps that bring friends closer together through authentic connection — whether that's rediscovering cherished memories or vibing to music in real-time.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Our Story</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-8">
            <p>
              Booyaa was founded on a simple belief: social apps should bring people closer, not push them apart. In a world of endless scrolling and algorithmic feeds, we wanted to create spaces for genuine connection.
            </p>
            <p>
              It started with a question: "What if you could challenge your friends with a shared memory?" That became PhotoSnap — an app where rediscovering old photos becomes a game, and competition brings laughter and nostalgia.
            </p>
            <p>
              Then came another idea: "What if listening to music together felt like being in the same room?" That's Spotify Jam Sesh — a real-time listening experience that turns music discovery into a social event.
            </p>
            <p>
              Every Booyaa app is built around one core principle: <span className="font-semibold text-slate-900">authentic connection through shared experiences</span>. No algorithms deciding what you see. No endless feeds. Just real moments with real people.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-white p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center text-2xl mb-4">💫</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Authenticity</h3>
              <p className="text-slate-600 leading-7">
                Real people, real conversations, real connections. We build for genuine moments, not engagement metrics.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-100 bg-white p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600 leading-7">
                We're not afraid to try new ideas. Every feature is tested with one question: does this bring people closer?
              </p>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Privacy First</h3>
              <p className="text-slate-600 leading-7">
                Your data is yours. We encrypt everything, track nothing, and never sell your information to anyone.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center text-2xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Community</h3>
              <p className="text-slate-600 leading-7">
                We listen to our users. Every update, every feature, every decision is guided by what our community needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">The Team</h2>
          <div className="rounded-3xl border border-blue-100 bg-white p-12">
            <div className="flex items-start gap-8">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-4xl flex-shrink-0">👨‍💻</div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Priyanshu Pusola</h3>
                <p className="text-blue-600 font-semibold mt-1">Founder & Developer</p>
                <p className="text-slate-600 leading-7 mt-4">
                  Computer Science student at the University of Alberta with a passion for building real-time applications and creating meaningful social experiences. Previously worked on functional safety systems at BlackBerry QNX and AI integration at Newgen Software. Building Booyaa to prove that social apps can be genuine, private, and fun.
                </p>
                <div className="flex gap-4 mt-6">
                  <a href="https://linkedin.com/in/priyanshu-pusola" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition">LinkedIn</a>
                  <a href="https://github.com/Ironical-Suburb" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition">GitHub</a>
                  <a href="mailto:pusola@ualberta.ca" className="text-blue-600 hover:text-blue-700 font-semibold transition">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">What's Next</h2>
          <div className="rounded-3xl border border-purple-100 bg-white p-12">
            <p className="text-lg text-slate-600 leading-8 mb-6">
              We're just getting started. Booyaa has big plans for the future:
            </p>
            <ul className="space-y-4 text-slate-600 leading-8">
              <li className="flex items-start gap-4">
                <span className="text-2xl text-purple-600 flex-shrink-0">→</span>
                <span><span className="font-semibold text-slate-900">PhotoSnap 2.0</span> — Group challenges, custom scoring, community galleries</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl text-purple-600 flex-shrink-0">→</span>
                <span><span className="font-semibold text-slate-900">Jam Sesh Expansion</span> — Apple Music support, collaborative playlists, DJ mode</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl text-purple-600 flex-shrink-0">→</span>
                <span><span className="font-semibold text-slate-900">New Apps</span> — We have three more app ideas in the pipeline, all focused on genuine human connection</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl text-purple-600 flex-shrink-0">→</span>
                <span><span className="font-semibold text-slate-900">Global Expansion</span> — Launching in new markets with localized features and community events</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:px-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Join the Booyaa Community</h2>
          <p className="text-xl text-slate-600 leading-8 mb-10">
            Have questions? Want to collaborate? Just want to say hi? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
            <a 
              href="mailto:pusola@ualberta.ca"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-xl hover:-translate-y-1 sm:w-auto"
            >
              Get in Touch
            </a>
            <a 
              href="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-8 py-4 text-base text-slate-700 transition hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 sm:w-auto font-semibold"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-12 text-slate-600 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div>
              <p className="font-bold text-slate-900 mb-4">Booyaa</p>
              <p className="text-sm">Social apps for friends, music, and memories.</p>
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
