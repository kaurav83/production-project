import { DeepPartial } from '@reduxjs/toolkit';

import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '12345',
    };

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('14785'),
    )).toEqual({ username: '14785' });
  });

  test('set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '54321',
    };

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('99999'),
    )).toEqual({ password: '99999' });
  });
});
