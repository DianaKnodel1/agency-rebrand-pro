import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – agentur.24 UG" },
      {
        name: "description",
        content:
          "Kontaktinformationen der agentur.24 UG: Anschrift, Geschäftsführung und Erreichbarkeit.",
      },
      { property: "og:title", content: "Kontakt – agentur.24 UG" },
      { property: "og:description", content: "So erreichen Sie die agentur.24 UG in Großbeeren." },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-subtle">
          Kontakt
        </p>
        <h1 className="mb-12 font-serif text-4xl tracking-tight text-foreground md:text-5xl">
          Sprechen Sie uns an.
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-hairline bg-surface p-8">
            <h2 className="mb-5 font-serif text-xl text-foreground">Anschrift</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              agentur.24 UG (haftungsbeschränkt)
              <br />
              Genshagener Str. 23 A<br />
              14979 Großbeeren
              <br />
              Deutschland
            </p>
          </div>

          <div className="rounded-md border border-hairline bg-surface p-8">
            <h2 className="mb-5 font-serif text-xl text-foreground">Geschäftsführung</h2>
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-semibold text-brand-foreground">
                HA
              </div>
              <div>
                <p className="font-medium text-foreground">Hassan Abdelkader</p>
                <p className="text-sm text-muted-foreground">Geschäftsführer</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-hairline bg-surface p-8 md:col-span-2">
            <h2 className="mb-5 font-serif text-xl text-foreground">Erreichbarkeit</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Wir bearbeiten Anfragen werktags von Montag bis Freitag. In der Regel erhalten Sie
              innerhalb von 24 Stunden eine Antwort. Für Bewerbungen nutzen Sie bitte das
              Bewerbungsformular auf der Startseite.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
