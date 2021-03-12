describe("Monitor_Detail_Task", () => { 
  beforeEach(()=>{
 
    cy.intercept('GET','**/getListErrorStatus',{fixture: 'error-status.json'}).as('GetErrorStatus')
    cy.intercept('GET','**/getError?errorId=2',{fixture: 'error-get.json'}).as('GetErrorByErrorID')
    cy.intercept('GET','**/getListErrorByServiceId*',{fixture: 'TaskError.json'}).as('TaskError')
    // cy.intercept('GET','**/updateUserAndErrorStatus',{fixture: 'updateErrorStatus.json'}).as('UpdateError')

    cy.intercept('GET','**/getFiles?*',{fixture: 'getfile.json'}).as('getfile')

    cy.intercept('GET','**/getListProjectByOwner?*',{fixture: 'listproject-project.json'}).as('GetProjectByOwner')
    cy.intercept('GET','**/getListProject?*',{fixture: 'listproject-error.json'}).as('GetListProject')
    // cy.intercept('GET','**/getProject',{fixture: 'GetListProject.json'}).as('GetProject')
    cy.intercept('GET','**/getProject?*',{fixture: 'Projectid.json'}).as('GetProject2')

    cy.intercept('GET','**/getListUser',{fixture: 'getlistUser.json'}).as('ListUser')
    
    cy.intercept('GET','**/getService?*',{fixture: 'Serviceobj.json'}).as('ServiceID')
    cy.intercept('GET','**/getListService?*',{fixture: 'Service.json'}).as('ServiceByProject')

    cy.intercept('PUT','**/updateUserAndErrorStatus',{statusCode: 200}).as('UpdateError')
    cy.intercept('PUT','**/addComment',{fixture: 'addComment.json'}).as('addcomment')
    cy.intercept('PUT','**/updateComment',{fixture: 'updateComment.json'}).as('updatecomment')
    cy.intercept('get','**/getComment*',{fixture: 'comment-get.json'}).as('getcomment')
    cy.intercept('PUT','**/deleteComment',{ statusCode: 200}).as('deletecomment')

    cy.customlogin();
  })
    it("Monitor_Detail_Task", () => {

    cy.visit('http://localhost:8080/home/project/list')

   //-------------Check_Card------------//

   visible = false;
   for (i = 0; i < 6; i++) {
    cy.get('[data-testid="card_contrain"]').then($card => {

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
   
   cy.get('[data-testid="input-search"]').clear().type('project 1')
   cy.get('#project-0').click()

   cy.get('[data-testid="info"]').scrollTo('bottom').wait(200)
   
   cy.get('tbody > tr:nth-child(1) > .text-center > .icon-list > .svg-inline--fa').click()
   cy.url().should('eq','http://localhost:8080/home/monitor/task?serviceId=1')
   cy.get('[data-testid="info"]').scrollTo('bottom').wait(200)

   var i = -1;
   cy.get('#checkbox-group-1 > .custom-control').each(()=>{

    i = i + 1;
    cy.get('#checkbox-group-1 > .custom-control').eq(i).click().wait(100)

   })
   
   cy.get('#checkbox-group-1 > .custom-control').each(()=>{
   cy.get('#checkbox-group-1 > .custom-control').eq(i--).click().wait(100)

   })
   cy.get('[data-testid="info"]').scrollTo('bottom').wait(500)
   cy.get('.row > .col-xl-3:nth-child(1) > .card > .card-body').click()
   
   cy.get('.row > .col-9 > #dropdown-member > #dropdown-member__BV_toggle_ > .no-color').scrollIntoView().click().wait(500)
   cy.get('.menu-width > li:nth-child(1) > .dropdown-item').scrollIntoView().click().wait(500)
   cy.get('li > .dropdown-header > .row > .col > .btn').click()
   cy.get('.row > .col-9 > #dropdown-member > #dropdown-member__BV_toggle_ > .no-color').scrollIntoView().click().wait(500)
   cy.get('.menu-width > li:nth-child(4) > .dropdown-item').scrollIntoView().click().wait(500)
   cy.get('li > .dropdown-header > .row > .col > .btn').click()
   cy.get('.col-9 > .wrap > .wrap-span > .svg-inline--fa > path').first().click()
   cy.get('.col-9 > #dropdown-member > #dropdown-member__BV_toggle_ > .no-color > .svg-inline--fa').click()
   cy.get('#dropdown-form-member').click().type('Test').clear()
   cy.get('#dropdown-form-member').click().type('Aristeaz')
   cy.get('.menu-width > li:nth-child(1) > .dropdown-item').scrollIntoView().click().wait(500)
   cy.get('li > .dropdown-header > .row > .col > .btn').scrollIntoView().click().wait(500)
   cy.get('.row > .col-9 > #dropdown-member > #dropdown-member__BV_toggle_ > .no-color').scrollIntoView().click().wait(500)
   cy.get('.menu-width > li:nth-child(1) > .dropdown-item').scrollIntoView().click().wait(500)
   cy.get('li > .dropdown-header > .row > .col > .btn').click()

   cy.get('#Comment > .card-list').scrollIntoView().type('test3')
   cy.get('#cancel').click().wait(500)
   cy.get('#Comment > .card-list').scrollIntoView().type('test3')
   cy.get('#savecomment').click().wait(500)
   cy.get('.pl-5 > #Comment > #comment9 > .d-flex > #Edit').scrollIntoView().click()
   cy.get('#EditComment9').clear().type('test')
   cy.get('#Comment > #editComment9 > .card-list > .d-flex > .bt-green').click().click()
  //  cy.get('.pl-5 > #Comment > #comment5 > .d-flex > #Edit').scrollIntoView().click().click()
  //  cy.get('#EditComment5').clear().type('test123')
  //  cy.get('#Comment > #editComment5 > .card-list > .d-flex > .bt-green').click()
   cy.get('.pl-5 > #Comment > #comment9 > .d-flex > #Delete').scrollIntoView().first().click()
   cy.get('.modal-open > .swal2-container > .swal2-popup > .swal2-actions > .swal2-confirm').click()
   cy.get('#modalPopover2 > .modal-dialog > #modalPopover2___BV_modal_content_ > #modalPopover2___BV_modal_header_ > .close').click()

   cy.get('[data-testid="info"]').scrollTo('bottom').wait(500)
  
  //  for( n = 1 ; n < 6 ; n++ ){
  //  var num = n.toString();
  //  cy.get('.row > .col-xl-3:nth-child(1) > .card > .card-body').click()
  //  cy.get('.row > .col-xl-5 > .row > .col-xl-8 > #Error_Status').select(num)
  //  cy.get('.modal-open > .swal2-container > .swal2-popup > .swal2-actions > .swal2-confirm').click()
  //  cy.get('#modalPopover2 > .modal-dialog > #modalPopover2___BV_modal_content_ > #modalPopover2___BV_modal_header_ > .close').click()
  //  cy.get('[data-testid="info"]').scrollTo('bottom').wait(500)
  // }
    });
 });