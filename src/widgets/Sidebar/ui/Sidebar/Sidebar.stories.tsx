import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar { ...args } />;

export const Dark = Template.bind( {} );
Dark.args = {};
Dark.decorators = [
    ThemeDecorator( ThemeEnum.DARK ),
    StoreDecorator( {
        user: {
            authData: {
                id: '1',
                username: 'John Doe',
            },
        },
    } ),
];

export const Light = Template.bind( {} );
Light.args = {};
Light.decorators = [
    ThemeDecorator( ThemeEnum.LIGHT ),
    StoreDecorator( {
        user: {
            authData: {
                id: '1',
                username: 'John Doe',
            },
        },
    } ),
];

export const NoAuth = Template.bind( {} );
NoAuth.args = {};
NoAuth.decorators = [
    StoreDecorator( {
        user: {
            authData: {},
        },
    } ),
];
