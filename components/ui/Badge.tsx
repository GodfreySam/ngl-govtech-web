import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "navy" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "green", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold",
        variant === "green" && "bg-green-50 text-green-500",
        variant === "navy" && "bg-navy-100 text-navy",
        variant === "outline" && "border border-current text-current",
        className
      )}
    >
      {children}
    </span>
  );
}
