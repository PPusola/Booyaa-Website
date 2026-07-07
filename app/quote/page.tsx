import type { Metadata } from "next";
import QuoteContent from "./QuoteContent";

export const metadata: Metadata = {
  title: "Book a 15-Minute Website Call",
  description:
    "Book a free 15-minute call with Booyaa to scope a website or lead-capture project for your local business.",
  alternates: {
    canonical: "/quote",
  },
};

export default function QuotePage() {
  return <QuoteContent />;
}
