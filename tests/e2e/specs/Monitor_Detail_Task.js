describe("Monitor_Detail_Task", () => { 
    it("Monitor_Detail_Task", () => {
 
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

   cy.get('#info').scrollTo('bottom').wait(500)
   
   cy.get('tbody > tr:nth-child(1) > td:nth-child(2) > a').click()
   cy.url().should('eq','http://localhost:8080/home/monitor/task?serviceId=1')
   cy.get('#info').scrollTo('bottom').wait(500)

   var i = -1;
   cy.get('#checkbox-group-1 > .custom-control').each(()=>{

    i = i + 1;
    cy.get('#checkbox-group-1 > .custom-control').eq(i).click().wait(200)

   })
   
   cy.get('#checkbox-group-1 > .custom-control').each(()=>{
   cy.get('#checkbox-group-1 > .custom-control').eq(i--).click().wait(200)

   })
   cy.get('#info').scrollTo('bottom').wait(500)
   cy.get('.row > .col-xl-3:nth-child(1) > .card > .card-body').click()
   
//    cy.get('#modalPopover2').scrollTo('bottom')
   cy.viewport(1440,660).wait(500)
   cy.get('#Comment > .card-list').scrollIntoView().type('test')
   cy.get('.pl-5 > #Comment > .card-list > .d-flex > .bt-cancel-grey').click()
   cy.get('#modalPopover2 > .modal-dialog > #modalPopover2___BV_modal_content_ > #modalPopover2___BV_modal_header_ > .close').click()

    });
 });