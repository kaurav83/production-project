import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage';

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
  'login/loginByUserName',
  async (authData, { dispatch, rejectWithValue, extra }) => {
    try {
      const response = await extra.api.post<User>('/login', { ...authData });

      if (!response.data) {
        throw new Error('error');
      }

      // @ts-ignore
      extra.navigate('/about');
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('rejectMessageLogin'));
    }
  },
);
