describe("Header_Sidebar", () => {
   beforeEach(()=>{
 
      cy.intercept('GET','**/getListErrorStatus',{fixture: 'ErrorStatus.json'}).as('GetErrorStatus')
      // cy.intercept('GET','**/getListErrorByServiceId?',{fixture: 'ErrorStatus.json'}).as('GetErrorStatusByID2')
  
      cy.intercept('GET','**/getListErrorByServiceId*',{fixture: 'TaskError.json'}).as('TaskError')
  
      cy.intercept('GET','**/getListProjectByOwner?*',{fixture: 'GetListProject.json'}).as('GetProjectByOwner')
      cy.intercept('GET','**/getListProject?*',{fixture: 'GetListProjectAll.json'}).as('GetListProject')
      // cy.intercept('GET','**/getProject',{fixture: 'GetListProject.json'}).as('GetProject')
      cy.intercept('GET','**/getProject?*',{fixture: 'Projectid.json'}).as('GetProject2')
  
      cy.intercept('GET','**/getListUser',{fixture: 'getlistUser.json'}).as('ListUser')
      
      cy.intercept('GET','**/getService?*',{fixture: 'Serviceobj.json'}).as('ServiceID')
      cy.intercept('GET','**/getListService?*',{fixture: 'Service.json'}).as('ServiceByProject')
  
      cy.customlogin();
    })
    it("Header_Sidebar", () => {
     cy.visit('http://localhost:8080/home/project/list')

    //------------------Sidebar-----------------//

     cy.get('.navigation-icon').should('not.visible')
     cy.viewport(1000, 660).wait(1000)
     cy.get('.sidebar').should('not.visible')
     cy.get('.navigation-icon').should('be.visible').wait(500).click()
     cy.get('.sidebar').should('be.visible')

     cy.get('.sidebar > .mt-4 > .nav > li:nth-child(1) > a').click()
     cy.url().should('eq','http://localhost:8080/home/monitor/list')
     cy.get('.sidebar > .mt-4 > .nav > li:nth-child(2) > a').click()
     cy.url().should('eq','http://localhost:8080/home/project/list')

     //------------------header-----------------//

      cy.visit('http://localhost:8080/home/monitor/task?serviceId=1').wait(800)
      cy.get('.row > .col-xl > .d-flex > .p-2 > a:nth-child(2)').first().click()
      cy.url().should('eq','http://localhost:8080/home/monitor/list')

      cy.visit('http://localhost:8080/home/project/detail?projectId=1').wait(800)
      cy.get('.row > .col-xl > .d-flex > .p-2 > a:nth-child(1)').first().click()
      cy.url().should('eq','http://localhost:8080/home/project/list')

      cy.get('#dropdown').click()
      cy.get('.dropdown-menu > li > .dropdown-item > .h-100').click()
      cy.url().should('eq','http://localhost:8080/login/')

    });
 });
 