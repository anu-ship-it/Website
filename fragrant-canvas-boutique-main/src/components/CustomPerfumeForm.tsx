import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  intensity: z.string().min(1, "Select intensity"),
  size: z.string().min(1, "Select size"),
  notes: z.array(z.string()).min(1, "Pick at least one scent family"),
  message: z.string().min(10, "Tell us about your dream scent (10+ chars)"),
});

type FormData = z.infer<typeof schema>;

const scentFamilies = [
  { id: "floral", label: "Floral" },
  { id: "amber", label: "Amber" },
  { id: "woody", label: "Woody" },
  { id: "citrus", label: "Citrus" },
  { id: "aquatic", label: "Aquatic" },
  { id: "gourmand", label: "Gourmand" },
];

const CustomPerfumeForm = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { notes: [] },
  });

  const notes = watch("notes");

  const onToggleNote = (id: string) => {
    const exists = notes?.includes(id);
    const next = exists ? notes.filter((n) => n !== id) : [...(notes || []), id];
    setValue("notes", next, { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    console.log("Custom perfume request:", data);
    toast({
      title: "Request received",
      description: "Our perfumers will reach out via email within 24–48 hours.",
    });
    reset({ notes: [] } as any);
  };

  return (
    <section id="custom" className="py-16 md:py-24 bg-accent/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl mb-3">Design Your Custom Perfume</h2>
          <p className="text-muted-foreground">Share your preferences and we’ll craft a signature scent that’s unmistakably you.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto grid gap-6 glass-card rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" placeholder="Jane Doe" {...register("name")} />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jane@mail.com" {...register("email")} />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="intensity">Preferred intensity</Label>
              <select id="intensity" className="w-full h-10 rounded-md border bg-background px-3" {...register("intensity")}>
                <option value="">Select</option>
                <option value="fresh">Fresh & light</option>
                <option value="balanced">Balanced</option>
                <option value="bold">Bold & long-lasting</option>
              </select>
              {errors.intensity && <p className="text-destructive text-sm mt-1">{errors.intensity.message}</p>}
            </div>
            <div>
              <Label htmlFor="size">Bottle size</Label>
              <select id="size" className="w-full h-10 rounded-md border bg-background px-3" {...register("size")}>
                <option value="">Select</option>
                <option value="30">30 ml</option>
                <option value="50">50 ml</option>
                <option value="100">100 ml</option>
              </select>
              {errors.size && <p className="text-destructive text-sm mt-1">{errors.size.message}</p>}
            </div>
          </div>

          <div>
            <Label>Scent families</Label>
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {scentFamilies.map((f) => {
                const active = notes?.includes(f.id);
                return (
                  <button
                    type="button"
                    key={f.id}
                    onClick={() => onToggleNote(f.id)}
                    className={`h-10 rounded-md border px-3 text-sm ${active ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-accent'}`}
                    aria-pressed={active}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
            {errors.notes && <p className="text-destructive text-sm mt-1">{errors.notes.message}</p>}
          </div>

          <div>
            <Label htmlFor="message">Describe your dream scent</Label>
            <Textarea id="message" rows={5} placeholder="Occasion, notes you love/hate, a memory, anything…" {...register("message")} />
            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
          </div>

          <div className="flex items-center justify-end">
            <Button type="submit" size="lg" variant="hero" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting…' : 'Send Request'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CustomPerfumeForm;
