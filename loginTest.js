// musterloesung login tests mit selenium mocha und node js

const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

describe("login tests", function () {
  this.timeout(5000);

  let driver;

  // setup und teardown
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async function () {
    await driver.quit();
  });

  // aufgabe 1
  it("sollte erfolgreih anmelden mit gültigen anmeldedaten", async function () {
    await driver.get("https://seleniumbase.io/simple/login");

    // eingabe der anmeldedaten

    await driver.findElement(By.id("username")).sendKeys("demo_user");
    await driver.findElement(By.id("password")).sendKeys("secret_pass");

    // klicken auf den login button
    await driver.findElement(By.id("log-in")).click();

    // überprüfung der weiterleitung
    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, "https://seleniumbase.io/simple/");
  });

  // aufgabe 2
  it("sollte fehlermeldung für ungültige anmeldedaten anzeigen", async function () {
    await driver.get("https://seleniumbase.io/simple/login");

    // eingabe ungültiger anmeldedaten
    await driver.findElement(By.id("username")).sendKeys("wrong_user");
    await driver.findElement(By.id("password")).sendKeys("wrong_pass");

    // klicken auf den login button
    await driver.findElement(By.id("log-in")).click();

    // überprüfung der fehlermeldung
    const errorMessage = await driver
      .findElement(By.id("top_message"))
      .getText();
    assert.strictEqual(errorMessage, "Invalid Username!");
  });

  // aufgabe 3
  it("sollte validierungsfehlermeldung für leere felder anzeigen", async function () {
    await driver.get("https://seleniumbase.io/simple/login");

    // felder leer lassen und auf login klicken
    await driver.findElement(By.id("log-in")).click();

    // überprüfung der fehlermeldung für benutzernme
    const usernameError = await driver
      .findElement(By.id("top_message"))
      .getText();
    assert.strictEqual(usernameError, "The Username is Required!");
  });
});
