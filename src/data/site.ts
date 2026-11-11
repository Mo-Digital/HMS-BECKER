/**
 * ZENTRALE FIRMENDATEN
 * --------------------------------------------------------------
 * Alles, was mehrfach auf der Website vorkommt (Telefon, Adresse,
 * E-Mail …), steht NUR hier. Eine Änderung hier wirkt überall.
 */

export const site = {
  name: 'Hausmeister-Service Becker',
  shortName: 'HMS Becker',
  url: 'https://www.hms-becker.de',
  owner: 'Lamyai Becker',
  foundingNote: 'Mit der Übernahme der „schwäbischen“ Kehrwoche für zwei ältere Damen fing es an …',

  address: {
    street: 'Gotenstr. 5',
    zip: '74081',
    city: 'Heilbronn',
    region: 'Baden-Württemberg',
    country: 'DE',
  },
  // Optional: genaue Koordinaten für Google (LocalBusiness-Schema), z. B. { lat: 49.12, lng: 9.21 }.
  // Rechtsklick auf den Standort in Google Maps zeigt sie an. Leer lassen (null), wenn unbekannt.
  geo: null as null | { lat: number; lng: number },

  phone: { display: '07131 / 62 82 20', href: 'tel:+497131628220', intl: '+49 7131 628220' },
  fax: { display: '07131 / 34 503', intl: '+49 7131 34503' },
  mobile: { display: '0171 / 47 53 416', href: 'tel:+491714753416', intl: '+49 171 4753416' },
  email: 'info@hms-becker.de',

  sister: { name: 'Fliesen Becker', url: 'https://www.fliesen-becker.net', label: 'www.fliesen-becker.net' },

  areaServed: ['Heilbronn', 'Stadtkreis Heilbronn'],

  /**
   * Platzhalter-Kennzeichnung: Solange true, werden fehlende Fotos und
   * noch zu ergänzende Angaben auf der Seite deutlich markiert.
   * Vor dem Livegang prüfen – siehe README.
   */
  showPlaceholderLabels: true,
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Leistungen', href: '/leistungen/' },
  { label: 'Über uns', href: '/ueber-uns/' },
  { label: 'Referenzen', href: '/referenzen/' },
  { label: 'Karriere', href: '/karriere/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const legalNav: NavItem[] = [
  { label: 'Impressum', href: '/impressum/' },
  { label: 'Datenschutz', href: '/datenschutz/' },
];
