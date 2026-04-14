import { Clock, Plus, Minus, Eye, User, Mail, Video, AtSign } from "lucide-react";
import { useState } from "react";

const QUICK_LINKS = [
  { icon: User, label: "Patient Portal", href: "#patient-portal" },
  { icon: Mail, label: "Webmail", href: "#webmail" },
  { icon: Video, label: "Tele Consultation", href: "#tele-consultation" },
  { icon: AtSign, label: "NIC MAIL", href: "#nic-mail" },
];

export default function TopUtilityBar() {
  const [lang, setLang] = useState<"en" | "hi">("en");

  const handleFontSize = (delta: number) => {
    const html = document.documentElement;
    const current = parseFloat(getComputedStyle(html).fontSize);
    html.style.fontSize = `${current + delta}px`;
  };

  const toggleContrast = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="bg-utility-bg text-utility-foreground text-xs">
      {/* Utility Controls Bar — includes Quick Links + Accessibility Tools */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5">

        {/* LEFT: OPD Timing */}
        <span className="hidden items-center gap-1 text-utility-foreground/60 sm:flex">
          <Clock size={11} /> OPD: Mon–Fri 8AM–3PM | Sat 8AM–10AM
        </span>

        {/* RIGHT: Quick Links + Accessibility Controls */}
        <div className="flex items-center gap-3">
          {/* Quick Links */}
          <div className="flex items-center divide-x divide-utility-foreground/20 pr-3 border-r border-utility-foreground/20">
            {QUICK_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-1.5 px-3 py-0.5 text-utility-foreground/80 transition-colors duration-150 hover:text-utility-foreground first:pl-0"
              >
                <Icon size={11} className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </div>

          {/* Font size */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleFontSize(-1)}
              aria-label="Decrease font"
              className="rounded px-1 hover:bg-primary/30"
            >
              <Minus size={11} />
            </button>
            <span className="select-none">A</span>
            <button
              onClick={() => handleFontSize(1)}
              aria-label="Increase font"
              className="rounded px-1 hover:bg-primary/30"
            >
              <Plus size={11} />
            </button>
          </div>

          {/* Contrast toggle */}
          <button
            onClick={toggleContrast}
            aria-label="Toggle contrast"
            className="flex items-center gap-1 rounded px-1.5 py-0.5 hover:bg-primary/30"
          >
            <Eye size={11} /> Contrast
          </button>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="rounded border border-utility-foreground/30 px-2 py-0.5 hover:bg-primary/30"
          >
            {lang === "en" ? "हिंदी" : "English"}
          </button>
        </div>

      </div>
    </div>
  );
}

