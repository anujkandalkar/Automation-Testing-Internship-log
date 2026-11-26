const BaseClass = require('../BaseLibrary/BaseClass.spec.js');

class AdminPage extends BaseClass {
  constructor(page) {
    super(page);
    this.admintab = this.page.locator("//span[text()='Admin']//parent::a");
    this.useerroledropdownarrow = this.page.locator("//label[text()='User Role']//parent::div//following-sibling::div//i[contains(@class,'arrow')]");
    this.userroledropdownvalueadmin = this.page.locator("//span[text()='Admin']//parent::div[@role='option']");
    this.searchbutton = this.page.locator("//button[contains(normalize-space(),'Search') and @type='submit']");
    this.recordfoundtextaftersearch = this.page.locator("//div[contains(@class,'orangehrm-horizontal-padding')]//span[contains(@class,'oxd-text')]");
  }
}

module.exports = { AdminPage };
