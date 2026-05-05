import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { useMode } from "@/contexts/ModeContext";

const baseFaqs = [
  { q: "Is the trial class really free? What's the catch?", a: "There is no catch. The 60-minute trial class is completely free — no payment, no credit card, no commitment. Your child attends a real class, meets the teacher, and learns something. After that, you decide if you want to continue." },
  { q: "How do I get updates about my child's progress?", a: "Every week, your child's teacher sends you a progress report directly on WhatsApp. It covers what was taught, how your child performed, what they're struggling with, and what to focus on next week." },
  { q: "What if my child doesn't like it after joining?", a: "If your child isn't happy after the first week of paid classes, we refund every rupee (or dollar) — no questions, no forms, no hassle. We stand behind our teaching quality completely." },
  { q: "What if my child misses a class?", a: "Every single class is recorded and sent to you. Your child can watch it anytime — before exams, on weekends, as many times as they need." },
  { q: "What device does my child need?", a: "Any laptop, tablet, or desktop with a stable internet connection works well. A phone works for watching recordings, but for live classes a larger screen is better." },
  { q: "How many students are in each batch?", a: "For Classes 4–9, we keep batches to a maximum of 25 students. For Class 10 board prep, batches are capped at 15 for extra attention." },
];

export const FAQ = () => {
  const { isIndia } = useMode();
  const [open, setOpen] = useState<number | null>(0);

  const boardFaq = isIndia
    ? { q: "My child's board is SSC / IB / ICSE — do you cover it?", a: "Yes. We teach all major Indian boards — CBSE, ICSE, IB (PYP and MYP), SSC (Telangana and AP), IGCSE (Cambridge), and NIOS. Just tell us your child's board when you message us." }
    : { q: "My child's board is IB / IGCSE / US Common Core — do you cover it?", a: "Yes. We teach IGCSE (Cambridge), IB MYP, US Common Core, A-Level foundations, and CBSE for expat students. All classes in English." };

  const tzFaq = !isIndia
    ? [{ q: "Can we join from a different time zone?", a: "Yes. We have students in the UAE, UK, Singapore, and the US. We schedule batches across multiple time zones." }]
    : [];

  const faqs = [baseFaqs[0], baseFaqs[1], boardFaq, ...tzFaq, ...baseFaqs.slice(2)];

  return (
    <section id="faq" className="bg-primary-pale py-16 md:py-20">
      <div className="container">
        <SectionHeader center label="Parent Questions" title="Questions Parents Often Ask" subtitle="Still not sure? Here are the questions parents ask us most. And if your question isn't here — just WhatsApp us!" />
        <div className="mx-auto max-w-[720px]">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-[15px] font-extrabold text-foreground transition-colors hover:text-primary"
              >
                {f.q}
                <Plus className={`size-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button>
              {open === i && <div className="pb-4 text-sm leading-relaxed text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
