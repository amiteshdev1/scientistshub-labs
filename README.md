# ScientistsHub Labs - Monorepo

ScientistsHub Labs is a cutting-edge research and product engineering studio. This repository contains the source code for our main web platform and associated backend services, organized as a monorepo using [Turborepo](https://turbo.build/).

## 🏗️ Architecture

This project is structured as a monorepo with the following workspaces:

- **`apps/frontend`**: Next.js 15 application (App Router) for the main website.
- **`apps/backend`**: Express.js server for handling API requests (contact forms, quotes) and email services via Nodemailer.
- **`packages/`**: Shared configurations (ESLint, TypeScript, Tailwind).

## 🚀 Features

- **Monorepo Architecture** - Efficient build system with Turborepo.
- **Next.js 15 Frontend** - Server Components, App Router, and dynamic routing.
- **Express.js Backend** - Robust API handling and email dispatch services.
- **Email Integration** - Server-side email sending using Nodemailer (Gmail SMTP).
- **Type Safety** - Full TypeScript support across frontend and backend.
- **Modern Styling** - Tailwind CSS v4 with custom design system and dark mode support.
- **Performance** - Optimized builds and asset delivery.

## 🛠️ Tech Stack

### Frontend (`apps/frontend`)

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4, Framer Motion
- **State Management**: React Context (Theme, Auth)

### Backend (`apps/backend`)

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Email**: Nodemailer
- **Security**: Helmet, CORS

### Tooling

- **Build System**: Turborepo
- **Package Manager**: npm
- **Linting**: ESLint

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/scientistshub-labs.git
    cd scientistshub-labs
    ```

2. **Install dependencies (from root):**

    ```bash
    npm install
    ```

3. **Environment Setup:**

    - **Frontend**: Create `apps/frontend/.env.local`
    - **Backend**: Create `apps/backend/.env`

    *See [Environment Variables](#-environment-variables) section below for details.*

4. **Run Development Server:**

    ```bash
    npm run dev
    ```

    This command uses Turbo to start both the frontend (localhost:3000) and backend (localhost:4000) concurrently.

## 🔐 Environment Variables

### Frontend (`apps/frontend/.env.local`)

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api
NEXT_PUBLIC_APP_BASE_URL=http://localhost:3000
```

### Backend (`apps/backend/.env`)

```env
PORT=4000
NODE_ENV=development

# SMTP Configuration (Gmail Example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL_TO=contact@scientistshub.com
```

## 📜 Available Scripts

Run these commands from the **root directory**:

- `npm run dev`: Start all apps in development mode.
- `npm run build`: Build all apps for production.
- `npm run lint`: Lint all apps and packages.
- `npm run clean`: Clean up `node_modules` and `.turbo` caches.

## 📂 Project Structure

```
scientistshub-labs/
├── apps/
│   ├── frontend/       # Next.js web application
│   └── backend/        # Express.js API server
├── packages/
│   ├── eslint-config/  # Shared ESLint configurations
│   ├── typescript-config/ # Shared tsconfig.json
│   └── ui/             # (Optional) Shared UI components
├── package.json        # Root script configuration
└── turbo.json          # Turborepo pipeline configuration
```

## 📞 Support

For support, email <[EMAIL_ADDRESS]>.

---

**Built with ❤️ by ScientistsHub Labs**
