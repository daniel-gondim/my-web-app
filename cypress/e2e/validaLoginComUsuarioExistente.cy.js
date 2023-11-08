// before(() => {
//     cy.visit('http://localhost:3000/index.html');
//     cy.wait(2000);
//     cy.request('http://localhost:3000/css/styles.css');
//     cy.request('http://localhost:3000/js/script.js');
// });

const backendPort = 3000; // Defina a porta do seu backend

describe('Fluxo de Autenticação', () => {
    it('Deve permitir um login bem-sucedido', () => {
        cy.visit('http://localhost:3000/index.html');

        cy.get('#username-container #username').type('admin@gmail.com');
        cy.get('#password-container #password').type('admin123');

        // Clique no botão de login
        cy.get('#button-container #loginButton').click();

        // Verifique se o login foi bem-sucedido, por exemplo, redirecionando para uma página de boas-vindas
        cy.url().should('eq', 'http://localhost:3000/login-sucess-page.html');
    });
});