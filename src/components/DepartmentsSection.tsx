import { Heart, Brain, Bone, Stethoscope, Baby, Scissors } from "lucide-react";

const DEPARTMENTS = [
  { icon: Heart, name: "Cardiology" },
  { icon: Brain, name: "Neurology" },
  { icon: Bone, name: "Orthopaedics" },
  { icon: Stethoscope, name: "General Medicine" },
  { icon: Baby, name: "Pediatrics" },
  { icon: Scissors, name: "General Surgery" },
];

export default function DepartmentsSection() {
  return (
    <section id="departments" className="bg-section-alt py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-healthcare-green">Our Expertise</span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-primary">Departments</h2>
          <p className="mt-2 text-muted-foreground">30+ specialized departments providing comprehensive care</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.map(({ icon: Icon, name }) => (
            <a
              key={name}
              href="#"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{name}</h3>
                <span className="text-xs text-muted-foreground">View Details →</span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-block rounded-md border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            View All 30+ Departments
          </a>
        </div>
      </div>
    </section>
  );
}
