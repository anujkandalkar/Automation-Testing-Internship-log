const { AdminPage } = require('../PageObjects/AdminPageObjects.spec.js');

class AdminAction extends AdminPage {
  async clickadmin() {
    await this.admintab.click();
  }

  async clickuserroledropdownarrow() {
    await this.useerroledropdownarrow.click();
  }

  async clickuserroledropdownvalueadmin() {
    await this.userroledropdownvalueadmin.click();
  }

  async clicksearchbutton() {
    await this.searchbutton.click();
  }

  async getrecordfoundtextaftersearch() {
    return await this.recordfoundtextaftersearch.textContent();
  }
}

module.exports = { AdminAction };
