const { test, expect } = require('@playwright/test');
const { LoginAction } = require("../PageActions/LoginPageActions.spec");
const { MyInfoAction } = require("../PageActions/MyinfoPageaction.spec");

test.describe("My Info Page Test Scenarios", () => {
  test("to verify add name details", async ({ page }) => {
    const loginAction = new LoginAction(page);
    const myinfoAction = new MyInfoAction(page);

    await loginAction.launchBrowser('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(2000);

    await loginAction.login('Admin', 'admin123');
    await page.waitForTimeout(2000);

    await expect(page).toHaveURL(/.*dashboard/);
    await page.waitForTimeout(2000);

    await myinfoAction.clickMyinfo();
    await page.waitForTimeout(2000);

    await myinfoAction.clickPersonaldetail();
    await page.waitForTimeout(2000);

    await myinfoAction.enterFname("Anuj");
    await page.waitForTimeout(2000);

    await myinfoAction.entermname("Bhimaji");
    await page.waitForTimeout(2000);

    await myinfoAction.enterlname("Kandalkar");
    await page.waitForTimeout(2000);

    await myinfoAction.Saveinfo();
    await page.waitForTimeout(2000);

    const result = await myinfoAction.checkSaved();
    expect(result).toContain('Success');
  });
});