import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/contact";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Kadermarketing Agentur" },
      {
        name: "description",
        content:
          "Kontakt zur Kadermarketing Agentur in Großbeeren: Anschrift, Geschäftsführung und Erreichbarkeit.",
      },
      { property: "og:title", content: "Kontakt – Kadermarketing Agentur" },
      { property: "og:description", content: "So erreichen Sie die Kadermarketing Agentur in Großbeeren." },
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
              Kadermarketing Agentur
              <br />
              <span className="text-foreground/70">agentur.24 UG (haftungsbeschränkt)</span>
              <br />
              Genshagener Str. 23 A<br />
              14979 Großbeeren
              <br />
              Deutschland
              <br />
              <a href="https://kadermarketing-agentur.de" className="hover:text-foreground">
                kadermarketing-agentur.de
              </a>
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

          <div className="rounded-md border border-hairline bg-surface p-8 md:col-span-2">
            <h2 className="mb-5 font-serif text-xl text-foreground">WhatsApp</h2>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Für eine schnelle Rückmeldung erreichen Sie uns direkt per WhatsApp unter{" "}
              <span className="font-medium text-foreground">{WHATSAPP_DISPLAY}</span>.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1EBE5D]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.36.572-1 3.65 3.738-.98zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01a1.1 1.1 0 0 0-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
              </svg>
              WhatsApp-Chat öffnen
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
