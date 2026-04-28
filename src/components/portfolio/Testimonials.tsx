import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    name: "Ahmed R.",
    role: "Founder, Restaurant SaaS",
    text: "Syed turned a tangled multi-restaurant workflow into a clean, scalable system. Structured product thinking from day one.",
    rating: 5,
  },
  {
    name: "Maria L.",
    role: "Marketing Lead, Furniture Brand",
    text: "Our luxury catalog finally feels luxurious. Conversion patterns are clearly thought through — not just pretty visuals.",
    rating: 5,
  },
  {
    name: "Daniel K.",
    role: "Co-founder, FlexFit",
    text: "Reliable, sharp, and great at translating complex product logic into a UI users actually understand.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = items[i];
  return (
    <section id="testimonials" className="relative py-28">
      <div className="container space-y-12">
        <SectionHeading
          align="center"
          kicker="Testimonials"
          title={<>Feedback that reflects <span className="text-gradient">design clarity</span> and product thinking.</>}
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-10 text-center relative overflow-hidden">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/30" />
            <Quote className="absolute bottom-6 right-6 h-8 w-8 text-primary/30 rotate-180" />
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} className="h-5 w-5 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-xl leading-relaxed mb-6">"{t.text}"</p>
            <div className="font-display font-semibold">{t.name}</div>
            <div className="text-sm text-muted-foreground">{t.role}</div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setI((p) => (p - 1 + items.length) % items.length)}
              className="h-10 w-10 grid place-items-center rounded-full glass hover:border-primary/60 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-2 bg-border"}`}
                  aria-label={`Go to ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((p) => (p + 1) % items.length)}
              className="h-10 w-10 grid place-items-center rounded-full glass hover:border-primary/60 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
