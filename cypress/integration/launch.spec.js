describe('login', function () {
    const user =  Cypress.env('user');
    const pass =  Cypress.env('password');
    beforeEach(() => {

        cy.visit('https://www.r8.beer/')

        cy.get('#headerLogIn', { timeout: 10000 }).click()
        // cy.get('#headerLogIn').click()
    })
    it('Should log in', function () {
        cy.get('#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(4) > div.auth0-lock-input-block.auth0-lock-input-username > div > input')
            .type(user)
        cy.get('#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(4) > div.auth0-lock-input-block.auth0-lock-input-show-password > div.auth0-lock-input-block.auth0-lock-input-password > div > input')
            .type(pass)
        cy.get('#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > button > span').click()
    })
})
