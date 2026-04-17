import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – agentur.24 UG" },
      {
        name: "description",
        content: "Impressum der agentur.24 UG (haftungsbeschränkt) gemäß § 5 TMG.",
      },
      { property: "og:title", content: "Impressum – agentur.24 UG" },
      { property: "og:description", content: "Pflichtangaben gemäß § 5 TMG." },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-subtle">
          Rechtliches
        </p>
        <h1 className="mb-12 font-serif text-4xl tracking-tight text-foreground md:text-5xl">
          Impressum
        </h1>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">Angaben gemäß § 5 TMG</h2>
            <p>
              agentur.24 UG (haftungsbeschränkt)
              <br />
              Genshagener Str. 23 A<br />
              14979 Großbeeren
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">Vertreten durch</h2>
            <p>Geschäftsführer: Hassan Abdelkader</p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">Kontakt</h2>
            <p>
              Anfragen richten Sie bitte über das Kontaktformular auf dieser Website oder
              schriftlich an die oben genannte Anschrift.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.
              <br />
              Registergericht: Amtsgericht Potsdam
              <br />
              Registernummer: HRB [bitte ergänzen]
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              [USt-IdNr. bitte ergänzen]
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Hassan Abdelkader
              <br />
              Genshagener Str. 23 A<br />
              14979 Großbeeren
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">Haftungsausschluss</h2>
            <h3 className="mb-1 font-medium text-foreground">Haftung für Inhalte</h3>
            <p className="mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen.
            </p>
            <h3 className="mb-1 font-medium text-foreground">Haftung für Links</h3>
            <p>
              Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
