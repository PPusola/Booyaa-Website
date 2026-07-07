import { ContactModal } from "@/components/ContactModal";
import { PageShell } from "@/components/SiteChrome";

const details = [
  [
    "What it is",
    "Otto is a private AI assistant that runs entirely on local hardware. It handles voice and text conversations, controls smart home devices and music, tracks daily habits, and remembers context between sessions, all without sending data to a cloud AI provider.",
  ],
  [
    "Why it matters for clients",
    "Otto is the engineering behind Booyaa's AI lead-capture work. Building a production assistant from scratch, including the parts most demos skip like permissions, confirmations, and memory, is what makes it possible to build reliable AI intake tools for real businesses.",
  ],
  [
    "Safe tool use",
    "Otto separates safe actions from sensitive ones. Anything consequential requires explicit confirmation before it runs, the same discipline needed when an AI agent talks to a business's actual customers.",
  ],
  [
    "Private by design",
    "Conversation memory is encrypted at rest with a password-derived key. Remote access runs through a private encrypted network rather than the open internet. The model itself runs locally, so conversations never leave the machine.",
  ],
  [
    "Tech",
    "Python, FastAPI, locally hosted LLM via Ollama, streaming chat UI with SQLite history, whisper.cpp voice transcription, encrypted memory with Fernet, Spotify and smart-light integrations, Tailscale remote access.",
  ],
];

const features = [
  "Local LLM, no cloud dependency",
  "Voice wake word and push-to-talk",
  "Encrypted persistent memory",
  "Tool registry with confirmation flows",
  "Streaming chat UI with history",
  "Secure private remote access",
];

const roadmap = [
  [
    "After-hours intake bot",
    "The confirmation flows and tool registry proven in Otto become an assistant that answers your website at 2 AM, qualifies the lead, and captures contact details so no overnight call is lost.",
  ],
  [
    "Booking and quote assistant",
    "Otto's conversation memory is the groundwork for a bot that walks a customer through scheduling or a rough quote, then hands a clean summary to your inbox.",
  ],
  [
    "Private, on-your-terms AI",
    "Because Otto runs locally with encrypted memory, the same approach lets a business adopt AI without handing customer data to a third-party cloud.",
  ],
];

export default function OttoPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Booyaa Labs</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">
              Otto
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              A local-first AI assistant with tool use, encrypted memory, and voice control. Built as an engineering exercise, and the foundation for the AI tools Booyaa builds for businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ContactModal topic="AI lead capture for my business" source="Otto page" mode="contact">
                Ask about AI for your business
              </ContactModal>
            </div>
          </div>

          <div data-reveal="2" className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
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
          <div data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Under the hood</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d]">
              The hard parts of production AI, solved end to end.
            </h2>
          </div>
          <div data-reveal="1" className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="border border-[#d9d0c2] bg-[#fdf8ef] p-4 font-semibold text-[#18231d]">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">From Labs to your business</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#18231d] sm:text-5xl">
              Tested here first, so it ships to you reliable.
            </h2>
            <p className="mt-5 leading-7 text-[#536156]">
              Otto is where new AI techniques get built and stress-tested on real hardware before they ever reach a client. Once an approach proves out, it becomes a feature Booyaa can add to your website.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {roadmap.map(([title, text], index) => (
              <article data-reveal={String(index + 1)} key={title} className="border border-[#d9d0c2] bg-[#fffaf2] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_#ded4c6]">
                <h3 className="text-xl font-semibold tracking-tight text-[#18231d]">{title}</h3>
                <p className="mt-4 leading-7 text-[#536156]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f2a24] px-5 py-16 text-[#f6f1e8] sm:px-8">
        <div data-reveal className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a26f]">Curious what AI could do for you?</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight">
              Let&apos;s talk about capturing the leads you miss after hours.
            </h2>
          </div>
          <ContactModal topic="15-minute intro call" source="Otto closing CTA" variant="light">
            Book a 15-minute call
          </ContactModal>
        </div>
      </section>
    </PageShell>
  );
}
