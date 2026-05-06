'use client'

import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, ArrowRight } from 'lucide-react'
import { SECTION_IDS } from '@/lib/constants'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { CTAButton } from '@/components/shared/cta-button'

const stats = [
  { icon: Users, value: '500+', label: 'Clients Transformed' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: TrendingUp, value: '94%', label: 'Success Rate' },
]

export function Architect() {
  return (
    <SectionWrapper id={SECTION_IDS.architect} className="bg-card">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Avatar / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
            {/* Background frame */}
            <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 translate-x-4 translate-y-4" />
            
            {/* Main image container */}
            <div className="relative aspect-square rounded-2xl bg-secondary overflow-hidden border border-border">
              {/* Placeholder for image - will be replaced with actual photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="font-mono text-5xl font-bold text-primary">J</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Jax Sterling</p>
                </div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-background border border-border rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-mono text-xl font-bold text-foreground">94%</div>
                  <div className="text-xs text-muted-foreground">Client Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-sm font-mono text-primary mb-4">
            MEET THE ARCHITECT
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Engineering Excellence, Applied to Fitness
          </h2>

          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              Former structural engineer who discovered that the same principles governing 
              load-bearing structures apply to building the human physique. After 15 years 
              of refining the methodology, the results speak for themselves.
            </p>
            <p>
              My philosophy is simple: <span className="text-foreground font-medium">your body 
              is a system, not a mystery</span>. Apply the right inputs, in the right sequence, 
              and the outputs become predictable. No gimmicks. No guesswork. Just engineering.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-lg bg-secondary/50 border border-border">
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="font-mono text-xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <CTAButton section="architect" size="default">
              Start Your Transformation
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
