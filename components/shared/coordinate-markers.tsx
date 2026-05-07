'use client'

import { cn } from '@/lib/utils'

interface CoordinateMarkersProps {
  className?: string
}

export function CoordinateMarkers({ className }: CoordinateMarkersProps) {
  return (
    <div className={cn('absolute inset-0 pointer-events-none select-none overflow-hidden', className)}>
      {/* Top Left */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-muted-foreground/30">
        X: 00.000<br />Y: 00.000
      </div>
      
      {/* Top Right */}
      <div className="absolute top-4 right-4 font-mono text-[10px] text-muted-foreground/30 text-right">
        ID: #PR-248<br />VER: 2.0.4
      </div>
      
      {/* Bottom Left */}
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-muted-foreground/30">
        LAT: 34.0522<br />LNG: 118.2437
      </div>
      
      {/* Bottom Right */}
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-muted-foreground/30 text-right">
        SYS: ACTIVE<br />LOAD: 0.84
      </div>
    </div>
  )
}
