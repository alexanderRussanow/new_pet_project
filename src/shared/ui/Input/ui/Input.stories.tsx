import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Input } from '..';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input { ...args } />;

export const Primary = Template.bind( {} );
Primary.args = {
    placeholder: 'passwod',
    value: 'username',
    autofocus: true,
};

export const Dark = Template.bind( {} );
Dark.args = {
    placeholder: 'passwod',
    value: 'passwod',
    autofocus: true,
};
Dark.decorators = [
    ThemeDecorator( ThemeEnum.DARK )
];
