import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage';

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', { ...authData });

      if (!response.data) {
        throw new Error('error');
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(i18n.t('rejectMessageLogin'));
    }
  },
);
