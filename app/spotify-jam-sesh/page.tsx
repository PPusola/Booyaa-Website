import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const details = [
  ["Problem", "Sharing music with friends often becomes a chain of links instead of a shared moment."],
  ["What I built", "A listening room concept where people can join a session, stay in sync, and discover music together."],
  ["Tech used", "React Native planning, Spotify API research, real-time session design, and product flow mapping."],
  ["Outcome", "A prototype direction for a social music app with a clear room-based experience."],
];

const features = [
  "Create a room and invite friends",
  "Keep playback aligned",
  "Share music discovery in one place",
  "Design around simple session controls",
];

export default function SpotifyJamSeshPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Spotify Jam Sesh</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">Listen together, from anywhere.</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              Spotify Jam Sesh is a shared listening concept for synchronized rooms, simple invites, and music sessions that feel social without getting complicated.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ContactModal topic="Spotify Jam Sesh waitlist" source="Spotify Jam Sesh page" mode="contact">
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
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d]">Shared listening without a heavy interface.</h2>
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
