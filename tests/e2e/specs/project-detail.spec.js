describe("ProjectDetail", () => { 
    
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
      
  it("ProjectDetail", () => {
  cy.visit('/home/project/list')

   //-------------Check_Card------------//
   
  //  visible = false;
  //  for (i = 0; i < 6; i++) {
  //   cy.get('[data-testid="card_contrain"]').then($card => {

  //     if($card.is(':visible')){
  //         visible = true
  //     }else{
  //         cy.reload().log('reload').wait(1000)
  //       }     
  //     });
  //     if(visible = true){
  //       break; 
  //    }
  //   }
   
   cy.get('.input-search').clear().type('project 1')
   cy.get('#project-0').click()
 
   cy.get('[data-testid="Edit_Button"]').click()
   .url().should('include','/home/project/edit?projectId=08d9e512-6dba-4ef8-8ec1-6a368d852f42').wait(200)
   cy.get('.row > .col-xl > .d-flex > .p-2:nth-child(2) > a:nth-child(1)').click()

   cy.get('[data-testid=info]').scrollTo('bottom').wait(500)
   cy.get('#search > table > tr > td > #ServiceSearch').type('99')
   cy.get('tbody > tr:nth-child(1) > .text-center > .icon-list > .svg-inline--fa').should('not.exist')
   cy.get('#search > table > tr > td > #ServiceSearch').clear().type('2')
   cy.get('#search > table > tr > td > #ServiceSearch').clear().type('1')

   cy.get('[data-testid=info]').scrollTo('bottom').wait(500)
   cy.get('tbody > tr:nth-child(1) > .text-center > .icon-list > .svg-inline--fa').click()
   .url().should('include','/home/monitor/task?serviceId=08d8e512-b535-4b76-8288-90fdd358af09')
   cy.get('.row > .col-xl > .d-flex > .p-2:nth-child(2) > a:nth-child(1)').click()
   .url().should('include','/home/monitor/detail?projectId=08d8e512-6dba-4ef8-8ec1-6a3687e82f42')
   cy.get('tbody > tr:nth-child(2) > .text-center > .icon-list > .svg-inline--fa').click()
   .url().should('include','/home/monitor/task?serviceId=08d8e512-b90d-4569-87ab-d54725fba988')
    });
 });