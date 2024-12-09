//     Importieren der Selenium-Bibliothek
const { Builder, By, until } = require("selenium-webdriver");

async function buyEspresso() {
  //     Erstellen eines WebDriver-Objekts
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    //     Oeffnen der Webseite
    await driver.get("https://seleniumbase.io/coffee/");

    //     Interaktion mit der Webseite
    //     Warten und Klicken auf den Espresso-Button
    const espressoButton = await driver.wait(
      until.elementLocated(By.css('div[data-test="Espresso"]')),
      5000
    );
    await espressoButton.click();

    //     Zum Warenkorb wechseln
    const cartButton = await driver.wait(
      until.elementLocated(By.css('a[aria-label="Cart page"]')),
      5000
    );
    await cartButton.click();

    const priceElement = await driver.wait(
      until.elementLocated(By.xpath('//*[@id="app"]/div[2]/div/ul/li[2]/div[3]')),
      5000
    );
    const priceText = await priceElement.getText();
    const price = parseFloat(priceText.replace("$", ""));

    const priceText = await cartButton.getText();

    if (cartText.toLowerCase() === "cart (1)") {
      console.log("Test bestanden: Warenkorb zeigt Cart (1)");
    } else {
      console.error(
        `Test fehlgeschlagen: Erwartet "Cart (1)", aber erhalten "${cartText}"`
      );
    }

    const menuButton = await driver.wait(
      until.elementLocated(By.css('a[aria-label="Menu page"]')),
      5000
    );
    await menuButton.click();

    const cappuccinoButton = await driver.wait(
      until.elementLocated(By.css('div[data-test="Cappuccino"]')),
      5000
    );
    await cappuccinoButton.click();

    //     Zum Warenkorb wechseln
    const cartButton2 = await driver.wait(
      until.elementLocated(By.css('a[aria-label="Cart page"]')),
      5000
    );
    await cartButton2.click();

    const cartText2 = await cartButton2.getText();
    if (cartText2.toLowerCase() === "cart (2)") {
      console.log("Test bestanden: Warenkorb zeigt Cart (2)");
    } else {
      console.error(
        `Test fehlgeschlagen: Erwartet "Cart (2)", aber erhalten "${cartText2}"`
      );
    }

    const menuButton2 = await driver.wait(
      until.elementLocated(By.css('a[aria-label="Menu page"]')),
      5000
    );
    await menuButton2.click();

    const mochaButton = await driver.wait(
      until.elementLocated(By.css('div[data-test="Mocha"]')),
      5000
    );
    await mochaButton.click();

    //     Zum Warenkorb wechseln
    const cartButton3 = await driver.wait(
      until.elementLocated(By.css('a[aria-label="Cart page"]')),
      5000
    );
    await cartButton3.click();

    // Lokalisieren des spezifischen Mocha-Preiselements
    const priceElement = await driver.wait(
      until.elementLocated(By.css("div[data-v-8965af83]")), // Hier muss der Selektor präzise angepasst werden
      5000
    );

    // Extrahiere den Text des Mocha-Preiselements
    const gesamtPreisText = await priceElement.getText();

    // console.log(`Total-Preis: ${gesamtPreisText}`);
    // Prüfe, ob der Text "$8.00" entspricht
    if (gesamtPreisText.trim() === "$37.00") {
      console.log(
        "Test bestanden: Der Preis für ALLES wird korrekt angezeigt."
      );
    } else {
      console.error(
        `Test fehlgeschlagen: Erwartet "$37.00", aber erhalten "${gesamtPreisText}"`
      );
    }

    //     Warten und Klicken auf den Checkout-Button
    const checkoutButton = await driver.wait(
      until.elementLocated(By.css('button[data-test="checkout"]')),
      5000
    );
    await checkoutButton.click();

    //     Bestätigungsnachricht lesen
    const confirmationMessage = await driver.wait(
      until.elementLocated(By.css("h1[data-v-29c3be1b]")),
      5000
    );

    const confirmationText = await confirmationMessage.getText();
    console.log(`Bestätigung erhalten: ${confirmationText}`);
    //     Fehlerbehandlung
  } catch (error) {
    console.error("Fehler beim Öffnen der Seite:", error);
    //     WebDriver schließen
  } finally {
    await driver.quit();
  }
}
//     Test ausführen
buyEspresso(); // Führt den Test aus
