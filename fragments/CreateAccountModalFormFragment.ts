import { Page, Locator } from "@playwright/test";
import { CreateAccountModalDialogSelectors } from "../selectors/selectors"
import { BasePage } from "../pages/BasePage";

export class CreateAccountModalFormFragment extends BasePage {
  public createAccountStartPlayingButton: Locator;

  constructor(readonly page: Page) {
    super(page);
    this.setupLocators();
  }

  private setupLocators(): void {
    this.createAccountStartPlayingButton = this.getLocatorByDataTestId(CreateAccountModalDialogSelectors.startPlayingButton);
  }
}