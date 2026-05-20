# Testing — Nabuk Distributors (Level A Smoke Test)

Run this checklist before every production deployment. All items must pass.

## Setup

```bash
npm run build && npm start   # test against the production build, not dev
# → http://localhost:3000
```

## Pages

| # | URL | Check |
|---|---|---|
| 1 | `/` | Hero renders with navy background; 5 product image cards visible; features grid shows 4 icons; contact bar shows phone/location/email |
| 2 | `/who-we-are` | Navy hero with white heading; blockquote visible; 3 philosophy pillars render |
| 3 | `/about` | Navy hero; intro + stats card side-by-side; timeline shows all 5 entries; "Today" entry has teal tint |
| 4 | `/solutions` | Navy hero; 8 capability cards in a grid; each card has icon chip + title + description |
| 5 | `/partners` | Navy hero; heritage card with Globe icon; 6 partner tiles (5 with placeholder logos, 1 dashed "Additional Partners") |
| 6 | `/support` | Navy hero; 4 service cards (01–04); each card shows numbered decoration |
| 7 | `/contact` | Navy hero; consultation form renders with 4 field pairs + message textarea + Turnstile; contact details sidebar shows phone, email, location, map placeholder, reassurance card |

## Navigation

- [ ] Navbar present on every page
- [ ] Active nav link highlighted for current page
- [ ] "Request a Consultation" button links to `/contact`
- [ ] Logo links to `/`
- [ ] Mobile hamburger opens/closes nav at < 900 px viewport
- [ ] Skip-to-content link appears on keyboard focus (tab from address bar)

## Contact form

- [ ] Required field validation fires on submit with empty fields (name, email, message show errors)
- [ ] Email field rejects an invalid email format
- [ ] Turnstile widget renders and resolves
- [ ] Submit button disabled until Turnstile resolves
- [ ] Submitting with valid data (needs real env vars) shows success state ("Thank you for reaching out.")
- [ ] Supabase row inserted after successful submission
- [ ] Resend notification email received at `NOTIFICATION_EMAIL`

## Footer

- [ ] Footer appears on every page
- [ ] Copyright year correct
- [ ] Footer nav links resolve to correct pages
- [ ] Contact details show (placeholder until real values set)

## 404

- [ ] `/non-existent-page` renders the branded 404 page (not a Vercel default)
- [ ] "Back to Home" and "Contact Us" buttons work

## SEO / meta

- [ ] `<title>` on `/` is "Nabuk Distributors Malta — Veterinary Equipment & Diagnostics"
- [ ] `<title>` on inner pages includes " | Nabuk Distributors Malta" suffix
- [ ] `/sitemap.xml` returns 200 with 7 URLs
- [ ] `/robots.txt` returns 200 and allows crawling

## Cookie consent

- [ ] Banner appears on first visit (after ~0.8 s)
- [ ] "Decline" dismisses banner without loading analytics scripts
- [ ] "Accept" dismisses banner and loads Vercel Analytics
- [ ] Revisiting page does not re-show the banner
- [ ] Clearing localStorage re-shows the banner on next visit

## Security headers

Check with `curl -I https://nabukmalta.com` (or localhost equivalent):

- [ ] `X-Frame-Options: DENY`
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `Strict-Transport-Security` present
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`
