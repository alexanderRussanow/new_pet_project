import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = args => <Tabs { ...args } />;

const tabs = [
    {
        label: 'All',
        content: 'ALL',
    },
    {
        label: 'IT',
        content: 'IT',
    },
    {
        label: 'Web',
        content: 'WEB',
    },
    {
        label: 'Design',
        content: 'DESIGN',
    },
    {
        label: 'Business',
        content: 'BUSINESS',
    },
    {
        label: 'Other',
        content: 'OTHER',
    },
];

export const Normal = Template.bind( {} );
Normal.args = {
    tabs: tabs,
    value: 'IT',
};


export const Dark = Template.bind( {} );
Dark.args = {
    tabs: tabs,
    value: 'Web',
};
Dark.decorators = [
    ThemeDecorator( ThemeEnum.DARK )
];
