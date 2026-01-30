"use client";

import { PORTFOLIO_CONTENT } from "@/lib/data";
import { ProjectCard } from "@/components/ui/project-card";
import { forwardRef } from "react";

export function Projects() {
  return (
    <section className="py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-navy-text mb-4">
          Selected Projects
        </h2>
        <p className="text-navy-muted max-w-xl">
          Bukti nyata dari dedikasi saya dalam membangun solusi digital yang
          berdampak.
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
