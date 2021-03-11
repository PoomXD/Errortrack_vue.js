describe("Project_list", () => { 
  beforeEach(()=>{
 
    cy.intercept('GET','**/getListErrorStatus',{fixture: 'error-status.json'}).as('GetErrorStatus')
    // cy.intercept('GET','**/getListErrorByServiceId?',{fixture: 'ErrorStatus.json'}).as('GetErrorStatusByID2')

    cy.intercept('GET','**/getListErrorByServiceId*',{fixture: 'TaskError.json'}).as('TaskError')

    cy.intercept('GET','**/getListProjectByOwner?*',{fixture: 'listproject-project.json'}).as('GetProjectByOwner')
    cy.intercept('GET','**/getListProject?*',{fixture: 'listproject-project.json'}).as('GetListProject')
    // cy.intercept('GET','**/getProject',{fixture: 'GetListProject.json'}).as('GetProject')
    cy.intercept('GET','**/getProject?*',{fixture: 'Projectid.json'}).as('GetProject2')

    cy.intercept('GET','**/getListUser',{fixture: 'getlistUser.json'}).as('ListUser')
    
    cy.intercept('GET','**/getService?*',{fixture: 'Serviceobj.json'}).as('ServiceID')
    cy.intercept('GET','**/getListService?*',{fixture: 'Service.json'}).as('ServiceByProject')

    cy.customlogin();
  })

    it("Home", () => {
   cy.visit('http://localhost:8080/home/project/list')
   cy.wait('@GetProjectByOwner').then((res)=>{
     console.log('@GetProjectByOwner',res.response.body)
   })
  //  -------------Check_Card------------//
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
    
   cy.get('[data-testid="ProjectAdd_btn"]').should('be.visible')

   cy.get('[data-testid="input-search"]').type('2')
   cy.get('#project-2').should('not.exist')
   cy.get('#project-1').should('not.exist')
   
   cy.get('[data-testid="input-search"]').clear().type('project 1')
   cy.get('#project-2').should('not.exist')
   cy.get('#project-0 > a > .card-list > .table-grid > tr > .float-left > .row > div').should('have.length','7')
   cy.get('#project-0').click()
   
   cy.get('[data-testid="info"]').scrollTo('bottom').wait(500)
   cy.get('tbody > tr:nth-child(1) > .text-center > .icon-list > .svg-inline--fa').click().wait(2000)
   cy.get('.row > .col-xl > .d-flex > .p-2 > a:nth-child(2)').first().click()
    });
 });