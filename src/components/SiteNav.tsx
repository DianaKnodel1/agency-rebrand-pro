import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-surface/85 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 font-serif text-lg tracking-tight text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand text-[11px] font-semibold text-brand-foreground">
            KM
          </span>
          <span>
            Kadermarketing<span className="text-brand-subtle"> </span>Agentur
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/" hash="leistungen" className="transition-colors hover:text-foreground">
            Leistungen
          </Link>
          <Link to="/" hash="ueber-uns" className="transition-colors hover:text-foreground">
            Über uns
          </Link>
          <Link to="/kontakt" className="transition-colors hover:text-foreground">
            Kontakt
          </Link>
        </nav>
        <Link
          to="/"
          hash="bewerbung"
          className="inline-flex items-center gap-2 rounded-sm bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground shadow-sm transition-colors hover:bg-brand/90"
        >
          Jetzt bewerben
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
