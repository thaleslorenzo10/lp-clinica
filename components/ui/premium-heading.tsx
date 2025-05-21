import type React from "react"
import { cn } from "@/lib/utils"

interface PremiumHeadingProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4"
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
}

export function PremiumHeading({ children, className, as = "h2", size = "xl" }: PremiumHeadingProps) {
  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl",
    "2xl": "text-5xl md:text-6xl",
  }

  const Component = as

  return (
    <Component className={cn("font-bold tracking-tight premium-text-gradient", sizeClasses[size], className)}>
      {children}
    </Component>
  )
}
