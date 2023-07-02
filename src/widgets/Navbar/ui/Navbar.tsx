import { FC } from 'react';

import { classNames } from "shared/classNames/classNames";

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';


interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>Главная</AppLink>

        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
      </div>
    </div>
  )
};
