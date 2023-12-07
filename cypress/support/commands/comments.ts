export const addComment = (text: string) => {
    cy.getByTestId('addCommentForm.Input').type(text);
    cy.getByTestId('addCommentForm.Button').click();
};

declare global {
    namespace Cypress {
      interface Chainable {
        addComment(text: string): Chainable<void>
      }
    }
  }
