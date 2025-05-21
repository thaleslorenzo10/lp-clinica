import type React from "react"
import { cn } from "@/lib/utils"

interface PremiumCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "glass" | "bordered"
  noPadding?: boolean
}

export function PremiumCard({ children, className, variant = "default", noPadding = false }: PremiumCardProps) {
  const variantClasses = {
    default: "bg-white rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl",
    bordered: "bg-white rounded-xl shadow-lg border-2 border-gold-400/30 hover:shadow-xl",
  }

  return (
    <div
      className={cn("transition-all duration-300", variantClasses[variant], noPadding ? "" : "p-4 md:p-6", className)}
    >
      {children}
    </div>
  )
}
