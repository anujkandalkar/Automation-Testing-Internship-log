# ATExercise_RegistrationPOMdesign

A Playwright end-to-end test automation framework for **Automation Exercise** (`https://www.automationexercise.com/`) built in JavaScript using a layered **Page Object Model (POM)** inheritance architecture.

---

## Architecture & Folder Structure

The framework follows a 5-layer inheritance chain:
`CommonMethods` → `BaseClass` → `RegistrationPageObjects` → `RgistrationActionclass` → `RegistrationTestScript`

```text
ATExercise_RegistrationPOMdesign/
├── .github/
│   └── workflows/
│       └── playwright.yml                  # GitHub Actions CI workflow for Playwright tests
├── tests/
│   ├── CommonMethods/
│   │   └── CommonMethods.spec.js           # Reusable helpers (waitforseconds)
│   ├── BaseLibrary/
│   │   └── BaseClass.spec.js               # Browser navigation (loginintobrowser) & teardown (closebrowser)
│   ├── PageObjects/
│   │   └── RegistrationObjects.spec.js     # Locators for Signup, Registration form, Account Created & Delete
│   ├── PageActions/
│   │   └── RegistrationActions.spec.js     # Page action methods & assertions for user registration & deletion
│   ├── TestScripts/
│   │   └── RegistrationTestScript.spec.js  # End-to-end user registration & account deletion test
│   └── example.spec.js                     # Default Playwright sample test
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js                    # Playwright config (Chromium, 90s timeout, video: 'on', HTML reporter)
└── README.md
```

---

## Framework Layers

| Layer | File | Class | Responsibility |
| :--- | :--- | :--- | :--- |
| **Common Methods** | `tests/CommonMethods/CommonMethods.spec.js` | `CommonMethods` | Provides `waitforseconds(seconds)` utility wrapping `page.waitForTimeout()`. |
| **Base Library** | `tests/BaseLibrary/BaseClass.spec.js` | `BaseClass` | Extends `CommonMethods`; provides `loginintobrowser(url)` and `closebrowser()`. |
| **Page Objects** | `tests/PageObjects/RegistrationObjects.spec.js` | `RegistrationPageObjects` | Extends `BaseClass`; stores XPath locators for signup, registration fields, confirmation headings, and account deletion. |
| **Page Actions** | `tests/PageActions/RegistrationActions.spec.js` | `RgistrationActionclass` | Extends `RegistrationPageObjects`; implements form input, click actions, and Playwright `expect(...).toHaveText(...)` assertions. |
| **Test Script** | `tests/TestScripts/RegistrationTestScript.spec.js` | — | Executes the end-to-end user registration and cleanup flow. |

---

## Automated Test Flow (`RegistrationTestScript.spec.js`)

**Test Suite:** `Registration Test` → `should register a new user with valid details`

1. Generates a dynamic email address (`gukesh<random>@capgimini.com`) and opens `https://www.automationexercise.com/` via `loginintobrowser()`.
2. Clicks **Signup / Login** (`clickonsignin()`), fills **Name** and **Email Address**, and clicks **Signup** (`clickonsignup()`).
3. Completes the registration form (`setpassword`, `setfname`, `setlastname`, `setaddress`, `setstate`, `setcity`, `setzipcode`, `setmobileno`) and submits (`clicktocreate()`).
4. Verifies the `Account Created!` confirmation heading via `registrationverification('Account Created!')` and clicks **Continue** (`clickcontinue()`).
5. Deletes the newly created account (`clickdeleteaccount()`), verifies `Account Deleted!` via `deleteverification('Account Deleted!')`, and closes the browser (`closebrowser()`).

---

## Configuration Highlights (`playwright.config.js`)

- **Test Directory:** `./tests`
- **Browser Project:** `chromium` (`Desktop Chrome`)
- **Timeout & Navigation Timeout:** `90000` ms (90s)
- **Video Recording:** `on`
- **Trace:** `on-first-retry`
- **Reporter:** `html`

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (included with Node.js)

---

## Setup & Running Tests

1. **Navigate to the project directory:**
   ```bash
   cd ATExercise_RegistrationPOMdesign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

4. **Run tests:**
   ```bash
   # Run all tests (headless Chromium)
   npx playwright test

   # Run the registration test in headed mode
   npx playwright test tests/TestScripts/RegistrationTestScript.spec.js --headed

   # Open Playwright UI Mode
   npx playwright test --ui

   # View the HTML test report
   npx playwright show-report
   ```
