// Aufgabe 1:
//  Hauptüberschrift finden
//  Beschreibung:
//   Die Funktion
//   soll die Hauptüberschrift (<h1>)
//   der Seite mit dem Text Demo Page finden.
//   </h1>Ergänze den XPath,
//   um diese Überschrift anzusteuern.

const { Builder, By } = require("selenium-webdriver");

async function oneBigHeader() {
  // async function findHeader() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://seleniumbase.io/demo_page");

    console.log("Aufgabe 1: Hauptüberschrift finden");
    const header = await driver.findElement(
      By.xpath(`//*[@id="tbodyId"]/tr[1]/td[1]/h1`)
    ); // Ergänze den XPath
    console.log("Gefundene Überschrift:", await header.getText());
    // } finally {
    //   await driver.quit();
    // }
    // };

    // Aufgabe 2:
    //  Dropdown-Option auswählen (20 Punkte)
    //  Beschreibung:
    //   Die Funktion soll die Maus über das Dropdown-Element bewegen und
    //   die Option Link One auswählen.
    //   Ergänze den XPath,
    //   um den Dropdown-Button und die Option anzusteuern.

    // async function selectDropdownOption() {
    //   let driver = await new Builder().forBrowser("chrome").build();
    //   try {
    //     await driver.get("https://seleniumbase.io/demo_page");
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
    //   } finally {
    //     await driver.quit();
    //   }
    // };

    // Aufgabe 3:
    //  Textfeld ausfüllen (20 Punkte)
    //  Beschreibung:
    //   Die Funktion soll ein Textfeld finden und
    //   den Text Automatisierter Test eingeben.
    //   Ergänze den XPath,
    //   um das Textfeld mit der ID myTextInput zu finden.

    // async function selectTextField() {
    //   let driver = await new Builder().forBrowser("chrome").build();
    //   try {
    //     await driver.get("https://seleniumbase.io/demo_page");
    console.log("Aufgabe 3: Textfeld auswählen");
    const textField = await driver.findElement(
      By.xpath(`//*[@id="myTextInput"]`)
    ); // Ergänze den XPath
    await textField.sendKeys("Automatisierter Test");
    console.log("Textfeld mit Text gefüllt.");
    //   } finally {
    //     await driver.quit();
    //   }
    // };

    // Aufgabe 4:
    //  Button klicken (20 Punkte)
    //  Beschreibung:
    //   Die Funktion soll einen grünen Button
    //   mit dem Text Click Me (Green) finden und klicken.
    //   Ergänze den XPath,
    //   um den Button anzusteuern.

    // async function clickButton() {
    //   let driver = await new Builder().forBrowser("chrome").build();
    //   try {
    //     await driver.get("https://seleniumbase.io/demo_page");
    console.log("Aufgabe 4: Button klicken");
    const button = await driver.findElement(By.xpath(`//*[@id="myButton"]`)); // Ergänze den XPath
    await button.click();
    console.log("Button geklickt.");
    //   } finally {
    //     await driver.quit();
    //   }
    // };

    // Aufgabe 5:
    //  Checkboxen auswählen (20 Punkte)
    //  Beschreibung:
    //   Die Funktion soll alle Checkboxen auf der Seite auswählen.
    //   Ergänze den XPath,
    //   um alle Checkbox-Elemente auf der Seite zu finden.

    // async function selectCheckboxes() {
    //   let driver = await new Builder().forBrowser("chrome").build();
    //   try {
    //     await driver.get("https://seleniumbase.io/demo_page");
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
    //   } finally {
    //     await driver.quit();
    //   }
    // };

    // Zusatzaufgaben (6-8)
    //  Aufgabe 6:
    //   Slider steuern
    //    Beschreibung:
    //     Die Funktion soll den Slider auf den Wert 75 setzen.
    //      Ergänze den XPath, um den Slider zu finden.

    // async function controlSlider() {
    //   let driver = await new Builder().forBrowser("chrome").build();
    //   try {
    //     await driver.get("https://seleniumbase.io/demo_page");
    console.log("Aufgabe 6: Slider steuern");
    const slider = await driver.findElement(By.xpath(`//*[@id="mySlider"]`)); // Ergänze den XPath
    await driver.executeScript("arguments[0].value = 75;", slider);
    console.log("Slider auf Wert 75 gesetzt.");
    //   } finally {
    //     await driver.quit();
    //   }
    // };

    //  Aufgabe 7:
    //   Progress Bar Label finden
    //    Beschreibung:
    //     Die Funktion soll das Label für die Progress Bar finden und
    //      den angezeigten Text ausgeben.
    //       Ergänze den XPath,
    //        um das Label mit der ID progressLabel zu finden.

    // async function findProgressBarLabel() {
    //   let driver = await new Builder().forBrowser("chrome").build();
    //   try {
    //     await driver.get("https://seleniumbase.io/demo_page");
    console.log("Aufgabe 7: Progress Bar");
    const progressBarLabel = await driver.findElement(
      By.xpath(`//*[@id="progressLabel"]`)
    ); // Ergänze den XPath
    console.log("Label gefunden:", await progressBarLabel.getText());
    // } finally {
    //   await driver.quit();
    // }
    // };

    //  Aufgabe 8: Link finden
    //   Beschreibung:
    //    Die Funktion soll einen Link mit dem Text SeleniumBase on GitHub finden und
    //     die URL ausgeben.
    //      Ergänze den XPath,
    //       um den Link anzusteuern.

    // async function findLink() {
    // let driver = await new Builder().forBrowser("chrome").build();
    // try {
    // await driver.get("https://seleniumbase.io/demo_page");
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

// findHeader();
// selectDropdownOption();
// selectTextField();
// clickButton();
// selectCheckboxes();
// controlSlider();
// findProgressBarLabel();
// findLink();
