import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { CountriesEnum } from 'entities/Counties';
import { CurrencyEnum } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = args => <ProfilePage { ...args } />;

export const Primary = Template.bind( {} );
Primary.args = {};
Primary.decorators = [
    StoreDecorator( {
        profile: {
            profileData: {
                name: 'John Doe',
                lastname: 'Doe',
                username: 'johndoe',
                email: 'dfs@fsdf.cz',
                avatar: 'https://i.pravatar.cc/150?img=1',
                city: 'City',
                company: 'Company',
                id: '1',
                zip: '12345',
                phone: '123456789',
                address: '1234 Street, City, Country',
                currency: CurrencyEnum.CHF,
                country: CountriesEnum.DE,
            },
        },
    } ),
];

export const Dark = Template.bind( {} );
Dark.args = {};
Dark.decorators = [
    ThemeDecorator( ThemeEnum.DARK ),
    StoreDecorator( {
        profile: {
            profileData: {
                name: 'John Doe',
                lastname: 'Doe',
                username: 'johndoe',
                email: 'dfs@fsdf.cz',
                avatar: 'https://i.pravatar.cc/150?img=1',
                city: 'City',
                company: 'Company',
                id: '1',
                zip: '12345',
                phone: '123456789',
                address: '1234 Street, City, Country',
                currency: CurrencyEnum.CHF,
                country: CountriesEnum.DE,
            },
        },
    } ),
];
