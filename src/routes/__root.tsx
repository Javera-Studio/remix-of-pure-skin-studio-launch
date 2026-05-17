import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <div className="flex flex-1 items-center justify-center px-6 py-32 text-center">
        <div className="max-w-md">
          <p className="eyebrow">Fehler</p>
          <h1 className="mt-4 font-serif text-6xl text-foreground">404</h1>
          <p className="mt-4 text-sm text-muted-foreground">Diese Seite konnten wir leider nicht finden.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pure Skin Studio — Kosmetikstudio Wien" },
      { name: "description", content: "Professionelle Hautpflege & Kosmetikbehandlungen in Wien. Jetzt Termin buchen." },
      { name: "author", content: "Pure Skin Studio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Pure Skin Studio — Kosmetikstudio Wien" },
      { name: "twitter:title", content: "Pure Skin Studio — Kosmetikstudio Wien" },
      { property: "og:description", content: "Professionelle Hautpflege & Kosmetikbehandlungen in Wien. Jetzt Termin buchen." },
      { name: "twitter:description", content: "Professionelle Hautpflege & Kosmetikbehandlungen in Wien. Jetzt Termin buchen." },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
