import { Siren, HeartPulse, Microscope, Pill, Droplets, Activity } from "lucide-react";

const FACILITIES = [
  { icon: Siren, name: "Emergency & Trauma Care", badge: "24×7", iconBg: "bg-red-100", iconColor: "text-red-500" },
  { icon: HeartPulse, name: "ICU / Critical Care", badge: "24×7", iconBg: "bg-rose-100", iconColor: "text-rose-600" },
  { icon: Microscope, name: "Diagnostics & Labs", badge: null, iconBg: "bg-blue-100", iconColor: "text-blue-500" },
  { icon: Pill, name: "Pharmacy", badge: null, iconBg: "bg-amber-100", iconColor: "text-amber-600" },
  { icon: Droplets, name: "Blood Bank", badge: "24×7", iconBg: "bg-red-100", iconColor: "text-red-600" },
  { icon: Activity, name: "Advanced Pain Management", badge: null, iconBg: "bg-teal-100", iconColor: "text-teal-500" },
];

export default function FacilitiesSection() {
  return (
    <section id="patient-care" className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-healthcare-green">What We Offer</span>
        <h2 className="mt-2 font-heading text-3xl font-bold text-primary">Facilities &amp; Services</h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FACILITIES.map(({ icon: Icon, name, badge, iconBg, iconColor }) => (
          <div key={name} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${iconBg} ${iconColor}`}>
              <Icon size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{name}</h3>
              {badge && (
                <span className="mt-1 inline-block rounded-full bg-healthcare-green/10 px-2 py-0.5 text-[10px] font-bold text-healthcare-green">
                  {badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
