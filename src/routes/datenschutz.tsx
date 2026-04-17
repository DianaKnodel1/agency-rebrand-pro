import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – agentur.24 UG" },
      {
        name: "description",
        content:
          "Datenschutzerklärung der agentur.24 UG: Verarbeitung personenbezogener Daten gemäß DSGVO.",
      },
      { property: "og:title", content: "Datenschutz – agentur.24 UG" },
      {
        property: "og:description",
        content: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
      },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-subtle">
          Rechtliches
        </p>
        <h1 className="mb-12 font-serif text-4xl tracking-tight text-foreground md:text-5xl">
          Datenschutz
        </h1>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">1. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              agentur.24 UG (haftungsbeschränkt)
              <br />
              Genshagener Str. 23 A<br />
              14979 Großbeeren
              <br />
              vertreten durch den Geschäftsführer Hassan Abdelkader.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">2. Erhebung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten ausschließlich im Rahmen Ihrer Bewerbung über das
              auf dieser Website bereitgestellte Formular. Erhoben werden insbesondere Name,
              Anschrift, Geburtsdaten, Nationalität, Kontaktdaten sowie Ihre freiwillig
              übermittelte Nachricht.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">3. Zweck der Datenverarbeitung</h2>
            <p>
              Die erhobenen Daten werden ausschließlich zur Bearbeitung Ihrer Bewerbung, zur
              Kontaktaufnahme mit Ihnen und zur Durchführung des Bewerbungs­verfahrens verwendet.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie
              Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">4. Weitergabe von Daten</h2>
            <p>
              Ihre personenbezogenen Daten werden an Dritte nur weitergegeben, wenn dies zur
              Vertragserfüllung erforderlich ist oder Sie ausdrücklich eingewilligt haben. Eine
              Übermittlung in Drittländer findet nicht statt.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">5. Speicherdauer</h2>
            <p>
              Bewerbungsdaten werden für die Dauer des Bewerbungs­verfahrens gespeichert und
              spätestens 6 Monate nach Abschluss gelöscht, sofern keine gesetzlichen
              Aufbewahrungs­pflichten bestehen oder Sie einer längeren Speicherung zugestimmt
              haben.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">6. Ihre Rechte</h2>
            <p>Sie haben das Recht auf:</p>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">7. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Hosting-Anbieter betrieben. Die
              personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
              Servern des Hosters gespeichert. Die Nutzung des Hostings erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-serif text-lg text-foreground">8. Kontakt zum Datenschutz</h2>
            <p>
              Bei Fragen zum Datenschutz wenden Sie sich bitte schriftlich an die im Impressum
              angegebene Anschrift oder über das Kontaktformular dieser Website.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
