import { PORTFOLIO_CONTENT } from "@/lib/data";

export default function About() {
  const { headline, sub } = PORTFOLIO_CONTENT.about;
  return (
    <section id="about" className="py-20 border-b border-navy-accent/10">
      <div className="mb-10">
        <h2 className="mb-4 text-3xl font-bold text-navy-text md:text-5xl md:w-1/3">
          {headline}
        </h2>
        <p className="text-lg leading-relaxed text-navy-muted md:text-xl md:w-2/3">
          {sub}
        </p>
      </div>
    </section>
  );
}
