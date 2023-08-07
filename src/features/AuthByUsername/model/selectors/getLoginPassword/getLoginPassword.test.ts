import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('login password', () => {
  test('should return value password', () => {
    const state = {
      loginForm: {
        password: '12345',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('12345');
  });

  test('should work with empty state', () => {
    const state = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
