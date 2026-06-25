import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full h-12 px-4 rounded-lg",
          "border border-outline-variant bg-surface-container-lowest",
          "text-body-md text-on-surface placeholder:text-on-surface-variant/40",
          "outline-none transition-all duration-200",
          "focus:ring-2 focus:ring-on-tertiary-container/20 focus:border-on-tertiary-container",
          "hover:border-outline",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
