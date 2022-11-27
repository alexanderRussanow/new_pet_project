import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CountriesSelect } from './CountriesSelect';

export default {
    title: 'entities/CountriesSelect',
    component: CountriesSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountriesSelect>;

const Template: ComponentStory<typeof CountriesSelect> = args => <CountriesSelect { ...args } />;

export const Primary = Template.bind( {} );
Primary.args = {
    value: 'US',
};
