# Hero Dashboard System Documentation

## Overview

A premium, CSS-only hero section system with interactive dashboard previews. Built for modern SaaS/Agency websites using React, Next.js, TypeScript, and Tailwind CSS.

**Key Features:**
- ✅ Pure CSS animations (no Framer Motion, GSAP, or Lottie)
- ✅ 4 category-specific dashboard designs
- ✅ Glassmorphism & 3D transforms
- ✅ Full dark/light theme support
- ✅ Accessibility compliant (prefers-reduced-motion)
- ✅ Mobile responsive

---

## Architecture

### Components Structure

```
src/Components/
├── HeroWithDashboard.tsx          # Base hero wrapper component
└── dashboards/
    ├── DevDashboard.tsx            # Development/Tech dashboard
    ├── DesignDashboard.tsx         # Design/Creative dashboard
    ├── MarketingDashboard.tsx      # Analytics/Marketing dashboard
    └── SoftwareDashboard.tsx       # System/Infrastructure dashboard
```

### CSS System

All animations and utilities are defined in `src/app/theme.css`:

**Hero Color Variables:**
- `--hero-primary`: #2d65bc
- `--hero-hover`: #1e4a8e
- `--hero-border`: rgba(45, 101, 188, 0.3)

**Animation Keyframes:**
- `fade-in` - Simple opacity fade
- `fade-scale` - Fade in with subtle scale
- `slide-up` - Fade in with upward motion
- `micro-bounce` - Subtle bounce on hover
- `soft-pulse` - Gentle opacity pulse
- `loading-bar` - Progress bar animation
- `gradient-x` - Horizontal gradient movement
- `cursor-blink` - Blinking cursor effect

**Utility Classes:**
- `.animate-fade-in` - Apply fade-in animation
- `.animate-fade-scale` - Apply fade-scale animation
- `.animate-slide-up` - Apply slide-up animation
- `.animate-slide-up-delay-{100|200|300}` - Slide-up with stagger delay
- `.micro-bounce-hover` - Bounce on hover
- `.soft-pulse` - Pulsing animation
- `.animate-loading` - Progress bar animation
- `.animate-gradient-x` - Animated gradient background

**3D & Glass Effects:**
- `.perspective` - Parent element for 3D transforms
- `.card-3d` - Enables 3D transforms on child
- `.rotate-y-12` - Default 12deg rotation
- `.glass-card` - Glassmorphism effect (theme-aware)
- `.glass-card-dark` - Dark glass effect with deeper blur

---

## Implementation Guide

### Step 1: Choose Your Dashboard

Match your service category to the appropriate dashboard:

| Service Category | Dashboard Component | Best For |
|-----------------|-------------------|----------|
| Development, App Dev, APIs | `DevDashboard` | Code editor, terminal, git, deploy features |
| Design, UI/UX, Creative | `DesignDashboard` | Canvas, layers, components, export |
| Marketing, SEO, Content | `MarketingDashboard` | Analytics, traffic, conversions, SEO |
| Software, Systems, Infrastructure | `SoftwareDashboard` | Architecture, scalability, security, monitoring |

### Step 2: Import Components

Add these imports to your page:

```tsx
import HeroWithDashboard from '@/Components/HeroWithDashboard';
import DevDashboard from '@/Components/dashboards/DevDashboard';
// or DesignDashboard, MarketingDashboard, SoftwareDashboard
```

### Step 3: Replace Existing Hero

**Before:**
```tsx
<section className="py-20 sm:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <YourIcon className="w-16 h-16 text-[#0774E8] mx-auto mb-6" />
      <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
        Your Service Title
      </h1>
      <p className="text-lg sm:text-xl theme-text-secondary">
        Your service description
      </p>
    </div>
  </div>
</section>
```

**After:**
```tsx
<HeroWithDashboard
  subtitle="Service Category"
  title="Your Service Title"
  description="Compelling description that explains your service value proposition. Keep it between 20-40 words for optimal readability."
  primaryCTA={{ text: 'Get Started', href: '/request-a-quote' }}
  secondaryCTA={{ text: 'Learn More', href: '/about' }}
  dashboardComponent={<DevDashboard />}
/>
```

### Step 4: Customize Content

#### Props Reference

```typescript
interface HeroWithDashboardProps {
  title: string;              // Main headline (required)
  subtitle?: string;          // Badge text above title (optional)
  description: string;        // Paragraph below title (required)
  primaryCTA: {              // Main action button (required)
    text: string;
    href: string;
  };
  secondaryCTA?: {           // Secondary button (optional)
    text: string;
    href: string;
  };
  dashboardComponent: ReactNode; // Dashboard to display (required)
}
```

#### Content Guidelines

**Title:**
- Keep between 3-7 words
- Use action words when possible
- Example: "Android App Development", "Custom Web Solutions"

**Subtitle:**
- 1-3 words describing category
- Examples: "Mobile Development", "Design Excellence", "Digital Marketing"

**Description:**
- 20-40 words explaining value
- Focus on benefits, not features
- End with what user achieves
- Example: "Build powerful, high-performance Android applications using Kotlin and Java. Reach billions of users with native Android apps optimized for the Google Play Store."

**CTA Text:**
- Primary: Action-oriented (Start Your Project, Get Started, Begin Now)
- Secondary: Information-seeking (View Portfolio, Learn More, See Examples)

### Step 5: Test & Verify

✅ **Desktop (1920x1080):**
- Hero section displays in 2 columns
- Dashboard on right performs 3D rotation on hover
- Content animates in with stagger effect

✅ **Tablet (768px):**
- Columns stack vertically
- Dashboard still interactive
- Animations remain smooth

✅ **Mobile (375px):**
- Single column layout
- Dashboard scales appropriately
- Touch interactions work

✅ **Dark/Light Theme:**
- Toggle theme switcher
- Dashboard adapts colors
- Glassmorphism works in both modes

✅ **Accessibility:**
- Open DevTools > Rendering > "Emulate CSS prefers-reduced-motion"
- Animations should stop/dramatically slow down
- 3D effects become static

---

## Example Implementations

### Example 1: Development Service

```tsx
'use client';

import Link from 'next/link';
import { Code, Zap, Shield } from 'lucide-react';
import HeroWithDashboard from '@/Components/HeroWithDashboard';
import DevDashboard from '@/Components/dashboards/DevDashboard';

export default function APIIntegrationPage() {
  const features = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Custom APIs',
      description: 'Build RESTful and GraphQL APIs'
    },
    // ... more features
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <HeroWithDashboard
        subtitle="Integration Services"
        title="API Integration & Development"
        description="Connect your systems seamlessly with custom APIs. We build secure, scalable integrations that streamline your workflows and boost productivity."
        primaryCTA={{ text: 'Start Integration', href: '/request-a-quote' }}
        secondaryCTA={{ text: 'View Case Studies', href: '/blogs' }}
        dashboardComponent={<DevDashboard />}
      />

      {/* Your existing feature sections below... */}
      <section className="py-16 theme-bg-secondary">
        {/* Features grid */}
      </section>
    </div>
  );
}
```

### Example 2: Design Service

```tsx
'use client';

import HeroWithDashboard from '@/Components/HeroWithDashboard';
import DesignDashboard from '@/Components/dashboards/DesignDashboard';

export default function GraphicsDesignPage() {
  return (
    <div className="min-h-screen theme-bg-primary">
      <HeroWithDashboard
        subtitle="Creative Services"
        title="Graphics Design"
        description="Create stunning visual content that captures attention and communicates your brand message. From logos to marketing materials, we deliver pixel-perfect designs."
        primaryCTA={{ text: 'Get a Quote', href: '/request-a-quote' }}
        secondaryCTA={{ text: 'View Portfolio', href: '/products' }}
        dashboardComponent={<DesignDashboard />}
      />
      {/* Rest of page... */}
    </div>
  );
}
```

### Example 3: Marketing Service

```tsx
'use client';

import HeroWithDashboard from '@/Components/HeroWithDashboard';
import MarketingDashboard from '@/Components/dashboards/MarketingDashboard';

export default function SEOServicesPage() {
  return (
    <div className="min-h-screen theme-bg-primary">
      <HeroWithDashboard
        subtitle="Digital Marketing"
        title="Search Engine Optimization"
        description="Rank higher on Google and drive organic traffic to your website. Our data-driven SEO strategies deliver measurable results and sustainable growth."
        primaryCTA={{ text: 'Boost Rankings', href: '/request-a-quote' }}
        secondaryCTA={{ text: 'Free SEO Audit', href: '/contacts' }}
        dashboardComponent={<MarketingDashboard />}
      />
      {/* Rest of page... */}
    </div>
  );
}
```

### Example 4: Software Solution

```tsx
'use client';

import HeroWithDashboard from '@/Components/HeroWithDashboard';
import SoftwareDashboard from '@/Components/dashboards/SoftwareDashboard';

export default function HospitalManagementPage() {
  return (
    <div className="min-h-screen theme-bg-primary">
      <HeroWithDashboard
        subtitle="Healthcare Solutions"
        title="Hospital Management System"
        description="Streamline hospital operations with our comprehensive management platform. From patient records to billing, manage everything in one secure, HIPAA-compliant system."
        primaryCTA={{ text: 'Schedule Demo', href: '/request-a-quote' }}
        secondaryCTA={{ text: 'Features Overview', href: '#features' }}
        dashboardComponent={<SoftwareDashboard />}
      />
      {/* Rest of page... */}
    </div>
  );
}
```

---

## Dashboard Component Details

### DevDashboard

**Tabs:**
1. **Code Editor** - Syntax-highlighted code with blinking cursor
2. **Terminal** - Command line with loading states
3. **Git** - Branch visualization and commit history
4. **Deploy** - Performance metrics and deployment status

**Best For:** Web development, app development, API services, custom software

### DesignDashboard

**Tabs:**
1. **Canvas** - Device mockups (mobile, tablet, desktop)
2. **Layers** - Hierarchical component structure
3. **Components** - UI component library grid
4. **Export** - Format and resolution options

**Best For:** Web design, UI/UX, graphics design, branding

### MarketingDashboard

**Tabs:**
1. **Overview** - Performance score and key metrics
2. **Traffic** - Bar chart visualization of weekly traffic
3. **Conversions** - Funnel visualization with percentages
4. **SEO** - Keyword rankings and SEO health score

**Best For:** SEO, content marketing, digital marketing, analytics

### SoftwareDashboard

**Tabs:**
1. **Architecture** - System flowchart with connected components
2. **Scalability** - Server load distribution visualization
3. **Security** - Security features with pulsing shield icon
4. **Monitoring** - Live system health metrics

**Best For:** Software solutions, cloud services, enterprise systems

---

## Customization

### Changing Colors

The system uses isolated color variables for the #2d65bc hero brand color while maintaining the existing #0774E8 site brand.

To modify hero colors, edit `src/app/theme.css`:

```css
:root {
  --hero-primary: #2d65bc;      /* Change main hero color */
  --hero-hover: #1e4a8e;        /* Darker shade for hovers */  
  --hero-border: rgba(45, 101, 188, 0.3); /* Border accent */
}
```

### Adjusting Animations

All animation timings can be modified in `theme.css`:

```css
.animate-fade-scale {
  animation: fade-scale 0.6s ease-out forwards; /* Change duration */
}

.card-3d {
  transition: transform 0.7s ease-out; /* Adjust 3D transition speed */
}
```

To disable 3D rotation:
```css
.card-3d:hover {
  transform: rotateY(0deg) !important; /* Keep flat */
}
```

### Creating Custom Dashboards

If the 4 provided dashboards don't fit your needs:

1. Copy an existing dashboard component
2. Modify the tab content sections
3. Keep the same structure (header, sidebar, content area)
4. Maintain glassmorphism and animation classes
5. Test in both themes

**Template Structure:**
```tsx
'use client';
import { useState } from 'react';
import { Icon1, Icon2, Icon3, Icon4 } from 'lucide-react';

export default function CustomDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { id: 0, icon: Icon1, label: 'Tab1', ariaLabel: 'Description' },
    // ... more tabs
  ];

  return (
    <div className="w-full max-w-[600px] h-[400px] mx-auto glass-card-dark rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-black/20">
        {/* Header content */}
      </div>

      <div className="flex h-[calc(100%-3.5rem)]">
        {/* Sidebar with tabs */}
        <div className="w-20 border-r border-white/10 bg-black/10 flex flex-col items-center py-6 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`dashboard-tab ...`}
            >
              <tab.icon className="w-5 h-5" />
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="flex-1 p-6 overflow-hidden">
          <div key={activeTab} className="dashboard-content h-full">
            {activeTab === 0 && <Tab1Content />}
            {/* ... more tabs */}
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Troubleshooting

### Issue: Animations not working

**Solution:**
- Check if `theme.css` is imported in `src/app/layout.tsx`
- Verify CSS class names match exactly (case-sensitive)
- Clear browser cache and rebuild: `npm run build`

### Issue: 3D effect not visible

**Solution:**
- Ensure parent has `.perspective` class
- Child must have `.card-3d` class
- Check if card rotation is being overridden by other styles

### Issue: Dashboard not responsive

**Solution:**
- Dashboard has fixed max-width of 600px and height of 400px
- On mobile, these dimensions scale down naturally
- Consider adjusting in media queries if needed

### Issue: Theme colors not applying

**Solution:**
- Dashboard uses hero-specific variables (`--hero-primary`)
- Theme switcher affects `.theme-light` and `.theme-dark` classes
- Check if `ThemeProvider` is wrapping your app in `layout.tsx`

### Issue: TypeScript errors

**Solution:**
- Ensure all imports use correct absolute paths with `@/`
- Check if `lucide-react` is installed: `npm install lucide-react`
- Verify `tsconfig.json` has proper path mapping for `@/*`

---

## Performance Optimization

### Best Practices

1. **CSS-only animations** - No JavaScript runtime overhead
2. **GPU-accelerated** - Uses `transform` and `opacity` only
3. **Lazy loading** - Dashboards render on mount, no heavy computations
4. **No external libraries** - Zero animation library dependencies
5. **Optimized for Core Web Vitals** - Minimal layout shift, fast LCP

### Lighthouse Scores

Expected scores with hero system:
- **Performance:** 90-100
- **Accessibility:** 95-100  
- **Best Practices:** 95-100
- **SEO:** 95-100

---

## Accessibility

### WCAG 2.1 AA Compliance

✅ **Color Contrast:** All text meets 4.5:1 ratio minimum  
✅ **Keyboard Navigation:** All interactive elements focusable  
✅ **Screen Readers:** Proper ARIA labels on all buttons and tabs  
✅ **Reduced Motion:** Respects `prefers-reduced-motion` preference  
✅ **Focus Indicators:** Visible outlines on all focusable elements

### Testing Checklist

- [ ] Tab through all dashboard tabs with keyboard only
- [ ] Verify screen reader announces tab changes
- [ ] Test with high contrast mode enabled
- [ ] Enable reduced motion and confirm animations stop
- [ ] Check color contrast with WebAIM tool

---

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full support |
| Firefox | 88+ | ✅ Full support |
| Safari | 14+ | ✅ Full support |
| Edge | 90+ | ✅ Full support |
| Mobile Safari | iOS 14+ | ✅ Full support |
| Chrome Mobile | 90+ | ✅ Full support |

**CSS Features Used:**
- CSS Grid & Flexbox
- CSS Custom Properties (variables)
- CSS Transforms (3D)
- Backdrop-filter (blur)
- CSS Animations & Keyframes

---

## Migration Checklist

### For Remaining 22 Service Pages

Use this checklist for each page migration:

- [ ] **Step 1:** Identify service category (Dev/Design/Marketing/Software)
- [ ] **Step 2:** Add imports for `HeroWithDashboard` and appropriate dashboard
- [ ] **Step 3:** Replace existing hero section with new component
- [ ] **Step 4:** Customize title, subtitle, and description
- [ ] **Step 5:** Update CTA button text and links
- [ ] **Step 6:** Test on desktop, tablet, and mobile
- [ ] **Step 7:** Verify dark/light theme switching
- [ ] **Step 8:** Check animations with reduced motion
- [ ] **Step 9:** Run accessibility audit
- [ ] **Step 10:** Deploy and monitor Core Web Vitals

---

## FAQ

**Q: Can I use multiple dashboards on the same page?**  
A: Yes, but only recommended for comparison pages. Each dashboard is self-contained.

**Q: How do I change the dashboard dimensions?**  
A: Edit the dashboard component's root `div` className. Default is `max-w-[600px] h-[400px]`.

**Q: Can I add more than 4 tabs to a dashboard?**  
A: Yes, add to the `tabs` array. But keep 4-5 tabs max for UX.

**Q: Will this work with Server Components?**  
A: No, dashboards use `useState` for tab switching. Must use `'use client'` directive.

**Q: How do I export this for Storybook?**  
A: Each component is self-contained. Import and render with sample props.

**Q: Can I animate dashboard content with Intersection Observer?**  
A: Not needed - animations trigger on mount. For scroll animations, use CSS only with `animation-delay`.

---

## Support & Contribution

**Created:** February 2025  
**Last Updated:** February 2025  
**Version:** 1.0.0

For questions or improvements:
1. Check this documentation first
2. Review implemented examples in:
   - `src/app/services/development/android-app-development/`
   - `src/app/services/design/web-design/`
   - `src/app/services/digital-marketing/content-marketing/`
   - `src/app/services/software/workflow-automation/`
   - `src/app/services/development/custom-web-solution/`

---

## Quick Reference

### Component Props

```tsx
<HeroWithDashboard
  subtitle="string (optional)"
  title="string (required)"
  description="string (required)"
  primaryCTA={{ text: string, href: string }} (required)
  secondaryCTA={{ text: string, href: string }} (optional)
  dashboardComponent={<Component />} (required)
/>
```

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.animate-fade-in` | Fade in on load |
| `.animate-fade-scale` | Fade + scale up |
| `.animate-slide-up` | Slide up from below |
| `.animate-slide-up-delay-{100\|200\|300}` | Staggered slide-up |
| `.micro-bounce-hover` | Bounce on hover |
| `.soft-pulse` | Gentle pulse animation |
| `.perspective` | Enable 3D transforms |
| `.card-3d` | Apply 3D effect |
| `.rotate-y-12` | 12deg Y-axis rotation |
| `.glass-card` | Glassmorphism effect |
| `.glass-card-dark` | Dark glass variant |
| `.dashboard-tab` | Tab button styling |
| `.dashboard-content` | Tab content wrapper |

### Color Variables

```css
--hero-primary: #2d65bc
--hero-hover: #1e4a8e
--hero-border: rgba(45, 101, 188, 0.3)
--hero-card-dark: rgba(30, 30, 50, 0.85)
--hero-card-light: rgba(255, 255, 255, 0.85)
```

---

**End of Documentation**
