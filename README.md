# Automation-Testing-Internship-log

A structured repository documenting automation testing frameworks, scripts, and hands-on projects developed during my Automation Testing Internship.

---

## Repository Overview

| Project | Target Application | Framework & Language | Architecture | Status |
| :--- | :--- | :--- | :--- | :--- |
| [`OHRM_POMSampleDesign`](./OHRM_POMSampleDesign) | [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com) | Playwright (`@playwright/test` `^1.65.1`), JavaScript | Layered Page Object Model (POM) | Completed |
| [`ATExercise_RegistrationPOMdesign`](./ATExercise_RegistrationPOMdesign) | [Automation Exercise](https://www.automationexercise.com/) | Playwright (`@playwright/test` `^1.65.1`), JavaScript | Layered POM with Inheritance & CI | Completed |

---

## Repository Structure

```text
Automation-Testing-Internship-log/
├── ATExercise_RegistrationPOMdesign/
│   ├── .github/workflows/playwright.yml        # GitHub Actions CI workflow
│   ├── tests/
│   │   ├── CommonMethods/
│   │   │   └── CommonMethods.spec.js           # Reusable wait utility
│   │   ├── BaseLibrary/
│   │   │   └── BaseClass.spec.js               # Browser navigation & teardown wrapper
│   │   ├── PageObjects/
│   │   │   └── RegistrationObjects.spec.js     # Registration & account deletion locators
│   │   ├── PageActions/
│   │   │   └── RegistrationActions.spec.js     # Registration actions & assertions
│   │   ├── TestScripts/
│   │   │   └── RegistrationTestScript.spec.js  # End-to-end user registration & deletion test
│   │   └── example.spec.js                     # Default Playwright sample test
│   ├── package.json
│   ├── package-lock.json
│   ├── playwright.config.js                    # Playwright config (Chromium, 90s timeout, video: 'on')
│   └── README.md                               # Detailed framework documentation
├── OHRM_POMSampleDesign/
│   ├── tests/
│   │   ├── BaseLibrary/
│   │   │   └── BaseClass.spec.js               # Browser launch, navigation & teardown wrapper
│   │   ├── PageObjects/
│   │   │   ├── LoginPageObjects.spec.js        # Login page locators
│   │   │   ├── AdminPageObjects.spec.js        # Admin User Role search locators
│   │   │   ├── AdminPageStatusObject.spec.js   # Admin Add, Search & Delete locators
│   │   │   └── MyinfopageObject.spec.js        # My Info (Personal Details) locators
│   │   ├── PageActions/
│   │   │   ├── LoginPageActions.spec.js        # Login page actions
│   │   │   ├── AdminPageActions.spec.js        # Admin User Role search actions
│   │   │   ├── AdminPageStatusAction.spec.js   # Admin Add, Search & Delete actions
│   │   │   └── MyinfoPageaction.spec.js        # My Info (Personal Details) actions
│   │   └── TestScripts/
│   │       ├── LoginTestScript.spec.js         # Login scenario
│   │       ├── AdminTestScript.spec.js         # Admin role search scenario
│   │       ├── AdminPageStatusScript.spec.js   # Admin user creation, search & deletion scenario
│   │       └── MyinfoPageScript.spec.js        # My Info personal details update scenario
│   ├── package.json
│   ├── package-lock.json
│   ├── playwright.config.js                    # Playwright config (Chromium, HTML reporter)
│   └── README.md                               # Detailed framework documentation
└── README.md
```

---

## Projects Included

### 1. OHRM_POMSampleDesign

An end-to-end Playwright test automation framework for **OrangeHRM** built in JavaScript using a layered **Page Object Model (POM)** design (`BaseLibrary` → `PageObjects` → `PageActions` → `TestScripts`).

#### Automated Test Coverage

| # | Module / Operation | Test Script | Summary |
| :-: | :--- | :--- | :--- |
| 1 | **Login** | `LoginTestScript.spec.js` | Launches OrangeHRM, logs in with demo credentials, and verifies navigation to `/dashboard`. |
| 2 | **Admin Role Search** | `AdminTestScript.spec.js` | Navigates to **Admin**, filters by **User Role** (`Admin`), and verifies the `(<count>) Record(s) Found` result text. |
| 3 | **Admin User Lifecycle** | `AdminPageStatusScript.spec.js` | Creates a new system user with a dynamic username, searches for the user, deletes the record, confirms deletion, and verifies the `Success` toast notification. |
| 4 | **My Info Update** | `MyinfoPageScript.spec.js` | Navigates to **My Info → Personal Details**, updates First, Middle, and Last Name, saves changes, and verifies the `Success` toast notification. |

> For full locator/action mappings and detailed usage, see [`OHRM_POMSampleDesign/README.md`](./OHRM_POMSampleDesign/README.md).

---

### 2. ATExercise_RegistrationPOMdesign

An end-to-end Playwright test automation framework for **Automation Exercise** built in JavaScript using a 5-layer POM inheritance chain (`CommonMethods` → `BaseClass` → `RegistrationPageObjects` → `RgistrationActionclass` → `RegistrationTestScript`), complete with video recording and a GitHub Actions CI workflow.

#### Automated Test Coverage

| # | Module / Operation | Test Script | Summary |
| :-: | :--- | :--- | :--- |
| 1 | **User Registration & Cleanup** | `RegistrationTestScript.spec.js` | Registers a new user with a dynamic email, fills personal/address details, verifies `Account Created!`, then deletes the account and verifies `Account Deleted!`. |

> For full architecture details and usage, see [`ATExercise_RegistrationPOMdesign/README.md`](./ATExercise_RegistrationPOMdesign/README.md).

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (included with Node.js)

### Setup & Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anujkandalkar/Automation-Testing-Internship-log.git
   cd Automation-Testing-Internship-log/<project-folder>
   ```
   *(Replace `<project-folder>` with `OHRM_POMSampleDesign` or `ATExercise_RegistrationPOMdesign`.)*

2. **Install dependencies and Playwright browsers:**
   ```bash
   npm install
   npx playwright install
   ```

3. **Run the test suite:**
   ```bash
   # Run all tests (headless Chromium)
   npx playwright test

   # Run all tests in headed mode
   npx playwright test --headed

   # Open Playwright UI Mode
   npx playwright test --ui

   # View the HTML test report
   npx playwright show-report
   ```

---

## Author

- **Anuj Kandalkar** — [@anujkandalkar](https://github.com/anujkandalkar)
