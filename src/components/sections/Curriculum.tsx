import { useState } from "react";
import { Plus, FlaskConical, BookOpen, Code2, Globe2, ArrowRight, Lightbulb } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { useMode } from "@/contexts/ModeContext";

type Subject = { icon: any; title: string; board: string; topics: string[] };
type Board = { id: string; label: string; subjects: Subject[] };

const indianBoards: Board[] = [
  {
    id: "cbse", label: "CBSE",
    subjects: [
      { icon: Plus, title: "Mathematics", board: "CBSE · Classes 4–10 · NCERT", topics: ["Numbers, fractions & decimals (Cl. 4–6)", "Algebra, equations & geometry (Cl. 7–8)", "Polynomials, coordinate geometry (Cl. 9–10)", "Statistics, probability & trigonometry (Cl. 10)", "Board exam practice & past papers"] },
      { icon: FlaskConical, title: "Science", board: "CBSE · Classes 6–10 · NCERT", topics: ["General Science: plants, animals, materials", "Physics: force, motion, electricity & light", "Chemistry: acids, atoms, carbon compounds", "Biology: cells, reproduction, heredity", "NCERT exercises + diagram practice"] },
      { icon: BookOpen, title: "English", board: "CBSE · Honeydew / First Flight", topics: ["Reading comprehension & grammar", "Writing: letters, essays, notices, articles", "Honeydew, First Flight, Beehive chapters", "Vocabulary, idioms & formal language", "Board exam writing skills (Cl. 10)"] },
      { icon: Code2, title: "Coding & Thinking Skills", board: "WeePal Signature · All Classes", topics: ["Block coding & Scratch (Cl. 4–6)", "Python basics: variables, loops (Cl. 7–9)", "Problem-solving & logical reasoning", "Communication & presentation skills", "Robotics thinking — how machines work"] },
    ],
  },
  {
    id: "icse", label: "ICSE",
    subjects: [
      { icon: Plus, title: "Mathematics", board: "ICSE · Classes 4–10 · Selina", topics: ["Number theory, fractions, ratios & profit-loss", "Algebra: simultaneous equations, quadratics", "Geometry: circles, mensuration, trigonometry", "Statistics & probability (Cl. 9–10)", "Selina exercises & past ISC papers"] },
      { icon: FlaskConical, title: "Science (Phy/Chem/Bio)", board: "ICSE · Separate from Cl. 9", topics: ["Combined Science (Cl. 6–8) topic-by-topic", "Physics: mechanics, heat, optics, electricity", "Chemistry: formulae, reactions, organic basics", "Biology: systems, genetics, ecosystem", "ICSE long-answer strategies"] },
      { icon: BookOpen, title: "English Language & Lit", board: "ICSE · Treasure Chest / Echoes", topics: ["Grammar: tenses, clauses, transformation", "Composition: essays, letters, reports", "Literature: prescribed poems and stories", "Drama: prescribed text", "Comprehension & précis writing"] },
      { icon: Code2, title: "Coding & Thinking Skills", board: "WeePal Signature · All Classes", topics: ["Block coding (Scratch) for beginners", "Python fundamentals (Cl. 7+)", "Logical reasoning & computational thinking", "Communication & presentation"] },
    ],
  },
  {
    id: "ib", label: "IB (MYP)",
    subjects: [
      { icon: Plus, title: "Mathematics", board: "IB MYP · Criterion-Based", topics: ["Number & algebra — criterion A", "Geometry & trigonometry — criterion B", "Statistics & probability — criterion C", "Mathematical reasoning & investigation", "E-assessment style problem solving"] },
      { icon: FlaskConical, title: "Sciences", board: "IB MYP · Inquiry-Based", topics: ["Integrated sciences — inquiry approach", "Physics, Chemistry, Biology (MYP 4–5)", "Scientific investigation & lab reports", "Criterion-aligned assessments"] },
      { icon: BookOpen, title: "Language & Literature", board: "IB MYP · English A", topics: ["Text analysis & literary commentary", "Creative writing and formal registers", "Oral presentations & communication", "Personal project support (MYP 5)"] },
      { icon: Code2, title: "Coding & Design Thinking", board: "WeePal + IB Design", topics: ["Design cycle thinking", "Python and block coding", "Problem-solving & innovation mindset", "Robotics projects aligned to IB design"] },
    ],
  },
  {
    id: "ssc", label: "SSC (State Board)",
    subjects: [
      { icon: Plus, title: "Mathematics", board: "SSC · Telangana & AP", topics: ["Arithmetic: real numbers, sets, progressions", "Algebra: polynomials, quadratic equations", "Geometry: similar triangles, tangents, circles", "Trigonometry, mensuration & statistics", "SSC past paper practice (10th Public Exam)"] },
      { icon: FlaskConical, title: "Physical Science & Biology", board: "SSC · Telangana Board", topics: ["Physics: gravity, electricity, sound, light", "Chemistry: chemical reactions, periodic table", "Biology: life processes, control & coordination", "Environmental science chapters", "Diagram practice + 4-mark & 8-mark answers"] },
      { icon: BookOpen, title: "English & Telugu / Hindi", board: "SSC · State Board Textbooks", topics: ["English: prescribed lessons + grammar", "Writing: formal letters, essays, summaries", "Telugu / Hindi: prose, poetry, grammar", "Comprehension practice for SSC exams"] },
      { icon: Code2, title: "Coding & Thinking Skills", board: "WeePal Signature", topics: ["Block coding basics (Scratch)", "Python for beginners (Cl. 7+)", "Logical reasoning for competitive exams", "Communication & study skills"] },
    ],
  },
];

const intlBoards: Board[] = [
  {
    id: "igcse", label: "IGCSE (Cambridge)",
    subjects: [
      { icon: Plus, title: "Mathematics (0580)", board: "IGCSE · Core & Extended", topics: ["Number: fractions, percentages, standard form", "Algebra: equations, inequalities, functions", "Geometry: circles, Pythagoras, transformation", "Statistics: cumulative frequency, probability", "Cambridge past paper practice"] },
      { icon: FlaskConical, title: "Sciences (0625/0610/0620)", board: "Physics / Bio / Chem", topics: ["Physics: motion, thermal physics, electricity", "Chemistry: bonding, reactions, electrochemistry", "Biology: cells, ecosystems, genetics", "Practical skills & experimental design", "Multiple choice + structured questions"] },
      { icon: BookOpen, title: "English (0510 / 0511)", board: "ESL & First Language", topics: ["Reading: inference, summary, directed writing", "Writing: descriptive, argumentative, narrative", "Listening skills (ESL component)", "Past paper practice (Paper 1 & 2)"] },
      { icon: Code2, title: "Coding & Thinking Skills", board: "WeePal Signature", topics: ["Python fundamentals & algorithms", "Computational thinking (IGCSE CS prep)", "Problem-solving & logic", "Robotics thinking & innovation"] },
    ],
  },
  {
    id: "ibint", label: "IB MYP",
    subjects: [
      { icon: Plus, title: "Mathematics", board: "IB MYP · Years 1–5", topics: ["Number & algebra (Criterion A)", "Geometry & measurement (Criterion B)", "Statistics & probability (Criterion C)", "Investigation tasks & reasoning", "E-assessment preparation (MYP 4–5)"] },
      { icon: FlaskConical, title: "Integrated Sciences", board: "IB MYP · Inquiry-Based", topics: ["Interdisciplinary science approach (MYP 1–3)", "Physics, Chemistry, Biology (MYP 4–5)", "Scientific investigation & lab reports", "Criterion-based assessment"] },
      { icon: BookOpen, title: "Language & Literature", board: "IB MYP · English A", topics: ["Text analysis & literary commentary", "Formal & creative writing registers", "Oral presentations & communication", "Personal project (MYP 5) guidance"] },
    ],
  },
  {
    id: "uscc", label: "US Common Core",
    subjects: [
      { icon: Plus, title: "Mathematics", board: "Grades 4–10", topics: ["Operations & algebraic thinking (Gr. 4–6)", "Ratios, proportional relationships (Gr. 6–7)", "Linear algebra, geometry, statistics (Gr. 7–9)", "Functions, polynomials (Gr. 9–10)", "SAT Math foundations (Gr. 9–10)"] },
      { icon: FlaskConical, title: "Science", board: "US NGSS · Grades 4–10", topics: ["Life science: ecosystems, genetics, evolution", "Physical science: matter, forces, energy", "Earth & space science (Gr. 6–8)", "Physics & Chemistry (Gr. 9–10)", "NGSS investigation skills"] },
    ],
  },
  {
    id: "cbseuae", label: "CBSE (UAE/Expat)",
    subjects: [
      { icon: Plus, title: "Mathematics", board: "UAE Expats · NCERT", topics: ["Full NCERT curriculum — Classes 4–10", "Number systems, algebra, geometry", "Board exam preparation (Cl. 10)", "UAE time-zone friendly slots"] },
      { icon: FlaskConical, title: "Science", board: "UAE Expats · NCERT", topics: ["NCERT Science — Classes 6–10", "Physics, Chemistry, Biology (Cl. 9–10)", "NCERT exercises + past CBSE papers", "Available in UAE evening slots"] },
      { icon: BookOpen, title: "English & Hindi", board: "Textbooks + Board Writing", topics: ["CBSE English textbooks (all classes)", "Grammar, composition, writing skills", "Hindi (optional) for expat families", "Board exam writing practice (Cl. 10)"] },
    ],
  },
];

export const Curriculum = () => {
  const { isIndia } = useMode();
  const boards = isIndia ? indianBoards : intlBoards;
  const [active, setActive] = useState(boards[0].id);
  const current = boards.find((b) => b.id === active) ?? boards[0];

  return (
    <section id="curriculum" className="py-16 md:py-20">
      <div className="container">
        <SectionHeader
          center
          labelVariant="accent"
          label="What Your Child Learns"
          title="The WeePal Curriculum"
          subtitle="Every lesson is built around your child's specific board and class. Click your board below to see what we cover."
        />

        {!isIndia && (
          <div className="mb-8 flex flex-wrap items-center gap-5 rounded-2xl bg-gradient-to-br from-[hsl(220_55%_25%)] to-[hsl(220_60%_18%)] p-7 text-white">
            <Globe2 className="size-9 shrink-0" />
            <div className="flex-1 min-w-[260px]">
              <h3 className="mb-1 text-lg font-extrabold">For International & Overseas Students</h3>
              <p className="text-sm leading-relaxed text-white/75">
                WeePal teaches IGCSE, IB MYP, A-Level foundations, US Common Core, and CBSE for expats. All classes in English with flexible time zones.
              </p>
            </div>
          </div>
        )}

        <div className="mb-6 flex flex-wrap gap-2">
          {boards.map((b) => (
            <button
              key={b.id}
              onClick={() => setActive(b.id)}
              className={`rounded-full border-[1.5px] px-4 py-1.5 text-sm font-extrabold transition-all ${
                active === b.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary-light"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {current.subjects.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-xl border-[1.5px] border-border bg-card p-5 shadow-soft">
                <div className="mb-3 flex items-center gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary-pale text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-primary-dark">{s.title}</div>
                    <div className="text-[11px] font-bold text-primary-mid">{s.board}</div>
                  </div>
                </div>
                <ul className="space-y-1">
                  {s.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 border-b border-muted py-1.5 text-[13px] text-foreground last:border-0">
                      <ArrowRight className="mt-0.5 size-3 shrink-0 text-primary-mid" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-lg border border-accent-light bg-accent-pale p-4 text-sm font-bold text-accent">
          <Lightbulb className="mt-0.5 size-4 shrink-0" />
          <span>
            {isIndia
              ? "Parent tip: All lessons follow your child's exact school textbooks — they will directly see improvement in school tests."
              : "Note for international parents: All classes are in English. Timings work across UAE, UK, US & Singapore time zones."}
          </span>
        </div>
      </div>
    </section>
  );
};
