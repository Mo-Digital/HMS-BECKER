# Hausmeister-Service Becker – Website

Neue Website für **www.hms-becker.de**: statisch gebaut mit [Astro](https://astro.build) und Tailwind CSS.
Ergebnis ist ein Ordner `dist/` mit reinen HTML/CSS/JS-Dateien, den Sie per FTP auf jeden normalen Webspace laden.
Nur das Kontaktformular braucht PHP (`send.php`).

- Keine Cookies, kein Tracking, Schriften lokal: es wird **kein Cookie-Banner** benötigt
- Google Maps erst nach Klick
- 301-Weiterleitungen von allen alten Adressen (`index.htm`, `w.htm`, …)
- Lighthouse (Mobil): Performance 99 · Barrierefreiheit 100 · Best Practices 100 · SEO 100

---

## Inhalt

1. [Vor dem Livegang: offene Punkte](#1-vor-dem-livegang-offene-punkte)
2. [Einmalig einrichten](#2-einmalig-einrichten)
3. [Build erstellen](#3-build-erstellen)
4. [Per FTP hochladen](#4-per-ftp-hochladen)
5. [Texte ändern](#5-texte-ändern)
6. [Fotos & Maskottchen einsetzen](#6-fotos--maskottchen-einsetzen)
7. [Kontaktformular konfigurieren](#7-kontaktformular-konfigurieren)
8. [Weiterleitungen, HTTPS, Caching (.htaccess)](#8-weiterleitungen-https-caching-htaccess)
9. [Farben, Schriften, Logo](#9-farben-schriften-logo)
10. [Projektstruktur](#10-projektstruktur)

---

## 1. Vor dem Livegang: offene Punkte

Gelb markierte Hinweise **„⚠ Bitte ergänzen“** und gestrichelte Foto-Platzhalter sind auf der Seite sichtbar,
damit nichts vergessen wird. Bitte abarbeiten:

| # | Was | Wo |
|---|-----|----|
| 1 | **USt-IdNr.** eintragen (oder Abschnitt löschen) | `src/pages/impressum.astro` |
| 2 | Handwerkskammer / Handelsregister – nur falls zutreffend, sonst Abschnitte löschen | `src/pages/impressum.astro` |
| 3 | Satz zur **Verbraucherstreitbeilegung** prüfen | `src/pages/impressum.astro` |
| 4 | **Webhoster** (Name, Anschrift) + Auftragsverarbeitungsvertrag bestätigen | `src/pages/datenschutz.astro`, Abschnitt 3 |
| 5 | **Schimmel-Preise** sind von der alten Seite (Stand 08/2008) – aktualisieren, dann `needsReview: false` | `src/data/services.ts` (Leistung `schimmel`) |
| 6 | **Fotos** & **Maskottchen** einsetzen | siehe [Abschnitt 6](#6-fotos--maskottchen-einsetzen) |
| 7 | Wenn alles erledigt ist: `showPlaceholderLabels: false` setzen (blendet „Platzhalter“-Beschriftungen und die Beispiel-Referenz aus) | `src/data/site.ts` |
| 8 | Optional: genaue **Koordinaten** für Google (`geo`) | `src/data/site.ts` |
| 9 | Stellenanzeigen: `datePosted` aktuell halten (für Google Jobs) | `src/pages/karriere.astro` |

> **Rechtlicher Hinweis:** Impressum und Datenschutzerklärung sind sorgfältig erstellte Vorlagen, ersetzen aber keine
> Rechtsberatung. Bitte vor Veröffentlichung prüfen (lassen).

Alle offenen Stellen finden Sie auch per Suche nach `<Todo` und `needsReview` im Ordner `src/`.

**Inhaltliche Anpassungen gegenüber der alten Seite (bitte kurz prüfen):**
- Seniorenbetreuung: aus „häusliche Betreuung **und Pflege**“ wurde „häusliche Betreuung“. „Pflege“ klingt nach
  einem zugelassenen Pflegedienst, und das kann rechtlich heikel sein. Falls zutreffend, in `src/data/services.ts` wieder ergänzen.
- Winterdienst-Stelle: „auf 400-€-Basis“ heißt jetzt „Minijob“ (die 400-€-Grenze gibt es nicht mehr).
- „Sonstiges“ (Betreuungsvertrag) ist jetzt Teil von **Hausmeisterdienst** und der Leistungsübersicht.
- Das alte Stadtsiedlung-Logo („150 Jahre“) war veraltet und wurde nicht übernommen. Ein aktuelles Logo können Sie (mit Erlaubnis) ergänzen, siehe Abschnitt 6.

---

## 2. Einmalig einrichten

Benötigt wird **Node.js 20 oder neuer** (https://nodejs.org → „LTS“ installieren).

```bash
cd HMS-BECKER
npm install
```

Lokale Vorschau mit automatischem Neuladen bei Änderungen:

```bash
npm run dev
```

Dann im Browser http://localhost:4321 öffnen.

---

## 3. Build erstellen

```bash
npm run build
```

Danach liegt die fertige Website im Ordner **`dist/`**. Vorschau des fertigen Builds:

```bash
npm run preview
```

(Das Kontaktformular funktioniert in der Vorschau nicht, weil dort kein PHP läuft. Auf dem Webspace funktioniert es.)

---

## 4. Per FTP hochladen

1. FTP-Programm öffnen, z. B. **FileZilla** (kostenlos). Zugangsdaten stehen beim Webhoster.
2. **Versteckte Dateien anzeigen** einschalten (FileZilla: Menü *Server → Anzeigen versteckter Dateien erzwingen*), sonst wird `.htaccess` nicht übertragen!
3. Auf dem Server in den Hauptordner der Domain wechseln (oft `/`, `/html` oder `/htdocs`).
4. **Alte Website sichern**: alte Dateien herunterladen und in einen Ordner `_alt` kopieren (lokal).
5. Alte Dateien `*.htm`, `img/`, `mystyle.css` auf dem Server löschen. Die Weiterleitungen funktionieren trotzdem, denn sie stehen in der `.htaccess`.
6. Den **Inhalt** von `dist/` (nicht den Ordner selbst) in den Hauptordner hochladen.
7. Testen:
   - https://www.hms-becker.de
   - https://www.hms-becker.de/w.htm → muss auf *Winterdienst* weiterleiten
   - Kontaktformular einmal absenden → Mail muss bei info@hms-becker.de ankommen
8. Optional: In der **Google Search Console** die Sitemap `https://www.hms-becker.de/sitemap-index.xml` einreichen.

Bei späteren Änderungen: `npm run build` und `dist/` erneut hochladen. Alte Dateien in `/_astro/` dürfen
überschrieben bzw. gelöscht werden.

---

## 5. Texte ändern

Fast alle Texte liegen in **Daten-Dateien** im Ordner `src/data/`. Sie öffnen sie mit einem beliebigen Texteditor
(empfohlen: [VS Code](https://code.visualstudio.com)). Text zwischen den Anführungszeichen ändern, speichern, neu bauen.

| Datei | Inhalt |
|------|--------|
| `src/data/site.ts` | **Telefon, Fax, Mobil, E-Mail, Adresse**, Inhaberin, Menü, Schwesterfirma |
| `src/data/services.ts` | Alle **9 Leistungen**: Texte, Stichpunkte, FAQ, Preise, SEO-Titel. Jede Leistung bekommt automatisch eine Unterseite |
| `src/data/team.ts` | **Team**: Namen, Rollen, Sprachen, E-Mail |
| `src/data/jobs.ts` | **Stellenangebote** (Liste leer → Hinweis auf Initiativbewerbung) |
| `src/data/references.ts` | **Referenzen** (weitere einfach als neuen Block anhängen) |
| `src/data/season.ts` | **Jahresplan** (welche Leistung in welchem Monat), Monats-Tipps, **Saison-Banner** |

Seitenspezifische Texte (z. B. Startseite-Überschrift, Über uns, Impressum) stehen direkt in `src/pages/*.astro`.
Dort einfach den sichtbaren deutschen Text ändern; Code-Teile in `{ … }` bitte stehen lassen.

**Neue Leistung hinzufügen:** In `src/data/services.ts` einen Block kopieren, `slug` (URL) und Texte anpassen.
Icon-Namen finden Sie unter https://lucide.dev/icons. Den Namen in PascalCase schreiben, z. B. `Hammer`, `PaintRoller`.

**Saison-Banner:** In `src/data/season.ts` → `seasonBanners`. `months: [10, 11, 12, 1, 2]` heißt, der Winterdienst-Banner
erscheint von Oktober bis Februar automatisch. Der Banner richtet sich nach dem Datum beim Besucher, ein neuer Build ist dafür nicht nötig.

**Kehrwoche-Schild:** Die Kalenderwoche wird im Browser des Besuchers live berechnet. Texte stehen in `src/components/KehrwocheSign.astro`.

---

## 6. Fotos & Maskottchen einsetzen

Bilder einfach **mit dem richtigen Dateinamen** in den Ordner **`src/assets/fotos/`** legen und neu bauen.
Die Bilder werden beim Build automatisch verkleinert, in **AVIF/WebP** umgewandelt und mit Lazy Loading eingebunden.
Erlaubt: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`. Am besten Querformat, mindestens 1600 px breit.

| Dateiname (ohne Endung) | Wo |
|---|---|
| `fuhrpark` | Startseite (Maschinenpark) + Über uns (Breitbild) |
| `hausmeisterdienst`, `aussenreinigung`, `winterdienst`, `gruenpflege`, `seniorenbetreuung`, `entruempelung`, `umzugshilfe`, `wasser-brandschaden`, `schimmel` | jeweilige Leistungsseite |
| `uwe-becker`, `marina-mesch`, `ralf-rockenberger`, `antje-pfeifer`, `olga-raider` | Team (Über uns), Format 4:3 |
| `maskottchen` (**PNG mit transparentem Hintergrund**, mind. 600 px hoch) | ersetzt die gezeichnete Platzhalter-Figur überall (Footer, Startseite, Über uns) |
| `logo-stadtsiedlung` (nur mit Erlaubnis) | Referenzen; zusätzlich in `src/data/references.ts` die Zeile `logo:` einkommentieren |

Beispiel: `src/assets/fotos/fuhrpark.jpg` → Platzhalter auf Startseite und „Über uns“ wird zum Foto.

**Alt-Texte** (Bildbeschreibungen für Barrierefreiheit/Google) sind bereits gesetzt und passen zum vorgesehenen Motiv.

**Open-Graph-Bild** (Vorschau beim Teilen auf WhatsApp/Facebook): `public/og-image.png`. Neu erzeugen nach Logo-/Textänderung:
`npx playwright install chromium` (einmalig), dann `npm run og`. **Favicons** neu aus `public/favicon.svg`: `npm run icons`.

---

## 7. Kontaktformular konfigurieren

Das Formular sendet an **`public/send.php`** (landet beim Build in `dist/send.php`).
Oben in der Datei steht ein Konfigurationsblock:

```php
$CONFIG = [
    'to'          => 'info@hms-becker.de',        // Empfänger
    'from'        => 'webformular@hms-becker.de', // Absender – MUSS zur eigenen Domain gehören
    'from_name'   => 'Website hms-becker.de',
    'subject'     => 'Neue Anfrage über hms-becker.de',
    'min_seconds' => 4,   // Spamschutz: Mindest-Ausfüllzeit
    'rate_limit'  => 5,   // max. Anfragen pro IP und Stunde (0 = aus)
    ...
];
```

- **Voraussetzung:** PHP 7.4+ auf dem Webspace und die PHP-Funktion `mail()` (bei praktisch allen Hostern vorhanden).
- **Spamschutz:** unsichtbares Honeypot-Feld, Mindest-Ausfüllzeit, Begrenzung pro IP, maximal 3 Links pro Nachricht. Es gibt kein Captcha und es werden keine Daten an Dritte geschickt.
- **Validierung:** Name, Nachricht und Datenschutz-Häkchen sind Pflicht, dazu **Telefon oder E-Mail**. Geprüft wird im Browser und noch einmal auf dem Server.
- Mit „Antworten“ im Mailprogramm schreiben Sie direkt an den Absender (Reply-To).
- Funktioniert auch ohne JavaScript; dann erscheint `/danke/` bzw. `/kontakt/fehler/`.
- Leistung vorauswählen per Link: `/kontakt/?leistung=winterdienst#anfrage`

**Mails kommen nicht an?**
1. Spam-Ordner prüfen.
2. Die `from`-Adresse muss eine echte Adresse Ihrer Domain sein (ggf. beim Hoster anlegen).
3. Manche Hoster erlauben den Parameter `-f` nicht. Dann in `send.php` in der Zeile mit `mail(` den letzten Parameter `, '-f' . $CONFIG['from']` entfernen.

---

## 8. Weiterleitungen, HTTPS, Caching (.htaccess)

`public/.htaccess` (landet in `dist/.htaccess`) enthält:

- **301-Weiterleitungen** aller alten Seiten:

  | alt | neu |
  |---|---|
  | `index.htm` | `/` |
  | `ueberuns.htm`, `firma.htm` | `/ueber-uns/` |
  | `leistungen.htm` | `/leistungen/` |
  | `a.htm` | `/leistungen/aussenreinigung/` |
  | `w.htm` | `/leistungen/winterdienst/` |
  | `g.htm` | `/leistungen/gruenpflege/` |
  | `s.htm` | `/leistungen/seniorenbetreuung/` |
  | `h.htm` | `/leistungen/entruempelung/` |
  | `u.htm` | `/leistungen/umzugshilfe/` |
  | `wb.htm` | `/leistungen/wasser-brandschaden/` |
  | `schimmel.htm` | `/leistungen/schimmel/` |
  | `sonstiges.htm` | `/leistungen/hausmeisterdienst/` |
  | `referenzen.htm` | `/referenzen/` |
  | `stellen.htm` | `/karriere/` |
  | `kontakt.htm`, `impressum.htm`, `datenschutz.htm` | `/kontakt/`, `/impressum/`, `/datenschutz/` |
  | `img/*`, `mystyle.css` | `/` |

- **HTTPS + www erzwingen** (`http://hms-becker.de` → `https://www.hms-becker.de`).
  Wenn der Hoster kein SSL hat oder eine Endlos-Weiterleitung entsteht: die drei Zeilen unter „HTTPS + www erzwingen“
  mit `#` auskommentieren.
- Sicherheits-Header, Komprimierung, Browser-Caching, eigene 404-Seite.

Getestet mit Apache 2.4. Bei Hostern mit nginx (selten) müssen die Weiterleitungen dort eingerichtet werden.

---

## 9. Farben, Schriften, Logo

- **Farben:** `src/styles/global.css`, ganz oben (`--hms-blue`, `--hms-navy`, `--hms-ice`, `--hms-lavender`, `--hms-signal`).
  Darunter folgen die Rollen für hell und dunkel (Dark Mode). Der Dark Mode folgt der Systemeinstellung und lässt sich oben rechts umschalten.
  Für Buttons wird das Rot-Orange minimal abgedunkelt (`--c-signal-btn: #c9431c`), damit weiße Schrift gut lesbar bleibt (Kontrast nach WCAG).
- **Schriften:** Archivo (Überschriften) und Inter (Text), als npm-Pakete lokal eingebunden. Es gibt keine Verbindung zu Google Fonts.
- **Logo:** `src/components/Logo.astro`. Bildmarke (Dach + Kehr-Schwung) und Schriftzug „Becker“ als Vektor
  (auf Basis der Schrift *Kaushan Script*, SIL Open Font License). Das Favicon liegt in `public/favicon.svg`.

---

## 10. Projektstruktur

```
public/              → wird 1:1 nach dist/ kopiert (.htaccess, send.php, robots.txt, Icons, og-image.png)
scripts/             → Hilfsskripte (Icons, Open-Graph-Bild)
src/
  assets/fotos/      → HIER Fotos ablegen (siehe Abschnitt 6)
  components/        → Bausteine (Header, Footer, Logo, Kehrwoche-Schild, Jahresplan, Formular …)
  data/              → HIER Texte & Daten ändern (siehe Abschnitt 5)
  layouts/Base.astro → Grundgerüst jeder Seite (SEO, Schema.org, Schriften)
  pages/             → eine Datei = eine Seite (URL = Dateiname)
  scripts/           → kleines JavaScript (Scroll-Animationen, Zähler)
  styles/global.css  → Farben & Grundstil
astro.config.mjs     → Domain (für Sitemap/Canonical), Build-Einstellungen
```

**SEO:** Jede Seite hat einen eigenen Titel und eine Meta-Beschreibung. Dazu kommen LocalBusiness-Schema (JSON-LD) auf allen Seiten,
Service-, FAQ- und Brotkrumen-Schema auf den Leistungsseiten, JobPosting-Schema auf der Karriereseite, `sitemap-index.xml`
und `robots.txt` (beides automatisch).

**Barrierefreiheit:** „Zum Inhalt springen“-Link, volle Tastaturbedienung (auch das mobile Menü und das Kehrwoche-Schild),
sichtbarer Fokusrahmen, Kontraste nach WCAG AA. Animationen sind abgeschaltet, wenn „Bewegung reduzieren“ im System aktiv ist.
