import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = args => <Navbar { ...args } />;

export const Dark = Template.bind( {} );
Dark.args = {};
Dark.decorators = [
    ThemeDecorator( ThemeEnum.DARK )
];

export const Light = Template.bind( {} );
Light.args = {};
Light.decorators = [
    ThemeDecorator( ThemeEnum.LIGHT )
];
