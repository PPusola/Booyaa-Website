"use client";

import Script from "next/script";

/**
 * Loads Google Analytics 4 and/or Google Ads gtag.js. Both IDs are read from
 * public env vars and the component renders nothing until at least one is set,
 * so the site ships tracking-ready and goes live the moment the IDs are added
 * in Vercel. Conversions are fired from lib/gtag.ts.
 *
 *   NEXT_PUBLIC_GA_ID          e.g. G-XXXXXXXXXX   (GA4 measurement ID)
 *   NEXT_PUBLIC_GOOGLE_ADS_ID  e.g. AW-XXXXXXXXXX  (Google Ads conversion ID)
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export function Analytics() {
  if (!GA_ID && !ADS_ID) return null;

  // gtag.js can be loaded once with any configured ID; each product is then
  // activated with its own gtag('config', ...) call below.
  const loaderId = GA_ID ?? ADS_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
          ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
