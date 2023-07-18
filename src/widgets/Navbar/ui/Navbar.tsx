import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  const [isAuthModal, setAuthModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setAuthModal(!isAuthModal);
  }, [isAuthModal]);

  return (
    <div className={classNames(cls.navbar, [className])}>
      <Button
        className={cls.enter}
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={handleToggleModal}
      >
        {t('enter')}
      </Button>

      <Modal
        isOpen={isAuthModal}
        onClose={handleToggleModal}
      >
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <div>
          TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEX TEXT TEXT
          TEXT TEXT TEXT TEXT TEXT TEX TEXT TEXT TEXT TEXT
          TEXT TEXT TEXT TEX TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEX
          TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEX TEXT TEXT
          TEXT TEXT TEXT TEXT TEXT TEX TEXT TEXT TEXT TEXT
          TEXT TEXT TEXT TEX TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEX
          TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEX TEXT TEXT
          TEXT TEXT TEXT TEXT TEXT TEX TEXT TEXT TEXT TEXT
          TEXT TEXT TEXT TEX TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEX
          TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEX TEXT TEXT
          TEXT TEXT TEXT TEXT TEXT TEX TEXT TEXT TEXT TEXT
          TEXT TEXT TEXT TEX TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEX
          TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEX TEXT TEXT
          TEXT TEXT TEXT TEXT TEXT TEX TEXT TEXT TEXT TEXT
          TEXT TEXT TEXT TEX TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEX
        </div>
      </Modal>
    </div>
  );
};
