# Nabuk Distributors — Website

B2B brochure site for Nabuk Distributors Ltd., Malta's veterinary equipment and diagnostics partner. Built on Next.js App Router, deployed on Vercel.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js App Router (TypeScript) |
| Styling | Tailwind CSS v4 + inline `<style>` for scoped CSS |
| Fonts | Manrope (body) + Archivo Black (display) via `next/font` |
| Forms | React Hook Form + Zod |
| CAPTCHA | Cloudflare Turnstile |
| Database | Supabase (PostgreSQL) |
| Email | Resend |
| Rate limiting | Upstash Redis |
| Analytics | Vercel Analytics + Speed Insights (consent-gated) |
| Hosting | Vercel |

## Pages

| Route | Purpose |
|---|---|
| `/` | Home |
| `/who-we-are` | Identity & philosophy |
| `/about` | Company history (verbatim client copy) |
| `/solutions` | Capability areas |
| `/partners` | International suppliers |
| `/support` | Services & after-sales |
| `/contact` | Consultation request form (only backend surface) |

## Local development

```bash
cp .env.example .env.local
# Fill in .env.local — see comments in that file

npm install
npm run dev
# → http://localhost:3000
```

## Environment variables

See `.env.example` for the full list. Server-only secrets have no `NEXT_PUBLIC_` prefix and are never sent to the browser. The three browser-safe vars are:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`

## Database setup

Run the SQL in `database-schema.md` in the Supabase SQL editor before first deployment. RLS is enabled; all writes go through the contact Server Action using the service-role key.

## Further reading

- `DEPLOYMENT.md` — Vercel project setup, env sync, domains, rollback
- `HANDOFF.md` — credential transfer, placeholders to replace, support window
- `database-schema.md` — Supabase table SQL + security notes
- `.env.example` — all required environment variables
