import { cn } from "@/lib/utils";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  labelVariant?: "primary" | "accent";
  invert?: boolean;
}

export const SectionHeader = ({ label, title, subtitle, center, labelVariant = "primary", invert }: Props) => (
  <div className={cn("mb-11", center && "text-center")}>
    <div
      className={cn(
        "mb-3 inline-block rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest",
        labelVariant === "primary" && "bg-primary-light text-primary",
        labelVariant === "accent" && "bg-accent-light text-accent"
      )}
    >
      {label}
    </div>
    <h2 className={cn("text-[clamp(22px,3.2vw,36px)] font-bold", invert ? "text-white" : "text-primary-dark")}>
      {title}
    </h2>
    {subtitle && (
      <p className={cn("mt-2 max-w-[540px] text-base leading-relaxed", center && "mx-auto", invert ? "text-white/70" : "text-muted-foreground")}>
        {subtitle}
      </p>
    )}
  </div>
);
