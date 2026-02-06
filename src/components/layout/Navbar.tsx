"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-accent/10 bg-navy-main/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-navy-text"
        >
          Buktiasa
          <p className="text-xs font-normal text-navy-accent">Portfolio</p>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden gap-6 md:flex">
          <Link href="#about">About</Link>
          <Link href="#tech">Tech Stack</Link>
          <Link href="#philosophy">Philosophy</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#certificate">Certificate</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden border-navy-accent/50 md:inline-flex"
          >
            <Link href="https://wa.me/6285190657236">Contact Me</Link>
          </Button>

          <button
            className="md:hidden text-navy-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-b border-navy-accent/10 bg-navy-main px-4 pb-4">
          <Link href="#about" className="block py-2">
            About
          </Link>
          <Link href="#tech" className="block py-2">
            Tech Stack
          </Link>
          <Link href="#philosophy" className="block py-2">
            Philosophy
          </Link>
          <Link href="#projects" className="block py-2">
            Projects
          </Link>
          <Link href="#certificate" className="block py-2">
            Certificate
          </Link>
        </div>
      )}
    </header>
  );
}
