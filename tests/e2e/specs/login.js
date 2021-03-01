// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
   it("Sign in", () => {

  //   cy.visit('http://localhost:8080/login')
 
  //   cy.get('.pl-5').click()
  //   cy.get('#alert-incorrect').should('be.visible')

  //   cy.get('#username').wait(200).type('GameKanna')
  //   cy.get('.pl-5').click()
  //   cy.get('#alert-incorrect').should('be.visible')
    
  //   cy.wait(200)
  //   cy.get('#password').type('Bb@2541')
  //   cy.get('#username').clear()
  //   cy.get('.pl-5').click()
  //   cy.get('#alert-incorrect').should('be.visible')

  //   cy.wait(200)
  //   cy.get('#username').clear().type('GameKanna')
  //   cy.get('#checkbox-1').check({force: true})
  //   cy.get('.pl-5').click()
  //   cy.get('#alert-incorrect').should('not.visible')

  //   cy.url().should('eq','http://localhost:8080/home/project/list')

   });

  it("Error", () => {

    cy.visit('http://localhost:8080/login')
    cy.get('#username').type('GameKanna')
    cy.get('#password').type('Bb@2541')
    cy.get('#checkbox-1').check({force: true})
    cy.get('.pl-5').click().wait(1000)
    cy.visit('http://localhost:8080/home/monitor/list')
  
    cy.reload().wait(2000)
  
    cy.get('.input-search').type('project 1')
  
    cy.get('.input-search').clear().type('4')
    cy.get('#project-1').should('not.exist')
    cy.get('#project-2').should('not.exist')
    cy.get('#project-0').click()
  
    cy.get('.navigation-icon').should('not.visible')
    // cy.viewport(1000, 660).wait(1000)
    // cy.get('.navigation-icon').should('be.visible').click().click()

    // cy.viewport(1440, 660)

    cy.get('#1').wait(1000).click()
    cy.get('.row > .col-xl > .d-flex > .p-2 > a:nth-child(2)').first().click()
   
    
  
  
    });
});
