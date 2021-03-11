describe("Project_Edit", () => {
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
    
   //-----------------Edit----------------//
   cy.get('#Edit_Button > a > .btn').click()

   cy.get('#ProjectDetail').clear()
   cy.get('#Project_Name').clear()
   cy.get('.container-main > .row > .col:nth-child(2) > .btn').click()
   cy.get('#error-invalid').should('be.visible')

   cy.get('#Project_Name').clear().type('project 1').should('have.value','project 1')
   cy.get('#ProjectDetail').clear().type('project detail test').should('have.value','project detail test')

   cy.get(' .font-detail:nth-child(6) > .py-2 > .del-icon').click()
   cy.get(' .font-detail > .py-2 > .multiselect > .multiselect__tags').click()
   cy.get('.multiselect--active > .multiselect__content-wrapper > .multiselect__content > .multiselect__element')
   .eq(1).click()
  
   cy.get('.table-color-alt > .font-detail > td > .add-icon').click()

   cy.get('.col-lg-12 > .row > .col-8 > .multiselect > .multiselect__select').click()
   cy.get('.shadow-sm > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option--highlight').click()
   cy.get('.col-lg-12 > .row > .col-8 > .multiselect > .multiselect__select').click()
   cy.get('.shadow-sm > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option--highlight').click()
   cy.get('.table-color-alt > .font-detail > .py-2 > .multiselect > .multiselect__tags').click()
   cy.get('.font-detail > .py-2 > .multiselect > .multiselect__tags > .multiselect__input').type('typeing test')
    
   cy.get('.col-lg-12 > .row > .col-8 > .multiselect > .multiselect__select').click()
   cy.get('.row > .col-8 > .multiselect > .multiselect__tags > .multiselect__input').type('typeing test')
   //cy.get('.container-main > .row > .col:nth-child(2) > .btn').click()
    
    });
 });