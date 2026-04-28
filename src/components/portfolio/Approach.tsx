import { Sparkles, Layout, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const Approach = () => {
  return (
    <section id="approach" className="relative py-28">
      <div className="container space-y-14">
        <SectionHeading
          kicker="Design Approach"
          title={
            <>How I keep design <span className="text-gradient">balanced</span>, scalable, and grounded in real practice.</>
          }
        />

        <div className="grid md:grid-cols-2 gap-5">
          <div className="glass rounded-3xl p-8 relative overflow-hidden">
            <div
              className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl opacity-30"
              style={{ background: "var(--gradient-primary)" }}
            />
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">UI/UX Designer</p>
            <h3 className="font-display text-2xl font-semibold mb-4 leading-tight">
              Real-world interface work that keeps improving through active practice.
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3"><Sparkles className="h-4 w-4 text-primary mt-1 shrink-0" /> Design solutions based on real problems</li>
              <li className="flex items-start gap-3"><Layout className="h-4 w-4 text-primary mt-1 shrink-0" /> Build systems, not just screens</li>
              <li className="flex items-start gap-3"><Wrench className="h-4 w-4 text-primary mt-1 shrink-0" /> Focus on scalability and usability</li>
            </ul>
          </div>

          <div className="glass rounded-3xl p-8 relative overflow-hidden">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Principles</p>
            <h3 className="font-display text-2xl font-semibold mb-6 leading-tight">
              How the experience stays balanced after removing the noise.
            </h3>
            <div className="space-y-4">
              {[
                { k: "Clarity", v: "Structure makes design readable" },
                { k: "Balance", v: "Clean layout hierarchy" },
                { k: "Usability", v: "Practical and functional design" },
              ].map((row) => (
                <div key={row.k} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <span className="font-display font-semibold">{row.k}</span>
                  <span className="text-sm text-muted-foreground text-right max-w-xs">{row.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
