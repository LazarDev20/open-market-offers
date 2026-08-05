# Open Market Offers — lead-generation website

A production-ready Next.js site for a Southern California cash home-buying
business. Homeowners submit a short form; you get an instant text with their
details.

---

## What's in the box

- **Homepage** with hero, lead form, how-it-works, situations, testimonials, FAQ
- **6 situation pages** — `/sell/inherited-house`, `/sell/foreclosure`,
  `/sell/divorce`, `/sell/rental-property`, `/sell/relocation`, `/sell/as-is`
- **12 city pages** — `/we-buy-houses/santa-ana`, etc. (add more in one line)
- **How It Works, About, Reviews, Contact, Privacy, Terms** pages
- **Lead form** that texts you via Twilio the moment someone submits
- **SEO built in** — per-page titles/descriptions, `RealEstateAgent` +
  `FAQPage` schema, auto-generated `sitemap.xml` and `robots.txt`
- **Google Analytics 4**, optional **Google Maps** address autocomplete,
  optional **Calendly** booking link

---

## Deploy it (about 30 minutes, mostly clicking)

You'll do this once. No coding required — just a few terminal commands to push
the project to GitHub the first time, then everything else is dashboard clicks.

### Step 1 — Put the code on GitHub

1. Create a free account at [github.com](https://github.com).
2. Click **New repository**, name it `open-market-offers`, keep it Private,
   click **Create**.
3. In a terminal, inside this project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/open-market-offers.git
   git push -u origin main
   ```
   (GitHub shows you the exact `remote add` line after creating the repo.)

### Step 2 — Deploy to Vercel

1. Create a free account at [vercel.com](https://vercel.com) — sign in with
   GitHub.
2. Click **Add New → Project**, pick your `open-market-offers` repo, click
   **Import**, then **Deploy**. In ~60 seconds you'll have a live URL like
   `open-market-offers.vercel.app`.

### Step 3 — Connect your domain

1. In Vercel: your project → **Settings → Domains** → add
   `openmarketoffers.com` and `www.openmarketoffers.com`.
2. Vercel shows you the DNS records to add. Log into wherever your domain is
   registered and add those records (an A record and/or CNAME). It usually goes
   live within an hour.

### Step 4 — Turn on lead texts (Twilio)

1. Create an account at [twilio.com](https://twilio.com) and buy a phone number
   (~$1/mo). This is the number your lead texts come **from**.
2. From the Twilio console, copy your **Account SID** and **Auth Token**.
3. In Vercel: project → **Settings → Environment Variables** → add each of the
   values from `.env.example` (see the table below). The four `TWILIO_*` /
   `LEAD_NOTIFY_TO` values are what make texting work. `LEAD_NOTIFY_TO` is
   **your** cell phone.
4. Redeploy (Vercel → Deployments → ⋯ → Redeploy) so the new variables take
   effect.

> Until Twilio is configured, the form still works and confirms to visitors —
> leads are written to the server logs so nothing is lost. Add Twilio whenever
> you're ready and they'll start texting.

### Step 5 — Analytics & extras (optional)

- **Google Analytics:** create a GA4 property, copy the `G-XXXXXXXXXX` ID into
  `NEXT_PUBLIC_GA_ID`.
- **Address autocomplete:** get a Google Maps JavaScript API key, put it in
  `NEXT_PUBLIC_GOOGLE_MAPS_KEY`. Leave blank for a normal text field.
- **Calendly:** paste your booking link into `NEXT_PUBLIC_CALENDLY_URL`.

---

## Environment variables

| Variable | What it's for | Required? |
|---|---|---|
| `TWILIO_ACCOUNT_SID` | Twilio account ID | For texts |
| `TWILIO_AUTH_TOKEN` | Twilio secret token | For texts |
| `TWILIO_FROM` | Your Twilio phone number (+1…) | For texts |
| `LEAD_NOTIFY_TO` | Your cell — where leads arrive (+1…) | For texts |
| `NEXT_PUBLIC_SITE_URL` | `https://openmarketoffers.com` | Yes (SEO) |
| `NEXT_PUBLIC_PHONE` | Display phone, e.g. `(949) 555-1234` | Yes |
| `NEXT_PUBLIC_PHONE_E164` | Dial phone, e.g. `+19495551234` | Yes |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID | Optional |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | Maps autocomplete | Optional |
| `NEXT_PUBLIC_CALENDLY_URL` | Booking link | Optional |

---

## Everyday edits

**Add a city page** — open `lib/site.ts`, add one line to `CITIES`:
```ts
{ slug: "mission-viejo", name: "Mission Viejo" },
```
Commit and push — Vercel auto-deploys and the new SEO page appears at
`/we-buy-houses/mission-viejo`.

**Edit testimonials** — open `components/Sections.tsx`, find the `quotes` array
in `Testimonials()`, replace with your real reviews.

**Change the phone number** — set `NEXT_PUBLIC_PHONE` and
`NEXT_PUBLIC_PHONE_E164` in Vercel's environment variables.

**Edit situation copy** — open `lib/site.ts`, edit the `SITUATIONS` array.

**Change colors** — open `tailwind.config.ts`, edit the `colors` block.

---

## Run it on your own computer (optional)

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # open http://localhost:3000
```

---

## Before you launch — checklist

- [ ] Replace placeholder phone number
- [ ] Replace placeholder testimonials with real, verified reviews
- [ ] Have a lawyer review the Privacy Policy and Terms pages
- [ ] Confirm a test form submission texts your phone
- [ ] Submit your sitemap (`/sitemap.xml`) in Google Search Console
