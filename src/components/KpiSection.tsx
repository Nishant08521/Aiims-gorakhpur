import { Users, Building2, BedDouble, FlaskConical } from "lucide-react";

const KPIS = [
  { icon: Users, label: "Total OPD Footfall", period: "in March 2026", total: "95,532" },
  { icon: Building2, label: "Total Trauma & Emergency", period: "in March 2026", total: "6,400" },
  { icon: BedDouble, label: "Total IPD Admission", period: "in March 2026", total: "3,178" },
  { icon: FlaskConical, label: "Total Laboratory Test", period: "in March 2026", total: "1,23,823" },
];

export default function KpiSection() {
  return (
    <section className="bg-primary py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {KPIS.map((kpi) => (
          <div
            key={kpi.label}
            className="flex flex-col items-center rounded-xl bg-amber-500 px-6 py-8 text-center shadow-md"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground bg-card">
              <kpi.icon size={30} className="text-foreground" />
            </div>
            <p className="text-sm font-semibold text-foreground">{kpi.label}</p>
            <p className="text-sm text-foreground/80">{kpi.period}</p>
            <p className="mt-1 text-lg font-bold text-foreground">Total :- {kpi.total}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
