const items = ["UI Design", "UX Strategy", "Dashboards", "SaaS Products", "Design Systems", "Wireframing", "Prototyping", "Product Thinking"];
export const Marquee = () => {
  return (
    <div className="border-y border-border py-6 overflow-hidden bg-secondary/40">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="font-display text-2xl sm:text-3xl text-muted-foreground flex items-center gap-12">
            {it}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
