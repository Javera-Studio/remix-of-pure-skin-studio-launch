import { createFileRoute } from "@tanstack/react-router";
import { BookingCta } from "@/components/BookingCta";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise — Pure Skin Studio Wien" },
      { name: "description", content: "Transparente Preisliste für Gesichtsbehandlungen, Hydrafacial, Wimpernlifting und Augenbrauenstyling im Pure Skin Studio Wien." },
      { property: "og:title", content: "Preise — Pure Skin Studio Wien" },
      { property: "og:description", content: "Klare Preise, ehrliche Empfehlungen — Pure Skin Studio Wien." },
    ],
  }),
  component: PreisePage,
});

const prices = [
  { name: "Gesichtsbehandlung", desc: "Reinigung · Peeling · Massage · Maske", price: 70, duration: "75 Min." },
  { name: "Hydrafacial", desc: "Tiefenreinigung · Hydration · Glow", price: 120, duration: "60 Min." },
  { name: "Wimpernlifting", desc: "Inkl. Färbung", price: 60, duration: "60 Min." },
  { name: "Augenbrauen Styling", desc: "Form · Färbung · Pflege", price: 25, duration: "30 Min." },
];

function PreisePage() {
  return (
    <>
      <section className="container-prose pb-16 pt-20 md:pt-28">
        <p className="eyebrow">Preisliste</p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl text-foreground md:text-6xl">
          Transparent. Fair. Ohne Überraschungen.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Alle Preise inkl. USt. Wir beraten dich vor jeder Behandlung individuell.
        </p>
      </section>

      <section className="container-prose pb-32">
        <ul className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {prices.map((p) => (
            <li key={p.name} className="flex flex-col gap-3 py-8 sm:flex-row sm:items-baseline sm:gap-8">
              <div className="flex-1">
                <h3 className="font-serif text-2xl text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
              <div className="hidden flex-1 items-baseline sm:flex">
                <span className="block w-full border-b border-dotted border-border" />
              </div>
              <div className="flex items-baseline gap-6">
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{p.duration}</span>
                <span className="font-serif text-3xl text-foreground">{p.price}€</span>
              </div>
            </li>
          ))}
        </ul>

        <BookingCta />
      </section>
    </>
  );
}