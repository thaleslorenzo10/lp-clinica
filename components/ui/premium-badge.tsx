import type React from "react"
import { cn } from "@/lib/utils"

interface PremiumBadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "gold" | "outline"
}

export function PremiumBadge({ children, className, variant = "default" }: PremiumBadgeProps) {
  const variantClasses = {
    default: "bg-premium-900 text-white",
    gold: "bg-gold-gradient text-dark-950",
    outline: "bg-transparent border border-gold-400 text-gold-400",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
