"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/SiteChrome";

type SubmitState = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full border border-[#d8cec0] bg-[#fffaf2] px-4 py-3 text-sm text-[#1f2a24] outline-none transition placeholder:text-[#8a958c] focus:border-[#1f2a24]";

const callPoints = [
  ["What we cover", "Your business, how customers find you today, and what your website should be doing for you."],
  ["What you get", "A clear scope and price for your project, whether or not we end up working together."],
  ["What it costs", "Nothing. It's 15 minutes, no obligation, and no pressure."],
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
    formData.append("topic", "15-minute intro call");
    formData.append("source", "Book a call page");
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
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b3f2f]">Book a call</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#18231d] sm:text-6xl">15 minutes. A clear plan for your website.</h1>
            <p className="mt-6 text-lg leading-8 text-[#536156]">
              Every project is scoped individually, because a restoration company and a bookkeeper need different things from their site. Tell me about your business and I&apos;ll set up a quick call.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div data-reveal="1" className="grid h-fit gap-4">
              {callPoints.map(([title, text]) => (
                <div key={title} className="border border-[#d9d0c2] bg-[#fffaf2] p-5">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#18231d]">{title}</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-[#536156]">{text}</p>
                </div>
              ))}
            </div>

            <form data-reveal="2" onSubmit={handleSubmit} className="border border-[#d9d0c2] bg-[#fffaf2] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b3f2f]">Request the call</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-[#18231d]">Tell me about your business</p>

              <div className="mt-8 space-y-4">
                <input className={inputClass} name="name" required placeholder="Your name" />
                <input className={inputClass} name="email" type="email" required placeholder="Email address" />
                <input className={inputClass} name="phone" type="tel" placeholder="Phone (optional)" />
                <input className={inputClass} name="project" placeholder="Business name" />
                <textarea
                  className={`${inputClass} min-h-36 resize-y`}
                  name="message"
                  required
                  placeholder="A few sentences about your business, your current website if you have one, and where your customers come from today."
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
                disabled={state === "sending" || state === "success"}
                className="mt-6 inline-flex w-full items-center justify-center bg-[#1f2a24] px-6 py-3 text-sm font-semibold text-[#f6f1e8] transition hover:bg-[#7b3f2f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state === "sending" ? "Sending..." : state === "success" ? "Request sent" : "Request the call"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
