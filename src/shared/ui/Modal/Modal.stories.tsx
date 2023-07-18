import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const PrimaryModal = Template.bind({});
PrimaryModal.args = {
  isOpen: true,
  children: 'TEST CONTENT FOR MODAL',
};
PrimaryModal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkModal = Template.bind({});
DarkModal.args = {
  isOpen: true,
  children: 'TEST CONTENT FOR MODAL',
};
DarkModal.decorators = [ThemeDecorator(Theme.DARK)];
