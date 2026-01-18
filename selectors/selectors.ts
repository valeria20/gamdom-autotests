export enum HomePageSelectors {
    signInButton = "signin-nav",
    createAccountButton = "signup-nav",
    originalsViewAllButton = "//div[contains(@class, 'Originals')]//a[contains(@class, 'ViewAll')]"
}

export enum SignInModalDialogSelectors {
  signInModalForm = "form-login",
  startPlayingButton = "start-playing-login"
}

export enum CreateAccountModalDialogSelectors {
  signInModalForm = "form-signup",
  startPlayingButton = "start-playing-signup"

}

export enum CommonModalFormSelectors {
  steamSignInButton = "steamSignInButton",
  googleSignInButton = "googleSignInButton",
  telegramSignInButton = "telegramSignInButton",
  usernameInputField = "//input[@name='username']",
  passwordInputField = "//input[@name='password']",
}

export enum GamdomOriginalsPageSelectors {
  gameItemGameNameText = "//a[contains(@class, 'GameItem')]//p[contains(@class, 'GameNameText')]"
}