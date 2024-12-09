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
      until.elementLocated(
        By.xpath('//*[@id="app"]/div[2]/ul/li[1]/div/div/div[1]')
      ),
      5000
    );
    await espressoButton.click();

    //     Interaktion mit der Webseite
    //     Warten und Klicken auf den Espresso-Button
    const cappuccionoButton = await driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="app"]/div[2]/ul/li[3]/div/div/div[1]')
      ),
      5000
    );
    await cappuccionoButton.click();

    //     Interaktion mit der Webseite
    //     Warten und Klicken auf den Espresso-Button
    const mochaButton = await driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="app"]/div[2]/ul/li[4]/div/div/div[1]')
      ),
      5000
    );
    await mochaButton.click();

    //     Zum Warenkorb wechseln
    const cartButton = await driver.wait(
      until.elementLocated(By.xpath('//*[@id="app"]/ul/li[2]/a')),
      5000
    );
    await cartButton.click();

    //     Preis Anzeigen
    const gesamtPriceElement = await driver.wait(
      until.elementLocated(By.xpath('//*[@id="app"]/div[2]/div/div[1]/button')),
      5000
    );

    // Extrahiere den Text des Elements
    const priceText = await gesamtPriceElement.getText();

    console.log(`Preis des Elements: ${priceText}`);

    if (priceText === "Total: $37.00") {
      console.log("Test bestanden: Preis ist Total: $37.00");
    } else {
      console.error(
        `Test fehlgeschlagen: Nicht Total: $37.00, sondern "${priceText}"`
      );
    }

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
