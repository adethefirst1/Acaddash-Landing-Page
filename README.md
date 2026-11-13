# Acaddash Website

Official marketing website for **Acaddash**, the mobile academic companion built for Nigerian university students. Acaddash helps undergraduates calculate their CGPA accurately, simulate the exact grades needed to hit their target degree classification, plan semesters within standard credit-unit limits, and get instant answers to degree-planning questions.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Motion](https://motion.dev/)
- **Typography**: Space Grotesk (headings) & Inter (body) via `next/font/google`
- **Utility**: `clsx`

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Default / Fallback |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used for OpenGraph, Twitter cards, metadata, and sitemaps. | `http://localhost:3000` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Support email displayed on the contact page and mailto links. | `hello@example.com` |
| `NEXT_PUBLIC_APP_URL` | Target URL for "Get the app" CTA buttons (app store listing or `#download`). | `#download` |

### 3. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build & Verification

```bash
# Type check and lint
npm run lint
npx tsc --noEmit

# Build production bundle
npm run build

# Start production server
npm run start
```

## Deploying on Vercel

1. Import the repository into [Vercel](https://vercel.com/).
2. Framework preset will automatically detect **Next.js**.
3. In **Settings > Environment Variables**, configure:
   - `NEXT_PUBLIC_SITE_URL`: Your production domain (e.g., `https://acaddash.com`).
   - `NEXT_PUBLIC_CONTACT_EMAIL`: Your official support email.
   - `NEXT_PUBLIC_APP_URL`: App Store / Play Store download link.
4. Deploy. Vercel automatically runs `npm run build` and optimizes static assets and edge routes.
