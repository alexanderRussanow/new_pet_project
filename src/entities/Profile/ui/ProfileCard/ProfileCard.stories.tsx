import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { CountriesEnum } from 'entities/Counties';
import { CurrencyEnum } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = args => <ProfileCard { ...args } />;

export const Primary = Template.bind( {} );
Primary.args = {
    profile: {
        name: 'John Doe',
        lastname: 'Doe',
        avatar: 'https://i.pravatar.cc/150?img=1',
        username: 'johndoe',
        email: 'dfs@fsdf.cz',
        phone: '123456789',
        address: '1234 Street, City, Country',
        currency: CurrencyEnum.CHF,
        country: CountriesEnum.DE,
    },
};

export const Loading = Template.bind( {} );
Loading.args = {
    isLoading: true,
};
Loading.decorators = [
    ThemeDecorator( ThemeEnum.DARK ),
];

export const Error = Template.bind( {} );
Error.args = {
    error: 'Error',
};
Error.decorators = [
    ThemeDecorator( ThemeEnum.LIGHT )
];
