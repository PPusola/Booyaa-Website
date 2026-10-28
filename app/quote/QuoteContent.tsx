"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/SiteChrome";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

type SubmitState = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-[#d6ccbc] bg-[#fffaf2] px-4 py-3 text-sm text-[#1f2a24] outline-none transition placeholder:text-[#9aa39c] focus:border-[#1f2a24] focus:ring-4 focus:ring-[#1f2a24]/5";

const labelClass = "mb-1.5 block text-sm font-medium text-[#1f2a24]";

const nextSteps = [
  ["I reply within one business day", "Every message is read personally, not by a sales team."],
  ["You get a clear scope and price", "Yours to keep, whether or not we end up working together."],
  ["It costs nothing", "No obligation and no pressure."],
];

export default function QuotePage() {
  const router = useRouter();
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    // currentTarget is nulled once the handler yields, so hold the form here.
    const form = event.currentTarget;

    const attachment = form.elements.namedItem("attachment") as HTMLInputElement | null;
    const file = attachment?.files?.[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setState("error");
      setMessage("Reference files must be 5 MB or smaller.");
      return;
    }

    const formData = new FormData(form);
    formData.append("topic", "Free quote request");
    formData.append("source", "Contact page");
    formData.append("mode", "quote");

    try {
      const response = await fetch("/api/contact", { method: "POST", body: formData });
      const result = await response.json();

      if (!response.ok || !result.success) throw new Error(result.message || "Unable to send request.");

      form.reset();
      setState("success");
      router.push("/quote/received");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <PageShell>
      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div data-reveal>
            <p className="text-sm font-semibold text-[#7b3f2f]">Contact</p>
            <h1 className="mt-3 text-5xl font-semibold leading-tight text-[#18231d] sm:text-6xl">Let&apos;s talk about your website.</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              Tell me a little about your business and what you need. I&apos;ll reply with a clear scope and price.
            </p>

            <a
              href={CONTACT_MAILTO}
              className="mt-8 flex items-center justify-between gap-4 rounded-md border border-[#ddd4c5] bg-[#fffaf2] p-5 transition hover:border-[#1f2a24]"
            >
              <span>
                <span className="block text-sm text-[#536156]">Prefer email?</span>
                <span className="mt-1 block text-lg font-semibold text-[#18231d]">{CONTACT_EMAIL}</span>
              </span>
              <span aria-hidden="true" className="text-xl text-[#1f2a24]">&rarr;</span>
            </a>

            <ul className="mt-10 grid gap-5">
              {nextSteps.map(([title, text]) => (
                <li key={title} className="flex gap-3">
                  <span aria-hidden="true" className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1f2a24] text-[10px] text-white">&#10003;</span>
                  <div>
                    <p className="font-semibold text-[#18231d]">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#536156]">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form data-reveal="2" onSubmit={handleSubmit} className="rounded-md border border-[#ddd4c5] bg-[#fffaf2] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#18231d]">Get a free quote</h2>

            <div className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>Name</span>
                  <input className={inputClass} name="name" required autoComplete="name" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className={labelClass}>Email</span>
                  <input className={inputClass} name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
                </label>
              </div>
              <label className="block">
                <span className={labelClass}>What do you need?</span>
                <textarea
                  className={`${inputClass} min-h-36 resize-y`}
                  name="message"
                  required
                  placeholder="What your business does, and what you want from your website."
                />
              </label>

              <details className="group rounded-md border border-[#ddd4c5] bg-[#f6f1e8] px-4 py-3">
                <summary className="cursor-pointer list-none text-sm font-medium text-[#536156] transition hover:text-[#1f2a24]">
                  <span className="mr-1.5 inline-block transition-transform group-open:rotate-90" aria-hidden="true">&rsaquo;</span>
                  Add more details (optional)
                </summary>
                <div className="mt-4 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className={labelClass}>Phone</span>
                      <input className={inputClass} name="phone" type="tel" autoComplete="tel" placeholder="Best number to reach you" />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Business name</span>
                      <input className={inputClass} name="project" autoComplete="organization" placeholder="Your business" />
                    </label>
                  </div>
                  <label className="block">
                    <span className={labelClass}>Reference file</span>
                    <span className="block text-sm text-[#536156]">JPG, PNG, WebP, or PDF up to 5 MB.</span>
                    <input
                      className="mt-3 block w-full text-sm text-[#536156] file:mr-4 file:rounded-md file:border-0 file:bg-[#1f2a24] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                      type="file"
                      name="attachment"
                      accept="image/png,image/jpeg,image/webp,application/pdf"
                    />
                  </label>
                </div>
              </details>
            </div>

            {message && (
              <p className={`mt-5 rounded-md border p-3 text-sm ${state === "success" ? "border-[#bfd3bf] bg-[#f3f8f3] text-[#2f5f38]" : "border-[#e5c3b7] bg-[#fdf5f2] text-[#7b3f2f]"}`}>
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={state === "sending" || state === "success"}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#1f2a24] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#7b3f2f] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state === "sending" ? "Sending..." : state === "success" ? "Request sent" : "Send request"}
            </button>
            <p className="mt-3 text-center text-xs text-[#7b857b]">I reply within one business day.</p>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
