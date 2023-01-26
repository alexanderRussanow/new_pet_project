import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => (
    <div
        style={ {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        } }>
        <LoginForm { ...args } />
    </div>
);

export const Primary = Template.bind( {} );
Primary.decorators = [
    StoreDecorator( {
        login: {
            username: 'test',
            password: 'test',
        },
    } ),
];

export const Dark = Template.bind( {} );
Dark.decorators = [
    ThemeDecorator( ThemeEnum.DARK ),
    StoreDecorator( {
        login: {
            username: 'test2',
            password: 'test2',
        },
    } ),
];
