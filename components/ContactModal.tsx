"use client";

import { FormEvent, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type ContactModalProps = {
  children: ReactNode;
  topic?: string;
  packageName?: string;
  packageRange?: string;
  source?: string;
  variant?: "primary" | "secondary" | "light" | "link";
  mode?: "quote" | "contact";
};

type SubmitState = "idle" | "sending" | "success" | "error";
type Estimate = {
  label: string;
  base: string;
  addOns: string;
  urgency: string;
  custom: boolean;
};

const packages = [
  {
    id: "refresh",
    name: "Website Refresh",
    range: "$50-$200",
    low: 50,
    high: 200,
    detail: "Small improvements to an existing site.",
  },
  {
    id: "business",
    name: "Small Business Site",
    range: "$200-$500",
    low: 200,
    high: 500,
    detail: "A simple new site or landing page.",
  },
  {
    id: "launch",
    name: "Launch Cleanup",
    range: "$300-$500",
    low: 300,
    high: 500,
    detail: "Forms, deployment, analytics, and final polish.",
  },
  {
    id: "app",
    name: "App MVP",
    range: "$600-$1,500",
    low: 600,
    high: 1500,
    detail: "A focused app prototype or first release.",
  },
  {
    id: "web-mobile",
    name: "Website + Mobile App",
    range: "$1,000-$2,500",
    low: 1000,
    high: 2500,
    detail: "A paired web and mobile app package.",
  },
  {
    id: "custom",
    name: "Custom Project",
    range: "Custom quote",
    low: 0,
    high: 0,
    detail: "Maintenance, complex integrations, dashboards, or larger builds.",
  },
];

const options = [
  { id: "copy", label: "Copy cleanup", detail: "Tighten wording and page flow.", low: 25, high: 75 },
  { id: "forms", label: "Contact form setup", detail: "Form, routing, and success state.", low: 50, high: 100 },
  { id: "seo", label: "Basic SEO pass", detail: "Titles, descriptions, structure.", low: 50, high: 125 },
  { id: "deploy", label: "Deployment help", detail: "Hosting, domain, launch checks.", low: 75, high: 150 },
  { id: "auth", label: "Login / accounts", detail: "User sign-in and protected areas.", low: 150, high: 350, customHint: true },
  { id: "payments", label: "Payments", detail: "Checkout or payment integration.", low: 150, high: 350, customHint: true },
  { id: "realtime", label: "Realtime sync", detail: "Live updates or shared sessions.", low: 150, high: 400, customHint: true },
];

const timelines = [
  { id: "flexible", label: "Flexible", detail: "Best value", multiplier: 1 },
  { id: "standard", label: "Standard", detail: "Normal scheduling", multiplier: 1 },
  { id: "priority", label: "Priority", detail: "2-3 weeks, +15%", multiplier: 1.15 },
  { id: "rush", label: "Rush", detail: "7-14 days, +25%", multiplier: 1.25 },
  { id: "emergency", label: "Emergency", detail: "Under 7 days, custom", multiplier: null },
];

const inputClass =
  "w-full border border-[#d8cec0] bg-[#fffaf2] px-4 py-3 text-sm text-[#1f2a24] outline-none transition placeholder:text-[#8a958c] focus:border-[#1f2a24]";

function fmt(value: number) {
  return "$" + value.toLocaleString("en-CA");
}

export function ContactModal({
  children,
  topic = "Project inquiry",
  packageName = "",
  packageRange = "",
  source = "Website",
  variant = "primary",
  mode = "quote",
}: ContactModalProps) {
  const initialPackage = packages.find((item) => item.name === packageName) ?? packages[0];
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [selectedPackageId, setSelectedPackageId] = useState(initialPackage.id);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedTimelineId, setSelectedTimelineId] = useState("standard");
  const [mounted, setMounted] = useState(false);

  const selectedPackage = packages.find((item) => item.id === selectedPackageId) ?? packages[0];
  const selectedOptionDetails = options.filter((option) => selectedOptions.includes(option.id));
  const selectedTimeline = timelines.find((timeline) => timeline.id === selectedTimelineId) ?? timelines[1];
  const estimate = useMemo<Estimate>(() => {
    if (selectedPackage.id === "custom" || selectedTimeline.multiplier === null) {
      return {
        label: "Custom quote",
        base: selectedPackage.id === "custom" ? "Scoped after review" : selectedPackage.range,
        addOns: selectedOptionDetails.length ? "Included in scope review" : "$0",
        urgency: selectedTimeline.multiplier === null ? "Custom timing" : "$0",
        custom: true,
      };
    }

    const addedLow = selectedOptionDetails.reduce((total, option) => total + option.low, 0);
    const addedHigh = selectedOptionDetails.reduce((total, option) => total + option.high, 0);
    const rawLow = selectedPackage.low + addedLow;
    const rawHigh = selectedPackage.high + addedHigh;
    const adjustedLow = Math.round((rawLow * selectedTimeline.multiplier) / 25) * 25;
    const adjustedHigh = Math.round((rawHigh * selectedTimeline.multiplier) / 25) * 25;
    const urgencyLow = adjustedLow - rawLow;
    const urgencyHigh = adjustedHigh - rawHigh;
    const custom = selectedOptionDetails.some((option) => option.customHint);

    return {
      label: custom ? `${fmt(adjustedLow)}-${fmt(adjustedHigh)}+` : `${fmt(adjustedLow)}-${fmt(adjustedHigh)}`,
      base: `${fmt(selectedPackage.low)}-${fmt(selectedPackage.high)}`,
      addOns: addedLow > 0 || addedHigh > 0 ? `${fmt(addedLow)}-${fmt(addedHigh)}` : "$0",
      urgency: urgencyLow > 0 || urgencyHigh > 0 ? `${fmt(urgencyLow)}-${fmt(urgencyHigh)}` : "$0",
      custom,
    };
  }, [selectedOptionDetails, selectedPackage, selectedTimeline]);

  const buttonClass =
    variant === "primary"
      ? "inline-flex items-center justify-center bg-[#1f2a24] px-5 py-2.5 text-sm font-semibold text-[#f6f1e8] transition hover:bg-[#7b3f2f]"
      : variant === "secondary"
        ? "inline-flex items-center justify-center border border-[#b8ad9d] px-5 py-2.5 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
        : variant === "light"
          ? "inline-flex items-center justify-center border border-[#f6f1e8] px-5 py-2.5 text-sm font-semibold text-[#f6f1e8] transition hover:bg-[#f6f1e8] hover:text-[#1f2a24]"
          : "font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 transition hover:text-[#7b3f2f]";

  const closeModal = useCallback(() => {
    setOpen(false);
    setState("idle");
    setMessage("");
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeModal();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal, open]);

  function toggleOption(id: string) {
    setSelectedOptions((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const attachment = event.currentTarget.elements.namedItem("attachment") as HTMLInputElement | null;
    const file = attachment?.files?.[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setState("error");
      setMessage("Reference files must be 5 MB or smaller.");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setState("error");
      setMessage("Contact form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to enable submissions.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", `Booyaa inquiry - ${topic}`);
    formData.append("from_name", "Booyaa Website");
    formData.append("source", source);
    if (mode === "quote") {
      formData.append("selected_package", selectedPackage.name);
      formData.append("package_range", packageRange || selectedPackage.range);
      formData.append("estimated_range", estimate.label);
      formData.append("selected_options", selectedOptionDetails.map((option) => option.label).join(", ") || "None");
      formData.append("timeline", selectedTimeline.label);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send message.");
      }

      form.reset();
      setSelectedOptions([]);
      setSelectedTimelineId("standard");
      setState("success");
      setMessage("Thanks. Your message was sent, and I will get back to you soon.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  const modal = open ? (
    <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1f2a24]/55 px-4 py-6 backdrop-blur-sm"
          onMouseDown={closeModal}
        >
          <div
            className="relative flex max-h-[82dvh] w-full max-w-4xl flex-col overflow-hidden border-2 border-[#1f2a24] bg-[#f6f1e8] shadow-[0_28px_90px_rgba(31,42,36,0.35),16px_16px_0_rgba(31,42,36,0.2)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center border border-[#1f2a24] bg-[#1f2a24] text-[#f6f1e8] shadow-[4px_4px_0_#ded4c6] transition hover:bg-[#7b3f2f]"
              aria-label="Close contact form"
              title="Close"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            <div className="border-b border-[#d9d0c2] px-5 py-4 pr-20">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">{topic}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#18231d]">
                {mode === "quote" ? "Build a quick estimate" : "Send a message"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#536156]">
                {mode === "quote"
                  ? "Pick a package and optional needs. The estimate updates live and complex work is flagged for a custom quote."
                  : "Share the project, question, or reference details and I will get back to you."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="min-h-0 overflow-y-auto bg-[#f6f1e8] p-5 sm:p-6">
              {mode === "quote" ? (
              <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
                <div className="space-y-6">
                  <div className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#536156] sm:grid-cols-3">
                    {["Choose package", "Adjust scope", "Add details"].map((step, index) => (
                      <div key={step} className="border border-[#d9d0c2] bg-[#fffaf2] px-3 py-2">
                        <span className="mr-2 text-[#7b3f2f]">{String(index + 1).padStart(2, "0")}</span>
                        {step}
                      </div>
                    ))}
                  </div>

                  <section>
                    <div className="mb-3 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Choose package</p>
                        <p className="mt-1 text-sm text-[#536156]">Start with the closest fit. It does not need to be perfect.</p>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {packages.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedPackageId(item.id)}
                          className={`min-h-[9.5rem] border p-4 text-left transition ${
                            selectedPackageId === item.id
                              ? "border-[#1f2a24] bg-[#fffaf2] shadow-[6px_6px_0_#ded4c6]"
                              : "border-[#d9d0c2] bg-[#fffaf2] hover:border-[#1f2a24]"
                          }`}
                        >
                          <span className="block font-semibold text-[#18231d]">{item.name}</span>
                          <span className="mt-1 block text-sm font-semibold text-[#7b3f2f]">{item.range}</span>
                          <span className="mt-2 block text-sm leading-5 text-[#536156]">{item.detail}</span>
                        </button>
                      ))}
                    </div>
                  </section>

                  <section>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Adjust scope</p>
                    <p className="mb-3 text-sm text-[#536156]">Add the pieces you already know you need.</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {options.map((option) => (
                        <label
                          key={option.id}
                          className={`flex cursor-pointer items-start gap-3 border p-3 text-sm transition ${
                            selectedOptions.includes(option.id)
                              ? "border-[#1f2a24] bg-[#fffaf2]"
                              : "border-[#d9d0c2] bg-[#fffaf2] hover:border-[#1f2a24]"
                          }`}
                        >
                          <input
                            type="checkbox"
                            className="mt-1"
                            checked={selectedOptions.includes(option.id)}
                            onChange={() => toggleOption(option.id)}
                          />
                          <span>
                            <span className="block font-semibold text-[#18231d]">{option.label}</span>
                            <span className="block text-[#536156]">+{fmt(option.low)}-{fmt(option.high)}</span>
                            <span className="mt-1 block text-xs leading-5 text-[#6d776e]">{option.detail}</span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </section>

                  <section>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Timeline</p>
                    <p className="mb-3 text-sm text-[#536156]">Rush pricing is percentage-based so smaller projects stay fair.</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {timelines.map((timeline) => (
                        <button
                          key={timeline.id}
                          type="button"
                          onClick={() => setSelectedTimelineId(timeline.id)}
                          className={`border p-3 text-left text-sm transition ${
                            selectedTimelineId === timeline.id
                              ? "border-[#1f2a24] bg-[#fffaf2] shadow-[4px_4px_0_#ded4c6]"
                              : "border-[#d9d0c2] bg-[#fffaf2] hover:border-[#1f2a24]"
                          }`}
                        >
                          <span className="block font-semibold text-[#18231d]">{timeline.label}</span>
                          <span className="mt-1 block text-[#536156]">{timeline.detail}</span>
                        </button>
                      ))}
                    </div>
                  </section>

                  <section>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Add details</p>
                    <p className="mb-3 text-sm text-[#536156]">A short note is enough. I can help shape the scope after.</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input className={inputClass} name="name" required placeholder="Your name" />
                      <input className={inputClass} name="email" type="email" required placeholder="you@example.com" />
                    </div>
                    <div className="mt-4">
                      <input className={inputClass} name="project" placeholder="Business or project name" />
                      <input type="hidden" name="timeline_selection" value={selectedTimeline.label} />
                    </div>
                    <textarea
                      className={`${inputClass} mt-4 min-h-28 resize-y`}
                      name="message"
                      required
                      placeholder="A few sentences about what you need, what exists already, and what success looks like."
                    />
                  </section>

                  <section>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Reference photo</p>
                    <label className="block border border-[#d9d0c2] bg-[#fffaf2] p-4">
                      <span className="block text-sm font-semibold text-[#18231d]">Upload one optional reference image</span>
                      <span className="mt-1 block text-sm leading-6 text-[#536156]">
                        Useful for inspiration, current website screenshots, app sketches, or visual direction. JPG, PNG, WebP, or PDF up to 5 MB.
                      </span>
                      <input
                        className="mt-4 block w-full text-sm text-[#536156] file:mr-4 file:border-0 file:bg-[#1f2a24] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#f6f1e8]"
                        type="file"
                        name="attachment"
                        accept="image/png,image/jpeg,image/webp,application/pdf"
                      />
                    </label>
                  </section>
                </div>

                <aside className="h-fit border border-[#d9d0c2] bg-[#fffaf2] p-5 lg:sticky lg:top-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Live estimate</p>
                  <p className="mt-3 text-4xl font-semibold tracking-tight text-[#18231d]">{estimate.label}</p>
                  <p className="mt-3 leading-6 text-[#536156]">
                    {estimate.custom
                      ? "This may need custom scoping depending on complexity."
                      : "This is an estimate. Final quote depends on scope, content, integrations, and launch needs."}
                  </p>
                  <div className="mt-5 space-y-3 border-t border-[#d9d0c2] pt-5 text-sm text-[#536156]">
                    <div className="flex items-start justify-between gap-4">
                      <span>Base package</span>
                      <span className="text-right font-semibold text-[#18231d]">{estimate.base}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span>Add-ons</span>
                      <span className="text-right font-semibold text-[#18231d]">{estimate.addOns}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span>Urgency</span>
                      <span className="text-right font-semibold text-[#18231d]">{estimate.urgency}</span>
                    </div>
                    <div className="border-t border-[#d9d0c2] pt-3">
                      <p><span className="font-semibold text-[#18231d]">Selected:</span> {selectedPackage.name}</p>
                      <p className="mt-1"><span className="font-semibold text-[#18231d]">Timeline:</span> {selectedTimeline.label}</p>
                      <p className="mt-1"><span className="font-semibold text-[#18231d]">Add-ons:</span> {selectedOptionDetails.map((option) => option.label).join(", ") || "None selected"}</p>
                    </div>
                  </div>

                  {message && (
                    <p className={`mt-5 border p-3 text-sm ${state === "success" ? "border-[#8fa58f] text-[#2f5f38]" : "border-[#c8917e] text-[#7b3f2f]"}`}>
                      {message}
                    </p>
                  )}

                  <div className="mt-6 grid gap-3">
                    <button
                      type="submit"
                      disabled={state === "sending"}
                      className="inline-flex items-center justify-center bg-[#1f2a24] px-6 py-3 text-sm font-semibold text-[#f6f1e8] transition hover:bg-[#7b3f2f] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {state === "sending" ? "Sending..." : "Send request"}
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="inline-flex items-center justify-center border border-[#b8ad9d] px-6 py-3 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
                    >
                      Close
                    </button>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-[#536156]">Submits securely through Web3Forms.</p>
                  <p className="mt-2 text-xs leading-5 text-[#536156]">No payment is required to request a quote. I usually reply within 24-48 hours.</p>
                </aside>
              </div>
              ) : (
                <div className="mx-auto max-w-2xl space-y-5">
                  <div className="border border-[#d9d0c2] bg-[#fffaf2] p-4">
                    <p className="text-sm font-semibold text-[#18231d]">I usually reply within 24-48 hours.</p>
                    <p className="mt-1 text-sm leading-6 text-[#536156]">Use this for questions, support, partnerships, existing project updates, or quick references.</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#536156]">Name</span>
                      <input className={inputClass} name="name" required placeholder="Your name" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#536156]">Email</span>
                      <input className={inputClass} name="email" type="email" required placeholder="you@example.com" />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#536156]">Purpose</span>
                    <select className={inputClass} name="purpose" defaultValue="General question">
                      <option>General question</option>
                      <option>Support</option>
                      <option>Partnership</option>
                      <option>Existing project</option>
                      <option>Download or product question</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#536156]">Project or question</span>
                    <input className={inputClass} name="project" placeholder="What is this about?" />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#536156]">Message</span>
                    <textarea
                      className={`${inputClass} min-h-36 resize-y`}
                      name="message"
                      required
                      placeholder="Send the question, waitlist request, project context, or anything else I should know."
                    />
                  </label>

                  <label className="block border border-[#d9d0c2] bg-[#fffaf2] p-4">
                    <span className="block text-sm font-semibold text-[#18231d]">Optional reference image</span>
                    <span className="mt-1 block text-sm leading-6 text-[#536156]">
                      Upload one optional JPG, PNG, WebP, or PDF up to 5 MB.
                    </span>
                    <input
                      className="mt-4 block w-full text-sm text-[#536156] file:mr-4 file:border-0 file:bg-[#1f2a24] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#f6f1e8]"
                      type="file"
                      name="attachment"
                      accept="image/png,image/jpeg,image/webp,application/pdf"
                    />
                  </label>

                  {message && (
                    <p className={`border p-3 text-sm ${state === "success" ? "border-[#8fa58f] text-[#2f5f38]" : "border-[#c8917e] text-[#7b3f2f]"}`}>
                      {message}
                    </p>
                  )}

                  <div className="flex flex-col gap-3 border-t border-[#d9d0c2] pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm leading-6 text-[#536156]">
                      <p>Submits securely through Web3Forms.</p>
                      <p>
                        <a className="font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4" href="https://github.com/PPusola" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <span> / </span>
                        <a className="font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4" href="https://ppusola.github.io" target="_blank" rel="noopener noreferrer">Portfolio</a>
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="inline-flex items-center justify-center border border-[#b8ad9d] px-5 py-3 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        disabled={state === "sending"}
                        className="inline-flex items-center justify-center bg-[#1f2a24] px-5 py-3 text-sm font-semibold text-[#f6f1e8] transition hover:bg-[#7b3f2f] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {state === "sending" ? "Sending..." : "Send message"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
  ) : null;

  return (
    <>
      <button type="button" className={buttonClass} onClick={() => setOpen(true)}>
        {children}
      </button>

      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
