/// <reference types="cypress" />
import { LoginPage } from "../pages/login_page"
import { SiteHeader } from "../pages/site_header"

context('Testing Login Page', () => {
    beforeEach(() => {
        cy.visit('https://dashboard.foreman.mn/login/')
    })


let loginPage = new LoginPage()
let siteHeader = new SiteHeader()

it('login/logout test', () =>{

    loginPage.assertLoginLogo();
    loginPage.assertUsernameFieldText();
    loginPage.enterUsername('gregoryjwacker@gmail.com');
    loginPage.assertPasswordFieldText()
    loginPage.enterPassword();
    loginPage.assertLoginBtnText();
    loginPage.clickSignInBtn();
    siteHeader.logout();
    loginPage.assertLoginBtnText();
    
    })
})