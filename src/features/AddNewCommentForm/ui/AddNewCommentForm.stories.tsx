import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { AddNewCommentForm } from '..';

export default {
    title: 'features/AddNewCommentForm',
    component: AddNewCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddNewCommentForm>;

const Template: ComponentStory<typeof AddNewCommentForm> = args => <AddNewCommentForm { ...args } />;

export const Normal = Template.bind( {} );
Normal.args = {
    onSendComment: action( 'onSendComment' ),
};
Normal.decorators = [
    StoreDecorator( {} )
];
