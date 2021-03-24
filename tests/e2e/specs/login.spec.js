describe("Sign_in", () => {
   it("Sign in", () => {

   //------------check-redirect(Before-Login)-----------//
    cy.visit('/login')
    cy.visit('/project/list').url().should('include','/login/')
    cy.visit('/home/monitor/list').url().should('include','/login/')
      
    //-----------check-alert-incorrect-----------//
    cy.get('.w-100').click()
    cy.get('[data-testid="alert-incorrect"]').should('be.visible')

    cy.get('[data-testid="username"]').wait(200).type('GameKanna')
    cy.get('.w-100').click()
    cy.get('[data-testid="alert-incorrect"]').should('be.visible')
    
    cy.wait(200)
    cy.get('[data-testid="password"]').type('Bb@2541')
    cy.get('[data-testid="username"]').clear()
    cy.get('.w-100').click()
    cy.get('[data-testid="alert-incorrect"]').should('be.visible')
      
    //------------login-in---------------//
    cy.wait(200)
    cy.get('[data-testid="username"]').type('GameKanna')
    cy.get('[data-testid="checkbox-1"]').check({force: true})
    cy.get('.w-100').click()

    //------------check-redirect(after-Login)-----------//
    cy.url().should('include','/home/project/list')
    cy.visit('/login')
    .url().should('include','/home/project/list').wait(500)
    cy.clearLocalStorage().log("clearLocalStorage!!")
    cy.reload()
    .url().should('include','/login/').wait(500)


   });

});
