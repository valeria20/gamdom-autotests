import { Locator, Page } from "@playwright/test";

export class BasePage {
  constructor(readonly page: Page) {
  }

  public getLocator(selector: string): Locator {
    return this.page.locator(selector);
  }

  public getLocatorByDataTestId(dataTestValue: string): Locator {
    return this.getLocator(`//*[@data-testid='${dataTestValue}']`);
  }

  async goto(url = ""): Promise<void> {
    await this.page.goto(url);
  }


}