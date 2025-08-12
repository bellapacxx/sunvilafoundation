// src/app/initiatives/page.tsx
export default function InitiativesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-heading font-bold text-primary mb-12 text-center">
        Core Initiatives
      </h1>

      <div className="space-y-12 max-w-4xl mx-auto">
        <section>
          <h2 className="text-3xl font-semibold text-secondary mb-4">1. Smart People Development (PION Model)</h2>
          <ul className="list-disc list-inside text-textDark leading-relaxed space-y-2 text-lg">
            <li>Phase 1: Winning Mentality (Vision + Belief + Action)</li>
            <li>Phase 2: Winning Teams (*Synergy: 1+1=2N*)</li>
            <li>Phase 3: Winning Organizations (Performance-Based Profit Sharing)</li>
            <li>Phase 4: Winning Nations (Global Diaspora Networks)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-secondary mb-4">2. Digital Economy Leapfrogging</h2>
          <ul className="list-disc list-inside text-textDark leading-relaxed space-y-2 text-lg">
            <li>E-commerce & payment gateways</li>
            <li>AI/drone tech for agriculture</li>
            <li>Blockchain for transparent trade</li>
            <li>Digital outsourcing platforms</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-secondary mb-4">3. Localized Green Tech</h2>
          <ul className="list-disc list-inside text-textDark leading-relaxed space-y-2 text-lg">
            <li>8KW Solar-Powered Homes (Carbon Credit Model)</li>
            <li>Rainwater harvesting & organic farming</li>
            <li>&quot;7 Trees per Child" Reforestation Policy</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-secondary mb-4">4. Smart Infrastructure</h2>
          <ul className="list-disc list-inside text-textDark leading-relaxed space-y-2 text-lg">
            <li>Smart health centers & schools</li>
            <li>Agro-processing hubs with IoT</li>
            <li>Robotic transport/logistics</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
