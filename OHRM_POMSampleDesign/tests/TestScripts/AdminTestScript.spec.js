const { test, expect } = require('@playwright/test');
const { LoginAction } = require('../PageActions/LoginPageActions.spec.js');
const { AdminAction } = require('../PageActions/AdminPageActions.spec.js');

test.describe('Admin Tests', () => {
  test('Valid login test with admin role search', async ({ page }) => {
    const loginAction = new LoginAction(page);
    const adminAction = new AdminAction(page);

    await loginAction.launchBrowser('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginAction.login('admin', 'admin123');

    await adminAction.clickadmin();
    await adminAction.clickuserroledropdownarrow();
    await adminAction.clickuserroledropdownvalueadmin();
    await adminAction.clicksearchbutton();

    const recordFoundText = await adminAction.getrecordfoundtextaftersearch();
    expect(recordFoundText).toMatch(/\(\d+\)\s+Records? Found/);
  });
});
