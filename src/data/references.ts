/**
 * REFERENZEN
 * Weitere Referenzen einfach als neuen Eintrag ergänzen.
 * logo: Dateiname (ohne Endung) in src/assets/fotos/ – optional.
 */
export type Reference = {
  name: string;
  url?: string;
  since?: string;
  sector: string;
  text: string[];
  tags: string[];
  logo?: string;
  placeholder?: boolean;
};

export const references: Reference[] = [
  {
    name: 'Stadtsiedlung Heilbronn',
    url: 'https://www.stadtsiedlung.de/',
    since: 'seit Jahren',
    sector: 'Wohnungsunternehmen / Hausverwaltung',
    text: [
      'Die Stadtsiedlung Heilbronn zählt seit Jahren zu unserem Kundenkreis. Speziell die Aufgaben der Hausverwaltungen sind uns dadurch bestens vertraut.',
      'Zusätzlich gehört die Abwicklung von Brand- und Wasserschäden – von der Ursachenfeststellung über die Schadensbeseitigung bis zur kompletten Abwicklung mit der Versicherung – zu unseren Service-Leistungen für diesen Kunden.',
    ],
    tags: ['Hausverwaltungsaufgaben', 'Brandschäden', 'Wasserschäden', 'Versicherungsabwicklung'],
    // logo: 'logo-stadtsiedlung',  // aktuelles Logo (mit Erlaubnis) als src/assets/fotos/logo-stadtsiedlung.png ablegen
  },
  // Beispiel für weitere Referenz (placeholder: true blendet einen Hinweis ein):
  {
    name: 'Ihre nächste Referenz',
    sector: 'Platz für weitere Kunden',
    text: ['Hier ist Platz für weitere Referenzen – z. B. Hausverwaltungen, Firmen oder Wohnanlagen. Eintrag in src/data/references.ts ergänzen.'],
    tags: [],
    placeholder: true,
  },
];
