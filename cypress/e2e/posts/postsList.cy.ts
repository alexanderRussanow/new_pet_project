describe(
    'shoud open posts list',
    () => {
        beforeEach( () => {
            cy.login().then( () => cy.visit( 'posts' ) );
        } );
        it(
            'open posts list',
            () => {
                cy.getByTestid( 'postsList' ).should( 'exist' );
                cy.getByTestid( 'postListItem' ).should(
                    'have.length.at.least',
                    3 
                );
            } 
        );
    } 
);
