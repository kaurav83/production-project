import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls['login-form'], [className])}>
      <Input
        type="text"
        className={cls.input}
        placeholder={t('enterUsername')}
        autofocus
      />

      <Input
        type="text"
        className={cls.input}
        placeholder={t('enterPassword')}
      />

      <Button className={cls['login-btn']}>
        {t('enter')}
      </Button>
    </div>
  );
};
