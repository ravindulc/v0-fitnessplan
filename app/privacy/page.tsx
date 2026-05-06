import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import { FinalCTA } from '@/components/sections/final-cta'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Jax Sterling',
  description: 'Privacy Policy for Jax Sterling fitness coaching services.',
}

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you purchase our fitness programs or interact with our website, we may collect personal 
              information such as your name, email address, and payment information. We also collect 
              usage data through analytics to improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to process your purchases, deliver our fitness programs, 
              communicate with you about your account, and improve our services. We may also use your 
              information to send you marketing communications if you have opted in.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your personal information. 
              Payment processing is handled by Stripe, a PCI-compliant payment processor. 
              We do not store your full credit card details on our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use third-party services including Stripe for payment processing and Google Analytics 
              for website analytics. These services have their own privacy policies governing their 
              use of your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, correct, or delete your personal information. 
              You may also opt out of marketing communications at any time. To exercise these rights, 
              please contact us at privacy@architect.fitness.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@architect.fitness.
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
