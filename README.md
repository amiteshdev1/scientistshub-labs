# ScientistsHub Labs - Monorepo

ScientistsHub Labs is a cutting-edge research and product engineering studio. This repository contains the source code for our main web platform, organized as a monorepo using [Turborepo](https://turbo.build/).

> **API:** All form submissions and data requests go to the external API at
> `https://api.scientistshub.com`. There is no backend application in this repo.

## 🏗️ Architecture

```
scientistshub-labs/
├── apps/
│   └── frontend/          # Next.js 15 web application
├── packages/
│   ├── eslint-config/     # Shared ESLint configurations
│   └── typescript-config/ # Shared tsconfig files
├── package.json           # Root scripts
└── turbo.json             # Turborepo pipeline
```

## 🚀 Features

- **Monorepo Architecture** — Fast, incremental builds with Turborepo.
- **Next.js 15 Frontend** — App Router, Server Components, dynamic routing.
- **External API Integration** — Contact and quote forms POST to `api.scientistshub.com`.
- **Type Safety** — Full TypeScript throughout.
- **Modern Styling** — Tailwind CSS with custom design system and dark mode.
- **Performance** — Optimised builds, image lazy-loading, static assets.

## 🛠️ Tech Stack

### Frontend (`apps/frontend`)

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4, Framer Motion |
| State | React Context (Theme, Auth) |
| Forms | Native fetch + AbortController |

### Tooling

| Tool | Purpose |
|---|---|
| Turborepo | Monorepo build orchestration |
| npm workspaces | Package management |
| ESLint | Linting |
| Prettier | Formatting |

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm 10+

### Installation

```bash
git clone https://github.com/amitesh-maurya/Scientistshub-Labs.git
cd Scientistshub-Labs
npm install
```

### Environment Setup

Create `apps/frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.scientistshub.com/api
NEXT_PUBLIC_CONTACT_API_URL=https://api.scientistshub.com/api/contact
NEXT_PUBLIC_QUOTE_API_URL=https://api.scientistshub.com/api/quote
NEXT_PUBLIC_APP_BASE_URL=http://localhost:3000
```

### Start Development Server

```bash
npm run dev       # → http://localhost:3000
```

In dev mode the Next.js rewrite in `next.config.mjs` forwards every
`/api/*` request to `http://localhost:5000/api/*` — so requests hit your
**local backend** (not production). No CORS issues, full offline capability.

---

## 🗄️ Local Backend & Database Setup

To store form data locally during development you need the **ScientistsHub API**
running alongside MongoDB.

### 1 — Start MongoDB

**Option A — Docker (recommended)**

```bash
docker run -d --name mongo-dev -p 27017:27017 mongo:7
```

**Option B — Local install**

Install [MongoDB Community Edition](https://www.mongodb.com/docs/manual/installation/),
then:

```bash
mongod --dbpath ./data/db   # or use the system service
```

### 2 — Clone & configure the API

The backend lives in a **separate repository**:

```bash
git clone https://github.com/amitesh-maurya/Scientistshub-API.git
cd Scientistshub-API
npm install
```

Create `apps/backend/.env`:

```env
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/scientistshub

# Email (optional in dev — set to skip sending)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL_TO=contact@scientistshub.com
```

> **Tip:** Leave SMTP fields blank in dev — the backend will log emails to the
> console instead of sending them.

### 3 — Start the backend

```bash
npm run dev       # starts Express on http://localhost:5000
```

Confirm it is running:

```bash
curl http://localhost:5000/api/health
# → { "status": "ok" }
```

### 4 — Start the frontend (separate terminal)

```bash
cd ../Scientistshub-Labs
npm run dev       # → http://localhost:3000
```

All form submissions now POST to `localhost:5000` and are saved to your local
MongoDB `scientistshub` database.

### 5 — Browse saved data

```bash
# Using mongosh
mongosh scientistshub
db.contacts.find().pretty()       # contact form submissions
db.quotes.find().pretty()         # quote requests
```

Or use [MongoDB Compass](https://www.mongodb.com/products/compass) and connect
to `mongodb://localhost:27017`.

## 🌐 API Reference

| Route | Method | Endpoint | Purpose |
|---|---|---|---|
| `/contact` | `POST` | `/api/contact` | Contact form |
| `/request-a-quote` | `POST` | `/api/quote` | General quote request |
| `/quote` | `POST` | `/api/quote` | Website quote (full schema) |

See `src/lib/api/quoteService.ts` for full typed request/response interfaces
and error handling (validation errors, rate limiting, timeouts).

## 📜 Available Scripts

Run from the **root directory**:

| Script | Description |
|---|---|
| `npm run dev` | Start Next.js in development mode |
| `npm run build` | Build for production |
| `npm run lint` | Lint all packages |
| `npm run format` | Format with Prettier |

## 📞 Support

For support, email support@scientistshub.com.

---

**Built with ❤️ by ScientistsHub Labs**
