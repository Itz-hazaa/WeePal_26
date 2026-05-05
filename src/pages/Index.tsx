// import { ModeProvider } from "@/contexts/ModeContext";
// import { ModeToggle } from "@/components/sections/ModeToggle";
// import { Navbar } from "@/components/sections/Navbar";
// import { Hero } from "@/components/sections/Hero";
// import { BoardsStrip } from "@/components/sections/BoardsStrip";
// import { HowItWorks } from "@/components/sections/HowItWorks";
// import { WhyWeePal } from "@/components/sections/WhyWeePal";
// import { Curriculum } from "@/components/sections/Curriculum";
// // import { Program } from "@/components/sections/Program";
// import { Pricing } from "@/components/sections/Pricing";
// import { WhatsAppSection } from "@/components/sections/WhatsAppSection";
// import { Stats } from "@/components/sections/Stats";
// import { FAQ } from "@/components/sections/FAQ";
// import { Demo } from "@/components/sections/Demo";
// import { Founder } from "@/components/sections/Founder";
// import { FinalCTA } from "@/components/sections/FinalCTA";
// import { Footer } from "@/components/sections/Footer";
// import { StickyWhatsApp } from "@/components/sections/StickyWhatsApp";

// const Index = () => {
//   return (
//     <ModeProvider>
//       <div className="min-h-screen pb-[58px] md:pb-0">
//         <ModeToggle />
//         <Navbar />
//         <main>
//           <Hero />
//           <BoardsStrip />
//           <HowItWorks />
//           <WhyWeePal />
//           <Curriculum />
//           {/* <Program /> */}
//           <Pricing />
//           <WhatsAppSection />
//           <Stats />
//           <FAQ />
//           <Demo />
//           <Founder />
//           <FinalCTA />
//         </main>
//         <Footer />
//         <StickyWhatsApp />
//       </div>
//     </ModeProvider>
//   );
// };

// export default Index;
import { useState } from "react";
import { ModeProvider } from "@/contexts/ModeContext";
import { ModeToggle } from "@/components/sections/ModeToggle";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BoardsStrip } from "@/components/sections/BoardsStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyWeePal } from "@/components/sections/WhyWeePal";
import { Curriculum } from "@/components/sections/Curriculum";
// import { Program } from "@/components/sections/Program";
import { Pricing } from "@/components/sections/Pricing";
import { WhatsAppSection } from "@/components/sections/WhatsAppSection";
import { Stats } from "@/components/sections/Stats";
import { FAQ } from "@/components/sections/FAQ";
import { Demo } from "@/components/sections/Demo";
import { Founder } from "@/components/sections/Founder";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { StickyWhatsApp } from "@/components/sections/StickyWhatsApp";

// ─── Types ────────────────────────────────────────────────────────────────────
type Brand = "weepal" | "techshala";

// ─── Brand Selector ────────────────────────────────────────────────────────────
const BrandSelector = ({ onSelect }: { onSelect: (b: Brand) => void }) => {
  const [hovered, setHovered] = useState<Brand | null>(null);
  const [chosen, setChosen] = useState<Brand | null>(null);

  const pick = (brand: Brand) => {
    if (brand === "techshala") {
      window.open("https://techshala-murex.vercel.app/", "_blank");
      return;
    }
    setChosen(brand);
    setTimeout(() => onSelect(brand), 650);
  };

  const weepalExpand = hovered === "weepal" && !chosen;
  const weepalShrink = hovered === "techshala" && !chosen;
  const techExpand = hovered === "techshala" && !chosen;
  const techShrink = hovered === "weepal" && !chosen;

  return (
    <div style={S.root}>
      {/* ── WeePal side ─────────────────────────────────────── */}
      <div
        style={{
          ...S.side,
          width: weepalExpand ? "62%" : weepalShrink ? "38%" : "50%",
          background: "linear-gradient(135deg,#fff9f0 0%,#ffecd9 55%,#ffe0c0 100%)",
          ...(chosen === "weepal" ? S.takeOver : {}),
          ...(chosen === "techshala" ? S.exitLeft : {}),
        }}
        onMouseEnter={() => setHovered("weepal")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => pick("weepal")}
      >
        <div style={{ ...S.blob, width: 320, height: 320, background: "#d4760a14", top: -80, left: -80 }} />
        <div style={{ ...S.blob, width: 180, height: 180, background: "#145f7814", bottom: 60, right: 40 }} />

        <div style={S.content}>
          <span style={{ ...S.badge, color: "#d4760a", border: "1.5px solid #d4760a55", background: "#d4760a11" }}>
            Ages 9 – 16
          </span>

          <div style={S.logo}>
            <span style={{ color: "#d4760a" }}>Wee</span>
            <span style={{ color: "#145f78" }}>Pal</span>
          </div>

          <p style={{ ...S.tagline, color: "#7a4a1e" }}>
            Online tuitions <br />for future-ready students.
          </p>

          <div style={{
            ...S.icons,
            opacity: weepalExpand ? 1 : 0,
            transform: weepalExpand ? "translateY(0)" : "translateY(10px)",
          }}>
            📚 🎨 🌟
          </div>

          <button style={{
            ...S.cta,
            ...S.weepalCta,
            opacity: weepalExpand ? 1 : 0,
            transform: weepalExpand ? "translateY(0)" : "translateY(14px)",
          }}>
            Enter WeePal →
          </button>
        </div>
      </div>

      {/* ── Centre divider ──────────────────────────────────── */}
      <div style={{
        ...S.divider,
        left: hovered === "weepal" ? "62%" : hovered === "techshala" ? "38%" : "50%",
      }}>
        <div style={S.orBubble}>OR</div>
      </div>

      {/* ── TechShala side ──────────────────────────────────── */}
      <div
        style={{
          ...S.side,
          width: techExpand ? "62%" : techShrink ? "38%" : "50%",
          background: "linear-gradient(135deg,#080808 0%,#141414 50%,#1e0505 100%)",
          ...(chosen === "techshala" ? S.takeOver : {}),
          ...(chosen === "weepal" ? S.exitRight : {}),
        }}
        onMouseEnter={() => setHovered("techshala")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => pick("techshala")}
      >
        <div style={S.gridLines} />
        <div style={{ ...S.blob, width: 280, height: 280, background: "#8b000018", bottom: -60, right: -60 }} />

        <div style={S.content}>
          <span style={{ ...S.badge, color: "#ff7070", border: "1.5px solid #8b000066", background: "#8b000022" }}>
            All Ages
          </span>

          <div style={{ ...S.logo, fontFamily: "'Courier New',monospace", letterSpacing: "-2px" }}>
            <span style={{ color: "#ffffff" }}>Tech</span>
            <span style={{ color: "#8b0000" }}>Shala</span>
          </div>

          <p style={{ ...S.tagline, color: "#aaaaaa" }}>
            Robotics & coding<br />for future innovators
          </p>

          <div style={{
            ...S.icons,
            opacity: techExpand ? 1 : 0,
            transform: techExpand ? "translateY(0)" : "translateY(10px)",
          }}>
            🤖 ⚙️ 💡
          </div>

          <button style={{
            ...S.cta,
            ...S.techCta,
            opacity: techExpand ? 1 : 0,
            transform: techExpand ? "translateY(0)" : "translateY(14px)",
          }}>
            Enter TechShala →
          </button>
        </div>
      </div>

      {/* ── Tap hint (mobile) ───────────────────────────────── */}
      <div style={S.tapHint}>Tap to enter ↑</div>
    </div>
  );
};

// ─── Inline styles ────────────────────────────────────────────────────────────
const TRANSITION = "all 0.55s cubic-bezier(0.77,0,0.175,1)";

const S: Record<string, React.CSSProperties> = {
  root: {
    position: "fixed",
    inset: 0,
    display: "flex",
    zIndex: 9999,
    overflow: "hidden",
    fontFamily: "'Segoe UI',system-ui,sans-serif",
    cursor: "pointer",
  },
  side: {
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: TRANSITION,
    overflow: "hidden",
    flexShrink: 0,
  },
  takeOver: {
    width: "100% !important" as any,
    zIndex: 10,
  },
  exitLeft: {
    transform: "translateX(-100%)",
    opacity: 0,
  },
  exitRight: {
    transform: "translateX(100%)",
    opacity: 0,
  },
  blob: {
    position: "absolute",
    borderRadius: "50%",
    pointerEvents: "none",
  },
  gridLines: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(139,0,0,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(139,0,0,0.07) 1px,transparent 1px)",
    backgroundSize: "40px 40px",
    pointerEvents: "none",
  },
  content: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    padding: "40px 28px",
    textAlign: "center",
    userSelect: "none",
  },
  badge: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 2,
    textTransform: "uppercase" as const,
    padding: "6px 16px",
    borderRadius: 100,
  },
  logo: {
    display: "flex",
    alignItems: "baseline",
    gap: 2,
    fontFamily: "'Georgia','Times New Roman',serif",
    fontSize: "clamp(54px,8vw,90px)",
    fontWeight: 900,
    lineHeight: 1,
    transition: "transform 0.3s ease",
  },
  tagline: {
    fontSize: "clamp(13px,1.6vw,16px)",
    lineHeight: 1.6,
    maxWidth: 220,
  },
  icons: {
    fontSize: 28,
    letterSpacing: 8,
    transition: "opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s",
  },
  cta: {
    padding: "13px 28px",
    borderRadius: 100,
    border: "none",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    transition: "opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s",
    letterSpacing: 0.3,
  },
  weepalCta: {
    background: "linear-gradient(135deg,#d4760a,#b8620a)",
    color: "#fff",
    boxShadow: "0 8px 28px #d4760a44",
  },
  techCta: {
    background: "linear-gradient(135deg,#8b0000,#6b0000)",
    color: "#fff",
    boxShadow: "0 8px 28px #8b000055",
  },
  divider: {
    position: "absolute",
    top: 0,
    width: 2,
    height: "100%",
    zIndex: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: TRANSITION,
    pointerEvents: "none",
    background: "linear-gradient(to bottom,transparent,#d4760a55 35%,#8b000055 65%,transparent)",
  },
  orBubble: {
    background: "#fff",
    border: "2px solid #ddd",
    borderRadius: "50%",
    width: 44,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: 1,
    color: "#888",
    boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
    flexShrink: 0,
  },
  tapHint: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: 11,
    color: "#aaa",
    letterSpacing: 1,
    pointerEvents: "none",
    display: "none",
  },
};

// ─── Main page ────────────────────────────────────────────────────────────────
const Index = () => {
  const [activeBrand, setActiveBrand] = useState<Brand | null>(null);
  const [selectorVisible, setSelectorVisible] = useState(true);

  const handleBrandSelect = (brand: Brand) => {
    setSelectorVisible(false);
    setTimeout(() => setActiveBrand(brand), 650);
  };

  const handleBack = () => {
    setActiveBrand(null);
    setSelectorVisible(true);
  };

  return (
    <ModeProvider>
      {/* Brand selector overlays everything until a choice is made */}
      {selectorVisible && (
        <BrandSelector onSelect={handleBrandSelect} />
      )}

      {/* WeePal site — fades in after selector leaves */}
      <div
        className="min-h-screen pb-[58px] md:pb-0"
        style={{
          opacity: activeBrand === "weepal" ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: activeBrand === "weepal" ? "auto" : "none",
        }}
      >
        <ModeToggle />
        <Navbar />
        <main>
          <Hero />
          <BoardsStrip />
          <HowItWorks />
          <WhyWeePal />
          <Curriculum />
          {/* <Program /> */}
          <Pricing />
          <WhatsAppSection />
          <Stats />
          <FAQ />
          <Demo />
          <Founder />
          <FinalCTA />
        </main>
        <Footer />
        <StickyWhatsApp />
      </div>
    </ModeProvider>
  );
};

export default Index;
