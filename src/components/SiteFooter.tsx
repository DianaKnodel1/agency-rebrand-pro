import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5 font-serif text-lg text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand text-[11px] font-semibold text-brand-foreground">
                a.24
              </span>
              <span>agentur.24 UG</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Genshagener Str. 23 A
              <br />
              14979 Großbeeren
              <br />
              Deutschland
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Geschäftsführer:{" "}
              <span className="font-medium text-foreground">Hassan Abdelkader</span>
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Rechtliches
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/impressum" className="text-foreground/80 transition-colors hover:text-foreground">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-foreground/80 transition-colors hover:text-foreground">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-foreground/80 transition-colors hover:text-foreground">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Kontakt
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Schreiben Sie uns über das Kontaktformular oder per E-Mail. Wir antworten in der Regel
              innerhalb eines Werktages.
            </p>
            <Link
              to="/kontakt"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Kontakt aufnehmen <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} agentur.24 UG (haftungsbeschränkt). Alle Rechte vorbehalten.</p>
          <p>Sitz: Großbeeren · Deutschland</p>
        </div>
      </div>
    </footer>
  );
}
