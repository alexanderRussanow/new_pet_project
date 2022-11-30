import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PostContentTypeEnum, PostType } from 'entities/Post/model/types/PostType';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { PostDetails } from './PostDetails';

export default {
    title: 'entities/PostDetails',
    component: PostDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PostDetails>;

const Template: ComponentStory<typeof PostDetails> = args => <PostDetails { ...args } />;

const post: PostType = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'What is new in Javascript',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    date: '30.11.2022',
    author: 'Jara Cimrman',
    likes: 100,
    tags: [
        'IT',
        'Business'
    ],
    content: [
        {
            id: '1',
            type: PostContentTypeEnum.TEXT,
            title: 'What is new in Javascript',
            text: [
                'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.'
            ],
        },
        {
            id: '2',
            type: PostContentTypeEnum.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '3',
            type: PostContentTypeEnum.IMAGE,
            src: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        },
    ],
};

export const Normal = Template.bind( {} );
Normal.args = {};
Normal.decorators = [
    StoreDecorator( {
        post: {
            postData: post,
        },
    } ),
];

export const Loading = Template.bind( {} );
Loading.args = {};
Loading.decorators = [
    StoreDecorator( {
        post: {
            isLoading: true,
        },
    } ),
];

export const Error = Template.bind( {} );
Error.args = {};
Error.decorators = [
    StoreDecorator( {
        post: {
            error: 'Some error occured',
        },
    } ),
];
