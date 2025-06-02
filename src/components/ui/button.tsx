
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-teal-600 text-white hover:bg-teal-700 font-semibold shadow-lg",
        destructive:
          "bg-brown-600 text-white hover:bg-brown-700 font-semibold",
        outline:
          "border-2 border-teal-600 bg-transparent text-teal-700 hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-teal-900/20 font-semibold",
        secondary:
          "bg-navy-200 text-navy-800 hover:bg-navy-300 dark:bg-navy-700 dark:text-white dark:hover:bg-navy-600 font-semibold",
        ghost: "text-navy-700 hover:bg-navy-100 hover:text-navy-800 dark:text-white dark:hover:bg-navy-800",
        link: "text-teal-600 underline-offset-4 hover:underline font-medium",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
