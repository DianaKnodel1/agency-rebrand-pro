interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export function SuccessModal({ open, onClose }: SuccessModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
    >
      <div
        className="relative w-full max-w-md rounded-md border border-hairline bg-surface p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl leading-none text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Schließen"
        >
          ×
        </button>
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand/8 text-brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 id="success-title" className="mb-3 font-serif text-2xl text-foreground">
          Vielen Dank für Ihre Bewerbung
        </h3>
        <p className="mb-7 text-sm leading-relaxed text-muted-foreground">
          Wir haben Ihre Unterlagen erhalten und melden uns innerhalb von 24–48 Stunden per E-Mail
          bei Ihnen. Bei Rückfragen erreichen Sie uns jederzeit über unser Kontaktformular.
        </p>
        <button
          onClick={onClose}
          className="inline-flex items-center justify-center rounded-sm bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
        >
          Schließen
        </button>
      </div>
    </div>
  );
}
