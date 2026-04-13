import { useState, useEffect, useCallback } from "react";
import { Search, CalendarPlus, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "/images/hero/slide-1.jpg",
    title: "Welcome to\nAIIMS Gorakhpur",
    subtitle: "Excellence in Healthcare, Education & Research",
  },
  {
    image: "/images/hero/slide-2.jpg",
    title: "World-Class\nMedical Facilities",
    subtitle: "State-of-the-art infrastructure serving Eastern UP & Bihar",
  },
  {
    image: "/images/hero/slide-3.jpg",
    title: "Advancing\nMedical Research",
    subtitle: "Pioneering breakthroughs in healthcare for a healthier India",
  },
  {
    image: "/images/hero/slide-4.jpg",
    title: "Compassionate\nPatient Care",
    subtitle: "Dedicated to providing the highest quality healthcare services",
  },
  {
    image: "/images/hero/slide-5.jpg",
    title: "Building Future\nMedical Leaders",
    subtitle: "Training the next generation of doctors and healthcare professionals",
  },
];

const STATS = [
  { value: "30+", label: "Departments" },
  { value: "550+", label: "Beds" },
  { value: "4000+", label: "Daily Patients" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev = useCallback(
    () => goTo((current - 1 + SLIDES.length) % SLIDES.length),
    [current, goTo]
  );

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[520px] overflow-hidden sm:h-[600px]">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <img
          key={i}
          src={slide.image}
          alt={slide.subtitle}
          width={1920}
          height={800}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="max-w-2xl">
            <h2
              key={current}
              className="animate-fade-in-up font-heading text-3xl font-extrabold leading-tight text-primary-foreground sm:text-5xl"
              style={{ whiteSpace: "pre-line" }}
            >
              {SLIDES[current].title}
            </h2>
            <p
              key={`sub-${current}`}
              className="animate-fade-in-up-delay mt-3 text-base text-primary-foreground/80 sm:text-lg"
            >
              {SLIDES[current].subtitle}
            </p>

            {/* Stats */}
            <div className="mt-6 flex gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <span className="block font-heading text-2xl font-bold text-primary-foreground sm:text-3xl">
                    {s.value}
                  </span>
                  <span className="text-xs text-primary-foreground/70 sm:text-sm">
                    {s.label}
                  </span>
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

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-primary-foreground/20 p-2 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/40"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-primary-foreground/20 p-2 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/40"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-primary-foreground"
                : "w-2.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
