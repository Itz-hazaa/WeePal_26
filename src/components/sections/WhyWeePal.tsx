import { Target, MessageSquare, Video, BookOpen, Cpu, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const feats = [
  { icon: Target, tone: "primary", title: "Small Batches", desc: "Your child is never just a face in a crowd. Every student gets personal attention, and no one gets left behind." },
  { icon: MessageSquare, tone: "accent", title: "Weekly Reports on WhatsApp", desc: "Every Friday you get a clear update on what was covered, how your child performed, and what to focus on next." },
  { icon: Video, tone: "primary", title: "Every Class is Recorded", desc: "If your child misses a class or wants to revise before an exam — every session is available to watch anytime." },
  { icon: BookOpen, tone: "accent", title: "Follows Your Child's Exact Syllabus", desc: "We teach your child's specific board and textbooks — so what they learn directly helps in school exams." },
  { icon: Cpu, tone: "primary", title: "Coding & Thinking Skills Built In", desc: "Beyond marks — coding basics and problem-solving are woven into lessons. Skills that help in school and in life." },
  { icon: ShieldCheck, tone: "accent", title: "100% Money-Back in the First Week", desc: "If your child isn't happy after the first week of paid classes, we refund every rupee. No questions, no forms." },
] as const;

export const WhyWeePal = () => (
  <section className="bg-primary-pale py-16 md:py-20">
    <div className="container">
      <SectionHeader label="Why Parents Choose WeePal" title="More Than Just Tuition" subtitle="We don't just help your child pass exams — we build habits and thinking skills that last." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {feats.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="group rounded-xl border border-muted bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary-light hover:shadow-elegant">
              <div className={`mb-3.5 grid size-11 place-items-center rounded-lg ${f.tone === "primary" ? "bg-primary-light text-primary" : "bg-accent-light text-accent"}`}>
                <Icon className="size-5" />
              </div>
              <h3 className="mb-1.5 text-[15px] font-extrabold text-primary-dark">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
