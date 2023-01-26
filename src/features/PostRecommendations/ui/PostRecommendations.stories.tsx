import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { PostType } from '@/entities/Post';
import { PostRecommendations } from './PostRecommendations';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
    title: 'features/PostRecommendations',
    component: PostRecommendations,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        withMock
    ],
} as ComponentMeta<typeof PostRecommendations>;

const Template: ComponentStory<typeof PostRecommendations> = args => <PostRecommendations { ...args } />;

const post: PostType = {
    id: '1',
    user: { id: '1', username: '123' },
    title: 'React',
    subtitle: '18.2.0',
    img: '',
    date: '2021-01-01',
    views: 123,
    likes: 777,
    author: 'Author',
    tags: [],
    content: [],
};

export const Normal = Template.bind( {} );
Normal.args = {};
Normal.decorators = [
    StoreDecorator( {} )
];
Normal.parameters = {
    mockData: [
        {
            url: `${ __API__ }/posts?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...post, id: '1' },
                { ...post, id: '2' },
                { ...post, id: '3' },
            ],
        },
    ],
};
