import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const uiBaseUse = {
  baseURL: process.env.GAMDOM_BASE_URL,
  actionTimeout: 15000,
  headless: true,
  trace: "retain-on-failure",
  video: "retain-on-failure",
  screenshot: "only-on-failure",
};

const uiTestMatch = ["**/gamdomBasicUiTests.spec.ts"];

const uiBrowsers = ["chromium", "firefox", "webkit"];

const uiProjects = uiBrowsers.map((browserName) => ({
  name: `ui-${browserName}`,
  testMatch: uiTestMatch,
  use: {
    ...uiBaseUse,
    browserName,
  },
}));

const apiProject = {
  name: "api tests",
  use: {
    baseURL: process.env.JIRA_API_BASE_URL,
  },
  testMatch: ["**/jiraApiTests.spec.ts"],
};

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: 2,
  workers: 3,
  reporter: "html",
  use: {
    trace: "on-first-retry",
  },
  projects: [
    ...uiProjects,
    apiProject,
  ],
});
