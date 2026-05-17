import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt & Termin — Pure Skin Studio Wien" },
      { name: "description", content: "Kontaktiere das Pure Skin Studio Wien — Adresse, Telefon, Instagram. Jetzt Termin sichern." },
      { property: "og:title", content: "Kontakt — Pure Skin Studio Wien" },
      { property: "og:description", content: "Jetzt Termin sichern im Pure Skin Studio Wien." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      <section className="container-prose pb-16 pt-20 md:pt-28">
        <p className="eyebrow">Kontakt</p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl text-foreground md:text-6xl">
          Wir freuen uns auf dich.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Schreib uns, ruf an oder buche direkt deinen Wunschtermin. Wir antworten meist innerhalb weniger Stunden.
        </p>
      </section>

      <section className="container-prose pb-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-8 rounded-2xl border border-border bg-card p-10">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-accent" strokeWidth={1.4} />
              <div>
                <p className="eyebrow text-[0.6rem]">Adresse</p>
                <p className="mt-2 font-serif text-xl text-foreground">Mariahilfer Straße 24<br />1070 Wien</p>
              </div>
            </div>
            <div className="hairline" />
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 text-accent" strokeWidth={1.4} />
              <div>
                <p className="eyebrow text-[0.6rem]">Telefon</p>
                <a href="tel:+4319876543" className="mt-2 block font-serif text-xl text-foreground hover:text-accent">
                  +43 1 987 65 43
                </a>
              </div>
            </div>
            <div className="hairline" />
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-accent" strokeWidth={1.4} />
              <div>
                <p className="eyebrow text-[0.6rem]">E-Mail</p>
                <a href="mailto:hello@pureskinstudio.at" className="mt-2 block font-serif text-xl text-foreground hover:text-accent">
                  hello@pureskinstudio.at
                </a>
              </div>
            </div>
            <div className="hairline" />
            <div className="flex items-start gap-4">
              <Instagram className="mt-1 h-5 w-5 text-accent" strokeWidth={1.4} />
              <div>
                <p className="eyebrow text-[0.6rem]">Instagram</p>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-2 block font-serif text-xl text-foreground hover:text-accent">
                  @pureskinstudio
                </a>
              </div>
            </div>
            <div className="hairline" />
            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-5 w-5 text-accent" strokeWidth={1.4} />
              <div>
                <p className="eyebrow text-[0.6rem]">Öffnungszeiten</p>
                <p className="mt-2 text-foreground/80">Mo – Fr · 09:00 – 19:00</p>
                <p className="text-foreground/80">Sa · 10:00 – 16:00</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-foreground p-10 text-primary-foreground md:p-12">
            <p className="eyebrow text-[0.65rem]" style={{ color: "var(--gold)" }}>Termin anfragen</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">Schick uns kurz eine Nachricht.</h2>

            <form
              className="mt-10 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:hello@pureskinstudio.at";
              }}
            >
              <div>
                <label className="text-xs uppercase tracking-[0.22em] opacity-70">Name</label>
                <input
                  required
                  className="mt-2 w-full border-b border-primary-foreground/30 bg-transparent py-3 outline-none placeholder:text-primary-foreground/40 focus:border-[var(--gold)]"
                  placeholder="Dein Name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.22em] opacity-70">E-Mail</label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full border-b border-primary-foreground/30 bg-transparent py-3 outline-none placeholder:text-primary-foreground/40 focus:border-[var(--gold)]"
                  placeholder="du@beispiel.com"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.22em] opacity-70">Wunschbehandlung</label>
                <input
                  className="mt-2 w-full border-b border-primary-foreground/30 bg-transparent py-3 outline-none placeholder:text-primary-foreground/40 focus:border-[var(--gold)]"
                  placeholder="z.B. Hydrafacial"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.22em] opacity-70">Nachricht</label>
                <textarea
                  rows={3}
                  className="mt-2 w-full resize-none border-b border-primary-foreground/30 bg-transparent py-3 outline-none placeholder:text-primary-foreground/40 focus:border-[var(--gold)]"
                  placeholder="Wann passt es dir?"
                />
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-primary-foreground px-8 py-3.5 text-xs uppercase tracking-[0.22em] text-foreground transition-opacity hover:opacity-90"
              >
                Jetzt Termin sichern
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}