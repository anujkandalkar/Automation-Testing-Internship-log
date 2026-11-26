const BaseClass = require('../BaseLibrary/BaseClass.spec.js');

class AdminPageStatus extends BaseClass {
  constructor(page) {
    super(page);
    this.adminTab = this.page.locator("//span[text()='Admin']//parent::a");
    this.statusDropdownArrow = this.page.locator("//label[text()='Status']//parent::div//following-sibling::div//i[contains(@class,'arrow')]");
    this.enabledStatusOption = this.page.locator("//span[text()='Enabled']");
    this.searchSubmitBtn = this.page.locator("//button[contains(normalize-space(),'Search') and @type='submit']");
    this.recordsCountText = this.page.locator("//div[contains(@class,'orangehrm-horizontal-padding')]//span[contains(@class,'oxd-text')]");

    this.addNewUserBtn = this.page.locator("//button[contains(normalize-space(),'Add') and @type='button']");

    this.userRoleDropdown = this.page.locator("//label[contains(normalize-space(),'User Role')]//parent::div//following-sibling::div//div[contains(concat(' ', normalize-space(@class), ' '), ' oxd-select-text ')]");
    this.adminRoleOption = this.page.getByRole('option', { name: 'Admin', exact: true });
    this.employeeNameInput = this.page.locator("//input[@placeholder='Type for hints...']");
    this.statusDropdown = this.page.locator("//label[contains(normalize-space(),'Status')]//parent::div//following-sibling::div//div[contains(concat(' ', normalize-space(@class), ' '), ' oxd-select-text ')]");
    this.enabledStatusOptionItem = this.page.getByRole('option', { name: 'Enabled', exact: true });
    this.usernameInputField = this.page.locator("//label[text()='Username']//parent::div//following-sibling::div/input");
    this.passwordInputField = this.page.locator("//label[text()='Password']//parent::div//following-sibling::div/input");
    this.confirmPasswordInputField = this.page.locator("//label[text()='Confirm Password']//parent::div//following-sibling::div/input");

    this.saveUserBtn = this.page.locator("//button[@type='submit']");

    this.searchUsernameField = this.page.locator("//label[text()='Username']//parent::div//following-sibling::div/input");
    this.systemUserSearchSubmitBtn = this.page.getByRole('button', { name: 'Search', exact: true });

    this.deleteUserRowBtn = this.page.locator("//div[contains(@class,'oxd-table-body')]//div[@role='row']//i[contains(@class,'bi-trash')]").first();
    this.confirmDeleteModalBtn = this.page.locator("//button[contains(normalize-space(),'Yes, Delete')]");

    this.checkdeletestatus = this.page.locator("//div[contains(@class,'oxd-toast--success')]");

  }

  getDeleteUserButton(targetUsername) {
    return this.page.locator(`//div[@role='row'][.//div[@role='cell' and normalize-space()='${targetUsername}']]//button[.//i[contains(@class,'bi-trash')]] | //div[@role='row'][.//div[@role='cell' and normalize-space()='${targetUsername}']]//i[contains(@class,'bi-trash')]`).first();
  }
}

module.exports = { AdminPageStatus };
