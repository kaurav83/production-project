import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, [className])}>
      {}
    </div>
  );
};
