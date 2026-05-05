import { SectionHeader } from "@/components/SectionHeader";

const stats = [
  { num: "500+", label: "Students Taught", desc: "Robotics and academic workshops delivered across Hyderabad and beyond" },
  { num: "5+", label: "Schools Using Our Curriculum", desc: "Hyderabad schools that adopted our robotics curriculum in-house" },
  { num: "10+", label: "Expert Teachers", desc: "IIT and NIT graduates, screened, trained, and background-checked" },
  { num: "20+", label: "Workshops Delivered", desc: "Hands-on sessions at schools, orphanages, and community centres" },
  { num: "10+", label: "Countries", desc: "Serving Indian and Foreign students — live online, no commute" },
  { num: "100+", label: "News Feature", desc: "Our founder was featured on NDTV for teaching engineers at age 11" },
];

export const Stats = () => (
  <section className="py-16 md:py-20">
    <div className="container">
      <SectionHeader center label="Our Track Record" title="Real Numbers From Real Work" subtitle="We've been teaching students since before WeePal existed. This is the team behind the product." />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-muted bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary-light hover:shadow-elegant">
            <div className="font-display text-4xl font-bold leading-none text-primary">{s.num}</div>
            <div className="mt-2 text-sm font-extrabold text-foreground">{s.label}</div>
            <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
