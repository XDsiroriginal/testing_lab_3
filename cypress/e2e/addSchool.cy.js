describe('создание ЛК образовательной организации', () => {
    const LOGIN_URL = 'https://dev.profteam.su/login';

    beforeEach(() => {
        cy.visit(LOGIN_URL);
    });

    it('Успешная заявка', () => {
        cy.get('[autocomplete="username"]').type('XDsir');
        cy.get('[autocomplete="current-password"]').type('QWEasd123');

        cy.get('form').contains('button', ' Войти ').should('not.be.disabled').click();
        cy.wait(1000)
        cy.get('.page-nav__role-block button', { timeout: 3000 })
            .should('be.visible')
            .should('not.be.disabled')
            .click();
        cy.get('div').contains('p', 'Я являюсь представителем образовательной организации').should('not.be.disabled').click();
        cy.get('div').contains('p', 'Создание нового личного кабинета ОУ').should('not.be.disabled').click();

        cy.get('[placeholder="Название вашей организации"]').type('New workersы');
        cy.get('[placeholder="Адрес вашей организации"]').type('Уличка пушкина а дом калатушкаина');
        cy.get('[placeholder="Описание вашей организации"]').type('Описание организации');

        cy.get('.create-company-form__description-block button', { timeout: 2000 })
            .should('be.visible')
            .should('not.be.disabled')
            .click();
    });

    it('Данные пустые', () => {
        cy.get('[autocomplete="username"]').type('XDsir');
        cy.get('[autocomplete="current-password"]').type('QWEasd123');

        cy.get('form').contains('button', ' Войти ').should('not.be.disabled').click();
        cy.wait(1000)
        cy.get('.page-nav__role-block button', { timeout: 3000 })
            .should('be.visible')
            .should('not.be.disabled')
            .click();
        cy.get('div').contains('p', 'Я являюсь представителем образовательной организации').should('not.be.disabled').click();
        cy.get('div').contains('p', 'Создание нового личного кабинета ОУ').should('not.be.disabled').click();

    });
});