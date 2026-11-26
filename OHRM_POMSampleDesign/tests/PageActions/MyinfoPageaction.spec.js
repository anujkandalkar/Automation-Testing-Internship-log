const { MyinfopageObject } = require("../PageObjects/MyinfopageObject.spec");

class MyInfoAction extends MyinfopageObject {
  async clickMyinfo() {
    await this.Myinfo.click();
  }

  async clickPersonaldetail() {
    await this.personalDetail.click();
  }

  async enterFname(fname) { 
    
    await this.firstname.fill(fname);
  }

  async entermname(mname) {
    await this.mname.fill(mname);
  }

  async enterlname(lname) {
    await this.lname.fill(lname);
  }

  async Saveinfo() {
    await this.savebutton.click();
  }

  async checkSaved() {
    await this.saveSuccessToast.waitFor({ state: 'visible', timeout: 10000 });
    return await this.saveSuccessToast.textContent();
  }
}

module.exports = { MyInfoAction };
