import { Layers, ShoppingCart, Store, Sparkles, Rocket, ShieldCheck } from "lucide-react";

const Solutions = () => {
  return (
    <section id="solutions" className="container py-20 md:py-28">
      <header className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Built for every ecommerce model</h2>
        <p className="mt-3 text-muted-foreground">Whether you're launching a D2C storefront, scaling a marketplace, or managing a global brand catalog—Brandbox adapts to you.</p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border bg-card p-6 shadow-sm">
          <Store className="mb-4 h-6 w-6 text-primary" />
          <h3 className="font-semibold">Online retail stores</h3>
          <p className="mt-2 text-sm text-muted-foreground">Elegant storefronts, fast checkout, inventory, and promotions—ready on day one.</p>
        </article>
        <article className="rounded-xl border bg-card p-6 shadow-sm">
          <Layers className="mb-4 h-6 w-6 text-primary" />
          <h3 className="font-semibold">Marketplaces</h3>
          <p className="mt-2 text-sm text-muted-foreground">Multi-vendor onboarding, commissions, split payouts, and moderation built‑in.</p>
        </article>
        <article className="rounded-xl border bg-card p-6 shadow-sm">
          <ShoppingCart className="mb-4 h-6 w-6 text-primary" />
          <h3 className="font-semibold">Product brands</h3>
          <p className="mt-2 text-sm text-muted-foreground">Centralize product data, syndicate to channels, and protect your brand presence.</p>
        </article>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: Sparkles, title: "Headless ready", desc: "Composable APIs and webhooks for any frontend." },
    { icon: Rocket, title: "Lightning checkout", desc: "Optimized UX, wallets, and one‑click repeat purchases." },
    { icon: ShieldCheck, title: "Enterprise‑grade", desc: "RLS security, audit logs, and fine‑grained permissions." },
    { icon: Layers, title: "Unified catalog", desc: "Variants, bundles, rich media, and localization." },
    { icon: ShoppingCart, title: "Order ops", desc: "Fulfillment, returns, taxes, and subscriptions." },
    { icon: Store, title: "Omnichannel", desc: "Sell on web, social, and marketplaces from one hub." },
  ];

  return (
    <section id="features" className="container py-20 md:py-28">
      <header className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Powerful features that scale</h2>
        <p className="mt-3 text-muted-foreground">Modern commerce infrastructure with clean APIs, intuitive dashboards, and deep analytics.</p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
            <Icon className="mb-4 h-6 w-6 text-primary" />
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export { Solutions, Features };
