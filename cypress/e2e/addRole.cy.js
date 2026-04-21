describe('Добавление ролди студента', () => {
    const LOGIN_URL = 'https://dev.profteam.su/login';

    beforeEach(() => {
        cy.visit(LOGIN_URL);
    });

    it('Успешный выбор роли', () => {
        cy.get('[autocomplete="username"]').type('XDsir');
        cy.get('[autocomplete="current-password"]').type('QWEasd123');

        cy.get('form').contains('button', ' Войти ').should('not.be.disabled').click();
        cy.wait(1000)
        cy.get('.page-nav__role-block button', { timeout: 10000 })
            .should('be.visible')
            .should('not.be.disabled')
            .click();
        cy.get('div').contains('p', 'Я являюсь студентом').should('not.be.disabled').click();
    });


});