# Booyaa Website

A responsive marketing website for Booyaa built with Next.js and Tailwind CSS. It is optimized for Vercel hosting and ready to use with your custom domain `booyaa.net`.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to preview the site.

## Deploy to Vercel

1. Create a Vercel account at https://vercel.com.
2. Import this repository and select the `Booyaa` project.
3. Vercel will detect Next.js automatically.
4. Deploy the project.

## Connect your custom domain

1. In the Vercel dashboard, open your project and go to `Settings > Domains`.
2. Add `booyaa.net`.
3. Follow the DNS instructions from Vercel:
   - For root domain: add an A record to `76.76.21.21`
   - For `www`: add a CNAME record to `cname.vercel-dns.com`

## What’s included

- `app/page.tsx` — Apple-style landing page sections for your app portfolio.
- `app/globals.css` — Global theme and Tailwind setup.
- `package.json` — Next.js build scripts and dependencies.

## Customize

- Update the hero text and product details in `app/page.tsx`.
- Add your logo or screenshots into the `public/` folder.
- Add new sections for your roadmap, press, or contact information.
