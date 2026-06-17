"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PORTFOLIO_CONTENT } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Capabilities() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cap-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".cap-header", start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".cap-col").forEach((col, i) => {
        gsap.from(col, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: ".cap-grid", start: "top 75%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".cap-item").forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          x: -10,
          duration: 0.5,
          ease: "power2.out",
          delay: i * 0.04,
          scrollTrigger: { trigger: ".cap-grid", start: "top 72%" },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="px-6 md:px-12 lg:px-20 py-28 border-t border-edge"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="cap-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <p className="text-[10px] text-dim tracking-[0.35em] uppercase mb-4">
              What I Offer
            </p>
            <h2
              className="font-heading font-bold text-primary"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Built Around Outcomes.
            </h2>
          </div>
          <p className="text-muted text-sm max-w-xs leading-relaxed md:text-right">
            Every capability listed here is framed by what it creates not what
            it is.
          </p>
        </div>

        {/* Grid */}
        <div className="cap-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-edge">
          {PORTFOLIO_CONTENT.capabilities.map((cap, i) => (
            <div
              key={i}
              className="cap-col px-0 sm:px-8 first:pl-0 last:pr-0 py-10 sm:py-0"
            >
              <p className="text-[10px] text-signal tracking-[0.3em] uppercase mb-6">
                {cap.category}
              </p>
              <ul className="space-y-4">
                {cap.items.map((item, j) => (
                  <li key={j} className="cap-item flex items-start gap-3">
                    <span className="text-edge text-lg leading-none mt-0.5 flex-shrink-0">
                      —
                    </span>
                    <span className="text-muted text-sm leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stack footnote */}
        <div className="mt-16 pt-8 border-t border-edge">
          <p className="text-[10px] text-dim tracking-[0.3em] uppercase mb-4">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "Supabase",
              "REST API",
              "Git",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs text-dim border border-edge px-3 py-1.5 tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
