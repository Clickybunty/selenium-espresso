Zum Hauptinhalt springen
Google Classroom
Classroom
24-06-ON
Startbildschirm
Kalender
Als Schüler/Student eingeschrieben
Zu erledigen
2
24-06-ON
Archivierte Kurse
Einstellungen
Folien: Selenium in Node.js | Wichtige Funktionen und Methoden für E2E-Tests
Jacob Menge
•
09:23

Selenium_NodeJS_Wichtige_Methoden.md
Text
Kurskommentare

Kurskommentar hinzufügen…

## Folien: Selenium in Node.js | Wichtige Funktionen und Methoden für E2E-Tests

marp: true
theme: default
paginate: true

---

# Selenium in Node.js: Funktionen und Methoden

**Selenium in Node.js: Wichtige Funktionen und Methoden für E2E-Tests**

---

## Einführung

Fokus dieser Folien:

- **Grundlegende Methoden**, die für E2E-Tests notwendig sind.
- **Weitere nützliche Methoden** und deren Anwendung in Tests.

---

## 1. WebDriver erstellen

### Zweck:

Startet den Browser und bildet die Grundlage für alle weiteren Aktionen.

### Beispiel:

```javascript
const { Builder } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();
```

- **Warum wichtig?** Ohne WebDriver können keine Testaktionen ausgeführt werden.

---

## 2. URL öffnen: `.get()`

### Zweck:

Lädt die Webanwendung, die getestet werden soll.

### Beispiel:

```javascript
await driver.get("https://example.com");
```

- **Relevanz für E2E-Tests:** Startet den Testfall und initialisiert die Umgebung.

---

## 3. Element finden: `.findElement()`

### Zweck:

Sucht ein spezifisches Element auf der Seite für Interaktionen oder Überprüfungen.

### Beispiel:

```javascript
const { By } = require("selenium-webdriver");
const element = await driver.findElement(By.id("username"));
```

- **Relevanz für E2E-Tests:**
  - Findet Eingabefelder, Buttons oder andere Elemente.
  - Grundlage für Interaktionen und Validierungen.

---

## 4. Text eingeben: `.sendKeys()`

### Zweck:

Simuliert Benutzereingaben in Formularfeldern.

### Beispiel:

```javascript
await element.sendKeys("my_username");
```

- **Relevanz für E2E-Tests:** Testet Benutzerinteraktionen wie das Ausfüllen von Formularen.

---

## 5. Klicken auf ein Element: `.click()`

### Zweck:

Führt einen Klick auf Buttons, Links oder andere interaktive Elemente aus.

### Beispiel:

```javascript
const button = await driver.findElement(By.css(".submit"));
await button.click();
```

- **Relevanz für E2E-Tests:** Simuliert Nutzeraktionen wie das Absenden von Formularen.

---

## 6. Text auslesen: `.getText()`

### Zweck:

Liest sichtbaren Text eines Elements aus, um Ergebnisse zu validieren.

### Beispiel:

```javascript
const message = await driver.findElement(By.id("welcomeMessage")).getText();
console.log(message);
```

- **Relevanz für E2E-Tests:**
  - Verifiziert, ob erwartete Inhalte angezeigt werden.
  - Validiert Erfolgsmeldungen oder Fehlertexte.

---

## Weitere nützliche Methoden

### 7. Warten auf Elemente: `.wait()`

### Zweck:

Wartet, bis ein Element sichtbar, anklickbar oder verfügbar ist.

### Beispiel:

```javascript
const { until } = require("selenium-webdriver");
await driver.wait(until.elementLocated(By.id("username")), 5000);
```

- **Relevanz für E2E-Tests:**
  - Vermeidet Timing-Probleme bei asynchronem Laden von Inhalten.

---

### 8. Screenshots erstellen: `.takeScreenshot()`

### Zweck:

Speichert den aktuellen Zustand der Seite zur Fehlersuche.

### Beispiel:

```javascript
const fs = require("fs");
const screenshot = await driver.takeScreenshot();
fs.writeFileSync("screenshot.png", screenshot, "base64");
```

- **Relevanz für E2E-Tests:**
  - Dokumentiert Fehler oder unerwartetes Verhalten.

---

### 9. Fenster steuern: `.switchTo()`

### Zweck:

Wechselt zwischen Fenstern, Tabs oder Frames.

### Beispiel:

```javascript
const handles = await driver.getAllWindowHandles();
await driver.switchTo().window(handles[1]);
```

- **Relevanz für E2E-Tests:**
  - Testet Pop-ups, Dialoge oder Tabs.

---

### 10. Seite schließen: `.quit()`

### Zweck:

Beendet die Browser-Sitzung.

### Beispiel:

```javascript
await driver.quit();
```

- **Relevanz für E2E-Tests:**
  - Schließt den Test ordentlich ab.

---

## Wichtige Assertion-Methoden in Node.js

### 1. `assert.strictEqual(actual, expected)`

### Zweck:

Vergleicht zwei Werte auf strikte Gleichheit.

### Beispiel:

```javascript
const result = "8";
assert.strictEqual(result, "8", "Die Werte sind nicht gleich!");
```

- **Relevanz für E2E-Tests:** Verifiziert Ergebnisse wie Berechnungen oder Texte.

---

### 2. `assert.ok(value)`

### Zweck:

Prüft, ob ein Wert wahr ist.

### Beispiel:

```javascript
const isVisible = true;
assert.ok(isVisible, "Das Element ist nicht sichtbar!");
```

- **Relevanz für E2E-Tests:** Validiert Bedingungen wie Sichtbarkeit von Elementen.

---

### 3. `assert.notStrictEqual(actual, expected)`

### Zweck:

Prüft, ob zwei Werte nicht gleich sind.

### Beispiel:

```javascript
const result = "8";
assert.notStrictEqual(result, "9", "Die Werte sind gleich!");
```

- **Relevanz für E2E-Tests:** Sicherstellt, dass unerwartete Werte ausgeschlossen werden.

---

### 4. `assert.deepStrictEqual(actual, expected)`

### Zweck:

Vergleicht komplexe Objekte oder Arrays auf strikte Gleichheit.

### Beispiel:

```javascript
const actual = { a: 1, b: 2 };
const expected = { a: 1, b: 2 };
assert.deepStrictEqual(actual, expected, "Die Objekte sind nicht gleich!");
```

- **Relevanz für E2E-Tests:** Validiert komplexe Datenstrukturen.

---

## Zusammenfassung

- **Grundlegende Methoden:**
  - WebDriver erstellen, URL öffnen, Elemente finden, klicken, Text eingeben.
- **Erweiterte Methoden:**
  - Screenshots, Warten auf Elemente, Fenster steuern.
- **Assertion-Methoden:**
  - `assert.strictEqual`, `assert.ok`, `assert.notStrictEqual`, `assert.deepStrictEqual`.

---

## Fragen?

Selenium_NodeJS_Wichtige_Methoden.md
"Selenium_NodeJS_Wichtige_Methoden.md" wird angezeigt.
