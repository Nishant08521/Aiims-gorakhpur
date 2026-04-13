import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "Administration",
    href: "#administration",
    children: [
      { label: "Director's Message", href: "#directors-message" },
      { label: "Medical Superintendent", href: "#medical-superintendent" },
      { label: "Deputy Director (Admin)", href: "#deputy-director-admin" },
      { label: "Faculty & Officers", href: "#faculty-officers" },
      { label: "Administrative Staff", href: "#administrative-staff" },
      { label: "Organogram", href: "#organogram" },
    ],
  },
  {
    label: "Institution",
    href: "#institution",
    children: [
      { label: "About AIIMS Gorakhpur", href: "#about-aiims" },
      { label: "Vision & Mission", href: "#vision-mission" },
      { label: "Governing Body", href: "#governing-body" },
      { label: "Annual Reports", href: "#annual-reports" },
      { label: "RTI Compliance", href: "#rti-compliance" },
    ],
  },
  {
    label: "Academic & Research",
    href: "#academic-research",
    children: [
      { label: "MBBS Program", href: "#mbbs" },
      { label: "MD / MS Programs", href: "#md-ms" },
      { label: "Nursing Courses", href: "#nursing" },
      { label: "Research Publications", href: "#research-publications" },
      { label: "Ethics Committee", href: "#ethics-committee" },
      { label: "Academic Calendar", href: "#academic-calendar" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "OPD Services", href: "#opd-services" },
      { label: "IPD Services", href: "#ipd-services" },
      { label: "Emergency (24×7)", href: "#emergency-services" },
      { label: "Diagnostics & Lab", href: "#diagnostics" },
      { label: "Pharmacy", href: "#pharmacy" },
      { label: "Blood Bank", href: "#blood-bank" },
      { label: "Telemedicine", href: "#telemedicine" },
    ],
  },
  {
    label: "Procurement",
    href: "#procurement",
    children: [
      { label: "Tenders", href: "#tenders" },
      { label: "GeM Portal", href: "#gem-portal" },
      { label: "E-Procurement", href: "#e-procurement" },
      { label: "Rate Contracts", href: "#rate-contracts" },
    ],
  },
  {
    label: "Recruitment",
    href: "#recruitment",
    children: [
      { label: "Faculty Positions", href: "#faculty-positions" },
      { label: "Non-Faculty Positions", href: "#non-faculty-positions" },
      { label: "Walk-in Interviews", href: "#walk-in" },
      { label: "Results", href: "#results" },
      { label: "Deputation", href: "#deputation" },
    ],
  },
  {
    label: "News & Event",
    href: "#news-event",
    children: [
      { label: "Latest News", href: "#latest-news" },
      { label: "Upcoming Events", href: "#upcoming-events" },
      { label: "Press Releases", href: "#press-releases" },
      { label: "Photo Gallery", href: "#photo-gallery" },
      { label: "Newsletters", href: "#newsletters" },
    ],
  },
  { label: "Circular", href: "#circular" },
  { label: "RTI", href: "#rti" },
  { label: "ABHA", href: "#abha" },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const ref = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  if (!item.children) {
    return (
      <a
        href={item.href}
        className="rounded-md px-2.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className="flex items-center gap-0.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-[220px] animate-in fade-in slide-in-from-top-2 rounded-lg border border-border bg-card p-1.5 shadow-xl">
          {item.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileAccordion({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <a
        href={item.href}
        onClick={onClose}
        className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div>
      <button
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
      >
        {item.label}
        <ChevronDown size={16} className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded && (
        <div className="ml-4 border-l border-border pl-2">
          {item.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              onClick={onClose}
              className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item) => (
            <DesktopDropdown key={item.label} item={item} />
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
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="max-h-[70vh] overflow-y-auto border-t border-border bg-card px-4 py-3 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <MobileAccordion key={item.label} item={item} onClose={() => setMobileOpen(false)} />
          ))}
          <a href="#emergency" className="mt-2 block rounded-md bg-emergency px-3 py-2 text-center text-sm font-semibold text-emergency-foreground">
            🔴 Emergency
          </a>
        </nav>
      )}
    </header>
  );
}
