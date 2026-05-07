'use client'

import Image from 'next/image'
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
            <div className="relative aspect-square rounded-2xl bg-secondary overflow-hidden border border-border glass-panel rim-light">
              <Image
                src="/images/jax-sterling.jpg"
                alt="Jax Sterling - Fitness Coach"
                fill
                className="object-cover object-top opacity-80"
                priority
              />
              
              {/* Schematic Overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <circle cx="50%" cy="30%" r="5" fill="var(--primary)" />
                <line x1="50%" y1="30%" x2="70%" y2="20%" stroke="var(--primary)" strokeWidth="1" />
                <text x="72%" y="19%" fill="var(--primary)" className="font-mono text-[8px]">BIO-ANALYSIS: OK</text>
              </svg>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Name overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-lg font-semibold text-foreground">Jax Sterling</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest text-[10px]">The Architect</p>
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-background/80 border border-border rounded-xl p-4 shadow-lg backdrop-blur-md rim-light"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-mono text-xl font-bold text-foreground">94%</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">System Success</div>
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
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">
              Origin: Structural Engineering
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Precision Fitness, <span className="text-primary">Applied Logic.</span>
          </h2>

          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Former structural engineer who discovered that the same principles governing 
              load-bearing structures apply to building the human physique.
            </p>
            <p>
              My philosophy: <span className="text-foreground font-medium">your body 
              is a system, not a mystery</span>. Apply the right inputs, and the outputs 
              become predictable. No guesswork. Just engineering.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-lg bg-secondary/30 border border-border/50 glass-panel hover:border-primary/50 transition-colors group">
                <stat.icon className="h-4 w-4 text-primary mx-auto mb-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="font-mono text-xl font-bold text-foreground">{stat.value}</div>
                <div className="text-[9px] uppercase tracking-tighter text-muted-foreground">{stat.label}</div>
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
