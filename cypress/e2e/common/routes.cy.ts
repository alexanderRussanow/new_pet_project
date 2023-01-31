describe(
    'routes',
    () => {
        describe(
            'user is not authentificated',
            () => {
                it(
                    'should visit the home page',
                    () => {
                        cy.visit( '/' );
                        cy.getByTestid( 'homePage' ).should( 'exist' );
                    } 
                );
                it(
                    'shoud redirect to home page if user is not logged in',
                    () => {
                        cy.visit( '/profile/1' );
                        cy.getByTestid( 'homePage' ).should( 'exist' );
                    } 
                );
                it(
                    'should redirect to 404 page',
                    () => {
                        cy.visit( '/dfsdfsdfsdf' );
                        cy.getByTestid( 'page404' ).should( 'exist' );
                    } 
                );
            } 
        );
        describe(
            'user is authentificated',
            () => {
                beforeEach( () => {
                    cy.login(
                        'Jara',
                        'cimrman' 
                    );
                } );
                it(
                    'should visit the profile page',
                    () => {
                        cy.visit( '/profile/1' );
                        cy.getByTestid( 'profilePage' ).should( 'exist' );
                    } 
                );
                it(
                    'should redirect to posts page',
                    () => {
                        cy.visit( '/posts' );
                        cy.getByTestid( 'postsPage' ).should( 'exist' );
                    } 
                );
            } 
        );
    } 
);
