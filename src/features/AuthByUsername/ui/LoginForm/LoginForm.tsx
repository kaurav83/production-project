import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { loginByUserName } from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className = '', onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginLoading);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleSubmit = useCallback(async () => {
    const result = await dispatch(loginByUserName({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, password, username, onSuccess]);

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <div className={classNames(cls['login-form'], [className])}>
        <Text
          title={t('authForm')}
        />

        {error && (
          <Text title={error} theme={TextTheme.ERROR} />
        )}

        <Input
          type="text"
          className={cls.input}
          placeholder={t('enterUsername')}
          autofocus
          onChange={handleChangeUsername}
          value={username}
        />

        <Input
          type="text"
          className={cls.input}
          placeholder={t('enterPassword')}
          onChange={handleChangePassword}
          value={password}
        />

        <Button
          className={cls['login-btn']}
          theme={ThemeButton.OUTLINE}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {t('enter')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
