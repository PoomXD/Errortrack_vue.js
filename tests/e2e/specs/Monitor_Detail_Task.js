describe("Monitor_Detail_Task", () => { 
    it("Monitor_Detail_Task", () => {
 
   cy.visit('http://localhost:8080/login')
   cy.get('#username').type('GameKanna')
   cy.get('#password').type('Bb@2541')
   cy.get('#checkbox-1').check({force: true})
   cy.get('.pl-5').click().wait(1000)

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

   cy.get('#info').scrollTo('bottom').wait(200)
   
   cy.get('tbody > tr:nth-child(1) > .text-center > .icon-list > .svg-inline--fa').click()
   cy.url().should('eq','http://localhost:8080/home/monitor/task?serviceId=1')
   cy.get('#info').scrollTo('bottom').wait(200)

   var i = -1;
   cy.get('#checkbox-group-1 > .custom-control').each(()=>{

    i = i + 1;
    cy.get('#checkbox-group-1 > .custom-control').eq(i).click().wait(100)

   })
   
   cy.get('#checkbox-group-1 > .custom-control').each(()=>{
   cy.get('#checkbox-group-1 > .custom-control').eq(i--).click().wait(100)

   })
   cy.get('#info').scrollTo('bottom').wait(500)
   cy.get('.row > .col-xl-3:nth-child(1) > .card > .card-body').click()
   
   cy.get('.col-9 > .wrap:nth-child(2) > .wrap-span > .svg-inline--fa').scrollIntoView().click().wait(500)
   .then(()=>{
   cy.get('#dropdown-member__BV_toggle_').click()
  })
   cy.get('.col-9 > #dropdown-member > #dropdown-member__BV_toggle_ > .no-color > .svg-inline--fa').click()
   cy.get('.menu-width > li:nth-child(4) > .dropdown-item').scrollIntoView().click()
   cy.get('#dropdown-form-member').click().type('Test').clear()
   cy.get('#dropdown-form-member').click().type('Aristeaz').clear()
   cy.get('li > .dropdown-header > .row > .col > .btn').scrollIntoView().click().wait(500)

   cy.get('#Comment > .card-list').scrollIntoView().type('test')
   cy.get('#cancel').click().wait(500)
   cy.get('#Comment > .card-list').scrollIntoView().type('test')
   cy.get('#savecomment').click().wait(500)
   cy.get('.pl-5 > #Comment > #comment5 > .d-flex > #Edit').scrollIntoView().click().click()
   cy.get('#EditComment5').clear().type('test')
   cy.get('#Comment > #editComment5 > .card-list > .d-flex > .bt-green').click()
   cy.get('.pl-5 > #Comment > #comment5 > .d-flex > #Edit').scrollIntoView().click().click()
   cy.get('#EditComment5').clear().type('test123')
   cy.get('#Comment > #editComment5 > .card-list > .d-flex > .bt-green').click()
   cy.get('.pl-5 > #Comment > #comment6 > .d-flex > #Delete').scrollIntoView().click().click()
   cy.get('.modal-open > .swal2-container > .swal2-popup > .swal2-actions > .swal2-confirm').click()
   cy.get('#modalPopover2 > .modal-dialog > #modalPopover2___BV_modal_content_ > #modalPopover2___BV_modal_header_ > .close').click()

   cy.get('#info').scrollTo('bottom').wait(500)
  
   for( n = 1 ; n < 6 ; n++ ){
   var num = n.toString();
   cy.get('.row > .col-xl-3:nth-child(1) > .card > .card-body').click()
   cy.get('.row > .col-xl-5 > .row > .col-xl-8 > #Error_Status').select(num)
   cy.get('.modal-open > .swal2-container > .swal2-popup > .swal2-actions > .swal2-confirm').click()
   cy.get('#modalPopover2 > .modal-dialog > #modalPopover2___BV_modal_content_ > #modalPopover2___BV_modal_header_ > .close').click()
   cy.get('#info').scrollTo('bottom').wait(500)
  }
    });
 });