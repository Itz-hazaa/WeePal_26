// import { Lightbulb } from "lucide-react";
// import { SectionHeader } from "@/components/SectionHeader";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import { useMode, waLink } from "@/contexts/ModeContext";

// // const indianTiers = [
// //   { cls: "Classes 4 – 6", price: "2,499", currency: "₹", desc: "Foundation years — building the concepts everything else depends on", featured: false, msg: "Hi! I want to join WeePal for Classes 4-6." },
// //   { cls: "Classes 7 – 9", price: "2,999", currency: "₹", desc: "The critical years — where most students start falling behind if concepts aren't clear", featured: true, msg: "Hi! I want to join WeePal for Classes 7-9." },
// //   { cls: "Class 10 — Board Prep", price: "3,499", currency: "₹", desc: "Board exam year — focused on high-scoring strategies and past papers", featured: false, msg: "Hi! I want to join WeePal for Class 10." },
// // ];

// // const intlTiers = [
// //   { cls: "Classes 4 – 6 · International", price: "49", currency: "$", desc: "Foundation years — Maths, Science, and English for international boards", featured: false, msg: "Hi! I am an international student and want to join WeePal for Classes 4-6." },
// //   { cls: "Classes 7 – 9 · International", price: "69", currency: "$", desc: "Critical middle years — aligned to IGCSE, IB MYP, or US Common Core", featured: true, msg: "Hi! I am an international student and want to join WeePal for Classes 7-9." },
// //   { cls: "Class 10 · Intl. Board Prep", price: "89", currency: "$", desc: "IGCSE / IB MYP / US Grade 10 — exam-focused strategy & confidence", featured: false, msg: "Hi! I am an international student and want to join WeePal for Class 10." },
// // ];
// const indianTiers = [
//   {
//     cls: "Classes 4 – 6",
//     price: "2,499",
//     annualPrice: "24,990",
//     currency: "₹",
//     desc: "Foundation years — building the concepts everything else depends on",
//     featured: false,
//     msg: "Hi! I want to join WeePal for Classes 4-6.",
//   },
//   {
//     cls: "Classes 7 – 9",
//     price: "2,999",
//     annualPrice: "29,990",
//     currency: "₹",
//     desc: "The critical years — where most students start falling behind if concepts aren't clear",
//     featured: true,
//     msg: "Hi! I want to join WeePal for Classes 7-9.",
//   },
//   {
//     cls: "Class 10 — Board Prep",
//     price: "3,499",
//     annualPrice: "34,990",
//     currency: "₹",
//     desc: "Board exam year — focused on high-scoring strategies and past papers",
//     featured: false,
//     msg: "Hi! I want to join WeePal for Class 10.",
//   },
// ];

// const intlTiers = [
//   {
//     cls: "Classes 4 – 6 · International",
//     price: "49",
//     annualPrice: "490",
//     currency: "$",
//     desc: "Foundation years — Maths, Science, and English for international boards",
//     featured: false,
//     msg: "Hi! I am an international student and want to join WeePal for Classes 4-6.",
//   },
//   {
//     cls: "Classes 7 – 9 · International",
//     price: "69",
//     annualPrice: "690",
//     currency: "$",
//     desc: "Critical middle years — aligned to IGCSE, IB MYP, or US Common Core",
//     featured: true,
//     msg: "Hi! I am an international student and want to join WeePal for Classes 7-9.",
//   },
//   {
//     cls: "Class 10 · Intl. Board Prep",
//     price: "89",
//     annualPrice: "890",
//     currency: "$",
//     desc: "IGCSE / IB MYP / US Grade 10 — exam-focused strategy & confidence",
//     featured: false,
//     msg: "Hi! I am an international student and want to join WeePal for Class 10.",
//   },
// ];
// const sharedFeats = [
//   "5 live classes per week",
//   "All class recordings",
//   "Weekly WhatsApp report to parents",
//   "All core subjects + Coding",
//   "Max 25 students per batch",
// ];

// export const Pricing = () => {
//   const { isIndia } = useMode();
//   const tiers = isIndia ? indianTiers : intlTiers;

//   return (
//     <section id="pricing" className="py-16 md:py-20">
//       <div className="container">
//         <SectionHeader center label="Pricing" title="Simple, Honest Fees" subtitle="No hidden charges, no registration fees. First trial class is always free." />
//         <div className="grid gap-5 md:grid-cols-3">
//           {tiers.map((t) => (
//             <div
//               key={t.cls}
//               className={`relative rounded-2xl border-[1.5px] p-7 text-center transition-all hover:-translate-y-1 hover:shadow-elegant ${
//                 t.featured ? "border-primary shadow-elegant" : "border-border bg-card hover:border-primary-light"
//               } bg-card`}
//             >
//               {t.featured && (
//                 <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-[11px] font-extrabold text-primary-foreground">
//                   Most Popular
//                 </span>
//               )}
//               <div className="mb-2 text-xs font-extrabold uppercase tracking-wider text-muted-foreground">{t.cls}</div>
//               <div className="font-display text-4xl font-bold leading-none text-primary-dark">
//                 <sup className="text-lg font-bold">{t.currency}</sup>
//                 {t.price}
//                 <sub className="font-sans text-[13px] font-semibold text-muted-foreground">/month</sub>
//               </div>
//               <p className="my-3 text-[13px] leading-snug text-muted-foreground">{t.desc}</p>
//               <ul className="mb-5 space-y-1.5 text-left">
//                 {sharedFeats.map((f) => (
//                   <li key={f} className="flex items-center gap-2 border-b border-muted py-1 text-[13px] text-foreground last:border-0">
//                     <span className="text-primary">✓</span>
//                     {f}
//                   </li>
//                 ))}
//               </ul>
//               <WhatsAppButton text="Book Free Trial" href={waLink(t.msg)} className="w-full" />
//             </div>
//           ))}
//         </div>
//         <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-primary-light bg-primary-pale p-4 text-sm font-bold text-primary-dark">
//           <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" />
//           <span>
//             {isIndia
//               ? "Great value: Regular private tuition costs ₹3,000–₹8,000/month per subject. WeePal gives you multiple subjects, weekly reports, and recordings — all in one plan."
//               : "Excellent value: US private tutoring averages $25–$50/hour per subject. WeePal gives structured multi-subject programs with weekly reports — starting at $49/month."}
//           </span>
//         </div>
//         <p className="mt-4 text-center text-sm text-muted-foreground">
//           All plans include a 100% money-back guarantee in the first week
//         </p>
//       </div>
//     </section>
//   );
// };


import { Lightbulb } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useMode, waLink } from "@/contexts/ModeContext";

const indianTiers = [
  {
    cls: "Classes 4 – 6",
    price: "3,999",
    annualPrice: "39,990",
    currency: "₹",
    desc: "Foundation years — building the concepts everything else depends on",
    featured: false,
    msg: "Hi! I want to join WeePal for Classes 4-6.",
  },
  {
    cls: "Classes 7 – 9",
    price: "4,499",
    annualPrice: "49,990",
    currency: "₹",
    desc: "The critical years — where most students start falling behind if concepts aren't clear",
    featured: true,
    msg: "Hi! I want to join WeePal for Classes 7-9.",
  },
  {
    cls: "Class 10 — Board Prep",
    price: "4,999",
    annualPrice: "49,990",
    currency: "₹",
    desc: "Board exam year — focused on high-scoring strategies and past papers",
    featured: false,
    msg: "Hi! I want to join WeePal for Class 10.",
  },
];

const intlTiers = [
  {
    cls: "Classes 4 – 6 · International",
    price: "59",
    annualPrice: "590",
    currency: "$",
    desc: "Foundation years — Maths, Science, and English for international boards",
    featured: false,
    msg: "Hi! I am an international student and want to join WeePal for Classes 4-6.",
  },
  {
    cls: "Classes 7 – 9 · International",
    price: "79",
    annualPrice: "790",
    currency: "$",
    desc: "Critical middle years — aligned to IGCSE, IB MYP, or US Common Core",
    featured: true,
    msg: "Hi! I am an international student and want to join WeePal for Classes 7-9.",
  },
  {
    cls: "Class 10 · Intl. Board Prep",
    price: "89",
    annualPrice: "890",
    currency: "$",
    desc: "IGCSE / IB MYP / US Grade 10 — exam-focused strategy & confidence",
    featured: false,
    msg: "Hi! I am an international student and want to join WeePal for Class 10.",
  },
];

const sharedFeats = [
  "5 live classes per week",
  "All class recordings",
  "Weekly WhatsApp report to parents",
  "All core subjects",
  "Small Batches",
];

export const Pricing = () => {
  const { isIndia } = useMode();
  const tiers = isIndia ? indianTiers : intlTiers;
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-16 md:py-20">
      <div className="container">
        <SectionHeader center label="Pricing" title="Simple, Honest Fees" subtitle="No hidden charges, no registration fees. First trial class is always free." />

        {/* Toggle */}
        {/* <div className="mb-8 flex items-center justify-center gap-3">
          <span className={`text-sm font-semibold ${!annual ? "text-primary-dark" : "text-muted-foreground"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative h-7 w-12 rounded-full transition-colors ${annual ? "bg-primary" : "bg-border"}`}
          >
            <span
              className={`absolute top-1 size-5 rounded-full bg-white shadow transition-transform ${annual ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
          <span className={`text-sm font-semibold ${annual ? "text-primary-dark" : "text-muted-foreground"}`}>
            Annual
          </span>
          <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-[11px] font-extrabold text-accent">
            2 MONTHS FREE
          </span>
        </div> */}

        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.cls}
              className={`relative rounded-2xl border-[1.5px] p-7 text-center transition-all hover:-translate-y-1 hover:shadow-elegant ${
                t.featured ? "border-primary shadow-elegant" : "border-border bg-card hover:border-primary-light"
              } bg-card`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-[11px] font-extrabold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <div className="mb-2 text-xs font-extrabold uppercase tracking-wider text-muted-foreground">{t.cls}</div>

              {annual ? (
                <div>
                  <div className="font-display text-4xl font-bold leading-none text-primary-dark">
                    <sup className="text-lg font-bold">{t.currency}</sup>
                    {t.annualPrice}
                    <sub className="font-sans text-[13px] font-semibold text-muted-foreground">/year</sub>
                  </div>
                  <div className="mt-1 text-[12px] text-muted-foreground line-through">
                    {t.currency}{t.price} × 12 = {t.currency}{(Number(t.price.replace(",", "")) * 12).toLocaleString("en-IN")}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="font-display text-4xl font-bold leading-none text-primary-dark">
                    <sup className="text-lg font-bold">{t.currency}</sup>
                    {t.price}
                    <sub className="font-sans text-[13px] font-semibold text-muted-foreground">/month</sub>
                  </div>
                  <div className="mt-1 text-[12px] text-muted-foreground">
                    * {t.currency}{t.annualPrice}/yr — save 2 months
                  </div>
                </div>
              )}

              <p className="my-3 text-[13px] leading-snug text-muted-foreground">{t.desc}</p>
              <ul className="mb-5 space-y-1.5 text-left">
                {sharedFeats.map((f) => (
                  <li key={f} className="flex items-center gap-2 border-b border-muted py-1 text-[13px] text-foreground last:border-0">
                    <span className="text-primary">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <WhatsAppButton text="Book Free Trial" href={waLink(t.msg)} className="w-full" />
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-primary-light bg-primary-pale p-4 text-sm font-bold text-primary-dark">
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" />
          <span>
            {isIndia
              ? "Great value: Regular private tuition costs ₹3,000–₹8,000/month per subject. WeePal gives you multiple subjects, weekly reports, and recordings — all in one plan."
              : "Excellent value: US private tutoring averages $25–$50/hour per subject. WeePal gives structured multi-subject programs with weekly reports — starting at $49/month."}
          </span>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          All plans include a 100% money-back guarantee in the first week
        </p>
      </div>
    </section>
  );
};
