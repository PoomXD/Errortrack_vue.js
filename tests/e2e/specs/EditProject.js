describe("Project_Edit", () => { 
    it("Home", () => {
 
   cy.visit('http://localhost:8080/login')
   cy.get('#username').type('GameKanna')
   cy.get('#password').type('Bb@2541')
   cy.get('#checkbox-1').check({force: true})
   cy.get('.pl-5').click().wait(2000)
   // cy.visit('http://localhost:8080/home/monitor/list')
 
   cy.reload()
 
   cy.get('.input-search').clear().type('project 1')
   cy.get('#project-2').should('not.exist')
   cy.get('#project-0').click()
    
   //-----------------Edit----------------//
   cy.get('#Edit_Button > a > .btn').click()

   cy.get('#Project_Name').clear().type('project 1')
   cy.get('#ProjectDetail').clear().type('project detail test')

   cy.get(' .font-detail:nth-child(6) > .py-2 > .del-icon').click()
   cy.get(' .font-detail > .py-2 > .multiselect > .multiselect__tags').click()
   cy.get('.multiselect--active > .multiselect__content-wrapper > .multiselect__content > .multiselect__element')
   .eq(2).click()
   cy.get('.table-color-alt > .font-detail > td > .add-icon').click()

   cy.get('.col-lg-12 > .row > .col-8 > .multiselect > .multiselect__select').click()
   cy.get('.shadow-sm > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option--highlight').click()
   cy.get('.col-lg-12 > .row > .col-8 > .multiselect > .multiselect__select').click()
   cy.get('.shadow-sm > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option--highlight').click()

  
  //cy.get('.container-main > .row > .col:nth-child(2) > .btn').click()
 
    });
 });