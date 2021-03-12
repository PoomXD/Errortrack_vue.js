// https://docs.cypress.io/api/introduction/api.html

describe("Sign_in", () => {
   it("Sign in", () => {

    cy.visit('http://localhost:8080/login')
    cy.visit('http://localhost:8080/home/project/list').url().should('eq','http://localhost:8080/login/')
    cy.visit('http://localhost:8080/home/monitor/list').url().should('eq','http://localhost:8080/login/')
 
    cy.get('.pl-5').click()
    cy.get('[data-testid="alert-incorrect"]').should('be.visible')

    cy.get('[data-testid="username"]').wait(200).type('GameKanna')
    cy.get('.pl-5').click()
    cy.get('[data-testid="alert-incorrect"]').should('be.visible')
    
    cy.wait(200)
    cy.get('[data-testid="password"]').type('Bb@2541')
    cy.get('[data-testid="username"]').clear()
    cy.get('.pl-5').click()
    cy.get('[data-testid="alert-incorrect"]').should('be.visible')

    cy.wait(200)
    cy.get('[data-testid="username"]').clear().type('GameKanna')
    cy.get('[data-testid="checkbox-1"]').check({force: true})
    cy.get('.pl-5').click()

    cy.url().should('eq','http://localhost:8080/home/project/list')
    cy.visit('http://localhost:8080/login')
    .url().should('eq','http://localhost:8080/home/project/list').wait(500)
    cy.clearLocalStorage().log("clearLocalStorage!!")
    cy.reload()
    .url().should('eq','http://localhost:8080/login/').wait(500)


   });

});
