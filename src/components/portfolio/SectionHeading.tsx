import { ReactNode } from "react";

interface Props {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export const SectionHeading = ({ kicker, title, description, align = "left" }: Props) => {
  return (
    <div className={`space-y-4 ${align === "center" ? "text-center mx-auto max-w-3xl" : ""}`}>
      {kicker && (
        <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">— {kicker}</p>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
};
