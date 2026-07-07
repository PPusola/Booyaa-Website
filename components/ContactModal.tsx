"use client";

import { FormEvent, ReactNode, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ContactModalProps = {
  children: ReactNode;
  topic?: string;
  source?: string;
  variant?: "primary" | "secondary" | "light" | "link";
  mode?: "quote" | "contact";
};

type SubmitState = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full border border-[#d8cec0] bg-[#fffaf2] px-4 py-3 text-sm text-[#1f2a24] outline-none transition placeholder:text-[#8a958c] focus:border-[#1f2a24]";

export function ContactModal({
  children,
  topic = "Project inquiry",
  source = "Website",
  variant = "primary",
  mode = "quote",
}: ContactModalProps) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false);

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

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("topic", topic);
    formData.append("source", source);
    formData.append("mode", mode);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send message.");
      }

      form.reset();
      setState("success");
      setMessage(
        mode === "quote"
          ? "Thanks. I will reach out within one business day to set up the call."
          : "Thanks. Your message was sent, and I will get back to you soon.",
      );
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
            className="relative flex max-h-[82dvh] w-full max-w-2xl flex-col overflow-hidden border-2 border-[#1f2a24] bg-[#f6f1e8] shadow-[0_28px_90px_rgba(31,42,36,0.35),16px_16px_0_rgba(31,42,36,0.2)]"
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
                {mode === "quote" ? "Book a 15-minute call" : "Send a message"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#536156]">
                {mode === "quote"
                  ? "Tell me a little about your business and I will reach out within one business day to set up a free 15-minute call. No obligation, no pressure."
                  : "Share the project, question, or reference details and I will get back to you."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="min-h-0 overflow-y-auto bg-[#f6f1e8] p-5 sm:p-6">
              {mode === "quote" ? (
                <div className="mx-auto max-w-2xl space-y-5">
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

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#536156]">Phone (optional)</span>
                      <input className={inputClass} name="phone" type="tel" placeholder="Best number to reach you" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#536156]">Business name</span>
                      <input className={inputClass} name="project" placeholder="Your business" />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#536156]">What does your business do?</span>
                    <textarea
                      className={`${inputClass} min-h-32 resize-y`}
                      name="message"
                      required
                      placeholder="A few sentences about your business, your current website if you have one, and where your customers come from today."
                    />
                  </label>

                  <label className="block border border-[#d9d0c2] bg-[#fffaf2] p-4">
                    <span className="block text-sm font-semibold text-[#18231d]">Optional reference</span>
                    <span className="mt-1 block text-sm leading-6 text-[#536156]">
                      A screenshot of your current site or anything else useful. JPG, PNG, WebP, or PDF up to 5 MB.
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
                    <p className="text-sm leading-6 text-[#536156]">Sends securely to Booyaa. I reply within one business day.</p>
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
                        {state === "sending" ? "Sending..." : "Request the call"}
                      </button>
                    </div>
                  </div>
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
                      placeholder="Send the question, project context, or anything else I should know."
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
                      <p>Sends securely to Booyaa.</p>
                      <p>
                        <a className="font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4" href="https://github.com/PPusola" target="_blank" rel="noopener noreferrer">GitHub</a>
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
