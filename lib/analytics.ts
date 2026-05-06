// Google Analytics 4 event tracking

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetId: string | Date,
      params?: Record<string, unknown>
    ) => void
  }
}

// Track CTA button clicks
export const trackCTAClick = (section: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_clicked', {
      event_category: 'conversion',
      event_label: section,
      section_name: section,
    })
  }
}

// Track FAQ expansion
export const trackFAQExpand = (question: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'faq_expanded', {
      event_category: 'engagement',
      event_label: question,
      question_text: question,
    })
  }
}

// Track section views (for scroll tracking)
export const trackSectionView = (section: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'section_view', {
      event_category: 'engagement',
      event_label: section,
      section_name: section,
    })
  }
}

// Generic event tracking
export const trackEvent = (
  eventName: string, 
  params?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}
