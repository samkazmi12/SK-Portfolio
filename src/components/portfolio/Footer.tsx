export const Footer = () => {
  return (
    <footer className="border-t border-border py-10 mt-12">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground text-xs font-bold">SK</span>
          <span>© {new Date().getFullYear()} Syed Ali Muzahir — Crafted with structure & care.</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
