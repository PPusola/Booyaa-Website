import type { Metadata } from "next";
import QuoteContent from "./QuoteContent";

export const metadata: Metadata = {
  title: "Contact and Free Quote",
  description:
    "Get a free quote from Booyaa for a website or lead-capture project for your local business. Reply within one business day.",
  alternates: {
    canonical: "/quote",
  },
};

export default function QuotePage() {
  return <QuoteContent />;
}
