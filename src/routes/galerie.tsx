import { createFileRoute } from "@tanstack/react-router";
import { BookingCta } from "@/components/BookingCta";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Pure Skin Studio Wien" },
      { name: "description", content: "Einblicke in das Pure Skin Studio Wien — Atmosphäre, Behandlungen und Pflegeprodukte." },
      { property: "og:title", content: "Galerie — Pure Skin Studio Wien" },
      { property: "og:description", content: "Einblicke in das Pure Skin Studio Wien." },
      { property: "og:image", content: g2 },
    ],
  }),
  component: GaleriePage,
});

// 4 columns × 3 rows = 12 tiles. Spans below sum to exactly 12 cells
// so the grid forms a clean rectangular frame on md+ screens.
const grid = [
  { src: g7, span: "md:col-span-2 md:row-span-2", h: 1280 }, // 4 cells (hero face)
  { src: g2, span: "", h: 1024 },                            // 1
  { src: g1, span: "", h: 1024 },                            // 1
  { src: g4, span: "", h: 1024 },                            // 1
  { src: g5, span: "", h: 1024 },                            // 1
  { src: g3, span: "md:col-span-2", h: 1024 },               // 2
  { src: g6, span: "md:col-span-2", h: 1024 },               // 2
]; // total = 4 + 1+1+1+1 + 2 + 2 = 12 ✓

function GaleriePage() {
  return (
    <>
      <section className="container-prose pb-12 pt-20 md:pt-28">
        <p className="eyebrow">Galerie</p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl text-foreground md:text-6xl">
          Ein Ort zum Durchatmen.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Helle Räume, sanfte Texturen, klare Linien — komm zur Ruhe, sobald du das Studio betrittst.
        </p>
      </section>

      <section className="container-prose pb-32">
        <div className="rounded-2xl bg-border p-1 md:p-1.5">
          <div className="grid auto-rows-[180px] grid-cols-2 gap-1 md:auto-rows-[220px] md:grid-cols-4 md:gap-1.5">
            {grid.map((g, i) => (
              <figure key={i} className={`overflow-hidden rounded-lg ${g.span}`}>
                <img
                  src={g.src}
                  alt="Pure Skin Studio Wien"
                  loading="lazy"
                  width={1024}
                  height={g.h}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </figure>
            ))}
          </div>
        </div>

        <BookingCta />
      </section>
    </>
  );
}