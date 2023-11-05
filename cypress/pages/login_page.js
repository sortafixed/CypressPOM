// login page objects

export class LoginPage{
   
    assertLoginLogo() {
        cy.get('img[src="https://static.foreman.mn/core/banners/foreman-blue.png"]')
        .should('be.visible')
        .and($img => expect($img[0].naturalWidth).to.be.gt(0))
        
    }

    assertUsernameFieldText(username) {
        cy.get(':nth-child(2) > .form-control')
            .invoke('attr', 'placeholder')
            .should('contain', 'E-Mail')
    }

    enterUsername(username) {
        cy.get(':nth-child(2) > .form-control').type(username)
    }
    
    assertPasswordFieldText() {
       cy.get(':nth-child(3) > .form-control')
            .invoke('attr', 'placeholder')
            .should('contain', 'Password')
    }

    enterPassword(){
        cy.get(':nth-child(3) > .form-control').type('B@dDoggy3')
    }

    assertLoginBtnText(){
        cy.get('.float-right')
            .should('contain', 'Sign in')
    }
    clickSignInBtn(){
        cy.get('.float-right').click()
    }

    resetPasswordLink() {
        cy.get('.float-left > a')
    }

    

}