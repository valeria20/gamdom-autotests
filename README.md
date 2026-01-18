[Critical Business Functional Areas Document](https://drive.google.com/file/d/1gRX0TziHW4EZWbDW4pj2HHcjjV8yDJ8R/view?usp=sharing) | [Complex Scenario Document](https://drive.google.com/file/d/1GsKK3LE7ElpHtb_dp99_RhfhyKiHzY63/view?usp=sharing)

# 🎭 Playwright UI & API Test Suites

This repository contains an automated testing framework built with Playwright and TypeScript.  
It includes UI tests for **Gamdom** and API tests for **Jira Issues API**.  
UI tests run in Chromium, Firefox and WebKit. API tests use Playwright’s built-in request fixture.

## 🧩 Prerequisites

- Node.js v18+
- npm

## 📦 Installation
```
git clone https://github.com/valeria20/gamdom-autotests
cd gamdom-autotests
npm install
npx playwright install
```

## ⚙️ Configuration
Create a .env file in the project root(see env.example):
Example:
```
GAMDOM_BASE_URL=https://megaurl.com
JIRA_API_BASE_URL=https://gigaurl.com
JIRA_API_AUTH_TOKEN=kjwenkwefkwejnf...
```

## 🚀 Running Tests
**Run all tests (UI + API)**
```
npm run tests
```

**Run only UI tests (Chromium + Firefox + WebKit)**
```
npm run ui-tests
```

**Run only API tests**
```
npm run api-tests
```

# 🔎 Test Automation Framework Overview

## Framework structure choices
The framework is structured to clearly separate responsibilities and make the code easy to read, maintain and scale.
Contains all automated tests, separated by type.

#### ``` tests/ ```

Contains all automated tests, separated by type:
+ ``` tests/ui ``` - UI tests for the Gamdom 
+ ``` tests/api ``` - API tests for Jira Issues API
This separation allows running UI and API tests independently and scaling them separately.

#### ```pages/```

Implements the **Page Object Model (POM)** for UI testing:

+ ```BasePage.ts``` contains shared logic (navigation, common helpers)
+ ```HomePage.ts``` and ```GamdomOriginalsPage.ts``` represent main application pages

This approach keeps test logic clean and prevents duplication of UI interaction code.

#### ```fragments/```

Contains UI fragments for reusable parts of the interface, such as modal dialogs:

+ Sign In modal
+ Create Account modal
+ Common modal elements

Fragments help to avoid very large Page Objects and improve maintainability when UI components are reused across pages.

#### ```selectors/```

Central place for UI selectors.
This allows updating selectors in one place if the UI changes, without modifying tests or page logic.

#### ```data/```

Contains static data and constants:

+ API endpoints
+ application paths
+ predefined game lists

This avoids hardcoded strings in tests and improves readability and consistency.

#### ```services/```

Contains API client logic:

+ ```JiraIssueApiClient.ts``` is a simple API client that sends requests to Jira

The client is intentionally kept “thin” and does not include assertions. All validations are done in tests.

#### ```fixtures/```

Custom Playwright fixtures:

+ UI pages
+ API request context

Fixtures simplify test setup and ensure consistent test initialization.

## Design patterns used and why

#### Page Object Model (POM)

Used for UI testing to separate test logic from UI interaction logic.
This makes tests easier to read and reduces duplication.

#### Fragment / Component pattern

Used for modal dialogs and reusable UI blocks.
This helps keep Page Objects small and focused.

#### Centralized configuration and data

Selectors, endpoints and constants are stored in dedicated files to avoid duplication and simplify updates.

## How the framework can be scaled

The framework is designed to scale without major refactoring:

+ new UI pages can be added to the pages folder
+ new reusable UI components can be added as fragments
+ new API integrations can be added as separate API clients in ```services```
+ additional test types can be added as new folders under ```tests```
+ environment-specific configurations can be extended using ```.env``` file

Because responsibilities are clearly separated, new features and tests can be added without affecting existing ones



