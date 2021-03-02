describe("Project_Add", () => { 
    it("Home", () => {
 
   cy.visit('http://localhost:8080/login')
   cy.get('#username').type('GameKanna')
   cy.get('#password').type('Bb@2541')
   cy.get('#checkbox-1').check({force: true})
   cy.get('.pl-5').click().wait(2000)
   // cy.visit('http://localhost:8080/home/monitor/list')
 
   cy.reload()
 
   cy.get('#ProjectAdd_btn').click()
 
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

   var n = -1;
   cy.get('.table-color-alt > .font-detail > .py-2 > .multiselect > .multiselect__select').click()
   cy.get('.multiselect--active > .multiselect__content-wrapper > .multiselect__content > .multiselect__element')  
     .each(() => {

     cy.get('.multiselect--active > .multiselect__content-wrapper > .multiselect__content > .multiselect__element').eq(0).click()
     cy.get('.add-icon').click()
     cy.get('.table-color-alt > .font-detail > .py-2 > .multiselect > .multiselect__select').click()
     });

     cy.get('.col-lg-12 > .row > .col-8 > .multiselect > .multiselect__select').click()
     cy.get('.shadow-sm > .multiselect__content-wrapper > .multiselect__content > .multiselect__element').should('not.exist')
     .then(empty =>{
      if(empty.length == 0){
          cy.log('Hello')
      }
     })

    });
 });