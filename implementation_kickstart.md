# Jax "The Architect" Sterling - Implementation Kickstart

## Project Overview

A premium, high-conversion fitness coaching landing page built with Next.js 15, Tailwind CSS, Shadcn/UI, and Framer Motion. The design follows an "Industrial Engineering" theme with a dark-mode palette optimized for 3-5% conversion rate.

---

## Design Token System

### Color Palette

| Token | Hex Value | OKLCH Value | Usage |
|-------|-----------|-------------|-------|
| `--background` | #020617 (Slate-950) | `oklch(0.129 0.042 264.695)` | Page background |
| `--foreground` | #fafafa (Zinc-100) | `oklch(0.985 0 0)` | Primary text |
| `--card` | #0f172a (Slate-900) | `oklch(0.208 0.042 265.755)` | Card backgrounds |
| `--card-foreground` | #fafafa | `oklch(0.985 0 0)` | Card text |
| `--primary` | #3b82f6 (Blueprint Blue) | `oklch(0.623 0.214 259.815)` | CTAs, highlights, accents |
| `--primary-foreground` | #ffffff | `oklch(1 0 0)` | CTA button text |
| `--secondary` | #1e293b (Slate-800) | `oklch(0.279 0.041 260.031)` | Secondary backgrounds |
| `--secondary-foreground` | #e2e8f0 (Slate-200) | `oklch(0.929 0.013 255.508)` | Secondary text |
| `--muted` | #334155 (Slate-700) | `oklch(0.372 0.044 257.287)` | Muted backgrounds |
| `--muted-foreground` | #94a3b8 (Slate-400) | `oklch(0.704 0.04 256.788)` | Muted text |
| `--accent` | #3b82f6 | `oklch(0.623 0.214 259.815)` | Accent elements |
| `--accent-foreground` | #ffffff | `oklch(1 0 0)` | Accent text |
| `--border` | #27272a (Zinc-800) | `oklch(0.274 0.006 286.033)` | Thin borders |
| `--ring` | #3b82f6 | `oklch(0.623 0.214 259.815)` | Focus rings |

### Gradient Colors

| Name | From | To | Usage |
|------|------|-----|-------|
| Footer Gradient | #1a1a2e (Charcoal) | #16213e (Deep Blue) | Final CTA section |
| CTA Glow | #3b82f6 | transparent | Button outer glow |

### Typography

| Element | Font Family | Weight | Size |
|---------|-------------|--------|------|
| H1 (Hero) | Inter | 800 (Extra Bold) | 4rem / 64px |
| H2 (Section) | Inter | 700 (Bold) | 2.5rem / 40px |
| H3 (Card Title) | Inter | 600 (Semibold) | 1.5rem / 24px |
| Body | Inter | 400 (Regular) | 1rem / 16px |
| Metrics/Data | JetBrains Mono | 500 (Medium) | 0.875rem / 14px |
| Small/Legal | Inter | 400 | 0.75rem / 12px |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-section` | 6rem (96px) | Section vertical padding |
| `--spacing-container` | 1.5rem (24px) | Container horizontal padding |
| `--spacing-card` | 1.5rem (24px) | Card internal padding |
| `--spacing-gap` | 2rem (32px) | Grid gaps |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | 0.5rem (8px) | Standard corners |
| `--radius-lg` | 0.75rem (12px) | Large cards |
| `--radius-full` | 9999px | Pills, badges |

### Shadows & Effects

| Effect | CSS Value | Usage |
|--------|-----------|-------|
| CTA Glow | `0 0 30px rgba(59, 130, 246, 0.5)` | Primary CTA buttons |
| Card Shadow | `0 4px 6px -1px rgba(0, 0, 0, 0.1)` | Card elevation |
| Grid Pattern | 20px grid, 1px lines, #27272a color | Background texture |

---

## Page Structure

### Section Overview

| # | Section | CTA Present | Purpose |
|---|---------|-------------|---------|
| 1 | Navigation | No (Login placeholder only) | Brand presence + navigation |
| 2 | Hero | **YES - CTA #1** | Primary conversion point |
| 3 | Meet the Architect | **YES - CTA #2** | Build trust + authority |
| 4 | Build Phases (Bento Grid) | No | Explain the program |
| 5 | Proven Builds (Testimonials) | **YES - CTA #3** | Social proof |
| 6 | Pricing | **YES - CTA #4, #5, #6** | Direct sales |
| 7 | FAQ | No | Remove objections |
| 8 | Final CTA Footer | **YES - CTA #7** | Last conversion push |

**Total CTAs: 7** (All identical, all link to same Stripe checkout URL)

---

## Component Architecture

```
app/
├── layout.tsx                    # Root layout + fonts + GA4
├── page.tsx                      # Main landing page (imports sections)
├── globals.css                   # Design tokens + grid pattern
├── privacy/page.tsx              # Privacy policy placeholder
└── terms/page.tsx                # Terms of service placeholder

components/
├── sections/
│   ├── Navigation.tsx            # Logo + Login ghost button
│   ├── Hero.tsx                  # Headline + subtext + CTA #1
│   ├── Architect.tsx             # Persona section + CTA #2
│   ├── BuildPhases.tsx           # Bento grid (3 phase cards)
│   ├── ProvenBuilds.tsx          # Testimonials + CTA #3
│   ├── Pricing.tsx               # 3-tier pricing + CTAs #4-6
│   ├── FAQ.tsx                   # Accordion (5-7 items)
│   └── FinalCTA.tsx              # Gradient footer + CTA #7
├── shared/
│   ├── CTAButton.tsx             # Unified CTA component with GA tracking
│   ├── GridPattern.tsx           # CSS grid background
│   ├── SectionWrapper.tsx        # Consistent section padding
│   └── MetricLabel.tsx           # Monospace metric display
└── ui/                           # Shadcn components (existing)

lib/
├── constants.ts                  # Stripe URL, section IDs
├── analytics.ts                  # GA4 event tracking helpers
└── utils.ts                      # Existing utility functions
```

---

## CTA Button Specification

All CTA buttons MUST be identical in appearance and behavior:

```tsx
// Unified CTA Button Properties
{
  text: "Get the Blueprint",
  href: "https://checkout.stripe.com/pay/placeholder",
  className: "bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all duration-300",
  onClick: () => trackEvent('cta_clicked', { section: 'hero' | 'architect' | 'testimonials' | 'pricing_starter' | 'pricing_blueprint' | 'pricing_audit' | 'final' })
}
```

### CTA Placement Details

| Location | Section ID | Button Variant |
|----------|------------|----------------|
| Hero | `#hero` | Large (py-4 px-8), centered |
| Architect | `#architect` | Medium (py-3 px-6), aligned with content |
| Testimonials | `#testimonials` | Medium, centered below cards |
| Pricing - Starter | `#pricing` | Medium, no glow |
| Pricing - Blueprint | `#pricing` | Large with glow (featured) |
| Pricing - Audit | `#pricing` | Medium, no glow |
| Final Footer | `#final-cta` | Extra large (py-5 px-10), centered |

---

## Content Requirements

### Hero Section
- **Headline:** "RE-ENGINEER YOUR PHYSIQUE."
- **Subtext:** "The data-driven 12-week blueprint for high-performance professionals. Stop guessing, start building."

### Meet the Architect
- **Name:** Jax Sterling
- **Title:** "The Architect"
- **Bio (2-3 sentences):** Former structural engineer who applies mechanical principles to human biology. 15+ years transforming high-performance professionals using systematic, data-driven methods. Results aren't random—they're engineered.

### Build Phases (Bento Grid)
1. **Phase I: Foundation** - Mechanical Priming (Weeks 1-4)
2. **Phase II: Superstructure** - Hypertrophy & Tension (Weeks 5-8)
3. **Phase III: Optimization** - Peak Conditioning (Weeks 9-12)

### Testimonials (3 cards)
Each card includes:
- Before/After image placeholder (16:9 ratio)
- Metrics in monospace: "Body Fat: -X%", "Strength: +Y%"
- Short testimonial quote
- Name and profession

**Example Testimonials:**
1. Marcus Chen, Tech Executive - "Body Fat: -8.4%, Strength: +22%"
2. Sarah Mitchell, Investment Banker - "Body Fat: -12%, Lean Mass: +8lbs"
3. David Park, Startup Founder - "Body Fat: -6%, Energy: +300%"

### Pricing Tiers
| Tier | Price | Badge | Border |
|------|-------|-------|--------|
| Starter | $99 | None | Default |
| The Blueprint | $199 | "RECOMMENDED" | Blueprint Blue |
| 1-on-1 Audit | $499 | "PREMIUM" | Default |

### FAQ Questions (5-7)
1. "How do 45-minute sessions work?" - Efficiency via tension and rest optimization
2. "Is a commercial gym required?" - The system is hardware-agnostic
3. "Is this for beginners?" - The blueprint scales to your current load-bearing capacity
4. "What results can I expect?" - Typical: 8-15% body fat reduction, 15-25% strength gains
5. "How much time per week?" - 3-4 sessions, 45 minutes each
6. "Is there a guarantee?" - 30-day money-back if you follow the system
7. "Do I need supplements?" - No required supplements, nutrition guidance included

### Final CTA Section
- **Headline:** "STOP GUESSING. START BUILDING."
- **Subtext:** "Join 500+ high-performance professionals who've engineered their ideal physique."

---

## Technical Implementation

### Dependencies to Install
```bash
pnpm add framer-motion @next/font
```

### Google Analytics 4 Setup
```tsx
// lib/analytics.ts
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Placeholder

export const trackEvent = (eventName: string, params?: Record<string, string>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Events to track:
// - 'page_view' (automatic)
// - 'cta_clicked' with { section: string }
// - 'faq_expanded' with { question: string }
```

### Framer Motion Animations
```tsx
// Scroll-triggered fade-in (reusable)
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// Staggered children
const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};
```

### Grid Pattern CSS
```css
.grid-pattern {
  background-image: 
    linear-gradient(to right, var(--border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--border) 1px, transparent 1px);
  background-size: 20px 20px;
}
```

---

## Development Phases

### Phase 1: Foundation (Day 1-2)
- [ ] Update globals.css with design tokens
- [ ] Configure fonts (Inter + JetBrains Mono)
- [ ] Create GridPattern component
- [ ] Create CTAButton component with GA tracking
- [ ] Create SectionWrapper component
- [ ] Set up GA4 in layout.tsx

### Phase 2: Core Sections (Day 3-5)
- [ ] Build Navigation component
- [ ] Build Hero section with CTA #1
- [ ] Build Architect section with CTA #2
- [ ] Build BuildPhases bento grid
- [ ] Build ProvenBuilds testimonials with CTA #3

### Phase 3: Conversion Sections (Day 6-8)
- [ ] Build Pricing section with CTAs #4-6
- [ ] Build FAQ accordion
- [ ] Build FinalCTA footer with CTA #7
- [ ] Generate before/after images (AI)

### Phase 4: Polish (Day 9-10)
- [ ] Add Framer Motion animations
- [ ] Create Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Lighthouse optimization
- [ ] Browser testing (Chrome, Safari)
- [ ] Deploy to Vercel

---

## File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `CTAButton.tsx` |
| Sections | PascalCase | `Hero.tsx` |
| Utilities | camelCase | `analytics.ts` |
| Styles | kebab-case | `globals.css` |
| Pages | lowercase | `page.tsx` |

---

## Accessibility Checklist (WCAG AA)

- [ ] Color contrast ratio 4.5:1 minimum for text
- [ ] Color contrast ratio 3:1 for large text and UI components
- [ ] All images have alt text
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus states visible on all buttons/links
- [ ] Screen reader labels on icons
- [ ] Semantic HTML structure (header, main, footer, section)
- [ ] Skip to main content link

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.5s |

---

## Stripe Checkout URLs

For the prototype, all CTAs link to a placeholder URL:

```typescript
// lib/constants.ts
export const STRIPE_CHECKOUT_URL = 'https://checkout.stripe.com/pay/placeholder';

// With UTM tracking for GA4:
export const getCheckoutUrl = (section: string) => 
  `${STRIPE_CHECKOUT_URL}?utm_source=landing&utm_medium=cta&utm_campaign=${section}`;
```

---

## Post-Launch Checklist

- [ ] Verify all 7 CTAs link to correct Stripe URL
- [ ] Confirm GA4 tracking is firing on CTA clicks
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Verify Lighthouse scores meet targets
- [ ] Check all images load correctly
- [ ] Confirm animations don't cause layout shift
- [ ] Test FAQ accordion functionality
- [ ] Verify Privacy/Terms pages are accessible

---

## Notes

- **Single CTA Philosophy:** All buttons are identical in appearance and destination
- **Mobile-First:** Design for mobile, enhance for desktop
- **Dark Mode Only:** No light mode toggle needed
- **No Auth:** Login button is placeholder only
- **No Forms:** Only external Stripe checkout links
- **Zero Budget:** Free tier tools only (Vercel, GA4)

---

*Document created: Implementation kickstart for Jax Sterling fitness coaching landing page*
*Status: Ready for development*
