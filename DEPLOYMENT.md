# Deployment — Nabuk Distributors

## Vercel project setup

1. Import the repo into Vercel (New Project → Import Git Repository).
2. Framework preset: **Next.js** (auto-detected).
3. Root directory: `nabuk-app` (if the repo root is the monorepo parent).
4. Build command: `npm run build` (default).
5. Output directory: `.next` (default).

## Environment variables

Add every variable from `.env.example` to the Vercel project's Environment Variables panel before the first deployment. Mark server-only variables as **not** exposed to the browser — do not give them `NEXT_PUBLIC_` prefixes.

| Variable | Environment |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production, Preview |
| `NEXT_PUBLIC_SUPABASE_URL` | All |
| `SUPABASE_SERVICE_ROLE_KEY` | All — **server only** |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | All |
| `TURNSTILE_SECRET_KEY` | All — **server only** |
| `UPSTASH_REDIS_REST_URL` | All |
| `UPSTASH_REDIS_REST_TOKEN` | All — **server only** |
| `RESEND_API_KEY` | All — **server only** |
| `NOTIFICATION_EMAIL` | All |

> For local development: copy `.env.example` → `.env.local` and fill in values. `.env.local` is gitignored by default.

## Database (Supabase)

Run the SQL in `database-schema.md` in the Supabase SQL Editor once, before first deployment. No migrations framework is used — the schema is hand-managed.

## Domain

1. In Vercel → Project → Settings → Domains, add the production domain (e.g. `nabukmalta.com`).
2. Point the domain's DNS to Vercel's nameservers (or add a CNAME/A record as instructed).
3. Vercel provisions TLS automatically; HSTS is set via the response header in `next.config.ts`.
4. Set `NEXT_PUBLIC_SITE_URL` to the live domain once DNS is confirmed.

## Branches → environments

| Branch | Vercel environment | URL |
|---|---|---|
| `main` | Production | `nabukmalta.com` |
| `develop` | Preview | auto-generated `.vercel.app` URL |
| Feature branches | Preview | auto-generated |

## Rollback

In Vercel → Deployments, click any previous deployment → **Promote to Production**. No build is triggered — the previous artifact is instantly promoted.

## Build checks before deploying

```bash
npm run build          # must exit 0 — no ignoreBuildErrors
npx tsc --noEmit       # must be clean
```

## Cloudflare Turnstile — test vs. production keys

Turnstile provides a set of always-pass test keys for local development:
- Site key: `1x00000000000000000000AA`
- Secret key: `1x0000000000000000000000000000000AA`

Replace both with real keys before pushing to production.
