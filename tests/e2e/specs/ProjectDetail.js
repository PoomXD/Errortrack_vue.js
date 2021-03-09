describe("ProjectDetail", () => { 
    
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
      
  it("ProjectDetail", () => {
  cy.visit('http://localhost:8080/home/project/list')

   //-------------Check_Card------------//
   
   visible = false;
   for (i = 0; i < 6; i++) {
    cy.get('#card_contrain').then($card => {

      if($card.is(':visible')){
          visible = true
      }else{
          cy.reload().log('reload').wait(1000)
        }     
      });
      if(visible = true){
        break; 
     }
    }
   
   cy.get('.input-search').clear().type('project 1')
   cy.get('#project-0').click()
 
   cy.get('#Edit_Button > a > .btn').click()
   cy.url().should('eq','http://localhost:8080/home/project/edit?projectId=1')
   cy.get('.row > .col-xl > .d-flex > .p-2:nth-child(2) > a:nth-child(1)').click()

   cy.get('#info').scrollTo('bottom').wait(500)
   cy.get('#search > table > tr > td > #ServiceSearch').type('3')
   cy.get('tbody > tr:nth-child(1) > .text-center > .icon-list > .svg-inline--fa').should('not.exist')
   cy.get('#search > table > tr > td > #ServiceSearch').clear().type('2')
   cy.get('#search > table > tr > td > #ServiceSearch').clear().type('1')

   cy.get('#info').scrollTo('bottom').wait(500)
   cy.get('tbody > tr:nth-child(1) > .text-center > .icon-list > .svg-inline--fa').click()
   cy.url().should('eq','http://localhost:8080/home/monitor/task?serviceId=1')
   cy.get('.row > .col-xl > .d-flex > .p-2:nth-child(2) > a:nth-child(1)').click()
   cy.url().should('eq','http://localhost:8080/home/monitor/detail?projectId=1')
   cy.get('tbody > tr:nth-child(2) > .text-center > .icon-list > .svg-inline--fa').click()
   cy.url().should('eq','http://localhost:8080/home/monitor/task?serviceId=2')
    });
 });