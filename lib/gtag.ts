/**
 * Conversion + event reporting for GA4 and Google Ads. Every function is a
 * no-op until gtag.js has loaded (see components/Analytics.tsx) and the
 * relevant env vars are set, so it is always safe to call.
 *
 *   NEXT_PUBLIC_GOOGLE_ADS_ID                 e.g. AW-XXXXXXXXXX
 *   NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL   the conversion action label
 *
 * The Ads ID + label together form the `send_to` target Google Ads expects:
 * `AW-XXXXXXXXXX/AbC-D_efGh`. Both come from the conversion action you create
 * in the Google Ads UI.
 */
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type GtagFn = (...args: unknown[]) => void;

/**
 * Returns a usable gtag function. If gtag.js hasn't executed yet (it loads
 * `afterInteractive`, which can lose to a page's mount effect), we fall back to
 * the standard dataLayer shim so the call is queued and flushed the moment the
 * library loads, instead of being silently dropped.
 */
function gtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { gtag?: GtagFn; dataLayer?: unknown[] };
  if (typeof w.gtag === "function") return w.gtag;
  w.dataLayer = w.dataLayer || [];
  return (...args: unknown[]) => {
    w.dataLayer!.push(args);
  };
}

/**
 * Sends a GA4 `page_view` for a client-side (SPA) navigation. The initial hard
 * load is already counted by the `gtag('config', ...)` call in Analytics.tsx,
 * so this is only for `router.push`-style transitions (see RouteAnalytics).
 */
export function pageview(url: string) {
  const send = gtag();
  if (!send || !GA_ID) return;

  send("event", "page_view", {
    page_path: url,
    page_location: window.location.origin + url,
    page_title: document.title,
    send_to: GA_ID,
  });
}

/**
 * Fire a lead conversion. Records a GA4 `generate_lead` event and, when the
 * Google Ads env vars are present, a Google Ads conversion. `context`
 * distinguishes where the lead came from (e.g. "quote", "contact").
 */
export function reportLeadConversion(context: string) {
  const send = gtag();
  if (!send) return;

  send("event", "generate_lead", {
    event_category: "engagement",
    event_label: context,
  });

  if (ADS_ID && CONVERSION_LABEL) {
    send("event", "conversion", {
      send_to: `${ADS_ID}/${CONVERSION_LABEL}`,
    });
  }
}
