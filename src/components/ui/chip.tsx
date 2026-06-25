import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type ChipVariant = "default" | "success" | "error" | "info" | "warning";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ChipVariant;
}

const variantClasses: Record<ChipVariant, string> = {
  default: "bg-surface-container text-on-surface-variant",
  success: "bg-secondary/10 text-secondary",
  error:   "bg-error/10 text-error",
  info:    "bg-on-tertiary-container/10 text-on-tertiary-container",
  warning: "bg-amber-50 text-amber-800",
};

function Chip({ variant = "default", className, children, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-sm py-xs text-label-sm font-semibold",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export { Chip };
