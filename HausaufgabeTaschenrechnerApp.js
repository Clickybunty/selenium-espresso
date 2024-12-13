const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

describe("Calculator App Tests", function () {
  let driver;

  before(async function () {
    driver = new Builder().forBrowser("chrome").build();
  });

  after(async function () {
    await driver.quit();
  });

  it("1: Addition testen 5 + 3", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("5")).click();
    await driver.findElement(By.id("add")).click();
    await driver.findElement(By.id("3")).click();
    await driver.findElement(By.id("equal")).click();

    const result = await driver
      .findElement(By.id("output"))
      .getAttribute("value");
    assert.strictEqual(result, "8");
  });

  it("2: Multiplikation testen 7 * 4", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("7")).click();
    await driver.findElement(By.xpath(`//*[@id="multiply"]`)).click();
    await driver.findElement(By.id("4")).click();
    await driver.findElement(By.id("equal")).click();

    const result = await driver
      .findElement(By.id("output"))
      .getAttribute("value");
    assert.strictEqual(result, "28");
  });

  it("3: Division durch Null", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("8")).click();
    await driver.findElement(By.xpath(`//*[@id="divide"]`)).click();
    await driver.findElement(By.id("0")).click();
    await driver.findElement(By.id("equal")).click();

    const result = await driver
      .findElement(By.id("output"))
      .getAttribute("value");
    assert.strictEqual(result, "Error");
  });

  it("Schritt 3: Bonusaufgabe", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("(")).click();
    await driver.findElement(By.id("2")).click();
    await driver.findElement(By.id("add")).click();
    await driver.findElement(By.id("3")).click();
    await driver.findElement(By.id(")")).click();
    await driver.findElement(By.xpath(`//*[@id="multiply"]`)).click();
    await driver.findElement(By.id("4")).click();
    await driver.findElement(By.id("equal")).click();

    const result = await driver
      .findElement(By.id("output"))
      .getAttribute("value");
    assert.strictEqual(result, "20");
  });

  it("Bonusaufgabe 1: Validierung der Rechenpriorität", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("2")).click();
    await driver.findElement(By.id("add")).click();
    await driver.findElement(By.id("3")).click();
    await driver.findElement(By.xpath(`//*[@id="multiply"]`)).click();
    await driver.findElement(By.id("4")).click();
    await driver.findElement(By.id("subtract")).click();
    await driver.findElement(By.id("6")).click();
    await driver.findElement(By.id("divide")).click();
    await driver.findElement(By.id("2")).click();
    await driver.findElement(By.id("equal")).click();

    const result = await driver
      .findElement(By.id("output"))
      .getAttribute("value");
    assert.strictEqual(result, "11");
  });

  it("Wiederhole die Berechnung mit Klammern, z. B. (2 + 3) × (4 - 6 ÷ 2):", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("(")).click();
    await driver.findElement(By.id("2")).click();
    await driver.findElement(By.id("add")).click();
    await driver.findElement(By.id("3")).click();
    await driver.findElement(By.id(")")).click();
    await driver.findElement(By.xpath(`//*[@id="multiply"]`)).click();
    await driver.findElement(By.id("(")).click();
    await driver.findElement(By.id("4")).click();
    await driver.findElement(By.id("subtract")).click();
    await driver.findElement(By.id("6")).click();
    await driver.findElement(By.id("divide")).click();
    await driver.findElement(By.id("2")).click();
    await driver.findElement(By.id(")")).click();
    await driver.findElement(By.id("equal")).click();

    const result = await driver
      .findElement(By.id("output"))
      .getAttribute("value");
    assert.strictEqual(result, "5");
  });

  it("Bonusaufgabe 2: 1", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("0")).click();
    await driver.findElement(By.xpath(`//*[@id="."]`)).click();
    await driver.findElement(By.id("1")).click();
    await driver.findElement(By.id("add")).click();
    await driver.findElement(By.id("0")).click();
    await driver.findElement(By.xpath(`//*[@id="."]`)).click();
    await driver.findElement(By.id("2")).click();
    await driver.findElement(By.id("equal")).click();

    const result = await driver
      .findElement(By.id("output"))
      .getAttribute("value");
    assert.strictEqual(result, "0.3");
  });

  it("Bonusaufgabe 2: 2", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("1")).click();
    await driver.findElement(By.id("divide")).click();
    await driver.findElement(By.id("3")).click();
    await driver.findElement(By.id("equal")).click();

    const result = await driver
      .findElement(By.id("output"))
      .getAttribute("value");
    assert.strictEqual(result, "0.333333333");
  });

  it("Bonusaufgabe 2: 3", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("0")).click();
    await driver.findElement(By.xpath(`//*[@id="."]`)).click();
    await driver.findElement(By.id("1")).click();
    await driver.findElement(By.id("add")).click();
    await driver.findElement(By.id("0")).click();
    await driver.findElement(By.xpath(`//*[@id="."]`)).click();
    await driver.findElement(By.id("2")).click();
    await driver.findElement(By.id("subtract")).click();
    await driver.findElement(By.id("0")).click();
    await driver.findElement(By.xpath(`//*[@id="."]`)).click();
    await driver.findElement(By.id("3")).click();
    await driver.findElement(By.id("equal")).click();

    const result = await driver
      .findElement(By.id("output"))
      .getAttribute("value");
    assert.strictEqual(result, "0");
  });

  it("Optionale Herausforderung: ", async function () {
    await driver.get("https://seleniumbase.io/apps/calculator");
    await driver.findElement(By.id("0")).click();
    await driver.findElement(By.id("1")).click();
    await driver.findElement(By.id("2")).click();
    await driver.findElement(By.id("3")).click();
    await driver.findElement(By.id("4")).click();
    await driver.findElement(By.id("5")).click();
    await driver.findElement(By.id("6")).click();
    await driver.findElement(By.id("7")).click();
    await driver.findElement(By.id("8")).click();
    await driver.findElement(By.id("9")).click();
    await driver.findElement(By.id("0")).click();
    await driver.findElement(By.id("1")).click();
    await driver.findElement(By.id("2")).click();
    await driver.findElement(By.id("3")).click();
    await driver.findElement(By.id("4")).click();
    await driver.findElement(By.id("5")).click();
    await driver.findElement(By.id("6")).click();
    await driver.findElement(By.id("7")).click();
    await driver.findElement(By.id("8")).click();
    await driver.findElement(By.id("9")).click();
    await driver.findElement(By.id("0")).click();
    await driver.findElement(By.id("add")).click();
    await driver.findElement(By.id("9")).click();
    await driver.findElement(By.id("8")).click();
    await driver.findElement(By.id("7")).click();
    await driver.findElement(By.id("6")).click();
    await driver.findElement(By.id("5")).click();
    await driver.findElement(By.id("4")).click();
    await driver.findElement(By.id("3")).click();
    await driver.findElement(By.id("2")).click();
    await driver.findElement(By.id("1")).click();
    await driver.findElement(By.id("0")).click();
    await driver.findElement(By.id("9")).click();
    await driver.findElement(By.id("8")).click();
    await driver.findElement(By.id("7")).click();
    await driver.findElement(By.id("6")).click();
    await driver.findElement(By.id("5")).click();
    await driver.findElement(By.id("4")).click();
    await driver.findElement(By.id("3")).click();
    await driver.findElement(By.id("2")).click();
    await driver.findElement(By.id("1")).click();
    await driver.findElement(By.id("0")).click();
    await driver.findElement(By.id("equal")).click();

    const result = await driver
      .findElement(By.id("output"))
      .getAttribute("value");
    assert.strictEqual(result, "111111110011111111100");
  });
});
