import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar { ...args } />;

export const Primary = Template.bind( {} );
Primary.args = {
    size: 100,
    src: 'https://avatars.githubusercontent.com/u/1016786',
};

export const Default = Template.bind( {} );
Default.args = {
    src: 'https://avatars.githubusercontent.com/u/1016786',
};
