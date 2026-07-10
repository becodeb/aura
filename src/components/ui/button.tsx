import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-ivory px-8 py-4 overflow-hidden isolate before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-champagne before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:before:scale-x-100 hover:text-ink",
        secondary:
          "border border-ink/25 text-ink px-8 py-4 hover:border-ink transition-colors",
        ghost: "text-ink px-0 py-0",
        champagne: "bg-champagne text-ink px-8 py-4 hover:bg-ink hover:text-ivory",
      },
      size: {
        default: "",
        sm: "px-6 py-3 text-[11px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
