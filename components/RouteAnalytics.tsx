"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { pageview } from "@/lib/gtag";
import { metaPageview } from "@/lib/fbq";

/**
 * Sends a GA4 page_view and a Meta PageView on every client-side route
 * change. Both gtag's `config` call and Meta's base pixel init only fire a
 * page view on the initial hard load, so SPA navigations (e.g. the quote
 * form's router.push to /quote/received) would otherwise go uncounted. The
 * first render is skipped to avoid double-counting that initial load. No-op
 * per-destination until its env var is configured.
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
    metaPageview();
  }, [pathname]);

  return null;
}
