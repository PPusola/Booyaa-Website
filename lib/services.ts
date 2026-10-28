export type Service = {
  slug: string;
  title: string;
  summary: string;
  timeline: string;
  intro: string;
  for: string;
  signs: string[];
  included: string[];
  next: string;
  related?: { label: string; href: string; text: string };
};

export const services: Service[] = [
  {
    slug: "lead-generating-website",
    title: "Lead-generating website",
    summary: "A new site built to show up in local search and turn visitors into calls.",
    timeline: "Typical build: 2-4 weeks",
    intro:
      "A website built around one job: when someone in your area searches for what you do, they find you, trust you, and call. Every page is structured for local search and every screen keeps the next step one tap away.",
    for: "Home-services and local businesses that need their website to produce calls, not just exist.",
    signs: [
      "You don't have a website, or it's a single page nobody finds",
      "Most of your work comes from word of mouth and you want a second channel",
      "Competitors show up in Google and you don't",
    ],
    included: [
      "A page for each service you offer, written for how customers search",
      "Service-area pages for the towns and neighbourhoods you cover",
      "Click-to-call buttons that stay within reach on every phone screen",
      "Estimate and contact forms that send to your inbox and log every lead",
      "Search basics done properly: sitemap, structured data, page titles, and speed",
      "Launch on fast, reliable hosting, with you owning the domain",
    ],
    next: "Send a quick message about your business and where your customers come from today.",
    related: {
      label: "Safe Home Restoration",
      href: "/safe-home-restoration",
      text: "Six service pages, local SEO structure, a 24/7 call flow, and automatic lead logging for an Edmonton restoration company.",
    },
  },
  {
    slug: "website-rebuild",
    title: "Website rebuild",
    summary: "Your dated or slow site rebuilt to load fast, rank, and convert.",
    timeline: "Typical build: 1-3 weeks",
    intro:
      "You already have a website, but it looks dated, loads slowly, or never shows up in search. I rebuild it from the ground up on a modern stack, keep what's working, and fix what isn't.",
    for: "Businesses with an existing site that looks dated, loads slowly, or doesn't show up in search.",
    signs: [
      "Your site is slow or hard to use on a phone",
      "You can't easily update it yourself, or the person who built it is gone",
      "It gets visitors but very few of them call or fill out a form",
    ],
    included: [
      "A review of your current site: what to keep, what to cut, what's missing",
      "A fresh design that matches your business and works on every screen",
      "Your existing content moved over and tightened up",
      "Redirects from old pages so you keep the search ranking you've earned",
      "Clear calls to action and contact forms on every page",
      "A faster, more reliable build that's easy to update",
    ],
    next: "Send your current site and what's frustrating you about it.",
    related: {
      label: "Caroline Does Numbers",
      href: "/caroline-does-numbers",
      text: "A clear, trust-first service website for a bookkeeping and tax business.",
    },
  },
  {
    slug: "ai-lead-capture",
    title: "AI lead capture",
    summary: "An assistant that answers and captures leads when you can't pick up.",
    timeline: "Scoped per business",
    intro:
      "Leads don't wait until morning. An AI intake assistant on your website answers common questions, asks the right follow-ups, and collects contact details when you can't pick up, so you start the next day with a list of people to call back.",
    for: "Businesses that miss calls after hours or lose leads that come in overnight.",
    signs: [
      "You're on job sites all day and can't answer every call",
      "People ask the same questions before they book",
      "Leads that come in after hours go cold before you reply",
    ],
    included: [
      "An assistant trained on your services, service area, and common questions",
      "Qualifying questions so you know which leads are worth calling first",
      "Contact details captured and sent to you right away",
      "Every conversation logged for follow-up",
      "Clear hand-off to a phone call when the customer is ready",
    ],
    next: "Tell me how leads reach you now and where they fall through.",
    related: {
      label: "Otto",
      href: "/otto",
      text: "The local-first AI assistant project where the techniques behind this service are built and tested.",
    },
  },
  {
    slug: "ongoing-care",
    title: "Ongoing care",
    summary: "Updates, new pages, and monitoring so your site keeps working.",
    timeline: "Monthly",
    intro:
      "A website isn't finished at launch. Ongoing care keeps yours updated, adds new pages as your business grows, and watches performance and search so problems get fixed before they cost you calls.",
    for: "Businesses that want their site maintained, updated, and improving without thinking about it.",
    signs: [
      "You want changes made without learning a website builder",
      "You're adding services or service areas and need new pages",
      "You want someone keeping an eye on speed and search rankings",
    ],
    included: [
      "Content updates whenever you need them",
      "New service and area pages as your business grows",
      "Performance and search monitoring",
      "Fixes and updates handled for you",
      "A direct line to the person who built your site",
    ],
    next: "Available for sites Booyaa builds, and for existing sites after a review.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
