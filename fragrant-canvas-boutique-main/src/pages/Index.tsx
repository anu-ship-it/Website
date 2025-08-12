import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CustomPerfumeForm from "@/components/CustomPerfumeForm";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  useEffect(() => {
    document.title = "Essentia Lux — Premium Perfumes Online";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Shop luxury perfumes at Essentia Lux or design a custom perfume crafted by expert perfumers.");

    // Structured data for site
    const siteScript = document.createElement("script");
    siteScript.type = "application/ld+json";
    siteScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Essentia Lux",
      url: "/",
      potentialAction: { "@type": "SearchAction", target: "/?q={search_term_string}", "query-input": "required name=search_term_string" },
    });
    document.head.appendChild(siteScript);

    // Structured data for product list
    const productScript = document.createElement("script");
    productScript.type = "application/ld+json";
    productScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [
        {"@type":"ListItem","position":1,"name":"No. 01 — Velvet Orchid","url":"/#bestsellers"},
        {"@type":"ListItem","position":2,"name":"No. 02 — Amber Noir","url":"/#bestsellers"},
        {"@type":"ListItem","position":3,"name":"No. 03 — Citrus Muse","url":"/#bestsellers"},
        {"@type":"ListItem","position":4,"name":"No. 04 — Oud Reverie","url":"/#bestsellers"},
        {"@type":"ListItem","position":5,"name":"No. 05 — Rose Élégante","url":"/#bestsellers"},
        {"@type":"ListItem","position":6,"name":"No. 06 — Marine Santal","url":"/#bestsellers"}
      ]
    });
    document.head.appendChild(productScript);

    return () => { 
      document.head.removeChild(siteScript);
      document.head.removeChild(productScript);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />

        <section id="craft" className="py-14">
          <div className="container grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border p-6 hover-scale">
              <h3 className="font-display text-xl mb-2">Rare Ingredients</h3>
              <p className="text-muted-foreground">We source sustainable, rare absolutes and essential oils from artisanal growers.</p>
            </div>
            <div className="rounded-lg border p-6 hover-scale">
              <h3 className="font-display text-xl mb-2">Small-Batch Quality</h3>
              <p className="text-muted-foreground">Each blend is crafted in limited batches for consistent, superior quality.</p>
            </div>
            <div className="rounded-lg border p-6 hover-scale">
              <h3 className="font-display text-xl mb-2">Cruelty-Free</h3>
              <p className="text-muted-foreground">Our fragrances are never tested on animals and are IFRA compliant.</p>
            </div>
          </div>
        </section>

        <ProductGrid />
        <CustomPerfumeForm />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
