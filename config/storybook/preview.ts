import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    StyleDecorator,
    RouterDecorator,
    TranslationDecorator,
    // ThemeDecorator(Theme.LIGHT),
  ],
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default preview;
