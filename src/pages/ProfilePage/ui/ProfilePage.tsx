import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { profileReducer } from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation('main');

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <div>
        {t('mainPage')}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
