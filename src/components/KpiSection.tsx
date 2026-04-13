import { Users, Building2, BedDouble, FlaskConical } from "lucide-react";

const KPIS = [
  { icon: Users, label: "Total OPD Footfall", period: "in March 2026", total: "95,532" },
  { icon: Building2, label: "Total Trauma & Emergency", period: "in March 2026", total: "6,400" },
  { icon: BedDouble, label: "Total IPD Admission", period: "in March 2026", total: "3,178" },
  { icon: FlaskConical, label: "Total Laboratory Test", period: "in March 2026", total: "1,23,823" },
];

export default function KpiSection() {
  return (
    <section className="bg-primary py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-2">
        {KPIS.map((kpi) => (
          <div
            key={kpi.label}
            className="flex flex-col items-center rounded-2xl border-2 border-amber-600/30 bg-amber-500 px-8 py-10 text-center"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground/70 bg-card">
              <kpi.icon size={28} strokeWidth={1.5} className="text-foreground" />
            </div>
            <p className="text-base font-bold text-foreground">{kpi.label}</p>
            <p className="text-sm text-foreground/70">{kpi.period}</p>
            <p className="mt-2 text-xl font-extrabold text-foreground">Total :- {kpi.total}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
