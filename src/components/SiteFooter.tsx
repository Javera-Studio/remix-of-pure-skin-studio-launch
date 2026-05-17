import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/50">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl text-foreground">Pure Skin Studio</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Modernes Kosmetikstudio in Wien für sichtbar gesunde, strahlende Haut.
          </p>
        </div>

        <div className="space-y-3 text-sm text-foreground/80">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-accent" />
            <span>Mariahilfer Straße 24<br />1070 Wien</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-accent" />
            <a href="tel:+4319876543" className="hover:text-foreground">+43 1 987 65 43</a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-accent" />
            <a href="mailto:hello@pureskinstudio.at" className="hover:text-foreground">hello@pureskinstudio.at</a>
          </div>
          <div className="flex items-center gap-3">
            <Instagram className="h-4 w-4 text-accent" />
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground">@pureskinstudio</a>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p className="eyebrow mb-3 text-[0.65rem]">Öffnungszeiten</p>
          <p className="text-foreground/80">Mo – Fr · 09:00 – 19:00</p>
          <p className="text-foreground/80">Sa · 10:00 – 16:00</p>
          <p className="text-muted-foreground">So · geschlossen</p>
          <Link
            to="/kontakt"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Jetzt Termin sichern
          </Link>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-prose flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Pure Skin Studio · Wien</p>
          <p>Impressum · Datenschutz</p>
        </div>
      </div>
    </footer>
  );
}