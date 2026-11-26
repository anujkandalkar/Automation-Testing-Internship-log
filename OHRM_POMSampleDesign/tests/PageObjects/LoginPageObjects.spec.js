const BaseClass = require('../BaseLibrary/BaseClass.spec.js');

class LoginPage extends BaseClass {
  constructor(page) {
    super(page);
    this.usernameInput = this.page.locator("//input[@name='username']");
    this.passwordInput = this.page.locator("//input[@name='password']");
    this.loginButton = this.page.locator("//button[@type='submit']");
  }
}

module.exports = { LoginPage };
