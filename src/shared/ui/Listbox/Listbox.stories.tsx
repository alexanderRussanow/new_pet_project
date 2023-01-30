import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Listbox } from './Listbox';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = args => <Listbox { ...args } />;

export const Primary = Template.bind( {} );
Primary.args = {
    label: 'Label',
    defaultValue: 'default',
    items: [
        {
            content: 'first',
            value: 'first',
        },
        {
            content: 'second',
            value: 'second',
        },
        {
            content: 'third',
            value: 'third',
        },
    ],
};
