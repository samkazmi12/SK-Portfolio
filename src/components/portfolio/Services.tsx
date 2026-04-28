import { Layers, LayoutDashboard, Workflow, Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Layers,
    title: "UI/UX Design",
    points: ["Interfaces", "Wireframes", "User flows", "Accessibility"],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Systems",
    points: ["Data-driven interfaces", "Complex UI systems", "Admin dashboards", "Analytics UI"],
    highlight: true,
  },
  {
    icon: Workflow,
    title: "Product Structure",
    points: ["Logic building", "System architecture", "UX strategy", "Scalable design"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-28">
      <div className="container space-y-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            kicker="Expertise"
            title={
              <>A balanced mix of <span className="text-gradient">product design</span>, dashboards, and implementation awareness.</>
            }
          />
          <Button variant="glass" size="lg" asChild>
            <a href="#contact">
              <Download className="h-4 w-4" /> Download CV
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className={`group relative glass rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 ${
                s.highlight ? "border-primary/50 shadow-[var(--shadow-glow)]" : "hover:border-primary/40"
              }`}
            >
              {s.highlight && (
                <span className="absolute top-5 right-5 text-[10px] tracking-widest uppercase text-primary font-semibold">
                  Highlight
                </span>
              )}
              <div
                className="grid h-12 w-12 place-items-center rounded-2xl mb-6 transition-transform group-hover:scale-110"
                style={{ background: "var(--gradient-primary)" }}
              >
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">{s.title}</h3>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {p}
                  </li>
                ))}
              </ul>
              <ArrowUpRight className="absolute bottom-6 right-6 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
