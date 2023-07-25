import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  const [isAuthModal, setAuthModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setAuthModal(false);
  }, [isAuthModal]);

  const handleShowModal = useCallback(() => {
    setAuthModal(true);
  }, []);

  return (
    <div className={classNames(cls.navbar, [className])}>
      <Button
        className={cls.enter}
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={handleShowModal}
      >
        {t('enter')}
      </Button>

      <LoginModal
        isOpen={isAuthModal}
        onClose={handleCloseModal}
      />
    </div>
  );
};
