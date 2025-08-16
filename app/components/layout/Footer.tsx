// src/components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2E1C0F] text-[#FCD77F] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Tagline */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-heading text-[#A35A00]">Sunvila Foundation</h2>
          <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start text-sm">
            <Link href="/" className="hover:text-[#F5A623] transition-colors">
              www.sunvilafoundation.io
            </Link>
            <Link
              href="https://www.sunvilacoin.io"
              target="_blank"
              className="hover:text-[#F5A623] transition-colors"
            >
              www.sunvilacoin.io
            </Link>
            <Link
              href="https://www.sunvilagold.io"
              target="_blank"
              className="hover:text-[#F5A623] transition-colors"
            >
              www.sunvilagold.io
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start text-sm sm:text-base">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Model", href: "/model" },
            { label: "Initiatives", href: "/initiatives" },
            { label: "Impact", href: "/impact" },
            { label: "Partners", href: "/partners" },
            { label: "Contact", href: "/contact" },
            { label: "Donate", href: "/donate" },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="hover:text-[#F5A623] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-[#FCD77F]/80 text-center md:text-right mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Sunvila Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
