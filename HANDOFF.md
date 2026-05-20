# Handoff — Nabuk Distributors

## Credentials to transfer to client / production owner

Before handing off, ensure the following are transferred securely (use a password manager share or encrypted note — never plain email):

| Credential | Where to find it | Notes |
|---|---|---|
| Supabase project URL + service-role key | Supabase dashboard → Project Settings → API | Never expose service-role key in browser code |
| Cloudflare Turnstile site key + secret | Cloudflare dashboard → Turnstile | One pair per domain; create separate keys for staging |
| Upstash Redis REST URL + token | Upstash dashboard → Database | |
| Resend API key | Resend dashboard → API Keys | Scope to sending only |
| Vercel project access | Vercel → Team settings → Members | Transfer ownership or add as owner |
| Domain registrar access | Client's registrar | DNS must point to Vercel |

## Placeholders to replace before launch

The following are dummy values that must be replaced with real content:

| Location | Placeholder | Replace with |
|---|---|---|
| `contact/page.tsx` line 90 | `+356 2100 0000` | Real phone number |
| `contact/page.tsx` line 98 | `info@nabukmalta.com` | Real email address |
| `Footer.tsx` | Same phone + email | Same real values |
| `contact/page.tsx` | Map embed `<div>` | Real Google Maps `<iframe>` |
| `partners/page.tsx` | All `placehold.co` logo images | Real partner logo files |
| `support/page.tsx` | `placehold.co/800x500` training photo | Real training/team photo |
| `who-we-are/page.tsx` | `placehold.co/800x500` clinic photo | Real clinic/team photo |
| `solutions/page.tsx` | All 8 `placehold.co` product images | Real product photos |
| All inner pages | PLACEHOLDER copy comments | Client-approved copy |
| `lib/seo/schema.ts` | `nabukmalta.com` URLs | Live domain if different |

## Copy that is invented (must be client-approved before launch)

The following pages contain professionally-toned but **invented** copy — clearly marked with `// PLACEHOLDER` comments in the source:

- `/who-we-are` — philosophy pillars and blockquote
- `/solutions` — all 8 capability card descriptions
- `/support` — all 4 service card descriptions and heritage note

The `/about` page is **verbatim client copy** from the original brief and does not need review.

## Post-launch support window

Agree a support window with the client. Recommended minimum: 30 days of free bug fixes after launch (not new features).

## Environment sync

After launch, always sync Vercel env vars before developing locally:

```bash
npx vercel env pull .env.local
```

## Key files for future developers

| File | Purpose |
|---|---|
| `CLAUDE.md` | Project rules for AI-assisted development |
| `.env.example` | All required environment variables |
| `database-schema.md` | Supabase table SQL |
| `DEPLOYMENT.md` | Vercel setup and deployment process |
| `TESTING.md` | Pre-deployment smoke test checklist |
| `app/actions/contact.ts` | The only backend surface (Server Action) |
| `lib/schemas/contact.ts` | Zod schema for the contact form |
