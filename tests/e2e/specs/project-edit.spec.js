describe("Project_Edit", () => {
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
    it("Home", () => {
 
   cy.visit('/home/project/list')
 
   cy.get('[data-testid="input-search"]').clear().type('project 1')
   cy.get('#project-0').click()
    
   //-----------------check-required---------------//
   cy.get('[data-testid="Edit_Button"]').click()
   cy.get('[data-testid="EditDetail"]').clear()
   cy.get('[data-testid="Project_Name"]').clear()
   cy.get('[data-testid="Save-btn"]').click()
   cy.get('[data-testid="error-invalid"]').should('be.visible')

   //--------------input-info--------------//
   cy.get('[data-testid="Project_Name"]').clear()
   .type('project 1').should('have.value','project 1')
   cy.get('[data-testid="EditDetail"]').clear()
   .type('project detail test').should('have.value','project detail test')

   //-----------remove-member-------------//
   cy.get('[data-testid="del-icon"]').eq(3).click()

   //------------add-member---------------//
   cy.get('[data-testid="multiselect-owner"]').click()
   cy.get('[data-testid="multiselect-owner"]').find('.multiselect__element')
   .last().click()
   cy.get('[data-testid="add-icon"]').click()

   //------------add-Owner---------------//
   cy.get('[data-testid="multiselect-owner"]').click()
   cy.get('[data-testid="multiselect-owner"]').find('.multiselect__option--highlight').click()
   
   //------------remove-Owner-------------//
   cy.get('[data-testid="multiselect-owner"]').click()
   cy.get('[data-testid="multiselect-owner"]').find('.multiselect__option--highlight').click()
  
   //---------typeing-test(member)--------------//
   cy.get('[data-testid="multiselect-member"]').click()
   cy.get('[data-testid="multiselect-member"]').find('.multiselect__input').type('typeing test')
    
   //---------typeing-test(Owner)--------------//
   cy.get('[data-testid="multiselect-owner"]').click()
   cy.get('[data-testid="multiselect-owner"]').find('.multiselect__input').type('typeing test')
    
    });
 });