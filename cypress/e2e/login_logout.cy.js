/// <reference types="cypress" />
import { LoginPage } from "../pages/login_page"
import { SiteHeader } from "../pages/site_header"

let loginPage = new LoginPage()
let siteHeader = new SiteHeader()

it('login test', function(){

    loginPage.navigateToLoginPage();
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


// it('google test', function(){
//     cy.visit('https://dashboard.foreman.mn/login/')
//     cy.get(':nth-child(2) > .form-control').type('gregoryjwacker@gmail.com')
//     cy.get(':nth-child(3) > .form-control').type('B@dDoggy3')
//     cy.get('.float-right').click()
//     cy.get('#dd-user-menu').click()
//     cy.get('[href="/logout/"]').click()

//     //cy.get('#APjFqb').type('Automation Testing{enter}')
// })