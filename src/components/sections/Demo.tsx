import { Phone } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waLink } from "@/contexts/ModeContext";

const steps = [
  { n: 1, t: "Your child meets their teacher", d: "The teacher learns your child's strengths and weak areas before the class begins" },
  { n: 2, t: "A full live lesson happens", d: "Not a demo — a real class. Your child actually learns something today, right now" },
  { n: 3, t: "Doubts are cleared", d: "The teacher opens the floor — your child can ask anything they've been confused about" },
  { n: 4, t: "10-min parent Q&A at the end", d: "Ask about the syllabus, batch size, schedule — anything you want to know" },
];

export const Demo = () => (
  <section id="demo" className="py-16 md:py-20">
    <div className="container">
      <SectionHeader
        center
        labelVariant="accent"
        label="Zero Risk. Zero Cost."
        title="Book Your Child's Free Class Today"
        subtitle="A full 60-minute live class — no payment, no pressure. Just see whether WeePal is right for your child."
      />
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-5 font-display text-xl font-bold text-primary-dark">What happens in the free class:</h3>
          <ul>
            {steps.map((s) => (
              <li key={s.n} className="flex items-start gap-3.5 border-b border-muted py-3.5 last:border-0">
                <div className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                  {s.n}
                </div>
                <div>
                  <strong className="block text-sm font-extrabold text-foreground">{s.t}</strong>
                  <span className="text-[13px] text-muted-foreground">{s.d}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-muted bg-card p-8 text-center shadow-elegant">
          <Phone className="mx-auto mb-2 size-9 text-primary" />
          <h3 className="mb-3 font-display text-xl font-bold text-primary-dark">Call or WhatsApp Us Now</h3>
          <a href="tel:+917842012006" className="mt-2 block font-display text-2xl font-black text-primary">
            +91 78420 12006
          </a>
          <p className="text-[13px] text-muted-foreground">India · Available on WhatsApp</p>
          <a href="tel:+971582887447" className="mb-4 mt-3 block text-[15px] font-bold text-primary hover:underline">
            +971 582887447 (UAE / International)
          </a>
          <WhatsAppButton
            text="Book Free Class on WhatsApp →"
            href={waLink("Hi! I want to book a FREE 60-min demo class for my child.")}
            className="w-full"
          />
          <p className="mt-3 text-xs text-muted-foreground">Available 7 days a week · Morning & evening slots</p>
        </div>
      </div>
    </div>
  </section>
);
