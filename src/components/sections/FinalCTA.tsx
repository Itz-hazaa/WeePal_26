import { MessageCircle } from "lucide-react";
import { waLink } from "@/contexts/ModeContext";

export const FinalCTA = () => (
  <section className="bg-gradient-cta py-16 text-center text-white">
    <div className="container">
      <h2 className="text-[clamp(22px,3.2vw,36px)] font-bold text-white">
        Only 20 Spots Open — Enrol Your Child Today
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-base text-white/90">
        Free 60-min trial class · No payment · All boards · 100% money-back guarantee
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <a
          href="#demo"
          className="rounded-lg bg-white px-7 py-3.5 text-sm font-black text-accent transition-all hover:opacity-90 hover:-translate-y-0.5"
        >
          Book Free Trial Class →
        </a>
        <a
          href={waLink("Hi! I want to join WeePal for my child.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-white/60 px-7 py-3.5 text-sm font-black text-white transition-all hover:bg-white/10"
        >
          <MessageCircle className="size-4" />
          Message on WhatsApp →
        </a>
      </div>
    </div>
  </section>
);
