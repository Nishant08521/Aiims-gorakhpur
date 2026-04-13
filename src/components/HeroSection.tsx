import heroCampus from "@/assets/hero-campus.jpg";
import { Search, CalendarPlus } from "lucide-react";

const STATS = [
  { value: "30+", label: "Departments" },
  { value: "550+", label: "Beds" },
  { value: "4000+", label: "Daily Patients" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroCampus}
        alt="AIIMS Gorakhpur campus building"
        className="h-[520px] w-full object-cover sm:h-[600px]"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="max-w-2xl animate-fade-in-up">
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">
              Welcome to<br />AIIMS Gorakhpur
            </h2>
            <p className="mt-3 text-base text-primary-foreground/80 sm:text-lg">
              Excellence in Healthcare, Education &amp; Research
            </p>

            {/* Stats */}
            <div className="mt-6 flex gap-6 animate-fade-in-up-delay">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <span className="block font-heading text-2xl font-bold text-primary-foreground sm:text-3xl animate-count-up">{s.value}</span>
                  <span className="text-xs text-primary-foreground/70 sm:text-sm">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book-appointment"
                className="inline-flex items-center gap-2 rounded-lg bg-healthcare-green px-5 py-3 text-sm font-semibold text-healthcare-green-foreground shadow-lg transition-transform hover:scale-105"
              >
                <CalendarPlus size={18} /> Book Appointment
              </a>
              <a
                href="#find-doctor"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/40 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
              >
                <Search size={18} /> Find Doctor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
