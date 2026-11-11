<?php
/**
 * Kontaktformular-Versand für hms-becker.de
 * ------------------------------------------------------------------
 * KONFIGURATION – nur diesen Block anpassen:
 */
$CONFIG = [
    // Empfänger der Anfragen
    'to'          => 'info@hms-becker.de',
    // Absender-Adresse (muss zu Ihrer Domain gehören, sonst landen Mails im Spam)
    'from'        => 'webformular@hms-becker.de',
    'from_name'   => 'Website hms-becker.de',
    // Betreffzeile (die gewählte Leistung wird angehängt)
    'subject'     => 'Neue Anfrage über hms-becker.de',
    // Mindestzeit in Sekunden zwischen Seitenaufruf und Absenden (Bots sind schneller)
    'min_seconds' => 4,
    // Max. Anfragen pro IP-Adresse und Stunde (0 = aus)
    'rate_limit'  => 5,
    // Seiten für Weiterleitung, falls JavaScript im Browser aus ist
    'ok_page'     => '/danke/',
    'error_page'  => '/kontakt/fehler/',
];
/* ------------------------------------------------------------------ */

date_default_timezone_set('Europe/Berlin');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: same-origin');

$wantsJson = isset($_SERVER['HTTP_ACCEPT']) && stripos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false;

function respond(bool $ok, string $message, int $code = 200): void
{
    global $wantsJson, $CONFIG;
    if ($wantsJson) {
        http_response_code($code);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
    } else {
        header('Location: ' . ($ok ? $CONFIG['ok_page'] : $CONFIG['error_page']), true, 303);
    }
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, 'Ungültige Anfrage.', 405);
}

/** Text bereinigen: Steuerzeichen entfernen, Länge begrenzen */
function clean(string $key, int $max, bool $multiline = false): string
{
    $v = isset($_POST[$key]) && is_string($_POST[$key]) ? trim($_POST[$key]) : '';
    $v = $multiline
        ? preg_replace('/[^\P{C}\n\t]/u', '', str_replace("\r\n", "\n", $v))
        : preg_replace('/[\p{C}]/u', '', $v);
    return mb_substr((string) $v, 0, $max, 'UTF-8');
}

// --- 1. Spamschutz ----------------------------------------------------------
// Honeypot: Menschen sehen das Feld nicht. Ist es ausgefüllt -> Bot.
if (!empty($_POST['website'])) {
    respond(true, 'Danke.'); // Bot nichts merken lassen
}
// Zeitprüfung (nur, wenn das Feld per JavaScript gesetzt wurde)
$t = isset($_POST['t']) ? (int) $_POST['t'] : 0;
if ($t > 0 && (time() - $t) < $CONFIG['min_seconds']) {
    respond(false, 'Bitte versuchen Sie es in ein paar Sekunden erneut.', 429);
}
// Einfache Begrenzung pro IP
if ($CONFIG['rate_limit'] > 0) {
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'x';
    $file = sys_get_temp_dir() . '/hms_rl_' . hash('sha256', $ip . __FILE__);
    $hits = [];
    if (is_readable($file)) {
        $hits = array_filter(array_map('intval', explode(',', (string) @file_get_contents($file))), fn($h) => $h > time() - 3600);
    }
    if (count($hits) >= $CONFIG['rate_limit']) {
        respond(false, 'Zu viele Anfragen. Bitte rufen Sie uns an.', 429);
    }
    $hits[] = time();
    @file_put_contents($file, implode(',', $hits), LOCK_EX);
}

// --- 2. Validierung ---------------------------------------------------------
$name    = clean('name', 120);
$phone   = clean('phone', 40);
$email   = clean('email', 160);
$service = clean('service', 80);
$message = clean('message', 5000, true);
$privacy = !empty($_POST['privacy']);

$errors = [];
if (mb_strlen($name) < 2)                                   $errors[] = 'Name fehlt.';
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'E-Mail-Adresse ist ungültig.';
if ($email === '' && strlen(preg_replace('/\D/', '', $phone)) < 5) $errors[] = 'Bitte Telefon oder E-Mail angeben.';
if ($phone !== '' && !preg_match('/^[0-9 +()\/.\-]{5,40}$/', $phone)) $errors[] = 'Telefonnummer ist ungültig.';
if (mb_strlen($message) < 5)                                $errors[] = 'Nachricht fehlt.';
if (!$privacy)                                              $errors[] = 'Zustimmung zum Datenschutz fehlt.';
// Link-Spam abwehren
if (preg_match_all('#https?://#i', $message) > 3)           $errors[] = 'Bitte weniger Links verwenden.';

if ($errors) {
    respond(false, implode(' ', $errors), 422);
}

// --- 3. Versand -------------------------------------------------------------
$subject = $CONFIG['subject'] . ($service !== '' ? ' – ' . $service : '');
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$body  = "Neue Anfrage über das Kontaktformular\n";
$body .= str_repeat('=', 40) . "\n\n";
$body .= "Name:     {$name}\n";
$body .= "Telefon:  " . ($phone ?: '–') . "\n";
$body .= "E-Mail:   " . ($email ?: '–') . "\n";
$body .= "Leistung: " . ($service ?: '–') . "\n\n";
$body .= "Nachricht:\n{$message}\n\n";
$body .= str_repeat('-', 40) . "\n";
$body .= 'Gesendet am ' . date('d.m.Y \u\m H:i') . " Uhr\n";
$body .= "Datenschutz-Zustimmung: ja\n";

$fromName = '=?UTF-8?B?' . base64_encode($CONFIG['from_name']) . '?=';
$headers  = [
    'From: ' . $fromName . ' <' . $CONFIG['from'] . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: hms-becker.de',
];
// Antworten gehen direkt an den Absender (nur bei gültiger Adresse – kein Header-Injection-Risiko)
if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL) && !preg_match('/[\r\n]/', $email)) {
    $headers[] = 'Reply-To: ' . $email;
}

$sent = @mail($CONFIG['to'], $encodedSubject, $body, implode("\r\n", $headers), '-f' . $CONFIG['from']);

if (!$sent) {
    respond(false, 'Der Server konnte die Nachricht nicht versenden.', 500);
}
respond(true, 'Vielen Dank! Wir melden uns schnellstmöglich.');
