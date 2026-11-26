const { AdminPageStatus } = require("../PageObjects/AdminPageStatusObject.spec");

class AdminStatusAction extends AdminPageStatus {
  async clickadmin() {
    await this.adminTab.click();
    await this.page.waitForTimeout(1000);
  }

  async clickuserstatusdropdownarrow() {
    await this.statusDropdownArrow.click();
    await this.page.waitForTimeout(1000);
  }

  async clickuserstatusdropdownvalueenable() {
    await this.enabledStatusOption.click();
    await this.page.waitForTimeout(1000);
  }

  async clicksearchbutton() {
    await this.searchSubmitBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async getrecordfoundtextaftersearch() {
    await this.recordsCountText.waitFor({ state: 'visible', timeout: 15000 });
    return await this.recordsCountText.textContent();
  }

  async clickaddminaddbutton() {
    await this.addNewUserBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async filladduserrole(roleName = 'Admin') {
    await this.userRoleDropdown.click();
    await this.page.getByRole('option', { name: roleName, exact: true }).click();
    await this.page.waitForTimeout(1000);
  }

  async filladdemployeename(empFullName) {
    await this.employeeNameInput.fill(empFullName);
    const cleanEmployeeName = empFullName.replace(/\s+/g, ' ').trim();
    const matchingEmployeeItem = this.page.getByRole('option', { name: cleanEmployeeName, exact: true }).first();
    await matchingEmployeeItem.waitFor({ state: 'visible', timeout: 15000 });
    await matchingEmployeeItem.click();
    await this.page.waitForTimeout(1000);
  }

  async filladdstatus(userStatus = 'Enabled') {
    await this.statusDropdown.click();
    await this.page.getByRole('option', { name: userStatus, exact: true }).click();
    await this.page.waitForTimeout(1000);
  }

  async filladdusername(newUserName) {
    await this.usernameInputField.fill(newUserName);
    await this.page.waitForTimeout(1000);
  }

  async filladdpassword(newUserPassword) {
    await this.passwordInputField.fill(newUserPassword);
    await this.page.waitForTimeout(1000);
  }

  async filladdconfirmpassword(confirmUserPassword) {
    await this.confirmPasswordInputField.fill(confirmUserPassword);
    await this.page.waitForTimeout(1000);
  }

  async clickaddsavebutton() {
    await this.saveUserBtn.click();
    await this.page.waitForURL('**/admin/viewSystemUsers**', { timeout: 30000 });
    await this.page.waitForTimeout(1000);
  }

  async fillsearchusername(queryUsername) {
    await this.searchUsernameField.waitFor({ state: 'visible', timeout: 15000 });
    await this.searchUsernameField.fill(queryUsername);
    await this.page.waitForTimeout(1000);
  }

  async clicksearchbuttonsystemuser() {
    await this.systemUserSearchSubmitBtn.click();
    const loadingIndicator = this.page.locator('.oxd-loading-spinner');
    if (await loadingIndicator.count() > 0) {
      await loadingIndicator.first().waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
    }
    await this.page.waitForTimeout(1000);
  }

  async clickdeleteSystemUserlogo(selectedUser) {
    const deleteButtonElement = selectedUser ? this.getDeleteUserButton(selectedUser) : this.deleteUserRowBtn;
    await deleteButtonElement.waitFor({ state: 'visible', timeout: 15000 });
    await deleteButtonElement.click();
    await this.page.waitForTimeout(1000);
  }

  async clickdeleteSystemUserlogoConfirmButton() {
    await this.confirmDeleteModalBtn.waitFor({ state: 'visible', timeout: 15000 });
    await this.confirmDeleteModalBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async checkdeletestatusmethod() {
      await this.checkdeletestatus.waitFor({ state: 'visible', timeout: 10000 });
      return await this.checkdeletestatus.textContent();
}

}

module.exports = { AdminStatusAction };
