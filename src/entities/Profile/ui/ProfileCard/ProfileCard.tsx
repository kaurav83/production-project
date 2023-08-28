import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';

import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls['profile-card'], [className])}>
      <div className={cls.header}>
        <Text title={t('profile')} />

        <Button theme={ThemeButton.OUTLINE} className={cls['edit-btn']}>
          {t('edit')}
        </Button>
      </div>

      <div className={cls['profile-info']}>
        <Input
          value={data?.firstName}
          placeholder={t('yourName')}
          className={cls.field}
        />

        <Input
          value={data?.lastName}
          placeholder={t('yourLastName')}
          className={cls.field}
        />
      </div>
    </div>
  );
};
