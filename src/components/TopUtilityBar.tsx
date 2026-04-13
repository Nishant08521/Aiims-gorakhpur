import { Phone, Clock, Plus, Minus, Eye, User, Mail, Video, AtSign } from "lucide-react";
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
    <div className="bg-utility-bg text-utility-foreground">
      {/* Quick Links Bar */}
      <div className="bg-quick-links-bg">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {QUICK_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95"
              >
                <Icon size={16} className="opacity-80 group-hover:opacity-100" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Utility Controls Bar */}
      <div className="border-t border-primary/30 text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5">
          <div className="flex items-center gap-4">
            <a href="tel:+915512500100" className="flex items-center gap-1 hover:underline">
              <Phone size={12} /> Helpline: 0551-2500100
            </a>
            <span className="hidden items-center gap-1 sm:flex">
              <Clock size={12} /> OPD: Mon–Fri 8AM–3PM | Sat 8AM–10AM
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <button onClick={() => handleFontSize(-1)} aria-label="Decrease font" className="rounded px-1 hover:bg-primary/30"><Minus size={12} /></button>
              <span>A</span>
              <button onClick={() => handleFontSize(1)} aria-label="Increase font" className="rounded px-1 hover:bg-primary/30"><Plus size={12} /></button>
            </div>
            <button onClick={toggleContrast} aria-label="Toggle contrast" className="flex items-center gap-1 rounded px-1.5 py-0.5 hover:bg-primary/30">
              <Eye size={12} /> Contrast
            </button>
            <button
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="rounded border border-utility-foreground/30 px-2 py-0.5 hover:bg-primary/30"
            >
              {lang === "en" ? "हिंदी" : "English"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
