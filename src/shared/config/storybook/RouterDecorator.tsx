import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { DecoratorFn } from '@storybook/react';

export const RouterDecorator: DecoratorFn = (story) => (
  <BrowserRouter>
    <>{story()}</>
  </BrowserRouter>
);