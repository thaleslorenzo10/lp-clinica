import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

interface PremiumButtonProps extends ButtonProps {
  variant?: "default" | "gold" | "outline" | "ghost"
}

export function PremiumButton({ className, variant = "default", ...props }: PremiumButtonProps) {
  const variantClasses = {
    default: "bg-premium-gradient text-white hover:shadow-lg hover:shadow-premium-700/20",
    gold: "bg-gold-gradient text-dark-950 hover:shadow-lg hover:shadow-gold-500/20",
    outline: "bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400/10",
    ghost: "bg-transparent text-premium-600 hover:bg-premium-100",
  }

  return (
    <Button
      className={cn(
        "font-medium py-6 px-8 rounded-lg transition-all duration-300 hover:scale-[1.02]",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  )
}
