import { Phone } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useMode, waLink } from "@/contexts/ModeContext";

export const Hero = () => {
  const { isIndia } = useMode();

  const indianBoards = [
    { name: "CBSE", sub: "NCERT" },
    { name: "ICSE", sub: "Selina" },
    { name: "IB", sub: "MYP / PYP" },
    { name: "SSC", sub: "TS / AP" },
    { name: "IGCSE", sub: "Cambridge" },
    { name: "NIOS", sub: "Open Board" },
  ];
  const intlBoards = [
    { name: "IGCSE", sub: "Cambridge" },
    { name: "IB", sub: "MYP" },
    { name: "A-Level", sub: "Foundations" },
    { name: "US Core", sub: "Gr. 4–10" },
    { name: "CBSE", sub: "UAE Expats" },
    { name: "More", sub: "Ask us" },
  ];
  const boards = isIndia ? indianBoards : intlBoards;

  const chips = ["Free 60-min trial class", "No payment needed", "All boards covered", "100% money-back"];

  return (
    <section className="bg-gradient-hero py-16 md:py-20">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-light bg-accent-pale px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-accent">
            <span className="size-2 animate-pulse-dot rounded-full bg-accent" />
            {isIndia ? "Live Online · Enrolling Now" : "Live Online · International Students Welcome"}
          </div>
          <h1 className="mb-3 text-[clamp(28px,3.8vw,48px)] font-bold text-primary-dark">
            Your Child Deserves a Teacher Who <em className="italic text-primary">Actually Explains</em> It
          </h1>
          <p className="mb-6 max-w-[480px] text-lg leading-relaxed text-muted-foreground">
            Live online tuition for Classes 4–10 — small batches, expert teachers, and{" "}
            <strong className="text-foreground">weekly WhatsApp reports</strong> so you always know how your child is doing.
          </p>
          <div className="mb-6 flex flex-wrap gap-3">
            <WhatsAppButton
              text="Book Free Class on WhatsApp"
              href={waLink("Hi! I want to book a FREE demo class for my child.")}
            />
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-extrabold text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5"
            >
              <Phone className="size-4" /> Call Us →
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {chips.map((c) => (
              <span key={c} className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                <span className="grid size-[18px] place-items-center rounded-full bg-primary-light text-[10px] font-black text-primary">
                  ✓
                </span>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-muted bg-card p-6 shadow-elegant">
          <div className="font-display text-lg font-bold text-primary-dark">All Major Boards Covered</div>
          <div className="mb-5 text-sm text-muted-foreground">Tell us your board — we teach it right.</div>
          <div className="mb-5 grid grid-cols-3 gap-2">
            {boards.map((b) => (
              <div
                key={b.name}
                className="rounded-xl border-[1.5px] border-primary-light bg-primary-pale py-2 text-center text-xs font-extrabold text-primary-dark"
              >
                {b.name}
                <small className="mt-0.5 block text-[10px] font-semibold text-primary-mid">{b.sub}</small>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-accent-light bg-accent-pale p-3 text-center">
            <strong className="font-display text-2xl text-accent">Classes 4 – 10</strong>
            <p className="mt-0.5 text-xs text-muted-foreground">Academic + Coding + Thinking Skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};
