import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { getUserData, userActions } from 'entities/User';

import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string
}

export const Navbar = memo(({ className = '' }: INavbarProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isAuthModal, setAuthModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setAuthModal(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setAuthModal(true);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
    navigate('/');
  }, [dispatch, navigate]);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, [className])}>
        <Button
          className={cls.enter}
          theme={ThemeButton.CLEAR_INVERTED}
          onClick={handleLogout}
        >
          {t('logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, [className])}>
      <Button
        className={cls.enter}
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={handleShowModal}
      >
        {t('enter')}
      </Button>

      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
});
