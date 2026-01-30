import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  projectLink: string;
  image: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  projectLink,
  image,
}: ProjectCardProps) {
  return (
    <Card className="group flex flex-col h-full overflow-hidden border-navy-accent/20 bg-navy-surface/50 transition-all hover:border-navy-accent hover:shadow-lg hover:shadow-navy-accent/10">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl font-bold text-navy-text group-hover:text-navy-accent transition-colors">
            {title}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col space-y-6">
        <p className="text-navy-muted leading-relaxed flex-1">{description}</p>
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="space-y-4">
          <Link
            href={projectLink}
            target="_blank"
            className="inline-flex items-center gap-2 text-navy-accent hover:underline"
          >
            View Project
            <ExternalLink className="h-4 w-4" />
          </Link>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-navy-main/50 px-2.5 py-1 text-xs font-medium text-navy-accent ring-1 ring-inset ring-navy-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
