// src/app/partners/page.tsx
export default function PartnersPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-heading font-bold text-primary mb-12 text-center">
        Our Partners
      </h1>

      <p className="max-w-4xl mx-auto text-textDark text-lg leading-relaxed mb-10 text-center">
        Collaboration is key to scaling our impact. We work with governments, tech firms, impact investors, global diasporas, and startups to transform underserved communities through smart village innovations.
      </p>

      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div className="bg-lightBg rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-secondary font-semibold text-2xl mb-4">Governments</h2>
          <p className="text-textDark leading-relaxed">
            Land and policy support from local and national governments to enable smart village development.
          </p>
        </div>

        <div className="bg-lightBg rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-secondary font-semibold text-2xl mb-4">Tech Firms</h2>
          <p className="text-textDark leading-relaxed">
            Digital infrastructure providers powering e-commerce, blockchain, IoT, and AI solutions.
          </p>
        </div>

        <div className="bg-lightBg rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-secondary font-semibold text-2xl mb-4">Impact Investors</h2>
          <p className="text-textDark leading-relaxed">
            Funding to scale initiatives, enabling long-term sustainable development aligned with UN SDGs.
          </p>
        </div>

        <div className="bg-lightBg rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-secondary font-semibold text-2xl mb-4">Global Diasporas</h2>
          <p className="text-textDark leading-relaxed">
            Diaspora networks connecting capital, knowledge, and opportunities back to home communities.
          </p>
        </div>

        <div className="bg-lightBg rounded-lg p-6 shadow hover:shadow-lg transition">
          <h2 className="text-secondary font-semibold text-2xl mb-4">Startups</h2>
          <p className="text-textDark leading-relaxed">
            Innovative startups creating scalable solutions in agriculture, fintech, green tech, and social impact.
          </p>
        </div>
      </div>
    </main>
  );
}
