import { Link } from "@tanstack/react-router";

type Variant = "dark" | "light" | "outline";

export function BookingCta({
  variant = "dark",
  label = "Jetzt Termin vereinbaren",
}: {
  variant?: Variant;
  label?: string;
}) {
  const styles: Record<Variant, string> = {
    dark:
      "bg-foreground text-primary-foreground hover:bg-[var(--gold)] hover:text-foreground",
    light:
      "bg-primary-foreground text-foreground hover:bg-[var(--gold)] hover:text-foreground",
    outline:
      "border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground",
  };

  return (
    <div className="mt-12 flex justify-center">
      <Link
        to="/kontakt"
        className={`inline-flex items-center justify-center rounded-full px-8 py-4 text-xs uppercase tracking-[0.24em] transition-colors ${styles[variant]}`}
      >
        {label}
      </Link>
    </div>
  );
}