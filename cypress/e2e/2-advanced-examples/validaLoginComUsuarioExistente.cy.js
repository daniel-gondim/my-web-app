/// <reference types="cypress" />
//
// context('Assertions', () => {
//   beforeEach(() => {
//     cy.server();
//     // cy.visit('https://example.cypress.io/commands/assertions')
//   })

const backendPort = 3000; // Defina a porta do seu backend

context('Assertions', () => {
    beforeEach(() => {
        // Configurar interceptação de solicitações usando cy.intercept()
        cy.intercept('GET', `/users`, {
            fixture: 'seu-backend-dados.json'
        }).as('sua-rota-de_usuario');

        cy.visit('http://localhost:3000/index.html');

    });

    it('Deve permitir um login bem-sucedido', () => {
        cy.get('#password-container #password').type('exist');
    });

    it('Verifica presenção do campo login', () => {
        cy.get('#username-container #username').should('exist');
    });
});