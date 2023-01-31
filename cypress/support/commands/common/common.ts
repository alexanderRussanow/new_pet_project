import { USER_LS_KEY } from '../../../../src/shared/const/localStorage';
import { UserType } from '../../../../src/entities/User';

export const login = ( username = 'Jara', password = 'cimrman' ) => {
    return cy
        .request( {
            method: 'POST',
            url: 'http://localhost:8000/login',
            body: {
                username,
                password,
            },
        } )
        .then( ( { body } ) => {
            window.localStorage.setItem(
                USER_LS_KEY,
                JSON.stringify( body ) 
            );
            return body;
        } );
};

export const getByTestid = ( id: string ) => cy.get( `[data-testid="${ id }"]` );

declare global {
    namespace Cypress {
        interface Chainable {
            login( username?: string, password?: string ): Chainable<UserType>;
            getByTestid( id: string ): Chainable<HTMLElement>;
        }
    }
}
