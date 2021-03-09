describe("ProjectDetail", () => { 
    it("ProjectDetail", () => {
 
   cy.visit('http://localhost:8080/login')
   cy.get('#username').type('GameKanna')
   cy.get('#password').type('Bb@2541')
   cy.get('#checkbox-1').check({force: true})
   cy.get('.pl-5').click().wait(1000)

   //-------------Check_Card------------//
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
   cy.url().should('eq','http://localhost:8080/home/project/detail?projectId=1')

   cy.get('#info').scrollTo('bottom').wait(500)
   cy.get('#search > table > tr > td > #ServiceSearch').type('3')
   cy.get('tbody > tr:nth-child(1)').should('not.exist')
   cy.get('#search > table > tr > td > #ServiceSearch').clear().type('2')
   cy.get('#search > table > tr > td > #ServiceSearch').clear().type('1')

   cy.get('tbody > tr:nth-child(1) > td:nth-child(2) > a').click()
   cy.url().should('eq','http://localhost:8080/home/monitor/task?serviceId=1')
   cy.get('.row > .col-xl > .d-flex > .p-2:nth-child(2) > a:nth-child(1)').click()
   cy.url().should('eq','http://localhost:8080/home/monitor/detail?projectId=1')
   cy.get('tbody > tr:nth-child(1) > td:nth-child(2) > a').click()
    });
 });