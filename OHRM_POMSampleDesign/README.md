# OHRM_POMSampleDesign

A Playwright end-to-end test automation framework for **OrangeHRM** (`https://opensource-demo.orangehrmlive.com`) built using a layered **Page Object Model (POM)** architecture in JavaScript.

---

## Folder Structure

```text
OHRM_POMSampleDesign/
├── tests/
│   ├── BaseLibrary/
│   │   └── BaseClass.spec.js               # Base class wrapping browser navigation & teardown
│   ├── PageObjects/
│   │   ├── LoginPageObjects.spec.js        # Locators for Login page
│   │   ├── AdminPageObjects.spec.js        # Locators for Admin User Role search
│   │   ├── AdminPageStatusObject.spec.js   # Locators for Admin User Add, Search & Delete
│   │   └── MyinfopageObject.spec.js        # Locators for My Info (Personal Details)
│   ├── PageActions/
│   │   ├── LoginPageActions.spec.js        # Actions for Login page
│   │   ├── AdminPageActions.spec.js        # Actions for Admin User Role search
│   │   ├── AdminPageStatusAction.spec.js   # Actions for Admin User Add, Search & Delete
│   │   └── MyinfoPageaction.spec.js        # Actions for My Info (Personal Details)
│   └── TestScripts/
│       ├── LoginTestScript.spec.js         # Login test scenario
│       ├── AdminTestScript.spec.js         # Admin role search test scenario
│       ├── AdminPageStatusScript.spec.js   # Admin new user add, search & delete scenario
│       └── MyinfoPageScript.spec.js        # My Info personal details update & save scenario
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js                    # Playwright config (testDir: './tests/TestScripts')
└── README.md
```

---

## Automated Operations & Test Coverage

### 1. Login Operation
- **Page Object:** `tests/PageObjects/LoginPageObjects.spec.js` (`LoginPage`)
- **Page Action:** `tests/PageActions/LoginPageActions.spec.js` (`LoginAction`)
- **Test Script:** `tests/TestScripts/LoginTestScript.spec.js`
- **Flow:** Launches the OrangeHRM login page, enters credentials (`admin` / `admin123`), submits the form, and verifies navigation to the `/dashboard` URL.

### 2. Admin Page Search Operation
- **Page Object:** `tests/PageObjects/AdminPageObjects.spec.js` (`AdminPage`)
- **Page Action:** `tests/PageActions/AdminPageActions.spec.js` (`AdminAction`)
- **Test Script:** `tests/TestScripts/AdminTestScript.spec.js`
- **Flow:** Logs in, navigates to the **Admin** tab, selects **Admin** from the **User Role** dropdown, clicks **Search**, and verifies the `(<count>) Record(s) Found` result text.

### 3. Admin Page New Entry Adding, Searching & Deletion Operation
- **Page Object:** `tests/PageObjects/AdminPageStatusObject.spec.js` (`AdminPageStatus`)
- **Page Action:** `tests/PageActions/AdminPageStatusAction.spec.js` (`AdminStatusAction`)
- **Test Script:** `tests/TestScripts/AdminPageStatusScript.spec.js`
- **Flow:** Logs in, navigates to **Admin**, clicks **Add**, creates a new system user with a dynamic username (`Anuj` + 4-digit random number), selects User Role (`Admin`), Employee Name (`Charles Carter`), Status (`Enabled`), sets password, saves the entry, searches for the newly created username, deletes the user from the results table, confirms deletion (`Yes, Delete`), and verifies the `Success` toast notification via `checkdeletestatusmethod()`.

### 4. My Info Page Operation
- **Page Object:** `tests/PageObjects/MyinfopageObject.spec.js` (`MyinfopageObject`)
- **Page Action:** `tests/PageActions/MyinfoPageaction.spec.js` (`MyInfoAction`)
- **Test Script:** `tests/TestScripts/MyinfoPageScript.spec.js`
- **Flow:** Logs in, verifies dashboard navigation, opens **My Info** -> **Personal Details**, updates First Name, Middle Name, and Last Name, clicks **Save**, and verifies the `Success` toast notification via `checkSaved()`.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (included with Node.js)

---

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/OHRM_POMSampleDesign.git
   cd OHRM_POMSampleDesign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

---

## Running Tests

Playwright is configured in `playwright.config.js` with `testDir: './tests/TestScripts'` and runs on **Chromium** by default.

- **Run all tests:**
  ```bash
  npx playwright test
  ```

- **Run all tests in headed mode (visible browser):**
  ```bash
  npx playwright test --headed
  ```

- **Run individual test scripts:**
  ```bash
  npx playwright test LoginTestScript.spec.js --headed
  npx playwright test AdminTestScript.spec.js --headed
  npx playwright test AdminPageStatusScript.spec.js --headed
  npx playwright test MyinfoPageScript.spec.js --headed
  ```

- **Open Playwright UI Mode:**
  ```bash
  npx playwright test --ui
  ```

- **View the HTML test report:**
  ```bash
  npx playwright show-report
  ```

---

## Uploading to GitHub

To push this project as-is to your GitHub repository (`OHRM_POMSampleDesign`):

```bash
git init
git add .
git commit -m "Initial commit: OrangeHRM Playwright POM framework"
git branch -M main
git remote add origin https://github.com/<your-username>/OHRM_POMSampleDesign.git
git push -u origin main
```
