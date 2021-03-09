describe("Monitor_List", () => {
  it("Error", () => {
    cy.visit('http://localhost:8080/home/monitor/list',{
      onBeforeLoad: function (window) {
        window.localStorage.setItem('access_token',
         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwOGQ4YzliYy1lZTNjLTQzZTItOGQzMi03YzlhN2Y0NTJkYmMiLCJleHAiOjE2MTUxNzQ5MzIsImlzcyI6InBpZXNvZnQtZXJyb3ItdHJhY2tpbmciLCJhdWQiOiIxc2Q0c2Q1YTJjZHM0NDVhZnZkMSJ9.5-F1FTpobmPU04BCh-kFrYkRvXBatCThEaB8m3aMZuw');
        window.localStorage.setItem('refresh_token',
          'uT/SnzpNsM4uslr+Rb9jlb73uwOrOTKBx59HIRUgoH2/TfnI+7dxnaDVWVrp+2ZWrjq4j8bmcdVHDeEGqQp3bA==');
        window.localStorage.setItem('userId', '08d8c9bc-ee3c-43e2-8d32-7c9a7f452dbc');
      }
     }).wait(1000)
    cy.url().should('eq','http://localhost:8080/home/monitor/list')

    //-------------Check_Card------------//
    visible = false;
    for (i = 0; i < 6; i++) {
    cy.get('#card_contrain').then($card => {

      if($card.is(':visible')){
          visible = true;
      }else{
          cy.reload().log('reload').wait(1000)
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
   
    cy.get('tbody > tr:nth-child(1) > .text-center > .icon-list > .svg-inline--fa').click().wait(2000)
    cy.get('.row > .col-xl > .d-flex > .p-2 > a:nth-child(2)').first().click()
     
  
    });
});