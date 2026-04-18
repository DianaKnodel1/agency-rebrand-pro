// Zentrale Kontaktdaten — bitte hier die echte WhatsApp-Nummer eintragen.
// Format: internationale Schreibweise ohne "+" und ohne Leerzeichen, z. B. "491701234567"
export const WHATSAPP_NUMBER = "491701234567"; // Platzhalter — bitte ersetzen
export const WHATSAPP_DISPLAY = "+49 170 1234567"; // Anzeige-Format
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hallo agentur.24, ich interessiere mich für eine Position und habe eine Frage.";

export function getWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
