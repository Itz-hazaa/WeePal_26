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

// // export default Index;
// import { useState } from "react";
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

// // ─── Types ────────────────────────────────────────────────────────────────────
// type Brand = "weepal" | "techshala";

// // ─── Brand Selector ────────────────────────────────────────────────────────────
// const BrandSelector = ({ onSelect }: { onSelect: (b: Brand) => void }) => {
//   const [hovered, setHovered] = useState<Brand | null>(null);
//   const [chosen, setChosen] = useState<Brand | null>(null);

//   const pick = (brand: Brand) => {
//     if (brand === "techshala") {
//       window.open("https://techshala-murex.vercel.app/", "_blank");
//       return;
//     }
//     setChosen(brand);
//     setTimeout(() => onSelect(brand), 650);
//   };

//   const weepalExpand = hovered === "weepal" && !chosen;
//   const weepalShrink = hovered === "techshala" && !chosen;
//   const techExpand = hovered === "techshala" && !chosen;
//   const techShrink = hovered === "weepal" && !chosen;

//   return (
//     <div style={S.root}>
//       {/* ── WeePal side ─────────────────────────────────────── */}
//       <div
//         style={{
//           ...S.side,
//           width: weepalExpand ? "62%" : weepalShrink ? "38%" : "50%",
//           background: "linear-gradient(135deg,#fff9f0 0%,#ffecd9 55%,#ffe0c0 100%)",
//           ...(chosen === "weepal" ? S.takeOver : {}),
//           ...(chosen === "techshala" ? S.exitLeft : {}),
//         }}
//         onMouseEnter={() => setHovered("weepal")}
//         onMouseLeave={() => setHovered(null)}
//         onClick={() => pick("weepal")}
//       >
//         <div style={{ ...S.blob, width: 320, height: 320, background: "#d4760a14", top: -80, left: -80 }} />
//         <div style={{ ...S.blob, width: 180, height: 180, background: "#145f7814", bottom: 60, right: 40 }} />

//         <div style={S.content}>
//           <span style={{ ...S.badge, color: "#d4760a", border: "1.5px solid #d4760a55", background: "#d4760a11" }}>
//             Education for All
//           </span>

//           <div style={S.logo}>
//             <span style={{ color: "#d4760a" }}>Wee</span>
//             <span style={{ color: "#145f78" }}>Pal</span>
//           </div>

//           <p style={{ ...S.tagline, color: "#7a4a1e" }}>
//             Online tuitions <br />for future-ready students.
//           </p>

//           <div style={{
//             ...S.icons,
//             opacity: weepalExpand ? 1 : 0,
//             transform: weepalExpand ? "translateY(0)" : "translateY(10px)",
//           }}>
//             📚 🎨 🌟
//           </div>

//           <button style={{
//             ...S.cta,
//             ...S.weepalCta,
//             opacity: weepalExpand ? 1 : 0,
//             transform: weepalExpand ? "translateY(0)" : "translateY(14px)",
//           }}>
//             Enter WeePal →
//           </button>
//         </div>
//       </div>

//       {/* ── Centre divider ──────────────────────────────────── */}
//       <div style={{
//         ...S.divider,
//         left: hovered === "weepal" ? "62%" : hovered === "techshala" ? "38%" : "50%",
//       }}>
//         <div style={S.orBubble}>OR</div>
//       </div>

//       {/* ── TechShala side ──────────────────────────────────── */}
//       <div
//         style={{
//           ...S.side,
//           width: techExpand ? "62%" : techShrink ? "38%" : "50%",
//           background: "linear-gradient(135deg,#080808 0%,#141414 50%,#1e0505 100%)",
//           ...(chosen === "techshala" ? S.takeOver : {}),
//           ...(chosen === "weepal" ? S.exitRight : {}),
//         }}
//         onMouseEnter={() => setHovered("techshala")}
//         onMouseLeave={() => setHovered(null)}
//         onClick={() => pick("techshala")}
//       >
//         <div style={S.gridLines} />
//         <div style={{ ...S.blob, width: 280, height: 280, background: "#8b000018", bottom: -60, right: -60 }} />

//         <div style={S.content}>
//           <span style={{ ...S.badge, color: "#ff7070", border: "1.5px solid #8b000066", background: "#8b000022" }}>
//             Tech for All
//           </span>

//           <div style={{ ...S.logo, fontFamily: "'Courier New',monospace", letterSpacing: "-2px" }}>
//             <span style={{ color: "#ffffff" }}>Tech</span>
//             <span style={{ color: "#8b0000" }}>Shala</span>
//           </div>

//           <p style={{ ...S.tagline, color: "#aaaaaa" }}>
//             Robotics & coding<br />for future innovators
//           </p>

//           <div style={{
//             ...S.icons,
//             opacity: techExpand ? 1 : 0,
//             transform: techExpand ? "translateY(0)" : "translateY(10px)",
//           }}>
//             🤖 ⚙️ 💡
//           </div>

//           <button style={{
//             ...S.cta,
//             ...S.techCta,
//             opacity: techExpand ? 1 : 0,
//             transform: techExpand ? "translateY(0)" : "translateY(14px)",
//           }}>
//             Enter TechShala →
//           </button>
//         </div>
//       </div>

//       {/* ── Tap hint (mobile) ───────────────────────────────── */}
//       <div style={S.tapHint}>Tap to enter ↑</div>
//     </div>
//   );
// };

// // ─── Inline styles ────────────────────────────────────────────────────────────
// const TRANSITION = "all 0.55s cubic-bezier(0.77,0,0.175,1)";

// const S: Record<string, React.CSSProperties> = {
//   root: {
//     position: "fixed",
//     inset: 0,
//     display: "flex",
//     zIndex: 9999,
//     overflow: "hidden",
//     fontFamily: "'Segoe UI',system-ui,sans-serif",
//     cursor: "pointer",
//   },
//   side: {
//     position: "relative",
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     transition: TRANSITION,
//     overflow: "hidden",
//     flexShrink: 0,
//   },
//   takeOver: {
//     width: "100% !important" as any,
//     zIndex: 10,
//   },
//   exitLeft: {
//     transform: "translateX(-100%)",
//     opacity: 0,
//   },
//   exitRight: {
//     transform: "translateX(100%)",
//     opacity: 0,
//   },
//   blob: {
//     position: "absolute",
//     borderRadius: "50%",
//     pointerEvents: "none",
//   },
//   gridLines: {
//     position: "absolute",
//     inset: 0,
//     backgroundImage:
//       "linear-gradient(rgba(139,0,0,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(139,0,0,0.07) 1px,transparent 1px)",
//     backgroundSize: "40px 40px",
//     pointerEvents: "none",
//   },
//   content: {
//     position: "relative",
//     zIndex: 2,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 20,
//     padding: "40px 28px",
//     textAlign: "center",
//     userSelect: "none",
//   },
//   badge: {
//     fontSize: 11,
//     fontWeight: 700,
//     letterSpacing: 2,
//     textTransform: "uppercase" as const,
//     padding: "6px 16px",
//     borderRadius: 100,
//   },
//   logo: {
//     display: "flex",
//     alignItems: "baseline",
//     gap: 2,
//     fontFamily: "'Georgia','Times New Roman',serif",
//     fontSize: "clamp(54px,8vw,90px)",
//     fontWeight: 900,
//     lineHeight: 1,
//     transition: "transform 0.3s ease",
//   },
//   tagline: {
//     fontSize: "clamp(13px,1.6vw,16px)",
//     lineHeight: 1.6,
//     maxWidth: 220,
//   },
//   icons: {
//     fontSize: 28,
//     letterSpacing: 8,
//     transition: "opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s",
//   },
//   cta: {
//     padding: "13px 28px",
//     borderRadius: 100,
//     border: "none",
//     fontSize: 15,
//     fontWeight: 700,
//     cursor: "pointer",
//     transition: "opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s",
//     letterSpacing: 0.3,
//   },
//   weepalCta: {
//     background: "linear-gradient(135deg,#d4760a,#b8620a)",
//     color: "#fff",
//     boxShadow: "0 8px 28px #d4760a44",
//   },
//   techCta: {
//     background: "linear-gradient(135deg,#8b0000,#6b0000)",
//     color: "#fff",
//     boxShadow: "0 8px 28px #8b000055",
//   },
//   divider: {
//     position: "absolute",
//     top: 0,
//     width: 2,
//     height: "100%",
//     zIndex: 5,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     transition: TRANSITION,
//     pointerEvents: "none",
//     background: "linear-gradient(to bottom,transparent,#d4760a55 35%,#8b000055 65%,transparent)",
//   },
//   orBubble: {
//     background: "#fff",
//     border: "2px solid #ddd",
//     borderRadius: "50%",
//     width: 44,
//     height: 44,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: 10,
//     fontWeight: 800,
//     letterSpacing: 1,
//     color: "#888",
//     boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
//     flexShrink: 0,
//   },
//   tapHint: {
//     position: "absolute",
//     bottom: 20,
//     left: "50%",
//     transform: "translateX(-50%)",
//     fontSize: 11,
//     color: "#aaa",
//     letterSpacing: 1,
//     pointerEvents: "none",
//     display: "none",
//   },
// };

// // ─── Main page ────────────────────────────────────────────────────────────────
// const Index = () => {
//   const [activeBrand, setActiveBrand] = useState<Brand | null>(null);
//   const [selectorVisible, setSelectorVisible] = useState(true);

//   const handleBrandSelect = (brand: Brand) => {
//     setSelectorVisible(false);
//     setTimeout(() => setActiveBrand(brand), 650);
//   };

//   const handleBack = () => {
//     setActiveBrand(null);
//     setSelectorVisible(true);
//   };

//   return (
//     <ModeProvider>
//       {/* Brand selector overlays everything until a choice is made */}
//       {selectorVisible && (
//         <BrandSelector onSelect={handleBrandSelect} />
//       )}

//       {/* WeePal site — fades in after selector leaves */}
//       <div
//         className="min-h-screen pb-[58px] md:pb-0"
//         style={{
//           opacity: activeBrand === "weepal" ? 1 : 0,
//           transition: "opacity 0.4s ease",
//           pointerEvents: activeBrand === "weepal" ? "auto" : "none",
//         }}
//       >
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

import { useState, useEffect, useCallback } from "react";
import { ModeProvider } from "@/contexts/ModeContext";
import { ModeToggle } from "@/components/sections/ModeToggle";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BoardsStrip } from "@/components/sections/BoardsStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyWeePal } from "@/components/sections/WhyWeePal";
import { Curriculum } from "@/components/sections/Curriculum";
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
type Brand = "WeePal" | "Wee Pal";

// ─── Responsive hook ──────────────────────────────────────────────────────────
const useBreakpoint = () => {
  const [bp, setBp] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      if (w < 640) setBp("mobile");
      else if (w < 1024) setBp("tablet");
      else setBp("desktop");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return bp;
};

// ─── Brand Selector ────────────────────────────────────────────────────────────
const BrandSelector = ({ onSelect }: { onSelect: (b: Brand) => void }) => {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const isVertical = isMobile;

  // Desktop: which side is hovered
  const [hovered, setHovered] = useState<Brand | null>(null);
  // Mobile: which card was tapped first (expand), second tap = navigate
  const [tapped, setTapped] = useState<Brand | null>(null);
  // Final selection — triggers exit animation
  const [chosen, setChosen] = useState<Brand | null>(null);

  // Close mobile expand if user taps away (via a global click)
  useEffect(() => {
    if (!tapped) return;
    const timeout = setTimeout(() => setTapped(null), 3500);
    return () => clearTimeout(timeout);
  }, [tapped]);

  const navigate = useCallback((brand: Brand) => {
    if (brand === "techshala") {
      window.open("https://project-bloom.itzhazaa.workers.dev/", "_blank");
      return;
    }
    setChosen(brand);
    setTimeout(() => onSelect(brand), 700);
  }, [onSelect]);

  const handleClick = useCallback((brand: Brand) => {
    if (isMobile) {
      if (tapped === brand) {
        navigate(brand);
      } else {
        setTapped(brand);
      }
    } else {
      navigate(brand);
    }
  }, [isMobile, tapped, navigate]);

  // ── Size calculation ─────────────────────────────────────────────────────
  const activeSignal = isMobile ? tapped : hovered;
  const weepalSize = activeSignal === "weepal" ? "62%" : activeSignal === "techshala" ? "38%" : "50%";
  const techSize   = activeSignal === "techshala" ? "62%" : activeSignal === "weepal" ? "38%" : "50%";

  // ── Dimension axis (vertical = height, horizontal = width) ───────────────
  const sizeKey   = isVertical ? "height" : "width";
  const crossKey  = isVertical ? "width"  : "height";
  const exitWeepal = isVertical ? "translateY(-100%)" : "translateX(-100%)";
  const exitTech   = isVertical ? "translateY(100%)"  : "translateX(100%)";

  const weepalStyle: React.CSSProperties = {
    ...S.side,
    [sizeKey]:  chosen ? (chosen === "weepal" ? "100%" : "0%") : weepalSize,
    [crossKey]: "100%",
    // background: "linear-gradient(145deg,#fff9f2 0%,#ffecd9 60%,#ffddb5 100%)",
    transform:  chosen === "techshala" ? exitWeepal : "none",
    opacity:    chosen === "techshala" ? 0 : 1,
  };

  const techStyle: React.CSSProperties = {
    ...S.side,
    [sizeKey]:  chosen ? (chosen === "techshala" ? "100%" : "0%") : techSize,
    [crossKey]: "100%",
    // background: "linear-gradient(145deg,#0a0a0a 0%,#141414 55%,#1c0404 100%)",
    transform:  chosen === "weepal" ? exitTech : "none",
    opacity:    chosen === "weepal" ? 0 : 1,
  };

  // ── Divider position ─────────────────────────────────────────────────────
  const dividerPosition = isVertical
    ? { top: weepalSize, left: 0, width: "100%", height: 2, transform: "translateY(-50%)" }
    : { left: weepalSize, top: 0, height: "100%", width: 2, transform: "translateX(-50%)" };

  // ── Show CTA ─────────────────────────────────────────────────────────────
  const showWeepalCTA = activeSignal === "weepal";
  const showTechCTA   = activeSignal === "techshala";

  // ── Logo font size ────────────────────────────────────────────────────────
  const logoSize = isMobile ? "52px" : isTablet ? "64px" : "clamp(54px,7vw,88px)";
  const taglineSize = isMobile ? "13px" : "clamp(13px,1.5vw,16px)";

  return (
    <div
      style={{ ...S.root, flexDirection: isVertical ? "column" : "row" }}
      role="region"
      aria-label="Select your learning platform"
    >

      {/* ── WeePal side ─────────────────────────────────────────────────── */}
      <div
        style={weepalStyle}
        onMouseEnter={!isMobile ? () => setHovered("weepal") : undefined}
        onMouseLeave={!isMobile ? () => setHovered(null) : undefined}
        onClick={() => handleClick("weepal")}
        role="button"
        tabIndex={0}
        aria-label="Enter WeePal — online tuitions"
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick("weepal")}
      >
        {/* Decorative blobs */}
        <div style={{ ...S.blob, width: 300, height: 300, background: "#d4760a12", top: -70, left: -70 }} />
        <div style={{ ...S.blob, width: 160, height: 160, background: "#145f7812", bottom: 50, right: 30 }} />
        {/* Subtle dot pattern */}
        <div style={S.dotPattern} />

        <div style={S.content}>
          <span style={{ ...S.badge, color: "#c4690a", border: "1.5px solid #d4760a44", background: "#d4760a0e" }}>
            Education for All
          </span>

          <div style={{ ...S.logo, fontSize: logoSize }}>
            <span style={{ color: "#d4760a" }}>Wee</span>
            <span style={{ color: "#145f78" }}>Pal</span>
          </div>

          <p style={{ ...S.tagline, color: "#7a4a1e", fontSize: taglineSize }}>
            Online tuitions<br />for future-ready students.
          </p>

          {/* Animated reveal: icons + CTA */}
          <div style={{
            ...S.revealGroup,
            opacity:   showWeepalCTA ? 1 : 0,
            transform: showWeepalCTA ? "translateY(0)" : "translateY(12px)",
          }}>
            {/* <div style={S.iconRow}>📚&nbsp;&nbsp;🎨&nbsp;&nbsp;🌟</div> */}
            <button
              style={{ ...S.cta, ...S.weepalCta }}
              onClick={(e) => { e.stopPropagation(); navigate("weepal"); }}
              aria-label="Enter WeePal"
            >
              {isMobile && tapped === "weepal" ? "Tap again to enter →" : "Enter WeePal →"}
            </button>
          </div>
        </div>
      </div>

      {/* ── Centre divider ────────────────────────────────────────────────── */}
      <div
        style={{
          ...S.divider,
          ...dividerPosition,
          opacity: chosen ? 0 : 1,
          transition: "all 0.55s cubic-bezier(0.77,0,0.175,1)",
        }}
        aria-hidden="true"
      >
        <div style={{
          ...S.orBubble,
          ...(isVertical
            ? { transform: "rotate(0deg)" }
            : { transform: "rotate(0deg)" })
        }}>
          OR
        </div>
      </div>

      {/* ── TechShala side ────────────────────────────────────────────────── */}
      <div
        style={techStyle}
        onMouseEnter={!isMobile ? () => setHovered("techshala") : undefined}
        onMouseLeave={!isMobile ? () => setHovered(null) : undefined}
        onClick={() => handleClick("techshala")}
        role="button"
        tabIndex={0}
        aria-label="Enter TechShala — robotics and coding"
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick("techshala")}
      >
        <div style={S.gridLines} />
        <div style={{ ...S.blob, width: 260, height: 260, background: "#8b000016", bottom: -50, right: -50 }} />
        <div style={{ ...S.blob, width: 140, height: 140, background: "#ff000008", top: 40, left: 30 }} />

        <div style={S.content}>
          <span style={{ ...S.badge, color: "#ff8080", border: "1.5px solid #8b000055", background: "#8b000020" }}>
            Tech for All
          </span>

          <div  style={{ ...S.logo, fontFamily: "'Courier New',monospace", letterSpacing: "-2px", fontSize: logoSize }}>
            <span style={{ color: "#000000" }}>WEE</span>
            <span style={{ color: "#263dcc" }}>PAL</span>
          </div>

          <p style={{ ...S.tagline, color: "#aaaaaa", fontSize: taglineSize }}>
            Robotics &amp; coding<br />for future innovators.
          </p>

          <div style={{
            ...S.revealGroup,
            opacity:   showTechCTA ? 1 : 0,
            transform: showTechCTA ? "translateY(0)" : "translateY(12px)",
          }}>
            {/* <div style={{ ...S.iconRow, color: "#fff" }}>🤖&nbsp;&nbsp;⚙️&nbsp;&nbsp;💡</div> */}
            <button
              style={{ ...S.cta, ...S.techCta }}
              onClick={(e) => { e.stopPropagation(); navigate("techshala"); }}
              aria-label="Enter TechShala"
            >
              {isMobile && tapped === "techshala" ? "Tap again to enter →" : "Enter Wee Pal →"}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile tap hint ───────────────────────────────────────────────── */}
      {isMobile && !tapped && (
        <div style={S.tapHint} aria-hidden="true">
          Tap a side to choose ↑
        </div>
      )}
    </div>
  );
};

// ─── Styles ───────────────────────────────────────────────────────────────────
const TRANSITION = "all 0.55s cubic-bezier(0.77,0,0.175,1)";

const S: Record<string, React.CSSProperties> = {
  root: {
    position: "fixed",
    inset: 0,
    display: "flex",
    zIndex: 9999,
    overflow: "hidden",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    cursor: "pointer",
  },
  side: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: TRANSITION,
    overflow: "hidden",
    flexShrink: 0,
    // ── Keyboard focus ring ──
    outline: "none",
  },
  blob: {
    position: "absolute",
    borderRadius: "50%",
    pointerEvents: "none",
  },
  dotPattern: {
    position: "absolute",
    inset: 0,
    backgroundImage: "radial-gradient(circle, #d4760a18 1px, transparent 1px)",
    backgroundSize: "28px 28px",
    pointerEvents: "none",
  },
  gridLines: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(139,0,0,0.06) 1px, transparent 1px)," +
      "linear-gradient(90deg, rgba(139,0,0,0.06) 1px, transparent 1px)",
    backgroundSize: "38px 38px",
    pointerEvents: "none",
  },
  content: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 18,
    padding: "clamp(24px, 4vh, 44px) clamp(20px, 4vw, 32px)",
    textAlign: "center",
    userSelect: "none",
  },
  badge: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
    padding: "6px 14px",
    borderRadius: 100,
  },
  logo: {
    display: "flex",
    alignItems: "baseline",
    gap: 2,
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontWeight: 900,
    lineHeight: 1,
  },
  tagline: {
    lineHeight: 1.65,
    maxWidth: 220,
    margin: 0,
  },
  revealGroup: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: 14,
    transition: "opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s",
  },
  iconRow: {
    fontSize: 22,
    letterSpacing: 4,
  },
  cta: {
    minHeight: 48,          // ← meets the 48px touch-target minimum
    padding: "13px 28px",
    borderRadius: 100,
    border: "none",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: 0.3,
    whiteSpace: "nowrap" as const,
  },
  weepalCta: {
    background: "linear-gradient(135deg, #d4760a, #b8620a)",
    color: "#fff",
    boxShadow: "0 6px 22px #d4760a40",
  },
  techCta: {
    background: "linear-gradient(135deg, #8b0000, #6b0000)",
    color: "#fff",
    boxShadow: "0 6px 22px #8b000050",
  },
  divider: {
    position: "absolute",
    zIndex: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    background: "linear-gradient(to bottom, transparent, #d4760a55 35%, #8b000055 65%, transparent)",
  },
  orBubble: {
    background: "#fff",
    border: "2px solid #ddd",
    borderRadius: "50%",
    width: 44,
    height: 44,
    minWidth: 44,
    minHeight: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: 1,
    color: "#888",
    boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
    flexShrink: 0,
  },
  tapHint: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: 11,
    color: "#999",
    letterSpacing: 1,
    pointerEvents: "none",
    animation: "pulse 2.2s ease-in-out infinite",
    zIndex: 10,
    background: "rgba(255,255,255,0.6)",
    padding: "4px 12px",
    borderRadius: 100,
    backdropFilter: "blur(4px)",
  },
};

// ─── Main page ────────────────────────────────────────────────────────────────
const Index = () => {
  const [activeBrand, setActiveBrand] = useState<Brand | null>(null);
  const [selectorVisible, setSelectorVisible] = useState(true);

  const handleBrandSelect = (brand: Brand) => {
    setSelectorVisible(false);
    setTimeout(() => setActiveBrand(brand), 700);
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
          opacity:       activeBrand === "weepal" ? 1 : 0,
          transition:    "opacity 0.45s ease",
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

      {/* Global keyframe for tap hint pulse */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        /* Focus-visible ring for keyboard navigation */
        [role="button"]:focus-visible {
          outline: 3px solid #d4760a;
          outline-offset: -3px;
        }
      `}</style>
    </ModeProvider>
  );
};

export default Index;
