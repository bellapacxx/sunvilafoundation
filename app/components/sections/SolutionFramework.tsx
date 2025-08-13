export default function SolutionFramework() {
  // Data array with icons & colors for easier future edits
  const solutions = [
    {
      title: "Smart People",
      description: "PION Business Model (Winning Mentality → Winning Nation)",
      color: "var(--color-primary)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          style={{ color: "var(--color-primary)" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      title: "Smart Technology",
      description: "IoT, AI, Smart Agriculture, Renewable Energy",
      color: "var(--color-secondary)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          style={{ color: "var(--color-secondary)" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
    },
    {
      title: "Smart Institutions",
      description: "Leadership Kits, Knowledge Banks, Innovation Centers",
      color: "var(--color-accent)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          style={{ color: "var(--color-accent)" }}
        >
          <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
        </svg>
      ),
    },
    {
      title: "Digital Marketing",
      description: "E-commerce, Blockchain, Digital Health/Learning Platforms",
      color: "var(--color-primary)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          style={{ color: "var(--color-primary)" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      title: "Smart Logistics",
      description: "Eco-packaging, Digital Warehousing, Inspection Systems",
      color: "var(--color-secondary)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          style={{ color: "var(--color-secondary)" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16" />
        </svg>
      ),
    },
    {
      title: "Smart Finance",
      description: "Green Bank, Microfinance, CryptoCurrency, 10% Profit Philanthropy",
      color: "var(--color-accent)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          style={{ color: "var(--color-accent)" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m0 0l-3-3m3 3l3-3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-8 py-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-lightBg)" }}
    >
      {/* Decorative shapes behind */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none"
        style={{ width: 400, height: 400, background: "radial-gradient(circle, var(--color-primary) 10%, transparent 70%)", borderRadius: "50%" }}
      />
      <div
        className="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1/3 opacity-10 pointer-events-none select-none"
        style={{ width: 300, height: 300, background: "radial-gradient(circle, var(--color-secondary) 10%, transparent 70%)", borderRadius: "50%" }}
      />

      <h2
        className="text-4xl font-heading font-bold text-center mb-16"
        style={{ color: "var(--color-primary)" }}
      >
        The Solution:{" "}
        <span
          style={{
            background:
              "linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent))",
            WebkitBackgroundClip: "text",
            
          }}
        >
          Green Smart Village Model
        </span>
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map(({ title, description, color, icon }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-pointer border-t-8"
            style={{ borderTopColor: color }}
          >
            <div className="flex items-center mb-5 space-x-4">
              <div>{icon}</div>
              <h3 className="text-2xl font-semibold" style={{ color }}>
                {title}
              </h3>
            </div>
            <p className="text-textDark text-lg leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
