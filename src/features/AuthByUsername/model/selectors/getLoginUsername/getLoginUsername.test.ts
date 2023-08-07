import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('login username', () => {
  test('should return value username', () => {
    const state = {
      loginForm: {
        username: '12345',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('12345');
  });

  test('should work with empty state', () => {
    const state = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
