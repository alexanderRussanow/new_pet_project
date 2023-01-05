import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = args => <Flex { ...args } />;

export const Row = Template.bind( {} );
Row.args = {
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </>
    ),
    align: 'center',
    justify: 'start',
    direction: 'row',
    gap: 'small',
};

export const Column = Template.bind( {} );
Column.args = {
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </>
    ),
    align: 'center',
    justify: 'start',
    direction: 'column',
    gap: 'large',
};
