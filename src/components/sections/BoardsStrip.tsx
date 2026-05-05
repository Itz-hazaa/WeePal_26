import { useMode } from "@/contexts/ModeContext";

export const BoardsStrip = () => {
  const { isIndia } = useMode();
  const boards = isIndia
    ? ["CBSE", "ICSE / ISC", "IB (PYP / MYP)", "SSC (Telangana / AP)", "IGCSE", "NIOS"]
    : ["IGCSE (Cambridge)", "IB (MYP / PYP)", "A-Level", "US Common Core", "CBSE (UAE Expats)"];
  return (
    <div className="border-b border-muted bg-card py-6">
      <div className="container flex flex-wrap items-center justify-center gap-2.5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground">We Teach:</span>
        {boards.map((b, i) => (
          <span key={b} className="flex items-center gap-2.5">
            <span className="rounded-full border-[1.5px] border-border bg-muted px-4 py-1.5 text-xs font-extrabold text-foreground">
              {b}
            </span>
            {i < boards.length - 1 && <span className="text-border">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
};
