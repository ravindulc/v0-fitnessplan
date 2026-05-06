// Stripe checkout URL - placeholder for prototype
export const STRIPE_CHECKOUT_URL = 'https://checkout.stripe.com/pay/placeholder'

// Generate checkout URL with UTM tracking
export const getCheckoutUrl = (section: string) => 
  `${STRIPE_CHECKOUT_URL}?utm_source=landing&utm_medium=cta&utm_campaign=${section}`

// Section IDs for navigation
export const SECTION_IDS = {
  hero: 'hero',
  architect: 'architect',
  phases: 'phases',
  testimonials: 'testimonials',
  pricing: 'pricing',
  faq: 'faq',
  finalCta: 'final-cta',
} as const

// Navigation items
export const NAV_ITEMS = [
  { label: 'Why Me', href: `#${SECTION_IDS.architect}` },
  { label: 'Results', href: `#${SECTION_IDS.testimonials}` },
  { label: 'Pricing', href: `#${SECTION_IDS.pricing}` },
  { label: 'FAQ', href: `#${SECTION_IDS.faq}` },
  { label: 'Contact', href: '/contact' },
] as const

// Contact information
export const CONTACT_INFO = {
  email: 'jax@architect.fitness',
  responseTime: '24-48 hours',
  directAccess: 'Blueprint & Audit members get priority support',
} as const

// Pricing tiers
export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 99,
    badge: null,
    featured: false,
    features: [
      '12-week training blueprint',
      'Exercise video library',
      'Progress tracking templates',
      'Community access',
    ],
  },
  {
    id: 'blueprint',
    name: 'The Blueprint',
    price: 199,
    badge: 'RECOMMENDED',
    featured: true,
    features: [
      'Everything in Starter',
      'Custom nutrition calculator',
      'Weekly check-in templates',
      'Recovery protocols',
      'Supplement guide',
      'Lifetime updates',
    ],
  },
  {
    id: 'audit',
    name: '1-on-1 Audit',
    price: 499,
    badge: 'PREMIUM',
    featured: false,
    features: [
      'Everything in Blueprint',
      '60-min strategy call',
      'Personalized program adjustments',
      'Form review videos',
      'Direct message support (30 days)',
      'Priority email support',
    ],
  },
] as const

// Testimonials data
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Marcus Chen',
    role: 'Tech Executive',
    image: '/testimonials/marcus.jpg',
    metrics: {
      bodyFat: '-8.4%',
      strength: '+22%',
    },
    quote: 'The systematic approach finally made sense to my engineering brain. No guessing, just results.',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Investment Banker',
    image: '/testimonials/sarah.jpg',
    metrics: {
      bodyFat: '-12%',
      leanMass: '+8lbs',
    },
    quote: 'With 80-hour weeks, I needed efficiency. The Blueprint delivered exactly that—maximum results, minimum time waste.',
  },
  {
    id: 3,
    name: 'David Park',
    role: 'Startup Founder',
    image: '/testimonials/david.jpg',
    metrics: {
      bodyFat: '-6%',
      energy: '+300%',
    },
    quote: 'I thought I was too busy for transformation. Jax proved me wrong with a system that fits any schedule.',
  },
] as const

// FAQ data
export const FAQ_ITEMS = [
  {
    question: 'How do the 45-minute sessions work?',
    answer: 'Every session is engineered for maximum efficiency using strategic tension protocols and optimized rest periods. You get in, execute with precision, and get out. No fluff, no wasted time—just calculated stimulus for measurable results.',
  },
  {
    question: 'Is a commercial gym required?',
    answer: 'The system is hardware-agnostic. Whether you have a fully equipped gym, a home setup with dumbbells and bands, or access to hotel fitness centers during travel—the Blueprint adapts. We provide equipment substitutions for every exercise.',
  },
  {
    question: 'Is this program suitable for beginners?',
    answer: 'The Blueprint scales to your current load-bearing capacity. Whether you are lifting for the first time or returning after years off, the progressive system meets you where you are and builds systematically from there.',
  },
  {
    question: 'What results can I realistically expect?',
    answer: 'Following the system as designed, typical clients see 8-15% body fat reduction and 15-25% strength gains within the 12-week cycle. Individual results vary based on starting point, adherence, and recovery factors.',
  },
  {
    question: 'How much time per week does this require?',
    answer: '3-4 training sessions of 45 minutes each, plus meal prep time which most clients batch on weekends. Total weekly investment: approximately 4-5 hours. That is less than 3% of your week for a complete physique transformation.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes. If you follow the system as outlined for 30 days and are not satisfied with your progress, I will refund your purchase in full. No questions, no hassle. I am that confident in the methodology.',
  },
  {
    question: 'Do I need expensive supplements?',
    answer: 'No required supplements. The Blueprint includes evidence-based nutrition guidance that prioritizes whole foods. We provide an optional supplement guide for those interested, but 90% of your results come from the training and nutrition fundamentals.',
  },
] as const

// Build phases data
export const BUILD_PHASES = [
  {
    phase: 'I',
    title: 'Foundation',
    subtitle: 'Mechanical Priming',
    weeks: '1-4',
    description: 'Establish movement patterns, build work capacity, and prime your nervous system for the intensity ahead.',
    icon: 'foundation',
  },
  {
    phase: 'II',
    title: 'Superstructure',
    subtitle: 'Hypertrophy & Tension',
    weeks: '5-8',
    description: 'Strategic overload protocols designed to maximize muscle fiber recruitment and metabolic stress.',
    icon: 'building',
  },
  {
    phase: 'III',
    title: 'Optimization',
    subtitle: 'Peak Conditioning',
    weeks: '9-12',
    description: 'Fine-tune your physique with precision adjustments, density training, and peak week protocols.',
    icon: 'optimize',
  },
] as const
