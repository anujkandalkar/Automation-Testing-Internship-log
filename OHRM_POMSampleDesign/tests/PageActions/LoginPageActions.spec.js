const { LoginPage } = require('../PageObjects/LoginPageObjects.spec.js');

class LoginAction extends LoginPage {
  async launchBrowser(url) {
    await this.launchbrowserandgotourl(url);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async closeBrowser() {
    await this.closebrowser();
  }
}

module.exports = { LoginAction };
