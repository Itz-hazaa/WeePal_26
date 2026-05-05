import { useMode } from "@/contexts/ModeContext";

export const ModeToggle = () => {
  const { mode, setMode, currency } = useMode();
  return (
    <div className="bg-primary-dark sticky top-0 z-40 py-2.5">
      <div className="container flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="font-bold text-white/60">I am a parent of:</span>
        <div className="flex rounded-full border border-white/20 bg-white/10 p-0.5">
          {[
            { id: "india", label: "🇮🇳 Indian Student" },
            { id: "international", label: "🌍 International / UAE" },
          ].map((b) => (
            <button
              key={b.id}
              onClick={() => setMode(b.id as "india" | "international")}
              className={`rounded-full px-3.5 py-1.5 text-[12px] font-extrabold whitespace-nowrap transition-all ${
                mode === b.id ? "bg-primary-mid text-white" : "text-white/55 hover:text-white"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
        <span className="italic text-white/45 text-[11px]">Prices in {currency}</span>
      </div>
    </div>
  );
};
