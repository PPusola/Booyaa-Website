/**
 * Meta Pixel event reporting. Mirrors lib/gtag.ts: every function is a no-op
 * until the pixel loads (see components/Analytics.tsx) and
 * NEXT_PUBLIC_META_PIXEL_ID is set, so it is always safe to call. Session
 * dedup for lead events is handled centrally in lib/gtag.ts's
 * reportLeadConversion, the single call site both GA4/Ads and Meta report
 * through, so it isn't duplicated here.
 */
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

type FbqFn = (...args: unknown[]) => void;

/**
 * Returns a usable fbq function. Meta's base snippet (Analytics.tsx) defines
 * window.fbq as a queueing stub synchronously, before the external pixel
 * script finishes loading, so this is normally available immediately. We
 * still fall back to a local queue, mirroring gtag()'s defensive pattern, in
 * case this is ever called before Analytics.tsx has mounted.
 */
function fbq(): FbqFn | null {
  if (typeof window === "undefined" || !PIXEL_ID) return null;
  const w = window as unknown as { fbq?: FbqFn; _fbqBackupQueue?: unknown[][] };
  if (typeof w.fbq === "function") return w.fbq;
  w._fbqBackupQueue = w._fbqBackupQueue || [];
  return (...args: unknown[]) => {
    w._fbqBackupQueue!.push(args);
  };
}

/** Sends a Meta PageView for a client-side route change (see RouteAnalytics). */
export function metaPageview() {
  const send = fbq();
  if (!send) return;
  send("track", "PageView");
}

/**
 * Sends a Meta Lead event tagged with a stable eventID, so a future
 * server-side Conversions API event for the same lead can be deduplicated
 * against this browser-side one.
 */
export function sendMetaLead(context: string, eventID: string) {
  const send = fbq();
  if (!send) return;
  send("track", "Lead", { content_name: context }, { eventID });
}
