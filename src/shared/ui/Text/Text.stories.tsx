import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextSizeEnum } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text { ...args } />;

export const H1 = Template.bind( {} );
H1.args = {
    title: 'Text H1',
    size: TextSizeEnum.XL,
    content: 'Content for H1',
};

export const H2 = Template.bind( {} );
H2.args = {
    title: 'Text H2',
    size: TextSizeEnum.LARGE,
    content: 'Content for H2',
};

export const H3 = Template.bind( {} );
H3.args = {
    title: 'Text H3',
    size: TextSizeEnum.MEDIUM,
    content: 'Content for H3',
};

export const H4 = Template.bind( {} );
H4.args = {
    title: 'Text H4',
    size: TextSizeEnum.SMALL,
    content: 'Content for H4',
};
