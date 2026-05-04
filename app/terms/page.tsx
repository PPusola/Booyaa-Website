"use client";

export default function TermsPage() {
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
          <h1 className="mt-4 text-5xl font-bold text-green-400 leading-tight">Terms of Service</h1>
          <p className="mt-4 text-green-500 text-sm">Effective date: May 3, 2026</p>

          <div className="mt-16 space-y-12 text-green-300 leading-8">

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using any service operated by Booyaa ("we", "our", or "us"), including booyaa.net, PhotoSnap, and Spotify Jam Sesh (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">2. Description of Services</h2>
              <p>
                Booyaa provides web development services for businesses and operates mobile applications in development, including PhotoSnap (a photo memory challenge app) and Spotify Jam Sesh (a real-time synchronized music listening application). Some Services may be in pre-release or waitlist phase and are provided on an as-available basis.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">3. User Eligibility</h2>
              <p>
                You must be at least 13 years of age to use our Services. By using the Services, you represent that you meet this requirement. If you are under 18, you represent that you have obtained consent from a parent or legal guardian.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">4. User Conduct</h2>
              <p className="mb-4">You agree not to use the Services to:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Upload or share content that is unlawful, harmful, defamatory, or infringing on third-party rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Impersonate any person or entity, or misrepresent your affiliation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Attempt to gain unauthorized access to any part of the Services or related systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Interfere with or disrupt the integrity or performance of the Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>Use the Services for any commercial purpose without prior written consent</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">5. Intellectual Property</h2>
              <p>
                All content, design, code, and materials on the Services — including but not limited to text, graphics, logos, and software — are the exclusive property of Booyaa or its licensors and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">6. User Content</h2>
              <p>
                By uploading content to our Services (such as photos in PhotoSnap), you grant Booyaa a non-exclusive, worldwide, royalty-free license to use, store, and display that content solely for the purpose of operating the Services. You retain full ownership of your content. We will not share your content with third parties except as required to provide the Services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">7. Third-Party Integrations</h2>
              <p>
                Spotify Jam Sesh integrates with the Spotify platform. Your use of Spotify's features is governed by <a href="https://www.spotify.com/legal/end-user-agreement/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition underline">Spotify's Terms of Service</a>. Spotify Premium is required for playback functionality. We are not responsible for any changes to or unavailability of third-party platforms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">8. Disclaimer of Warranties</h2>
              <p>
                The Services are provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components. Your use of the Services is at your sole risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Booyaa shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Services, even if we have been advised of the possibility of such damages. Our total liability to you for any claim shall not exceed the amounts paid by you to Booyaa in the preceding 12 months.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">10. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the Services at any time, with or without notice, for conduct that we determine violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Province of Alberta, Canada, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the Services after changes constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">13. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at <a href="mailto:priyanshu@booyaa.net" className="text-green-400 hover:text-green-300 transition underline">priyanshu@booyaa.net</a>.
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
                <li><a href="/quote" className="hover:text-green-300 transition">Get a Quote</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-4">Legal</p>
              <ul className="text-sm space-y-2 text-green-300">
                <li><a href="/privacy" className="hover:text-green-300 transition">Privacy</a></li>
                <li><a href="/terms" className="font-semibold text-green-400 transition">Terms</a></li>
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
