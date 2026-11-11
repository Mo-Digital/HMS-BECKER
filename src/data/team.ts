/**
 * TEAM
 * Fotos: Datei mit dem Namen aus "photo" (z. B. uwe-becker.jpg) in
 * src/assets/fotos/ legen – sonst erscheinen Initialen.
 */
export type Member = {
  name: string;
  roles: string[];
  languages: ('DE' | 'EN' | 'TH' | 'RU')[];
  email: string;
  photo: string;
};

export const team: Member[] = [
  {
    name: 'Uwe Becker',
    roles: ['Geschäftsführung', 'Objektbetreuung Hausmeister-Service'],
    languages: ['DE', 'EN', 'TH'],
    email: 'uwe.becker@hms-becker.de',
    photo: 'uwe-becker',
  },
  {
    name: 'Marina Mesch',
    roles: ['Assistenz der Geschäftsführung', 'Buchhaltung', 'Personalverwaltung'],
    languages: ['DE', 'EN'],
    email: 'marina.mesch@hms-becker.de',
    photo: 'marina-mesch',
  },
  {
    name: 'Ralf Rockenberger',
    roles: ['Ansprechpartner und Leiter der Fliesenleger-Abteilung'],
    languages: ['DE'],
    email: 'ralf.rockenberger@hms-becker.de',
    photo: 'ralf-rockenberger',
  },
  {
    name: 'Antje Pfeifer',
    roles: ['Buchhaltung', 'Rechnungswesen Fliesen', 'Marketing'],
    languages: ['DE'],
    email: 'antje.pfeifer@hms-becker.de',
    photo: 'antje-pfeifer',
  },
  {
    name: 'Olga Raider',
    roles: ['Buchhaltung', 'Rechnungswesen Hausmeister-Service', 'Infozentrale'],
    languages: ['DE', 'RU'],
    email: 'olga.raider@hms-becker.de',
    photo: 'olga-raider',
  },
];

export const languageNames: Record<string, string> = {
  DE: 'Deutsch',
  EN: 'Englisch',
  TH: 'Thailändisch',
  RU: 'Russisch',
};
