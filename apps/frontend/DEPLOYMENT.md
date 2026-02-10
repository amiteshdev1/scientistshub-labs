# Deployment & Testing Checklist

## 🚀 Pre-Deployment Checklist

### ✅ Environment Configuration

- [ ] Update `.env.local` with production API URL
- [ ] Configure EmailJS credentials
- [ ] Test EmailJS with real email addresses
- [ ] Verify all environment variables are set

### ✅ Code Quality

- [ ] Run `npm run lint` and fix all errors
- [ ] Remove console.logs from production code
- [ ] Check for TODO comments
- [ ] Verify TypeScript strict mode (optional)

### ✅ Testing

- [ ] Test all 29+ pages manually
- [ ] Test contact form submission
- [ ] Test quote form submission
- [ ] Test theme switching (dark/light)
- [ ] Test responsive design on mobile
- [ ] Test all navigation links
- [ ] Test dynamic routes (blogs, products)
- [ ] Test error boundaries

### ✅ Performance Optimization

- [ ] Optimize images with next/image
- [ ] Enable image optimization in next.config.mjs
- [ ] Check bundle size
- [ ] Lazy load heavy components
- [ ] Add loading states where needed

### ✅ SEO

- [ ] Verify meta tags on all pages
- [ ] Check OpenGraph images
- [ ] Generate sitemap.xml
- [ ] Add robots.txt
- [ ] Test with Google Search Console

### ✅ Accessibility

- [ ] Run Lighthouse accessibility audit
- [ ] Check keyboard navigation
- [ ] Verify ARIA labels
- [ ] Test with screen reader
- [ ] Check color contrast ratios

---

## 🧪 Testing Guide

### Manual Testing

**1. Homepage**

- [ ] Hero section loads correctly
- [ ] Features grid displays
- [ ] CTA buttons work
- [ ] Theme toggle works

**2. Contact Form**

```
Test Data:
Name: Test User
Email: test@example.com
Subject: Test Message
Message: This is a test message
```

- [ ] Form validation works
- [ ] Loading state appears
- [ ] Success message shows
- [ ] Email is received
- [ ] Form resets after submission

**3. Quote Form**

```
Test Data:
Name: Test Client
Email: client@company.com
Phone: +1 555 123 4567
Company: Test Company
Service: Web Development
Budget: $10,000 - $25,000
Timeline: 1-3 months
Description: Test project description
```

- [ ] All fields validate
- [ ] Dropdowns work
- [ ] Loading state appears
- [ ] Success message shows
- [ ] Email is received

**4. Service Pages**

- [ ] All 17 service pages load
- [ ] Content displays correctly
- [ ] CTAs link to quote page
- [ ] Icons render properly

**5. Dynamic Routes**

- [ ] Blog posts load: `/blogs/building-scalable-web-apps-nextjs`
- [ ] Product pages load: `/products/custom-web-applications`
- [ ] 404 page shows for invalid slugs
- [ ] Metadata is correct

**6. Theme System**

- [ ] Toggle switches between dark/light
- [ ] Preference persists on refresh
- [ ] System preference is detected
- [ ] All pages respect theme

---

## 📊 Performance Optimization

### Image Optimization

**Current:** Using standard `<img>` tags
**Recommended:** Migrate to `next/image`

```tsx
// Before
<img src="/logo.png" alt="Logo" />

// After
import Image from 'next/image';
<Image src="/logo.png" alt="Logo" width={200} height={50} />
```

### Code Splitting

- ✅ Already implemented via Next.js App Router
- ✅ Each page is automatically code-split
- ✅ Dynamic imports for heavy components

### Bundle Analysis

```bash
# Install bundle analyzer
npm install @next/bundle-analyzer

# Add to next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

# Run analysis
ANALYZE=true npm run build
```

---

## 🎯 Performance Targets

### Lighthouse Scores (Target: 90+)

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Core Web Vitals

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## 🚀 Production Build

### Build Commands

```bash
# 1. Clean install
rm -rf node_modules package-lock.json
npm install

# 2. Build for production
npm run build

# 3. Test production build locally
npm start

# 4. Verify at http://localhost:3000
```

### Build Checklist

- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Bundle size is reasonable
- [ ] All pages render correctly
- [ ] Forms work in production mode

---

## 🌐 Deployment

### Vercel (Recommended)

**Step 1: Prepare Repository**

```bash
git add .
git commit -m "Production ready"
git push origin main
```

**Step 2: Deploy to Vercel**

1. Visit [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Configure:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

**Step 3: Environment Variables**
Add in Vercel dashboard:

```
NEXT_PUBLIC_API_BASE_URL=https://your-api.com/api
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID=your_template_id
```

**Step 4: Deploy**

- Click "Deploy"
- Wait for build to complete
- Visit your production URL

### Alternative Platforms

**Netlify:**

```bash
# Build command
npm run build

# Publish directory
.next
```

**AWS Amplify:**

```yaml
version: 1
frontend:
  phases:
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
```

---

## 🔍 Post-Deployment Testing

### Production Checks

- [ ] Visit production URL
- [ ] Test all forms with real emails
- [ ] Verify EmailJS works
- [ ] Check all pages load
- [ ] Test theme switching
- [ ] Verify responsive design
- [ ] Check console for errors
- [ ] Test on different browsers
- [ ] Test on mobile devices

### Monitoring

- [ ] Set up error tracking (Sentry)
- [ ] Configure analytics (Google Analytics)
- [ ] Set up uptime monitoring
- [ ] Monitor performance metrics

---

## 📈 SEO Setup

### Google Search Console

1. Add property
2. Verify ownership
3. Submit sitemap
4. Monitor indexing

### Sitemap Generation

Create `src/app/sitemap.ts`:

```typescript
export default function sitemap() {
  return [
    {
      url: 'https://scientistshub-labs.com',
      lastModified: new Date(),
    },
    {
      url: 'https://scientistshub-labs.com/about',
      lastModified: new Date(),
    },
    // Add all pages...
  ];
}
```

### Robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://scientistshub-labs.com/sitemap.xml
```

---

## ✅ Final Verification

### Pre-Launch Checklist

- [ ] All forms tested and working
- [ ] EmailJS configured and tested
- [ ] All pages accessible
- [ ] Theme system working
- [ ] Responsive on all devices
- [ ] No console errors
- [ ] Performance optimized
- [ ] SEO configured
- [ ] Analytics set up
- [ ] Error monitoring active

### Launch

- [ ] Deploy to production
- [ ] Verify production URL
- [ ] Test all critical paths
- [ ] Monitor for errors
- [ ] Celebrate! 🎉

---

**Status:** Ready for Production Deployment
**Last Updated:** 2026-02-08
