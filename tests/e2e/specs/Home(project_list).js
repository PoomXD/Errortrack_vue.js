describe("Project_list", () => { 
  beforeEach(()=>{
    // cy.fixture('getlistUser.json').as('ListUser');
    // cy.fixture('getLogin.json').as('GetLogin');
    cy.intercept('GET','**/getListErrorStatus',{fixture: 'ErrorStatus.json'}).as('GetErrorStatus')
    cy.intercept('GET','**/getListProjectByOwner?*',{fixture: 'GetListProjectByOwner.json'}).as('GetProjectByOwner')
    cy.intercept('GET','**/getListUser',{fixture: 'getlistUser.json'}).as('ListUser')

    cy.customlogin();
  })

    it("Home", () => {
   cy.visit('http://localhost:8080/home/project/list')
   cy.wait('@GetProjectByOwner').then((res)=>{
     console.log('@getListAirport',res.response.body)
   })
  //  -------------Check_Card------------//
  //  visible = false;
  //  for (i = 0; i < 6; i++) {
  //   cy.get('#card_contrain').then($card => {

  //     if($card.is(':visible')){
  //         visible = true;
  //     }else{
  //         cy.reload().log('reload').wait(1000)
  //       }     
  //     });
  //     if(visible = true){
  //       break; 
  //    }else{
  //       continue;
  //    }
  //   }

  //  cy.get('.input-search').type('2')
  //  cy.get('#project-2').should('not.exist')
  //  cy.get('#project-1').should('not.exist')
   
  //  cy.get('.input-search').clear().type('project 1')
  //  cy.get('#project-2').should('not.exist')
  //  cy.get('#project-0').click()
   
  //  cy.get('#info').scrollTo('bottom').wait(500)
  //  cy.get('tbody > tr:nth-child(1) > .text-center > .icon-list > .svg-inline--fa').click().wait(2000)
  //  cy.get('.row > .col-xl > .d-flex > .p-2 > a:nth-child(2)').first().click()
  //  cy.viewport(1440, 660).wait(1000)

    });
 });