"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PORTFOLIO_CONTENT } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".process-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".process-header", start: "top 80%" },
      });

      gsap.from(".process-line", {
        scaleX: 0,
        duration: 1.2,
        ease: "power2.out",
        transformOrigin: "left center",
        scrollTrigger: {
          trigger: ".process-steps",
          start: "top 70%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
        gsap.from(step, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power3.out",
          delay: i * 0.12,
          scrollTrigger: {
            trigger: ".process-steps",
            start: "top 72%",
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="process"
      className="px-6 md:px-12 lg:px-20 py-28 border-t border-edge"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="process-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <p className="text-[10px] text-dim tracking-[0.35em] uppercase mb-4">
              How I Work
            </p>
            <h2
              className="font-heading font-bold text-primary"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              I Think Before I Build.
            </h2>
          </div>
          <p className="text-muted text-sm max-w-xs leading-relaxed md:text-right">
            Most problems aren&apos;t solved by writing more code they&apos;re
            solved by asking better questions first.
          </p>
        </div>

        {/* Steps */}
        <div className="process-steps relative">
          {/* Connecting line — desktop only */}
          <div className="process-line hidden lg:block absolute top-8 left-[3.5rem] right-[3.5rem] h-px bg-edge" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-edge">
            {PORTFOLIO_CONTENT.process.map((item, i) => (
              <div
                key={i}
                className="process-step px-0 md:px-10 first:pl-0 last:pr-0 py-10 md:py-0"
              >
                {/* Step marker */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full border border-signal bg-ink relative z-10" />
                  <span className="text-[10px] text-dim tracking-[0.3em] uppercase">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-primary text-2xl mb-4">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-20 pt-10 border-t border-edge">
          <blockquote
            className="font-heading font-bold text-muted italic text-center"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
          >
            &ldquo;I&apos;m not trying to know everything. I&apos;m trying to
            learn something new every day.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
