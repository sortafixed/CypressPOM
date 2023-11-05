//home page objects

export class SiteHeader{

    logout(){
        cy.get('#dd-user-menu').click()
        cy.get('[href="/logout/"]').click()
    }




}