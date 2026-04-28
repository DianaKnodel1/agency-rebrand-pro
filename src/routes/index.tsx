import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SuccessModal } from "@/components/SuccessModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kadermarketing Agentur – Karriere & Recruiting in Großbeeren" },
      {
        name: "description",
        content:
          "Kadermarketing Agentur aus Großbeeren – Personalmarketing & Recruiting. Bewerben Sie sich in wenigen Minuten online. Betrieben durch die agentur.24 UG.",
      },
      { property: "og:title", content: "Kadermarketing Agentur – Karriere & Recruiting" },
      {
        property: "og:description",
        content:
          "Werden Sie Teil eines verlässlichen Teams. Strukturierte Einarbeitung, faire Konditionen, transparente Prozesse.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // Lokale Verarbeitung — ein echtes Backend kann später angebunden werden.
      await new Promise((r) => setTimeout(r, 700));
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setError("Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-sm border border-input bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15 transition-colors";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand text-brand-foreground">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-8">
            <p className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-foreground/70">
              <span className="h-px w-8 bg-brand-foreground/40" />
              Karriere bei der Kadermarketing Agentur
            </p>
            <h1 className="font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Personalmarketing mit Substanz.{" "}
              <span className="text-brand-foreground/70">Recruiting auf Augenhöhe.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-brand-foreground/75 md:text-lg">
              Wir verbinden Menschen mit passenden Positionen – transparent, fair und
              verbindlich. Bewerben Sie sich in wenigen Minuten direkt online.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#bewerbung"
                className="inline-flex items-center gap-2 rounded-sm bg-brand-foreground px-6 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand-foreground/90"
              >
                Jetzt bewerben
                <span aria-hidden>→</span>
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-foreground/85 underline-offset-4 hover:underline"
              >
                Mehr über uns erfahren
              </a>
            </div>
          </div>
          <div className="hidden md:col-span-4 md:block">
            <div className="rounded-md border border-brand-foreground/15 bg-brand-foreground/[0.04] p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.16em] text-brand-foreground/60">Standort</p>
              <p className="mt-3 font-serif text-xl text-brand-foreground">Großbeeren</p>
              <p className="mt-1 text-sm text-brand-foreground/70">
                Genshagener Str. 23 A<br />
                14979 Großbeeren
              </p>
              <div className="my-6 h-px bg-brand-foreground/15" />
              <p className="text-xs uppercase tracking-[0.16em] text-brand-foreground/60">
                Geschäftsführung
              </p>
              <p className="mt-3 text-sm text-brand-foreground">Hassan Abdelkader</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kennzahlen */}
      <section className="border-b border-hairline bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-hairline md:grid-cols-4">
          {[
            { num: "24h", label: "Reaktionszeit" },
            { num: "100%", label: "Vertraglich abgesichert" },
            { num: "DE", label: "Deutscher Unternehmenssitz" },
            { num: "DSGVO", label: "Konforme Datenverarbeitung" },
          ].map((s) => (
            <div key={s.label} className="bg-surface px-6 py-10 text-center">
              <div className="font-serif text-3xl text-foreground md:text-4xl">{s.num}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leistungen / Vorteile */}
      <section id="leistungen" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-subtle">
              Was uns auszeichnet
            </p>
            <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
              Strukturen, auf die Sie sich verlassen können.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Wir setzen auf saubere Prozesse, klare Kommunikation und ein professionelles Umfeld –
              vom ersten Kontakt bis zur langfristigen Zusammenarbeit.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline md:grid-cols-3">
            {[
              {
                title: "Strukturierter Prozess",
                desc: "Transparente Bewerbungsschritte, klare Ansprechpartner und nachvollziehbare Entscheidungen.",
              },
              {
                title: "Faire Konditionen",
                desc: "Marktgerechte Vergütung, vertragliche Klarheit und pünktliche Abrechnung – ohne versteckte Klauseln.",
              },
              {
                title: "Verlässliches Team",
                desc: "Erfahrene Kolleginnen und Kollegen, kurze Wege und ein professionelles Arbeitsumfeld.",
              },
            ].map((item, i) => (
              <div key={item.title} className="bg-surface p-8 md:p-10">
                <div className="mb-5 font-serif text-sm text-brand-subtle">
                  0{i + 1}
                </div>
                <h3 className="mb-3 font-serif text-xl text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="bg-surface-muted py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-subtle">
              Über uns
            </p>
            <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
              Kadermarketing Agentur
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground">
              Die Kadermarketing Agentur – betrieben durch die agentur.24 UG (haftungsbeschränkt)
              mit Sitz in Großbeeren – ist ein inhabergeführtes Unternehmen mit Fokus auf
              Personalmarketing, Recruiting und digitale Services. Wir arbeiten zuverlässig,
              dokumentiert und im engen Austausch mit unseren Mitarbeitenden.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Unser Anspruch ist es, ein professionelles Arbeitsumfeld zu schaffen, das auf
              Verbindlichkeit, Transparenz und Wertschätzung basiert.
            </p>
            <div className="mt-10 flex items-center gap-4 border-t border-hairline pt-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-semibold text-brand-foreground">
                HA
              </div>
              <div>
                <p className="font-medium text-foreground">Hassan Abdelkader</p>
                <p className="text-sm text-muted-foreground">Geschäftsführer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bewerbungsformular */}
      <section id="bewerbung" className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-subtle">
              Bewerbung
            </p>
            <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
              Ihre Bewerbung
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Bitte füllen Sie das Formular vollständig aus. Wir behandeln Ihre Angaben
              vertraulich und gemäß DSGVO.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-md border border-hairline bg-surface p-8 shadow-sm md:p-10"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Vorname *
                </label>
                <input name="first_name" required placeholder="Max" className={inputClass} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Nachname *
                </label>
                <input name="last_name" required placeholder="Mustermann" className={inputClass} />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  E-Mail *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="max@beispiel.de"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Telefon *
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+49 123 456789"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Adresse *
              </label>
              <input name="address" required placeholder="Musterstraße 1" className={inputClass} />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  PLZ *
                </label>
                <input name="postal_code" required placeholder="12345" className={inputClass} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Stadt *
                </label>
                <input name="city" required placeholder="Berlin" className={inputClass} />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Geburtsdatum *
                </label>
                <input name="birth_date" type="date" required className={inputClass} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Geburtsort *
                </label>
                <input name="birth_place" required placeholder="Berlin" className={inputClass} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Nationalität *
                </label>
                <input name="nationality" required placeholder="Deutsch" className={inputClass} />
              </div>
            </div>
            {/* Nachricht entfernt auf Anfrage */}
            {error && (
              <div className="rounded-sm border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
                {error}
              </div>
            )}

            <p className="text-xs leading-relaxed text-muted-foreground">
              Mit dem Absenden bestätigen Sie, dass Sie unsere{" "}
              <a href="/datenschutz" className="underline-offset-4 hover:underline">
                Datenschutzhinweise
              </a>{" "}
              gelesen haben und der Verarbeitung Ihrer Daten zur Bearbeitung Ihrer Bewerbung
              zustimmen.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-sm font-medium text-brand-foreground shadow-sm transition-colors hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 0 1 8-8v3a5 5 0 0 0-5 5H4z"
                    />
                  </svg>
                  Wird gesendet…
                </>
              ) : (
                "Bewerbung absenden"
              )}
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
      <SuccessModal open={success} onClose={() => setSuccess(false)} />
    </div>
  );
}
