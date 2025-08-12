'use client';

import { useEffect, useState } from "react";

const stats = [
  { label: "Pilot Smart Villages launched (2020–2024)", value: 50, suffix: "+", icon: "🏘️" },
  { label: "Poverty Reduction in implementation zones", value: 30, suffix: "%", icon: "📉" },
  { label: "Trained in GDHRP digital skills", value: 10000, suffix: "+", icon: "🎓" },
  { label: "Hectares Reforested via 7 Trees per Newly Born Child (7TPC)", value: 200, suffix: "", icon: "🌳" },
];

const roadmapItems = [
  "Public-private partnerships",
  "Diaspora investment networks",
  "UN SDG-aligned funding",
];

// CountUp hook
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    if (end === 0) return;
    const increment = end / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
}

// Single CountUp component for one stat
function CountUpStat({ value, suffix }: { value: number; suffix: string }) {
  const count = useCountUp(value);
  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function ImpactScalability() {
  return (
    <section className="w-full mx-auto px-6 py-20 bg-[var(--color-lightBg)] rounded-lg shadow-lg relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--color-secondary)] rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-16 w-96 h-96 bg-[var(--color-primary)] rounded-full opacity-10 blur-2xl pointer-events-none"></div>

      <h2 className="text-4xl font-heading font-bold text-[var(--color-primary)] mb-16 text-center relative z-10">
        Impact & Scalability
      </h2>

      <div className="px-40 grid md:grid-cols-2 gap-16 relative z-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-8">
          {stats.map(({ label, suffix, icon }, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="text-4xl">{icon}</div>
              <div>
                <p className="text-3xl font-extrabold text-[var(--color-primary)]">
                  <CountUpStat value={stats[i].value} suffix={suffix} />
                </p>
                <p className="text-textDark font-medium">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap Card */}
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col">
          <p className="text-lg font-semibold text-textDark mb-4">
            <span className="font-bold text-[var(--color-primary)]">Roadmap to 2030:</span> Scale to 500 Smart Villages via:
          </p>
          <ul className="list-disc list-inside space-y-3 text-textDark text-lg">
            {roadmapItems.map((item, idx) => (
              <li
                key={idx}
                className="relative cursor-pointer hover:text-[var(--color-secondary)] transition-colors duration-300 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[var(--color-secondary)] before:rounded-full before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-auto mt-8 text-sm italic text-gray-500">
            *Partnerships and investments are key drivers for this scale-up.*
          </p>
        </div>
      </div>
    </section>
  );
}
