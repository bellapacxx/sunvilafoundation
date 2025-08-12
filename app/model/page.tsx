// src/app/model/page.tsx
export default function ModelPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-heading font-bold text-primary mb-12 text-center">
        Green Smart Village Model
      </h1>

      <p className="text-textDark text-lg max-w-4xl mx-auto mb-12 leading-relaxed text-center">
        A holistic ecosystem combining multiple pillars designed to empower rural communities with innovative technology, strong institutions, and sustainable economic models.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {/* Pillar Cards */}
        <div className="bg-lightBg rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-secondary font-semibold text-2xl mb-4">Smart People</h2>
          <p className="text-textDark leading-relaxed">
            PION Business Model (Winning Mentality → Winning Nation)
          </p>
        </div>

        <div className="bg-lightBg rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-secondary font-semibold text-2xl mb-4">Smart Technology</h2>
          <p className="text-textDark leading-relaxed">
            IoT, AI, Smart Agriculture, Renewable Energy
          </p>
        </div>

        <div className="bg-lightBg rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-secondary font-semibold text-2xl mb-4">Smart Institutions</h2>
          <p className="text-textDark leading-relaxed">
            Leadership Kits, Knowledge Banks, Innovation Centers
          </p>
        </div>

        <div className="bg-lightBg rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-secondary font-semibold text-2xl mb-4">Digital Marketing</h2>
          <p className="text-textDark leading-relaxed">
            E-commerce, Blockchain, Digital Health/Learning Platforms
          </p>
        </div>

        <div className="bg-lightBg rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-secondary font-semibold text-2xl mb-4">Smart Logistics</h2>
          <p className="text-textDark leading-relaxed">
            Eco-packaging, Digital Warehousing, Inspection Systems
          </p>
        </div>

        <div className="bg-lightBg rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-secondary font-semibold text-2xl mb-4">Smart Finance</h2>
          <p className="text-textDark leading-relaxed">
            Green Bank, Microfinance, 10% Profit Philanthropy
          </p>
        </div>
      </div>
    </main>
  );
}
