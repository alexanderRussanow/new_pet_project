import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PostListViewModeEnum, PostType } from 'entities/Post/model/types/PostType';
import { PostList } from './PostList';

export default {
    title: 'entities/PostList',
    component: PostList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PostList>;

const Template: ComponentStory<typeof PostList> = args => <PostList { ...args } />;

const post = {
    id: '1',
    user: {
        id: '1',
        username: 'John Doe',
    },
    title: 'React news 1',
    subtitle: 'TypeScript is awesome',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    date: '29-11-2020',
    views: 88888,
    likes: 88,
    author: 'John Doe',
    tags: [
        'IT',
        'Web',
        'Mobile'
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

export const LoadingGrid = Template.bind( {} );
LoadingGrid.args = {
    posts: [],
    isLoading: true,
    viewMode: PostListViewModeEnum.GRID,
};

export const LoadingList = Template.bind( {} );
LoadingList.args = {
    posts: [],
    isLoading: true,
    viewMode: PostListViewModeEnum.LIST,
};

export const Grid = Template.bind( {} );
Grid.args = {
    posts: new Array( 9 ).fill( 0 ).map( ( item, index ) => ( {
        ...post,
        id: String( index ),
    } ) ),
    isLoading: false,
    viewMode: PostListViewModeEnum.GRID,
};

export const List = Template.bind( {} );
List.args = {
    posts: new Array( 9 ).fill( 0 ).map( ( item, index ) => ( {
        ...post,
        id: String( index ),
    } ) ),
    isLoading: false,
    viewMode: PostListViewModeEnum.LIST,
};
