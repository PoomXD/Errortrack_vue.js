describe("Monitor_List", () => {
      beforeEach(()=>{
     
        cy.intercept('GET','**/getListErrorStatus',{fixture: 'error-status.json'}).as('GetErrorStatus')
        // cy.intercept('GET','**/getListErrorByServiceId?',{fixture: 'ErrorStatus.json'}).as('GetErrorStatusByID2')
    
        cy.intercept('GET','**/getListErrorByServiceId*',{fixture: 'TaskError.json'}).as('TaskError')
    
        // cy.intercept('GET','**/getListProjectByOwner?*',{fixture: 'listproject-project.json'}).as('GetProjectByOwner')
        cy.intercept('GET','**/getListProject?*',{fixture: 'listproject-error.json'}).as('GetListProject')
        // cy.intercept('GET','**/getProject',{fixture: 'GetListProject.json'}).as('GetProject')
        cy.intercept('GET','**/getProject?*',{fixture: 'Projectid.json'}).as('GetProject2')
    
        cy.intercept('GET','**/getListUser',{fixture: 'getlistUser.json'}).as('ListUser')
        
        cy.intercept('GET','**/getService?*',{fixture: 'Serviceobj.json'}).as('ServiceID')
        cy.intercept('GET','**/getListService?*',{fixture: 'Service.json'}).as('ServiceByProject')
    
        cy.customlogin();
      })  

    it("Error", () => {

    cy.visit('http://localhost:8080/home/monitor/list')
  
    cy.url().should('eq','http://localhost:8080/home/monitor/list')

    //-------------Check_Card------------//

    visible = false;
    for (i = 0; i < 6; i++) {
    cy.get('[data-testid="card_contrain"]').then($card => {

      if($card.is(':visible')){
          visible = true;
      }else{
          cy.reload().log('reload').wait(1000)
        }     
      });
      if(visible = true){
        break; 
     }else{
        continue;
     }
    }
  
    cy.get('[data-testid="searchBox"]').type('4')
    cy.get('#project-2').should('not.exist')
    cy.get('#project-3').should('not.exist')

    cy.get('[data-testid="searchBox"]').clear().type('project 1')
    cy.get('#project-0 > a > .card-list > .table-grid > tr > .float-left > .row > [data-testid="Member"]').should('have.length','8')
    cy.get('#project-0').click()
   
    cy.get('tbody > tr:nth-child(1) > .text-center > .icon-list > .svg-inline--fa').click().wait(2000)
    cy.get('.row > .col-xl > .d-flex > .p-2 > a:nth-child(2)').first().click()
     
  
    });
});