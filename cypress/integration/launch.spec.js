describe('login', function () {
    const user =  Cypress.env('user');
    const pass =  Cypress.env('password');
    beforeEach(() => {

        cy.visit('http://0.0.0.0:3000/')


    })
    it('Should log in', function () {
        cy.contains('body', 'Hello Node.js IZ sample!', { timeout: 10000 })
    })
})
