import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waLink } from "@/contexts/ModeContext";

const links = [
  { href: "#howitworks", label: "How It Works" },
  { href: "#curriculum", label: "What We Teach" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#demo", label: "Free Trial" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-[42px] z-30 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container flex h-[62px] items-center justify-between gap-5">
          {/* <a href="#" className="font-display text-2xl font-bold text-primary">
            Wee<span className="text-accent">Pal</span>
          </a> */}
          <a href="#" className="font-display text-2xl font-bold" style={{ color: '#F7941D' }}>
  Wee<span style={{ color: '#1A7A99' }}>Pal</span>
</a>
          <ul className="hidden gap-6 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <WhatsAppButton
              variant="compact"
              text="WhatsApp Us →"
              href={waLink("Hi! I want to book a FREE demo class for my child.")}
            />
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-x-0 top-[104px] z-20 border-b border-border bg-background p-5 shadow-soft md:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-muted">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base font-bold text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <WhatsAppButton
              text="WhatsApp Us Now →"
              href={waLink("Hi! I want to book a FREE demo class for my child.")}
              className="w-full"
            />
          </div>
        </div>
      )}
    </>
  );
};
