"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X, Github, Download } from "lucide-react";
import { PORTFOLIO_CONTENT } from "@/lib/data";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        headerRef.current,
        { y: -24 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        },
      );
    },
    {
      scope: headerRef,
    },
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        ref={headerRef}
        style={{ opacity: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/85 backdrop-blur-md border-b border-edge"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-20">
          {/* Monogram */}
          <Link
            href="/"
            className="font-heading text-xl text-primary hover:text-signal transition-colors tracking-tight"
          ></Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-primary transition-colors tracking-[0.05em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden flex md:flex items-center gap-5">
            <Link
              href={PORTFOLIO_CONTENT.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </Link>
            <Link
              href="/I_Kadek_Buktiasa_Full_Stack_Developer.pdf"
              download
              className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors tracking-[0.05em]"
            >
              <Download size={13} />
              Resume
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-primary p-1.5"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-ink z-[100] md:hidden flex flex-col justify-center px-8"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <button
            className="absolute top-5 right-6 text-primary p-1.5"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <p className="text-dim text-xs tracking-[0.35em] uppercase mb-10">
            Navigation
          </p>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-[52px] leading-none text-primary hover:text-signal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="font-heading text-[52px] leading-none text-signal"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="absolute bottom-10 left-8 flex flex-col gap-3">
            <div className="flex items-center gap-5">
              <Link
                href={PORTFOLIO_CONTENT.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
                onClick={() => setIsOpen(false)}
              >
                <Github size={18} />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="text-sm text-muted hover:text-primary transition-colors tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </div>
            <p className="text-dim text-xs tracking-wide">
              Kadek Buktiasa · Bali, Indonesia
            </p>
          </div>
        </div>
      )}
    </>
  );
}
