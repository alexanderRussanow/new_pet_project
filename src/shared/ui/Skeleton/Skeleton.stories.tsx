import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = args => <Skeleton { ...args } />;

export const Normal = Template.bind( {} );
Normal.args = {
    width: '100%',
    height: 200,
};

export const Circle = Template.bind( {} );
Circle.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};

export const NormalDark = Template.bind( {} );
NormalDark.args = {
    width: '100%',
    height: 200,
};
NormalDark.decorators = [
    ThemeDecorator( ThemeEnum.DARK )
];
export const CircleDark = Template.bind( {} );
CircleDark.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
CircleDark.decorators = [
    ThemeDecorator( ThemeEnum.DARK )
];


export const NormalViolet = Template.bind( {} );
NormalViolet.args = {
    width: '100%',
    height: 200,
};
NormalViolet.decorators = [
    ThemeDecorator( ThemeEnum.VIOLET )
];
export const CircleViolet = Template.bind( {} );
CircleViolet.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
CircleViolet.decorators = [
    ThemeDecorator( ThemeEnum.VIOLET )
];
