'use client'

import { motion } from 'framer-motion'
import { trackCTAClick } from '@/lib/analytics'
import { getCheckoutUrl } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  section: string
  size?: 'default' | 'large' | 'xl'
  variant?: 'primary' | 'secondary'
  className?: string
  children?: React.ReactNode
}

export function CTAButton({ 
  section, 
  size = 'default',
  variant = 'primary',
  className,
  children = 'Get the Blueprint'
}: CTAButtonProps) {
  const handleClick = () => {
    trackCTAClick(section)
  }

  const sizeClasses = {
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground cta-glow rim-light hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground border border-border rim-light hover:bg-secondary/80',
  }


  return (
    <a
      href={getCheckoutUrl(section)}
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'font-semibold rounded-lg',
        'transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {/* Scanning laser effect */}
      {variant === 'primary' && (
        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
          <motion.div 
            animate={{ 
              top: ['-100%', '200%'],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            className="absolute left-0 right-0 h-px bg-white/40 shadow-[0_0_10px_white]"
          />
        </div>
      )}
      {children}
    </a>

  )
}
