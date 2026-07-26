"use client";

import { useEffect } from "react";
import { reportLeadConversion } from "@/lib/gtag";

/**
 * Fires a single lead conversion when mounted. Dropped onto conversion
 * landing pages (e.g. /quote/received) so the quote flow reports to GA4 and
 * Google Ads. No-op until the tracking env vars are configured.
 */
export function ConversionPing({ context }: { context: string }) {
  useEffect(() => {
    reportLeadConversion(context);
  }, [context]);

  return null;
}
