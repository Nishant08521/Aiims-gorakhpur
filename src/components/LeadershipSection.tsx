import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpg";
import leader4 from "@/assets/leader-4.jpg";
import leader5 from "@/assets/leader-5.jpg";

const LEADERS = [
  {
    name: "Shri Jagat Prakash Nadda",
    designation: "Hon'ble Union Minister, Health & Family Welfare and Chemicals & Fertilizers, Government of India",
    image: "https://aiimsgorakhpur.edu.in/wp-content/uploads/2024/06/JP-nadda.jpg",
  },
  {
    name: "Shri Prataprao Jadhav",
    designation: "Hon'ble Minister of State, Ministry of Health & Family Welfare, Government of India",
    image: "https://aiimsgorakhpur.edu.in/wp-content/uploads/2024/06/Shri-Prataprao-Jadhav.jpg",
  },
  {
    name: "Smt. Anupriya Patel",
    designation: "Hon'ble Minister of State, Ministry of Health & Family Welfare and Chemicals & Fertilizers, Government of India",
    image: "https://aiimsgorakhpur.edu.in/wp-content/uploads/2024/06/Smt-Anupriya-Patel.jpg",
  },
  {
    name: "Dr (Prof) Hemant Kumar",
    designation: "President AIIMS, Gorakhpur",
    image: "https://aiimsgorakhpur.edu.in/wp-content/uploads/2025/08/GiJx8Q3aUAAaQMi.jpg",
  },
  {
    name: "Maj Gen (Dr) Vibha Dutta, SM (Retd)",
    designation: "Executive Director and CEO",
    image: "https://aiimsgorakhpur.edu.in/wp-content/uploads/2025/02/Ed-Maam.jpg",
  },
];

export default function LeadershipSection() {
  return (
    <section className="bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-5">
          {LEADERS.map((leader) => (
            <div
              key={leader.name}
              className="flex min-w-[220px] flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-accent">
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-sm font-bold text-primary">{leader.name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {leader.designation}
              </p>
              <a
                href="#"
                className="mt-3 text-xs font-semibold text-accent hover:underline"
              >
                Click to visit page
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
