export const CONTACT_EMAIL = "priyanshu@booyaa.net";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Website inquiry")}`;

// The default label for every quote button on the site, so the wording stays
// consistent and can be changed in one place.
export const QUOTE_CTA = "Get a free quote";

// Trust slots. Each section on the homepage stays hidden until it has real
// content here. Only add genuine client quotes and measured results.
export type Testimonial = { quote: string; name: string; business: string };
export const TESTIMONIALS: Testimonial[] = [];

// A measured outcome, e.g. { value: "3x", label: "more calls in the first month", client: "Safe Home Restoration" }.
export const HEADLINE_RESULT: { value: string; label: string; client: string } | null = null;

// Shown as "Websites from {STARTING_PRICE}" when set, e.g. "$1,500".
export const STARTING_PRICE: string | null = null;
