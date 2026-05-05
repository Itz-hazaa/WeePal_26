import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  { num: 1, tag: "Today", title: "WhatsApp Us", desc: "Send us your child's class and board. We reply within 2 hours with available slots." },
  { num: 2, tag: "This Week", title: "Free 60-Min Trial Class", desc: "Your child attends a full live class — completely free. No payment, no pressure." },
  { num: 3, tag: "Ongoing", title: "Weekly Reports on WhatsApp", desc: "Every week, you get a clear update on how your child is doing — sent to your WhatsApp." },
];

export const HowItWorks = () => (
  <section id="howitworks" className="bg-card py-16 md:py-20">
    <div className="container">
      <SectionHeader label="Simple Process" title="Getting Started Takes 5 Minutes" subtitle="No forms, no tests, no confusion. Just message us on WhatsApp and we handle everything." center />
      <div className="relative mt-12 grid gap-8 md:grid-cols-3">
        <div className="absolute left-[16.7%] right-[16.7%] top-[26px] hidden h-0.5 bg-primary-light md:block" />
        {steps.map((s) => (
          <div key={s.num} className="relative z-10 flex gap-4 text-left md:block md:text-center">
            <div className="grid size-11 shrink-0 place-items-center rounded-full bg-primary font-display text-lg font-black text-primary-foreground md:mx-auto md:mb-3.5 md:size-14 md:text-xl">
              {s.num}
            </div>
            <div>
              <div className="mb-2 inline-block rounded-full bg-accent-pale px-2.5 py-0.5 text-[11px] font-extrabold text-accent">
                {s.tag}
              </div>
              <h3 className="mb-1.5 text-base font-extrabold text-primary-dark font-sans">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
