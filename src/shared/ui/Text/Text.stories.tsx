import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Text title',
  description: 'Some text description',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Only title',
};

export const OnlyDescription = Template.bind({});
OnlyDescription.args = {
  description: 'Some text only description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Text title dark',
  description: 'Some text description dark',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Only title dark',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyDescriptionDark = Template.bind({});
OnlyDescriptionDark.args = {
  description: 'Some text only description dark',
};
OnlyDescriptionDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Error title text',
  description: 'Error text description',
  theme: TextTheme.ERROR,
};
