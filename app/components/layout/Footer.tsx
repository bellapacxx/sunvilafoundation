// src/components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2E1C0F] text-[#FCD77F] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-heading text-[#A35A00]">Sunvila Foundation</h2>
          <p className="mt-1 text-sm max-w-xs">
            <Link href="/" className="hover:text-[#F5A623] transition-colors">
            www.sunvilafoundation.io
          </Link>
          <Link href="www.sunvilacoin.io" className="hover:text-[#F5A623] transition-colors">
            www.sunvilacoin.io
          </Link>
          <Link href="www.sunvilagold.io" className="hover:text-[#F5A623] transition-colors">
            www.sunvilagold.io
          </Link>
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6 flex-wrap justify-center md:justify-start">
          <Link href="/" className="hover:text-[#F5A623] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#F5A623] transition-colors">
            About
          </Link>
          <Link href="/model" className="hover:text-[#F5A623] transition-colors">
            Model
          </Link>
          <Link href="/initiatives" className="hover:text-[#F5A623] transition-colors">
            Initiatives
          </Link>
          <Link href="/impact" className="hover:text-[#F5A623] transition-colors">
            Impact
          </Link>
          <Link href="/partners" className="hover:text-[#F5A623] transition-colors">
            Partners
          </Link>
          <Link href="/contact" className="hover:text-[#F5A623] transition-colors">
            Contact
          </Link>
          <Link href="/donate" className="hover:text-[#F5A623] transition-colors">
            Donate
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-[#FCD77F]/80 text-center md:text-right mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Sunvila Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
