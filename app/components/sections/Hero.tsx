'use client';

import React from "react";
import { motion, easeOut } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.6, ease: easeOut },
  }),
};

export default function HeroSection() {
  return (
    <section
      className="relative w-full bg-lightBg text-textDark py-24 px-6 text-center max-w-9xl mx-auto overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Enhanced animated gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          filter: "blur(80px)",
          background:
            "radial-gradient(circle at center, rgba(245,166,35,0.3) 0%, rgba(163,90,0,0.2) 60%, transparent 100%)," +
            "linear-gradient(270deg, rgba(245,166,35,0.2), rgba(163,90,0,0.1), rgba(245,166,35,0.2))",
          backgroundSize: "300% 300%",
          animation: "gradientShift 20s ease infinite",
        }}
      />

      {/* Subtle floating translucent orbs */}
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute rounded-full bg-secondary opacity-20 pointer-events-none"
          style={{
            width: 20 + i * 10,
            height: 20 + i * 10,
            top: `${10 + i * 12}%`,
            left: `${15 + i * 15}%`,
            filter: "blur(15px)",
            animation: `floatY ${6 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-heading font-bold mb-6 text-primary"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          Eradicating Poverty through Smart Village Revolution
        </motion.h1>

        <motion.p
          className="text-xl mb-10 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
        >
          Sunvila Foundation is a pioneering social enterprise implementing{" "}
          <span className="text-secondary font-semibold">
            Global Diaspora Home Reconnection Program (GDHRP)
          </span>{" "}
          and{" "}
          <span className="text-secondary font-semibold">
            Global Dynamic Startups Entrepreneurship (GDSEP)
          </span>{" "}
          to eradicate poverty through Green Smart Villages. We address structural and systemic barriers in underserved communities by reengineering rural settlements with smart mindsets, skillsets, and toolsets.
        </motion.p>

        <motion.div
          className="flex justify-center gap-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={2}
        >
          <a
            href="/partners"
            className="bg-primary text-lightBg font-semibold px-8 py-4 rounded shadow hover:bg-secondary transition"
          >
            Become a Partner
          </a>
          <a
            href="/donate"
            className="border-2 border-primary text-primary font-semibold px-8 py-4 rounded hover:text-lightBg transition"
          >
            Donate Now
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%, 0% 0%;
          }
          50% {
            background-position: 100% 50%, 100% 100%;
          }
          100% {
            background-position: 0% 50%, 0% 0%;
          }
        }

        @keyframes floatY {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}
