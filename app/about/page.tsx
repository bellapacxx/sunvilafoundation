// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-heading font-bold text-primary mb-12 text-center">
        About Sunvila Foundation
      </h1>

      {/* Executive Summary */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-secondary mb-4">Executive Summary</h2>
        <p className="text-textDark text-lg leading-relaxed">
          Sunvila Foundation is a pioneering social enterprise implementing the{" "}
          <span className="font-semibold text-accent">
            Global Diaspora Home Reconnection Program (GDHRP)
          </span>{" "}
          and{" "}
          <span className="font-semibold text-accent">
            Global Dynamic Startups Entrepreneurship (GDSEP)
          </span>{" "}
          to eradicate poverty through Green Smart Villages. We address structural and systemic barriers in underserved communities by reengineering rural settlements with smart mindsets, skillsets, and toolsets.
        </p>
      </section>

      {/* The Problem */}
      <section className="mb-16 bg-lightBg rounded-lg p-8 shadow">
        <h2 className="text-3xl font-semibold text-secondary mb-6 text-center">The Problem: Breaking Development Barriers</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold text-xl text-primary mb-3">Structural Problems</h3>
            <ul className="list-disc list-inside space-y-2 text-textDark text-base leading-relaxed">
              <li>Unproductive Highland Settlements – Scattered populations with limited infrastructure</li>
              <li>Idle Labor Force – Cultural/religious orientations limiting economic participation</li>
              <li>Population Explosion & Deforestation – Unsustainable resource depletion</li>
              <li>Low Productivity – Outdated farming and artisanal techniques</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-primary mb-3">Systemic Problems</h3>
            <ul className="list-disc list-inside space-y-2 text-textDark text-base leading-relaxed">
              <li>Subsistence Economy – Over-reliance on food self-sufficiency without commercialization</li>
              <li>Lack of Model Solution Centers – No innovation hubs for skills or enterprise</li>
              <li>Broker Economy – Middlemen exploiting producers, reducing income</li>
              <li>Centralized Planning Failure – Communities excluded from decision-making</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-secondary mb-6 text-center">Organizational Identity</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="font-semibold text-xl text-primary mb-2">Mission</h3>
            <p className="text-textDark text-base leading-relaxed">
              To eradicate systemic poverty by empowering underserved communities with digital tools, green technologies, and institutional frameworks that foster self-sustaining Smart Villages.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-primary mb-2">Vision</h3>
            <p className="text-textDark text-base leading-relaxed">
              A world where every rural settlement thrives as a hub of productivity, sustainability, and equitable prosperity—connected to global markets yet rooted in local resilience.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-primary mb-2">Core Values</h3>
            <ul className="list-disc list-inside text-textDark space-y-2 text-base leading-relaxed">
              <li>Belief in Human Potential – Poverty is a solvable design flaw, not destiny.</li>
              <li>Synergy Over Silos – Collaborative ecosystems &gt; individual efforts.</li>
              <li>Green-Forward Innovation – Tech solutions must regenerate ecosystems.</li>
              <li>Radical Inclusion – Leave no one behind (women, youth, marginalized groups).</li>
              <li>Transparency – Blockchain-backed accountability in all operations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Success Factors */}
      <section>
        <h2 className="text-3xl font-semibold text-secondary mb-6 text-center">Key Success Factors</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold text-xl text-primary mb-3">Mindset Revolution</h3>
            <p className="text-textDark text-base leading-relaxed">
              PION Business Model rewires defeatist attitudes into winning systems.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-primary mb-3">Hyper-Local Tech</h3>
            <p className="text-textDark text-base leading-relaxed">
              Solar homes, smart agri-tech, and rainwater harvesters designed for rural contexts.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-primary mb-3">Digital Bridges</h3>
            <p className="text-textDark text-base leading-relaxed">
              E-commerce + blockchain = farmers bypass brokers to sell globally.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-primary mb-3">Scalable Governance</h3>
            <p className="text-textDark text-base leading-relaxed">
              Replicable "Leadership Kits" for village self-management.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-primary mb-3">Profit-for-Purpose</h3>
            <p className="text-textDark text-base leading-relaxed">
              10% of profits fund youth scholarships and maternal health.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
