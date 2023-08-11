import { lazy } from 'react';

export const ProfilePageLazy = lazy(() => new Promise((resolve) => {
  // @ts-expect-error
  setTimeout(() => { resolve(import('./ProfilePage')); }, 1000);
}));
