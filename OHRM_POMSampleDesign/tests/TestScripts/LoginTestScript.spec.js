const { test, expect } = require('@playwright/test');
const { LoginAction } = require('../PageActions/LoginPageActions.spec.js');

test.describe('Login Tests', () => {
  test('Valid login test', async ({ page }) => {
    const loginAction = new LoginAction(page);

    await loginAction.launchBrowser('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginAction.login('admin', 'admin123');

    // Verify successful login
    await expect(page).toHaveURL(/.*dashboard/);
  });
});
