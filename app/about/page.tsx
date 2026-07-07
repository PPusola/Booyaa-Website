import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Booyaa",
  description:
    "Meet Booyaa, a web studio run by Priyanshu Pusola building websites and lead-capture tools for home-services and local businesses.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
