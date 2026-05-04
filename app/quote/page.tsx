"use client";

import { useState } from "react";

type ServiceType = "website" | "mobile" | "both" | "";
type WebsiteSize = "small" | "medium" | "large" | "";
type AppPlatform = "single" | "both" | "";
type Timeline = "flexible" | "standard" | "rush" | "";

interface FormData {
  service: ServiceType;
  // Website scope
  websiteSize: WebsiteSize;
  websiteFeatures: string[];
  // App scope
  appPlatform: AppPlatform;
  appFeatures: string[];
  // Timeline & budget
  timeline: Timeline;
  budgetComfort: string;
  // Contact
  name: string;
  email: string;
  company: string;
  description: string;
}

const WEBSITE_FEATURES = [
  { id: "ecommerce", label: "E-commerce / Online Store", low: 600, high: 1200 },
  { id: "auth", label: "User Accounts / Login", low: 300, high: 600 },
  { id: "cms", label: "Content Management (CMS)", low: 300, high: 500 },
  { id: "booking", label: "Booking / Scheduling", low: 400, high: 700 },
  { id: "seo", label: "SEO Optimization", low: 150, high: 350 },
  { id: "integrations", label: "Third-party Integrations", low: 250, high: 600 },
];

const APP_FEATURES = [
  { id: "auth", label: "Authentication / User Accounts", low: 300, high: 500 },
  { id: "realtime", label: "Real-time Data / Live Sync", low: 500, high: 1000 },
  { id: "payments", label: "In-app Payments", low: 400, high: 800 },
  { id: "notifications", label: "Push Notifications", low: 250, high: 450 },
  { id: "maps", label: "Maps / Location Services", low: 350, high: 600 },
  { id: "camera", label: "Camera / Media Upload", low: 300, high: 600 },
];

function calculateQuote(data: FormData): { low: number; high: number } | null {
  if (!data.service) return null;

  let low = 0;
  let high = 0;

  if (data.service === "website" || data.service === "both") {
    // Package pricing anchored to value delivered, not hours
    const sizeMap = {
      // Refresh / takeover: existing content, just rebuilding cleanly
      small: { low: 500, high: 1200 },
      // Standard small business site: 5–10 pages, contact, SEO
      medium: { low: 1200, high: 2500 },
      // Advanced: complex layouts, integrations, custom functionality
      large: { low: 2500, high: 5000 },
    };
    const size = sizeMap[data.websiteSize as keyof typeof sizeMap] ?? { low: 500, high: 1200 };
    low += size.low;
    high += size.high;

    for (const feat of data.websiteFeatures) {
      const f = WEBSITE_FEATURES.find((x) => x.id === feat);
      if (f) { low += f.low; high += f.high; }
    }
  }

  if (data.service === "mobile" || data.service === "both") {
    const base = data.appPlatform === "both"
      ? { low: 5000, high: 10000 }
      : { low: 3000, high: 6000 };
    low += base.low;
    high += base.high;

    for (const feat of data.appFeatures) {
      const f = APP_FEATURES.find((x) => x.id === feat);
      if (f) { low += f.low; high += f.high; }
    }
  }

  const timelineMultiplier = data.timeline === "rush" ? 1.25 : 1;
  low = Math.round((low * timelineMultiplier) / 100) * 100;
  high = Math.round((high * timelineMultiplier) / 100) * 100;

  return { low, high };
}

function fmt(n: number) {
  return "$" + n.toLocaleString("en-CA");
}

const TOTAL_STEPS = 4;

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-3">
        {["Service", "Scope", "Timeline", "Contact"].map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-1.5 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              i + 1 < step ? "bg-green-500 text-black" :
              i + 1 === step ? "bg-green-500 text-black ring-4 ring-green-500/30" :
              "border border-green-500/30 text-green-500/50"
            }`}>
              {i + 1 < step ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : i + 1}
            </div>
            <span className={`text-xs font-medium hidden sm:block ${i + 1 <= step ? "text-green-400" : "text-green-500/40"}`}>{label}</span>
          </div>
        ))}
      </div>
      <div className="h-px bg-green-500/20 relative">
        <div
          className="absolute top-0 left-0 h-px bg-green-500 transition-all duration-500"
          style={{ width: `${((step - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}

function ToggleChip({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium border transition ${
        selected
          ? "bg-green-500 text-black border-green-500"
          : "border-green-500/30 text-green-300 hover:border-green-400 hover:text-green-200"
      }`}
    >
      {children}
    </button>
  );
}

function RadioCard({ selected, onClick, title, subtitle }: { selected: boolean; onClick: () => void; title: string; subtitle: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-2xl border p-5 transition ${
        selected
          ? "border-green-500 bg-green-900/20 shadow-lg shadow-green-500/10"
          : "border-green-500/20 hover:border-green-500/50"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-green-400">{title}</p>
          <p className="text-sm text-green-300 mt-0.5">{subtitle}</p>
        </div>
        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition ${
          selected ? "border-green-500 bg-green-500" : "border-green-500/30"
        }`}>
          {selected && <div className="w-2 h-2 rounded-full bg-black" />}
        </div>
      </div>
    </button>
  );
}

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    service: "",
    websiteSize: "",
    websiteFeatures: [],
    appPlatform: "",
    appFeatures: [],
    timeline: "",
    budgetComfort: "",
    name: "",
    email: "",
    company: "",
    description: "",
  });

  const quote = calculateQuote(data);

  function toggleFeature(list: "websiteFeatures" | "appFeatures", id: string) {
    setData((prev) => ({
      ...prev,
      [list]: prev[list].includes(id)
        ? prev[list].filter((x) => x !== id)
        : [...prev[list], id],
    }));
  }

  function canAdvance() {
    if (step === 1) return !!data.service;
    if (step === 2) {
      if (data.service === "website" || data.service === "both") return !!data.websiteSize;
      if (data.service === "mobile") return !!data.appPlatform;
      return false;
    }
    if (step === 3) return !!data.timeline;
    if (step === 4) return !!data.name && !!data.email;
    return false;
  }

  function buildMailBody() {
    const lines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.company ? `Company: ${data.company}` : null,
      ``,
      `Service: ${data.service}`,
      data.websiteSize ? `Website size: ${data.websiteSize}` : null,
      data.websiteFeatures.length ? `Website features: ${data.websiteFeatures.join(", ")}` : null,
      data.appPlatform ? `App platforms: ${data.appPlatform}` : null,
      data.appFeatures.length ? `App features: ${data.appFeatures.join(", ")}` : null,
      `Timeline: ${data.timeline}`,
      data.budgetComfort ? `Budget comfort: ${data.budgetComfort}` : null,
      ``,
      `Estimated quote shown: ${quote ? fmt(quote.low) + " – " + fmt(quote.high) : "N/A"}`,
      ``,
      `Additional details:`,
      data.description || "(none)",
    ].filter((l) => l !== null).join("\n");
    return encodeURIComponent(lines);
  }

  function handleSubmit() {
    const subject = encodeURIComponent(`Project Quote Request — ${data.name}`);
    const body = buildMailBody();
    window.location.href = `mailto:priyanshu@booyaa.net?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-black text-green-400">
      <header className="sticky top-0 z-50 border-b border-green-500/30 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Booyaa</a>
          <nav className="hidden items-center gap-8 text-sm text-green-400 md:flex">
            <a href="/products" className="transition hover:text-green-300">Products</a>
            <a href="/features" className="transition hover:text-green-300">Features</a>
            <a href="/about" className="transition hover:text-green-300">About</a>
            <a href="/quote" className="transition font-semibold text-green-300">Get a Quote</a>
          </nav>
        </div>
      </header>

      <section className="px-6 py-16 sm:px-10 md:px-12">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.24em] text-green-400 font-bold">Pricing</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-green-400 leading-tight">Get an Estimate</h1>
            <p className="mt-3 text-green-300 leading-7">
              Answer four quick questions and we'll show you an expected price range for your project — no commitment required.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-400 mb-3">Request Sent</h2>
              <p className="text-green-300 leading-7 mb-8">
                Your email client opened with all your project details pre-filled. Priyanshu will follow up within 1–2 business days.
              </p>
              {quote && (
                <div className="rounded-2xl border border-green-500/30 bg-green-900/10 p-6 mb-8">
                  <p className="text-sm text-green-500 uppercase tracking-widest font-bold mb-1">Your estimate</p>
                  <p className="text-3xl font-bold text-green-400">{fmt(quote.low)} – {fmt(quote.high)}</p>
                  <p className="text-xs text-green-500 mt-2">Final pricing confirmed after project scoping call</p>
                </div>
              )}
              <a href="/" className="inline-flex items-center justify-center rounded-full border-2 border-green-500 px-8 py-3 text-sm text-green-400 font-semibold transition hover:bg-green-500/10">
                Back to Home
              </a>
            </div>
          ) : (
            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-gray-900 to-black p-8 md:p-10">
              <ProgressBar step={step} />

              {/* Step 1 — Service type */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-green-400 mb-6">What do you need built?</h2>
                  <RadioCard
                    selected={data.service === "website"}
                    onClick={() => setData((p) => ({ ...p, service: "website" }))}
                    title="Website"
                    subtitle="Business site, portfolio, landing page, or web app"
                  />
                  <RadioCard
                    selected={data.service === "mobile"}
                    onClick={() => setData((p) => ({ ...p, service: "mobile" }))}
                    title="Mobile App"
                    subtitle="iOS and / or Android application"
                  />
                  <RadioCard
                    selected={data.service === "both"}
                    onClick={() => setData((p) => ({ ...p, service: "both" }))}
                    title="Website + Mobile App"
                    subtitle="Full digital presence — web and mobile together"
                  />
                </div>
              )}

              {/* Step 2 — Scope */}
              {step === 2 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-green-400 mb-2">Tell us about the scope</h2>

                  {(data.service === "website" || data.service === "both") && (
                    <div>
                      <p className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-3">Website size</p>
                      <div className="space-y-3">
                        <RadioCard selected={data.websiteSize === "small"} onClick={() => setData((p) => ({ ...p, websiteSize: "small" }))} title="Simple / Refresh (1–5 pages)" subtitle="Existing content taken over and rebuilt cleanly — from $500" />
                        <RadioCard selected={data.websiteSize === "medium"} onClick={() => setData((p) => ({ ...p, websiteSize: "medium" }))} title="Standard Business Site (5–10 pages)" subtitle="Professional presence, contact forms, SEO — from $1,200" />
                        <RadioCard selected={data.websiteSize === "large"} onClick={() => setData((p) => ({ ...p, websiteSize: "large" }))} title="Advanced / Custom (10+ pages)" subtitle="Complex functionality, integrations, web app — from $2,500" />
                      </div>
                      <div className="mt-6">
                        <p className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-3">Website features needed <span className="text-green-500/50 normal-case tracking-normal font-normal">(select all that apply)</span></p>
                        <div className="flex flex-wrap gap-2">
                          {WEBSITE_FEATURES.map((f) => (
                            <ToggleChip key={f.id} selected={data.websiteFeatures.includes(f.id)} onClick={() => toggleFeature("websiteFeatures", f.id)}>
                              {f.label}
                            </ToggleChip>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {(data.service === "mobile" || data.service === "both") && (
                    <div>
                      <p className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-3">Target platform</p>
                      <div className="space-y-3">
                        <RadioCard selected={data.appPlatform === "single"} onClick={() => setData((p) => ({ ...p, appPlatform: "single" }))} title="iOS or Android (one platform)" subtitle="Single platform, faster to ship — from $3,000" />
                        <RadioCard selected={data.appPlatform === "both"} onClick={() => setData((p) => ({ ...p, appPlatform: "both" }))} title="iOS + Android" subtitle="Cross-platform using React Native (Expo) — from $5,000" />
                      </div>
                      <div className="mt-6">
                        <p className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-3">App features needed <span className="text-green-500/50 normal-case tracking-normal font-normal">(select all that apply)</span></p>
                        <div className="flex flex-wrap gap-2">
                          {APP_FEATURES.map((f) => (
                            <ToggleChip key={f.id} selected={data.appFeatures.includes(f.id)} onClick={() => toggleFeature("appFeatures", f.id)}>
                              {f.label}
                            </ToggleChip>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3 — Timeline */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-green-400 mb-2">Timeline & budget</h2>

                  <div>
                    <p className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-3">When do you need this done?</p>
                    <div className="space-y-3">
                      <RadioCard selected={data.timeline === "flexible"} onClick={() => setData((p) => ({ ...p, timeline: "flexible" }))} title="Flexible (2+ months)" subtitle="No hard deadline — best value" />
                      <RadioCard selected={data.timeline === "standard"} onClick={() => setData((p) => ({ ...p, timeline: "standard" }))} title="Standard (4–8 weeks)" subtitle="Typical delivery timeline" />
                      <RadioCard selected={data.timeline === "rush"} onClick={() => setData((p) => ({ ...p, timeline: "rush" }))} title="Rush (under 3 weeks)" subtitle="Expedited delivery — priority scheduling applies" />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-3">Budget comfort <span className="text-green-500/50 normal-case tracking-normal font-normal">(optional)</span></p>
                    <div className="flex flex-wrap gap-2">
                      {["Under $1,000", "$1,000–$3,000", "$3,000–$7,000", "$7,000–$15,000", "$15,000+", "Not sure yet"].map((b) => (
                        <ToggleChip key={b} selected={data.budgetComfort === b} onClick={() => setData((p) => ({ ...p, budgetComfort: p.budgetComfort === b ? "" : b }))}>
                          {b}
                        </ToggleChip>
                      ))}
                    </div>
                  </div>

                  {quote && (
                    <div className="rounded-2xl border border-green-500/30 bg-green-900/10 p-6">
                      <p className="text-xs text-green-500 uppercase tracking-widest font-bold mb-1">Your estimate so far</p>
                      <p className="text-3xl font-bold text-green-400">{fmt(quote.low)} – {fmt(quote.high)}</p>
                      <p className="text-xs text-green-500 mt-2">Updates as you fill in details. Final pricing confirmed after scoping call.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 4 — Contact */}
              {step === 4 && (
                <div className="space-y-5">
                  <h2 className="text-2xl font-bold text-green-400 mb-2">Your details</h2>

                  {quote && (
                    <div className="rounded-2xl border border-green-500/30 bg-green-900/10 p-5 mb-2">
                      <p className="text-xs text-green-500 uppercase tracking-widest font-bold mb-1">Estimated range</p>
                      <p className="text-2xl font-bold text-green-400">{fmt(quote.low)} – {fmt(quote.high)}</p>
                      <p className="text-xs text-green-500 mt-1">Final pricing confirmed after a short scoping call</p>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-green-500 mb-2">Name <span className="text-green-400">*</span></label>
                      <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData((p) => ({ ...p, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-green-500/30 bg-black/50 px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-500 transition text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-green-500 mb-2">Email <span className="text-green-400">*</span></label>
                      <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData((p) => ({ ...p, email: e.target.value }))}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-green-500/30 bg-black/50 px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-500 transition text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-green-500 mb-2">Company / Business <span className="text-green-500/50 font-normal normal-case tracking-normal">(optional)</span></label>
                    <input
                      type="text"
                      value={data.company}
                      onChange={(e) => setData((p) => ({ ...p, company: e.target.value }))}
                      placeholder="Your company name"
                      className="w-full rounded-xl border border-green-500/30 bg-black/50 px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-500 transition text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-green-500 mb-2">Describe your project <span className="text-green-500/50 font-normal normal-case tracking-normal">(optional)</span></label>
                    <textarea
                      value={data.description}
                      onChange={(e) => setData((p) => ({ ...p, description: e.target.value }))}
                      placeholder="Any details that would help us understand your vision — goals, inspiration, must-have features, etc."
                      rows={4}
                      className="w-full rounded-xl border border-green-500/30 bg-black/50 px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-500 transition text-sm resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-green-500/20">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 font-semibold transition"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                ) : (
                  <a href="/" className="text-sm text-green-500/50 hover:text-green-400 transition">Cancel</a>
                )}

                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canAdvance()}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-green-500/30 transition hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Next
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canAdvance()}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-green-500/30 transition hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Send Request
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          )}
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
