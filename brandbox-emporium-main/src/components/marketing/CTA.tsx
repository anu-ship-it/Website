import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="pricing" className="relative border-t">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-subtle)" }} />
      <div className="container py-16 md:py-24">
        <div className="rounded-2xl border bg-card p-8 text-center shadow-sm md:p-12">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Start in minutes. Scale to millions.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Flexible pricing for startups to enterprises. Try Brandbox free for 14 days—no credit card required.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button variant="hero" size="lg">Start free trial</Button>
            <Button variant="outline" size="lg">Compare plans</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
