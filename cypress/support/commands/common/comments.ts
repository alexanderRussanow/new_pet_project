export const createNewComment = ( text: string ) => {
    cy.getByTestid( 'addNewCommentFormInput' ).type( text );
    cy.getByTestid( 'addNewCommentFormButton' ).click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            createNewComment( text: string ): Chainable<string>;
        }
    }
}
