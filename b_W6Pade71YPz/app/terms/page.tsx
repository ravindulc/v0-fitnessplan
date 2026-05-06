import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import { FinalCTA } from '@/components/sections/final-cta'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Jax Sterling',
  description: 'Terms of Service for Jax Sterling fitness coaching services.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Jax Sterling fitness coaching services, you agree to be bound by 
              these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Services Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide digital fitness coaching programs including training blueprints, nutrition 
              guidance, and educational content. Our programs are delivered digitally and are available 
              immediately upon purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Payment and Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              All purchases are one-time payments that grant lifetime access to the purchased program. 
              We offer a 30-day money-back guarantee if you follow the program as outlined and are 
              not satisfied with your results. Refund requests must be submitted within 30 days of purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Medical Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our fitness programs are for educational purposes only and are not intended as medical 
              advice. You should consult with a qualified healthcare provider before starting any 
              exercise or nutrition program. By using our services, you acknowledge that you exercise 
              at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content in our programs, including text, images, videos, and training protocols, 
              is protected by copyright. You may not copy, distribute, or sell any part of our 
              programs without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Results Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Individual results may vary. Testimonials and examples used are not guarantees of 
              future results. Your results will depend on many factors including your dedication, 
              consistency, and individual circumstances.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Jax Sterling shall not be liable for any 
              indirect, incidental, special, or consequential damages arising from your use of 
              our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at 
              legal@architect.fitness.
            </p>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}
