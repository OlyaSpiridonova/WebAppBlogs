export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'auth' },
        body: {
            id: '4',
            first: 'testUser',
            lastname: 'User',
            age: 23,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'testUser',
            avatar: 'https://w7.pngwing.com/pngs/641/941/'
            + 'png-transparent-avatar-face-female-people-profile-user-woman-avatar-user-icon.png',
        },
    });
};

declare global {
    namespace Cypress {
      interface Chainable {
        updateProfile(firstname: string, lastname: string): Chainable<void>
        resetProfile(profileId: string): Chainable<void>
      }
    }
  }
