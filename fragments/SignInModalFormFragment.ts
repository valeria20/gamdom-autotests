import { Page, Locator } from "@playwright/test";
import { SignInModalDialogSelectors } from "../selectors/selectors"
import { BasePage } from "../pages/BasePage";

export class SignInModalFormFragment extends BasePage {
  public signInStartPlayingButton: Locator;

  constructor(readonly page: Page) {
    super(page);
    this.setupLocators();
  }

  private setupLocators(): void {
    this.signInStartPlayingButton = this.getLocatorByDataTestId(SignInModalDialogSelectors.startPlayingButton);
  }
}