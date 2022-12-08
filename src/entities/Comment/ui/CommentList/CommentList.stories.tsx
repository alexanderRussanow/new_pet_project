import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = args => <CommentList { ...args } />;

export const Normal = Template.bind( {} );
Normal.args = {
    comments: [
        {
            text: 'Ahoj!!!!',
            id: 'wPq6tn0',
            user: {
                id: '1',
                username: 'jirka',
                avatar: 'https://avatars.dicebear.com/api/bottts/stefan.svg',
            },
        },
        {
            text: 'Ahoj z Zimmermanova! ',
            id: 'nsBx6UN',
            user: {
                id: '2',
                username: 'adam',
                avatar: 'https://avatars.dicebear.com/api/croodles/stefan.svg',
            },
        },
        {
            text: 'hey is new hele ',
            id: 'qXTYho_',
            user: {
                id: '3',
                username: 'tomas',
                avatar: 'https://avatars.dicebear.com/api/open-peeps/stefan.svg',
            },
        },
    ],
};

export const Loading = Template.bind( {} );
Loading.args = {
    comments: [],
    isLoading: true,
};
