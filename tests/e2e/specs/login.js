// https://docs.cypress.io/api/introduction/api.html

describe("Sign_in", () => {
   it("Sign in", () => {

    cy.visit('http://localhost:8080/login')
 
    cy.get('.pl-5').click()
    cy.get('#alert-incorrect').should('be.visible')

    cy.get('#username').wait(200).type('GameKanna')
    cy.get('.pl-5').click()
    cy.get('#alert-incorrect').should('be.visible')
    
    cy.wait(200)
    cy.get('#password').type('Bb@2541')
    cy.get('#username').clear()
    cy.get('.pl-5').click()
    cy.get('#alert-incorrect').should('be.visible')

    cy.wait(200)
    cy.get('#username').clear().type('GameKanna')
    cy.get('#checkbox-1').check({force: true})
    cy.get('.pl-5').click()
    cy.get('#alert-incorrect').should('not.visible')

    cy.url().should('eq','http://localhost:8080/home/project/list')

   });

});
