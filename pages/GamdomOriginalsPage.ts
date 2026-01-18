import { Page, Locator } from "@playwright/test";
import { GamdomOriginalsPageSelectors  } from "../selectors/selectors"
import { BasePage } from "./BasePage";

export class GamdomOriginalsPage extends BasePage {
  public gameItemGameNameTextElement: Locator;

  constructor(readonly page: Page) {
    super(page);
    this.setupLocators();
  }

  private setupLocators(): void {
    this.gameItemGameNameTextElement = this.getLocator(GamdomOriginalsPageSelectors.gameItemGameNameText);
  }

  public async getListOfGamesNames(): Promise<string[]> {
    const gameNamesElements = await this.gameItemGameNameTextElement.elementHandles();
    const gameNames: string[] = [];
    for (const element of gameNamesElements) {
      const gameName = await element.textContent();
      if (gameName) {
        gameNames.push(gameName.trim());
      }
    }
    return gameNames;
  }
}