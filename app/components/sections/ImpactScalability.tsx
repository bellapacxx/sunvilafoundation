'use client';

import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Pilot Smart Villages Being launched (2020–2026)", value: 50, suffix: "+", icon: "🏘️" },
  { label: "Poverty Reduction in implementation zones", value: 30, suffix: "%", icon: "📉" },
  { label: "Traines in GDHRP digital skills", value: 10000, suffix: "+", icon: "🎓" },
  { label: "Hectares Reforestation via 7 Trees per Newly Born Child (7TPC)", value: 200, suffix: "", icon: "🌳" },
];

const roadmapItems = [
  "Public-private partnerships",
  "Diaspora investment networks",
  "UN SDG-aligned funding",
  "GDHRP",
  "GDSEP",
];

function useCountUp(end: number, duration = 2000, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // Only start if triggered
    if (end === 0) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;

    function step(timestamp: number) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const progressRatio = Math.min(progress / duration, 1);
      setCount(Math.floor(progressRatio * end));
      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
}

function CountUpStat({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const count = useCountUp(value, 2000, start);
  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function ImpactScalability() {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // 30% visible triggers animation
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
  ref={containerRef}
  className="w-full mx-auto px-6 py-20 bg-[var(--color-lightBg)] rounded-lg shadow-lg relative overflow-hidden"
>
  {/* Decorative background shapes */}
  <div className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--color-secondary)] rounded-full opacity-20 blur-3xl pointer-events-none"></div>
  <div className="absolute -bottom-24 -left-16 w-96 h-96 bg-[var(--color-primary)] rounded-full opacity-10 blur-2xl pointer-events-none"></div>

  {/* Section Title */}
  <h2 className="text-4xl font-heading font-bold text-[var(--color-primary)] mb-16 text-center relative z-10">
    Impact & Scalability
  </h2>

  <div className="px-20 grid md:grid-cols-2 gap-16 relative z-10">
    {/* Left Column */}
    <div className="flex flex-col">
      {/* Mini Milestone Header */}
      <h3 className="text-3xl font-semibold text-[var(--color-primary)] mb-8">
        Mini Milestones
      </h3>

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
                <CountUpStat value={stats[i].value} suffix={suffix} start={hasStarted} />
              </p>
              <p className="text-textDark font-medium">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right Column - Roadmap */}
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col">
      <p className="text-lg font-semibold text-textDark mb-4">
        <span className="font-bold text-[var(--color-primary)]">Roadmap to 2030:</span> Scale
        to 500 Smart Villages via:
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
