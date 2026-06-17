"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PORTFOLIO_CONTENT } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ImpactNumbers() {
  const containerRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState([0, 0, 0]);

  useGSAP(
    () => {
      const targets = PORTFOLIO_CONTENT.impact.map((item) => ({
        value: 0,
        target: item.value,
      }));

      gsap.to(targets, {
        value: (i: number) => targets[i].target,
        duration: 1.8,
        ease: "power2.out",
        stagger: 0.15,
        onUpdate: function () {
          setCounts(targets.map((t) => Math.round(t.value)));
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".impact-card", {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".impact-label", {
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="px-6 md:px-12 lg:px-20 py-24 border-t border-edge"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-edge">
          {PORTFOLIO_CONTENT.impact.map((item, i) => (
            <div
              key={i}
              className="impact-card px-0 md:px-12 first:pl-0 last:pr-0 py-10 md:py-0"
            >
              <div
                className="font-heading font-black text-primary leading-none mb-3"
                style={{ fontSize: "clamp(52px, 6vw, 80px)" }}
              >
                {counts[i]}
                <span className="text-signal">{item.suffix}</span>
              </div>
              <p className="impact-label text-sm text-primary tracking-wide mb-1">
                {item.label}
              </p>
              <p className="text-xs text-dim tracking-wide">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="impact-label mt-12 pt-8 border-t border-edge flex flex-wrap gap-3 items-center">
          <span className="text-[10px] text-dim tracking-[0.3em] uppercase mr-2">
            What I Like Building
          </span>
          {PORTFOLIO_CONTENT.whatIBuild.map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted px-3 py-1.5 border border-edge tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
