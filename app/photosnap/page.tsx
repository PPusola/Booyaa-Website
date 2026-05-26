import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const details = [
  ["Problem", "Photo memories are fun to share, but most sharing apps do not turn them into a simple game friends can play together."],
  ["What I built", "A product concept for uploading a memory, hiding the real date, sending a challenge, and scoring guesses by accuracy."],
  ["Tech used", "React Native concept planning, app flow design, and lightweight product scoping."],
  ["Outcome", "A focused app idea with a clear game loop that can move into prototype screens or a small MVP."],
];

const features = [
  "Upload a photo and set the real date",
  "Challenge a friend without revealing the answer",
  "Score guesses based on closeness",
  "Keep the core loop quick and social",
];

export default function PhotoSnapPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">PhotoSnap</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">Challenge your memories.</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              PhotoSnap is a social guessing game where friends try to identify when a photo was taken. It is designed around quick challenges, private sharing, and simple scoring.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ContactModal topic="PhotoSnap waitlist" source="PhotoSnap page" mode="contact">
                Join Waitlist
              </ContactModal>
              <a href="/products" className="inline-flex items-center justify-center border border-[#b8ad9d] px-5 py-2.5 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]">
                All work
              </a>
            </div>
          </div>
          <div className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Case study</p>
            <div className="mt-6 grid gap-5">
              {details.map(([title, text]) => (
                <section key={title} className="border-l border-[#cfc5b6] pl-5">
                  <h2 className="font-semibold text-[#18231d]">{title}</h2>
                  <p className="mt-2 leading-7 text-[#536156]">{text}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9d0c2] bg-[#fffaf2] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Key features</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d]">A small game loop people can understand fast.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="border border-[#d9d0c2] bg-[#fdf8ef] p-4 font-semibold text-[#18231d]">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
