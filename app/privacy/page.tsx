"use client";

export default function PrivacyPage() {
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

      <section className="px-6 py-24 sm:px-10 md:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-bold">Legal</p>
          <h1 className="mt-4 text-5xl font-bold text-green-400 leading-tight">Privacy Policy</h1>
          <p className="mt-4 text-green-500 text-sm">Effective date: May 3, 2026</p>

          <div className="mt-16 space-y-12 text-green-300 leading-8">

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">1. Introduction</h2>
              <p>
                Booyaa ("we", "our", or "us") operates the booyaa.net website and its associated mobile applications, including PhotoSnap and Spotify Jam Sesh (collectively, the "Services"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Services. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span><span className="font-semibold text-green-400">Contact Information:</span> Name and email address when you contact us or join a product waitlist.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span><span className="font-semibold text-green-400">Usage Data:</span> Information about how you interact with our website, including pages visited, time spent, and referring URLs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span><span className="font-semibold text-green-400">Device Information:</span> Browser type, operating system, IP address, and device identifiers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span><span className="font-semibold text-green-400">App-Specific Data:</span> For PhotoSnap, photos you upload and challenge data. For Spotify Jam Sesh, Spotify account tokens and session activity.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Provide, operate, and maintain our Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Send waitlist confirmation and product update emails</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Improve and personalize user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Monitor usage and detect security incidents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Comply with legal obligations</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">4. Sharing Your Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our Services (e.g., hosting, email delivery), subject to confidentiality agreements. We may also disclose information if required by law or to protect the rights and safety of Booyaa and its users.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">5. Third-Party Services</h2>
              <p>
                Our Services integrate with third-party platforms including Spotify and Firebase (Google). Your use of these integrations is subject to their respective privacy policies. We are not responsible for the data practices of these third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Waitlist email addresses are retained until the associated product launches or you request removal.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">7. Your Rights</h2>
              <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Access the personal data we hold about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Request correction or deletion of your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Withdraw consent for data processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Lodge a complaint with a data protection authority</span>
                </li>
              </ul>
              <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:priyanshu@booyaa.net" className="text-green-400 hover:text-green-300 transition underline">priyanshu@booyaa.net</a>.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">8. Security</h2>
              <p>
                We implement industry-standard security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the Services after changes constitutes acceptance of the revised policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:priyanshu@booyaa.net" className="text-green-400 hover:text-green-300 transition underline">priyanshu@booyaa.net</a>.
              </p>
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
                <li><a href="/privacy" className="font-semibold text-green-400 transition">Privacy</a></li>
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
