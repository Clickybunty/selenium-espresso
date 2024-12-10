// Aufgabe 1:
//  Hauptüberschrift finden
//   Beschreibung:
//    Die Funktion
//     soll die Hauptüberschrift (<h1>)
//      der Seite mit dem Text Demo Page finden.
//       </h1>Ergänze den XPath,
//        um diese Überschrift anzusteuern.

const { Builder, By } = require("selenium-webdriver");

async function oneBigHeader() {
  
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://seleniumbase.io/demo_page");

    console.log("Aufgabe 1: Hauptüberschrift finden");
    const header = await driver.findElement(
      By.xpath(`//*[@id="tbodyId"]/tr[1]/td[1]/h1`)
    ); // Ergänze den XPath
    console.log("Gefundene Überschrift:", await header.getText());

    // Aufgabe 2:
    //  Dropdown-Option auswählen (20 Punkte)
    //   Beschreibung:
    //    Die Funktion soll die Maus über das Dropdown-Element bewegen und
    //     die Option Link One auswählen.
    //      Ergänze den XPath,
    //       um den Dropdown-Button und die Option anzusteuern.

    console.log("Aufgabe 2: Dropdown-Menü");
    const dropdownButton = await driver.findElement(
      By.xpath(`//*[@id="myDropdown"]`)
    ); // Ergänze den XPath
    const actions = driver.actions({ async: true });
    await actions.move({ origin: dropdownButton }).perform();

    const dropdownOption = await driver.findElement(
      By.xpath(`//*[@id="dropOption1"]`)
    ); // Ergänze den XPath
    await dropdownOption.click();
    console.log("Dropdown-Option 'Link One' ausgewählt.");

    // Aufgabe 3:
    //  Textfeld ausfüllen (20 Punkte)
    //   Beschreibung:
    //    Die Funktion soll ein Textfeld finden und
    //     den Text Automatisierter Test eingeben.
    //      Ergänze den XPath,
    //       um das Textfeld mit der ID myTextInput zu finden.

    console.log("Aufgabe 3: Textfeld auswählen");
    const textField = await driver.findElement(
      By.xpath(`//*[@id="myTextInput"]`)
    ); // Ergänze den XPath
    await textField.sendKeys("Automatisierter Test");
    console.log("Textfeld mit Text gefüllt.");

    // Aufgabe 4:
    //  Button klicken (20 Punkte)
    //   Beschreibung:
    //    Die Funktion soll einen grünen Button
    //     mit dem Text Click Me (Green) finden und klicken.
    //      Ergänze den XPath,
    //       um den Button anzusteuern.

    console.log("Aufgabe 4: Button klicken");
    const button = await driver.findElement(By.xpath(`//*[@id="myButton"]`)); // Ergänze den XPath
    await button.click();
    console.log("Button geklickt.");

    // Aufgabe 5:
    //  Checkboxen auswählen (20 Punkte)
    //   Beschreibung:
    //    Die Funktion soll alle Checkboxen auf der Seite auswählen.
    //     Ergänze den XPath,
    //      um alle Checkbox-Elemente auf der Seite zu finden.

    console.log("Aufgabe 5: Checkboxen auswählen");
    const checkboxes = await driver.findElements(
      By.xpath(`//*[starts-with(@id, "checkBox")]`)
    ); // Ergänze den XPath
    for (const checkbox of checkboxes) {
      if (!(await checkbox.isSelected())) {
        await checkbox.click();
      }
    }
    console.log("Alle Checkboxen ausgewählt.");

    // Zusatzaufgaben (6-8)
    //  Aufgabe 6:
    //   Slider steuern
    //    Beschreibung:
    //     Die Funktion soll den Slider auf den Wert 75 setzen.
    //      Ergänze den XPath, um den Slider zu finden.

    console.log("Aufgabe 6: Slider steuern");
    const slider = await driver.findElement(By.xpath(`//*[@id="mySlider"]`)); // Ergänze den XPath
    await driver.executeScript("arguments[0].value = 75;", slider);
    console.log("Slider auf Wert 75 gesetzt.");

    //  Aufgabe 7:
    //   Progress Bar Label finden
    //    Beschreibung:
    //     Die Funktion soll das Label für die Progress Bar finden und
    //      den angezeigten Text ausgeben.
    //       Ergänze den XPath,
    //        um das Label mit der ID progressLabel zu finden.

    console.log("Aufgabe 7: Progress Bar");
    const progressBarLabel = await driver.findElement(
      By.xpath(`//*[@id="progressLabel"]`)
    ); // Ergänze den XPath
    console.log("Label gefunden:", await progressBarLabel.getText());

    //  Aufgabe 8: Link finden
    //   Beschreibung:
    //    Die Funktion soll einen Link mit dem Text SeleniumBase on GitHub finden und
    //     die URL ausgeben.
    //      Ergänze den XPath,
    //       um den Link anzusteuern.

    console.log("Aufgabe 8: Links finden");
    const link = await driver.findElement(By.xpath(`//*[@id="myLink2"]`)); // Ergänze den XPath
    console.log("Gefundener Link:", await link.getAttribute("href"));

    //     Fehlerbehandlung
  } catch (error) {
    console.error("Fehler: ", error);
  } finally {
    await driver.quit();
  }
}

oneBigHeader();
