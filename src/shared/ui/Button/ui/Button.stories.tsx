import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Button, ButtonThemeEnum } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button { ...args } />;

export const Primary = Template.bind( {} );
Primary.args = {
    children: 'Button',
};

export const Clear = Template.bind( {} );
Clear.args = {
    children: 'Clear',
    theme: ButtonThemeEnum.CLEAR,
};

export const Outline = Template.bind( {} );
Outline.args = {
    children: 'Outline',
    theme: ButtonThemeEnum.OUTLINE,
};
Outline.decorators = [
    ThemeDecorator( ThemeEnum.DARK )
];
