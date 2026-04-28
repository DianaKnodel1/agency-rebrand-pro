// Zentrale Kontaktdaten — bitte hier die echte WhatsApp-Nummer eintragen.
// Format: internationale Schreibweise ohne "+" und ohne Leerzeichen, z. B. "491701234567"
export const WHATSAPP_NUMBER = "491701234567"; // Platzhalter — bitte ersetzen
export const WHATSAPP_DISPLAY = "+49 170 1234567"; // Anzeige-Format
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hallo Kadermarketing Agentur, ich interessiere mich für eine Position und habe eine Frage.";

export const SITE_URL = "https://kadermarketing-agentur.de";
export const BRAND_NAME = "Kadermarketing Agentur";
export const LEGAL_ENTITY = "agentur.24 UG (haftungsbeschränkt)";
export const CONTACT_EMAIL = "info@kadermarketing-agentur.de";

export function getMailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${CONTACT_EMAIL}${query ? `?${query}` : ""}`;
}

export function getWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
