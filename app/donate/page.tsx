// src/app/donate/page.tsx
export default function DonatePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-heading font-bold text-primary mb-12">
        Support Sunvila Foundation
      </h1>

      <p className="text-textDark text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
        Your generous donations help us scale the Green Smart Village revolution and empower underserved communities with sustainable solutions. Every contribution counts toward education, healthcare, and green technology projects.
      </p>

      <div className="flex justify-center gap-8 mb-16">
        <a
          href="https://www.paypal.com/donate?hosted_button_id=YOUR_PAYPAL_BUTTON_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-lightBg font-semibold px-8 py-4 rounded hover:bg-secondary transition"
        >
          Donate via PayPal
        </a>
        <a
          href="https://yourcryptoaddress.example"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-primary text-primary font-semibold px-8 py-4 rounded hover:bg-primary hover:text-lightBg transition"
        >
          Donate Crypto
        </a>
      </div>

      <section className="text-textDark max-w-3xl mx-auto space-y-4 text-left">
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Support</h2>
        <ul className="list-disc list-inside">
          <li>Volunteer with our local initiatives</li>
          <li>Partner with us on projects</li>
          <li>Share our mission with your network</li>
        </ul>
      </section>
    </main>
  );
}
