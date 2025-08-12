'use client'
import { UserPlus, Heart } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      className="relative py-24 px-6 text-center text-lightBg w-full overflow-hidden rounded-xl"
      style={{
        background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
      }}
    >
      {/* Animated gradient blur */}
      <div className="absolute inset-0 -z-10 animate-gradient-x opacity-30 rounded-xl" />

      <h2
        className="text-5xl font-heading font-extrabold mb-6 max-w-4xl mx-auto"
        style={{ textShadow: "0 0 10px rgba(163, 90, 0, 0.8)" }}
      >
        Join Us in Engineering Poverty’s Extinction
      </h2>
      <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto mb-10 rounded-full shadow-lg" />

      <p className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed font-medium drop-shadow-md">
        Become a part of the Sunvila Foundation’s mission by partnering with us or supporting through donations. Together, we create scalable, sustainable change for underserved communities.
      </p>

     <div className="flex flex-wrap justify-center gap-6 max-w-full mx-auto px-4">
  <a
    href="/partners"
    className="flex items-center gap-3 bg-secondary text-textDark font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-xl hover:bg-accent transition min-w-[180px] justify-center"
    aria-label="Become a Partner"
  >
    <UserPlus size={24} />
    Become a Partner
  </a>
  <a
    href="/donate"
    className="flex items-center gap-3 border-2 border-lightBg text-lightBg font-semibold px-8 py-4 rounded-full shadow-md hover:bg-lightBg hover:text-primary transition min-w-[180px] justify-center"
    aria-label="Donate Now"
  >
    <Heart size={24} />
    Donate Now
  </a>
</div>


      <p className="mt-12 text-sm max-w-md mx-auto text-lightBg/80 italic">
        Trusted by over <strong>500+</strong> community partners worldwide.
      </p>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background: linear-gradient(270deg, var(--color-primary), var(--color-secondary), var(--color-accent));
          background-size: 600% 600%;
          animation: gradient-x 12s ease infinite;
        }
      `}</style>
    </section>
  );
}
