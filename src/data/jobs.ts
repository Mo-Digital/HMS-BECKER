/**
 * STELLENANGEBOTE
 * Einfach Einträge hinzufügen/entfernen. Ist die Liste leer,
 * erscheint auf der Karriere-Seite ein Hinweis auf Initiativbewerbungen.
 */
export type Job = {
  id: string;
  title: string;
  type: string;
  summary: string;
  requirements: string[];
  icon: string;
};

export const jobs: Job[] = [
  {
    id: 'winterdienst',
    title: 'Kräfte für den Winterdienst',
    type: 'Minijob · Raum Heilbronn · saisonal',
    summary: 'Wir suchen zuverlässige Kräfte auf Minijob-Basis für den Winterdienst im Raum Heilbronn.',
    requirements: [
      'Flexibilität und Zuverlässigkeit',
      'Führerschein',
      'Bereitschaft zur Nacht- und Wochenendarbeit',
    ],
    icon: 'Snowflake',
  },
  {
    id: 'fliesenleger',
    title: 'Fliesenleger (m/w/d)',
    type: 'Vollzeit · Heilbronn',
    summary: 'Selbstständig arbeitende/r Fliesenleger/in mit Führerschein gesucht – gerne auch ältere Bewerber/innen.',
    requirements: ['Selbstständige Arbeitsweise', 'Führerschein', 'Berufserfahrung willkommen – gerne auch ältere Bewerber/innen'],
    icon: 'Hammer',
  },
  {
    id: 'installateur',
    title: 'Gas-Wasser-Installateur (m/w/d)',
    type: 'Vollzeit · Heilbronn',
    summary: 'Selbstständig arbeitende/r Gas-Wasser-Installateur/in mit Führerschein gesucht – gerne auch ältere Bewerber/innen.',
    requirements: ['Selbstständige Arbeitsweise', 'Führerschein', 'Berufserfahrung willkommen – gerne auch ältere Bewerber/innen'],
    icon: 'Wrench',
  },
];

export const jobsEmail = 'uwe.becker@hms-becker.de';
