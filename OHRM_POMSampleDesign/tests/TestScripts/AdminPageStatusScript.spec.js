const { test, expect } = require('@playwright/test');
const { LoginAction } = require('../PageActions/LoginPageActions.spec.js');
const { AdminStatusAction } = require('../PageActions/AdminPageStatusAction.spec.js');

test.describe('Admin Tests', () => {
  test('Valid login test with admin role search', async ({ page }) => {
    const authAction = new LoginAction(page);
    const adminStatusPage = new AdminStatusAction(page);

    await authAction.launchBrowser('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await authAction.login('admin', 'admin123');

    await adminStatusPage.clickadmin();


    await adminStatusPage.clickaddminaddbutton();

    const dynamicAccountName = 'Anuj' + Math.floor(1000 + Math.random() * 9000);

    await adminStatusPage.filladduserrole('Admin');
    await adminStatusPage.filladdemployeename('Charles  Carter');
    await adminStatusPage.filladdstatus('Enabled');
    await adminStatusPage.filladdusername(dynamicAccountName);
    await adminStatusPage.filladdpassword('Anuj@123');
    await adminStatusPage.filladdconfirmpassword('Anuj@123');
    await adminStatusPage.clickaddsavebutton();

    await adminStatusPage.fillsearchusername(dynamicAccountName);
    await adminStatusPage.clicksearchbuttonsystemuser();

    await adminStatusPage.clickdeleteSystemUserlogo(dynamicAccountName);
    await adminStatusPage.clickdeleteSystemUserlogoConfirmButton();

    expect(await adminStatusPage.checkdeletestatusmethod()).toContain('Success');
  });
});
