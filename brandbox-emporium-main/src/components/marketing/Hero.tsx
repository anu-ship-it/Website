import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import heroImg from "@/assets/hero-illustration.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--x", `${x}%`);
      el.style.setProperty("--y", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden border-b">
      {/* Ambient subtle gradient */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-subtle)" }} />
      {/* Signature spotlight following pointer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(300px_300px_at_var(--x,50%)_var(--y,30%),black,transparent_70%)]"
        style={{ background: "radial-gradient(600px 600px at var(--x,50%) var(--y,30%), hsl(var(--brand) / 0.18), transparent 60%)" }}
      />

      <div className="container relative flex flex-col items-center gap-8 py-20 text-center md:py-28">
        <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
          New • Unified commerce infrastructure
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
          E-Commerce platform for online stores, marketplaces, and brands
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-lg">
          Brandbox unifies catalog, orders, payments, and analytics—so you can launch faster, scale smarter, and optimize conversions across every channel.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button size="xl" variant="hero">Start free trial</Button>
          <Button size="lg" variant="outline">Talk to sales</Button>
        </div>

        <div className="relative mt-10 w-full max-w-4xl mx-auto overflow-hidden rounded-xl border bg-card/70 p-2 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/60">
          <AspectRatio ratio={16 / 9}>
            <img
              src={heroImg}
              alt="Brandbox commerce dashboards and product cards"
              loading="lazy"
              sizes="(min-width: 1024px) 896px, 100vw"
              className="h-full w-full rounded-lg object-cover hover-scale"
              decoding="async"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default Hero;
