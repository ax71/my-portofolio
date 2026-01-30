import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-accent/10 bg-navy-main/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-navy-text"
        >
          Portfolio
        </Link>

        <nav className="hidden gap-6 md:flex"></nav>

        <Button
          variant="outline"
          size="sm"
          className="hidden border-navy-accent/50 md:inline-flex"
        >
          Contact Me
        </Button>
      </div>
    </header>
  );
}
