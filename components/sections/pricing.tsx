'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { SECTION_IDS, PRICING_TIERS } from '@/lib/constants'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { CTAButton } from '@/components/shared/cta-button'
import { cn } from '@/lib/utils'

export function Pricing() {
  return (
    <SectionWrapper id={SECTION_IDS.pricing} withGrid>
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-mono text-primary mb-4"
        >
          INVEST IN YOUR BLUEPRINT
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
        >
          Choose Your Level of Engineering
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg"
        >
          One-time payment. Lifetime access. Zero recurring fees.
        </motion.p>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {PRICING_TIERS.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              'relative rounded-2xl border p-6 lg:p-8',
              tier.featured 
                ? 'border-primary bg-card shadow-lg shadow-primary/10 scale-105 lg:scale-110' 
                : 'border-border bg-card/50'
            )}
          >
            {/* Badge */}
            {tier.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className={cn(
                  'inline-block px-3 py-1 text-xs font-bold rounded-full',
                  tier.featured 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground'
                )}>
                  {tier.badge}
                </span>
              </div>
            )}

            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl lg:text-5xl font-bold font-mono text-foreground">
                  ${tier.price}
                </span>
                <span className="text-muted-foreground text-sm">/one-time</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className={cn(
                    'h-5 w-5 shrink-0 mt-0.5',
                    tier.featured ? 'text-primary' : 'text-muted-foreground'
                  )} />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <CTAButton 
              section={`pricing_${tier.id}`}
              size={tier.featured ? 'large' : 'default'}
              variant={tier.featured ? 'primary' : 'secondary'}
              className="w-full justify-center"
            >
              {tier.featured ? 'Get The Blueprint' : 'Get Started'}
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </motion.div>
        ))}
      </div>

      {/* Guarantee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-sm text-muted-foreground">
            30-day money-back guarantee. No questions asked.
          </span>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
