"use client";

import Script from "next/script";

/**
 * Loads Google Analytics 4, Google Ads gtag.js, and the Meta Pixel. Each
 * product's ID is read from public env vars and nothing renders until at
 * least one is set, so the site ships tracking-ready and goes live the
 * moment IDs are added in Vercel. Conversions are fired from lib/gtag.ts
 * (GA4 + Ads) and lib/fbq.ts (Meta).
 *
 *   NEXT_PUBLIC_GA_ID          e.g. G-XXXXXXXXXX     (GA4 measurement ID)
 *   NEXT_PUBLIC_GOOGLE_ADS_ID  e.g. AW-XXXXXXXXXX    (Google Ads conversion ID)
 *   NEXT_PUBLIC_META_PIXEL_ID  e.g. 1234567890123456 (Meta Pixel ID)
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function Analytics() {
  if (!GA_ID && !ADS_ID && !META_PIXEL_ID) return null;

  // gtag.js can be loaded once with any configured Google ID; each product is
  // then activated with its own gtag('config', ...) call below.
  const loaderId = GA_ID ?? ADS_ID;

  return (
    <>
      {(GA_ID || ADS_ID) && (
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
      )}

      {META_PIXEL_ID && (
        <>
          {/* Meta's standard base snippet: defines window.fbq as a queueing
              stub synchronously, before fbevents.js finishes loading async,
              so lib/fbq.ts can call it safely right away. */}
          <Script id="meta-pixel-init" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              alt=""
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}
    </>
  );
}
