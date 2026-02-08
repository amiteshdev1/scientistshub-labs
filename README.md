# ScientistsHub Labs - Next.js Application

A modern, full-stack web application built with Next.js 15, featuring a comprehensive service portfolio, dynamic blog system, and product showcase.

## 🚀 Features

- ✨ **29+ Pages** - Complete website with services, blog, products, and more
- 🎨 **Dark/Light Theme** - Seamless theme switching with system preference detection
- 📧 **EmailJS Integration** - Functional contact and quote request forms
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
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID=your_quote_template_id
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

## 📧 EmailJS Setup

1. Visit [EmailJS](https://www.emailjs.com/) and create a free account
2. Add an email service (Gmail, Outlook, etc.)
3. Create two email templates (contact & quote)
4. Copy credentials to `.env.local`

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
- **@emailjs/browser** - Email sending
- **Axios** - HTTP client

## 📄 Pages

- 10 Core Pages (Home, About, Products, Blogs, Contact, etc.)
- 17 Service Pages (Development, Software, Marketing)
- Dynamic Routes (Blog & Product detail pages)

## 📞 Support

For support, email <contact@scientistshub-labs.com> or visit our [Support Page](http://localhost:3000/support).

---

**Built with ❤️ by ScientistsHub Labs**
