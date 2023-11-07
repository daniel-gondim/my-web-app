/// <reference types="cypress" />
//
// context('Assertions', () => {
//   beforeEach(() => {
//     cy.server();
//     // cy.visit('https://example.cypress.io/commands/assertions')
//   })

const backendPort = 3000; // Defina a porta do seu backend


describe('Fluxo de Autenticação', () => {
    it('Deve permitir um login bem-sucedido', () => {
        cy.visit('http://localhost:3000/index.html');

        cy.get('#username-container #username').type('admin@gmail.com');
        cy.get('#password-container #password').type('admin123');

        // Clique no botão de login
        cy.get('#button-container #loginButton').click();

        // Verifique se o login foi bem-sucedido, por exemplo, redirecionando para uma página de boas-vindas
        cy.url().should('eq', 'http://localhost:3000/login-sucess-page');
    });

describe('Validação de Login', () => {
    it('Deve exibir alerta se o campo usuário não estiver preenchido', () => {
        cy.visit('http://localhost:3000/index.html');

        // Clique no botão de login sem preencher os campos de usuário e senha
        cy.get('#button-container #loginButton').click();

        // Verifique se o alerta correto é exibido
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('O campo usuário tem que ser preenchido');
        });
    });

    it('Deve exibir alerta se o campo senha não estiver preenchido', () => {
        cy.visit('/pagina-de-login');

        // Preencha o campo de usuário e clique no botão de login
        cy.get('#username-container #username').type('seu-usuario');
        cy.get('#button-container #loginButton').click();

        // Verifique se o alerta correto é exibido
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('O campo senha tem que ser preenchido');
        });
    });

});





// context('Assertions', () => {
//     beforeEach(() => {
//         // Configurar interceptação de solicitações usando cy.intercept()
//         cy.intercept('GET', `/users`, {
//             fixture: 'seu-backend-dados.json'
//         }).as('sua-rota-de_usuario');
//
//         cy.visit('http://localhost:3000/index.html');
//
//     });
//
//     it('Deve permitir um login bem-sucedido', () => {
//         cy.get('#password-container #password').type('exist');
//     });
//
//     it('Verifica presenção do campo login', () => {
//         cy.get('#username-container #username').should('exist');
//     });
// });