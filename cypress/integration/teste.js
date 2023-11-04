describe('Seu Teste Cypress', () => {
    it('Deve encontrar um elemento na página', () => {
        cy.visit('https://exemplo.com'); // Substitua pelo URL de sua página

        cy.get('#seu-elemento-id').should('exist');
    });
});
