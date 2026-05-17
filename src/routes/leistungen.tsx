import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Droplets, Leaf, Eye } from "lucide-react";
import g3 from "@/assets/g3.jpg";
import { BookingCta } from "@/components/BookingCta";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — Pure Skin Studio Wien" },
      { name: "description", content: "Hydrafacial, Anti-Aging, klassische Gesichtsbehandlungen, Wimpern & Augenbrauen im Pure Skin Studio Wien." },
      { property: "og:title", content: "Leistungen — Pure Skin Studio Wien" },
      { property: "og:description", content: "Behandlungen für sichtbar gesunde Haut — individuell auf dich abgestimmt." },
      { property: "og:image", content: g3 },
    ],
  }),
  component: LeistungenPage,
});

const items = [
  {
    icon: Sparkles,
    title: "Gesichtsbehandlungen",
    text: "Spürbar entspannt, sichtbar frisch — dein Moment purer Erholung.",
    duration: "60 – 75 Min.",
  },
  {
    icon: Droplets,
    title: "Hydrafacial",
    text: "Sofort sichtbar reinere, frischere und strahlende Haut.",
    duration: "60 Min.",
  },
  {
    icon: Leaf,
    title: "Anti-Aging",
    text: "Straffere Konturen, glattere Haut — ein jüngeres Hautgefühl.",
    duration: "75 – 90 Min.",
  },
  {
    icon: Eye,
    title: "Wimpern & Augenbrauen",
    text: "Ein wacher, definierter Blick — gepflegt schön, ganz ohne Make-up.",
    duration: "30 – 60 Min.",
  },
];

function LeistungenPage() {
  return (
    <>
      <section className="container-prose pb-16 pt-20 md:pt-28">
        <p className="eyebrow">Leistungen</p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl text-foreground md:text-6xl">
          Behandlungen für deine schönste Haut.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Jedes Treatment startet mit einer kostenlosen Hautanalyse. So finden wir gemeinsam genau das,
          was deine Haut wirklich braucht.
        </p>
      </section>

      <section className="container-prose pb-32">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2">
          {items.map(({ icon: Icon, title, text, duration }) => (
            <article key={title} className="group bg-card p-10 transition-colors hover:bg-secondary/40">
              <div className="flex items-start justify-between">
                <Icon className="h-8 w-8 text-accent" strokeWidth={1.3} />
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{duration}</span>
              </div>
              <h2 className="mt-8 font-serif text-3xl text-foreground">{title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>

        <BookingCta />
      </section>
    </>
  );
}