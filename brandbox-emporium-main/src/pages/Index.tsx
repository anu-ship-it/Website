import { useEffect } from "react";
import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import { Solutions, Features } from "@/components/marketing/Features";
import CTA from "@/components/marketing/CTA";
import Footer from "@/components/marketing/Footer";

const Index = () => {
  // SEO: per‑route title/description/canonical
  useEffect(() => {
    const title = "E-Commerce Platform for Stores, Marketplaces & Brands";
    const desc = "All-in-one E-Commerce platform for online stores, marketplaces, and product brands. Launch faster, scale smarter, optimize conversions.";
    document.title = title;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', desc);
    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) {
      canon = document.createElement('link');
      canon.setAttribute('rel', 'canonical');
      document.head.appendChild(canon);
    }
    canon!.setAttribute('href', window.location.origin + window.location.pathname);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Brandbox Emporium",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "All-in-one E-Commerce platform for online stores, marketplaces, and product brands.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Features />
        <CTA />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default Index;
