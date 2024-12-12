const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

describe("Login-Tests für https://seleniumbase.io/simple/login", function () {
  this.timeout(10000); // Timeout auf 10 Sekunden erhöhen
  let driver;

  // Vor jedem Test: Browser initialisieren
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  // Nach jedem Test: Browser schließen
  after(async function () {
    await driver.quit();
  });

  // Testfall 1: Erfolgreicher Login
  it("Erfolgreicher Login", async function () {
    console.log("Testfall 1: Erfolgreicher Login");

    // Login-Seite aufrufen
    await driver.get("https://seleniumbase.io/simple/login");

    // Benutzername und Passwort eingeben
    const usernameField = await driver.findElement(By.id("username"));
    const passwordField = await driver.findElement(By.id("password"));
    await usernameField.sendKeys("demo_user");
    await passwordField.sendKeys("secret_pass");

    // Login-Button klicken
    const loginButton = await driver.findElement(By.id("loginButton"));
    await loginButton.click();

    // Überprüfen, ob die Weiterleitung erfolgt ist
    const successMessage = await driver
      .findElement(By.id("logged-in-message"))
      .getText();
    assert.strictEqual(
      successMessage,
      "You are logged in!",
      "Erfolgreicher Login: Weiterleitung nicht korrekt."
    );
  });

  // Testfall 2: Ungültige Anmeldedaten
  it("Ungültige Anmeldedaten", async function () {
    console.log("Testfall 2: Ungültige Anmeldedaten");

    // Login-Seite aufrufen
    await driver.get("https://seleniumbase.io/simple/login");

    // Falsche Anmeldedaten eingeben
    const usernameField = await driver.findElement(By.id("username"));
    const passwordField = await driver.findElement(By.id("password"));
    await usernameField.sendKeys("wrong_user");
    await passwordField.sendKeys("wrong_pass");

    // Login-Button klicken
    const loginButton = await driver.findElement(By.id("loginButton"));
    await loginButton.click();

    // Überprüfen, ob die Fehlermeldung angezeigt wird
    const errorMessage = await driver
      .findElement(By.id("error-message"))
      .getText();
    assert.strictEqual(
      errorMessage,
      "Invalid username or password",
      "Ungültige Anmeldedaten: Fehlermeldung wird nicht korrekt angezeigt."
    );
  });

  // Testfall 3: Leere Felder
  it("Leere Felder", async function () {
    console.log("Testfall 3: Leere Felder");

    // Login-Seite aufrufen
    await driver.get("https://seleniumbase.io/simple/login");

    // Login-Button klicken, ohne etwas einzugeben
    const loginButton = await driver.findElement(By.id("loginButton"));
    await loginButton.click();

    // Überprüfen, ob die Fehlermeldung angezeigt wird
    const usernameError = await driver
      .findElement(By.id("username-error"))
      .getText();
    const passwordError = await driver
      .findElement(By.id("password-error"))
      .getText();

    assert.strictEqual(
      usernameError,
      "The Username is Required!",
      "Leere Felder: Fehlermeldung für Benutzername wird nicht korrekt angezeigt."
    );

    assert.strictEqual(
      passwordError,
      "The Password is Required!",
      "Leere Felder: Fehlermeldung für Passwort wird nicht korrekt angezeigt."
    );
  });
});
