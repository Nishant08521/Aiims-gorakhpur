import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const LINKS = [
  { label: "Ministry of Health & Family Welfare", href: "https://mohfw.gov.in" },
  { label: "AIIMS New Delhi", href: "https://aiims.edu" },
  { label: "RTI", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const OTHER_AIIMS = [
  { name: "AIIMS Rishikesh", abbr: "Rishikesh", color: "bg-rose-100 text-rose-700" },
  { name: "AIIMS Bhopal", abbr: "Bhopal", color: "bg-blue-100 text-blue-700" },
  { name: "AIIMS Gorakhpur", abbr: "Gorakhpur", color: "bg-amber-100 text-amber-700" },
  { name: "AIIMS Bhatinda", abbr: "Bhatinda", color: "bg-yellow-100 text-yellow-700" },
  { name: "AIIMS Jodhpur", abbr: "Jodhpur", color: "bg-orange-100 text-orange-700" },
  { name: "AIIMS Patna", abbr: "Patna", color: "bg-emerald-100 text-emerald-700" },
  { name: "AIIMS Raipur", abbr: "Raipur", color: "bg-sky-100 text-sky-700" },
  { name: "AIIMS Nagpur", abbr: "Nagpur", color: "bg-purple-100 text-purple-700" },
  { name: "AIIMS Kalyani", abbr: "Kalyani", color: "bg-pink-100 text-pink-700" },
];

function OtherAIIMSSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="border-t border-b border-primary-foreground/10 bg-background py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center gap-4">
          {/* Left Label */}
          <div className="hidden shrink-0 flex-col items-center justify-center md:flex">
            <span className="text-center text-sm font-semibold text-foreground">Other</span>
            <span className="text-center text-sm font-semibold text-foreground">AIIMS</span>
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="shrink-0 rounded-lg border border-border bg-card p-2 text-foreground shadow-sm transition-all hover:bg-accent hover:shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth py-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {OTHER_AIIMS.map((aiims) => (
              <a
                key={aiims.name}
                href="#"
                className="group flex shrink-0 flex-col items-center gap-2 transition-transform hover:scale-105"
              >
                {/* Logo Placeholder */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full border-2 border-border shadow-sm transition-shadow group-hover:shadow-md md:h-20 md:w-20 ${aiims.color}`}
                >
                  <span className="text-xs font-bold md:text-sm">{aiims.abbr.slice(0, 2)}</span>
                </div>
                {/* Name */}
                <span className="text-center text-xs font-medium text-foreground/80 group-hover:text-foreground md:text-sm">
                  {aiims.name}
                </span>
              </a>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="shrink-0 rounded-lg border border-border bg-card p-2 text-foreground shadow-sm transition-all hover:bg-accent hover:shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Other AIIMS Section */}
      <OtherAIIMSSection />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-heading text-lg font-bold">AIIMS Gorakhpur</h3>
            <p className="mt-2 text-sm text-primary-foreground/70">
              All India Institute of Medical Sciences, Gorakhpur<br />
              An autonomous institute under MoHFW, Govt. of India
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Important Links</h4>
            <ul className="mt-2 space-y-1.5">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Follow Us</h4>
            <div className="mt-2 flex gap-3">
              {["Facebook", "Twitter", "YouTube"].map((s) => (
                <a key={s} href="#" className="rounded-md bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium text-primary-foreground/80 hover:bg-primary-foreground/20">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-4 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} AIIMS Gorakhpur. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
