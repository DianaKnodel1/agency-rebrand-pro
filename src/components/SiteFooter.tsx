import { Link } from "@tanstack/react-router";
import { getWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5 font-serif text-lg text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand text-[11px] font-semibold text-brand-foreground">
                KM
              </span>
              <span>Kadermarketing Agentur</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Genshagener Str. 23 A
              <br />
              14979 Großbeeren
              <br />
              Deutschland
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <a href="https://kadermarketing-agentur.de" className="hover:text-foreground">
                kadermarketing-agentur.de
              </a>
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Betrieben durch:{" "}
              <span className="font-medium text-foreground">agentur.24 UG (haftungsbeschränkt)</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
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
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#25D366]" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.36.572-1 3.65 3.738-.98z" />
              </svg>
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
            <Link
              to="/kontakt"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Kontakt aufnehmen <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Kadermarketing Agentur · agentur.24 UG (haftungsbeschränkt). Alle Rechte vorbehalten.</p>
          <p>Sitz: Großbeeren · Deutschland</p>
        </div>
      </div>
    </footer>
  );
}
