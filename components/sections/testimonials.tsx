'use client'

import { motion } from 'framer-motion'
import { Quote, ArrowRight } from 'lucide-react'
import { SECTION_IDS, TESTIMONIALS } from '@/lib/constants'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { CTAButton } from '@/components/shared/cta-button'
import { MetricLabel } from '@/components/shared/metric-label'

export function Testimonials() {
  return (
    <SectionWrapper id={SECTION_IDS.testimonials} className="bg-card">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-mono text-primary mb-4"
        >
          PROVEN BUILDS
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
        >
          Real Results. Real People.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg"
        >
          Join high-performance professionals who stopped guessing and started engineering their physique.
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/30">
              {/* Before/After placeholder */}
              <div className="relative mb-6 aspect-video rounded-xl bg-secondary overflow-hidden">
                <div className="absolute inset-0 flex">
                  {/* Before side */}
                  <div className="w-1/2 flex items-center justify-center border-r border-border/50">
                    <div className="text-center">
                      <span className="text-xs font-mono text-muted-foreground">BEFORE</span>
                    </div>
                  </div>
                  {/* After side */}
                  <div className="w-1/2 flex items-center justify-center bg-primary/5">
                    <div className="text-center">
                      <span className="text-xs font-mono text-primary">AFTER</span>
                    </div>
                  </div>
                </div>
                
                {/* Slider indicator */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-primary" />
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-4 mb-4">
                {Object.entries(testimonial.metrics).map(([key, value]) => (
                  <MetricLabel
                    key={key}
                    label={key === 'bodyFat' ? 'Body Fat' : key === 'leanMass' ? 'Lean Mass' : key.charAt(0).toUpperCase() + key.slice(1)}
                    value={value}
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-1 h-6 w-6 text-primary/20" />
                <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="text-muted-foreground mb-6">
          Ready to be the next success story?
        </p>
        <CTAButton section="testimonials" size="large">
          Join 500+ Transformations
          <ArrowRight className="h-5 w-5" />
        </CTAButton>
      </motion.div>
    </SectionWrapper>
  )
}
