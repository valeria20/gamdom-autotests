import { Page, Locator } from "@playwright/test";
import {
  HomePageSelectors,
  CreateAccountModalDialogSelectors,
  SignInModalDialogSelectors,
} from "../selectors/selectors"
import { BasePage } from "./BasePage";
import { SignInModalFormFragment } from "../fragments/SignInModalFormFragment";
import { CreateAccountModalFormFragment } from "../fragments/CreateAccountModalFormFragment";
import { ModalFormCommonFragment } from "../fragments/ModalFrormCommonFragment";

export class HomePage extends BasePage {
  private TIMEOUT = 30000;
  private _signInButton: Locator;
  private _createAccountButton: Locator;
  private _signInModalForm: Locator;
  private _createAccountModalForm: Locator;
  private readonly _signInModalFormFragment: SignInModalFormFragment;
  private readonly _createAccountModalFormFragment: CreateAccountModalFormFragment;
  private readonly _modalFormCommonFragment: ModalFormCommonFragment;
  public originalsViewAllButton: Locator;

  constructor(readonly page: Page) {
    super(page);
    this.setupLocators();
    this._signInModalFormFragment = new SignInModalFormFragment(this.page);
    this._createAccountModalFormFragment = new CreateAccountModalFormFragment(this.page);
    this._modalFormCommonFragment = new ModalFormCommonFragment(this.page);
  }

  public getSignInModalFormFragment(): SignInModalFormFragment {
    return this._signInModalFormFragment;
  }

  public getCreateAccountModalFormFragment(): CreateAccountModalFormFragment {
    return this._createAccountModalFormFragment;
  }

  public getCommonModalFormFragment(): ModalFormCommonFragment {
    return this._modalFormCommonFragment;
  }

  private setupLocators(): void {
    this._signInButton = this.getLocatorByDataTestId(HomePageSelectors.signInButton);
    this._createAccountButton = this.getLocatorByDataTestId(HomePageSelectors.createAccountButton);
    this._signInModalForm = this.getLocatorByDataTestId(SignInModalDialogSelectors.signInModalForm);
    this._createAccountModalForm = this.getLocatorByDataTestId(CreateAccountModalDialogSelectors.signInModalForm);
    this.originalsViewAllButton = this.getLocator(HomePageSelectors.originalsViewAllButton);
  }

  public async openSignInModalDialog(): Promise<void> {
    await this._signInButton.waitFor({ state: "visible", timeout: this.TIMEOUT });
    await this._signInButton.click();
    await this._signInModalForm.waitFor({ state: "visible", timeout: this.TIMEOUT });
  }

  public async openCreateAccountModalDialog(): Promise<void> {
    await this._createAccountButton.waitFor({ state: "visible", timeout: this.TIMEOUT });
    await this._createAccountButton.click();
    await this._createAccountModalForm.waitFor({ state: "visible", timeout: this.TIMEOUT });
  }
}