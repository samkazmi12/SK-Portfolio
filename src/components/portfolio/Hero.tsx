import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  MapPin,
  Sparkles,
  Star,
  Users,
  Brain,
  CalendarClock,
} from "lucide-react";
import profileImg from "@/assets/profile-hero.png";

const ROLES = ["UI/UX Designer", "Product Thinker", "SaaS Designer", "Dashboard Specialist"];

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");

  // Cursor-driven background glow + parallax
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
      if (imgRef.current) {
        const dx = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const dy = (e.clientY - rect.top - rect.height / 2) / rect.height;
        imgRef.current.style.transform = `translate3d(${dx * 14}px, ${dy * 14}px, 0)`;
      }
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  // Typewriter rotating role
  useEffect(() => {
    const target = ROLES[roleIdx];
    let i = 0;
    setTyped("");
    const typer = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) clearInterval(typer);
    }, 60);
    const next = setTimeout(() => setRoleIdx((p) => (p + 1) % ROLES.length), 2800);
    return () => {
      clearInterval(typer);
      clearTimeout(next);
    };
  }, [roleIdx]);

  const stats = useMemo(
    () => [
      { icon: Star, value: "5.0", label: "Client rating" },
      { icon: Users, value: "60+", label: "Projects" },
      { icon: Brain, value: "UI Logic", label: "Product thinking" },
      { icon: CalendarClock, value: "Sep 2023", label: "Experience start" },
    ],
    []
  );

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden"
      style={{ backgroundImage: "var(--gradient-radial-glow)" }}
    >
      {/* Decorative layers */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute inset-0 noise opacity-[0.04] pointer-events-none mix-blend-overlay" />
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-20"
        style={{ background: "hsl(var(--primary-glow))" }}
      />

      <div className="container relative grid lg:grid-cols-12 gap-12 items-center">
        {/* Left content */}
        <div className="lg:col-span-7 space-y-7">
          <div
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Pakistan
            </span>
          </div>

          <p
            className="text-sm tracking-[0.3em] text-primary font-semibold uppercase animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            — Digital Product Designer
          </p>

          <h1
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Hi, I'm <span className="text-gradient">Syed Ali Muzahir</span>
            <br />
            <span className="text-foreground/90">a </span>
            <span className="relative inline-block">
              <span className="text-gradient">{typed}</span>
              <span className="inline-block w-[3px] h-[0.9em] align-middle bg-primary ml-1 animate-blink" />
            </span>
          </h1>

          <p
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            UI/UX Designer crafting user-centric digital products with structured product thinking — combining clean design with functional logic for usability and performance.
          </p>

          <div
            className="flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            <Button asChild variant="hero" size="xl">
              <a href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#contact">
                <Mail className="h-4 w-4" /> Let's talk
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 animate-fade-up"
            style={{ animationDelay: "460ms" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-4 hover:border-primary/60 transition-colors group"
              >
                <s.icon className="h-4 w-4 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-display font-semibold text-lg leading-tight">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div
          className="lg:col-span-5 relative animate-fade-up"
          style={{ animationDelay: "560ms" }}
        >
          <div ref={imgRef} className="relative transition-transform duration-300 ease-out">
            {/* Glow ring */}
            <div
              className="absolute inset-0 -z-10 rounded-[2rem] blur-2xl opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative rounded-[2rem] overflow-hidden glass p-2">
              <div
                className="relative rounded-[1.6rem] overflow-hidden"
                style={{ background: "linear-gradient(160deg, hsl(192 65% 9%), hsl(190 75% 7%))" }}
              >
                <img
                  src={profileImg}
                  alt="Syed Ali Muzahir, UI/UX Designer"
                  className="w-full h-auto object-contain object-bottom"
                  loading="eager"
                  width={900}
                  height={1200}
                />
                {/* Top label */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="glass rounded-full px-3 py-1.5 text-[10px] font-semibold tracking-widest text-primary uppercase flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3" /> Available for freelance
                  </div>
                </div>
                {/* Bottom tags */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  <span className="glass rounded-full px-3 py-1.5 text-xs">Premium dashboards</span>
                  <span className="glass rounded-full px-3 py-1.5 text-xs">Design + logic</span>
                </div>
              </div>
            </div>

            {/* Floating chip */}
            <div className="absolute -left-6 top-12 glass rounded-2xl px-4 py-3 animate-float shadow-[var(--shadow-card)] hidden sm:block">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary fill-primary" />
                <div>
                  <div className="text-sm font-semibold leading-none">5.0 Rating</div>
                  <div className="text-[11px] text-muted-foreground mt-1">From clients</div>
                </div>
              </div>
            </div>
            <div
              className="absolute -right-4 bottom-16 glass rounded-2xl px-4 py-3 animate-float shadow-[var(--shadow-card)] hidden sm:block"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-sm font-semibold leading-none">60+ Projects</div>
                  <div className="text-[11px] text-muted-foreground mt-1">Shipped</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-2 text-xs text-muted-foreground group"
        aria-label="Scroll down"
      >
        <span className="tracking-widest uppercase">Scroll</span>
        <span className="grid place-items-center h-9 w-9 rounded-full border border-border group-hover:border-primary group-hover:text-primary transition-colors">
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </span>
      </a>
    </section>
  );
};
