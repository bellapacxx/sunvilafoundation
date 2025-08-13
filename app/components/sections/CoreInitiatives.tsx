"use client";

import { useState } from "react";

export default function CoreInitiatives() {
  const initiatives = [
    {
      number: "1",
      title: "Smart People Development (PION Business Model)",
      items: [
        { text: "Phase 1: Winning Mentality-The Power of Vision + Undivided Belief + Potential + Action", tags: ["Vision", "Belief", "Action"] },
        { text: "Phase 2: Winning Team-The Power of Synergy (S=N^2/3n)", tags: ["Synergy", "Teamwork"] },
        { text: "Phase 3: Winning Organizations (Performance-Based Profit Sharing)", tags: ["Profit Sharing", "Performance"] },
        { text: "Phase 4: Winning Nations (Global Diaspora Networks)", tags: ["Global", "Diaspora"] },
      ],
      iconColor: "var(--color-primary)",
      progress: 80,
      extraInfo: "Building resilient communities starts with empowered individuals who embrace winning mindsets.",
    },
    {
      number: "2",
      title: "Digital Economy Leapfrogging",
      items: [
        { text: "E-commerce & payment gateways", tags: ["E-commerce", "Payments"] },
        { text: "AI/drone tech for agriculture", tags: ["AI", "Drones", "Agriculture"] },
        { text: "Blockchain for transparent trade", tags: ["Blockchain", "Transparency"] },
        { text: "Digital outsourcing platforms", tags: ["Outsourcing", "Digital"] },
      ],
      iconColor: "var(--color-secondary)",
      progress: 60,
      extraInfo: "Harnessing digital tools accelerates economic growth and connects local producers to global markets.",
    },
    {
      number: "3",
      title: "Localized Green Tech",
      items: [
        { text: "8KW Solar-Powered Homes (Carbon Credit Model)", tags: ["Solar", "Carbon Credit"] },
        { text: "Rainwater harvesting & organic farming", tags: ["Sustainability", "Organic"] },
        { text: '"7 Trees per Child" Reforestation Policy', tags: ["Reforestation", "Policy"] },
      ],
      iconColor: "var(--color-primary)",
      progress: 70,
      extraInfo: "Green technology initiatives reduce carbon footprint and promote eco-friendly living standards.",
    },
    {
      number: "4",
      title: "Smart Infrastructure",
      items: [
        { text: "Smart health centers & schools", tags: ["Health", "Education"] },
        { text: "Agro-processing hubs with IoT", tags: ["IoT", "Agro-processing"] },
        { text: "Robotic transport/logistics", tags: ["Robotics", "Logistics"] },
      ],
      iconColor: "var(--color-primary)",
      progress: 50,
      extraInfo: "Modern infrastructure with smart tech enhances service delivery and operational efficiency.",
    },
  ];

  const [flipped, setFlipped] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlipped((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      className="max-w-5xl mx-auto px-6 py-20 bg-gradient-to-b from-[var(--color-lightBg)] to-white rounded-xl relative"
      style={{ backgroundColor: "var(--color-lightBg)" }}
    >
      <h2
        className="text-4xl font-heading font-bold text-center mb-16"
        style={{ color: "var(--color-primary)" }}
      >
        Core Initiatives
      </h2>

      <div className="relative space-y-20">
        {/* Vertical timeline line */}
        <div
          className="absolute top-20 left-10 md:left-14 h-[calc(100%_-_5rem)] w-1 bg-gradient-to-b from-[var(--color-primary)] to-transparent rounded"
          aria-hidden="true"
        />

        {initiatives.map(({ number, title, items, iconColor, progress, extraInfo }, idx) => {
          const isFlipped = flipped.includes(idx);

          return (
            <div
              key={number}
              className={`group relative perspective cursor-pointer select-none max-w-4xl mx-auto`}
              onClick={() => toggleFlip(idx)}
              aria-pressed={isFlipped}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleFlip(idx);
              }}
              role="button"
            >
              {/* Card Container */}
              <div
                className={`relative duration-700 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""
                  }`}
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.7s",
                }}
              >
                {/* Front Side */}
                <div
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                    position: "relative",
                  }}
                >
                  {/* Number badge */}
                  <div
                    className="absolute -left-14 top-12 flex items-center justify-center rounded-full w-14 h-14 text-xl font-bold text-white shadow-lg"
                    style={{ backgroundColor: iconColor, boxShadow: `0 0 10px ${iconColor}` }}
                  >
                    {number}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-semibold mb-6"
                    style={{ color: iconColor }}
                  >
                    {title}
                  </h3>

                  {/* Progress bar */}
                  <div className="w-full h-2 rounded-full bg-gray-200 mb-6 overflow-hidden">
                    <div
                      className="h-2 rounded-full transition-all duration-700"
                      style={{ width: `${progress}%`, backgroundColor: iconColor }}
                    />
                  </div>

                  {/* List */}
                  <ul className="list-disc list-inside text-textDark leading-relaxed space-y-2 text-lg">
                    {items.map(({ text, tags }, i) => (
                      <li key={i} className="whitespace-pre-wrap">
                        {text}{" "}
                        <span className="ml-2 space-x-1">
                          {tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-[var(--color-secondary)] text-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 italic text-sm text-gray-500">
                    *Click card to see more info*
                  </p>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] rounded-xl p-8 text-white shadow-xl"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-4">More Info</h3>
                  <p className="text-lg leading-relaxed">{extraInfo}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`More details about "${title}" coming soon!`);
                    }}
                    className="mt-8 bg-white text-[var(--color-primary)] font-bold px-6 py-2 rounded-full shadow hover:shadow-lg transition"
                    type="button"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1500px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
