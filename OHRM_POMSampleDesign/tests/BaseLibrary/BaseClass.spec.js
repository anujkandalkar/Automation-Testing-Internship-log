class BaseClass {
  constructor(page) {
    this.page = page;
  }

  async launchbrowserandgotourl(url) {
    await this.page.goto(url);
  }

  async closebrowser() {
    await this.page.close();
  }
}
 
module.exports = BaseClass;

