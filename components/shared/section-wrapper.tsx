import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
  withGrid?: boolean
}

export function SectionWrapper({ 
  id, 
  children, 
  className,
  containerClassName,
  withGrid = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-20 md:py-24 lg:py-32 bg-background',
        withGrid && 'grid-pattern',
        className
      )}
    >
      <div 
        className={cn(
          'relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  )
}
