import { Users, Building2, BedDouble, FlaskConical } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const KPIS = [
  {
    icon: Users,
    label: "Total OPD Footfall",
    period: "March 2026",
    total: 95532,
    suffix: "",
    gradient: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Building2,
    label: "Trauma & Emergency",
    period: "March 2026",
    total: 6400,
    suffix: "",
    gradient: "from-rose-500 to-orange-400",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
  },
  {
    icon: BedDouble,
    label: "Total IPD Admission",
    period: "March 2026",
    total: 3178,
    suffix: "",
    gradient: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: FlaskConical,
    label: "Laboratory Tests",
    period: "March 2026",
    total: 123823,
    suffix: "",
    gradient: "from-violet-500 to-purple-400",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
];

function formatNumber(n: number): string {
  return n.toLocaleString("en-IN", { useGrouping: true });
}

function useCountUp(target: number, duration = 2000, trigger = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration, trigger]);

  return value;
}

function KpiCard({ kpi, index }: { kpi: typeof KPIS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(kpi.total, 2000, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Icon = kpi.icon;

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-md transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Gradient accent line */}
      <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${kpi.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

      <div className="flex items-center gap-3">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${kpi.iconBg} transition-transform duration-300 group-hover:scale-110`}>
          <Icon size={26} strokeWidth={1.5} className={kpi.iconColor} />
        </div>
        <div className="min-w-0">
          <p className="text-lg font-semibold text-white leading-tight">{kpi.label}</p>
          <p className="text-xs font-medium text-white/70 uppercase tracking-wider">{kpi.period}</p>
        </div>
      </div>

      <div className="mt-5 flex items-baseline gap-1">
        <span className={`text-4xl font-extrabold bg-gradient-to-r ${kpi.gradient} bg-clip-text text-transparent`}>
          {formatNumber(count)}
        </span>
        {kpi.suffix && <span className="text-white/40 text-sm">{kpi.suffix}</span>}
      </div>

      {/* Subtle glow effect */}
      <div className={`absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-r ${kpi.gradient} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
    </div>
  );
}

export default function KpiSection() {
  return (
    <section className="relative bg-[hsl(var(--primary))] py-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Performance Metrics</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Hospital at a Glance</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {KPIS.map((kpi, i) => (
            <KpiCard key={kpi.label} kpi={kpi} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
