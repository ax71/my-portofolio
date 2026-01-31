"use client";

import { PORTFOLIO_CONTENT } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const { h1, sub, cta } = PORTFOLIO_CONTENT.hero;

  return (
    <section className="container mx-auto px-4 min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 gap-24 items-center py-20">
      <div className="space-y-8 order-2 lg:order-1">
        <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 text-4xl font-bold leading-tight tracking-tight text-navy-text md:text-6xl lg:leading-[1.1]">
          {h1}
        </h1>

        <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 text-lg text-navy-muted md:text-xl leading-relaxed max-w-lg">
          {sub}
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button
            size="lg"
            className="group bg-navy-accent text-white hover:bg-navy-accent/80"
          >
            <Link href="#projects">{cta}</Link>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      <div className="relative flex justify-center items-center order-1 lg:order-2">
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
          <Image
            src="/hero.png"
            alt="Hero Portrait"
            fill
            className="object-cover animate-in fade-in zoom-in duration-1000 delay-500 drop-shadow-2xl rounded-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
