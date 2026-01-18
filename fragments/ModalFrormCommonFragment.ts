import { Page, Locator } from "@playwright/test";
import { SignInModalDialogSelectors, CommonModalFormSelectors } from "../selectors/selectors"
import { BasePage } from "../pages/BasePage";

export class ModalFormCommonFragment extends BasePage {
  public telegramSignInButton: Locator;
  public googleSignInButton: Locator;
  public steamSignInButton: Locator;
  public usernameInputField: Locator;
  public passwordInputField: Locator;

  constructor(readonly page: Page) {
    super(page);
    this.setupLocators();
  }

  private setupLocators(): void {
    this.telegramSignInButton = this.getLocatorByDataTestId(CommonModalFormSelectors.telegramSignInButton);
    this.googleSignInButton = this.getLocatorByDataTestId(CommonModalFormSelectors.googleSignInButton);
    this.steamSignInButton = this.getLocatorByDataTestId(CommonModalFormSelectors.steamSignInButton);
    this.usernameInputField = this.getLocator(CommonModalFormSelectors.usernameInputField);
    this.passwordInputField = this.getLocator(CommonModalFormSelectors.passwordInputField);
  }
}