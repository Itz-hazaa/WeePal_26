// import { ShieldCheck, Check } from "lucide-react";
// import { WhatsAppButton } from "@/components/WhatsAppButton";
// import { SectionHeader } from "@/components/SectionHeader";
// import { useMode, waLink } from "@/contexts/ModeContext";

// const details = [
//   { lbl: "Schedule", val: "5 days a week — 3 academic + 2 skill sessions (45 min each)" },
//   { lbl: "Who Is This For", val: "Classes 4–10 · CBSE, ICSE, IB, SSC, IGCSE · Max 25 students" },
//   { lbl: "Subjects", val: "Maths · Science · English · Social Studies + Coding & Thinking Skills" },
//   { lbl: "Cost", val: "Affordable monthly fee — see pricing below · 100% refund in week 1" },
// ];

// const includes = [
//   "Expert teacher (IIT/NIT trained) with structured lesson plans",
//   "Live interactive classes — your child can ask questions anytime",
//   "Weekly progress reports sent to parents on WhatsApp",
//   "All class recordings for revision before exams",
//   "Follows your child's exact board syllabus",
//   "Coding, robotics thinking & communication built in",
// ];

// const benefits = [
//   { title: "🚀 Real results, not just promises", desc: "500+ students taught. 5+ Hyderabad schools using our robotics curriculum. Featured on NDTV." },
//   { title: "💬 Everything on WhatsApp — simple for parents", desc: "Book classes, get reports, ask questions — all on WhatsApp. No apps to download." },
//   { title: "🎯 Classes built around your child", desc: "We ask about your child's board, class, weak subjects, and learning style before the first class." },
//   { title: "🌍 India + International families welcome", desc: "Students in Hyderabad and Abu Dhabi. Live online means no commute — classes wherever your child is." },
// ];

// export const Program = () => {
//   const { isIndia } = useMode();
//   return (
//     <section id="classes" className="bg-primary-pale py-16 md:py-20">
//       <div className="container">
//         <SectionHeader
//           center
//           labelVariant="accent"
//           label="Our Main Program"
//           title="The WeePal Foundation Program"
//           subtitle="10 weeks of live, structured classes — 5 days a week, built around your child's board and syllabus."
//         />
//         <div className="overflow-hidden rounded-2xl shadow-elegant">
//           <div className="grid lg:grid-cols-2">
//             <div className="bg-primary p-8 md:p-11 text-primary-foreground">
//               <h2 className="mb-1 text-[clamp(20px,2.4vw,30px)] font-bold">WeePal Foundation Program</h2>
//               <p className="mb-6 text-sm text-white/75">10 Weeks · Live Online · Board-Aligned · Classes 4–10</p>
//               {details.map((d) => (
//                 <div key={d.lbl} className="mb-4">
//                   <div className="text-[10px] font-extrabold uppercase tracking-widest text-primary-light">{d.lbl}</div>
//                   <div className="text-sm font-semibold text-white">{d.val}</div>
//                 </div>
//               ))}
//               <ul className="mt-5 space-y-0">
//                 {includes.map((i) => (
//                   <li key={i} className="flex items-start gap-2.5 border-t border-white/10 py-1.5 text-[13px] text-white/85">
//                     <Check className="mt-0.5 size-3.5 shrink-0 text-primary-light" strokeWidth={3} />
//                     {i}
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/85">
//                 <ShieldCheck className="size-3.5" /> 100% Money-Back Guarantee — First Week
//               </div>
//             </div>

//             <div className="bg-primary-dark p-8 md:p-11 text-white">
//               <h3 className="mb-5 text-lg font-extrabold">Why Parents Love WeePal</h3>
//               {benefits.map((b) => (
//                 <div key={b.title} className="mb-3 rounded-lg border border-white/10 bg-white/5 p-4">
//                   <div className="mb-1 text-sm font-extrabold">{b.title}</div>
//                   <div className="text-xs leading-relaxed text-white/65">{b.desc}</div>
//                 </div>
//               ))}
//               <WhatsAppButton
//                 text="Reserve Your Child's Spot →"
//                 href={waLink(
//                   isIndia
//                     ? "Hi! I want to reserve a WeePal spot for my child."
//                     : "Hi! I'm an international parent — I want to reserve a WeePal spot."
//                 )}
//                 className="mt-5 w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
