/// <reference types="cypress" />
import { LoginPage } from "../pages/login_page";
import { SiteHeader } from "../pages/site_header";

context("Testing Login Page", () => {
  beforeEach(() => {
    cy.visit("https://dashboard.foreman.mn/login/");
  });

  const loginPage = new LoginPage();
  const siteHeader = new SiteHeader();

  it("login/logout test", () => {
    cy.fixture("testdata").then(({ email, password }) => {
      loginPage.assertLoginLogo();
      loginPage.assertUsernameFieldText();
      loginPage.enterUsername(email);
      loginPage.assertPasswordFieldText();
      loginPage.enterPassword(password);
      loginPage.assertLoginBtnText();
      loginPage.clickSignInBtn();
      siteHeader.logout();
      loginPage.assertLoginBtnText();
    });
  });
});
