import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const LINKS = [
  { label: "Ministry of Health & Family Welfare", href: "https://mohfw.gov.in" },
  { label: "AIIMS New Delhi", href: "https://aiims.edu" },
  { label: "RTI", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const OTHER_AIIMS = [
  { name: "AIIMS Rishikesh", logo: "/images/aiims-logos/rishikesh.png", href: "https://aiimsrishikesh.edu.in" },
  { name: "AIIMS Bhopal", logo: "/images/aiims-logos/bhopal.png", href: "https://aiimsbhopal.edu.in" },
  { name: "AIIMS Gorakhpur", logo: "/images/aiims-logos/gorakhpur.png", href: "https://aiimsgorakhpur.edu.in" },
  { name: "AIIMS Bhatinda", logo: "/images/aiims-logos/bhatinda.png", href: "https://aiimsbathinda.edu.in" },
  { name: "AIIMS Jodhpur", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/The_Official_Seal_of_AIIMS_Jodhpur.png/250px-The_Official_Seal_of_AIIMS_Jodhpur.png", href: "https://aiimsjodhpur.edu.in" },
  { name: "AIIMS Patna", logo: "https://aiimspatna.edu.in/img/aiimslogo2.jpeg", href: "https://aiimspatna.edu.in" },
  { name: "AIIMS Raipur", logo: "/images/aiims-logos/raipur.png", href: "https://aiimsraipur.edu.in" },
  { name: "AIIMS Nagpur", logo: "/images/aiims-logos/nagpur.png", href: "https://aiimsnagpur.edu.in" },
  { name: "AIIMS Kalyani", logo: "/images/aiims-logos/kalyani.png", href: "https://aiimskalyani.edu.in" },
  { name: "AIIMS New Delhi", logo: "/images/aiims-logos/new-delhi.png", href: "https://aiims.edu" },
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
                href={aiims.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex shrink-0 flex-col items-center gap-2 transition-transform hover:scale-105"
              >
                <img
                  src={aiims.logo}
                  alt={`${aiims.name} logo`}
                  loading="lazy"
                  width={80}
                  height={80}
                  className="h-16 w-16 rounded-full border-2 border-border object-contain shadow-sm transition-shadow group-hover:shadow-md md:h-20 md:w-20"
                />
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
