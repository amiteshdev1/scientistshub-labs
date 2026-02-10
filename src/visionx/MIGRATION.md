# VisionX Migration Guide

## Overview

This guide explains how to migrate VisionX from the embedded mode (`labs.scientistshub.com/visionx`) to a standalone subdomain (`visionx.scientistshub.com`).

## Current Architecture

### Folder Structure

```
src/
├── app/visionx/          # Next.js routing shell
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/page.tsx
│   └── projects/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── visionx/              # Isolated module (portable)
│   ├── components/
│   ├── config/
│   ├── data/
│   └── types/
```

### Key Design Decisions

1. **Isolation**: All core logic lives in `src/visionx/`, not `src/app/visionx/`
2. **Configuration**: `visionx.config.ts` controls MODE and BASE_PATH
3. **Routing**: Helper function `visionxRoute()` ensures path compatibility

## Migration Steps

### Step 1: Create New Repository

```bash
# Create new repo for VisionX
mkdir visionx-app
cd visionx-app
npx create-next-app@latest . --typescript --tailwind --app
```

### Step 2: Copy VisionX Module

```bash
# Copy the isolated module
cp -r ../scientistshub-labs/src/visionx ./src/

# Copy the routing pages
cp -r ../scientistshub-labs/src/app/visionx/* ./src/app/
```

### Step 3: Update Configuration

In `src/visionx/config/visionx.config.ts`:

```typescript
export const VISIONX_CONFIG = {
  MODE: 'standalone',  // Changed from 'embedded'
  BASE_PATH: '',       // Changed from '/visionx'
  SHOW_LABS_ATTRIBUTION: true,  // Keep attribution
  // ... rest of config
};
```

Or use environment variable:

```bash
# .env.local
NEXT_PUBLIC_VISIONX_MODE=standalone
```

### Step 4: Update Dependencies

```bash
# Install required packages
npm install lucide-react
```

### Step 5: Configure Subdomain

Update DNS and deployment:

```
# Vercel/Netlify
Domain: visionx.scientistshub.com
Build Command: npm run build
Output Directory: .next
```

### Step 6: Update Links

All internal links will automatically work because they use `visionxRoute()` helper.

## Verification Checklist

- [ ] All routes work without `/visionx` prefix
- [ ] Navigation links are correct
- [ ] Footer attribution still shows Labs connection
- [ ] No broken imports or dependencies
- [ ] SEO metadata is correct
- [ ] Dark theme is consistent

## Rollback Strategy

If needed, revert by:

1. Setting `MODE` back to `'embedded'`
2. Redeploying to Labs codebase

## Benefits of This Architecture

### ✅ Clean Separation

- VisionX code is self-contained
- No tight coupling with Labs

### ✅ Easy Migration

- Copy `src/visionx/` to new repo
- Update one config file
- Deploy

### ✅ Maintainability

- Changes to VisionX don't affect Labs
- Can develop independently

### ✅ Future-Proof

- Can add more modules (e.g., DataX, BioX)
- Each can be extracted similarly

## Common Issues

### Issue: Imports Break

**Solution**: Ensure all imports use `@/visionx/` alias

### Issue: Routes Don't Work

**Solution**: Verify `BASE_PATH` is set correctly in config

### Issue: Styling Conflicts

**Solution**: VisionX uses isolated dark theme, shouldn't conflict

## Next Steps After Migration

1. Set up separate CI/CD pipeline
2. Configure custom domain SSL
3. Set up analytics for VisionX
4. Create VisionX-specific documentation
5. Consider adding API routes under `/api/visionx`
