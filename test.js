const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");
describe("E2E Test für Demo Page", function () {
  // this.timeout(5000);
  let driver;
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://seleniumbase.io/demo_page");
  });
  after(async function () {
    await driver.quit();
  });

  it("Aufgabe 1: Hauptüberschrift finden", async function () {
    const header = await driver.findElement(
      By.xpath("//h1[text()='Demo Page']")
    );
    const headerText = await header.getText();
    assert.strictEqual(
      headerText,
      "Demo Page",
      "Hauptüberschrift stimmt nicht überein."
    );
  });

  it("Aufgabe 2: Dropdown-Option auswählen", async function () {
    const dropdownButton = await driver.findElement(
      By.xpath(`//*[@id="myDropdown"]`)
    ); // Ergänze den XPath
    const actions = driver.actions({ async: true });
    await actions.move({ origin: dropdownButton }).perform(); // Bewegen der Maus
    const dropdownOption = await driver.findElement(
      By.xpath(`//*[@id="dropOption1"]`)
    ); // Ergänze den XPath
    await dropdownOption.click(); // Klicken auf die Option
    const selectedOption = await driver.findElement(
      By.xpath(`//*[@id="dropOption1"]`)
    ); // Ergänze den XPath
    const selectedOptionText = await selectedOption.getText();
    assert.strictEqual(
      selectedOptionText,
      "Link One",
      "Option wurde nicht richtig ausgewählt."
    );
  });

  it("Aufgabe 3: Textfeld ausfüllen", async function () {
    console.log("Aufgabe 3: Textfeld auswählen");
    // Textfeld finden
    const textField = await driver.findElement(
      By.xpath(`//*[@id="myTextInput"]`)
    ); // XPath überprüfen und anpassen
    // Text in das Feld eingeben
    await textField.sendKeys("Automatisierter Test");
    console.log("Textfeld mit Text gefüllt.");

    // Den eingegebenen Wert abrufen und prüfen
    const textFieldValue = await textField.getAttribute("value");
    assert.strictEqual(
      textFieldValue,
      "Automatisierter Test",
      "Textfeld wurde nicht richtig gefüllt."
    );
  });

  it("Aufgabe 4: Button klicken", async function () {
    console.log("Aufgabe 4: Button klicken");

    // Button finden
    const button = await driver.findElement(By.xpath(`//*[@id="myButton"]`)); // Ergänze den XPath
    // Button klicken
    await button.click();
    console.log("Button geklickt.");

    // Wartezeit für mögliche DOM-Änderungen
    await driver.sleep(1000);

    // Klasse überprüfen
    const buttonClass = await button.getText();
    console.log("Button-Klasse:", buttonClass);

    assert.strictEqual(
      buttonClass,
      "Click Me (Purple)", // Erwartete Klasse
      "Textfeld wurde nicht richtig gefüllt."
    );
  });
});
