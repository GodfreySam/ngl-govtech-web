import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "premium";
  interactive?: boolean;
}

function Card({ variant = "default", interactive = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface-container-lowest rounded-lg border border-outline-variant/60 p-md",
        interactive && "micro-elevation transition-shadow hover:shadow-md cursor-pointer",
        variant === "premium" && "border-l-4 border-l-secondary",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card };
