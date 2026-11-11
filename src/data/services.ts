/**
 * LEISTUNGEN
 * --------------------------------------------------------------
 * Jede Leistung bekommt automatisch eine eigene Unterseite unter
 * /leistungen/<slug>/. Texte hier ändern = Website ändert sich.
 *
 * Felder:
 *  slug         URL-Teil (nur Kleinbuchstaben, Bindestriche)
 *  title        Name der Leistung
 *  icon         Icon-Name aus https://lucide.dev/icons (PascalCase)
 *  teaser       Kurztext für Kacheln
 *  seoTitle     <title> der Unterseite (max. ~60 Zeichen)
 *  description  Meta-Beschreibung (max. ~155 Zeichen)
 *  lead         Einleitung unter der Überschrift
 *  body         Fließtext-Absätze
 *  listTitle    Überschrift der Leistungsliste
 *  list         Stichpunkte
 *  extra        optionale Zusatzblöcke
 *  faq          Häufige Fragen (erscheinen auch als FAQ-Schema für Google)
 *  photo        Dateiname (ohne Endung) in src/assets/fotos/ – fehlt die Datei, erscheint ein Platzhalter
 *  months       Monate (1–12), in denen die Leistung typischerweise anfällt
 */

export type ServiceExtra =
  | { type: 'checklist'; title: string; intro?: string; groups: { title: string; items: string[] }[] }
  | { type: 'steps'; title: string; intro?: string; steps: { title: string; text: string }[] }
  | { type: 'prices'; title: string; intro?: string; note: string; needsReview?: boolean; groups: { title: string; rows: { label: string; detail?: string; price: string }[] }[] }
  | { type: 'text'; title: string; paragraphs: string[] };

export type Service = {
  slug: string;
  title: string;
  shortTitle?: string;
  icon: string;
  teaser: string;
  seoTitle: string;
  description: string;
  lead: string;
  body: string[];
  listTitle: string;
  list: string[];
  extra?: ServiceExtra[];
  faq?: { q: string; a: string }[];
  photo: string;
  months: number[];
  emergency?: boolean;
};

const ALL_YEAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const services: Service[] = [
  {
    slug: 'hausmeisterdienst',
    title: 'Hausmeisterdienst',
    icon: 'House',
    teaser: 'Ihr fester Ansprechpartner vor Ort – für Mieter, Eigentümer und Hausverwaltungen.',
    seoTitle: 'Hausmeisterservice Heilbronn – Objektbetreuung',
    description:
      'Hausmeisterservice in Heilbronn: Objektbetreuung, Kleinreparaturen, Kontrolle der Hausordnung und Koordination von Fremdfirmen. Jetzt anrufen: 07131 / 62 82 20.',
    lead:
      'Sie brauchen jemanden, der als Hausmeister für Ihre Mieter erreichbar ist? Wir übernehmen alle anfallenden Arbeiten rund ums Gebäude – von allgemeinen Instandhaltungsarbeiten bis hin zur Grünanlagenpflege.',
    body: [
      'Im Rahmen eines Betreuungsvertrages achten wir auf die Ordnung und den einwandfreien Gesamtzustand der Immobilie. Wir stimmen Termine mit Fremdfirmen ab, achten auf die Einhaltung der Hausordnung und pflegen den Kontakt mit Eigentümern und Mietern.',
      'Angebote erstellen wir individuell, denn kein Objekt gleicht dem anderen. Die Dienstleistungen stellen wir ganz nach Wunsch und so zusammen, wie sie vor Ort benötigt werden.',
      'Selbstverständlich übernehmen wir diese Arbeiten auch vertretungsweise – zum Beispiel, wenn Sie in Urlaub fahren oder Ihr Hausmeister einmal krank ist.',
    ],
    listTitle: 'Das übernehmen wir für Sie',
    list: [
      'Regelmäßige Objektkontrolle und Begehungen',
      'Allgemeine Instandhaltungs- und Kleinreparaturarbeiten',
      'Ansprechpartner für Mieter und Eigentümer',
      'Kontrolle der Hausordnung',
      'Terminabstimmung und Koordination von Fremdfirmen',
      'Vertretung bei Urlaub oder Krankheit Ihres Hausmeisters',
      'Kombinierbar mit Reinigung, Winterdienst und Grünpflege',
    ],
    faq: [
      {
        q: 'Für wen ist der Hausmeisterdienst gedacht?',
        a: 'Für Hausverwaltungen, Eigentümergemeinschaften, Firmen und Privathaushalte im Stadtkreis Heilbronn – vom Mehrfamilienhaus bis zum Firmengelände.',
      },
      {
        q: 'Kann ich nur einzelne Leistungen buchen?',
        a: 'Ja. Wir stellen das Paket individuell zusammen – von der reinen Kehrwoche bis zur kompletten Objektbetreuung.',
      },
      {
        q: 'Springen Sie auch kurzfristig ein?',
        a: 'Ja, wir übernehmen die Arbeiten auch vertretungsweise, etwa bei Urlaub oder Krankheit Ihres Hausmeisters.',
      },
    ],
    photo: 'hausmeisterdienst',
    months: ALL_YEAR,
  },
  {
    slug: 'aussenreinigung',
    title: 'Außenreinigung & Kehrwoche',
    shortTitle: 'Außenreinigung',
    icon: 'BrushCleaning',
    teaser: 'Treppenhaus, Garage, Wege, Mülldienst – und die gute alte Kehrwoche.',
    seoTitle: 'Treppenhausreinigung & Kehrwoche Heilbronn',
    description:
      'Treppenhausreinigung, Kehrwoche, Garagen- und Tiefgaragenreinigung sowie Mülldienst in Heilbronn. Rundum sauber und gepflegt – Hausmeister-Service Becker.',
    lead: 'Mit unseren Spezialisten und den notwendigen Geräten – rundum sauber und gepflegt!',
    body: [
      'Oder brauchen Sie nur jemanden, der Ihre Kehrwoche übernimmt? Genau damit hat bei uns alles angefangen. Ob regelmäßige Treppenhausreinigung, gepflegte Wege oder der wöchentliche Mülldienst: Wir sorgen dafür, dass Ihr Objekt einen guten Eindruck macht – Woche für Woche.',
    ],
    listTitle: 'Leistungsspektrum im Überblick',
    list: [
      'Reinigung und Pflege der Allgemeinflächen',
      'Kehrwoche – innen und außen',
      'Stiegenhausreinigung, Reinigung und Pflege von Treppenhäusern',
      'Garagenreinigung, Reinigung von Kellerräumen und Tiefgaragen',
      'Säuberung der Wege und Zufahrten zum Grundstück',
      'Entfernung und Entsorgung von Laub',
      'Parkplatzpflege',
      'Mülldienst (Tonnen raus- und reinstellen, Standplätze sauber halten)',
    ],
    faq: [
      {
        q: 'Übernehmen Sie wirklich „nur“ die Kehrwoche?',
        a: 'Sehr gern – damit haben wir angefangen. Wir übernehmen die Kehrwoche für einzelne Parteien oder für das ganze Haus.',
      },
      {
        q: 'Wie oft wird gereinigt?',
        a: 'Ganz nach Bedarf: wöchentlich, 14-täglich oder in einem anderen Rhythmus, den wir gemeinsam festlegen.',
      },
    ],
    photo: 'aussenreinigung',
    months: ALL_YEAR,
  },
  {
    slug: 'winterdienst',
    title: 'Winterdienst',
    icon: 'Snowflake',
    teaser: 'Räumen & Streuen – rasch und zuverlässig, mit eigenem Maschinenpark.',
    seoTitle: 'Winterdienst Heilbronn – Räumen & Streuen',
    description:
      'Winterdienst in Heilbronn für Geschäfts- und Privatkunden: Schneeräumung und Streudienst mit eigenem Maschinenpark. Jetzt Winterdienst-Vertrag sichern!',
    lead: 'Wir erledigen den Winterdienst für Geschäfts- und Privatkunden. Die Schneeräumung und der Streudienst werden rasch und zuverlässig von unseren Mitarbeitern und unserem Maschinenpark durchgeführt.',
    body: [
      'Durch eine große Breite in unserem Technikbestand sind wir mühelos in der Lage, jeden Auftrag in beliebiger Größe zu bearbeiten.',
      'Die Schneeräumung erfolgt je nach Situation und Ort maschinell oder manuell. Der Streudienst wird gleichzeitig zur Schneeräumung erledigt, wobei Sie die Wahl zwischen dem Einsatz von Streusalz oder Streusplitt haben.',
      'Am Ende einer jeden Winterperiode kümmern wir uns selbstverständlich um die Beseitigung des ausgestreuten Streugutes.',
    ],
    listTitle: 'Unser Winterdienst',
    list: [
      'Schneeräumung maschinell oder von Hand – je nach Situation und Ort',
      'Streudienst gleichzeitig mit der Räumung',
      'Ihre Wahl: Streusalz oder Streusplitt',
      'Eigener Maschinenpark für Aufträge jeder Größe',
      'Für Geschäfts- und Privatkunden',
      'Beseitigung des Streuguts am Ende der Saison',
    ],
    faq: [
      {
        q: 'Wann sollte ich den Winterdienst beauftragen?',
        a: 'Am besten vor dem ersten Schnee – idealerweise bis Oktober. So ist Ihr Objekt vom ersten Frosttag an abgesichert.',
      },
      {
        q: 'Salz oder Splitt?',
        a: 'Sie haben die Wahl. Wir beraten Sie gern, was für Ihre Flächen sinnvoll ist, und kehren das Streugut am Ende des Winters wieder ab.',
      },
      {
        q: 'Wie groß darf die Fläche sein?',
        a: 'Durch unseren eigenen Maschinenpark bearbeiten wir Aufträge in beliebiger Größe – vom Hauseingang bis zum Firmenparkplatz.',
      },
    ],
    photo: 'winterdienst',
    months: [11, 12, 1, 2, 3],
  },
  {
    slug: 'gruenpflege',
    title: 'Grünpflege',
    icon: 'Leaf',
    teaser: 'Rasen, Hecken, Laub & Co. – keine Fläche zu groß, kein Garten zu klein.',
    seoTitle: 'Grünpflege & Gartenpflege Heilbronn',
    description:
      'Professionelle Grünanlagenpflege in Heilbronn: Rasenmähen, Heckenschnitt, Laubbeseitigung, Bewässerung und Bepflanzung – für Gärten, Firmenareale und Anlagen.',
    lead: 'Wir führen professionell und leistungsorientiert die Grünanlagenpflege durch.',
    body: [
      'Ob Parkanlagen, Badeseen, Sportplätze, private Gärten, Firmenareale oder Böschungen, Straßenränder, Bachufer und Obstgärten – uns ist keine Fläche zu groß und kein Garten zu klein.',
    ],
    listTitle: 'Was wir für Ihr Grün tun',
    list: [
      'Rasenmähen',
      'Beseitigung von Laub',
      'Unkrautentfernung',
      'Bewässerung',
      'Bepflanzungen',
      'Rückschnitt von Bäumen und Sträuchern',
    ],
    faq: [
      {
        q: 'Welche Flächen pflegen Sie?',
        a: 'Private Gärten, Wohnanlagen, Firmenareale, Parkanlagen, Sportplätze, Böschungen, Straßenränder, Bachufer und Obstgärten.',
      },
    ],
    photo: 'gruenpflege',
    months: [4, 5, 6, 7, 8, 9, 10],
  },
  {
    slug: 'seniorenbetreuung',
    title: 'Seniorenbetreuung',
    icon: 'HeartHandshake',
    teaser: 'Hilfe im Alltag, damit Sie möglichst lange selbstständig zu Hause bleiben.',
    seoTitle: 'Seniorenbetreuung & Alltagshilfe Heilbronn',
    description:
      'Seniorenbetreuung in Heilbronn: Einkaufen, Putz und Kehrwoche, Begleitung zu Behördengängen. Hilfe im Alltag, damit Sie lange selbstständig zu Hause bleiben.',
    lead: 'Wenn man älter wird, fällt vieles schwerer – doch von seinem „Zuhause“ will man sich noch nicht trennen. Wir unterstützen Sie in Ihrem Alltag!',
    body: [
      'Wir bieten Ihnen eine Alternative zum Alten- oder Pflegeheim durch häusliche Betreuung.',
      'Unsere Seniorenbetreuung richten wir ganz nach Ihren persönlichen Wünschen aus und helfen Ihnen so, möglichst lange selbstständig zu bleiben. Wir erledigen für Sie alle anfallenden alltäglichen Aufgaben, die für ältere Menschen meist nicht mehr zu bewältigen sind.',
      'Vielleicht reicht auch schon das Gefühl der Sicherheit, dass man im Falle eines Falles angemessen betreut und versorgt wird.',
    ],
    listTitle: 'Wir sind für Sie da',
    list: [
      'Wir gehen mit Ihnen einkaufen',
      'Hilfe beim wöchentlichen Putz',
      'Übernahme der Kehrwoche',
      'Begleitung bei Behördengängen',
      'Unterstützung beim Vertreten Ihrer Interessen',
      'Ganz nach Ihren persönlichen Wünschen',
    ],
    faq: [
      {
        q: 'Können auch Angehörige die Betreuung anfragen?',
        a: 'Natürlich. Viele Anfragen kommen von Kindern oder Enkeln. Wir besprechen gemeinsam, welche Unterstützung gewünscht ist.',
      },
    ],
    photo: 'seniorenbetreuung',
    months: ALL_YEAR,
  },
  {
    slug: 'entruempelung',
    title: 'Entrümpelung & Sperrmüll',
    shortTitle: 'Entrümpelung',
    icon: 'Trash2',
    teaser: 'Haushalts-, Wohnungs- und Geschäftsauflösungen – preiswert und umweltgerecht.',
    seoTitle: 'Entrümpelung & Haushaltsauflösung Heilbronn',
    description:
      'Entrümpelung in Heilbronn: Haushaltsauflösungen, Wohnungs- und Geschäftsauflösungen, Sperrmüllentsorgung. Preiswert, umweltgerecht, kostenloser Kostenvoranschlag.',
    lead: 'Das Haus oder die Wohnung wird verkauft und muss geräumt werden? Wir übernehmen für Sie Entrümpelungen – preiswert und umweltgerecht.',
    body: [
      'Wir übernehmen die komplette Räumung von Wohn- und Geschäftsräumen sowie die Reinigung nach Umzügen und nach handwerklicher Wohnungsinstandsetzung.',
      'Nach der Besichtigung erstellen wir Ihnen gerne einen kostenlosen und unverbindlichen Kostenvoranschlag.',
    ],
    listTitle: 'Unser Angebot',
    list: [
      'Haushaltsauflösungen',
      'Wohnungsauflösungen',
      'Geschäftsauflösungen',
      'Sperrmüllentsorgung',
      'Besenreine Übergabe & Endreinigung',
      'Kostenloser, unverbindlicher Kostenvoranschlag nach Besichtigung',
    ],
    photo: 'entruempelung',
    months: ALL_YEAR,
  },
  {
    slug: 'umzugshilfe',
    title: 'Umzugshilfe',
    icon: 'Truck',
    teaser: 'Vom Karton bis zum Küchenaufbau – inklusive Möbeldemontage.',
    seoTitle: 'Umzugshilfe Heilbronn – Möbelmontage & Transport',
    description:
      'Umzugshilfe in Heilbronn: Umzugskartons, Möbeltransport, Küchen-Ab- und Aufbau, Möbeldemontage, Ein- und Auspackservice, Altmöbelentsorgung und Endreinigung.',
    lead: 'Sie brauchen jemanden, der Ihren Umzug komplett organisiert? Wir sind schnell und zuverlässig und übernehmen für Sie alles – von der Beschaffung der Umzugskartons bis zur Hilfe beim Auspacken.',
    body: [
      'Wir möchten, dass Sie sich in Ihrer neuen Umgebung schon bald zu Hause fühlen. Mit unseren erfahrenen Monteuren führen wir auf Wunsch auch die Demontage von alten Möbelstücken durch.',
      'Und wenn Sie nur ein paar Möbel in Ihren Räumen umstellen wollen? Auch dafür sind wir da.',
    ],
    listTitle: 'Wir erledigen für Sie',
    list: [
      'Beschaffung von Umzugskartons',
      'Möbeltransporte',
      'Küchen-Ab- und Aufbau',
      'Möbeldemontage durch erfahrene Monteure',
      'Ein- und Auspackservice',
      'Altmöbelentsorgung',
      'Endreinigung',
    ],
    extra: [
      {
        type: 'checklist',
        title: 'Checkliste: Adresse ummelden',
        intro:
          'Vor dem Umzug daran denken: Haben Sie Behörden, Banken, Post und Telekom bereits die Änderung der Adresse bekannt gegeben? Mit unserer Checkliste haben Sie diese Aufgabe im Überblick:',
        groups: [
          { title: 'Behörden', items: ['Einwohnermeldeamt', 'Kfz-Zulassungsstelle', 'Finanzamt'] },
          { title: 'Stadtwerke & Versorger', items: ['Strom', 'Gas / Wasser', 'Heizung', 'Telefon & Internet'] },
          {
            title: 'Andere Institutionen',
            items: ['Schule / Kindergarten', 'Krankenkasse', 'Versicherungen', 'Bank', 'Rundfunkbeitrag (ehem. GEZ)', 'Post (Nachsendeauftrag)'],
          },
        ],
      },
    ],
    photo: 'umzugshilfe',
    months: ALL_YEAR,
  },
  {
    slug: 'wasser-brandschaden',
    title: 'Wasser- & Brandschäden',
    shortTitle: 'Wasser- & Brandschaden',
    icon: 'Droplets',
    teaser: 'Komplette Schadensanierung aus einer Hand – inkl. Abwicklung mit der Versicherung.',
    seoTitle: 'Wasserschaden & Brandschaden Heilbronn – Sanierung',
    description:
      'Wasserschaden oder Brandschaden in Heilbronn? Sofortmaßnahmen, Trocknung, Gutachten, komplette Sanierung und Abwicklung mit der Versicherung. Notfall: 0171 / 47 53 416.',
    lead: 'Wir bieten Ihnen komplette Schadensanierung aus einer Hand: von den Sofortmaßnahmen über Gutachten und Kostenvoranschläge bis zur kompletten Sanierung durch Handwerker und der Regulierung mit der Versicherung.',
    body: [
      'Bei der Wasser- und Brandschadensanierung geht es vor allem um Bau- und Maurerarbeiten, das Trocknen, die Geruchsbeseitigung von Räumen und Inventar sowie die Wiederherstellung von Werten und Wertgegenständen.',
      'Wir sind der richtige Ansprechpartner – von der Schadensmeldung bis zur kompletten Sanierung!',
    ],
    listTitle: 'Unsere Leistungen im Schadensfall',
    list: [
      'Sofortmaßnahmen zur Schadensbegrenzung',
      'Ursachenfeststellung',
      'Gutachten und Kostenvoranschläge',
      'Trocknung von Räumen und Bauteilen',
      'Geruchsbeseitigung von Räumen und Inventar',
      'Bau- und Maurerarbeiten, komplette Sanierung durch Handwerker',
      'Wiederherstellung von Werten und Wertgegenständen',
      'Komplette Abwicklung mit der Versicherung',
    ],
    extra: [
      {
        type: 'steps',
        title: 'So läuft es ab',
        intro: 'Von der Schadensmeldung bis zur fertigen Sanierung – ein Ansprechpartner für alles.',
        steps: [
          { title: 'Anruf', text: 'Sie melden den Schaden – im Notfall direkt mobil unter 0171 / 47 53 416.' },
          { title: 'Sofortmaßnahmen', text: 'Wir begrenzen den Schaden und stellen die Ursache fest.' },
          { title: 'Gutachten & Angebot', text: 'Dokumentation, Gutachten und Kostenvoranschlag für Sie und Ihre Versicherung.' },
          { title: 'Sanierung', text: 'Trocknung, Bau- und Maurerarbeiten, Geruchsbeseitigung – alles aus einer Hand.' },
          { title: 'Abwicklung', text: 'Wir regulieren den Schaden direkt mit der Versicherung.' },
        ],
      },
    ],
    faq: [
      {
        q: 'Was soll ich bei einem Wasserschaden als Erstes tun?',
        a: 'Wenn möglich die Wasserzufuhr abstellen, Strom in betroffenen Bereichen abschalten, Fotos machen und uns anrufen. Wir kümmern uns um die Sofortmaßnahmen.',
      },
      {
        q: 'Übernehmen Sie die Kommunikation mit der Versicherung?',
        a: 'Ja. Wir erstellen Gutachten und Kostenvoranschläge und wickeln den Schaden auf Wunsch komplett mit der Versicherung ab – das machen wir z. B. seit Jahren für die Stadtsiedlung Heilbronn.',
      },
    ],
    photo: 'wasser-brandschaden',
    months: ALL_YEAR,
    emergency: true,
  },
  {
    slug: 'schimmel',
    title: 'Schimmel',
    icon: 'Microscope',
    teaser: 'Begutachtung, Analyse und Sanierung – sachlich statt Panik.',
    seoTitle: 'Schimmel Heilbronn – Begutachtung & Sanierung',
    description:
      'Schimmel in der Wohnung? Vor-Ort-Besichtigung, Messungen, Laboranalyse und Schimmelsanierung in Heilbronn. Sachlich, gründlich, mit Bericht.',
    lead: 'Wenn man Schimmel in der Wohnung entdeckt, ist das nicht nur unschön, sondern für die meisten auch sehr beunruhigend. Man ist verunsichert, weiß nicht, was man tun oder lassen soll …',
    body: [
      'Soll man den Schimmel einfach wegmachen? Im Baumarkt eine Chemiekeule kaufen? Oder das Ganze so lange wie möglich ignorieren? Eines sollte man bei Schimmelbefall ganz sicher nicht tun: in Panik ausbrechen.',
      'Sicher, Schimmel in der Wohnung ist unerwünscht, und man muss in jedem Fall etwas dagegen tun. Andererseits gelten von den derzeit bekannten ca. 100.000 Schimmelpilzarten nur wenige als gesundheitsbeeinträchtigend für den gesunden Menschen. Trotzdem sollte man einen Befall nicht auf die leichte Schulter nehmen – denn wo sich ein Pilz wohlfühlt, gefällt es einem anderen sicherlich auch.',
      'Schimmel stört nicht nur Auge und Nase: Er kann bei entsprechender Kontaminierung zu gesundheitlichen Problemen führen (z. B. Atemwegserkrankungen, allergische Reaktionen), den Wert einer Wohnung oder eines Hauses zum Teil erheblich mindern und bei langfristigem, ungeklärtem Befall die Bausubstanz schädigen (z. B. durch einen unerkannten Wasserschaden). Gute Gründe, den Schimmel nicht zu ignorieren.',
    ],
    listTitle: 'Sie haben etwas entdeckt, das Sie für Schimmel halten? Hier setzen wir an:',
    list: [
      'Vor-Ort-Besichtigung',
      'Schimmel ja oder nein? (z. B. durch Schnelltest)',
      'Abklären von Lüftungsverhalten und baulichen Bedingungen',
      'Einmal-Messungen von Raum-/Wandtemperatur und Raum-/Wandfeuchte',
      'Langzeitmessung von Raumtemperatur und Raumluftfeuchte (1 Woche, ca. 2.000 Messpunkte)',
      'Probenentnahme bei unklarem Befund oder zur Spezifizierung des Pilzes – Untersuchung in einem unabhängigen Labor',
      'Berichterstellung inkl. Messdatenausdruck und Bilddokumentation',
    ],
    extra: [
      {
        type: 'text',
        title: 'Doch damit ist das Schimmelproblem noch nicht gelöst – deshalb gehen wir einen Schritt weiter',
        paragraphs: [
          'Schimmelbekämpfung · wenn notwendig und möglich Behebung oder Minderung baulicher Mängel · Streich- und Tapezierarbeiten oder Fliesenarbeiten · Tipps, wie man Schimmelbefall zukünftig vermeiden kann.',
        ],
      },
      {
        type: 'prices',
        title: 'Preise',
        // Die Preise stammen von der alten Website (Stand 08/2008).
        // Bitte aktualisieren und danach needsReview auf false setzen.
        needsReview: true,
        note: 'Alle Preise inkl. gesetzl. MwSt. (derzeit 19 %).',
        groups: [
          {
            title: 'Schimmelbeurteilung',
            rows: [
              {
                label: 'Vor-Ort-Besichtigung bis zu 3 Räume',
                detail: 'mit Einmal-Messung, Bilddokumentation und Berichterstellung (Beurteilung, Maßnahmen); mehr Räume auf Anfrage',
                price: '268,00 €',
              },
              {
                label: 'Besichtigung, Beratung und Kurzbeurteilung',
                detail: 'ohne Messungen, große Berichterstellung oder Bilddokumentation, inkl. Kurzbericht',
                price: '85,50 € / Std.',
              },
              {
                label: 'Langzeitmessung Raumtemperatur & -luftfeuchte',
                detail: 'zur Klärung evtl. Lüftungsfehler; ca. 1 Woche, 2.000 Messpunkte, inkl. Lieferung, Aufstellung und Abholung',
                price: '77,35 € / Gerät',
              },
              {
                label: 'Probenentnahme – eine Probe',
                detail: 'inkl. Versand an das Labor und Zusendung des Ergebnisses; Laboruntersuchung wird separat berechnet',
                price: '119,00 €',
              },
              { label: 'Jede weitere Probe', price: '23,80 €' },
            ],
          },
          {
            title: 'Schimmelbekämpfung / -sanierung',
            rows: [
              { label: 'Schimmelbekämpfung', price: '59,50 € / Facharbeiter-Std.' },
              {
                label: 'Behebung/Minderung baulicher Mängel',
                detail: 'Streich-, Tapezier- und Fliesenlegerarbeiten',
                price: '53,00 € / Facharbeiter-Std.',
              },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Ist jeder Schimmel gefährlich?',
        a: 'Nein. Von den ca. 100.000 bekannten Schimmelpilzarten gelten nur wenige als gesundheitsbeeinträchtigend für gesunde Menschen. Ignorieren sollte man einen Befall trotzdem nicht.',
      },
      {
        q: 'Woher weiß ich, ob falsches Lüften die Ursache ist?',
        a: 'Mit einer Langzeitmessung von Raumtemperatur und Luftfeuchte (ca. 1 Woche, rund 2.000 Messpunkte) lassen sich Lüftungsfehler und bauliche Ursachen gut unterscheiden.',
      },
    ],
    photo: 'schimmel',
    months: ALL_YEAR,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
