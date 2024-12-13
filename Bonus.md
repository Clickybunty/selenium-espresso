# Bonusaufgaben: E2E-Test für die Taschenrechner-App (Freiwillig)

Diese Aufgaben sind kompplettfreiwillig und für alle gedacht die noch etwas mehr übung in selenium brauchen.

## Ziel:

Erweitere die Tests für die Taschenrechner-App unter `https://seleniumbase.io/apps/calculator` mit anspruchsvolleren Szenarien, um die Robustheit und Genauigkeit der App zu prüfen.

---

## Bonusaufgabe 1: Validierung der Rechenpriorität

### Ziel:

Testen ob der Taschenrechner die mathematische Priorität der Operatoren korrekt umsetzt (punkt vor strich rechnung).

### Aufgabe:

1. Berechne eine Gleichung, die mehrere Operatoren kombiniert, z. B. `2 + 3 × 4 - 6 ÷ 2`.
2. Überprüfe, ob der Taschenrechner die Prioritäten korrekt einhält.
   - Erwartetes Ergebnis: `2 + (3 × 4) - (6 ÷ 2) = 12`.
3. Wiederhole die Berechnung mit Klammern, z. B. `(2 + 3) × (4 - 6 ÷ 2)`:
   - Erwartetes Ergebnis: `(5) × (1) = 5`.

### Erwartetes Ergebnis:

- Ohne Klammern: `12`.
- Mit Klammern: `5`.

---

## Bonusaufgabe 2: Test auf numerische Präzision und Rundung

### Ziel:

Validierung der Genauigkeit des Rechners bei sehr kleinen Dezimalzahlen und Rundungen.

### Aufgabe:

1. Führe folgende Berechnungen durch:
   - `0.1 + 0.2`.
   - Erwartetes Ergebnis: `0.3` (oft ein Problem wegen Gleitkommaungenauigkeit).
2. Berechne:
   - `1 ÷ 3` und prüfe, ob die Ausgabe eine sinnvolle Rundung oder Darstellung (`0.333333...`) bietet.
3. Kettenberechnung:
   - `0.1 + 0.2 - 0.3`.
   - Erwartetes Ergebnis: `0` (aber Gleitkommafehler könnten zu `-5.551115e-17` führen).

### Erwartetes Ergebnis:

- Die Ergebnisse sollten genau sein oder eine sinnvolle Rundung darstellen.

---

## Optionale Herausforderung: Maximal mögliche Eingabelänge

### Ziel:

Überprüfung, wie der Rechner mit sehr langen Eingaben umgeht.

### Aufgabe:

1. Gib eine sehr lange Zahl ein, z. B. `12345678901234567890`.
2. Addiere eine weitere lange Zahl, z. B. `98765432109876543210`.
3. Überprüfe, ob der Taschenrechner:
   - Das Ergebnis korrekt berechnet.
   - Eine Fehlermeldung anzeigt, wenn die Eingabelänge überschritten wird.



###   12 345 678 901 234 567 890
### +
###   98 765 432 109 876 543 210
### =
###  111 111 110 011 111 111 100
                                    