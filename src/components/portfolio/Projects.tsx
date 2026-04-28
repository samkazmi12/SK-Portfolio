import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import flexfit from "@/assets/project-flexfit.png";
import marcvista from "@/assets/project-marcvista.png";
import furniture from "@/assets/project-furniture.png";
import restaurant from "@/assets/project-restaurant.jpg";

const projects = [
  {
    title: "Restaurant Management System",
    category: "SaaS Product · Dashboards",
    img: restaurant,
    tags: ["Multi-restaurant", "Inventory", "Orders", "Admin"],
    summary: "End-to-end multi-restaurant SaaS — inventory tracking, order management, and admin analytics.",
    span: "lg:col-span-7",
  },
  {
    title: "Premium Turkish Furniture",
    category: "eCommerce · UI/UX",
    img: furniture,
    tags: ["Luxury eCommerce", "Conversion"],
    summary: "Luxury eCommerce experience with a clean product display and conversion-focused architecture.",
    span: "lg:col-span-5",
  },
  {
    title: "FlexFit — AI Fitness Platform",
    category: "SaaS Landing · Product UI",
    img: flexfit,
    tags: ["AI fitness", "SaaS", "Marketing UI"],
    summary: "AI-powered fitness platform — marketing landing page meets product surface.",
    span: "lg:col-span-5",
  },
  {
    title: "MarcVista Website Redesign",
    category: "Concept · Brand Web",
    img: marcvista,
    tags: ["Redesign", "Modern UI", "UX flow"],
    summary: "Concept redesign with a modern UI upgrade and improved end-to-end UX flow.",
    span: "lg:col-span-7",
  },
];

export const Projects = () => {
  const [active, setActive] = useState<null | (typeof projects)[number]>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <section id="projects" className="relative py-28">
      <div className="container space-y-14">
        <SectionHeading
          kicker="Selected Work"
          title={
            <>The strongest part of the portfolio: <span className="text-gradient">systems designed</span> for real product complexity.</>
          }
        />

        <div className="grid lg:grid-cols-12 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              onClick={() => setActive(p)}
              className={`group relative overflow-hidden rounded-3xl glass ${p.span} cursor-pointer`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(p);
                    }}
                    className="glass rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 border-primary/60 hover:scale-105 transition-transform"
                  >
                    View Project <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">{p.category}</p>
                <h3 className="font-display text-2xl font-semibold leading-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.summary}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button variant="hero" size="lg">
            See All Projects <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-background/85 backdrop-blur-md animate-fade-up"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full glass hover:border-primary/60 hover:text-primary transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl glass p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden bg-card">
              <img
                src={active.img}
                alt={active.title}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="px-3 sm:px-4 py-5 space-y-2">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">{active.category}</p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold">{active.title}</h3>
              <p className="text-sm text-muted-foreground max-w-3xl">{active.summary}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {active.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
