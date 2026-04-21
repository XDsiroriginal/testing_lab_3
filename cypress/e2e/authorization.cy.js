describe('Авторизация', () => {
    const LOGIN_URL = 'https://dev.profteam.su/login';

    beforeEach(() => {
        cy.visit(LOGIN_URL);
    });

    it('Успешная авторизация с валидными данными', () => {
        cy.get('[autocomplete="username"]').type('qweqweqweqwe');
        cy.get('[autocomplete="current-password"]').type('QWEasd123');

        cy.get('form').contains('button', ' Войти ').should('not.be.disabled').click();
    });

    it('пустые обязательные поля', () => {
        cy.get('form').contains('button', ' Войти ').should('be.disabled');

        cy.get('[autocomplete="username"]').focus().blur();
        cy.get('[autocomplete="current-password"]').first().focus().blur();
    });

    it('неверные данные', () => {
        cy.get('[autocomplete="username"]').type('1');
        cy.get('[autocomplete="current-password"]').type('1');
        cy.get('form').contains('button', ' Войти ').should('be.disabled').click();
        cy.contains('Неверный логин или пароль, попробуйте заново.').should('be.visible');
    });
});