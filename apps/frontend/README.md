# ScientistsHub Labs - Next.js Application

A modern, full-stack web application built with Next.js 15, featuring a comprehensive service portfolio, dynamic blog system, and product showcase.

## 🚀 Features

- ✨ **29+ Pages** - Complete website with services, blog, products, and more
- 🎨 **Dark/Light Theme** - Seamless theme switching with system preference detection
- 📧 **API-powered Forms** - Contact and quote forms POST to `api.scientistshub.com`
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🔍 **SEO Optimized** - Meta tags, OpenGraph, and semantic HTML
- ⚡ **Next.js 15** - Latest App Router with Server Components
- 🎯 **TypeScript** - Full type safety across the application
- 🎭 **Framer Motion** - Smooth animations and transitions
- 📊 **Dynamic Routes** - Blog posts and products with static generation

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/scientistshub-labs.git
cd scientistshub-labs
```

1. Install dependencies:

```bash
npm install
```

1. Create `.env.local` file:

```bash
cp .env.example .env.local
```

1. Configure environment variables (see Environment Variables section)

2. Run the development server:

```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```bash
# API
NEXT_PUBLIC_API_URL=https://api.scientistshub.com/api
NEXT_PUBLIC_CONTACT_API_URL=https://api.scientistshub.com/api/contact
NEXT_PUBLIC_QUOTE_API_URL=https://api.scientistshub.com/api/quote

# App
NEXT_PUBLIC_APP_BASE_URL=http://localhost:3000
```

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🌐 API Endpoints

All form submissions hit `https://api.scientistshub.com`:

| Route | Endpoint |
|---|---|
| `/contact` | `POST /api/contact` |
| `/request-a-quote` | `POST /api/quote` |
| `/quote` | `POST /api/quote` |

See `src/lib/api/quoteService.ts` for full typed interfaces.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

## 🛠️ Tech Stack

- **Next.js 15.1.6** - React framework
- **React 19.2.4** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4.1** - Styling
- **next-themes** - Theme management
- **Framer Motion** - Animations
- **native fetch** - Form submissions with AbortController timeout

## 📄 Pages

- 10 Core Pages (Home, About, Products, Blogs, Contact, etc.)
- 17 Service Pages (Development, Software, Marketing)
- Dynamic Routes (Blog & Product detail pages)

## 📞 Support

For support, email <contact@scientistshub-labs.com> or visit our [Support Page](http://localhost:3000/support).

---

**Built with ❤️ by ScientistsHub Labs**
