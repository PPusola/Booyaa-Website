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

type GtagFn = (...args: unknown[]) => void;

function gtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const fn = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof fn === "function" ? fn : null;
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
