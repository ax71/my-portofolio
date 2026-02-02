"use client";

import { PORTFOLIO_CONTENT } from "@/lib/data";
import { ProjectCard } from "@/components/ui/project-card";

export function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-navy-accent/10">
      <div className="mb-10">
        <h2 className="mb-4 text-3xl font-bold text-navy-text md:text-5xl md:w-1/3">
          Projects Developed
        </h2>
        <p className="text-lg leading-relaxed text-navy-muted md:text-xl md:w-2/3">
          Berikut adalah beberapa proyek yang telah saya kembangkan :
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO_CONTENT.projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            projectLink={project.projectLink}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
