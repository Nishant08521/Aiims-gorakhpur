import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import event6 from "@/assets/event-6.jpg";

const EVENTS = [
  {
    title: "Research Methodology Workshop for Post-Graduate Residents",
    date: "September 13, 2025",
    image: event1,
  },
  {
    title: "The Department of Psychiatry organized a workshop to raise awareness, reduce stigma, and promote mental well-being among students.",
    date: "September 13, 2025",
    image: event2,
  },
  {
    title: 'CME/Workshop on "Advances in Hospital Sterilization and Disinfection"',
    date: "July 26, 2025",
    image: event3,
  },
  {
    title: "1st Convocation at AIIMS Gorakhpur 2025",
    date: "July 10, 2025",
    image: event4,
  },
  {
    title: "Molecular Biology Workshop at ISPMMM_India 2025",
    date: "March 18, 2025",
    image: event5,
  },
  {
    title: "National Medical Symposium on Advanced Healthcare Practices",
    date: "February 22, 2025",
    image: event6,
  },
];

const VISIBLE = 4;

export default function LatestEventsSection() {
  const [current, setCurrent] = useState(0);
  const maxIndex = EVENTS.length - VISIBLE;

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, maxIndex)), [maxIndex]);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [maxIndex]);

  return (
    <section className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center font-heading text-3xl font-bold text-primary">
          Latest Events
        </h2>

        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-md border border-border text-foreground transition hover:bg-accent disabled:opacity-30"
            aria-label="Previous events"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-md border border-border text-foreground transition hover:bg-accent disabled:opacity-30"
            aria-label="Next events"
          >
            <ChevronRight size={20} />
          </button>

          {/* Carousel track */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / VISIBLE)}%)` }}
            >
              {EVENTS.map((event, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / VISIBLE}%` }}
                >
                  <a href="#" className="group relative block overflow-hidden rounded-xl aspect-[3/4]">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      width={768}
                      height={512}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="text-sm font-semibold leading-snug text-white line-clamp-3">
                        {event.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-white/80">
                        <Clock size={12} />
                        {event.date}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === current
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
