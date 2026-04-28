import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/profile-about.png";
import { SectionHeading } from "./SectionHeading";

export const About = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[2rem] glass p-2 overflow-hidden">
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-40"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div
              className="rounded-[1.6rem] overflow-hidden"
              style={{ background: "linear-gradient(160deg, hsl(192 65% 9%), hsl(190 75% 7%))" }}
            >
              <img
                src={aboutImg}
                alt="Syed working on product design"
                className="w-full h-auto object-contain"
                loading="lazy"
                width={900}
                height={1100}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <SectionHeading kicker="About" title={
            <>A designer who blends <span className="text-gradient">visual polish</span> with structured product thinking.</>
          } />
          <p className="text-muted-foreground text-lg leading-relaxed">
            I focus on UI/UX paired with product thinking — combining visual design, system logic, and usability to ship real-world, scalable systems. My work goes beyond pretty screens into structured architecture and outcome-driven flows.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 pt-2">
            {[
              "Visual design with intent",
              "System logic & architecture",
              "Usability-first thinking",
              "Scalable design systems",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Button asChild variant="hero" size="lg">
              <a href="#contact">Start a project together <ArrowRight className="h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
