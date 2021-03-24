describe("Project_list", () => { 
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

    it("Home", () => {
   cy.visit('/home/project/list')
   cy.wait('@GetProjectByOwner').then((res)=>{
     console.log('@GetProjectByOwner',res.response.body)
   })

   //----------------check-button-------------//
   cy.get('[data-testid="ProjectAdd_btn"]').should('be.visible')

   //----------------search-project-------------//
   cy.get('[data-testid="input-search"]').type('52')
   cy.get('#project-2').should('not.exist')
   cy.get('#project-1').should('not.exist')
   cy.get('[data-testid="input-search"]').clear().type('project 1')
   cy.get('#project-2').should('not.exist')

   //----------------check-project-------------//
   cy.get('#project-0').find('[data-testid="Member"]').should('have.length','6')
   cy.get('#project-0').click()
   
   cy.get('[data-testid="info"]').scrollTo('bottom').wait(500)
    });
 });