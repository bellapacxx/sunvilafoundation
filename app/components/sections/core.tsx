"use client";

import { useState } from "react";

type DetailItem = {
  heading: string;
  perspective?: string;
  formula?: string;
  example?: string;
  keyTool?: string;
  activation?: string[];
  metric?: string;
  profitSharing?: Array<{ tier: string; reward: string }>;
  outcome?: string;
  definitions?: {
    vertical: string,
    horizontal: string
  }
  purpose?: string;
  systems?: {
    financial: string;
    technological: string;
    cultural: string;
  };
  tool?: string;
  whyItMatters?: string[];
  target?: string;
  strategies?: string[];
  rule?: string;
};

type Initiative = {
  number: string;
  title: string;
  items: Array<{ text: string; tags: string[] }>;
  iconColor: string;
  progress: number;
  extraInfo: string;
  details: DetailItem[];
};

export default function CoreInitiatives() {
  const initiatives: Initiative[] = [
    {
  number: "1",
  title: "Smart People Development (PION Business Model)",
  items: [
    { text: "Phase 1: Winning Mentality-The Power of Vision + Undivided Belief + Potential + Action", tags: ["Vision","Potential", "Undivided Belief", "Action"] },
    { text: "Phase 2: Winning Team-The Power of Synergy (S=N^2/3n)", tags: ["Synergy", "Teamwork"] },
    { text: "Phase 3: Winning Organization-The Power of Shared Vision (Vertical & Horizontal Organizational Development)", tags: ["Profit Sharing", "Performance"] },
    { text: "Phase 4: Winning Nation-The Power of Interconnectedness (Increased Global Marketshare)", tags: ["Global Marketshare", "Interconnectedness"] },
  ],
  iconColor: "var(--color-primary)",
  progress: 80,
  extraInfo: "Building resilient communities starts with empowered individuals who embrace winning mindsets.",
  details: [
    {
      heading: "The Power of Creativity",
      perspective: `Creativity is the engine of systemic change. It combines vision, undivided belief, sub-conscious mind and action to design solutions that break poverty cycles. In Smart Villages, creativity turns constraints (e.g., lack of electricity) into opportunities (e.g., solar-powered agro-processing). Creativity plus marketable products and services provides innovation. Innovation plus social and economic values gives you entrepreneurship. Creativity is, therefore, the root of innovation and entrepreneurship.`,
      formula: "Creativity = Vision + Undivided Belief + Potential + Action"
    },
    {
      heading: "Vision",
      perspective: `Vision is the "north star" for communities—a clear, compelling future state (e.g., a self-sustaining Smart Village). It’s not abstract; it’s measurable (e.g., "100% digital literacy by 2030").`,
      example: `"A highland settlement transforming from subsistence farming to a blockchain-enabled coffee exporter."`
    },
    {
      heading: "Undivided Belief",
      perspective: `The unshakable conviction that poverty is solvable. It’s the decision to reject "how things are" and commit to how they could be (e.g., believing idle labor can become skilled digital workers).`,
      keyTool: "PION Business Model (Phase 1: Winning Mentality)"
    },
    {
      heading: "Potential",
      perspective: `The untapped resources within individuals and communities—often suppressed by systemic barriers. We activate it through:`,
      activation: [
        "GDHRP training (digital skills)",
        "Shared vision-setting (aligning personal/organizational goals)"
      ],
      example: `A farmer’s potential isn’t just growing crops—it’s mastering IoT-based irrigation to triple yields.`
    },
    {
      heading: "Action",
      perspective: `The bridge between ideas and impact. Action is humanity expressed—like a mother using mobile banking to save for her child’s education.`,
      metric: `"Opportunity Realization Index" (measuring ideas turned into income)`
    },
    {
      heading: "The Power of Synergy",
      perspective: `Synergy is exponential collaboration: 1+1=2N (where N > 1). It’s how Smart Villages achieve more than the sum of individual efforts.`,
      formula: "Synergy = Team Vision + Passion + Discipline + Ethical Behavior",
      example: `Women’s cooperatives pooling solar-powered textile microfactories to access global markets.`
    },
    {
      heading: "Team Work",
      perspective: `Teams are "poverty-solving squads" with complementary skills (e.g., a farmer + coder co-designing a crop-tracking app).`,
      rule: "Vertical + Horizontal Development (see below)"
    },
    {
      heading: "The Power of Shared Vision",
      perspective: `When community needs align with organizational goals, productivity soars. We incentivize this via:`,
      profitSharing: [
        { tier: "60%", reward: "Salary" },
        { tier: "100%", reward: "10% profit share" },
        { tier: ">100%", reward: "100% profit share" }
      ],
      outcome: `Creates a "middle class" (shock absorbers for economic crises).`
    },
    {
      heading: "Vertical & Horizontal Organizational Development",
       definitions: {
        vertical: "Scaling impact upward (e.g., a village cluster → regional Smart Village network).",
        horizontal: "Scaling skills outward (e.g., training 1,000 farmers in blockchain traceability)."
      },
      purpose: "Builds resilient ecosystems (not isolated projects)."
    },
    {
      heading: "Global Market Share",
      perspective: `The % of a market (e.g., organic coffee, digital outsourcing) controlled by Smart Village products/services. We achieve this by:`,
      strategies: [
        "Diaspora networks (Ethiopian expats promoting village-made goods).",
        "Digital platforms (e-commerce, crypto payments)."
      ],
      target: "5%+ market share in niche sectors (e.g., solar tech accessories)."
    },
    {
      heading: "The Power of Interconnectedness",
      perspective: `The strategic linking of Smart Villages to global systems:`,
      systems: {
        financial: "Green Bank → international investors",
        technological: "AI weather apps → smallholder farmers",
        cultural: "Diaspora as brand ambassadors"
      },
      tool: `"Global Digital Systems" (e.g., e-learning for village schools)`,
      whyItMatters: [
        "Turning idle labor into micro-entrepreneurs.",
        "Transforming deforestation into carbon credit economies.",
        "Making Smart Villages nodes in global value chains."
      ]
    }
  ]
}
,
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
  details: [
    {
      heading: "E-commerce",
      perspective: "Online marketplaces enable local producers to sell goods directly to global consumers, expanding market access.",
      example: "A rural cooperative selling handmade crafts through an international e-commerce platform."
    },
    {
      heading: "Payments",
      perspective: "Digital payment systems make transactions faster, safer, and more transparent.",
      example: "Mobile money and payment gateways allowing farmers to receive instant payment for produce."
    },
    {
      heading: "AI",
      perspective: "Artificial Intelligence helps optimize agricultural decisions, forecast yields, and automate processes.",
      example: "Using AI to predict crop diseases and recommend interventions."
    },
    {
      heading: "Drones",
      perspective: "Drones provide aerial monitoring, precision spraying, and data collection for agriculture.",
      example: "Drone-based surveys to detect water stress in large farms."
    },
    {
      heading: "Agriculture",
      perspective: "Smart farming integrates technology for improved productivity, sustainability, and efficiency.",
      example: "IoT sensors in fields feeding real-time data to farmers for better crop management."
    },
    {
      heading: "Blockchain",
      perspective: "Decentralized ledger technology ensures secure, auditable, and tamper-proof trade records.",
      example: "Tracking cocoa beans from farm to exporter using blockchain to guarantee quality and origin."
    },
    {
      heading: "Transparency",
      perspective: "Transparent systems build trust among stakeholders and reduce corruption or fraud.",
      example: "Digital trade records allowing buyers to see exactly how products were sourced."
    },
    {
      heading: "Outsourcing",
      perspective: "Digital platforms connect skilled local talent to global service demands, creating income opportunities.",
      example: "A designer in a Smart Village providing services to international clients online."
    },
    {
      heading: "Digital",
      perspective: "Leveraging technology to create scalable, flexible, and remote solutions for business and services.",
      example: "Using cloud-based tools for project management and remote collaboration."
    }
  ]
}
,
  {
  number: "3",
  title: "Localized Green Tech",
  items: [
    { text: "8KW Solar-Powered Homes (Carbon Credit Model)", tags: ["Solar", "Carbon Credit"] },
    { text: "Rainwater harvesting & organic farming", tags: ["Sustainability", "Organic"] },
    { text: '"7 Trees per Child" Reforestation Policy 7TPC', tags: ["Reforestation", "Policy"] },
  ],
  iconColor: "var(--color-primary)",
  progress: 70,
  extraInfo: "Green technology initiatives reduce carbon footprint and promote eco-friendly living standards.",
  details: [
    {
      heading: "Solar",
      perspective: "Deploying solar-powered homes reduces reliance on fossil fuels and generates carbon credits.",
      example: "A Smart Village with 8KW solar homes earning carbon credits sold on global markets."
    },
    {
      heading: "Carbon Credit",
      perspective: "Monetizing reductions in greenhouse gas emissions to fund sustainable initiatives.",
      example: "Selling carbon credits from solar-powered homes to international buyers."
    },
    {
      heading: "Sustainability",
      perspective: "Practices that conserve resources and minimize environmental impact.",
      example: "Rainwater harvesting systems providing water for crops and households year-round."
    },
    {
      heading: "Organic",
      perspective: "Farming without synthetic chemicals, improving soil health and food quality.",
      example: "Village farms producing organic vegetables for local and export markets."
    },
    {
      heading: "Reforestation",
      perspective: "Planting trees to restore ecosystems, sequester carbon, and prevent soil erosion.",
      example: 'Implementing "7 Trees per Child" policy where every child contributes to local reforestation.'
    },
    {
      heading: "Policy",
      perspective: "Governance frameworks guiding green tech adoption and environmental responsibility.",
      example: "Government-backed incentives for Smart Villages adopting solar and reforestation initiatives."
    },
  ]
}
,
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
  details: [
    {
      heading: "Health",
      perspective: "Smart health centers integrate digital tools, telemedicine, and IoT to improve patient care and outreach.",
      example: "A village clinic using IoT-enabled devices for remote diagnostics and e-prescriptions."
    },
    {
      heading: "Education",
      perspective: "Smart schools leverage e-learning, digital classrooms, and interactive platforms to enhance learning outcomes.",
      example: "Remote STEM lessons via tablets and online platforms for rural students."
    },
    {
      heading: "IoT",
      perspective: "Internet of Things devices monitor, automate, and optimize processes in infrastructure and agriculture.",
      example: "Sensors in agro-processing hubs tracking temperature, humidity, and machinery performance."
    },
    {
      heading: "Agro-processing",
      perspective: "Value-addition facilities for raw agricultural produce to boost income and create jobs.",
      example: "Processing coffee or grains locally before export to improve profitability."
    },
    {
      heading: "Robotics",
      perspective: "Automation in transport and logistics reduces labor constraints and increases precision.",
      example: "Autonomous delivery vehicles moving goods between Smart Villages and regional markets."
    },
    {
      heading: "Logistics",
      perspective: "Optimized supply chains and transport systems reduce delays, cost, and waste.",
      example: "Smart routing software coordinating multiple deliveries from agro-hubs to marketplaces."
    },
    
  ]
}

    // ... (other initiative objects remain the same)
  ];

  const [flipped, setFlipped] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlipped((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-b from-[var(--color-lightBg)] to-white rounded-xl relative"
      style={{ backgroundColor: "var(--color-lightBg)" }}
    >
      <h2
        className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12 sm:mb-16"
        style={{ color: "var(--color-primary)" }}
      >
        Core Initiatives
      </h2>

      <div className="relative space-y-20">
        <div
          className="absolute top-16 sm:top-20 left-6 sm:left-14 h-[calc(100%_-_4rem)] sm:h-[calc(100%_-_5rem)] w-0.5 bg-gradient-to-b from-[var(--color-primary)] to-transparent rounded"
          aria-hidden="true"
        />

        {initiatives.map((initiative, idx) => {
          const { number, title, items, iconColor, progress, extraInfo, details } = initiative;
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
              <div
                className={`relative duration-700 transform-style-preserve-3d ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.7s",
                }}
              >
                {/* Front Side */}
                <div
                  className="bg-white rounded-xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                    position: "relative",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full w-10 h-10 sm:w-14 sm:h-14 text-lg sm:text-xl font-bold text-white shadow-lg"
                    style={{ backgroundColor: iconColor, boxShadow: `0 0 10px ${iconColor}` }}
                  >
                    {number}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6" style={{ color: iconColor }}>
                    {title}
                  </h3>

                  <div className="w-full h-2 rounded-full bg-gray-200 mb-6 overflow-hidden">
                    <div
                      className="h-2 rounded-full transition-all duration-700"
                      style={{ width: `${progress}%`, backgroundColor: iconColor }}
                    />
                  </div>

                  <ul className="list-disc list-inside text-textDark leading-relaxed space-y-1 sm:space-y-2 text-sm sm:text-lg">
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
                  <p className="mt-4 sm:mt-6 italic text-xs sm:text-sm text-gray-500">
                    *Click card to see more info*
                  </p>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] rounded-xl p-4 sm:p-8 text-white shadow-xl overflow-y-auto"
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
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{title} Insights</h3>
                  <p className="mb-4 sm:mb-6 italic">{extraInfo}</p>
                  <div className="space-y-6">
                    {details.map((detail, i) => (
                      <div key={i} className="bg-white/10 p-4 rounded-lg">
                        <h4  className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">{detail.heading}</h4>
                        <p className="opacity-90 text-xs sm:text-sm mb-2">{detail.perspective}</p>
                        {/* Systems (conditional) */}
  {'systems' in detail && (
    <div className="mt-2 bg-black/20 p-2 rounded">
      <strong>Systems:</strong>
      <ul className="ml-4 mt-1 list-disc">
        <li>Financial: {detail.systems?.financial}</li>
        <li>Technological: {detail.systems?.technological}</li>
        <li>Cultural: {detail.systems?.cultural}</li>
      </ul>
    </div>
  )}
  {'definitions' in detail && (
    <div className="mt-2 bg-black/20 p-2 rounded">
      <strong>Definitions:</strong>
      <ul className="ml-4 mt-1 list-disc">
        <li>Vertical: {detail.definitions?.vertical}</li>
        <li>Horizontal: {detail.definitions?.vertical}</li>
      </ul>
    </div>
  )}

  {/* Why It Matters (conditional) */}
  {'whyItMatters' in detail && (
    <div className="mt-2 bg-black/20 p-2 rounded">
      <strong>Why It Matters:</strong>
      <ul className="ml-4 mt-1 list-disc">
        {detail.whyItMatters?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )}
  {/* strategies (conditional) */}
  {'strategies' in detail && (
    <div className="mt-2 bg-black/20 p-2 rounded">
      <strong>Startegies:</strong>
      <ul className="ml-4 mt-1 list-disc">
        {detail.strategies?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )}

  {/* Tool (conditional) */}
  {'tool' in detail && (
    <div className="mt-2 italic bg-black/20 p-2 rounded">
      <strong>Tool:</strong> {detail.tool}
    </div>
  )}
                        {'formula' in detail && (
                          <p className="mt-1 italic bg-black/20 p-2 rounded">
                            <strong>Formula:</strong> {detail.formula}
                          </p>
                        )}
                        
                        {'example' in detail && (
                          <p className="mt-2 text-sm bg-black/20 p-2 rounded">
                            <strong>Example:</strong> {detail.example}
                          </p>
                        )}
                        
                        {'keyTool' in detail && (
                          <p className="mt-2">
                            <strong>Key Tool:</strong> {detail.keyTool}
                          </p>
                        )}
                        
                        {'metric' in detail && (
                          <p className="mt-2">
                            <strong>Metric:</strong> {detail.metric}
                          </p>
                        )}
                        
                        {'activation' in detail && detail.activation && (
                          <div className="mt-2">
                            <strong>Activation:</strong>
                            <ul className="list-disc list-inside ml-4 mt-1">
                              {detail.activation.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {'profitSharing' in detail && detail.profitSharing && (
                          <div className="mt-3">
                            <strong>Profit Sharing:</strong>
                            <ul className="mt-1 space-y-1">
                              {detail.profitSharing.map(({ tier, reward }, i) => (
                                <li key={i} className="flex gap-2">
                                  <span className="font-medium">{tier}:</span>
                                  <span>{reward}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
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