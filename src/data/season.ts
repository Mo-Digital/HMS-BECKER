/**
 * JAHRESPLAN & SAISON-BANNER
 * months: 1 = Januar … 12 = Dezember
 */
export const yearPlan = [
  { key: 'winter', label: 'Winterdienst', icon: 'Snowflake', months: [11, 12, 1, 2, 3], href: '/leistungen/winterdienst/', color: 'var(--c-plan-winter)' },
  { key: 'gruen', label: 'Grünpflege', icon: 'Leaf', months: [4, 5, 6, 7, 8, 9, 10], href: '/leistungen/gruenpflege/', color: 'var(--c-plan-green)' },
  { key: 'laub', label: 'Laubbeseitigung', icon: 'Trees', months: [10, 11], href: '/leistungen/aussenreinigung/', color: 'var(--c-plan-leaf)' },
  { key: 'reinigung', label: 'Reinigung & Kehrwoche', icon: 'BrushCleaning', months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], href: '/leistungen/aussenreinigung/', color: 'var(--c-plan-clean)' },
] as const;

export const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

/** Tipp pro Monat (Index 0 = Januar) – erscheint im Jahresplan beim aktuellen/gewählten Monat. */
export const monthTips = [
  'Hochsaison im Winterdienst: Wir räumen und streuen – oft schon vor Sonnenaufgang.',
  'Frost, Schnee, Glätte: Ihr Winterdienst-Vertrag sorgt für sichere Wege.',
  'Übergangszeit: letzte Wintereinsätze, danach Streugut abkehren.',
  'Start der Grünpflege: erster Rasenschnitt, Beete vorbereiten, Frühjahrsputz.',
  'Alles wächst: Rasenmähen, Unkraut entfernen, Bepflanzungen.',
  'Hecken- und Strauchschnitt, Bewässerung in trockenen Wochen.',
  'Sommerzeit ist Urlaubszeit – wir vertreten Ihren Hausmeister.',
  'Bewässerung und Pflege – und schon an den Winterdienst denken.',
  'Rückschnitt von Bäumen und Sträuchern, Winterdienst jetzt planen.',
  'Laubzeit beginnt – und letzte Chance für Ihren Winterdienst-Vertrag.',
  'Laub, erster Frost, Start Winterdienst: Wir sind bereit.',
  'Winterdienst im Einsatz – und die Kehrwoche läuft das ganze Jahr.',
];

/**
 * Saison-Hinweise oben auf der Seite. Der passende Banner wird beim
 * Besuch automatisch nach aktuellem Monat eingeblendet.
 */
export const seasonBanners = [
  {
    key: 'winter',
    months: [10, 11, 12, 1, 2],
    icon: 'Snowflake',
    text: 'Winterdienst – jetzt Vertrag sichern!',
    sub: 'Räumen & Streuen mit eigenem Maschinenpark.',
    href: '/leistungen/winterdienst/',
    cta: 'Mehr erfahren',
  },
  {
    key: 'spring',
    months: [3, 4],
    icon: 'Sprout',
    text: 'Grünpflege-Saison startet',
    sub: 'Jetzt Rasen, Hecken & Beete einplanen lassen.',
    href: '/leistungen/gruenpflege/',
    cta: 'Grünpflege anfragen',
  },
] as const;
