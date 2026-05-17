import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Studio" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/preise", label: "Preise" },
  { to: "/galerie", label: "Galerie" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-serif text-xl tracking-wide text-foreground">Pure Skin</span>
          <span className="eyebrow mt-1 text-[0.6rem]">Studio · Wien</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/kontakt"
          className="hidden md:inline-flex items-center justify-center rounded-full border border-foreground px-5 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
        >
          Termin buchen
        </Link>

        <button
          aria-label="Menü"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="container-prose flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm tracking-wide text-foreground/80 hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-foreground px-5 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Termin buchen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}