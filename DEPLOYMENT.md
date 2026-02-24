# Deployment & Testing Checklist

> **Architecture note:** This is a **frontend-only** monorepo. All API calls are
> made to the external backend at `https://api.scientistshub.com`. There is no
> local backend application in this repository.

---

## 🚀 Pre-Deployment Checklist

### ✅ Frontend (`apps/frontend`)

- [ ] **Environment Variables** — set in Vercel (or your platform) dashboard:

  | Variable | Dev (`.env.local`) | Production |
  |---|---|---|
  | `NEXT_PUBLIC_API_URL` | `/api` | `https://api.scientistshub.com/api` |
  | `NEXT_PUBLIC_CONTACT_API_URL` | `/api/contact` | `https://api.scientistshub.com/api/contact` |
  | `NEXT_PUBLIC_QUOTE_API_URL` | `/api/quote` | `https://api.scientistshub.com/api/quote` |
  | `NEXT_PUBLIC_APP_BASE_URL` | `http://localhost:3000` | `https://labs.scientistshub.com` |

- [ ] **Build Verification**: Run `npm run build` in `apps/frontend` — zero errors required.
- [ ] **Next.js config**: Confirm `next.config.mjs` rewrites target the correct production API URL.
- [ ] **Assets**: Ensure `public/` contains updated manifest, icons, `robots.txt`, and `sitemap.xml`.

---

## 🌐 API Endpoints Used

The frontend calls the following external API endpoints:

| Form | Method | Endpoint |
|---|---|---|
| Contact (`/contact`) | `POST` | `https://api.scientistshub.com/api/contact` |
| Request a Quote (`/request-a-quote`) | `POST` | `https://api.scientistshub.com/api/quote` |
| Website Quote (`/quote`) | `POST` | `https://api.scientistshub.com/api/quote` |

All endpoints expect **JSON** bodies. See `src/lib/api/quoteService.ts` for the
full typed request/response interface.

### Contact Payload
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

### Quote Payload (`/request-a-quote`)
```json
{
  "name": "string",
  "email": "string",
  "phone": "string | null",
  "company": "string | null",
  "service": "string",
  "budget": "string",
  "timeline": "string",
  "description": "string"
}
```

### Website Quote Payload (`/quote`)
```json
{
  "name": "string",
  "email": "string",
  "phone": "string | null",
  "company": "string | null",
  "websiteType": "landing_page | portfolio | business | ecommerce | blog | educational | nonprofit | saas | custom | other",
  "projectDescription": "string (20–5000 chars)",
  "features": "string[]",
  "existingWebsite": "string | null",
  "designPreferences": "string | null",
  "referenceWebsites": "string[]",
  "budget": "under_500 | 500_1000 | 1000_3000 | 3000_5000 | 5000_10000 | above_10000 | not_sure",
  "timeline": "asap | 1_2_weeks | 1_month | 2_3_months | flexible",
  "source": "scientistshub.com",
  "userAgent": "string",
  "referrer": "string | null"
}
```

---

## 🧪 Testing Guide

### Local Development

**Prerequisites:** Node.js 18+, MongoDB running on `localhost:27017`, and the
[Scientistshub-API](https://github.com/amitesh-maurya/Scientistshub-API)
backend running on `localhost:5000`.

```bash
# 1. Start MongoDB (Docker)
docker run -d --name mongo-dev -p 27017:27017 mongo:7

# 2. Start the API backend (separate repo, port 5000)
cd Scientistshub-API && npm run dev

# 3. Start the frontend
cd Scientistshub-Labs && npm run dev   # → http://localhost:3000
```

`/api/*` in `next.config.mjs` forwards all requests to
`http://localhost:5000/api/*`, so forms hit the local backend and data is saved
to MongoDB. `.env` and `.env.local` use relative `/api/*` URLs for this.

**Production** uses absolute `https://api.scientistshub.com/api/*` URLs via
`.env.production` — the proxy rewrite is never reached in production builds.

### Manual QA Checklist

1. **Pages load**: Homepage, `/contact`, `/request-a-quote`, `/quote` — no console errors.
2. **Contact form** (`/contact`): Submit a test message → success banner appears.
3. **Legacy quote form** (`/request-a-quote`): Fill all required fields → success banner.
4. **Website quote form** (`/quote`): Fill all required fields → success card with reference ID.
5. **Validation**: Leave required fields empty, submit → inline field errors shown.
6. **Error handling**: Use browser DevTools to block the API request → friendly error banner (no `alert()`).
7. **Theme**: Toggle dark/light mode — persists across page refresh.
8. **Responsive**: Test at 375 px, 768 px, and 1280 px breakpoints.

---

## 🌐 Deployment Strategy

### Recommended: Vercel

1. Import the repository into Vercel.
2. **Root Directory**: `apps/frontend`
3. **Framework Preset**: Next.js (auto-detected)
4. **Build Command**: `cd ../.. && npx turbo run build --filter=frontend`
5. **Environment Variables**: Add the four `NEXT_PUBLIC_*` variables from the table above.
6. Deploy.

### Alternative: Netlify / Cloudflare Pages

- Build command: `npm run build`
- Publish directory: `apps/frontend/.next`
- Set the same four environment variables in the platform dashboard.

---

## 🔍 Post-Deployment Verification

- [ ] Production URL loads without JS or network errors.
- [ ] `/contact` form submits successfully → success message displayed.
- [ ] `/quote` form submits successfully → reference ID shown.
- [ ] `robots.txt` accessible at `/robots.txt`.
- [ ] `sitemap.xml` accessible at `/sitemap.xml`.
- [ ] Lighthouse score ≥ 90 on Performance and Accessibility.

---

**Last Updated:** 2026-02-24
