"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { pageview } from "@/lib/gtag";

/**
 * Sends a GA4 page_view on every client-side route change. gtag's
 * `config` call only fires a page_view on the initial hard load, so SPA
 * navigations (e.g. the quote form's router.push to /quote/received) would
 * otherwise go uncounted. The first render is skipped to avoid double-counting
 * that initial load. No-op until NEXT_PUBLIC_GA_ID is configured.
 */
export function RouteAnalytics() {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    pageview(pathname);
  }, [pathname]);

  return null;
}
