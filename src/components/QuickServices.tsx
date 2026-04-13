import { CalendarPlus, Clock, Search, Siren, FlaskConical, User } from "lucide-react";

const SERVICES = [
  { icon: CalendarPlus, label: "Book Appointment", color: "text-healthcare-green" },
  { icon: Clock, label: "OPD Schedule", color: "text-primary" },
  { icon: Search, label: "Find Doctor", color: "text-primary" },
  { icon: Siren, label: "Emergency (24×7)", color: "text-emergency" },
  { icon: FlaskConical, label: "Lab Reports", color: "text-primary" },
  { icon: User, label: "Patient Portal", color: "text-healthcare-green" },
];

export default function QuickServices() {
  return (
    <section className="relative -mt-12 z-10 mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-card p-4 shadow-xl sm:grid-cols-3 lg:grid-cols-6">
        {SERVICES.map(({ icon: Icon, label, color }) => (
          <a
            key={label}
            href="#"
            className="group flex flex-col items-center gap-2 rounded-lg p-4 text-center transition-colors hover:bg-secondary"
          >
            <div className={`rounded-full bg-secondary p-3 ${color} transition-transform group-hover:scale-110`}>
              <Icon size={24} />
            </div>
            <span className="text-xs font-semibold text-foreground sm:text-sm">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
