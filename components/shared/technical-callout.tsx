'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TechnicalCalloutProps {
  label: string
  side?: 'left' | 'right'
  className?: string
  delay?: number
}

export function TechnicalCallout({ 
  label, 
  side = 'right', 
  className,
  delay = 0 
}: TechnicalCalloutProps) {
  const isRight = side === 'right'

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'absolute z-20 flex items-center gap-3',
        isRight ? 'flex-row' : 'flex-row-reverse',
        className
      )}
    >
      {/* Terminal Dot */}
      <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
      
      {/* Leader Line */}
      <div className={cn(
        'h-px bg-gradient-to-r from-primary to-transparent',
        isRight ? 'w-12' : 'w-12 rotate-180'
      )} />
      
      {/* Label */}
      <div className="px-2 py-1 rounded bg-background/80 border border-primary/30 backdrop-blur-sm">
        <span className="font-mono text-[10px] uppercase tracking-wider text-primary whitespace-nowrap">
          {label}
        </span>
      </div>
    </motion.div>
  )
}
