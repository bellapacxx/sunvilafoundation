// src/app/contact/page.tsx
'use client'
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just simulate submit
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-heading font-bold text-primary mb-12 text-center">
        Contact Us
      </h1>

      {submitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded text-center">
          Thank you for reaching out! We will get back to you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold text-textDark">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-primary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-textDark">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-primary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold text-textDark">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-primary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-lightBg font-semibold px-8 py-3 rounded hover:bg-secondary transition w-full"
        >
          Send Message
        </button>
      </form>

      <section className="mt-20 max-w-lg mx-auto text-textDark text-center space-y-4">
        <p><strong>Email:</strong> info@sunvilafoundation.io</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Address:</strong> 123 Smart Village Rd, Green City</p>
      </section>
    </main>
  );
}
