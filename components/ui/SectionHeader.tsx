import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className,
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {label && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4",
            isDark ? "text-green-400" : "text-green-400",
            align === "center" ? "justify-center" : ""
          )}
        >
          <span className="block w-8 h-0.5 bg-current" />
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-display font-bold leading-tight text-balance",
          "text-3xl sm:text-4xl lg:text-5xl",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            isDark ? "text-white/70" : "text-slate",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
