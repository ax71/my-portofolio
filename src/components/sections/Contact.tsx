"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PORTFOLIO_CONTENT } from "@/lib/data";
import { Copy, Check, Github, Linkedin, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useGSAP(
    () => {
      gsap.from(".contact-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: { trigger: ".contact-eyebrow", start: "top 85%" },
      });

      gsap.from(".contact-headline", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-headline", start: "top 85%" },
      });

      gsap.from(".contact-body", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".contact-body", start: "top 88%" },
      });
    },
    { scope: containerRef },
  );

  const { contact } = PORTFOLIO_CONTENT;

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="px-6 md:px-12 lg:px-20 py-28 border-t border-edge"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Main CTA area */}
        <div className="mb-20">
          <p className="contact-eyebrow text-[10px] text-dim tracking-[0.35em] uppercase mb-6">
            {contact.headline}
          </p>

          <h2
            className="contact-headline font-heading font-black text-primary leading-none tracking-tight"
            style={{ fontSize: "clamp(64px, 10vw, 140px)" }}
          >
            {contact.cta}
          </h2>
        </div>

        {/* Divider */}
        <div className="contact-body h-px bg-edge mb-16" />

        {/* Contact details */}
        <div className="contact-body grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x divide-edge">
          {/* Email */}
          <div className="md:pr-12">
            <p className="text-[10px] text-dim tracking-[0.3em] uppercase mb-4">
              Email
            </p>
            <button
              onClick={copyEmail}
              className="group flex items-center gap-3 text-primary hover:text-signal transition-colors"
            >
              <span className="text-sm md:text-base tracking-wide">
                {contact.email}
              </span>
              <span className="text-dim group-hover:text-signal transition-colors">
                {copied ? (
                  <Check size={14} className="text-signal" />
                ) : (
                  <Copy size={14} />
                )}
              </span>
            </button>
            {copied && (
              <p className="text-[10px] text-signal tracking-wide mt-2">
                Copied to clipboard
              </p>
            )}
          </div>

          {/* WhatsApp */}
          <div className="md:px-12">
            <p className="text-[10px] text-dim tracking-[0.3em] uppercase mb-4">
              WhatsApp
            </p>
            <Link
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-signal transition-colors tracking-wide"
            >
              +62 851 9065 7236 <ArrowUpRight size={12} />
            </Link>
          </div>

          {/* Location & Availability */}
          <div className="md:pl-12">
            <p className="text-[10px] text-dim tracking-[0.3em] uppercase mb-4">
              Location
            </p>
            <p className="text-sm text-primary mb-1">{contact.location}</p>
            <p className="text-xs text-muted">{contact.availability}</p>
          </div>
        </div>

        {/* Social links + footer */}
        <div className="contact-body mt-16 pt-8 border-t border-edge flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[10px] text-dim tracking-[0.3em] uppercase">
              Find me
            </p>
            <Link
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </Link>
            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
          </div>

          <p className="text-xs text-dim">
            © {new Date().getFullYear()} | I Kadek Buktiasa | Learning,
            Building, Improving
          </p>
        </div>
      </div>
    </section>
  );
}
