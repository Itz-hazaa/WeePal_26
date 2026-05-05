import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  text: string;
  href: string;
  variant?: "primary" | "white" | "big" | "compact";
  className?: string;
}

export const WhatsAppButton = ({ text, href, variant = "primary", className }: Props) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-extrabold rounded-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5";
  const variants = {
    primary: "bg-whatsapp text-whatsapp-foreground px-6 py-3.5 text-sm shadow-soft",
    white: "bg-white text-accent px-7 py-3.5 text-sm shadow-soft",
    big: "bg-whatsapp text-whatsapp-foreground px-9 py-4 text-base shadow-glow",
    compact: "bg-whatsapp text-whatsapp-foreground px-4 py-2.5 text-xs",
  };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn(base, variants[variant], className)}>
      <MessageCircle className="size-4" strokeWidth={2.5} />
      {text}
    </a>
  );
};
