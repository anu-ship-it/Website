import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="text-gradient-primary">Brandbox</span>
        </a>

        <ul className="hidden gap-6 text-sm text-muted-foreground md:flex">
          <li><a className="hover:text-foreground story-link" href="#solutions">Solutions</a></li>
          <li><a className="hover:text-foreground story-link" href="#features">Features</a></li>
          <li><a className="hover:text-foreground story-link" href="#pricing">Pricing</a></li>
          <li><a className="hover:text-foreground story-link" href="#about">About</a></li>
        </ul>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:inline-flex">Sign in</Button>
          <Button variant="hero" size="sm">Get a demo</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
