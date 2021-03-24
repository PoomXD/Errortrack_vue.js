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
   cy.get(' .font-detail > .py-2 > .multiselect > .multiselect__tags').click()
   cy.get('.multiselect--active > .multiselect__content-wrapper > .multiselect__content > .multiselect__element')
   .last().click()
   cy.get('[data-testid="add-icon"]').click()

   //------------add-Owner---------------//
   cy.get('.col-lg-12 > .row > .col-8 > .multiselect > .multiselect__select').click()
   cy.get('.shadow-sm > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option--highlight').click()
   
   //------------remove-Owner-------------//
   cy.get('.col-lg-12 > .row > .col-8 > .multiselect > .multiselect__select').click()
   cy.get('.shadow-sm > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option--highlight').click()
  
   //---------typeing-test(member)--------------//
   cy.get('.table-color-alt > .font-detail > .py-2 > .multiselect > .multiselect__tags').click()
   cy.get('.font-detail > .py-2 > .multiselect > .multiselect__tags > .multiselect__input').type('typeing test')
    
   //---------typeing-test(Owner)--------------//
   cy.get('.col-lg-12 > .row > .col-8 > .multiselect > .multiselect__select').click()
   cy.get('.row > .col-8 > .multiselect > .multiselect__tags > .multiselect__input').type('typeing test')
    
    });
 });