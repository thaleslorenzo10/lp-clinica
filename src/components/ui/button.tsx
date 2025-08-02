import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-intense",
        cta: "bg-gradient-cta text-white hover:scale-105 shadow-glow animate-pulse-glow font-bold text-lg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-card-border",
        outline: "border-2 border-orange text-orange hover:bg-orange hover:text-primary-foreground",
        ghost: "hover:bg-navy-light hover:text-primary",
        accent: "bg-gradient-accent text-accent-foreground hover:scale-105 shadow-card",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-orange underline-offset-4 hover:underline hover:text-orange/80",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-16 rounded-xl px-10 text-xl font-bold",
        xl: "h-20 rounded-2xl px-12 text-2xl font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
