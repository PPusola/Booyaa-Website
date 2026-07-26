/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Permanent (308) redirects for legacy URLs from the old static HTML site
  // that used to live on this domain. Google still has /index.htm indexed and
  // it now 404s (confirmed in Search Console); point it and its .html variant
  // at the current home page so the equity carries over and the 404 clears.
  async redirects() {
    return [
      { source: "/index.htm", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
