import { useState } from "react";

const MONTH = "April";
const YEAR = 2026;

// April 2026 starts on Wednesday (index 3), has 30 days
const FIRST_DAY_INDEX = 3; // 0=Sun, 1=Mon, ..., 3=Wed
const TOTAL_DAYS = 30;

const CLOSED_DAYS = new Set([3, 5, 12, 19, 26]); // Fridays: 3; Sundays: 5,12,19,26

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDayName(day: number): string {
  const idx = (FIRST_DAY_INDEX + day - 1) % 7;
  return DAY_NAMES[idx];
}

function isClosed(day: number): boolean {
  return CLOSED_DAYS.has(day);
}

export default function OpdStatusSection() {
  const [, setHovered] = useState<number | null>(null);

  const days = Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1);

  return (
    <section className="bg-secondary/30 py-14">
      <div className="mx-auto px-6">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary sm:text-3xl">
            OPD Status – {MONTH} {YEAR}
          </h2>

          <div className="grid grid-cols-7 gap-2 sm:gap-3 lg:grid-cols-10">
            {days.map((day) => {
              const closed = isClosed(day);
              const dayName = getDayName(day);
              return (
                <div
                  key={day}
                  onMouseEnter={() => setHovered(day)}
                  onMouseLeave={() => setHovered(null)}
                  className={`group flex flex-col items-center justify-center rounded-xl p-2 sm:p-4 text-center transition-all duration-200 cursor-default
                    ${closed
                      ? "bg-destructive text-destructive-foreground hover:shadow-lg hover:shadow-destructive/20"
                      : "bg-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/20"
                    } hover:scale-105`}
                >
                  <span className="text-lg font-extrabold sm:text-2xl">{day}</span>
                  <span className="text-[10px] font-medium opacity-90 sm:text-xs">{dayName}</span>
                  <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider opacity-75 sm:text-[11px]">
                    {closed ? "Closed" : "Open"}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground sm:text-sm">
            <span className="font-semibold text-destructive">* Red</span> indicates Closed (Sundays &amp; Holidays).{" "}
            <span className="font-semibold text-emerald-600">Green</span> indicates Open.{" "}
            Emergency Services are available <strong>24×7</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
