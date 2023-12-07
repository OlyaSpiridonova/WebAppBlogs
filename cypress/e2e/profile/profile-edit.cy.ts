let profileId: string;

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'testUser');
    });
    it('Редактирование профиля', () => {
        const firstname = 'new';
        const lastname = 'lastname';
        cy.updateProfile(firstname, lastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', firstname);
        cy.getByTestId('ProfileCard.lastname').should('have.value', lastname);
    });
});
