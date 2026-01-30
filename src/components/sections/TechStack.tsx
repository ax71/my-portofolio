import { PORTFOLIO_CONTENT } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function TechStack() {
  return (
    <section className="py-20">
      <div className="grid gap-6 md:grid-cols-2">
        {PORTFOLIO_CONTENT.techStack.map((tech, index) => (
          <Card
            key={index}
            className="border-navy-accent/20 bg-navy-surface/50 transition-colors hover:border-navy-accent/50"
          >
            <CardHeader>
              <div className="mb-4 inline-flex w-fit items-center rounded-full bg-navy-accent/10 px-3 py-1 text-sm font-medium text-navy-accent ring-1 ring-inset ring-navy-accent/20">
                {tech.badge}
              </div>
              <CardTitle className="text-2xl leading-snug">
                {tech.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-navy-muted leading-relaxed">
                {tech.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
