import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-essentia-lux.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setSpotlight({ x, y });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Luxury perfume bottle on marble with violet-gold glow"
          className="w-full h-[70vh] object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-background/10" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${spotlight.x}% ${spotlight.y}%, hsl(var(--brand) / 0.18), transparent 45%)`,
          }}
        />
      </div>

      <div className="container relative py-24 md:py-32 h-[70vh] flex items-center">
        <div className="max-w-2xl animate-enter">
          <p className="uppercase tracking-widest text-sm text-muted-foreground mb-2">Essentia Lux</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-4">
            Premium Perfumes Online — Crafted for the Connoisseur
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            Discover a curation of luxury fragrances made with rare notes. Or design a custom perfume tailored uniquely to you.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#bestsellers">
              <Button size="lg" variant="hero">Shop Bestsellers</Button>
            </a>
            <a href="#custom">
              <Button size="lg" variant="premium">Create Your Scent</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
