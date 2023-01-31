let postId: string;

describe(
    'Post details',
    () => {
        beforeEach( () => {
            cy.login();
            cy.createNewPost().then( post => {
                postId = post.id;
                cy.visit( `/posts/${ post.id }` );
            } );
        } );
        afterEach( () => {
            cy.deletePost( postId );
        } );
        it(
            'should open post',
            () => {
                cy.getByTestid( 'postDetailPage' ).should( 'exist' );
            } 
        );
        it(
            'should render post recommendation list',
            () => {
                cy.getByTestid( 'postRecommendations' ).should( 'exist' );
            } 
        );
        // it(
        //     'should add new comment to post',
        //     () => {
        //         cy.getByTestid( 'postDetailPage' ).should( 'exist' );
        //         cy.getByTestid( 'addNewCommentForm' ).scrollIntoView();
        //         cy.getByTestid( 'addNewCommentForm' ).should( 'exist' );

        //         cy.getByTestid( 'addNewCommentFormInput' ).type( 'This is a new comment' );
        //         cy.getByTestid( 'addNewCommentFormButton' ).click();

    //     }
    // );
    } 
);
