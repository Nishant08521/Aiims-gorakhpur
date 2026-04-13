import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  "Home", "Administration", "Institution", "Academic & Research",
  "Services", "Procurement", "Recruitment", "News & Event",
  "Circular", "RTI", "ABHA",
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
            A
          </div>
          <div>
            <h1 className="text-base font-bold leading-tight text-primary sm:text-lg">AIIMS Gorakhpur</h1>
            <p className="text-[10px] leading-tight text-muted-foreground">All India Institute of Medical Sciences</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-md px-2.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a href="#emergency" className="hidden rounded-md bg-emergency px-3 py-2 text-xs font-semibold text-emergency-foreground transition-transform hover:scale-105 sm:inline-block">
            🔴 Emergency
          </a>
          <a href="#book-appointment" className="rounded-md bg-healthcare-green px-3 py-2 text-xs font-semibold text-healthcare-green-foreground transition-transform hover:scale-105">
            Book Appointment
          </a>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="border-t border-border bg-card px-4 py-3 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            >
              {item}
            </a>
          ))}
          <a href="#emergency" className="mt-2 block rounded-md bg-emergency px-3 py-2 text-center text-sm font-semibold text-emergency-foreground">
            🔴 Emergency
          </a>
        </nav>
      )}
    </header>
  );
}
