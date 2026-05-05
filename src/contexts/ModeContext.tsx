import { createContext, useContext, useState, ReactNode } from "react";

export type Mode = "india" | "international";

interface ModeContextValue {
  mode: Mode;
  setMode: (m: Mode) => void;
  isIndia: boolean;
  currency: string;
}

const ModeContext = createContext<ModeContextValue | undefined>(undefined);

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("india");
  return (
    <ModeContext.Provider
      value={{
        mode,
        setMode,
        isIndia: mode === "india",
        currency: mode === "india" ? "₹ INR" : "$ USD",
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used inside ModeProvider");
  return ctx;
};

export const WHATSAPP_NUMBER = "917842012006";
export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
