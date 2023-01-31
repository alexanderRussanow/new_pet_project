let profileId: string;

describe(
    'edit profile data',
    () => {
        beforeEach( () => {
            cy.login().then( user => {
                profileId = user.id;
                cy.visit( `/profile/${ profileId }` );
            } );
        } );
        afterEach( () => {
            cy.resetProfile( profileId );
        } );

        it(
            'should open profile page',
            () => {
                cy.getByTestid( 'ProfileCard.ProfileName' ).should(
                    'have.value',
                    'Jara' 
                );
            } 
        );
        it(
            'should change profile name',
            () => {
                const newName = 'Jara2Test';
                const newLastName = 'Cimrman2Test';
                cy.updateProfileFirstAndLastname(
                    newName,
                    newLastName 
                );
                cy.getByTestid( 'ProfileCard.ProfileName' ).should(
                    'have.value',
                    newName 
                );
                cy.getByTestid( 'ProfileCard.ProfileLastname' ).should(
                    'have.value',
                    newLastName 
                );
            } 
        );
    } 
);
