import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';

import { userActions } from 'entities/User';
import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { loginByUserName } from './loginByUsername';

describe('loginByUsername.test', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test('should be success post login and to run async sync action', async () => {
  //   const userValue = { username: '12345', id: 1 };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
  //   const action = loginByUserName({ username: '12345', password: '12345' });

  //   const result = await action(dispatch, getState, undefined);
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userValue);
  // });

  // test('should be post login error and status rejected', async () => {
  //   const userValue = { username: '12345', id: 1 };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUserName({ username: '12345', password: '12345' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe('rejectMessageLogin');
  // });

  test('should be success post login and to run async sync action', async () => {
    const userValue = { username: '12345', id: 1 };

    const thunk = new TestAsyncThunk(loginByUserName);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({ username: '12345', password: '12345' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('should be post login error and status rejected', async () => {
    const thunk = new TestAsyncThunk(loginByUserName);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '12345', password: '12345' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('rejectMessageLogin');
  });
});
