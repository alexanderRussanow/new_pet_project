import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal { ...args } />;

export const Primary = Template.bind( {} );
Primary.args = {
    isOpen: true,
    children: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
};

export const Dark = Template.bind( {} );
Dark.args = {
    isOpen: true,
    children: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
};
Dark.decorators = [
    ThemeDecorator( ThemeEnum.DARK )
];
