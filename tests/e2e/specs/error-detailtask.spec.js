describe("Monitor_Detail_Task", () => { 
  beforeEach(()=>{
 
    cy.intercept('GET','**/getListErrorStatus',{fixture: 'error-status.json'}).as('GetErrorStatus')
    cy.intercept('GET','**/getError?errorId=2',{fixture: 'error-get.json'}).as('GetErrorByErrorID')
    cy.intercept('GET','**/getListErrorByServiceId*',{fixture: 'TaskError.json'}).as('TaskError')
    cy.intercept('GET','**/getFiles?*',{fixture: 'getfile.json'}).as('getfile')
    cy.intercept('GET','**/getListProjectByOwner?*',{fixture: 'listproject-project.json'}).as('GetProjectByOwner')
    cy.intercept('GET','**/getListProject?*',{fixture: 'listproject-error.json'}).as('GetListProject')
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

    cy.visit('/home/project/list')

   cy.get('[data-testid="input-search"]').clear().type('project 1')
   cy.get('#project-0').click()

   cy.get('[data-testid="info"]').scrollTo('bottom').wait(200)
   
   cy.get('[data-testid="icon-list"]').eq(0).click()
   cy.url().should('include','serviceId=08d8e512-b535-4b76-8288-90fdd358af09')
   cy.get('[data-testid="info"]').scrollTo('bottom').wait(200)


   //------------check-box--------------//
   var i = -1;
   cy.get('[data-testid="checkbox-group1"]').find('.custom-control').each(()=>{
    i = i + 1;
    cy.get('[data-testid="checkbox-group1"]').find('.custom-control').eq(i).click().wait(100)
   })
   cy.get('[data-testid="checkbox-group1"]').find('.custom-control').each(()=>{
   cy.get('[data-testid="checkbox-group1"]').find('.custom-control').eq(i--).click().wait(100)
   })

   //----------check-card---------------//
   cy.get('[data-testid="info"]').scrollTo('bottom').wait(500)
   cy.get('[data-testid="Error-card"]').eq(0).click()
   
   //----------check-User---------------//
   cy.get('[data-testid="dropdown-member"]').scrollIntoView().click().wait(200)
   cy.get('[data-testid="dropdown-item"]').eq(0).scrollIntoView().click().wait(200)
   cy.get('[data-testid="close-model"]').click()
   cy.get('[data-testid="dropdown-member"]').scrollIntoView().click().wait(200)
   cy.get('[data-testid="dropdown-item"]').eq(3).scrollIntoView().click().wait(200)
   cy.get('[data-testid="close-model"]').click()
   cy.get('[data-testid="delete-user"]').first().click()
   cy.get('[data-testid="dropdown-member"]').click()
   cy.get('[data-testid="Search-member"]').click().type('Test').clear()
   cy.get('[data-testid="Search-member"]').click().type('Super')
   cy.get('[data-testid="dropdown-item"]').eq(0).scrollIntoView().click().wait(200)
   cy.get('[data-testid="close-model"]').scrollIntoView().click().wait(200)
   cy.get('[data-testid="dropdown-member"]').scrollIntoView().click().wait(200)
   cy.get('[data-testid="dropdown-item"]').eq(0).scrollIntoView().click().wait(200)
   cy.get('[data-testid="close-model"]').click()

   //----------check-Comment---------------//
   cy.get('#Comment > .card-list').scrollIntoView().type('test3')
   cy.get('[data-testid="cancel-comment"]').click().wait(500)
   cy.get('#Comment > .card-list').scrollIntoView().type('test3')
   cy.get('[data-testid="save-comment"]').click().wait(500)
   cy.get('#comment1').find('[data-testid="Edit"]').scrollIntoView().click()
   cy.get('#EditComment1').clear().type('test')
   cy.get('#editComment1 > .card-list').find('[data-testid="Save-edit"]').click()
   cy.get('#comment1').find('[data-testid="Delete"]').scrollIntoView().first().click()
   cy.get('.modal-open > .swal2-container > .swal2-popup > .swal2-actions > .swal2-confirm').click()

   //----------close---------------//
   cy.get('.close').click()

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