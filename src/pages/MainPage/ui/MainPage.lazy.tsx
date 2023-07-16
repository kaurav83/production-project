import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-expect-error
  setTimeout(() => { resolve(import('./MainPage')); }, 1000);
}));
