describe("Project_Add", () => { 
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
      it("NewProject", () => {
       cy.visit('http://localhost:8080/home/project/list')
 
   cy.reload()
 
   cy.get('#ProjectAdd_btn').click()
  
   cy.get('.container-main > .row > .col:nth-child(2) > .btn').click()
   cy.get('#Name_required').should('be.visible') 
   cy.get('#Owner_required').should('be.visible')

   cy.get('#Project_Name').type('project test')
   cy.get('#ProjectDetail').type('project detail test')

   cy.get('.col-lg-12 > .row > .col-8 > .multiselect > .multiselect__select').click()
   cy.get('.shadow-sm > .multiselect__content-wrapper > .multiselect__content > .multiselect__element')
   .then(empty =>{
    expect(empty).to.have.length(8)
    if(empty.length == 0){
        cy.log('Hello')
    }
   })

   
   cy.get('.table-color-alt > .font-detail > .py-2 > .multiselect > .multiselect__select').click()
   cy.get('.multiselect--active > .multiselect__content-wrapper > .multiselect__content > .multiselect__element')  
     .each(() => {

     cy.get('.multiselect--active > .multiselect__content-wrapper > .multiselect__content > .multiselect__element').eq(0).click()
     cy.get('.add-icon').click()
     cy.get('.table-color-alt > .font-detail > .py-2 > .multiselect > .multiselect__select').click()
     });

     cy.get('.col-lg-12 > .row > .col-8 > .multiselect > .multiselect__select').click()
     cy.get('.shadow-sm > .multiselect__content-wrapper > .multiselect__content > .multiselect__element').should('not.exist')
     cy.get('.table-color-alt > .font-detail > .py-2 > .del-icon').eq(0).click()

     for(var i = 0; i < 3; i++){
     cy.get('.col-lg-12 > .row > .col-8 > .multiselect > .multiselect__tags').click()
     cy.get('.multiselect__content > .multiselect__element:nth-child(1) > .multiselect__option--highlight').first().click()
     if(i === 1){
         cy.log('remove')
     }
    }

     cy.get('.table-color-alt > .font-detail > .py-2 > .multiselect > .multiselect__tags').click()
     cy.get('.font-detail > .py-2 > .multiselect > .multiselect__tags > .multiselect__input').type('typeing test')
      
     cy.get('.col-lg-12 > .row > .col-8 > .multiselect > .multiselect__tags').click()
     cy.get('.row > .col-8 > .multiselect > .multiselect__tags > .multiselect__input').type('typeing test')

     //cy.get('#Name_required').should('not.visible') 
     cy.get('#Owner_required').should('not.visible')
    });
 });