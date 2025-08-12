// src/app/impact/page.tsx
export default function ImpactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 bg-lightBg rounded-lg shadow-md">
      <h1 className="text-5xl font-heading font-bold text-primary mb-12 text-center">
        Impact & Scalability
      </h1>

      <div className="grid md:grid-cols-2 gap-12 text-textDark text-lg leading-relaxed max-w-4xl mx-auto">
        <div className="space-y-6">
          <p>
            <strong>50+</strong> Pilot Smart Villages launched (2020–2024)
          </p>
          <p>
            <strong>30%</strong> Poverty Reduction in implementation zones
          </p>
          <p>
            <strong>10,000+</strong> Trained in GDHRP digital skills
          </p>
          <p>
            <strong>200 Hectares</strong> Reforested via 7 Trees per Newly Born Child (7TPC)
          </p>
        </div>
        <div>
          <p>
            <strong>Roadmap to 2030:</strong> Scale to 500 Smart Villages via:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Public-private partnerships</li>
            <li>Diaspora investment networks</li>
            <li>UN SDG-aligned funding</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
