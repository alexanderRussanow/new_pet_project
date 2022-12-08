import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentItem } from './CommentItem';

export default {
    title: 'entities/CommentItem',
    component: CommentItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = args => <CommentItem { ...args } />;

export const Normal = Template.bind( {} );
Normal.args = {
    comment: {
        text: 'Ahoj!!!!',
        id: 'wPq6tn0',
        user: {
            id: '1',
            username: 'jirka',
            avatar: 'https://avatars.dicebear.com/api/open-peeps/stefan.svg',
        },
    },
};

export const Loading = Template.bind( {} );
Loading.args = {
    isLoading: true,
};
