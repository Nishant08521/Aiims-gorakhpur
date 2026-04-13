import { GraduationCap, BookOpen } from "lucide-react";

const COURSES = ["MBBS", "B.Sc. Nursing", "PG Programs"];
const RESEARCH = ["Medical Sciences", "Life Sciences", "Biotechnology"];

export default function AcademicsSection() {
  return (
    <section id="academics" className="bg-section-alt py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-healthcare-green">Learning & Innovation</span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-primary">Academics &amp; Research</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Courses */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3 text-primary">
              <GraduationCap size={28} />
              <h3 className="font-heading text-xl font-bold">Courses Offered</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {COURSES.map((c) => (
                <li key={c} className="flex items-center gap-2 text-foreground">
                  <span className="h-2 w-2 rounded-full bg-healthcare-green" /> {c}
                </li>
              ))}
            </ul>
            <a href="#" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">Explore Academics →</a>
          </div>
          {/* Research */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3 text-primary">
              <BookOpen size={28} />
              <h3 className="font-heading text-xl font-bold">Research Areas</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {RESEARCH.map((r) => (
                <li key={r} className="flex items-center gap-2 text-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary" /> {r}
                </li>
              ))}
            </ul>
            <a href="#" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">Research Publications →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
