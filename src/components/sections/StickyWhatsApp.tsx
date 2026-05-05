import { MessageCircle } from "lucide-react";
import { waLink } from "@/contexts/ModeContext";

export const StickyWhatsApp = () => (
  <a
    href={waLink("Hi! I want to book a FREE demo class for my child.")}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-whatsapp px-4 py-4 text-center text-base font-black text-whatsapp-foreground shadow-[0_-4px_20px_rgba(0,0,0,.15)] md:hidden"
  >
    <MessageCircle className="size-5" />
    Book Free Trial Class on WhatsApp →
  </a>
);
