'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { SECTION_IDS } from '@/lib/constants'
import { CTAButton } from '@/components/shared/cta-button'

import { TechnicalCallout } from '@/components/shared/technical-callout'
import { CoordinateMarkers } from '@/components/shared/coordinate-markers'

export function Hero() {
  return (
    <section 
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Self-drawing blueprint line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.path
          d="M 100,100 L 900,100 L 900,500 L 100,500 Z"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* Coordinate Markers */}
      <CoordinateMarkers />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Blue accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <TechnicalCallout 
              label="System: Active" 
              side="left" 
              className="-left-32 top-0 hidden xl:flex" 
              delay={0.6}
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 rim-light">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-tighter">12-Week Transformation System</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground text-balance"
          >
            RE-ENGINEER YOUR
            <span className="block text-primary relative">
              PHYSIQUE.
              {/* Underline draw */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 bg-primary/30"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground text-pretty"
          >
            The data-driven 12-week blueprint for high-performance professionals. 
            <span className="text-foreground"> Stop guessing, start building.</span>
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12 relative"
          >
            <TechnicalCallout 
              label="Peak Efficiency" 
              side="right" 
              className="-right-40 top-0 hidden xl:flex" 
              delay={0.8}
            />
            <div className="text-center group">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">500+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Transformations</div>
            </div>
            <div className="h-12 w-px bg-border hidden sm:block" />
            <div className="text-center group">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">12</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Weeks Cycle</div>
            </div>
            <div className="h-12 w-px bg-border hidden sm:block" />
            <div className="text-center group">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">45min</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Execution Time</div>
            </div>
          </motion.div>


          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <CTAButton section="hero" size="large">
              Get the Blueprint
              <ArrowRight className="h-5 w-5" />
            </CTAButton>
          </motion.div>

          {/* Trust badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            One-time purchase. Lifetime access. 30-day guarantee.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-6 w-4 rounded-full border-2 border-muted-foreground/50 p-1"
          >
            <div className="h-1 w-1 rounded-full bg-muted-foreground" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
