describe("Header_Sidebar", () => {
   beforeEach(()=>{
 
      cy.intercept('GET','**/getListErrorStatus',{fixture: 'error-status.json'}).as('GetErrorStatus')
  
      cy.intercept('GET','**/getListErrorByServiceId*',{fixture: 'TaskError.json'}).as('TaskError')
  
      cy.intercept('GET','**/getListProjectByOwner?*',{fixture: 'listproject-project.json'}).as('GetProjectByOwner')
      cy.intercept('GET','**/getListProject?*',{fixture: 'listproject-project.json'}).as('GetListProject')
      cy.intercept('GET','**/getProject?*',{fixture: 'Projectid.json'}).as('GetProject2')
  
      cy.intercept('GET','**/getListUser',{fixture: 'getlistUser.json'}).as('ListUser')
      
      cy.intercept('GET','**/getService?*',{fixture: 'Serviceobj.json'}).as('ServiceID')
      cy.intercept('GET','**/getListService?*',{fixture: 'Service.json'}).as('ServiceByProject')
  
      cy.customlogin();
    })

    it("Header_Sidebar", () => {
     cy.visit('/home/project/list')

    //------------------Sidebar-----------------//

     cy.get('[data-testid="navigation-icon"]').should('not.visible')
     cy.viewport(1000, 660).wait(1000)
     cy.get('[data-testid="sidebar"]').should('not.visible')
     cy.get('[data-testid="navigation-icon"]').should('be.visible').wait(500).click()
     cy.get('[data-testid="sidebar"]').should('be.visible')

     cy.get('[data-testid="side-menu1"]').click()
     cy.url().should('include','/home/monitor/list')
     cy.get('[data-testid="side-menu2"]').click().wait(500)
     cy.url().should('include','/home/project/list')

     //------------------header-----------------//

      cy.visit('/home/monitor/task?serviceId=1').wait(800)
      cy.get('[data-testid="navi"]').eq(0).click()
      cy.url().should('include','/home/monitor/list')

      cy.visit('/home/project/detail?projectId=1').wait(800)
      cy.get('[data-testid="navi"]').eq(0).click()
      cy.url().should('include','/home/project/list')

      cy.get('[data-testid="dropdown"]').click()
      cy.get('.dropdown-menu > li > .dropdown-item > .h-100').click()
      cy.url().should('include','/login/')

    });
 });
 