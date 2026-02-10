# TurboRepo Migration Guide

## Overview

This guide provides step-by-step instructions for completing the TurboRepo migration and deploying VisionX as both embedded and standalone.

## Current Status

### ✅ Completed

- [x] TurboRepo infrastructure (turbo.json, root package.json)
- [x] Shared packages (typescript-config, eslint-config)
- [x] VisionX backend (Express API with 4 CV routes)
- [x] VisionX frontend structure (package.json, config files)
- [x] Environment configuration templates

### 🚧 Remaining Work

- [ ] Copy VisionX frontend code from `src/visionx/` to `apps/visionx-frontend/src/`
- [ ] Migrate Labs code from root `src/` to `apps/labs-frontend/src/`
- [ ] Install dependencies
- [ ] Test both apps
- [ ] Configure deployment

## Step-by-Step Migration

### Step 1: Backup Current Code

```bash
# Create a backup branch
git checkout -b backup-before-turbo
git add .
git commit -m "Backup before TurboRepo migration"
git checkout main
```

### Step 2: Copy VisionX Frontend Code

```bash
# Copy existing VisionX module to new frontend app
cp -r src/visionx/* apps/visionx-frontend/src/
```

**Manual Updates Needed:**

- Update imports in VisionX frontend to use relative paths
- Ensure `config/visionx.config.ts` uses environment variables
- Update API client to use `NEXT_PUBLIC_API_URL`

### Step 3: Migrate Labs Frontend

```bash
# Create labs-frontend directory structure
mkdir -p apps/labs-frontend

# Copy current Next.js app structure
cp -r src apps/labs-frontend/
cp -r public apps/labs-frontend/
cp next.config.mjs apps/labs-frontend/
cp tailwind.config.js apps/labs-frontend/
cp postcss.config.js apps/labs-frontend/
```

**Create `apps/labs-frontend/package.json`:**

```json
{
  "name": "labs-frontend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    // Copy from root package.json
  }
}
```

### Step 4: Install Dependencies

```bash
# Install Turbo at root
npm install turbo --save-dev

# Install all workspace dependencies
npm install

# Or install per workspace
cd apps/labs-frontend && npm install
cd ../visionx-frontend && npm install
cd ../visionx-backend && npm install
```

### Step 5: Update Root Package.json

Replace the current `package.json` with `package.json.new`:

```bash
mv package.json package.json.old
mv package.json.new package.json
```

### Step 6: Create Uploads Directory

```bash
mkdir -p apps/visionx-backend/uploads
```

### Step 7: Configure Environment Variables

**VisionX Backend** (`apps/visionx-backend/.env`):

```
PORT=4000
NODE_ENV=development
API_PREFIX=/api/visionx
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
UPLOAD_DIR=uploads
MAX_FILE_SIZE=10485760
```

**VisionX Frontend** (`apps/visionx-frontend/.env.local`):

```
NEXT_PUBLIC_APP_MODE=embedded
NEXT_PUBLIC_BASE_PATH=/visionx
NEXT_PUBLIC_API_URL=http://localhost:4000/api/visionx
NEXT_PUBLIC_SHOW_LABS_ATTRIBUTION=true
```

**Labs Frontend** (`apps/labs-frontend/.env.local`):

```
# Copy from current .env.local
```

### Step 8: Test Development Mode

**Terminal 1 - Run all apps:**

```bash
npm run dev
```

**Or run individually:**

```bash
# Terminal 1 - Labs
npm run dev:labs

# Terminal 2 - VisionX Frontend
cd apps/visionx-frontend && npm run dev

# Terminal 3 - VisionX Backend
cd apps/visionx-backend && npm run dev
```

**Verify:**

- Labs: <http://localhost:3000>
- VisionX Frontend: <http://localhost:3001>
- VisionX Backend: <http://localhost:4000/health>

### Step 9: Configure Next.js Rewrites (Embedded Mode)

In `apps/labs-frontend/next.config.mjs`, add rewrites to proxy VisionX:

```javascript
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/visionx/:path*',
        destination: 'http://localhost:3001/visionx/:path*',
      },
      {
        source: '/api/visionx/:path*',
        destination: 'http://localhost:4000/api/visionx/:path*',
      },
    ];
  },
};
```

## Deployment Strategies

### Embedded Mode (Current)

**Labs Frontend (Vercel):**

- Deploy `apps/labs-frontend`
- Configure rewrites to proxy VisionX frontend and backend

**VisionX Backend (Railway/Render):**

- Deploy `apps/visionx-backend`
- Set environment variables
- Expose on public URL

**VisionX Frontend:**

- Not deployed separately
- Accessed via Labs proxy at `/visionx`

### Standalone Mode (Future)

**VisionX Frontend (Vercel):**

- Deploy `apps/visionx-frontend` to new Vercel project
- Domain: `visionx.scientistshub.com`
- Environment:

  ```
  NEXT_PUBLIC_APP_MODE=standalone
  NEXT_PUBLIC_BASE_PATH=
  NEXT_PUBLIC_API_URL=https://visionx.scientistshub.com/api
  ```

**VisionX Backend:**

- Same deployment, update CORS to allow new domain

## Troubleshooting

### Issue: Module not found errors

**Solution:** Ensure all imports use correct paths after migration

### Issue: API calls failing

**Solution:** Check CORS configuration and API_URL environment variable

### Issue: Turbo build fails

**Solution:** Run `npm install` in each workspace

### Issue: Port conflicts

**Solution:** Update ports in package.json scripts

## Verification Checklist

- [ ] `npm run dev` starts all apps
- [ ] Labs frontend loads at localhost:3000
- [ ] VisionX frontend loads at localhost:3001
- [ ] VisionX backend health check works
- [ ] API calls from VisionX frontend work
- [ ] Dark theme is consistent
- [ ] Footer attribution shows correctly

## Next Steps After Migration

1. Remove old `src/` directory from root
2. Update `.gitignore` (use `.gitignore.new`)
3. Test production builds: `npm run build`
4. Deploy to staging environment
5. Test embedded mode in production
6. Document standalone deployment process
