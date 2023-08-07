import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginLoading } from './getLoginLoading';

describe('login loading', () => {
  test('should return true', () => {
    const state = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state = {};
    expect(getLoginLoading(state as StateSchema)).toEqual(false);
  });
});
