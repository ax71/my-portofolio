import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Philosophy } from "@/components/sections/Philosophy";
import { Projects } from "@/components/sections/Projects";
import GithubActivity from "@/components/sections/GithubActivity";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <TechStack />
      <GithubActivity />
      <Projects />
      <Philosophy />
      <footer className="py-10 text-center text-sm text-navy-muted border-t border-navy-accent/10 mt-10">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. Built with Next.js &
          Tailwind.
        </p>
      </footer>
    </div>
  );
}
