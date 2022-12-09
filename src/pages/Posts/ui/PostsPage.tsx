import { PostList, PostType } from 'entities/Post';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
// styles
import classes from './PostsPage.module.scss';

export interface PostPageProps {
    className?: string;
}

const post = {
    id: '1',
    title: 'React news 1',
    subtitle: 'TypeScript is awesome',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    date: '29-11-2020',
    views: 88888,
    likes: 88,
    author: 'John Doe',
    user: {
        id: '1',
        username: 'Jara the Master',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhs5csH1daXRNQLsG7OiZbTPvoNlHd0G0SDO1gD-Wfat9ELHkHo0nhTw610sh9IyqgyI&usqp=CAU',
    },
    tags: [
        'IT',
        'Web',
        'Design'
    ],
    content: [
        {
            id: '1',
            type: 'TEXT',
            title: 'what is TypeScript? How to use it with React?',
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
} as PostType;

const PostsPage: React.FC<PostPageProps> = ( { className } ) => {
    const { t } = useTranslation( 'post' );
    return (
        <div
            className={ classNames(
                classes.PostPage,
                {},
                [
                    className
                ] 
            ) }>
            <PostList
                posts={ new Array( 16 ).fill( 0 ).map( ( item, index ) => ( {
                    ...post,
                    id: `${ index }`,
                } ) ) }
            />
        </div>
    );
};

export default memo( PostsPage );
