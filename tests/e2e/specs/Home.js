describe("My First Test", () => { 
    it("Home", () => {
 
   cy.visit('http://localhost:8080/login')
   cy.get('#username').type('GameKanna')
   cy.get('#password').type('Bb@2541')
   cy.get('#checkbox-1').check({force: true})
   cy.get('.pl-5').click().wait(2000)
   // cy.visit('http://localhost:8080/home/monitor/list')
 
   cy.reload()
 
   cy.get('.input-search').type('project 1')
   cy.get('#project-2').should('not.exist')
 
   cy.get('.input-search').clear().type('2')
   cy.get('#project-1').should('not.exist')
   cy.get('#project-2').should('not.exist')
   cy.get('#project-0').click()
 
   cy.get('.navigation-icon').should('not.visible')
   cy.viewport(1000, 660).wait(1000)
   cy.get('.navigation-icon').should('be.visible').click().click()
   cy.get('.row > .col-xl > .d-flex > .p-2 > a:nth-child(2)').click()
 
    });
 });