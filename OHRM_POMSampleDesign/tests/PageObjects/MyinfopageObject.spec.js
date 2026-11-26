const BaseClass = require("../BaseLibrary/BaseClass.spec");

class MyinfopageObject extends BaseClass {
  constructor(page) {
    super(page);
    this.Myinfo = this.page.locator("//span[text()='My Info']//parent::a");
    this.personalDetail = this.page.locator("//a[contains(text(),'Personal Details')]");
    this.firstname = this.page.locator("//input[@name='firstName']");
    this.mname = this.page.locator("//input[@name='middleName']");
    this.lname = this.page.locator("//input[@name='lastName']");
    this.savebutton = this.page.locator("//input[@name='firstName']/ancestor::form//button[@type='submit']");
    this.saveSuccessToast = this.page.locator("//div[contains(@class,'oxd-toast--success')]");
  }
}

module.exports = { MyinfopageObject };
