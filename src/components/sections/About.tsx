"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PORTFOLIO_CONTENT } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-photo", {
        opacity: 0,
        x: -40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-photo", start: "top 80%" },
      });

      gsap.from(".about-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: { trigger: ".about-eyebrow", start: "top 82%" },
      });

      gsap.from(".about-quote", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-quote", start: "top 82%" },
      });

      gsap.utils.toArray<HTMLElement>(".about-para").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".about-tag").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.95,
          duration: 0.4,
          ease: "power2.out",
          delay: i * 0.07,
          scrollTrigger: { trigger: ".about-tags", start: "top 88%" },
        });
      });
    },
    { scope: containerRef }
  );

  const { about } = PORTFOLIO_CONTENT;

  return (
    <section ref={containerRef} id="about" className="px-6 md:px-12 lg:px-20 py-28 border-t border-edge">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">

          {/* Left — Photo */}
          <div className="about-photo relative">
            <div className="relative aspect-[4/5] overflow-hidden max-w-[480px]">
              <Image
                src="/hero.png"
                alt="Kadek Buktiasa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>

            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full max-w-[480px] h-full border border-edge -z-10" />

            {/* Location badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-ink/90 backdrop-blur-sm border border-edge px-5 py-4">
                <p className="text-[10px] text-dim tracking-[0.3em] uppercase mb-1">Location</p>
                <p className="text-primary text-sm font-medium">Denpasar, Bali · Indonesia</p>
              </div>
            </div>
          </div>

          {/* Right — Story */}
          <div className="flex flex-col justify-center">
            <p className="about-eyebrow text-[10px] text-dim tracking-[0.35em] uppercase mb-6">
              About
            </p>

            <blockquote className="about-quote font-heading font-bold text-primary italic mb-10 leading-snug" style={{ fontSize: "clamp(22px, 2.8vw, 32px)" }}>
              &ldquo;{about.quote}&rdquo;
            </blockquote>

            <div className="space-y-5 mb-10">
              {about.story.map((para, i) => (
                <p key={i} className="about-para text-muted text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="about-tags flex flex-wrap gap-2">
              {about.tags.map((tag) => (
                <span
                  key={tag}
                  className="about-tag text-xs text-muted border border-edge px-3 py-1.5 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
