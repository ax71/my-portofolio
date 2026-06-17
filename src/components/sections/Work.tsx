"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PORTFOLIO_CONTENT } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".work-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".work-header", start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".work-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".work-image").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.06 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="work"
      className="px-6 md:px-12 lg:px-20 py-28 border-t border-edge"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="work-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <p className="text-[10px] text-dim tracking-[0.35em] uppercase mb-4">
              Selected Projects
            </p>
            <h2
              className="font-heading font-bold text-primary"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              What I&apos;ve Been Building.
            </h2>
          </div>
          <p className="text-muted text-sm max-w-xs leading-relaxed md:text-right">
            A collection of projects that reflect my curiosity, learning, and
            growth as a developer.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-0">
          {PORTFOLIO_CONTENT.projects.map((project, i) => (
            <div
              key={project.index}
              className="work-card group border-t border-edge py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center last:border-b"
            >
              {/* Image — alternates position */}
              <div
                className={`relative overflow-hidden aspect-video bg-surface ${
                  i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="work-image w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/0 transition-colors duration-500" />

                {/* Industry tag */}
                <div className="absolute top-4 left-4 bg-ink/80 backdrop-blur-sm px-3 py-1.5">
                  <span className="text-[10px] text-muted tracking-[0.2em] uppercase">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-between h-full ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div>
                  {/* Project number */}
                  <span className="font-heading text-[80px] font-black text-edge leading-none select-none">
                    {project.index}
                  </span>

                  <h3
                    className="font-heading font-bold text-primary mt-2 mb-6"
                    style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Problem */}
                  <div className="mb-5">
                    <p className="text-[10px] text-signal tracking-[0.3em] uppercase mb-2">
                      The Problem
                    </p>
                    <p className="text-muted text-base leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* What was built */}
                  <div className="mb-5">
                    <p className="text-[10px] text-dim tracking-[0.3em] uppercase mb-2">
                      What I Built
                    </p>
                    <p className="text-primary text-base leading-relaxed">
                      {project.what}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="mb-8 p-4 border border-signal/20 bg-signal/5">
                    <p className="text-[10px] text-signal tracking-[0.3em] uppercase mb-2">
                      The Outcome
                    </p>
                    <p className="text-primary text-base font-medium">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-dim border border-edge px-2.5 py-1 tracking-[0.1em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.available && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-signal hover:text-primary transition-colors tracking-wide"
                    >
                      View Project <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
