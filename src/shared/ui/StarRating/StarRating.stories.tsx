import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = args => <StarRating { ...args } />;

export const Normal = Template.bind( {} );
Normal.args = {};

export const Dark = Template.bind( {} );
Dark.args = {};
Dark.decorators = [
    ThemeDecorator( ThemeEnum.DARK )
];

export const Violet = Template.bind( {} );
Violet.args = {};
Violet.decorators = [
    ThemeDecorator( ThemeEnum.VIOLET )
];
