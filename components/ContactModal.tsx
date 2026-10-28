"use client";

import { FormEvent, ReactNode, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { reportLeadConversion } from "@/lib/gtag";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

type ContactModalProps = {
  children: ReactNode;
  topic?: string;
  source?: string;
  variant?: "primary" | "secondary" | "light" | "link";
  mode?: "quote" | "contact";
};

type SubmitState = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-[#d6ccbc] bg-[#fffaf2] px-4 py-3 text-sm text-[#1f2a24] outline-none transition placeholder:text-[#9aa39c] focus:border-[#1f2a24] focus:ring-4 focus:ring-[#1f2a24]/5";

const labelClass = "mb-1.5 block text-sm font-medium text-[#1f2a24]";

const fileInputClass =
  "mt-3 block w-full text-sm text-[#536156] file:mr-4 file:rounded-md file:border-0 file:bg-[#1f2a24] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white";

const closeButtonClass =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md border border-[#d6ccbc] px-5 py-3 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]";

const submitButtonClass =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-[#1f2a24] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7b3f2f] disabled:cursor-not-allowed disabled:opacity-60";

export function ContactModal({
  children,
  topic = "Free quote request",
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
      ? "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-[#1f2a24] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#7b3f2f]"
      : variant === "secondary"
        ? "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md border border-[#d6ccbc] bg-[#fffaf2] px-6 py-3 text-sm font-semibold text-[#1f2a24] transition hover:border-[#1f2a24]"
        : variant === "light"
          ? "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-[#fffaf2] px-6 py-3 text-sm font-semibold text-[#1f2a24] transition hover:bg-[#efe8dc]"
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

      // Quote requests land on a real confirmation URL so the conversion is
      // trackable there (see /quote/received). A full-page navigation (not a
      // client-side router.push) is deliberate: it produces a genuine page load
      // so URL-based conversion tracking in Google Ads fires reliably. Plain
      // contact messages stay inline in the modal and fire the event below.
      if (mode === "quote") {
        window.location.assign("/quote/received");
        return;
      }

      reportLeadConversion("contact");
      setMessage("Thanks. Your message was sent, and I will get back to you soon.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  const statusMessage = message ? (
    <p
      className={`rounded-md border p-3 text-sm ${
        state === "success" ? "border-[#bfd3bf] bg-[#f3f8f3] text-[#2f5f38]" : "border-[#e5c3b7] bg-[#fdf5f2] text-[#7b3f2f]"
      }`}
    >
      {message}
    </p>
  ) : null;

  const modal = open ? (
    <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1f2a24]/50 px-4 py-6 backdrop-blur-sm"
          onMouseDown={closeModal}
        >
          <div
            className="relative flex max-h-[88dvh] w-full max-w-xl flex-col overflow-hidden rounded-md bg-[#fffaf2] shadow-[0_30px_90px_rgba(31,42,36,0.3)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#efe8dc] text-[#1f2a24] transition hover:bg-[#e6ddcd]"
              aria-label="Close contact form"
              title="Close"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            <div className="px-6 pb-2 pr-16 pt-6 sm:px-8 sm:pt-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#18231d]">
                {mode === "quote" ? "Get a free quote" : "Send a message"}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#536156]">
                {mode === "quote"
                  ? "Tell me a little about your business. I reply within one business day with a clear scope and price. No obligation."
                  : "Questions, support, or anything else. I usually reply within 24 to 48 hours."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="min-h-0 overflow-y-auto px-6 pb-6 pt-4 sm:px-8 sm:pb-8">
              {mode === "quote" ? (
                <div className="space-y-4">
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
                      className={`${inputClass} min-h-28 resize-y`}
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
                        <span className="block text-sm text-[#536156]">A screenshot of your current site or anything useful. JPG, PNG, WebP, or PDF up to 5 MB.</span>
                        <input
                          className={fileInputClass}
                          type="file"
                          name="attachment"
                          accept="image/png,image/jpeg,image/webp,application/pdf"
                        />
                      </label>
                    </div>
                  </details>

                  {statusMessage}

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm leading-6 text-[#536156]">
                      Prefer email?{" "}
                      <a href={CONTACT_MAILTO} className="font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 hover:text-[#7b3f2f]">
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                    <button type="submit" disabled={state === "sending"} className={submitButtonClass}>
                      {state === "sending" ? "Sending..." : "Send request"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
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
                    <span className={labelClass}>Purpose</span>
                    <select className={inputClass} name="purpose" defaultValue="General question">
                      <option>General question</option>
                      <option>Support</option>
                      <option>Partnership</option>
                      <option>Existing project</option>
                      <option>Download or product question</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className={labelClass}>Message</span>
                    <textarea
                      className={`${inputClass} min-h-32 resize-y`}
                      name="message"
                      required
                      placeholder="Send the question, project context, or anything else I should know."
                    />
                  </label>

                  <label className="block rounded-md border border-[#ddd4c5] bg-[#f6f1e8] p-4">
                    <span className="block text-sm font-medium text-[#1f2a24]">Reference file (optional)</span>
                    <span className="mt-1 block text-sm text-[#536156]">JPG, PNG, WebP, or PDF up to 5 MB.</span>
                    <input
                      className={fileInputClass}
                      type="file"
                      name="attachment"
                      accept="image/png,image/jpeg,image/webp,application/pdf"
                    />
                  </label>

                  {statusMessage}

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm leading-6 text-[#536156]">
                      Or email{" "}
                      <a href={CONTACT_MAILTO} className="font-semibold text-[#1f2a24] underline decoration-[#b8ad9d] underline-offset-4 hover:text-[#7b3f2f]">
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                    <div className="flex gap-3">
                      <button type="button" onClick={closeModal} className={closeButtonClass}>
                        Close
                      </button>
                      <button type="submit" disabled={state === "sending"} className={submitButtonClass}>
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
