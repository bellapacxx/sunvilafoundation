import { CreditCard, Heart, ShieldCheck, Users } from "lucide-react";

export default function GovernanceFinance() {
  const points = [
    {
      title: "Green Bank",
      description: "Manages village microfinancing.",
      icon: CreditCard,
      color: "var(--color-primary)",
    },
    {
      title: "10% Profit Philanthropy",
      description: "Funds education and health initiatives.",
      icon: Heart,
      color: "var(--color-secondary)",
    },
    {
      title: "Transparent Blockchain Auditing",
      description: "Ensures accountability in all operations.",
      icon: ShieldCheck,
      color: "var(--color-secondary)",
    },
    {
      title: "Decentralized Financing System",
      description: "Empowers communities with local control.",
      icon: Users,
      color: "var(--color-primary)",
    },
  ];

  return (
    <section className="w-full mx-auto px-6 py-20 relative bg-[var(--color-lightBg)] rounded-xl shadow-lg overflow-hidden">
      {/* Background accent gradient */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      <h2
        className="text-4xl font-heading font-bold text-center mb-14"
        style={{ color: "var(--color-primary)" }}
      >
        Governance & Finance
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto text-textDark">
        {points.map(({ title, description, icon: Icon, color }, idx) => (
          <div
            key={idx}
            className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.03] transition"
          >
            <div
              className="flex-shrink-0 p-4 rounded-lg"
              style={{ backgroundColor: color, color: "white" }}
            >
              <Icon size={36} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2" style={{ color }}>
                {title}
              </h3>
              <p className="text-lg leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
