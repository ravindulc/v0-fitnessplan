'use client'

import { motion } from 'framer-motion'
import { Layers, Building2, Target } from 'lucide-react'
import { SECTION_IDS, BUILD_PHASES } from '@/lib/constants'
import { SectionWrapper } from '@/components/shared/section-wrapper'

const iconMap = {
  foundation: Layers,
  building: Building2,
  optimize: Target,
}

export function BuildPhases() {
  return (
    <SectionWrapper id={SECTION_IDS.phases} withGrid>
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-mono text-primary mb-4"
        >
          THE SYSTEM
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
        >
          Three Phases. One Transformation.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg"
        >
          Every great structure follows a blueprint. Your physique is no different.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {BUILD_PHASES.map((phase, index) => {
          const Icon = iconMap[phase.icon as keyof typeof iconMap]
          
          return (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-border bg-card p-6 lg:p-8 transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
                {/* Phase number */}
                <div className="absolute top-4 right-4 font-mono text-6xl font-bold text-muted/30">
                  {phase.phase}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">PHASE {phase.phase}</span>
                    <span className="text-xs text-muted-foreground">Weeks {phase.weeks}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {phase.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-primary/80 mb-4">
                    {phase.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="mt-6 h-1 w-full rounded-full bg-muted">
                  <div 
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${((index + 1) / 3) * 100}%` }}
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-muted-foreground">
          Each phase builds systematically on the last. 
          <span className="text-foreground"> Skip nothing. Trust the process.</span>
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
