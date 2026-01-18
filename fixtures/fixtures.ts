import { test as base, expect, APIRequestContext } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { GamdomOriginalsPage } from "../pages/GamdomOriginalsPage";

export const test = base.extend<{
  homePage: HomePage;
  gamdomOriginalsPage: GamdomOriginalsPage;
  api: APIRequestContext;
}>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  gamdomOriginalsPage: async ({ page }, use) => {
    await use(new GamdomOriginalsPage(page));
  },

  api: async ({ playwright }, use) => {
    const baseURL = process.env.JIRA_API_BASE_URL;
    const auth = process.env.JIRA_API_AUTH_TOKEN;

    if (!baseURL) throw new Error("JIRA_API_BASE_URL is missing");
    if (!auth) throw new Error("JIRA_API_AUTH_TOKEN is missing");

    const api = await playwright.request.newContext({
      baseURL,
      extraHTTPHeaders: {
        Authorization: `Basic ${auth}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    await use(api);
    await api.dispose();
  },
});

export { expect };