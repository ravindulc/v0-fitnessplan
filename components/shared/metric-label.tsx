import { cn } from '@/lib/utils'

interface MetricLabelProps {
  label: string
  value: string
  className?: string
}

export function MetricLabel({ label, value, className }: MetricLabelProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="text-muted-foreground text-sm">{label}:</span>
      <span className="font-mono text-sm font-medium text-primary">{value}</span>
    </div>
  )
}
