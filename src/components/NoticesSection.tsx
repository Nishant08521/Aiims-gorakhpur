import { useState } from "react";

const TABS = ["Recruitment", "Results", "Tenders", "Walk-in Interviews"] as const;

const NOTICES: Record<string, { title: string; date: string }[]> = {
  Recruitment: [
    { title: "Recruitment for Faculty Posts – 2025 (Group A)", date: "10 Apr 2025" },
    { title: "Senior Resident Recruitment – Various Departments", date: "05 Apr 2025" },
    { title: "Non-Faculty posts – Nursing Officer, Technician", date: "28 Mar 2025" },
  ],
  Results: [
    { title: "Result – Junior Resident Written Examination", date: "08 Apr 2025" },
    { title: "Merit List – Nursing Officer Recruitment", date: "01 Apr 2025" },
  ],
  Tenders: [
    { title: "Tender for Supply of Medical Equipment (ICU)", date: "12 Apr 2025" },
    { title: "E-Tender – Annual Maintenance Contract for Lifts", date: "07 Apr 2025" },
  ],
  "Walk-in Interviews": [
    { title: "Walk-in for Senior Resident (Cardiology) – 15 Apr", date: "09 Apr 2025" },
    { title: "Walk-in for Junior Resident (Emergency Medicine)", date: "03 Apr 2025" },
  ],
};

export default function NoticesSection() {
  const [active, setActive] = useState<string>(TABS[0]);

  return (
    <section className="bg-section-alt py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-healthcare-green">Stay Updated</span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-primary">Notices &amp; Announcements</h2>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground border border-border hover:bg-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-6 mx-auto max-w-3xl rounded-xl border border-border bg-card shadow-sm">
          {NOTICES[active]?.map((n, i) => (
            <a
              key={i}
              href="#"
              className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 last:border-b-0 hover:bg-secondary/50 transition-colors"
            >
              <span className="text-sm text-foreground font-medium">{n.title}</span>
              <span className="shrink-0 text-xs text-muted-foreground">{n.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
