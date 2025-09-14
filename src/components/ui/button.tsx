import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-glow hover:shadow-lg",
        hero: "bg-gradient-primary text-primary-foreground hover:scale-105 shadow-glow hover:shadow-xl animate-gradient font-semibold",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-glow-secondary hover:shadow-lg",
        accent: "bg-accent text-accent-foreground hover:bg-accent-hover shadow-glow-accent hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg",
        outline: "border border-primary/20 bg-transparent text-primary hover:bg-primary/10 hover:border-primary/50 backdrop-blur-sm",
        ghost: "text-foreground hover:bg-muted/20 hover:text-primary transition-colors",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
        wallet: "bg-gradient-card border border-primary/20 text-foreground hover:border-primary/50 hover:bg-muted/20 backdrop-blur-sm",
        verify: "bg-success text-success-foreground hover:bg-success/90 shadow-glow-secondary font-medium",
        premium: "bg-gradient-hero text-primary-foreground hover:scale-105 shadow-glow-accent hover:shadow-xl font-semibold border border-accent/30",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-xl px-8 text-base font-semibold",
        xl: "h-16 rounded-xl px-12 text-lg font-bold",
        icon: "h-11 w-11",
        "icon-sm": "h-9 w-9",
        "icon-lg": "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
