describe("Monitor_List", () => {
      beforeEach(()=>{
     
        cy.intercept('GET','**/getListErrorStatus',{fixture: 'error-status.json'}).as('GetErrorStatus')
        cy.intercept('GET','**/getListErrorByServiceId*',{fixture: 'TaskError.json'}).as('TaskError')
        cy.intercept('GET','**/getListProject?*',{fixture: 'listproject-error.json'}).as('GetListProject')
        cy.intercept('GET','**/getProject?*',{fixture: 'Projectid.json'}).as('GetProject2')
        cy.intercept('GET','**/getListUser',{fixture: 'getlistUser.json'}).as('ListUser')
        cy.intercept('GET','**/getService?*',{fixture: 'Serviceobj.json'}).as('ServiceID')
        cy.intercept('GET','**/getListService?*',{fixture: 'Service.json'}).as('ServiceByProject')
    
        cy.customlogin();
      })  

    it("Error", () => {

    cy.visit('/home/monitor/list')
  
    cy.url().should('include','/home/monitor/list')

    //----------------search-project-------------//
    cy.get('[data-testid="input-search"]').type('4')
    cy.get('#project-2').should('not.exist')
    cy.get('#project-3').should('not.exist')
    cy.get('[data-testid="input-search"]').clear().type('project 1')

    //----------------check-project-------------//
    cy.get('#project-0').find('[data-testid="Member"]').should('have.length','6')
    cy.get('#project-0').click()
   
    cy.get('[data-testid="icon-list"]').eq(0).click().wait(1000)
    cy.get('[data-testid="navi"]').eq(0).click()
     
  
    });
});