import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Card } from './Card';
import { Text } from '../Text/Text';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card { ...args } />;

export const Primary = Template.bind( {} );
Primary.args = {
    children: <Text
        content='text text yo yo '
        title='test 1' />,
};

export const Dark = Template.bind( {} );
Dark.args = {
    children: <Text
        content='jee jee jee'
        title='test 2' />,
};
Dark.decorators = [
    ThemeDecorator( ThemeEnum.DARK )
];
