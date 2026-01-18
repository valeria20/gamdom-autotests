# 🎭 Playwright UI & API Test Suites

This repository contains an automated testing framework built with Playwright and TypeScript.  
It includes UI tests for **Gamdom** and API tests for **Jira**.  
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
JIRA_API_AUTH_TOKEN=kjwenkwefkwejnf....
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
