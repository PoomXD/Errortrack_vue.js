describe("Monitor_List", () => {
  it("Error", () => {

    cy.visit('http://localhost:8080/login')
    cy.get('#username').type('GameKanna')
    cy.get('#password').type('Bb@2541')
    cy.get('#checkbox-1').check({force: true})
    cy.get('.pl-5').click().wait(1000)
    cy.visit('http://localhost:8080/home/monitor/list').wait(1000)
    cy.url().should('eq','http://localhost:8080/home/monitor/list')
    //-------------Check_Card------------//
    for (i = 0; i < 6; i++) {
    cy.get('#card_contrain').then($card => {

      if($card.is(':visible')){
          visible = true;
      }else{
          cy.reload().log('reload').wait(1000)
          visible = false;
        }     
      });
      if(visible = true){
        break; 
     }else{
        continue;
     }
    }
  
    cy.get('.input-search').type('4')
    cy.get('#project-1').should('not.exist')
    cy.get('#project-2').should('not.exist')

    cy.get('.input-search').clear().type('project 1')
    cy.get('#project-0').click()
  
    cy.get('.navigation-icon').should('not.visible')
   
    cy.get('tbody > tr:nth-child(1) > td:nth-child(2) > a').click().wait(2000)
    cy.get('.row > .col-xl > .d-flex > .p-2 > a:nth-child(2)').first().click()
     
  
    });
});