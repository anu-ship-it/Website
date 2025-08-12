import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  return (
    <header className="w-full sticky top-0 z-40 bg-background/70 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight">Essentia Lux</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#bestsellers" className="story-link">Bestsellers</a>
          <a href="#craft" className="story-link">Our Craft</a>
          <a href="#custom" className="story-link">Custom Scent</a>
          <a href="#contact" className="story-link">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="premium" className="hidden sm:inline-flex">Shop Now</Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
