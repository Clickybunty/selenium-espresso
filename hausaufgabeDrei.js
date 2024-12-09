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
    const priceElement = await driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="app"]/div[2]/div/ul/li[2]/div[3]')
      ),
      5000
    );

    // Extrahiere den Text des Elements
    const priceText = await priceElement.getText();

    console.log(`Preis des Elements: ${priceText}`);

    if (priceText === "$8.00") {
      console.log("Test bestanden: Preis ist $8.00");
    } else {
      console.error(
        `Test fehlgeschlagen: Nicht $8.00, sondern "${priceText}"`
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
