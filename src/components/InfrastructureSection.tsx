import { Library, FlaskConical, Building, Dumbbell } from "lucide-react";

const ITEMS = [
  { icon: Library, title: "Central Library", desc: "E-library with access to national & international journals" },
  { icon: FlaskConical, title: "Laboratories", desc: "State-of-the-art research & diagnostic labs" },
  { icon: Building, title: "Hostels", desc: "Separate hostels for boys, girls & PG students" },
  { icon: Dumbbell, title: "Sports Facilities", desc: "Indoor & outdoor sports complex for students & staff" },
];

export default function InfrastructureSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-healthcare-green">Campus</span>
        <h2 className="mt-2 font-heading text-3xl font-bold text-primary">Infrastructure Highlights</h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
              <Icon size={28} />
            </div>
            <h3 className="mt-3 font-semibold text-foreground">{title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
