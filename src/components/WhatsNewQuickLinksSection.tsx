import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpg";
import leader4 from "@/assets/leader-4.jpg";
import leader5 from "@/assets/leader-5.jpg";

const NOTICES = [
  {
    date: "10-04-2026",
    type: "Tender" as const,
    title: "SITC of Electrical works of New Special Histo-Pathology Laboratory of Pathology Department, AIIMS Gorakhpur.",
    isNew: true,
  },
  {
    date: "10-04-2026",
    type: "Tender" as const,
    title: "Supply, Installation, Testing And Commissioning Of Fire Detection System in Main Hospital Building, AIIMS Gorakhpur.",
    isNew: true,
  },
  {
    date: "08-04-2026",
    type: "Recruitment" as const,
    title: "PROVISIONAL RESULT FOR RECRUITMENT OF NON-FACULTY GROUP-A POSTS ON REGULAR BASIS AT AIIMS GORAKHPUR",
    isNew: true,
  },
  {
    date: "05-04-2026",
    type: "Tender" as const,
    title: "Annual Maintenance Contract for Lifts & Elevators at AIIMS Gorakhpur.",
    isNew: false,
  },
];

const QUICK_LINKS = [
  { label: "Recruitment", href: "#recruitment" },
  { label: "Central Assistance", href: "#central-assistance" },
  { label: "RTI", href: "#rti" },
  { label: "Internal Complaint Committee", href: "#icc" },
];

const LEADERS = [
  {
    name: "Shri Jagat Prakash Nadda",
    designation: "Hon'ble Union Minister, Health & Family Welfare and Chemicals & Fertilizers, Government of India",
    image: leader1,
    bg: "bg-green-50",
  },
  {
    name: "Shri Prataprao Jadhav",
    designation: "Hon'ble Minister of State, Ministry of Health & Family Welfare, Government of India",
    image: leader2,
    bg: "bg-orange-50",
  },
  {
    name: "Smt. Anupriya Patel",
    designation: "Hon'ble Minister of State, Ministry of Health & Family Welfare, Government of India",
    image: leader3,
    bg: "bg-green-50",
  },
  {
    name: "Dr (Prof) Hemant Kumar",
    designation: "President, AIIMS Gorakhpur",
    image: leader4,
    bg: "bg-orange-50",
  },
  {
    name: "Maj Gen (Dr) Vibha Dutta",
    designation: "Executive Director & CEO, AIIMS Gorakhpur",
    image: leader5,
    bg: "bg-blue-50",
  },
];

export default function WhatsNewQuickLinksSection() {
  return (
    <section className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Column 1: What's New */}
          <div className="flex flex-col">
            <h2 className="mb-1 font-heading text-2xl font-bold text-orange-500">
              What's New
            </h2>
            <div className="mb-4 h-0.5 w-full bg-gradient-to-r from-orange-400 to-transparent" />

            <div className="flex flex-1 flex-col gap-3 overflow-y-auto" style={{ maxHeight: 420 }}>
              {NOTICES.map((notice, i) => (
                <a
                  key={i}
                  href="#"
                  className="group rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded bg-foreground px-2 py-0.5 text-[11px] font-bold text-background">
                      {notice.date}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        notice.type === "Recruitment"
                          ? "text-orange-500"
                          : "text-orange-500"
                      }`}
                    >
                      {notice.type}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80 group-hover:text-foreground">
                    {notice.title}
                    {notice.isNew && (
                      <span className="ml-2 inline-block animate-pulse text-xs font-bold text-orange-500">
                        NEW
                      </span>
                    )}
                  </p>
                </a>
              ))}
            </div>

            <button className="mt-4 w-full rounded-lg bg-foreground py-3 text-center text-sm font-bold text-background transition-colors hover:bg-foreground/90">
              Read More
            </button>
          </div>

          {/* Column 2: Quick Links + About */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="mb-1 font-heading text-2xl font-bold text-orange-500">
                Quick Links
              </h2>
              <div className="mb-4 h-0.5 w-full bg-gradient-to-r from-orange-400 to-transparent" />

              <div className="grid grid-cols-2 gap-3">
                {QUICK_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-3.5 text-center text-sm font-semibold text-white shadow-md transition-all hover:from-orange-500 hover:to-orange-600 hover:shadow-lg"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* About Institute */}
            <div className="flex-1 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 overflow-hidden rounded-lg">
                <img
                  src="https://aiimsgorakhpur.edu.in/wp-content/uploads/resized/7f29fdb1ff39ece2c1a71c8acc2a66b1/slider-img-3.jpg"
                  alt="AIIMS Gorakhpur Campus"
                  loading="lazy"
                  width={400}
                  height={200}
                  className="h-40 w-full object-cover"
                />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                All India Institute of Medical Sciences Gorakhpur was established under
                Phase IV of Pradhan Mantri Swasthya Suraksha Yojana (PMSSY) in 2019 to
                create centre of excellence in healthcare...
              </p>
              <div className="mt-3 border-t border-border pt-3">
                <h4 className="text-base font-bold text-orange-500">
                  Maj Gen (Dr) Vibha Dutta, SM (Retd)
                </h4>
                <p className="text-xs text-muted-foreground">
                  Executive Director & CEO, AIIMS Gorakhpur
                </p>
                <a href="#" className="mt-1 inline-block text-xs font-medium text-primary hover:underline">
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Leadership */}
          <div className="flex flex-col gap-3">
            {LEADERS.map((leader) => (
              <div
                key={leader.name}
                className={`flex items-center gap-4 rounded-xl border border-border p-3 shadow-sm transition-all hover:shadow-md ${leader.bg}`}
              >
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">{leader.name}</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {leader.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
