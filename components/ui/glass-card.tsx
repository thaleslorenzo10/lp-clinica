import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md",
        className,
      )}
    >
      <div className="absolute inset-0 bg-glass-gradient opacity-30"></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
