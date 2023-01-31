import { ProfileType } from './../../../../src/entities/Profile/model/types/ProfileTypes';

export const updateProfileFirstAndLastname = ( firstName: string, lastName: string ) => {
    cy.getByTestid( 'EditableProfileCardHeader.EditButton' ).click();
    cy.getByTestid( 'ProfileCard.ProfileName' ).clear().type( firstName );
    cy.getByTestid( 'ProfileCard.ProfileLastname' ).clear().type( lastName );
    cy.getByTestid( 'EditableProfileCardHeader.SaveButton' ).click();
};

export const resetProfile = ( id: string ) => {
    return cy.request( {
        method: 'PUT',
        url: 'http://localhost:8000/profile/' + id,
        headers: {
            Authorization: 'ok',
        },
        body: {
            id: '1',
            name: 'Jara',
            lastname: 'Cimrman',
            email: 'jaracimrman@seznam.cz',
            phone: '8888',
            address: 'Cimrmanova 1, 123 45 Cimrmanov',
            city: 'Cimrmanov',
            zip: '123 45',
            country: 'Germany',
            currency: 'KRW',
            company: 'Cimrman s.r.o.',
            username: 'Jara "the Master"',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhs5csH1daXRNQLsG7OiZbTPvoNlHd0G0SDO1gD-Wfat9ELHkHo0nhTw610sh9IyqgyI&usqp=CAU',
        },
    } );
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfileFirstAndLastname( firstName: string, lastName: string ): Chainable<ProfileType>;
            resetProfile( id: string ): Chainable<void>;
        }
    }
}
