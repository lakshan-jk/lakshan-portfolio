# Lakshan Kumar JK — Portfolio

Personal portfolio site built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Editing content

All copy lives in [`src/lib/data.ts`](src/lib/data.ts) — profile, experience,
projects, and skills. Components in [`src/components/`](src/components) render it.
Drop an updated résumé at `public/resume.pdf`.

> Note: `lucide-react` v1 removed brand icons, so GitHub/LinkedIn icons are
> hand-rolled in `src/components/BrandIcons.tsx`.

## Deploy

Deploy to [Vercel](https://vercel.com) — zero config. Update `metadataBase`
in `src/app/layout.tsx` to your final domain first.

# lakshan-portfolio
