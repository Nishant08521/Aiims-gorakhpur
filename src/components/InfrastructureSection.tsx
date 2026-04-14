import infraLibrary from "@/assets/infra-library.jpg";
import infraLab from "@/assets/infra-lab.jpg";
import infraHostel from "@/assets/infra-hostel.jpg";
import infraSports from "@/assets/infra-sports.jpg";

const ITEMS = [
  { image: infraLibrary, title: "Central Library", desc: "E-library with access to national & international journals" },
  { image: infraLab, title: "Laboratories", desc: "State-of-the-art research & diagnostic labs" },
  { image: infraHostel, title: "Hostels", desc: "Separate hostels for boys, girls & PG students" },
  { image: infraSports, title: "Sports Facilities", desc: "Indoor & outdoor sports complex for students & staff" },
];

export default function InfrastructureSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-healthcare-green">Campus</span>
        <h2 className="mt-2 font-heading text-3xl font-bold text-primary">Infrastructure Highlights</h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {ITEMS.map(({ image, title, desc }) => (
          <div key={title} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="h-48 overflow-hidden">
              <img src={image} alt={title} loading="lazy" width={640} height={640} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
