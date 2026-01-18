import { expect, test } from "../../fixtures/fixtures";
import { GamdomOriginalsGames } from "../../data/GamdomOriginalsGamesList";
import {  GamdomPaths } from "../../data/GamdomPaths";
const TIMEOUT = 30000;

test.describe("UI tests", () => {

  test.beforeEach(async ({ homePage}) => {
    await homePage.goto();
  });

  test("Open 'Sign in' modal form and verify availability of key buttons", async ({ homePage }) => {
    const keyButtonsLocators = [
      homePage.getSignInModalFormFragment().signInStartPlayingButton,
      homePage.getCommonModalFormFragment().googleSignInButton,
      homePage.getCommonModalFormFragment().telegramSignInButton,
      homePage.getCommonModalFormFragment().steamSignInButton,
      homePage.getCommonModalFormFragment().usernameInputField,
      homePage.getCommonModalFormFragment().passwordInputField
    ];

    await homePage.openSignInModalDialog();
    for (const buttonLocator of keyButtonsLocators) {
      await expect(buttonLocator, "Key button should be available on 'Sign in' modal form").toBeVisible( {timeout: TIMEOUT});
    }
  });

  test("Open 'Create account' modal form and verify availability of key buttons", async ({ homePage }) => {
    const keyButtonsLocators = [
      homePage.getCreateAccountModalFormFragment().createAccountStartPlayingButton,
      homePage.getCommonModalFormFragment().googleSignInButton,
      homePage.getCommonModalFormFragment().telegramSignInButton,
      homePage.getCommonModalFormFragment().steamSignInButton,
      homePage.getCommonModalFormFragment().usernameInputField,
      homePage.getCommonModalFormFragment().passwordInputField
    ];

    await homePage.openCreateAccountModalDialog();
    for (const buttonLocator of keyButtonsLocators) {
      await expect(buttonLocator, "Key button should be available on 'Create account' modal form").toBeVisible( {timeout: TIMEOUT});
    }
  });

  test("Verify list of Gamdom Originals games", async ({ gamdomOriginalsPage, homePage }) => {
    await homePage.originalsViewAllButton.waitFor({ state: "visible", timeout: TIMEOUT });

    await Promise.all([
      homePage.page.waitForURL(`**${GamdomPaths.ORIGINALS_GAMES}`),
      homePage.originalsViewAllButton.click(),
    ]);

    await expect(homePage.page).toHaveURL(
      `${process.env.GAMDOM_BASE_URL}${GamdomPaths.ORIGINALS_GAMES}`
    );

    await gamdomOriginalsPage
      .gameItemGameNameTextElement
      .first()
      .waitFor({ state: "visible", timeout: TIMEOUT });

    const actualGames = await gamdomOriginalsPage.getListOfGamesNames();
    expect(actualGames.length, "Gamdom Originals games list should not be empty").toBeGreaterThan(0);

    const expectedGames = Object.values(GamdomOriginalsGames) as GamdomOriginalsGames[];

    const actualSet = new Set<string>(actualGames);
    const expectedSet = new Set<GamdomOriginalsGames>(expectedGames);

    for (const game of actualSet) {
      expect.soft(
        expectedSet.has(game as GamdomOriginalsGames),
        `Unexpected game displayed in UI: "${game}"`
      ).toBe(true);
    }

    for (const game of expectedSet) {
      expect.soft(
        actualSet.has(game),
        `Expected game is missing in UI: "${game}"`
      ).toBe(true);
    }
  });


});
