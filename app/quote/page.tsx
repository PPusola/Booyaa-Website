"use client";

import { FormEvent, useState } from "react";
import { PageShell } from "@/components/SiteChrome";

const packages = [
  {
    name: "Website Refresh",
    range: "$50-$200",
    description: "Best for quick updates to an existing site: spacing, copy, small styling fixes, and cleanup.",
  },
  {
    name: "Small Business Site",
    range: "$200-$500",
    description: "Best for a simple new website or landing page for a local business, service, or portfolio.",
  },
  {
    name: "Launch Cleanup",
    range: "$300-$500",
    description: "Best for final polish, forms, deployment, analytics, and launch checks before going public.",
  },
  {
    name: "Custom Project",
    range: "Scoped after a call",
    description: "Best for ecommerce, dashboards, auth-heavy apps, integrations, or larger builds.",
  },
];

type SubmitState = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full border border-[#d8cec0] bg-[#fffaf2] px-4 py-3 text-sm text-[#1f2a24] outline-none transition placeholder:text-[#8a958c] focus:border-[#1f2a24]";

export default function QuotePage() {
  const [selected, setSelected] = useState(packages[0]);
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

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

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", accessKey);
    formData.append("subject", `Booyaa quote request - ${selected.name}`);
    formData.append("from_name", "Booyaa Website");
    formData.append("selected_package", selected.name);
    formData.append("package_range", selected.range);
    formData.append("source", "Quote page");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const result = await response.json();

      if (!response.ok || !result.success) throw new Error(result.message || "Unable to send quote request.");

      event.currentTarget.reset();
      setState("success");
      setMessage("Thanks. Your quote request was sent.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Get a Quote</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">Pick a starting point.</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              Choose the closest package and send a short note. The public ranges stay simple; complex builds move to a custom quote.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="grid gap-4">
              {packages.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setSelected(item)}
                  className={`border p-5 text-left transition ${
                    selected.name === item.name
                      ? "border-[#1f2a24] bg-[#fffaf2] shadow-[10px_10px_0_#ded4c6]"
                      : "border-[#d9d0c2] bg-[#fffaf2] hover:border-[#1f2a24]"
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight text-[#18231d]">{item.name}</h2>
                      <p className="mt-3 max-w-2xl leading-7 text-[#536156]">{item.description}</p>
                    </div>
                    <span className="shrink-0 text-lg font-semibold text-[#7b3f2f]">{item.range}</span>
                  </div>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Selected package</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-[#18231d]">{selected.name}</p>
              <p className="mt-1 text-[#536156]">{selected.range}</p>

              <div className="mt-8 space-y-4">
                <input className={inputClass} name="name" required placeholder="Your name" />
                <input className={inputClass} name="email" type="email" required placeholder="Email address" />
                <input className={inputClass} name="project" placeholder="Business or project name" />
                <select className={inputClass} name="timeline" defaultValue="Not sure yet">
                  <option>Not sure yet</option>
                  <option>Flexible</option>
                  <option>Standard</option>
                  <option>Priority - 2-3 weeks (+15%)</option>
                  <option>Rush - 7-14 days (+25%)</option>
                  <option>Emergency - under 7 days (custom quote)</option>
                </select>
                <textarea
                  className={`${inputClass} min-h-36 resize-y`}
                  name="message"
                  required
                  placeholder="What do you need built or refreshed?"
                />
                <label className="block border border-[#d9d0c2] bg-[#fdf8ef] p-4">
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
              </div>

              {message && (
                <p className={`mt-5 border p-3 text-sm ${state === "success" ? "border-[#8fa58f] text-[#2f5f38]" : "border-[#c8917e] text-[#7b3f2f]"}`}>
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={state === "sending"}
                className="mt-6 inline-flex w-full items-center justify-center bg-[#1f2a24] px-6 py-3 text-sm font-semibold text-[#f6f1e8] transition hover:bg-[#7b3f2f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state === "sending" ? "Sending..." : "Send quote request"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
