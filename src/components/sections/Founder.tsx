import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const items = [
  { href: "https://share.google/58DdcppJO8XFlX1fm", text: "Started teaching B.Tech and M.Tech engineers at age 11 — featured on NDTV" },
  { href: "https://www.techshala.org", text: "Built TechShala, reaching 500+ students through hands-on robotics education" },
  { href: "https://youtu.be/7X1w3YLOLsk?si=dPfGbZYGKRQFlL5u", text: "Developed a voice-controlled humanoid robot and autonomous serving robot" },
  { href: "https://www.instagram.com/techshala.official", text: "Created a robotics curriculum now used in 5+ Hyderabad schools" },
  { href: "https://www.instagram.com/littleweepal", text: "Building WeePal to make quality education accessible to every child" },
];

export const Founder = () => (
  <section id="founder" className="bg-primary-pale py-16 md:py-20">
    <div className="container">
      <div className="mb-10 text-center">
        <SectionHeader center label="About the Founder" title="The Person Building WeePal" />
      </div>
      <div className="mx-auto grid max-w-[920px] items-center gap-10 md:grid-cols-[1fr_1.6fr]">
        <img
  src="founder-hassaan.png"
  alt="Mohammed Hassaan Ali — Founder of WeePal & TechShala"
  className="aspect-square w-full rounded-2xl object-cover shadow-soft"
/>
          <div className="absolute -bottom-2 -right-2 -z-10 h-3/4 w-3/4 rounded-2xl border-2 border-accent-light" />
        </div>
        <div>
          <div className="text-2xl font-bold text-primary-dark font-display">Mohammed Hassaan Ali</div>
          <div className="mb-5 text-sm font-bold text-accent">Founder — WeePal & TechShala · Age 19</div>
          <ul className="mb-6">
            {items.map((it, i) => (
              <li key={it.href} className="flex items-start gap-2.5 border-b border-muted py-2.5 last:border-0">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent-light text-[11px] font-black text-accent">
                  {i + 1}
                </span>
                <a href={it.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-start gap-1 text-[13px] font-semibold text-foreground transition-colors hover:text-primary">
                  {it.text}
                  <ExternalLink className="mt-0.5 size-3 opacity-50 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
          <div className="rounded-r-lg border-l-[3px] border-primary-light bg-primary-pale/60 px-5 py-4">
            <div className="font-display text-base italic text-primary-dark">
              "Let your child be the next Hassaan."
            </div>
            <div className="mt-1 text-xs font-bold text-muted-foreground">— Arsheena Rahman, Co-founder, WeePal</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
