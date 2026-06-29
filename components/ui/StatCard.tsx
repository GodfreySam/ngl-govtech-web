import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  theme?: "light" | "dark";
  className?: string;
}

export default function StatCard({ value, label, theme = "light", className }: StatCardProps) {
  const isDark = theme === "dark";
  return (
    <div className={cn("text-center", className)}>
      <div
        className={cn(
          "font-display font-bold text-4xl sm:text-5xl mb-1",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {value}
      </div>
      <div className={cn("text-sm font-medium", isDark ? "text-white/60" : "text-slate")}>
        {label}
      </div>
    </div>
  );
}
