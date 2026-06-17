"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PORTFOLIO_CONTENT } from "@/lib/data";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { hero } = PORTFOLIO_CONTENT;

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.6, delay: 0.2 })
        .from(
          ".hero-line",
          { y: 100, opacity: 0, stagger: 0.1, duration: 1 },
          "-=0.3",
        )
        .from(".hero-location", { opacity: 0, y: 30, duration: 0.7 }, "-=0.5")
        .from(
          ".hero-divider",
          { scaleX: 0, duration: 0.7, transformOrigin: "left center" },
          "-=0.5",
        )
        .from(".hero-sub", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { opacity: 0, y: 16, duration: 0.5 }, "-=0.4")
        .from(
          ".hero-photo",
          { opacity: 0, x: 50, duration: 1.2, ease: "power2.out" },
          0.4,
        )
        .from(
          ".hero-photo-badge",
          { opacity: 0, y: 16, duration: 0.5 },
          "-=0.3",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20 pb-16 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">
          {/* Left column — Text */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <p className="hero-eyebrow text-xs text-dim tracking-[0.35em] uppercase mb-6">
              Portfolio {new Date().getFullYear()}.
            </p>

            {/* Headline */}
            <h1 className="font-heading font-black leading-[0.88] tracking-tight mb-4">
              {hero.tagline.map((line, i) => (
                <span
                  key={i}
                  className="hero-line block overflow-hidden"
                  style={{ fontSize: "clamp(56px, 9vw, 118px)" }}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Location — dimmer, smaller */}
            <h2
              className="hero-location font-heading font-bold text-muted leading-none tracking-tight mb-8"
              style={{ fontSize: "clamp(28px, 4.5vw, 60px)" }}
            >
              {hero.location}
            </h2>

            {/* Divider */}
            <div className="hero-divider h-px bg-edge mb-8 w-full max-w-md" />

            {/* Subtext */}
            <p className="hero-sub text-muted text-lg md:text-xl leading-relaxed max-w-[420px] mb-10">
              {hero.sub}
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-wrap items-center gap-5">
              <Link
                href="#work"
                className="inline-flex items-center gap-2.5 bg-signal text-ink text-sm font-medium px-6 py-3 hover:bg-signal/80 transition-colors tracking-[0.04em]"
              >
                {hero.cta}
                <ArrowDown size={14} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm px-6 py-3 border border-signal text-signal hover:bg-signal hover:text-ink transition-all duration-200 tracking-[0.05em]"
              >
                {hero.ctaSecondary} →
              </Link>
            </div>
          </div>

          {/* Right column — Photo */}
          <div className="hero-photo relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px] lg:w-[380px] lg:h-[480px] overflow-hidden">
              <Image
                src="/hero.png"
                alt="Kadek Buktiasa"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="hero-photo-badge absolute -bottom-4 left-0 lg:left-auto lg:-left-6 bg-surface border border-edge px-4 py-3">
              <p className="text-sm text-primary font-medium">{hero.role}</p>
              <p className="text-sm text-dim tracking-[0.25em] uppercase mb-0.5">
                {" "}
                {hero.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-cta absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden lg:flex">
        <span className="text-[10px] text-dim tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-edge to-transparent" />
      </div>
    </section>
  );
}
