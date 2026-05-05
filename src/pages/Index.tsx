import { ModeProvider } from "@/contexts/ModeContext";
import { ModeToggle } from "@/components/sections/ModeToggle";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BoardsStrip } from "@/components/sections/BoardsStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyWeePal } from "@/components/sections/WhyWeePal";
import { Curriculum } from "@/components/sections/Curriculum";
import { Program } from "@/components/sections/Program";
import { Pricing } from "@/components/sections/Pricing";
import { WhatsAppSection } from "@/components/sections/WhatsAppSection";
import { Stats } from "@/components/sections/Stats";
import { FAQ } from "@/components/sections/FAQ";
import { Demo } from "@/components/sections/Demo";
import { Founder } from "@/components/sections/Founder";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { StickyWhatsApp } from "@/components/sections/StickyWhatsApp";

const Index = () => {
  return (
    <ModeProvider>
      <div className="min-h-screen pb-[58px] md:pb-0">
        <ModeToggle />
        <Navbar />
        <main>
          <Hero />
          <BoardsStrip />
          <HowItWorks />
          <WhyWeePal />
          <Curriculum />
          <Program />
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
