export type ClientProject = {
  name: string;
  type: string;
  href: string;
  summary: string;
  text: string;
  highlights: string[];
  image: string;
  url: string;
};

export const clientWork: ClientProject[] = [
  {
    name: "Safe Home Solution & Restoration",
    type: "Emergency restoration, Edmonton",
    href: "/safe-home-restoration",
    summary: "24/7 restoration website built for local search",
    text: "A full production website for a 24/7 restoration company: six service pages built for local search, a persistent emergency call flow, and estimate forms that log every lead automatically.",
    highlights: ["24/7 click-to-call", "Local SEO pages", "Automatic lead logging"],
    image: "/screenshots/safe-home.png",
    url: "safehomerestoration.ca",
  },
  {
    name: "Caroline Does Numbers",
    type: "Bookkeeping and tax",
    href: "/caroline-does-numbers",
    summary: "Trust-first site for a bookkeeping business",
    text: "A trust-first service website for a bookkeeping and tax business, built to explain the offer fast and make contact easy.",
    highlights: ["Clear service pages", "Trust-first copy", "Simple contact path"],
    image: "/screenshots/caroline.png",
    url: "carolinedoesnumbers.com",
  },
];

export const sideProjects = [
  {
    name: "Otto",
    type: "AI assistant",
    href: "/otto",
    text: "A local-first AI assistant with tool use, encrypted memory, voice control, and confirmation flows. It's where the after-hours lead-capture tools Booyaa offers get built and tested.",
  },
  {
    name: "MiDoid",
    type: "Shipped app",
    href: "/midoid",
    text: "A macOS and Android companion app for securely browsing and transferring files over Wi-Fi.",
  },
];
