export default function ProblemStatement() {
  return (
    <section className="w-full mx-auto py-20 px-4 sm:px-8 rounded-xl shadow-xl border border-gray-100" style={{ backgroundColor: "var(--color-lightBg)" }}>
      
      {/* ===== Desktop View ===== */}
      <div className="hidden md:block">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight relative inline-block" style={{ color: "var(--color-primary)" }}>
            The Problem: <br />
            <span
              style={{
                background: "linear-gradient(90deg, #A35A00 0%, #F5A623 50%, #FCD77F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "700",
              }}
            >
              Breaking Development Barriers
            </span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full mt-4 animate-pulse" style={{ background: "linear-gradient(90deg, #A35A00, #F5A623, #FCD77F)" }} />
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: "var(--color-textDark)" }}>
            Understanding the core challenges that prevent sustainable growth and innovation in developing regions.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-16 px-40">
          {/* Structural Problems Card */}
          <div className="rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border"
               style={{ background: "linear-gradient(135deg, var(--color-primary)1a, var(--color-secondary)14)", borderColor: "var(--color-secondary)", color: "var(--color-darkBg)" }}>
            {/* ...Card content same as before... */}
             <div className="flex items-center mb-6 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ color: "var(--color-primary)" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <h3 style={{ color: "var(--color-primary)" }} className="text-2xl font-semibold">
              Structural Problems
            </h3>
          </div>
          <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed" style={{ color: "var(--color-textDark)" }}>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-secondary)" }}>
                Unproductive Highland Settlements:
              </span>{" "}
              Scattered populations with limited infrastructure.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-secondary)" }}>
                Idle Labor Force:
              </span>{" "}
              Cultural/religious orientations limiting economic participation.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-secondary)" }}>
                Population Explosion & Deforestation:
              </span>{" "}
              Unsustainable resource depletion.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-secondary)" }}>
                Low Productivity:
              </span>{" "}
              Outdated farming and artisanal techniques.
            </li>
          </ul>
          </div>

          {/* Systemic Problems Card */}
          <div className="rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border"
               style={{ background: "linear-gradient(135deg, var(--color-secondary)1a, var(--color-accent)14)", borderColor: "var(--color-secondary)", color: "var(--color-darkBg)" }}>
            {/* ...Card content same as before... */}
            <div className="flex items-center mb-6 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ color: "var(--color-secondary)" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <h3 style={{ color: "var(--color-secondary)" }} className="text-2xl font-semibold">
              Systemic Problems
            </h3>
          </div>
          <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed" style={{ color: "var(--color-textDark)" }}>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
                Subsistence Economy:
              </span>{" "}
              Over-reliance on food self-sufficiency without commercialization.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
                Lack of Model Solution Centers:
              </span>{" "}
              No innovation hubs for skills or enterprise.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
                Broker Economy:
              </span>{" "}
              Middlemen exploiting producers, reducing income.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
                Centralized Planning Failure:
              </span>{" "}
              Communities excluded from decision-making.
            </li>
          </ul>
          </div>
        </div>

        <div className="ml-40 mr-40 mt-16 rounded-xl p-8 shadow-xl flex flex-row justify-around items-center space-x-8">
          {/* Stats Section */}
          <div className="text-center">
            <p className="text-3xl font-extrabold">80%</p>
            <p className="uppercase tracking-widest text-sm">of population affected by infrastructure gaps</p>
          </div>
          <div className="text-center border-l border-lightBg/40 px-8">
            <p className="text-3xl font-extrabold">60%</p>
            <p className="uppercase tracking-widest text-sm">labor force inactive or underemployed</p>
          </div>
          <div className="text-center border-l border-lightBg/40 px-8">
            <p className="text-3xl font-extrabold">75%</p>
            <p className="uppercase tracking-widest text-sm">loss in potential income due to middlemen exploitation</p>
          </div>
        </div>
      </div>

      {/* ===== Mobile View ===== */}
      <div className="block md:hidden">
        <header className="text-center mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--color-primary)" }}>
            The Problem: <br />
            <span
              style={{
                background: "linear-gradient(90deg, #A35A00 0%, #F5A623 50%, #FCD77F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "700",
              }}
            >
              Breaking Development Barriers
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto rounded-full mt-3 animate-pulse" style={{ background: "linear-gradient(90deg, #A35A00, #F5A623, #FCD77F)" }} />
          <p className="mt-4 text-sm" style={{ color: "var(--color-textDark)" }}>
            Understanding the core challenges that prevent sustainable growth and innovation in developing regions.
          </p>
        </header>

        <div className="space-y-6 px-4">
          {/* Structural Problems Card */}
          <div className="rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border"
               style={{ background: "linear-gradient(135deg, var(--color-primary)1a, var(--color-secondary)14)", borderColor: "var(--color-secondary)", color: "var(--color-darkBg)" }}>
            {/* ...Card content same as before... */}
              <div className="flex items-center mb-6 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ color: "var(--color-primary)" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <h3 style={{ color: "var(--color-primary)" }} className="text-2xl font-semibold">
              Structural Problems
            </h3>
          </div>
          <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed" style={{ color: "var(--color-textDark)" }}>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-secondary)" }}>
                Unproductive Highland Settlements:
              </span>{" "}
              Scattered populations with limited infrastructure.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-secondary)" }}>
                Idle Labor Force:
              </span>{" "}
              Cultural/religious orientations limiting economic participation.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-secondary)" }}>
                Population Explosion & Deforestation:
              </span>{" "}
              Unsustainable resource depletion.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-secondary)" }}>
                Low Productivity:
              </span>{" "}
              Outdated farming and artisanal techniques.
            </li>
          </ul>
          </div>

          {/* Systemic Problems Card */}
          <div className="rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border"
               style={{ background: "linear-gradient(135deg, var(--color-secondary)1a, var(--color-accent)14)", borderColor: "var(--color-secondary)", color: "var(--color-darkBg)" }}>
            {/* ...Card content same as before... */}
            <div className="flex items-center mb-6 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ color: "var(--color-secondary)" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <h3 style={{ color: "var(--color-secondary)" }} className="text-2xl font-semibold">
              Systemic Problems
            </h3>
          </div>
          <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed" style={{ color: "var(--color-textDark)" }}>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
                Subsistence Economy:
              </span>{" "}
              Over-reliance on food self-sufficiency without commercialization.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
                Lack of Model Solution Centers:
              </span>{" "}
              No innovation hubs for skills or enterprise.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
                Broker Economy:
              </span>{" "}
              Middlemen exploiting producers, reducing income.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
                Centralized Planning Failure:
              </span>{" "}
              Communities excluded from decision-making.
            </li>
          </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl p-6 shadow-xl flex flex-col space-y-4">
          {/* Stats Section */}
          <div className="text-center">
            <p className="text-2xl font-extrabold">80%</p>
            <p className="uppercase tracking-widest text-xs">of population affected by infrastructure gaps</p>
          </div>
          <div className="text-center border-t border-lightBg/40 pt-4">
            <p className="text-2xl font-extrabold">60%</p>
            <p className="uppercase tracking-widest text-xs">labor force inactive or underemployed</p>
          </div>
          <div className="text-center border-t border-lightBg/40 pt-4">
            <p className="text-2xl font-extrabold">75%</p>
            <p className="uppercase tracking-widest text-xs">loss in potential income due to middlemen exploitation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
