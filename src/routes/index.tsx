import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import { Sparkles, Droplets, Leaf, Eye, Star, Check } from "lucide-react";
import { BookingCta } from "@/components/BookingCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pure Skin Studio — Kosmetikstudio in Wien" },
      { name: "description", content: "Strahlende Haut beginnt hier. Hydrafacial, Anti-Aging, Wimpern & Augenbrauen im modernen Kosmetikstudio in Wien." },
      { property: "og:title", content: "Pure Skin Studio — Kosmetikstudio in Wien" },
      { property: "og:description", content: "Strahlende Haut beginnt hier. Hydrafacial, Anti-Aging, Wimpern & Augenbrauen." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Sparkles, title: "Gesichtsbehandlungen", text: "Klassische Pflegerituale, abgestimmt auf deinen Hauttyp." },
  { icon: Droplets, title: "Hydrafacial", text: "Tiefenreinigung, Peeling und Hydration in einer Sitzung." },
  { icon: Leaf, title: "Anti-Aging", text: "Wirksame Treatments für eine sichtbar straffere Haut." },
  { icon: Eye, title: "Wimpern & Augenbrauen", text: "Lifting, Tinting und Styling für den perfekten Blick." },
];

const reasons = [
  "Individuelle Hautanalyse",
  "Hochwertige Pflegeprodukte",
  "Entspannte, ruhige Atmosphäre",
  "Sichtbare Ergebnisse",
  "Professionelle Beratung",
];

const reviews = [
  { name: "Lena M.", text: "Ein wunderschönes Studio mit absoluter Wohlfühl-Atmosphäre. Meine Haut hat noch nie so frisch ausgesehen." },
  { name: "Sophia K.", text: "Das beste Hydrafacial in Wien. Super freundlich, professionell und sichtbare Ergebnisse." },
  { name: "Anna B.", text: "Ich liebe die Ruhe und die ehrliche Beratung. Hier fühlt man sich wirklich gut aufgehoben." },
  { name: "Julia P.", text: "Tolle Hautanalyse und individuelle Empfehlungen. Komme jeden Monat gerne wieder." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--cream)]">
        <div className="container-prose grid gap-12 pb-20 pt-12 md:grid-cols-12 md:gap-16 md:pt-20">
          <div className="fade-up md:col-span-5 md:pt-16">
            <p className="eyebrow">Pure Skin Studio · Wien</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              Strahlende Haut <em className="text-accent not-italic">beginnt</em> hier.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Dein modernes Kosmetikstudio im Herzen von Wien. Individuelle Behandlungen,
              ehrliche Beratung und sichtbare Ergebnisse — in einer ruhigen, eleganten Atmosphäre.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-foreground"
              >
                Jetzt Termin vereinbaren
              </Link>
              <Link
                to="/leistungen"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground"
              >
                <span className="gold-line" /> Leistungen entdecken
              </Link>
            </div>
          </div>

          <div className="relative md:col-span-7">
            <div className="absolute -inset-6 -z-10 rounded-[2rem]" style={{ background: "var(--mint-soft)" }} />
            <img
              src={hero}
              alt="Sanfte Hautpflege im Pure Skin Studio Wien"
              width={1600}
              height={1080}
              className="h-[480px] w-full rounded-[1.5rem] object-cover shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] md:h-[620px]"
            />
            <div className="absolute -bottom-8 -left-8 hidden rounded-2xl bg-card p-6 shadow-xl md:block">
              <p className="eyebrow text-[0.6rem]">Seit 2018</p>
              <p className="mt-2 font-serif text-2xl text-foreground">1.200+ glückliche Kundinnen</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32" style={{ background: "var(--mint-soft)" }}>
        <div className="container-prose">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Leistungen</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              Behandlungen, die deine Haut spürt.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Jedes Treatment beginnt mit einer ehrlichen Hautanalyse — und endet mit einem Ergebnis,
              das du sehen und fühlen kannst.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-card p-7 shadow-[0_8px_30px_-15px_rgba(45,80,65,0.18)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(45,80,65,0.28)]"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: "var(--mint-soft)" }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.4} style={{ color: "var(--forest)" }} />
                </span>
                <h3 className="mt-6 font-serif text-xl text-foreground break-words hyphens-auto lg:text-[1.35rem]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <span className="mt-6 inline-block h-px w-8" style={{ background: "var(--gold)" }} />
              </div>
            ))}
          </div>

          <BookingCta />
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
        <div className="container-prose grid gap-16 md:grid-cols-12">
          <div className="relative md:col-span-5">
            <div className="absolute -inset-4 -z-10 rounded-[2rem]" style={{ background: "var(--sand)" }} />
            <img
              src={g2}
              alt="Modernes Behandlungszimmer im Pure Skin Studio"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-[520px] w-full rounded-[1.5rem] object-cover img-grain"
            />
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="eyebrow">Warum Pure Skin</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              Eine ruhige Adresse für sichtbar gesunde Haut.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Wir nehmen uns Zeit. Für deine Haut, deine Geschichte und deine Ziele.
              Jede Behandlung ist auf dich abgestimmt — keine Standardlösungen.
            </p>

            <ul className="mt-10 space-y-3">
              {reasons.map((r) => (
                <li
                  key={r}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4"
                >
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ background: "var(--mint-soft)" }}
                  >
                    <Check className="h-4 w-4" strokeWidth={2} style={{ color: "var(--forest)" }} />
                  </span>
                  <span className="font-serif text-lg text-foreground">{r}</span>
                </li>
              ))}
            </ul>

            <BookingCta variant="outline" />
          </div>
        </div>
      </section>

      {/* PRICE TEASER */}
      <section className="py-24 md:py-32" style={{ background: "var(--sand)" }}>
        <div className="container-prose grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Transparente Preise</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              Klare Preise, ehrliche Empfehlungen.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Keine versteckten Kosten — du erfährst vorab genau, was deine Behandlung beinhaltet.
            </p>

            <ul className="mt-8 divide-y divide-border border-y border-border">
              {[
                ["Gesichtsbehandlung", "70€"],
                ["Hydrafacial", "120€"],
                ["Wimpernlifting", "60€"],
                ["Augenbrauen Styling", "25€"],
              ].map(([name, price]) => (
                <li key={name} className="flex items-baseline justify-between py-4">
                  <span className="font-serif text-xl text-foreground">{name}</span>
                  <span className="font-serif text-xl" style={{ color: "var(--gold)" }}>{price}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/preise"
                className="inline-flex items-center justify-center rounded-full border border-foreground px-7 py-3.5 text-xs uppercase tracking-[0.24em] text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
              >
                Zur Preisliste
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-foreground"
              >
                Jetzt Termin vereinbaren
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src={g3}
              alt="Pflegeprodukte im Studio"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
        <div className="container-prose">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Bewertungen</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              Was unsere Kundinnen sagen.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Über 200 Fünf-Sterne-Bewertungen von Kundinnen aus ganz Wien.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="flex flex-col rounded-2xl bg-card p-8 shadow-[0_8px_30px_-15px_rgba(45,80,65,0.15)]"
              >
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-xl leading-snug text-foreground">
                  „{r.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{r.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <BookingCta />
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose pb-24 pt-8">
        <div
          className="relative overflow-hidden rounded-[1.5rem] px-8 py-20 text-center text-primary-foreground md:px-16"
          style={{ background: "var(--forest)" }}
        >
          <p className="eyebrow text-[0.65rem]" style={{ color: "var(--gold)" }}>
            Termin sichern
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl text-primary-foreground md:text-5xl">
            Schenke deiner Haut die Aufmerksamkeit, die sie verdient.
          </h2>
          <BookingCta variant="light" />
        </div>
      </section>
    </>
  );
}
