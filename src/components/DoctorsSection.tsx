import { User } from "lucide-react";

const DOCTORS = [
  { name: "Dr. Rajesh Kumar", dept: "Cardiology", designation: "Professor & HOD" },
  { name: "Dr. Priya Sharma", dept: "Neurology", designation: "Associate Professor" },
  { name: "Dr. Amit Singh", dept: "Orthopaedics", designation: "Professor" },
  { name: "Dr. Sunita Verma", dept: "Pediatrics", designation: "Assistant Professor" },
];

export default function DoctorsSection() {
  return (
    <section id="find-doctor" className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-healthcare-green">Our Team</span>
        <h2 className="mt-2 font-heading text-3xl font-bold text-primary">Doctors &amp; Faculty</h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DOCTORS.map((doc) => (
          <div key={doc.name} className="group rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-primary">
              <User size={36} />
            </div>
            <h3 className="mt-4 font-semibold text-foreground">{doc.name}</h3>
            <p className="text-sm text-healthcare-green">{doc.dept}</p>
            <p className="text-xs text-muted-foreground">{doc.designation}</p>
            <a href="#" className="mt-3 inline-block text-xs font-semibold text-primary hover:underline">View Profile →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
