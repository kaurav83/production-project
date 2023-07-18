import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, SizeButton, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  children: 'Text outline light',
  theme: ThemeButton.OUTLINE,
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
};

export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: SizeButton.M,
};
SquareM.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: SizeButton.L,
};
SquareL.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: SizeButton.XL,
};
SquareXL.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
  size: SizeButton.M,
};
OutlineSizeM.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
  size: SizeButton.L,
};
OutlineSizeL.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
  size: SizeButton.XL,
};
OutlineSizeXL.decorators = [ThemeDecorator(Theme.LIGHT)];
