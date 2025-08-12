import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import p1 from "@/assets/product-01-velvet-orchid.jpg";
import p2 from "@/assets/product-02-amber-noir.jpg";
import p3 from "@/assets/product-03-citrus-muse.jpg";
import p4 from "@/assets/product-04-oud-reverie.jpg";
import p5 from "@/assets/product-05-rose-elegante.jpg";
import p6 from "@/assets/product-06-marine-santal.jpg";

const products = [
  { id: 1, name: "No. 01 — Velvet Orchid", notes: "Orchid • Vanilla • Musk", price: 168, image: p1, alt: "Essentia Lux Velvet Orchid perfume bottle" },
  { id: 2, name: "No. 02 — Amber Noir", notes: "Amber • Incense • Tonka", price: 182, image: p2, alt: "Essentia Lux Amber Noir perfume bottle" },
  { id: 3, name: "No. 03 — Citrus Muse", notes: "Bergamot • Neroli • Cedar", price: 154, image: p3, alt: "Essentia Lux Citrus Muse perfume bottle" },
  { id: 4, name: "No. 04 — Oud Reverie", notes: "Oud • Saffron • Leather", price: 210, image: p4, alt: "Essentia Lux Oud Reverie perfume bottle" },
  { id: 5, name: "No. 05 — Rose Élégante", notes: "Rose • Lychee • Musk", price: 176, image: p5, alt: "Essentia Lux Rose Élégante perfume bottle" },
  { id: 6, name: "No. 06 — Marine Santal", notes: "Sea Salt • Sandalwood • Lime", price: 162, image: p6, alt: "Essentia Lux Marine Santal perfume bottle" },
];

const ProductGrid = () => {
  return (
    <section id="bestsellers" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl mb-3">Bestsellers</h2>
          <p className="text-muted-foreground">Our most-loved fragrances, crafted with precision and rare ingredients.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.id} className="hover-scale overflow-hidden">
              <CardHeader className="p-0">
                <img src={p.image} alt={p.alt} loading="lazy" className="w-full aspect-square object-cover" />
              </CardHeader>
              <CardContent className="pt-4">
                <CardTitle className="text-lg">{p.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{p.notes}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <span className="font-medium">${p.price}</span>
                <Button size="sm" variant="premium">Add to bag</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
