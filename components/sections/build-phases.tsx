'use client'

import { motion } from 'framer-motion'
import { Layers, Building2, Target } from 'lucide-react'
import { SECTION_IDS, BUILD_PHASES } from '@/lib/constants'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { cn } from '@/lib/utils'


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

      {/* Gantt Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2 hidden md:block" />
        
        <div className="space-y-12">
          {BUILD_PHASES.map((phase, index) => {
            const Icon = iconMap[phase.icon as keyof typeof iconMap]
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  'relative flex items-center justify-between md:flex-row flex-col gap-8',
                  !isEven && 'md:flex-row-reverse'
                )}
              >
                {/* Content */}
                <div className={cn(
                  'w-full md:w-[45%] p-6 rounded-2xl glass-panel rim-light relative group',
                  isEven ? 'md:text-right' : 'md:text-left'
                )}
                >
                  <div className={cn(
                    'flex items-center gap-2 mb-2',
                    isEven ? 'md:justify-end' : 'md:justify-start'
                  )}>
                    <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded">
                      PHASE {phase.phase}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Weeks {phase.weeks}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {phase.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Internal Progress Indicator */}
                  <div className="mt-4 flex items-center gap-2 opacity-50">
                    <div className="flex-1 h-px bg-border" />
                    <span className="font-mono text-[8px] uppercase tracking-tighter">Status: Calculated</span>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-background shadow-[0_0_15px_var(--primary)] z-10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                {/* Placeholder for spacing on other side */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-20 text-center"
      >
        <div className="inline-block p-4 rounded-xl bg-secondary/20 border border-border/50 backdrop-blur-sm">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Systematic Integration: <span className="text-primary">100% Completion Required</span>
          </p>
        </div>
      </motion.div>

    </SectionWrapper>
  )
}
