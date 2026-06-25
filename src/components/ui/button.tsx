import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium whitespace-nowrap",
          "transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-on-tertiary-container focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-40",
          "active:scale-[0.97]",
          variant === "primary" && [
            "bg-primary text-on-primary rounded-lg",
            "hover:brightness-125 hover:shadow-md",
          ],
          variant === "secondary" && [
            "border border-primary text-primary rounded-lg",
            "hover:bg-primary hover:text-on-primary",
          ],
          variant === "ghost" && [
            "text-on-surface-variant rounded-md",
            "hover:text-on-surface hover:bg-surface-container",
          ],
          size === "sm" && "h-10 px-5 text-label-md",
          size === "md" && "h-12 px-6 text-label-md",
          size === "lg" && "h-14 px-8 text-body-md",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
