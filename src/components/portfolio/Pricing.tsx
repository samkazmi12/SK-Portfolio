import { Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const plans = [
  {
    label: "Hourly",
    price: "$25",
    unit: "/ hour",
    desc: "Flexible engagement for focused design tasks and consultations.",
    features: ["Design audits", "Quick UI fixes", "Async collaboration", "Figma handoff"],
    highlight: false,
  },
  {
    label: "Monthly Retainer",
    price: "$1,800",
    unit: "/ month",
    desc: "Dedicated product design partnership for shipping continuously.",
    features: ["Dashboards & SaaS UI", "Design system upkeep", "Weekly strategy syncs", "Priority delivery", "Unlimited revisions"],
    highlight: true,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="relative py-28">
      <div className="container space-y-14">
        <SectionHeading
          align="center"
          kicker="Pricing"
          title={<>Simple <span className="text-gradient">pricing</span> for serious work.</>}
          description="Engage hourly for focused tasks or go monthly for a dedicated design partnership."
        />

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.label}
              className={`relative glass rounded-3xl p-8 transition-transform hover:-translate-y-1 ${
                p.highlight ? "border-primary/60 shadow-[var(--shadow-glow)]" : ""
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
                  Most Popular
                </div>
              )}
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">{p.label}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold">{p.price}</span>
                <span className="text-muted-foreground">{p.unit}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3">{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={p.highlight ? "hero" : "outline"}
                size="lg"
                className="w-full mt-8"
              >
                <a href="#contact">Get Started <ArrowUpRight className="h-4 w-4" /></a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
