import { userActions, userReducer } from './userSlice';
import { UserSchema } from '../types/userSchema';

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: UserSchema = {};

    // expect(userReducer(state, userActions.decrement)).toEqual({ value: 9 });
  });

  test('increment', () => {
    const state: UserSchema = {};

    // expect(userReducer(state, userActions.increment)).toEqual({ value: 11 });
  });

  test('should work with undefined state', () => {
    // expect(userReducer(undefined, userActions.increment)).toEqual({ value: 1 });
  });
});
