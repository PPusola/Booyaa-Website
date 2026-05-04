"use client";

export default function Download() {
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

      <section className="relative overflow-hidden px-6 py-32 sm:px-10 md:px-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="rounded-4xl bg-gradient-to-br from-gray-900 via-black to-gray-900 p-12 sm:p-16 text-center shadow-2xl border border-green-500/30">
            <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-bold">Join the waitlist</p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-green-400">Be the first to experience Booyaa</h1>
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
