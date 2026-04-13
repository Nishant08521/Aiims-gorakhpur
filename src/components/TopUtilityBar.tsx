import { Phone, Clock, Plus, Minus, Eye } from "lucide-react";
import { useState } from "react";

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
  );
}
