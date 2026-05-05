import { Calendar, BarChart3, HelpCircle, Bell } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waLink } from "@/contexts/ModeContext";

const feats = [
  { icon: Calendar, title: "Book Your Free Trial", desc: "Just send us a message and we schedule your child's free class — done in minutes." },
  { icon: BarChart3, title: "Weekly Progress Reports", desc: "Every Friday, your teacher sends a progress update directly to your WhatsApp." },
  { icon: HelpCircle, title: "Ask Questions Anytime", desc: "Have a question about schedule, syllabus, or your child's progress? Just WhatsApp us." },
  { icon: Bell, title: "Class Reminders", desc: "We send reminders before every class so your child never misses a session." },
];

export const WhatsAppSection = () => (
  <section className="bg-gradient-wa py-14 text-white">
    <div className="container text-center">
      <div className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest">
        How WeePal Uses WhatsApp
      </div>
      <h2 className="mt-2.5 text-[clamp(22px,3.2vw,36px)] font-bold text-white">
        Everything Happens on WhatsApp — Simple for Parents
      </h2>
      <p className="mx-auto mt-2.5 max-w-[520px] text-base text-white/85">
        No apps to download, no portals to log in to. Everything you need as a parent happens right in WhatsApp — the app you already use every day.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {feats.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="min-w-[170px] flex-1 max-w-[230px] rounded-xl border border-white/20 bg-white/10 p-5 text-center">
              <Icon className="mx-auto mb-2 size-7" />
              <div className="text-[13px] font-extrabold text-white">{f.title}</div>
              <div className="mt-1 text-xs leading-relaxed text-white/70">{f.desc}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center">
        <WhatsAppButton
          variant="big"
          text="Chat with Us on WhatsApp Now"
          href={waLink("Hi! I want to know more about WeePal classes.")}
        />
      </div>
    </div>
  </section>
);
