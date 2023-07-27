import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { loginByUserName } from '../../model/services/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className = '' }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username,
    password,
    isLoading,
    error,
  } = useSelector(getLoginState);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, password, username]);

  return (
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
  );
});
