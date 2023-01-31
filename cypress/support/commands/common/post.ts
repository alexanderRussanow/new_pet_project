import { PostType } from './../../../../src/entities/Post/model/types/PostType';

const defaultPost = {
    id: '888',
    userId: '1',
    title: 'Python news',
    subtitle: 'What is new in Python 3.10?',
    img: 'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png',
    date: '2022-01-08',
    views: 435,
    likes: 35,
    author: 'Jara Cimrman',
    tags: [
        'IT',
        'Mobile'
    ],
    content: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Python new version available',
            text: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, tortor odio lacinia nisl, eget aliquam nisl justo eget mauris. Sed euismod, nisl vel tincidunt lacinia, tortor odio lacinia nisl, eget aliquam nisl justo eget mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, tortor odio lacinia nisl, eget aliquam nisl justo eget mauris. Sed euismod, nisl vel tincidunt lacinia, tortor odio lacinia nisl, eget aliquam nisl justo eget mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, tortor odio lacinia nisl, eget aliquam nisl justo eget mauris. Sed euismod, nisl vel tincidunt lacinia, tortor odio lacinia nisl, eget aliquam nisl justo eget mauris.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, tortor odio lacinia nisl, eget aliquam nisl justo eget mauris. Sed euismod, nisl vel tincidunt lacinia, tortor odio lacinia nisl, eget aliquam nisl justo eget mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, tortor odio lacinia nisl, eget aliquam nisl justo eget mauris. Sed euismod, nisl vel tincidunt lacinia, tortor odio lacinia nisl, eget aliquam nisl justo eget mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, tortor odio lacinia nisl, eget aliquam nisl justo eget mauris. Sed euismod, nisl vel tincidunt lacinia, tortor odio lacinia nisl, eget aliquam nisl justo eget mauris.',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            title: 'Content title 2',
            src: 'https://www.w3schools.com/w3images/woods.jpg',
            alt: 'Image',
        },
        {
            id: '3',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
    ],
};

export const deletePost = ( postId?: string ) => {
    return cy.request( {
        method: 'DELETE',
        url: 'http://localhost:8000/posts/' + ( postId ?? '888' ),

        headers: {
            Authorization: 'ok',
        },
    } );
};

export const createNewPost = ( post?: PostType ) => {
    return cy
        .request( {
            method: 'POST',
            url: 'http://localhost:8000/posts',
            headers: {
                Authorization: 'ok',
            },
            body: post ?? defaultPost,
        } )
        .then( ( { body } ) => body );
};

declare global {
    namespace Cypress {
        interface Chainable {
            deletePost( postId?: string ): Chainable<void>;
            createNewPost( post?: PostType ): Chainable<PostType>;
        }
    }
}
