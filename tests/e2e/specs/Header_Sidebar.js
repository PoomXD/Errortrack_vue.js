describe("Header_Sidebar", () => {
    it("Header_Sidebar", () => {
 
     cy.visit('http://localhost:8080/login')
  
     cy.get('#username').type('GameKanna')
     cy.get('#password').type('Bb@2541')
     cy.get('#checkbox-1').check({force: true})
     cy.get('.pl-5').click().wait(2000)

     cy.url().should('eq','http://localhost:8080/home/project/list')
    //------------------Sidebar-----------------//
     cy.get('.navigation-icon').should('not.visible')
     cy.viewport(1000, 660).wait(1000)
     cy.get('.sidebar').should('not.visible')
     cy.get('.navigation-icon').should('be.visible').click()
     cy.get('.sidebar').should('be.visible')

     cy.get('.sidebar > .mt-4 > .nav > li:nth-child(1) > a').click()
     cy.url().should('eq','http://localhost:8080/home/monitor/list')
     cy.get('.sidebar > .mt-4 > .nav > li:nth-child(2) > a').click()
     cy.url().should('eq','http://localhost:8080/home/project/list')
     //------------------header-----------------//
     cy.visit('http://localhost:8080/home/monitor/task?serviceId=1')
     cy.get('.row > .col-xl > .d-flex > .p-2 > a:nth-child(2)').first().click()
     cy.url().should('eq','http://localhost:8080/home/monitor/list')

     cy.visit('http://localhost:8080/home/project/detail?projectId=1')
     cy.get('.row > .col-xl > .d-flex > .p-2 > a:nth-child(2)').first().click()
     cy.url().should('eq','http://localhost:8080/home/project/list')

     cy.get('#dropdown').click()
     cy.get('.dropdown-menu > li > .dropdown-item > .h-100').click()
     cy.url().should('eq','http://localhost:8080/login/')

    });
 });
 