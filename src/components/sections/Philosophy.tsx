import { PORTFOLIO_CONTENT } from "@/lib/data";

export function Philosophy() {
  const { headline, body } = PORTFOLIO_CONTENT.philosophy;

  return (
    <section className="py-20 border-y border-navy-accent/10">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <h2 className="text-3xl font-bold text-navy-text md:text-5xl md:w-1/3">
          {headline}
        </h2>
        <p className="text-lg leading-relaxed text-navy-muted md:text-xl md:w-2/3">
          {body}
        </p>
      </div>
    </section>
  );
}
